import { Controller, type FieldValues } from 'react-hook-form';
import type { onFileChange, withControl, withName } from '../../types/commonTypes';
import { Button, FormHelperText, Stack } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import { getErrorMessage } from '../../utils/common';
import { ALLOWED_IMAGE_TYPES, ALLOWED_SIZE } from '../pages/admin/adminUtils';

type CustomImageControllerProps <T extends FieldValues>= {
    multipleImage?:boolean
    handleFileChange:onFileChange
    fieldName:string
}&withControl<T>&withName<T>

const CustomImageController = <T extends FieldValues>({
    control,
    name,
    fieldName,
    multipleImage=false,
    handleFileChange
    }:CustomImageControllerProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState:{error}}) =>
                {
                    return <Stack width='1'>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUpload />}
                        sx={{width:'1'}}>
                        Upload file
                        <input
                            type="file"
                            accept={ALLOWED_IMAGE_TYPES.join(",")}
                            max={ALLOWED_SIZE}
                            className="hidden"
                            onChange={(e) => {
                                const files = e.target.files;
                                if (!files?.length) return
                                handleFileChange(files, fieldName, multipleImage)
                                if(multipleImage){
                                    onChange([...value, ...Array.from(files)]);
                                }else{
                                    onChange(Array.from(files))
                                }
                                e.target.value=''
                            }}
                            multiple={multipleImage}
                        />
                    </Button>
                    <FormHelperText sx={{ color: red[900] }}>
                    {error? getErrorMessage(error):''}
                    </FormHelperText>
                </Stack>
                }
            }
          />
        )
}

export default CustomImageController