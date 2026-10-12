import { TableCell, TableHead, TableRow } from '@mui/material'
import type { withChildren } from '../../../../types/commonTypes'

const CustomTableHeader = ({headerList, children}:{headerList:string[]}&withChildren) => {
    return (
        <TableHead>
            <TableRow>
                {headerList.map(list=>{
                return <TableCell key={list}>
                    {list}
                </TableCell>
            })}
            {children}
            </TableRow>
        </TableHead>
    )
}

export default CustomTableHeader