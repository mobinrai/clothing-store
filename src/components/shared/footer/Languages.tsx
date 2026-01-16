import { MenuItem, Select, Stack, Typography } from '@mui/material'

const Languages = () => {
    const languages=[
        {
            code:'de',
            name:'deutsch'
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
    return (
        <Select value={languages[0].code} sx={{minWidth:'30%', mb:1}}>
            {
                languages.map((language, index)=>{
                    return <MenuItem key={`${language.name}-${index}`} value={language.code}>
                        <Stack direction={'row'} gap={1}>
                            <img src={`https://flagcdn.com/w20/${language.code}.png`} alt={language.name}/>
                        <Typography variant="caption">{language.name}</Typography>
                        </Stack>
                    </MenuItem>
                })
            }
        </Select>
    )
}

export default Languages