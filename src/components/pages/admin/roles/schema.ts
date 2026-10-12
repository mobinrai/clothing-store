import z from "zod";

export const schema = z.object({
    name: z
        .string()
        .min(3, "Please enter valid role name")
        .max(20, "Please enter role name between 3 and 20 characters")
        .regex(/^[\p{L}\p{M}\s\p{N}]+$/u)
        .refine(val=>/^[\p{L}]/u.test(val),{message:'Role name must start with letter and must consists one or more letter'}),
});

export type RoleFormType = z.infer<typeof schema>;

export const defaultValues: RoleFormType = {
  name: "",
};
