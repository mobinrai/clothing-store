import { useState, type ReactNode } from "react";
import { useMySnackBar } from "../../../../provider/MySnackBarProvider";
import { useLocation, useNavigate } from "react-router";
import {useQueryClient } from "@tanstack/react-query";

type TitleAndContentType={
    title:string
    content?:ReactNode|''
}

export function useGeneric(){
    const navigate = useNavigate()
    const location = useLocation()
    const { setSnackbarState } = useMySnackBar();
    const queryClient = useQueryClient()
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [titleAndContent, setTitleAndContent] = useState<TitleAndContentType>({
        title:'',
        content:''
    })

    return {
        titleAndContent,
        errorMessage,
        queryClient,
        successMessage,
        location,
        navigate,
        setSnackbarState,
        setErrorMessage,
        setSuccessMessage,
        setTitleAndContent
    }
}