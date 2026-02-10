import type React from "react";

type MyTableHeadProps={
    tableHeadList:string[];
    className?:string;
    style?:React.CSSProperties
}

const MyTableHead = ({className, style, tableHeadList=[]}:MyTableHeadProps) => {
    return (
        <>
            {
                tableHeadList.map((item)=>{
                    return <th key={item} className={className} style={style}>{item}</th>
                })
            }
        </>
            
    )
}

export default MyTableHead