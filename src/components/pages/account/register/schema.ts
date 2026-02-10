import z from "zod";
import {
    emailField,
    firstNameField,
    lastNameField,
    passwordField,
} from "../../../../schemas/commonSchema";

export const registerSchema = z.object(emailField).extend({
    ...firstNameField,
    ...lastNameField,
    ...passwordField,
    signUp: z.boolean().optional(),
    });

export type RegisterSchema = z.infer<typeof registerSchema>;
