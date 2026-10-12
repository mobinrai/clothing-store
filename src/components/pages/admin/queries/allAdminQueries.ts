import {useQuery} from '@tanstack/react-query'
import { privateApi } from '../../../../api/axios'
import type { CategoryType, CriteriaType, ProductResponse, RoleTypes } from '../types'
import type { PaginationType } from '../../../../types/commonTypes'

export const useFetchAllRoles=()=>{
    return useQuery({
        queryKey:['allRoles'],
        queryFn: async()=>{
            const {data} = await privateApi.get<{success:boolean, roles:RoleTypes[]}>(`/roles`)
            return data.roles
        }
    })
}

export const fetchAllCategories=({limit, page, search='',sortBy='',orderBy='asc'}:CriteriaType)=>{
    const query = getQuery({limit, page, search,sortBy,orderBy})
    return useQuery({
        queryKey:['allCategories', query],
        queryFn: async()=>{
            const {data} = await privateApi.get<{success:boolean,pagination?:PaginationType, categories:CategoryType[]}>(`/categories?${query}`)
            return data
        }
    })
}

export const fetchAllProducts=({limit, page, search='',sortBy='asc',orderBy='asc'}:CriteriaType)=>{
    const query = getQuery({limit, page, search,sortBy,orderBy})
    return useQuery({
        queryKey:['allProducts', query],
        queryFn: async()=>{
            const {data} = await privateApi.get<ProductResponse>(`/products?${query}`)
            return data
        }
    })
}

export const fetchSingleCategory=(id?:string)=> {
    return useQuery({
        queryKey:['singleCategory', id],
        queryFn: async()=>{
            const {data} = await privateApi.get<{success:true, category:CategoryType}>(`/categories/${id}`)
            return data.category
        },
        enabled:!!id
    })
}

export function getQuery({limit, page, search='',sortBy='asc',orderBy='asc'}:CriteriaType):string{
    let query=''
    if(limit) query+=`limit=${limit}`
    if(page) query+=`&page=${page}`
    if(search) query+=`&search=${search}`
    if(sortBy) query+=`&sortBy=${sortBy}`
    if(orderBy) query+=`&sortBy=${orderBy}`
    return query
}
