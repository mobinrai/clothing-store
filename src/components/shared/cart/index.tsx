import { Container, Grid, Paper, Stack, TextField } from '@mui/material'
import SectionTitle from '../section/SectionTitle'
import StyledButton from '../styled/StyledButton'
import Payments from "@assets/payments.avif"
import Tshirt1 from "@images/products/t-shirt-1.jpg"
import { Delete } from '@mui/icons-material'
import { Link } from 'react-router'
import MyTableHead from './MyTableHead'
import MyDataCells from './MyDataCells'

const Cart = () => {
    const tableHeadList=['product', 'qty', 'price']
    return (
        <section className="cart my-20">
            <Container maxWidth={false}>
                <SectionTitle sectionTitle='Your shopping cart'/>
                <Grid container columnSpacing={{xs:0, md:4}} rowSpacing={{xs:4, md:0}}>
                    <Grid size={{xs:12,md:8}}>
                        <table className='cart-details-table w-full shadow-xl'>
                            <thead>
                                <tr>
                                    <MyTableHead style={{background:'red'}} tableHeadList={tableHeadList}/>
                                </tr>
                            </thead>                                
                            <tbody>
                                <tr className='border-b border-gray-200 text-center'>
                                    <MyDataCells>
                                        <Stack direction={'row'} alignItems={'center'} gap={2} width={'50%'}>
                                            <img src={Tshirt1} alt="" className='w-28'/>
                                            <h6 className='text-xl capitalize inline-block'> product 1</h6>
                                        </Stack>
                                    </MyDataCells>
                                    <MyDataCells>123</MyDataCells>
                                    <MyDataCells>
                                        <Delete sx={{cursor:'pointer', '& :hover':{color:'red'}}}/>
                                    </MyDataCells>
                                </tr>
                            </tbody>
                        </table>

                    </Grid>
                    <Grid size={{xs:12,md:4}}>
                        <Paper sx={{bgcolor:'#f3f3f3ba', py:2, px:3}}>
                            <h6 className='text-sm mb-1'>I have a promotional code:</h6>
                            <form action="">
                                <Stack gap={1}>
                                    <TextField placeholder='Enter the promotional code here' sx={{bgcolor:'#fff'}}/>
                                    <StyledButton type='submit' sx={{borderRadius:'5px'}}>Redeem</StyledButton>
                                </Stack>
                            </form>
                            <Stack gap={3} my={3}>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <h6>Regular price</h6>
                                    <span>123</span>
                                </Stack>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <h6>Shipment</h6>
                                    <span>free</span>
                                </Stack>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <h6>Return Shipping</h6>
                                    <span>free</span>
                                </Stack>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <h6>Total amount including VAT.</h6>
                                    <b>123</b>
                                </Stack>
                                <Link to={'/checkout'} className='flex'>
                                    <StyledButton type='submit' sx={{borderRadius:'5px', textTransform:'capitalize', width:'100%'}} bgColor='var(--color-bg)' textColor='#000'>proceed To checkout</StyledButton>
                                </Link>
                                <img src={Payments} alt="" className='w-1/2'/>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Cart