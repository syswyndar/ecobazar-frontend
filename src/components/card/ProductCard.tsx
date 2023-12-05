import { useState } from "react"

export const ProductCard = (param: any) => {
    const [isSale, setIsSale] = useState(true);
    return (
        <>
        <div className="relative p-5 border border-gray-200 hover:border-green-500 hover:text-green-600 hover:cursor-pointer">
            <img className="w-full" src="/product-img.png" alt="" />
            <div className="my-2 flex justify-between items-center">
                <div>
                    <h3 className="xs:mb-2 xs:text-[14px]">{param?.name}</h3>
                    <p className="font-semibold text-black">$2.00</p>
                </div>
                <div className="bg-gray-200 hover:bg-green-600 p-3 rounded-full stroke-black hover:stroke-white">
                    <svg className="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83334C6.66667 3.99239 8.15905 2.5 10 2.5V2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            {isSale && 
            <div className="absolute top-5 left-5 bg-red-600 px-4 py-2 text-[12px] rounded-md text-white">
                <p>Sale 50%</p>
            </div>
            }
        </div>
        </>
    )
}