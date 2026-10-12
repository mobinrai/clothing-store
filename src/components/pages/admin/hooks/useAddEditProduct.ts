import { useForm } from "react-hook-form"
import { defaultProductValues, productFormSchema, type ProductFormValues } from "../products/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { fetchAllCategories } from "../queries/allAdminQueries"
import { useGeneric } from "./useGenericState"
import useApiMutation from "../../../../api/useApiMutation"
import { getFormFieldArray } from "../share/listArray"
import type { ProductItem } from "../types"
import { privateApi } from "../../../../api/axios"
import { useQuery } from "@tanstack/react-query"

const useAddEditProduct = (id?:string) => {
    const method = useForm<ProductFormValues>({
            mode: "all",
            resolver: zodResolver(productFormSchema),
            defaultValues: defaultProductValues,
        })
    const pageTitle = id? "Edit Product":"Add new Product"
    const {isLoading,data} = fetchAllCategories({})

    const {setSnackbarState, errorMessage,navigate, setErrorMessage} = useGeneric()
    
    const cbSuccess = (data:any)=>{
        setSnackbarState({
                open:true,
                message:data?.message
        })
        navigate('/admin/products')
    }

    const cbError = (error:Error)=>{
        setErrorMessage(error.message)
    }
    const {
                isFetching,
                data: product,
                error: fetchError,
            } = useQuery({
                queryKey: ["singleProduct", id],
                queryFn: async () => {
                const { data } = await privateApi.get<ProductItem>(`/products/${id}`);
                return data.data;
                },
                enabled: !!id,
            });
    const getConfig=()=>{
        if(!id){
            return {
                url:'products',
                apiMethod:'post' as const
            }
        }
        return {
            url:`products/${id}/edit`,
            apiMethod:'patch' as const
        }
    }

    const {url, apiMethod}= getConfig()

    const {mutate, isPending} = useApiMutation({cbSuccess, cbError})

    const formFieldArrys = getFormFieldArray(method.formState.errors)
   
    const getFormData=(data:ProductFormValues)=>{
        const tagsArray = data.tag.split(',').filter(item=>item).map(tag=>tag.trim())
        const materialArray = data.material.split(',').filter(item=>item).map(material=>material.trim())
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('brand', data.brand)
        formData.append('basePrice', data.basePrice.toString())
        formData.append('discount', data.discount.toString())
        formData.append('tags', JSON.stringify(tagsArray))
        formData.append('materials', JSON.stringify(materialArray))
        formData.append('description', data.description)
        formData.append('storedMainImages', JSON.stringify(data.storedMainImages))
        formData.append('deletedMainImageIds', JSON.stringify(data.deletedMainImageIds??[]))
        formData.append('category', data.category)
        formData.append('shipmentDays', JSON.stringify(data.shipmentDays))
        formData.append('deletedVariantImageIds', JSON.stringify(data.deletedVariantImageIds??[]))
        formData.append('storedVariantImages', JSON.stringify(data.storedVariantImages))
        formData.append('variants', JSON.stringify(data.variants.map(variant=>{
            return {
                ...variant,
                images:[]
            }
        })))
        data.variants.forEach((variant, index)=>{
            variant.images?.forEach((image, imageIndex)=>{
                formData.append(`variant-${index}-image-${imageIndex}`, image)
            })
            
        })
        data?.mainImages && data?.mainImages.forEach(image=>{
            formData.append('mainImages', image)
            }
        )
        return formData
    }
    const onSubmit = (data: ProductFormValues) => {
        mutate({
            methodName:apiMethod,
            data:getFormData(data),
            url:url,
            axiosConfig:{
                headers:{
                    "Content-Type": "multipart/form-data",
                }
            }
        })
    }

    return {
        isFetching,
        fetchError,
        product,
        method,
        formFieldArrys,
        isLoading,
        data,
        isPending,
        errorMessage,
        pageTitle,
        onSubmit,
        navigate
    }
}

export default useAddEditProduct