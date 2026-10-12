import { Stack } from "@mui/material"
import type {ImageUploadAndPreviewProps} from "../../../types/commonTypes"
import { type FieldValues, type Path } from "react-hook-form"
import CustomImageController from "../../customController/CustomImageController"
import ImagePreview from "./ImagePreview"

const ImageUploadAndPreview = <T extends FieldValues>({
    name,
    images,
    fieldName,
    imageClasses,
    multipleImage = false,
    handleFileChange,
    handleRemoveImage,
    control,
}: ImageUploadAndPreviewProps<T>) => {
    return (
        <Stack gap={4}>
        <CustomImageController<T>
            name={name as Path<T>}
            control={control}
            multipleImage={multipleImage}
            handleFileChange={handleFileChange}
            fieldName={fieldName}
        />
        <ImagePreview imageClasses={imageClasses} multipleImage={multipleImage} fieldName={fieldName} images={images} handleRemoveImage={handleRemoveImage}/>
        </Stack>
    )
}

export default ImageUploadAndPreview
