import CustomLink from '../styled/CustomLink'
import MyImageKit from '../imageKit'
import SingleProductDetails from '../singleProductDetails'
import type { ProductItem } from '../../pages/admin/types'
import { Box, Stack } from '@mui/material'
import CustomToolTip from '../imageKit/CustomToolTip'
import StyledButton from '../styled/StyledButton'
import { ArrowForward } from '@mui/icons-material'
import GlobalModal, { useGlobalModal } from '../../../provider/GlobalModal'
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import SizeAndColor from '../sizeandcolor'
import { MotionBox } from '../motion'
import { red } from '@mui/material/colors'
import useSelectProduct from '../../../hooks/useSelectProduct'
import AddToButton from '../addToCartBtns'


const DisplayProductAndDetails = ({products}:{products:ProductItem[]}) => {
    const {isModalOpen, handleOpenModal, handleCloseModal} = useGlobalModal()
    const {sizes,selectedProduct, selectedSize,selectedColor, selectedQty, setSelectedQty,setSelectedProduct, setSelectedSize,setSelectedColor} = useSelectProduct()
    const handleAddToCart=(product:ProductItem)=>{
       setSelectedProduct(product)
        handleOpenModal()
    }
    useEffect(()=>{
        if(!isModalOpen){
            setSelectedProduct(null)
        }
    },[isModalOpen])
    return (
        <React.Fragment>
            <Box sx={{display:'grid', paddingX:1, gap:1, gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))',}}>
            {
                products.map(product=>{
                    return <Box  key={product._id} sx={{transition: 'box-shadow 0.3s ease-in-out', minHeight:610, ':hover':{boxShadow:6}}} >
                        <Box sx={{position:'relative'}}>
                            <CustomLink href={`/product/${product.slug}`} className="productImageLink">
                                <Box sx={{position:'relative'}}>
                                    <Box sx={{
                                        height: 400, 
                                        width: '100%', 
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}>
                                        <MyImageKit imageUrl={product.mainImages[0].imageUrl}/>
                                    </Box>
                                    <CustomToolTip/>                        
                                </Box>
                            </CustomLink>
                        </Box>
                        <StyledButton
                            className="productAddToCart"
                            bgColor="white"
                            textColor="black"
                            sx={{
                                bottom: 10,
                                minWidth:'90%',
                                left: '0%',
                                borderRadius:'0 !important',
                                transform:"translateY(15px)",
                                transition:".5s",
                                opacity:1,
                                zIndex:99,
                                mx:2
                            }}
                            endIcon={<ArrowForward />}
                            onClick={()=>handleAddToCart(product)}>
                            Add to cart
                        </StyledButton>
                        <SingleProductDetails data={product}/>
                    </Box>
                })
            }
        </Box>
         {selectedProduct &&
         <GlobalModal.Content sx={{}}>
              <MotionBox sx={{ display: 'grid',width:'900px', bgcolor:'white', gridTemplateColumns: 'repeat(2, 1fr)', height: '700px' }}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}>
                <Box sx={{ padding:2, flex: 1, height: '100%', overflow: 'hidden' }}>
                        {
                            selectedProduct.mainImages.length >1 
                            ?
                            <Swiper
                                loop={true}
                                autoplay={true}
                                modules={[Autoplay]}
                                className='w-full h-full object-cover'
                            >
                                {
                                    selectedProduct.mainImages.map(item => (
                                    <SwiperSlide key={`select-slider-${item.imageId}`}>
                                        <MyImageKit imageUrl={item.imageUrl} style={{zIndex:99}}/>
                                    </SwiperSlide>))
                                    }
                            </Swiper>                            
                            :
                            (<MyImageKit imageUrl={selectedProduct.mainImages[0].imageUrl} style={{zIndex:99}}/>)
                        }
                </Box>
                <Box sx={{
                    position: 'relative',
                    padding:2,
                    bgcolor: 'white',
                    flex: 2,
                    overflow: 'auto'
                }}>
                    <SingleProductDetails data={selectedProduct}>
                        <SizeAndColor selectedProduct={selectedProduct} 
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        sizes={sizes}
                        setSelectedColor={setSelectedColor}
                        selectedColor={selectedColor}/>
                        <AddToButton
                        selectedQty={selectedQty} 
                        availableQuantity={selectedColor ? selectedColor?.stock : selectedSize ? selectedSize?.stock: 1}
                        setSelectedQty={setSelectedQty}
                        />
                    </SingleProductDetails>
                    <Stack gap={2} sx={{ mt: 2 }} direction={'row'}>
                        <StyledButton bgColor={red[600]} hoverBackgroundColor={red[900]} onClick={() => {
                            // Confirm logic
                        }}>
                            Confirm Selection
                        </StyledButton>
                        <StyledButton onClick={() => {
                            setSelectedProduct(null);
                            handleCloseModal();
                        }}>
                            Close
                        </StyledButton>
                    </Stack>
                </Box>
            </MotionBox>           
        </GlobalModal.Content>
        }
        </React.Fragment>
        
    )
}

export default DisplayProductAndDetails