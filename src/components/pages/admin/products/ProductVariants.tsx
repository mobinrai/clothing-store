import { Box, Stack} from "@mui/material";
import StyledButton from "../../../shared/styled/StyledButton";
import { Add, Remove } from "@mui/icons-material";
import { rotateEndIcon } from "../../../../utils/common";
import { green } from "@mui/material/colors";
import CustomTextField from "../../../customController/CustomTextField";
import ImageUploadAndPreview from "../../../shared/imageUploadAndPreview";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { useImagePreview } from "../hooks/useImagePreview";
import type { ProductFormValues } from "./schema";
import type { ProductItem } from "../types";
import type { ImageItemPreview, ImageType } from "../../../../types/commonTypes";
import { getSizes } from "../adminUtils";
import CustomSelectFormController from "../../../customController/CustomSelectFormController";
import { getColors } from "../share/listArray";
import CustomAutoCompleteWrapper from "../../../customController/CustomAutoCompleteWrapper";

type ProductVariantComponentProp={
    product:ProductItem
}

const ProductVariants = ({product}:ProductVariantComponentProp) => {
    const {control,register,getValues,setValue, watch} = useFormContext<ProductFormValues>()
    const {
            fields: variantFields,
            append: appendVariant,
            remove: removeVariant,
            update:UpdateVariant
        } = useFieldArray<ProductFormValues, "variants">({
            control,
            name: "variants",
        })
    const { imagePreview:variantImages,removeImage, setImagePreview, createPreviewFromFile, handleFileChange} = useImagePreview();
    const watchVariants = watch('variants')
    const storedVariantImages = getValues('storedVariantImages')
    const deletedVariantImagePath ='deletedVariantImageIds'
    const deletedVariantImageIds=getValues(deletedVariantImagePath)

    const handleRemoveImage=(name:string, image:ImageItemPreview)=>{
        const variantIndex=Number(name.split('.')[1])
        const currentVariant = watchVariants[variantIndex]
        let result:ImageItemPreview[]=[]
        let currentResult:ImageItemPreview[] =[]
        if(!(image.isNew) && storedVariantImages){
            result = storedVariantImages[name].filter(img=>img.imageId!=image.imageId).map(item=>({...item, isNew:false}))
            currentResult= currentVariant && currentVariant.images?.length?[...result,...createPreviewFromFile(currentVariant.images)]:result
            setValue('storedVariantImages',{[name]:result} as any)
            setValue(deletedVariantImagePath,[...(deletedVariantImageIds??[]), image.imageId] as any)
        }
        else if(currentVariant && currentVariant.images?.length)
        {
            const filteredResult = currentVariant.images.filter((img)=>{
                return img.name!==image.name
            })
            result = createPreviewFromFile(filteredResult)
            currentResult= storedVariantImages && storedVariantImages[name]?[...result,...storedVariantImages[name] as any]:result
            UpdateVariant(variantIndex,{
                ...currentVariant,
                images:filteredResult
            })
        }
        setImagePreview(prev=>{
                return {
                    ...prev,
                    [name]:currentResult
                }
        })
    }
    useEffect(()=>{
        if(product){
            let resultObj:Record<string, ImageItemPreview[]> = {}
            product?.variants.forEach((variant, index)=>{
                const result:ImageItemPreview[] = variant.images.map((img:ImageType)=>{
                    return {
                        name:img.name,
                        imageUrl:img.imageUrl,
                        imageId:img.imageId,
                        isNew:false
                    }
                })
                resultObj[`variants.${index}`] = result
            })
            setImagePreview(resultObj)
            setValue('storedVariantImages',resultObj as any)
        }
    },[product])

    return (
        <div className="space-y-4">
            <Stack direction={"row"} alignItems={"center"}>
                <h3 className="font-bold text-2xl mr-4">Variants</h3>
                <StyledButton
                    sx={rotateEndIcon}
                    bgColor={green[600]}
                    hoverBackgroundColor={green[900]}
                    onClick={() =>
                        appendVariant({
                        size: "",
                        color:[],
                        stock: 0,
                        sku: "",
                        images: [],
                        price: 0,
                        })
                    }
                    endIcon={<Add />}
                >
                    Add Variants
                </StyledButton>
            </Stack>
            {variantFields.map((field, index) => (
                <Box key={field.id} className="border p-4 rounded-md space-y-3 mt-2">
                    {
                        index > 0 && <Stack direction={"row"} justifyContent={"space-between"}>
                            <h3 className="text-xl font-bold">Variant {index + 1}</h3>
                            <StyledButton
                            sx={rotateEndIcon}
                            endIcon={<Remove />}
                            bgColor={green[700]}
                            onClick={() => {
                                removeImage(`variants.${index}`)
                                removeVariant(index);
                            }}
                            >
                            Remove
                            </StyledButton>
                        </Stack>
                    }
                
                    <Box sx={{display:'grid', gap:1, gridTemplateColumns:'repeat(4, minmax(150px, 1fr))'}}>
                        <CustomSelectFormController
                            name={`variants.${index}.size`}
                            options={getSizes()}
                            selectedId={""}
                            label="Size"
                            control={control}
                            sx={{}}
                            />
                            <CustomTextField
                            name={`variants.${index}.stock`}
                            register={register}
                            placeHolder="Enter stock"
                            fieldType="number"
                            label="Stock"
                            />
                            <CustomTextField
                                name={`variants.${index}.sku`}
                                register={register}
                                placeHolder="Enter Sku"
                                label="Sku"
                                required={false}
                                />
                            <Box>
                            <CustomAutoCompleteWrapper
                                name={`variants.${index}.color`}
                                options={getColors().map(color=>{
                                    return {label:color.name, id:color.value, value:color.value}
                                })}
                                label="Color"
                                control={control}
                                multiple
                />
                            </Box>
                            <CustomTextField
                                name={`variants.${index}.price`}
                                register={register}
                                placeHolder="Enter price"
                                fieldType="number"
                                label="Price"
                                />
                    </Box>
                    <Stack flex={1}>
                    <ImageUploadAndPreview
                        control={control}
                        name={`variants.${index}.images`}
                        multipleImage
                        handleFileChange={handleFileChange}
                        images={variantImages}
                        fieldName={`variants.${index}`}
                        handleRemoveImage={handleRemoveImage}
                    />
                    </Stack>
                </Box>
            ))}
        </div>
    );
}

export default ProductVariants