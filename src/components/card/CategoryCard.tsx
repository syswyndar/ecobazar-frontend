export const CategoryCard = (param: any) => {
    return (
        <>
        <div className="mx-auto text-center p-5 border border-gray-200 rounded-lg hover:border-green-500 hover:text-green-600 shadow-lg hover:cursor-pointer">
            <img className="xs:h-[5rem] sm:h-[10rem]" src="/category-img.png" alt="" />
            <p className="mt-3 font-semibold">{param?.title}</p>
        </div>
        </>
    )
}