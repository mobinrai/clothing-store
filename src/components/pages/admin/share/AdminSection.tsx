import { Container, Paper, Stack, type SxProps } from "@mui/material"
import { createContext} from "react"
import MySnackBar from "../../../shared/snackBar/MySnackBar"
import type { withChildren } from "../../../../types/commonTypes"

const SectionContext = createContext({})

// const useSection = ()=>{
//     const context = useContext(SectionContext)
//     if(!context){
//         throw new Error('Section compound components must be used within Section');
//     }
//     return context;
// }

const AdminSection = ({children, sectionClassName}:{sectionClassName:string}&withChildren) => {
    // const section= useSection()
    return (
        <SectionContext.Provider value={sectionClassName}>
             <section className={`${sectionClassName} px-10 m-auto overflow-x-auto`}>
                <Container sx={{minWidth:{xs:'1500px', md:'1700px', xl:'1'}}}>
                    <Paper sx={{p:3, boxShadow:8}}>
                        {
                            children
                        }
                    </Paper>
                    <MySnackBar/>
                </Container>
        </section>
        </SectionContext.Provider>
    )
}


AdminSection.Title = ({children, title, sx}:{title:string, sx?:SxProps}&withChildren)=>{
    return <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{paddingBottom:'5px',mb:4, borderBottom:'1px solid gray', ...sx}}>
            <h6>{title}</h6>
            {children}
        </Stack>
}

AdminSection.Content=({children, sx}:{sx?:SxProps}&withChildren)=>{
    return <Stack sx={{ ...sx }}>
      {children}
    </Stack>
}
export default AdminSection