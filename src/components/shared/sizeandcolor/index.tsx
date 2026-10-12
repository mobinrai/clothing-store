import { Box, Stack } from "@mui/material";
import { getColors } from "../../pages/admin/share/listArray";
import React from "react";
import type { SizeAndColorProps } from "../../../types/commonTypes";

const SizeAndColor = ({
    selectedProduct,
    selectedSize,
    setSelectedSize,
    setSelectedColor,
    sizes,
    }: SizeAndColorProps) => {
    const colors = React.useMemo(() => {
        if (!selectedProduct || !selectedSize) return [];
        return selectedProduct.variants
        .filter((item) => item._id === selectedSize.id)
        .map((prod) => ({
            id: prod._id,
            value: prod.color,
            stock: prod.stock,
            price: prod.price,
        }));
    }, [selectedProduct, selectedSize]);
    return (
        <Stack
        gap={{ md: 0, lg: 2 }}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
        <Stack gap={2} sx={{ justifyContent: "center" }}>
            <Box>
            <h6>Sizes: </h6>
            </Box>
            <Stack direction={"row"} spacing={1}>
                {sizes.map((item) => (
                    <React.Fragment key={`${item.id}-${item.name}`}>
                        <input
                        className="px-2 py-1 w-12"
                        type="radio"
                        style={{ display: "none" }}
                        value={selectedSize ? selectedSize.name : ""}
                        name={item.name}
                        checked={selectedSize ? selectedSize.name === item.name : false}
                        onChange={() =>
                            setSelectedSize?.({...item})
                        }
                        id={`size-${item.name}`}
                        />
                        <label className="sizeLabel px-2" htmlFor={`size-${item.name}`}>
                        <span>{item.name}</span>
                        </label>
                    </React.Fragment>
                ))}
            </Stack>
        </Stack>
        <Stack gap={2}>
            <Box>
            <h6>Color: </h6>
            </Box>
            <Stack direction={"row"} spacing={1}>
            {colors.map((color) => {
                return color.value.map((item) => {
                const colorName = getColors().find((color) => color.value === item);
                return (
                    <React.Fragment key={colorName?.name}>
                        <input
                            className=""
                            type="radio"
                            style={{ display: "none" }}
                            value={colorName?.name}
                            name={colorName?.name}
                            checked={true}
                            id={`color-${colorName?.name}`}
                            onChange={() =>setSelectedColor({id:color.id??'', name:colorName?.name??item, stock:color.stock,price:color.price})}
                        />
                        <label
                            className="rounded-[50%] cursor-pointer w-14 block"
                            htmlFor={`color-${colorName?.name}`}
                        >
                            <span
                            className={`border-2 border-black p-2 w-14 h-14 block`}
                            style={{ backgroundColor: colorName?.value }}
                            title={colorName?.value}
                            >
                            {/* {colorName ? colorName.name : item} */}
                            </span>
                        </label>
                    </React.Fragment>
                );
                });
            })}
            </Stack>
        </Stack>
        </Stack>
    );
    };

    export default SizeAndColor;
