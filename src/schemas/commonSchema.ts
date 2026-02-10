import z from "zod";
import { Patterns } from "../utils/ValidationPatterns";

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
    .regex(Patterns.firstName,'First name must only constains letters,hypens,comma,spaces and periods'),
};

export const lastNameField = {
  lastName: z
    .string()
    .min(1, "Last name field is required")
    .max(30, "Last name must be 30 charactes long or less"),
};

export const emailSchema = z.object(emailField);
export type EmailSchema = z.infer<typeof emailSchema>;

export const passwordSchema = z.object(passwordField);
export type PasswordSchema = z.infer<typeof passwordSchema>;
