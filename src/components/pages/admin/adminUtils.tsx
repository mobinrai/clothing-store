export const ALLOWED_IMAGE_TYPES=[
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp'
]

export const ALLOWED_SIZE = 5 * 1024 * 1024;


export function getImages(images:Array<{imageId:string, imageUrl:string}>){
    return images.map(image=>{
        return <img key={image.imageId} src={`${image.imageUrl}`} width={90} height={90}/>
    })
}

export function getSizes(){
    return [{
        id:'xxs',
        label:'2X Small',
        value:'2x-small'
    },{
        id:'xs',
        label:'Extra Small',
        value:'extra-small'
    },
    {
        id:'small',
        label:'Small',
        value:'small'
    },{
        id:'medium',
        label:'Medium',
        value:'medium'
    },{
        id:'large',
        label:'Large',
        value:'large'
    },{
        id:'XL',
        label:'Extra Large',
        value:'extra-large'
    },
{
        id:'xxxl',
        label:'3Xl Large',
        value:'3xl'
    },{
        id:'universal-size',
        label:'Universal Size',
        value:'universal-size'
    }]
}