import type { FieldError } from "react-hook-form";
import type { Option } from "../types/commonTypes";

const dashboardNames:Record<string, string>={
    admin:'/admin/dashboard',
    user:'/user/dashboard',
    seller:'/seller/dashboard',
}


export function transformArrayForOptions(items: Array<{ name: string; _id: string }>):Option[]{
    return items.map((item) => {
                    return {
                        label: item.name,
                        id: item._id,
                        value: item.name,
                    };
        });
}
export function getDashBoardName(roleName:string='user'){
    return dashboardNames[roleName]
}

export function firstLetterToUpperCase(value:string){
    if(!value || value.length<2) return false;
    return value[0].toUpperCase()+value.slice(1)
}

export const rotateEndIcon={"& .MuiButton-endIcon": {
                            transform: "rotate(0deg)",
                        },
}

export const getErrorMessage=(error:FieldError)=>{    
    if(Array.isArray(error)){
        const result = new Set(error.map(err=>err.message))
        return Array.from(result).join(' ; ')
    }
    return error?.message
}

export function filterTags(tags:Array<string>){
    if(!Array.isArray(tags)) return tags
    return tags.join()
}


export function getFromLocalStorage(item:string): string | null{
    return localStorage.getItem(item)
}
export function removeFromLocalStorage(item:string): void{
    localStorage.removeItem(item)
}
