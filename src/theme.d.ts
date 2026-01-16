import '@mui/material/styles'

declare module '@mui/material/styles'{
    interface Theme{
        spacing:(value:number|string)=>string
    }
    interface ThemeOptions {
        spacing?:(value:number|string)=>string
    }
}