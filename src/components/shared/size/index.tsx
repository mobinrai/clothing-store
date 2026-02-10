import { Stack } from "@mui/material";
import React from "react";
import DisplaySizes from "./DisplaySizes";

const ChooseSize = ({ availableSizes }: { availableSizes: string[] }) => {
    
    const [selectedSize, setSelectedSize] = React.useState(availableSizes[0]);

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedSize(event.target.value)
    }
    return (
        <Stack direction={"row"} gap={{ md: 0, lg: 2 }} flexWrap={'wrap'}>
            {availableSizes.map((size) => (
                <DisplaySizes key={size} size={size} selectedSize={selectedSize} handleChange={handleChange}/>
            ))}
        </Stack>
    );
};

export default ChooseSize;
