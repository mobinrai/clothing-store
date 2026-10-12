import { useEffect, useState } from "react";
import type { ImageItemPreview, ImagePreviewType } from "../../../../types/commonTypes";

export function useImagePreview() {
    const [imagePreview, setImagePreview] = useState<ImagePreviewType>({})
    const [fieldName, setFieldName] = useState<string| undefined>('')

    useEffect(()=>{

        return ()=>{
            if(fieldName){
                const imagesToRemove = imagePreview[fieldName]
                if(!imagesToRemove) return;
                imagesToRemove.forEach(img=>{
                    URL.revokeObjectURL(img.imageUrl)
                })
            }
            
        }
    },[imagePreview, fieldName])

    const handleFileChange=(fileOrFiles:File|File[]| FileList, fieldName:string, multipleImage:boolean=false):File[]=>{
        
        const files = Array.isArray(fileOrFiles)
        ? fileOrFiles
        : fileOrFiles instanceof File
        ? [fileOrFiles]
        : Array.from(fileOrFiles)
        
        const previewResult = createPreviewFromFile(files)
        setImagePreview(prev=>{
            const result = multipleImage? [...(prev[fieldName]|| []), ...previewResult]:[...previewResult]
            return{
                ...prev,
                [fieldName]:result,
            }
        })
        setFieldName(fieldName)
        return files
    }

    function createPreviewFromFile(files:File[]){
        return files.map(file=>{
            return {
                name:file.name,
                lastModified:file.lastModified,
                imageUrl:URL.createObjectURL(file),
                isNew:true
            }
        })
    }

    const removeImage = (fieldName:string)=>{
        if(!(imagePreview as Record<string, ImageItemPreview[]>)[fieldName]) return;
        setImagePreview((prev)=>{
            const prevRecord = prev as Record<string, ImageItemPreview[]>
            const {[fieldName]:removed, ...rest} = prevRecord
            return rest
            
        })
    }
    return {
        imagePreview,
        setImagePreview,
        handleFileChange,
        createPreviewFromFile,
        removeImage
    }
}