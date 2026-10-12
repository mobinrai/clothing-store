import type React from "react"
import type { SnackbarCloseReason, SxProps } from "@mui/material"
import type {
  Control,
  ControllerFieldState,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
} from "react-hook-form"
import type { Dispatch, ReactNode, SetStateAction } from "react"
import type { ProductItem } from "../components/pages/admin/types"

export type titleType = string

export type nameType = string

export type phoneType = number

export type email = string

export type roleType = "admin" | "users" | "seller"

export type Option = { id: string; label: string; value: string }

export type isDeleted = { isDeleted?: boolean }

export type ImageItemPreview={ name: string; lastModified?: number; imageUrl: string,imageId?:string, isNew:boolean}

export type ImageType={ imageId: string; imageUrl: string, name:string }

export type ImagePreviewType ={[x: string]: ImageItemPreview[]}

export type withChildren = { children?: ReactNode }

export type withControl<T extends FieldValues> = { control?: Control<T> }

export type withFormRegister<T extends FieldValues> = {
    register: UseFormRegister<T>
};

export type onFileChange = (
    fileOrFiles: File | File[] | FileList,
    fieldName: string,
    multipleImage?:boolean
) => File[]

export type withName<T extends FieldValues> = { name: Path<T> }

export type withSxProps = { sx?: SxProps }

export type CommonCustomFormControllerProps<T extends FieldValues> = {
    options: Option[]
    label?: string
    placeholder?:string
    selectedId?: string
    handleClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    multiple?:boolean
} & withSxProps &
  withControl<T> &
  withName<T>;

export type ShowShoppingOrSearchContent = "shoppingCart" | "searchForm";

export interface baseType {
    _id?: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

export type SnackBarStates = {
    open: boolean;
    message: string;
};

export type SnackBarContextType = {
    snackbarState: SnackBarStates;
    setSnackbarState: Dispatch<SetStateAction<SnackBarStates>>;
    handleClose: (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => void;
}

export type CustomSelectProps<T>={
    options:Array<Option>
    onChange:()=>void
    label?:string
    value:PathValue<T, Path<T>>
}


export type PaginationType ={
    currentPage?:number
    hasNextPage?:boolean
    hasPrevPage?:boolean
    nextPage?:number
    totalPages?:number
}

export type handleRemoveImage<T>={
    handleRemoveImage?:(name:Path<T>, image:ImageItemPreview)=>void
}

export type ImageUploadAndPreviewProps<T extends FieldValues> = {
    name: string
    fieldName: Path<T>
    images: ImagePreviewType
    multipleImage?: boolean
    imageClasses?: string
    handleFileChange: onFileChange
} & withControl<T>&handleRemoveImage<T>

export type CustomAutoCompleteProps<T extends FieldValues>={
    options: Option[];
    onChange: (newValue: string[]|string) => void;
    fieldState: ControllerFieldState;
    value: PathValue<T, Path<T>>;
    label: string
    placeholder?:string
    multiple?:boolean
}

export type ShoppingCartItem={
    _id:string
    user:string,
    items:[
        {
            product:ProductItem
            quantity:number
            price:number
        }
    ]
    totalPrice:number
    totalItems:number
}

type selectedSizeType={
        id:string,
        name:string,
        stock: number;
    }

export type SizeAndColorProps = {
    selectedProduct: ProductItem | null;
    selectedSize: selectedSizeType | null;
    sizes: Array<selectedSizeType>;
    selectedColor:{
        id: string;
        name: string;
        stock: number;
        price: number;
        }|null
    setSelectedSize: React.Dispatch<
        React.SetStateAction<selectedSizeType | null>
    >;
    setSelectedColor: React.Dispatch<
        React.SetStateAction<{
        id: string;
        name: string;
        stock: number;
        price: number;
        } | null>
    >;
    
    };