import { MenuItem, Select, Stack, Typography, type SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

const Languages = () => {
    const languages=[
        {
            code:'de',
            name:'Deutsch'
        },
        {
            code:'gb',
            name:'English'
        },
        {
            code:'fr',
            name:'francais'
        }
    ]
    const [selectedValue, setSelectedValue] = useState('de')
    return (
        <Select value={selectedValue} sx={{minWidth:'30%', mb:1}} onChange={(event:SelectChangeEvent)=>{
            setSelectedValue(event.target.value);
        }}>
            {
                languages.map((language, index)=>{
                    return <MenuItem key={`${language.name}-${index}`} value={language.code}>
                        <Stack direction={'row'} gap={1}>
                            <img src={`https://flagcdn.com/w20/${language.code}.png`} alt={language.name}/>
                        <Typography variant="caption" color='#8f8f8f'>{language.name}</Typography>
                        </Stack>
                    </MenuItem>
                })
            }
        </Select>
    )
}

export default Languages