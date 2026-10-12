import type { FieldError } from "react-hook-form";

export type FormFieldConfig={
    name:string,
    label?:string,
    placeHolder:string,
    required?:boolean,
    multiline?:boolean,
    type?: "number" | "text";
    error:FieldError
}[]