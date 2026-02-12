import { Divider } from "@mui/material"

const SectionTitle = ({sectionTitle}:{sectionTitle:string}) => {
    return (
        <div className="section-title">
            <div className="max-w-['990px'] mx-auto text-center mb-2">
                <h6 style={{ color: "#181818", textTransform: "uppercase" }}>
                {sectionTitle}
                </h6>
            </div>
            <div className="mx-3">
                <Divider/>
            </div>
        </div>
    )
}

export default SectionTitle