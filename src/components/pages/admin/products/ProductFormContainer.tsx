import { useEffect } from "react";
import AdminSection from "../share/AdminSection";
import { type ProductFormValues } from "./schema";
import ProductForm from "./ProductForm";
import ProductVariants from "./ProductVariants";
import Loader from "../../../shared/Loader";
import { transformArrayForOptions } from "../../../../utils/common";
import type { ImageItemPreview, Option } from "../../../../types/commonTypes";
import type { CategoryType, VariantsType } from "../types";
import useAddEditProduct from "../hooks/useAddEditProduct";
import { useLocation, useParams } from "react-router";
import { FormProvider } from "react-hook-form";
import StyledButton from "../../../shared/styled/StyledButton"
import { Add, Cancel } from "@mui/icons-material"
import { red, teal } from "@mui/material/colors"
import { rotateEndIcon } from "../../../../utils/common"
import { Stack } from "@mui/material";

const ProductFormContainer = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation()
    const {
        formFieldArrys,
        isLoading,
        data,
        isPending,
        errorMessage,
        pageTitle,
        method,
        product,
        isFetching,
        fetchError,
        onSubmit,
        navigate,
    } = useAddEditProduct(id);


    useEffect(() => {
        if (id && product) {
            const variants = product.variants.map((variant:VariantsType)=>{
                return {
                    ...variant,
                    images:[]
                }
            })
            method.reset({
                ...product,
                mainImages:[],
                storedMainImages:product.mainImages.map((img:ImageItemPreview)=>({
                        ...img,
                        isNew:false}
                )),
                category: product.category._id,
                tag: product.tags.join(",").trim(),
                material: product.materials.join(","),
                deletedMainImageIds:[],
                variants
            });
        }
    }, [id, method.reset, product]);

    if (isLoading || isFetching) return <Loader />;

    if (fetchError) return <h6>{fetchError.message}</h6>;

    let parentList: Option[] = [
        {label: "",value: "",id: ""},
    ];

    if (data?.categories.length) {
        parentList = transformArrayForOptions(
        data?.categories.filter((item): item is CategoryType & { _id: string } =>
            item._id !== undefined,
        ),
        );
    }
    return (
        <Stack key={location.pathname}>
            <AdminSection sectionClassName="">
                {isPending ? "" : <AdminSection.Title title={pageTitle} />}
                <AdminSection.Content>
                {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                {isPending ? (
                    <Loader />
                ) : (
                    <FormProvider {...method}>
                    <form action="" onSubmit={method.handleSubmit(onSubmit)}>
                        <ProductForm<ProductFormValues>
                        formFieldArrys={formFieldArrys}
                        optionList={parentList}
                        product={product}>
                        <ProductVariants product={product} />
                        {/* 
                            button section
                        */}
                        <Stack direction={'row'} gap={2}>
                            <StyledButton
                            type="submit"
                            endIcon={<Add />}
                            bgColor={teal[500]}
                            hoverBackgroundColor={teal[900]}
                            sx={{ ...rotateEndIcon, width: "20%" }}
                            >
                            { id ? 'Edit':'Add'} product
                            </StyledButton>
                            <StyledButton
                            endIcon={<Cancel />}
                            bgColor={red[500]}
                            hoverBackgroundColor={red[900]}
                            sx={{ ...rotateEndIcon, width: "20%" }}
                            onClick={()=>navigate(-1)}
                            >
                            Cancel
                            </StyledButton>
                        </Stack>
                        </ProductForm>
                    </form>
                    </FormProvider>
                )}
                </AdminSection.Content>
            </AdminSection>
        </Stack>
    );
};

export default ProductFormContainer;
