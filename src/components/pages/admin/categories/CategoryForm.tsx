import { Stack } from "@mui/material";
import CustomTextField from "../../../customController/CustomTextField";
import { get, useFormContext, type FieldValues, type Path } from "react-hook-form";
import SubmitCancelButtons from "../share/SubmitCancelButtons";
import type { CategoryFormProps } from "../types";
import ImageUploadAndPreview from "../../../shared/imageUploadAndPreview";
import React from "react";
import CustomAutoCompleteWrapper from "../../../customController/CustomAutoCompleteWrapper";

const CategoryForm = <T extends FieldValues>({
    optionList,
    imagePreview,
    errorMessage,
    handleFileChange,
    navigate,
}: CategoryFormProps) => {
    const {register, control, formState:{errors}, setError, clearErrors} = useFormContext<T>()
    const handleBlur=(event:React.FocusEvent<HTMLInputElement>)=>{
        const result = optionList.filter(option=>option.label.toLowerCase()===event.target.value.trim().toLowerCase())
        if(result.length){
            setError('name'  as Path<T>, {message:'Category name already exists', type:"onBlur"},{shouldFocus:true})
        }
    }
    const handleChange=()=>{
        if(errors.name?.type==='onBlur'){
            clearErrors('name'  as Path<T>)
        }
    }
    return (
        <React.Fragment>
            {errorMessage && <span className="text-red-500 text-sm font-bold">{errorMessage}</span>}
            <Stack gap={4} sx={{mt:2}}>
                <CustomTextField<T>
                placeHolder="enter category name"
                name={"name" as Path<T>}
                label="Category Name"
                register={register}
                error={get(errors, "name" as Path<T>)}
                onBlur={handleBlur}
                onChange={handleChange}
                />
                
                <CustomAutoCompleteWrapper control={control} options={optionList} name={"parent" as Path<T>} multiple label="Search parent"/>
                <ImageUploadAndPreview<T> name="image" control={control} images={imagePreview} handleFileChange={handleFileChange}
                    fieldName={"category" as Path<T>}/>
                <SubmitCancelButtons navigate={navigate}/>
            </Stack>
        </React.Fragment>
    );
};

export default CategoryForm;
