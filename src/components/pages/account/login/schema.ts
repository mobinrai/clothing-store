import z from "zod";
import { emailField, passwordField } from "../../../../schemas/commonSchema";

export const schema=z.intersection(z.object(emailField), z.object(passwordField))
export type LoginSchema = z.infer<typeof schema>
