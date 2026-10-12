import z from "zod";
import { Patterns } from "../utils/ValidationPatterns";
import {
  ALLOWED_IMAGE_TYPES,
  ALLOWED_SIZE,
} from "../components/pages/admin/adminUtils";

export const emailField = {
  email: z.email(),
};

export const passwordField = {
  password: z.string().min(1, "Password field is requried"),
};

export const firstNameField = {
    firstName: z
        .string()
        .min(1, "First name field is required")
        .max(50, "Last name must be 30 charactes long or less")
        .regex(
        Patterns.firstName,
        "First name must only constains letters,hypens,comma,spaces and periods",
        ),
};

export const lastNameField = {
    lastName: z
        .string()
        .min(1, "Last name field is required")
        .max(30, "Last name must be 30 charactes long or less"),
};

export const fileSchema = z
    .instanceof(File)
    .refine((file) => {
        return file.size<=ALLOWED_SIZE;
    }, {
    message: "Image size should be less or equal to 5MB",
    })
    .refine(
        (file) => ALLOWED_IMAGE_TYPES.includes(file.type),
        {
            message:"Invalid image type"
        }
);

export const emailSchema = z.object(emailField);
export type EmailSchema = z.infer<typeof emailSchema>;

export const passwordSchema = z.object(passwordField);
export type PasswordSchema = z.infer<typeof passwordSchema>;


export const storedImages=z.object({
        name:z.string(),
        imageUrl:z.string(),
        imageId:z.string()
})