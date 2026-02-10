import z from "zod";

export const searchSchema=z.object({
    search:z.string().min(1,'Please enter search text').regex(/^/, 'Please enter valid search text')
})

export type SearchSchema=z.infer<typeof searchSchema>

export const defaultValues:SearchSchema={
    search:''
}