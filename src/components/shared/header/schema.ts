import z from "zod";

export const searchSchema = z.object({
    search: z
        .string()
        .min(3,"Please enter search text.Search text must atleast 3 characters long")
        .regex(/^[\p{L}\p{N}\s.,'_+\-()/&]{1,50}/u, "Please enter valid search text"),
});

export type SearchSchema = z.infer<typeof searchSchema>;

export const defaultValues: SearchSchema = {
  search: "",
};
