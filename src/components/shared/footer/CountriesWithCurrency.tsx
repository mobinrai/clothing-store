import { MenuItem, Select, Stack, Typography } from '@mui/material'

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
    return (
        <Select value={countries[0].code} sx={{minWidth:'60%', mb:1}}>
            {
                countries.map((country, index)=>{
                    return <MenuItem key={`${country.name}-${index}`} value={country.code}>
                        <Stack direction={'row'} gap={1}>
                            <img src={`https://flagcdn.com/w20/${country.code}.png`} alt={country.name}/>
                        <Typography variant="caption">{country.name} - {country.currency}</Typography>
                        </Stack>
                    </MenuItem>
                })
            }
        </Select>
    )
}

export default CountriesWithCurrency