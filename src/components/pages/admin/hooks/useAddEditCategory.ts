import { schema, type categorySchema } from "../categories/schema";
import { useMutation } from "@tanstack/react-query";
import { privateApi } from "../../../../api/axios";
import type { Option } from "../../../../types/commonTypes";
import { fetchAllCategories } from "../queries/allAdminQueries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGeneric } from "./useGenericState";
import { useImagePreview } from "./useImagePreview";

export default function useAddEditCategory(categoryId?: string) {
    const {setSnackbarState, navigate, errorMessage, setErrorMessage} = useGeneric()

    const {imagePreview,setImagePreview, handleFileChange} = useImagePreview()
    let optionList = [] as Option[];
    
    const {isLoading:categoryLoading,error:categoryError,data} = fetchAllCategories({})
    
    const formMethod = useForm<categorySchema>({
            mode: "all",
            resolver: zodResolver(schema),
            defaultValues:{
                name:'',
                parent:[],
                image:undefined
            }
        });

    const getApiConfig = () => {
        if (categoryId) {
            return  {
                url: `categories/${categoryId}/edit`,
                method: privateApi.patch,
                successMessage: "Category edited Successfully.",
            };
        }
        return  {
                url: "categories",
                method: privateApi.post,
                successMessage: "Category created Successfully.",
            };
    };

    const { url, method, successMessage } = getApiConfig();
    
    const mutation = useMutation({
        mutationFn: async (formData: FormData) => {
        const { data } = await method(url, formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            },
        });
        return data;
        },
        onSuccess: (data) => {
            setSnackbarState({
                open: true,
                message: data?.message ?? successMessage,
            });
            navigate("/admin/categories");
        },
        onError: (error) => {
            setErrorMessage(error.message);
        },
    });

    const getFormData = (form: categorySchema): FormData => {
        const formData = new FormData();
        formData.append("name", form.name)
        formData.append("parent", JSON.stringify(form.parent??[]))
        if (Array.isArray(form.image) && form.image[0] instanceof File) {
            formData.append("image", form.image[0]);
        }
        return formData;
    };
    
    const onSubmit = (form: categorySchema) => {
        mutation.mutate(getFormData(form))
    };

    
    return {
        onSubmit,
        mutation,
        imagePreview,
        errorMessage,
        optionList,
        categoryLoading,
        categoryError,
        data,
        formMethod,
        handleFileChange,
        setImagePreview,
        navigate
    };
}
