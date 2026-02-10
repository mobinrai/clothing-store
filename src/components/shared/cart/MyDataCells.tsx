import React, { type ReactNode } from "react";

const MyDataCells = ({
    className,
    style,
    children,
    }: {
    className?: string;
    style?: React.CSSProperties;
    children: ReactNode;
    }) => {
    return (
        <td className={className} style={style}>
        {children}
        </td>
    );
};

export default MyDataCells;
