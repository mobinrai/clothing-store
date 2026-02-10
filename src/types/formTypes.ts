import type { SxProps } from "@mui/material";
import type React from "react";
import type { FieldError,  FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface CustomFormProps<T extends FieldValues> {
    name:Path<T>,
    register: UseFormRegister<T>;
    error?: FieldError;
}

export interface CustomTextFieldProps<T extends FieldValues> extends CustomFormProps<T> {
    label?:string,
    placeHolder:string,
    sx?:SxProps,
    icon?:React.ReactElement,
    required?:boolean
}