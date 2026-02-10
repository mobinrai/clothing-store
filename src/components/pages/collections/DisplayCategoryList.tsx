
const DisplayCategoryList = ({categories}:{categories:string[]}) => {
    return (
        <>
             {categories.map((item) => {
                return (
                <li
                    key={item}
                    className="bg-(--color-light-background) pl-4 py-2 capitalize cursor-pointer my-1 rounded-sm text-(--color-text) font-500 hover:font-semibold text-[14px] transition-all duration-200"
                >
                    {item}
                </li>
                );
            })}
        </>
    )
}

export default DisplayCategoryList