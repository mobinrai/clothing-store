import type { SxProps } from "@mui/material";
import type React from "react";
import type { FieldError,  FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface CustomFormProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    error?: FieldError;
    name:Path<T>,
}

export interface FormFieldProps<T>{
    name:Path<T>,
    label?:string,
    placeHolder:string,
    required?:boolean,
    multiline?:boolean,
    fieldType?: "number" | "text";
}

export interface CustomTextFieldProps<T extends FieldValues> extends CustomFormProps<T>, FormFieldProps<T>{
    sx?:SxProps,
    icon?:React.ReactElement,
    
}