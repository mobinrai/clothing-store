import z from "zod";
import { emailField } from "../../../schemas/commonSchema";
import { Patterns } from "../../../utils/ValidationPatterns";

export const schema = z.object(emailField).extend({
    fullName: z
        .string()
        .min(5, "Full name must be atleast 5 charactes long")
        .max(100, "Full name must be 100 characters or less")
        .regex(
        Patterns.fullName,
        "Full Name must only constains letters,hypens,comma,spaces and periods",
        )
        .trim(),
    subject: z
        .string()
        .min(5, "Subject of your message too short")
        .max(100, "Subject must be 100 characters or less")
        .regex(/^[\p{L}\p{M}\p{N}\s]/u, ""),
  message: z.string().min(10, "Please enter your message"),
});

export type ConstactSchema = z.infer<typeof schema>;
