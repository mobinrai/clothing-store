import { Container, Stack } from "@mui/material"
import { Link, useNavigate } from "react-router"
import StyledButton from "../shared/styled/StyledButton"

const Page404 = () => {
    const navigate= useNavigate()
    return (
        <section className="h-lvh">
            <Container maxWidth={false}>
                <Stack alignItems={'center'} justifyContent={'center'} sx={{height:'100vh'}}>
                    <h6 className="text-[200px]"><span className="text-orange-500">4</span>0<span className="text-orange-500">4</span></h6>
                    <h6 className="font-bold uppercase text-3xl">Ooops!! page not found</h6>
                    <h6 className="font-bold mt-4">page you are looking for not found</h6>
                    <Stack direction={'row'} gap={2} alignItems={'center'} sx={{position:'relative'}}>
                        <Link to={'/'} className="mt-4">
                            <StyledButton hoverBackgroundColor="#ff6900">Home Page</StyledButton>
                        </Link>
                        <StyledButton hoverBackgroundColor="#ff6900" 
                        sx={{height:38, mt:2}} onClick={()=>navigate(-1)}>Go Back</StyledButton>
                    </Stack>
                </Stack>
            </Container>
        </section>
    )
}

export default Page404