import { CardTravel } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { Link, Outlet } from "react-router"

const CheckoutLayout = () => {
    return (
        <>
            <header className="py-4 bg-gray-200 border-gray-200 border-b ">
                <div className="max-w-300 mx-auto pb-2 px-10 md:px-20 lg:px-0">
                    <Stack direction={{xs:'column', sm:'row'}} justifyContent={'space-between'}>
                        <Link to={'/'}>
                            <h1 className="font-bold"><span className="text-red-500 text-2xl -mr-1 italic">Clothing</span> Store</h1>
                        </Link>
                        <Stack direction={'row'} gap={2}>
                            continue shopping
                            <CardTravel/>
                        </Stack>                        
                    </Stack>
                </div>                
            </header>
            <Outlet/>
        </>
    )
}

export default CheckoutLayout