import z from "zod";

export const formSchema=z.object({
    materials:z.array(z.string()).optional(),
    availability:z.string().optional(),
    brands:z.array(z.string()).optional(),
    productType:z.array(z.string()).optional(),
    sizes:z.array(z.string()).optional()
})

export type FilterFormSchema = z.infer<typeof formSchema>

export const defaultValues:FilterFormSchema={
    materials:[],
    availability:'',
    brands:[],
    productType:[],
    sizes:[]
}