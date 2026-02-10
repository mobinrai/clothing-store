import { Container, Grid, Stack } from "@mui/material"
import AboutImg from '@images/about-us.jpg'
import BriefHistory from '@images/brief-history.jpg'
import FuturePlanning from '@images/future-planning.jpg'
import BgBox from "../shared/BgBox"

const AboutUs = () => {
    return (
        <section className="about mb-20">
            <Container maxWidth={false}>                
                <BgBox image={AboutImg}/>
                <Stack alignItems={'center'} my={8} gap={4}>
                        <h6 className="font-extrabold text-5xl border-b border-gray-200 pb-2">About us</h6>
                        <p className="text-(--color-text)">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla unde temporibus iusto exercitationem sit molestias, explicabo, veniam distinctio repellat numquam voluptatum maiores impedit velit, necessitatibus reiciendis. Iusto deleniti harum corrupti quasi consequuntur laborum iste consequatur illo. Quas, aperiam voluptatem. Recusandae quod veniam tenetur, voluptatem quisquam unde! Consequatur animi, dignissimos ex neque facilis enim, exercitationem dolores modi voluptate quas ab dolorem consectetur corrupti assumenda at deserunt earum, distinctio corporis. Repellat, distinctio. Minima excepturi iusto fugiat consectetur amet eos, ad repellat accusantium eligendi itaque incidunt ab aspernatur mollitia veritatis reprehenderit. Nam provident debitis maxime ex fuga quasi aut alias ratione veniam, quidem voluptatum perferendis quis quae voluptate magnam temporibus suscipit, deleniti laboriosam accusamus? Dolorum facilis dignissimos dolorem ex rerum eos inventore facere reiciendis tempore molestias nam sit quae temporibus sint doloremque pariatur, illo minus veniam ipsa similique explicabo dolore quaerat nobis est. Provident laboriosam accusantium consequatur. Vitae voluptatibus officiis qui dolorem beatae, rem laboriosam eius a optio omnis aliquam atque placeat, consequatur aut repudiandae soluta eveniet dolor? Commodi blanditiis fugiat voluptate deserunt praesentium natus quas recusandae nobis non, ipsum sunt quod molestiae sint veritatis tenetur, reprehenderit harum pariatur facilis ducimus tempora cupiditate odit possimus fugit sit. Dolore minima illum explicabo voluptatum. Beatae?
                        </p>
                </Stack>
                <Stack spacing={4}>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12, sm:6,lg:6}}>
                        <img src={BriefHistory}/>
                        </Grid>
                        <Grid size={{xs:12, sm:6,lg:6}} alignContent={'center'}>
                            <h6 className="font-extrabold text-2xl mb-2 border-b inline-block border-gray-300 pb-2">a brief origin story</h6>
                            <p className="text-(--color-text)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus repellendus molestiae sequi quae consectetur facere ea consequatur maiores, labore delectus voluptatibus dolore ad asperiores numquam esse distinctio corrupti magni nemo quas qui deserunt! Amet corporis sed dolorum possimus beatae.</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12, sm:6,lg:6}} alignContent={'center'}>
                            <h6 className="font-extrabold text-2xl mb-2 border-b inline-block border-gray-300 pb-2">our concept and future plan</h6>
                            <p className="text-(--color-text)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus repellendus molestiae sequi quae consectetur facere ea consequatur maiores, labore delectus voluptatibus dolore ad asperiores numquam esse distinctio corrupti magni nemo quas qui deserunt! Amet corporis sed dolorum possimus beatae.</p>
                        </Grid>
                        <Grid size={{xs:12, sm:6,lg:6}}>
                            <img src={FuturePlanning}/>
                        </Grid>
                    </Grid>
                </Stack>
        </Container>
        </section>
    )
}

export default AboutUs