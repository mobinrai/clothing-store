import { Grid } from '@mui/material'
import type { ImageUploadAndPreviewProps } from '../../../types/commonTypes'
import type { FieldValues} from 'react-hook-form'
import RemoveImage from './RemoveImage'

const ImagePreview = <T extends FieldValues>({images, fieldName, imageClasses, multipleImage, handleRemoveImage}:Omit<ImageUploadAndPreviewProps<T>, 'control'|'name'|'handleFileChange'>) => {
    return (    
        <Grid container gap={2}>
            {images[fieldName] &&
            images[fieldName].map((image, index) => {
                return (
                <Grid
                    key={`${image.lastModified}-${image.name}-${index}`}
                    size={2}
                    textAlign={'center'}
                    justifyItems={'center'}
                >
                    <img src={image.imageUrl ?? import.meta.env.VITE_IMAGEKIT_NO_IMAGE_AVAILABLE}
                    className={`mb-4 h-20 ${imageClasses??''}`}
                    />
                    {
                        multipleImage && <RemoveImage image={image} fieldName={fieldName} handleRemoveImage={handleRemoveImage}/>
                    }
                </Grid>
                )
            })}
        </Grid>
    )
}

export default ImagePreview