import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.tsx'
import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MySnackBarProvider } from './provider/MySnackBarProvider.tsx'
import { ImageKitProvider } from '@imagekit/react';
import GlobalModalProvider from './provider/GlobalModal.tsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <ImageKitProvider urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL}>
                        <GlobalModalProvider>
                            <MySnackBarProvider>
                                <RouterProvider router={router}/>
                            </MySnackBarProvider>
                        </GlobalModalProvider>                        
                    </ImageKitProvider>
            </ThemeProvider>
        </QueryClientProvider>
        
    </StrictMode>,
)
