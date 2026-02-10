import { Box, Container, Grid, Stack, TextField } from "@mui/material";
import {
  Email,
  FacebookRounded,
  Instagram,
  Person,
  Subject,
  X,
  YouTube,
} from "@mui/icons-material";
import StyledButton from "../../shared/styled/StyledButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type ConstactSchema } from "./schema";
import CustomTextField from "../../customController/CustomTextField";

const ContactUs = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<ConstactSchema>({
        mode: "all",
        resolver: zodResolver(schema),
    });
    const onSubmit =(data:ConstactSchema)=>{
        console.log(data);
    }
    return (
        <section className="contact-us mb-20">
            <Container maxWidth={false}>
                <h6>Map</h6>
                <Grid container columnSpacing={6} sx={{ mt: 7 }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack>
                        <h6 className="font-extrabold text-3xl border-b">Get in touch</h6>
                        <form action="" className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                            <Stack gap={2}>
                            <Stack direction={"row"} gap={2}>
                                <Box flex={1}>
                                    <CustomTextField
                                        register={register}
                                        error={errors.fullName}
                                        placeHolder="Full Name *"
                                        name="fullName"
                                        icon={<Person />}
                                    />
                                </Box>
                                <Box flex={1}>
                                    <CustomTextField
                                        register={register}
                                        error={errors.email}
                                        placeHolder="Email *"
                                        name="email"
                                        icon={<Email />}
                                    />
                                </Box>
                            </Stack>
                            <CustomTextField
                                register={register}
                                error={errors.subject}
                                placeHolder="Subject *"
                                name="subject"
                                icon={<Subject />}
                            />
                            <TextField
                                multiline
                                rows={5}
                                placeholder="Your message *"
                                {...register("message")}
                                error={Boolean(errors.message)}
                                helperText={errors?.message?.message}
                            />
                            <StyledButton type="submit" sx={{ width: "50%" }}>Submit</StyledButton>
                            </Stack>
                        </form>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack sx={{ p: 2, mt: 4 }} height={"100%"} rowGap={3}>
                        <p>
                            <b>Address:</b> 123 Suspendis matti, Visaosang Building VST
                            District, NY Accums, North American Email: support@domain.com
                        </p>
                        <p>
                            <b>Call Us:</b> (012)-345-67890
                        </p>
                        <p>
                            <b> Opening time:</b> Our store has re-opened for shopping,{" "}
                            <br /> exchanges every day 11am to 7pm
                        </p>
                        <Stack direction={"row"} columnGap={2}>
                            <Instagram />
                            <FacebookRounded />
                            <X />
                            <YouTube />
                        </Stack>
                        </Stack>
                    </Grid>
                    </Grid>
            </Container>
        </section>
    );
};

export default ContactUs;
