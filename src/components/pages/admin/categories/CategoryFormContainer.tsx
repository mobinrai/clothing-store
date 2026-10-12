import type { CategoryType } from "../types"
import { useParams } from "react-router"
import React from "react"
import useAddEditCategory from "../hooks/useAddEditCategory"
import { transformArrayForOptions } from "../../../../utils/common"
import Loader from "../../../shared/Loader"
import AdminSection from "../share/AdminSection"
import { FormProvider } from "react-hook-form"
import CategoryForm from "./CategoryForm"
import { type categorySchema } from "./schema"
import { Stack } from "@mui/material"
import { fetchSingleCategory } from "../queries/allAdminQueries"

const CategoryFormContainer = () => {
    const {id} = useParams<{id:string}>()
     let {
            onSubmit,
            handleFileChange,
            setImagePreview,
            imagePreview,
            errorMessage,
            mutation,
            optionList,
            categoryLoading,
            categoryError,
            data,
            formMethod,
            navigate,
        } = useAddEditCategory(id)

    const { isLoading, error, data:Category } = fetchSingleCategory(id)

    React.useEffect(() => {
        if (Category) {       
            formMethod.reset({
                name: Category.name,
                image: undefined,
                parent: Category.parent.map(p => typeof p === "string" ? p : p._id).filter((id): id is string => !!id)||[],
                oldImage:Category.image
            })
            setImagePreview({'category':[{name: Category.image?.name, imageUrl: Category.image?.imageUrl, isNew:false}] })
        }
    }, [Category])

    if (isLoading || categoryLoading) {
        return <Loader/>
    }

    if (error || categoryError) {
        return <h6>{error?.message || categoryError?.message}</h6>
    }

    if (data?.categories.length) {
        optionList = transformArrayForOptions(data?.categories.filter((category):category is CategoryType & {_id:string}=> category._id !==undefined))
    }
    return (
        <Stack>
            <AdminSection sectionClassName="category py-10 px-3">
                { !mutation.isPending && <AdminSection.Title title={"Add new Category"}></AdminSection.Title>}
                <AdminSection.Content>
                    {
                        mutation.isPending ? <Loader/>:
                        <FormProvider {...formMethod}>
                        <form action="" onSubmit={formMethod.handleSubmit(onSubmit)}>
                            <CategoryForm<categorySchema>
                            imagePreview={imagePreview}
                            optionList={optionList}
                            errorMessage={errorMessage}
                            handleFileChange={handleFileChange}
                            navigate={navigate}
                        />
                        </form>
                    </FormProvider>
                    }                    
                </AdminSection.Content>
            </AdminSection>
        </Stack>
    )
}

export default CategoryFormContainer