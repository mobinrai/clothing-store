import { Box, Divider, Slider, Stack } from "@mui/material"
import CustomTextField from "../../../customController/CustomTextField"
import { Controller, useFormContext, type FieldValues, type Path } from "react-hook-form"
import type {
    ImageItemPreview,
    ImageType,
    Option,
    withChildren,
} from "../../../../types/commonTypes"
import type { FormFieldConfig } from "./shared"
import { useEffect } from "react"
import { useImagePreview } from "../hooks/useImagePreview"
import type { ProductItem } from "../types"
import CustomImageController from "../../../customController/CustomImageController"
import ImagePreview from "../../../shared/imageUploadAndPreview/ImagePreview"
import CustomAutoCompleteWrapper from "../../../customController/CustomAutoCompleteWrapper"

type ProductFormProps= {
    formFieldArrys: FormFieldConfig
    optionList:Option[]
    product:ProductItem
} & withChildren

const ProductForm = <T extends FieldValues>({
    formFieldArrys,
    optionList,
    product,
    children
}: ProductFormProps) => {
    const {control, register, watch,getValues, setValue} = useFormContext<T>()
    const { imagePreview:mainImages, setImagePreview:setMainImages,createPreviewFromFile, handleFileChange:mainImageHandle } = useImagePreview()
    let watchMainImages = watch('mainImages' as Path<T>)
    const storedMainImagePath = 'storedMainImages' as Path<T>
    const storedMainImages = getValues(storedMainImagePath)
    const fieldPath = 'deletedMainImageIds' as Path<T>
    const deletedMainImageIds= getValues(fieldPath)
    
    useEffect(()=>{
        if(product){
        const result:ImageItemPreview[] = product.mainImages.map((img:ImageType)=>{
            return {
                name:img.name,
                imageUrl:img.imageUrl,
                imageId:img.imageId,
                isNew:false
            }
        })
        setMainImages({"mainImages":result})
    }
    },[product])

    const handleRemoveImage = (name:Path<T>, image:ImageItemPreview)=>{
        let result:ImageItemPreview[] =[]
        let currentResult:ImageItemPreview[] =[]
            if(name === 'mainImages'){
                if(!(image.isNew) && image.imageId){
                    result = storedMainImages.filter((img:ImageItemPreview)=>img.imageId!==image.imageId)
                    currentResult= watchMainImages.length>0?[...result,...createPreviewFromFile(watchMainImages),]:result
                    setValue(storedMainImagePath, result as any)
                    setValue(fieldPath,[...deletedMainImageIds,image.imageId] as any)
                }else{
                    watchMainImages =  watchMainImages.filter((element:ImageItemPreview)=>element.name!=image.name)
                    result = createPreviewFromFile(watchMainImages)
                    currentResult= storedMainImages.length?[...result,...storedMainImages]:result
                    setValue(name, watchMainImages)
                }
            setMainImages(prev=>{                
                return {
                    ...prev,
                    [name]:currentResult
                }
            })
        }
    }
    return (
            <Stack gap={3}>
                {/* display all the form fields */}
                {formFieldArrys.map((fields, index) => {
                    return (
                        <CustomTextField<T>
                        key={`${fields.name}-${index}`}
                        register={register}
                        name={fields.name as Path<T>}
                        placeHolder={fields.placeHolder}
                        label={fields.label}
                        error={fields.error}
                        multiline={fields?.multiline}
                        fieldType={fields.type}
                        />
                    )
                })}
                <Controller
                name={"shipmentDays" as Path<T>}
                control={control}
                render={({ field: { onChange, value }})=>{
                    return <Box sx={{paddingX:3}}>
                        <h6 className="text-[#00000099] text-[14px] space-x-0.5 -ml-2">Shipping Days *</h6>
                        <Slider
                            value={value}
                            onChange={(_, newValue: number[])=>{
                                onChange(newValue)
                            }}
                            valueLabelDisplay="auto"
                            disableSwap
                            min={2}
                            max={30}
                            marks={[
                            { value: 2, label: '2 days' },
                            { value: 5, label: '5 days' },
                            { value: 10, label: '10 days' },
                            { value: 15, label: '15 days' },
                            { value: 20, label: '20 days' },
                            { value: 25, label: '25 days' },
                            { value: 30, label: '30 days' },
                            ]}/>
                    </Box>
                }}/>
                {/* Image upload and preview */}
                <ImagePreview images={mainImages} fieldName={'mainImages' as Path<T>} handleRemoveImage={handleRemoveImage} multipleImage/>
                <CustomImageController fieldName="mainImages" control={control} name={'mainImages' as Path<T>} handleFileChange={mainImageHandle} multipleImage/>
                
                <CustomAutoCompleteWrapper
                name={"category" as Path<T>}
                options={optionList}
                label="Category"
                placeholder="Search category"
                control={control}
                multiple={false}
                />
                {children}
                <Divider />
            </Stack>
    )
}

export default ProductForm