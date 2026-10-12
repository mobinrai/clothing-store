import z from "zod"
import { Patterns } from "../../../../utils/ValidationPatterns"
import { fileSchema, storedImages } from "../../../../schemas/commonSchema"

const variantSchema = z.object({
    size: z.string().min(1, 'Size is required'),
    color: z.array(z.string()).min(1, 'Color is required'),
    stock: z
        .number()
        .min(1, 'Stock must be greater than or equal to 1')
        .max(10000, 'Stock must be less than or equal to 10000'),
    sku: z.string().min(1, "SKU is required"),
    price: z
        .number()
        .min(1, "Price must be greater than or equal to 1")
        .max(100000,"Price must be less than or equal to 100000"),
    images: z.array(fileSchema).optional()
});

export const productFormSchema = z.object({
    name: z
        .string()
        .min(1, "Product name is required")
        .min(4, "Product name must be at least 4 characters long")
        .max(100, "Product name must be less than 100 characters"),
    description: z
        .string()
        .min(1, "Description is required")
        .max(2000, "Product description must be less than 2000 characters"),
    brand: z
        .string()
        .min(1, "Product brand name is required")
        .min(3, "Product brand name must be atleast 3 characters long")
        .max(50, "Product brand name must be less than 50 characters long"),
    category: z.string().min(1, 'Product category is required'),
    basePrice: z.number().min(1, "Baseprice must be greater than 1.")
    .max(100000,"Price must be less than or equal to 100000"),
    discount: z
        .number()
        .min(0, "Discount cannot be negative")
        .max(100, "Discount can not exceed 100"),
    variants: z.array(variantSchema),
    mainImages: z.array(fileSchema).optional(),
    material: z.string().regex(Patterns.materials),
    tag:z.string().regex(Patterns.tags, 'Tags must be alphabets,numbers and ,'),
    isFeatured: z.boolean().default(false).optional(),
    shipmentDays:z.array(z.number()).length(2),
    storedMainImages:z.array(storedImages).optional(),
    deletedMainImageIds:z.array(z.string()).optional(),
    storedVariantImages:z.record(z.string(), z.array(storedImages)).optional(),
    deletedVariantImageIds:z.array(z.string()).optional()
}).superRefine((data, ctx)=>{
    const hasOldMainImages = (data.storedMainImages?.length??0) >0
    const mainImages = (data.mainImages?.length??0) >0
    if(!hasOldMainImages && !mainImages){
        ctx.addIssue({
            code:"custom",
            path:['mainImages'],
            message:'Please select atleast one main imageasdf'

        })
    }
});

export type ProductFormValues = z.infer<typeof productFormSchema>

export const defaultProductValues: ProductFormValues = {
    name: "",
    description: "",
    brand: "",
    category: "",
    mainImages:[],
    discount: 0,
    basePrice: 0,
    material: "",
    variants: [{
        size:"",
        color:[],
        sku:'',
        stock:0,
        price:0,
        images:[]
    }],
    tag:"",
    isFeatured: false,
    shipmentDays:[2, 10],
    storedMainImages:[],
    storedVariantImages:{},
    deletedVariantImageIds:[]
};
