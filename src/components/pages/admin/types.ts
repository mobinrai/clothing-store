import type { NavigateFunction } from "react-router";
import type { baseType, onFileChange, isDeleted, Option,ImagePreviewType, ImageType, PaginationType} from "../../../types/commonTypes";
import type { FieldValues, UseFormHandleSubmit} from "react-hook-form"

export interface RoleTypes extends baseType {
    isDeleted?:boolean;
}

export type VariantsType={
    _id?:string
    size: string,
    color: Array<string>,
    sku:string,
    price: number,
    stock: number,
    images: Array<ImageType>,
}

export interface ProductItem extends baseType {
    name:string,
    description:string,
    brand:string,
    tags:Array<string>,
    materials:string[],
    mainImages:Array<ImageType>,
    variants:Array<VariantsType>
    category:{name:string}
    basePrice:number,
    discount:number,
    shipmentDays:[],
    isFeatured:boolean,
    ratingAverage:number,
    ratingCount:number,
    slug?:string,
    [key:string]:any
}

export interface ProductResponse{
    success:boolean,
    pagination?:PaginationType
    products:ProductItem[]
}


export interface baseGenericType{
    id:string,
    newText:string,
    image?:string
}

export type handleFormSubmit<T extends FieldValues>={
    handleSubmit:UseFormHandleSubmit<T>
}

export type CategoryFormProps={
    optionList:Option[],
    handleFileChange:onFileChange,
    errorMessage:string
    imagePreview:ImagePreviewType,
    navigate:NavigateFunction
}

export type actionName='delete'|'edit'|'restore'

type CommonDisplayProps={
    editId:string;
    updatedText:string;
    handlePatch:(id:string, name:actionName)=>void;
    handleUpdate:(id:string)=>void;
    handleCancel:()=>void;
    handleTextChange:(value:string)=>void
}

export type DisplayRolesProps={
    roles:RoleTypes[];
}&CommonDisplayProps

export interface Parent{
    _id?:string,
    name?:string,
    image?:string
}

export interface CategoryType extends baseType {
    isDeleted?:boolean
    image:ImageType
    parent:Array<Parent|string>
}

export type CriteriaNameType='limit'|'page'|'search'|'sortBy'

export type CriteriaType={
    limit?:number,
    page?:number,
    search?:string,
    sortBy?:string,
    orderBy?:'asc'|'desc',
    activeCriteriaName?:CriteriaNameType
}

export type CategoryTableProps={

    data:{
        pagination?: PaginationType;
        categories: CategoryType[];
    }
    pending:boolean
    criteria:CriteriaType
    ref:React.RefObject<HTMLInputElement | null>
    handleDelete:(id:string)=>void
    navigate:NavigateFunction
    handleCriteriaChange:(value:string|number, name:CriteriaNameType)=>void
}


export type ActionTableCellProps={
    id:string;
    isEditing:boolean;    
    handlePatch:(id:string, name:actionName)=>void;
    handleUpdate:(id:string)=>void;
    handleCancel:()=>void;
}&isDeleted

export type variantItemType={
        size?: string;
        color?:string;
        stock:number;
        sku:string;
        images?:File[];
        price:number
    }



export type SideLinkListType=Record<string, Array<{title:string, icon:React.JSX.Element, linkTo:string}>>