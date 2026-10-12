import React from 'react'
import type { CriteriaNameType, CriteriaType } from '../components/pages/admin/types'
import { useDebounce } from 'use-debounce'

const useCriteria = () => {
    
    const [criteria,setCriteria] = React.useState<CriteriaType>({'limit':5,'page':1, 'search':'', 'sortBy':'createdAt','orderBy':'desc','activeCriteriaName':undefined})
    const [debounceSearch] = useDebounce(criteria.search, 500)

    const handleCriteriaChange=(value:string|number, name:CriteriaNameType)=>{
        setCriteria(prev=>{
            const convertValue= (name==='limit'||name==='page') && typeof value==='string'?parseInt(value):value
            return {
                ...prev,
                [name]:convertValue,
                activeCriteriaName:name
            }
        })
    }

    return {
        debounceSearch,
        criteria,
        setCriteria,
        handleCriteriaChange
    }
}

export default useCriteria