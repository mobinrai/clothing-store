import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import type { FieldValues, Path } from 'react-hook-form'
import type { handleRemoveImage, ImageItemPreview } from '../../../types/commonTypes'

type RemoveImageProps<T>={
    image:ImageItemPreview
    fieldName:Path<T>
}&handleRemoveImage<T>

const RemoveImage = <T extends FieldValues>({image,handleRemoveImage, fieldName}:RemoveImageProps<T>) => {
    return (
        <IconButton aria-label="delete" color="primary" sx={{'&:hover':{color:red[700]}}}
            onClick={()=>{
                if(handleRemoveImage && typeof handleRemoveImage ==='function'){
                    handleRemoveImage(fieldName, image)
                }
            }}>
                    <Delete/> <span className="text-sm ml-2"> {image.name}</span>
            </IconButton>
    )
}

export default RemoveImage