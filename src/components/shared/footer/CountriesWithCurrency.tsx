import { MenuItem, Select, Stack, Typography, type SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

const CountriesWithCurrency = () => {
    const countries=[
        {
            name:'Germany',
            code:'de',
            currency:'Euro'
        },
        {
            name:'United Kingdom',
            code:'gb',
            currency:'Pound'
        },
        {
            name:'Canada',
            code:'ca',
            currency:'Cad'
        },
    ]
    const [selectedCountry, setSelectedCountry] = useState('de')
    return (
        <Select value={selectedCountry} sx={{minWidth:'60%', mb:1}} onChange={(event:SelectChangeEvent)=>setSelectedCountry(event.target.value)}>
            {
                countries.map((country, index)=>{
                    return <MenuItem key={`${country.name}-${index}`} value={country.code}>
                        <Stack direction={'row'} gap={1}>
                            <img src={`https://flagcdn.com/w20/${country.code}.png`} alt={country.name}/>
                        <Typography variant="caption" color='#8f8f8f'>{country.name} - {country.currency}</Typography>
                        </Stack>
                    </MenuItem>
                })
            }
        </Select>
    )
}

export default CountriesWithCurrency