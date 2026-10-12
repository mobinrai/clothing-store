import z from "zod";
import { fileSchema } from "../../../../schemas/commonSchema";

export const schema = z.object({
    name: z
        .string()
        .min(1, "Please enter valid category name")
        .regex(/^[a-zA-Z\s-]+$/, "Please enter valid category name"),
    parent: z.array(z.string()).optional(),
    oldImage:z.object({
        name:z.string(),
        imageUrl:z.string(),
        imageId:z.string()
    }).optional(),
    image: z.union([
        z.array(fileSchema).optional(),
        z.object({
            name:z.string(),
            imageUrl:z.string()
        }).optional()
    ])
});

export type categorySchema = z.infer<typeof schema>;
