import { Delete, Reorder, Tune } from "@mui/icons-material";
import { Divider, Stack } from "@mui/material";
import StyledButton from "../../shared/styled/StyledButton";
import { useFormContext } from "react-hook-form";
import type { FilterFormSchema } from "./filterFormSchema";
import FilterSectionAccordion from "./FilterSectionAccordion";
import CustomRadioFormController from "../../customController/CustomRadioFormController";
import DisplayCategoryList from "./DisplayCategoryList";
import ChooseSize from "../../shared/size";

const FilterForm = () => {
    const { handleSubmit } = useFormContext<FilterFormSchema>();
    const categories = [
        "hoodie",
        "jacket",
        "sweater",
        "t-shirt",
        "tracksuit",
        "trousers",
    ];
    const onStock = [
        { value: "onStock", label: "On Stock" },
        { value: "outOfStock", label: "Out of Stock" },
    ];
    const brands = [
        { value: "adidas", label: "Adidas" },
        { value: "puma", label: "Puma" },
        { value: "jack&jones", label: "Jack and Jones" },
    ];

    const onSubmit = (data: FilterFormSchema) => {
        console.log(data);
    };
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={"row"} gap={2} sx={{ mb: 1 }}>
                <Reorder />
                <h6 className="font-bold text-xl">Categories</h6>
            </Stack>
            <Divider />
            <ul className="mt-2">
                <DisplayCategoryList categories={categories}/>
            </ul>
            <Stack direction={"row"} gap={1} sx={{ mt: 4, mb: 1 }}>
                <Tune />
                <h6 className="font-bold text-xl">Filter By</h6>
            </Stack>
            <Divider />
            <StyledButton startIcon={<Delete />} sx={{ my: 2 }}>
            Clear All
            </StyledButton>
            <FilterSectionAccordion<FilterFormSchema>
            name="availability"
            options={onStock}
            summaryText="Availability"
            ComponentName={CustomRadioFormController}
            />
            <FilterSectionAccordion<FilterFormSchema>
            name="brands"
            options={brands}
            summaryText="Brands"
            />
            <FilterSectionAccordion<FilterFormSchema>
            name="materials"
            options={brands}
            summaryText="Materials"
            />
            <FilterSectionAccordion<FilterFormSchema>
            name="productType"
            options={brands}
            summaryText="Product Type"
            />
            <FilterSectionAccordion<FilterFormSchema>
            name="sizes"
            summaryText="Sizes"
            
            >
                <ChooseSize availableSizes={['xs','s','m','l','xl','xxl','3xl']}/>
            </FilterSectionAccordion>
            <Divider/>
            <StyledButton sx={{mt:2, width:'90%'}} startIcon={<Tune />} type="submit">Apply Filter</StyledButton>
        </form>
    );
};

export default FilterForm;
