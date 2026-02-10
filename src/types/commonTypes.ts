import type React from "react";
import type { SxProps } from "@mui/material";
import type { FieldValues, Path } from "react-hook-form";

export type titleType = string;

export type nameType = string;

export type phoneType = number;

export type email = string;

export type roleType = "admin" | "users" | "seller";

export type Option = { id?: string; label: string; value: string };

export type CommonCustomFormControllerProps<T extends FieldValues> = {
  options: Option[];
  name: Path<T>;
  label?: string;
  sx?:SxProps;
  handleClick?:(event:React.ChangeEvent<HTMLInputElement>)=>void
};

export type ShowShoppingOrSearchContent='shoppingCart'|'searchForm'