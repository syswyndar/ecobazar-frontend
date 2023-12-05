import { useState } from "react"

export const Navbar = () => {
    const navLinkList = [
        {
            title: 'Home',
            isDropdown: false,
            dropdownItem: null
        },
        {
            title: 'Product',
            isDropdown: false,
            dropdownItem: null
        },
        {
            title: 'Blog',
            isDropdown: false,
            dropdownItem: null
        },
        {
            title: 'About Us',
            isDropdown: false,
            dropdownItem: null
        },
        {
            title: 'Contact Us',
            isDropdown: false,
            dropdownItem: null
        },
    ]

    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center md:container mx-auto xs:py-6 xs:px-5">
                <img className="h-[30px]" src="/Logo.png" alt="logo"/>
                <div className='xs:hidden md:flex md:w-[20em] lg:w-[31em]'>
                    <div className='relative w-full h-full'>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                                <path d="M17.4999 18L13.8749 14.375" stroke="#808080" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <input type="text" id="input-group-1" className="h-full border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-white focus:border-white block w-full pl-10 p-2.5" placeholder="Search"/>
                    </div>
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-r-md text-sm px-5 py-2.5">Search</button>
                </div>
                {isLogin ?  
                    <div className='xs:hidden md:flex items-center space-x-5'>
                        <img className="h-[25px] hover:cursor-pointer" src="/icon/Love.png" alt="love_icon"/>
                        <hr className="w-[1px] h-[25px] mx-auto bg-gray-700 border-0 rounded md:my-10"/>
                        <div className='flex items-center space-x-2 hover:cursor-pointer'>
                            <div className="relative">
                                <div className="absolute right-0 top-0 bg-green-700 rounded-full">
                                    <span className="text-sm text-white p-1">12</span>
                                </div>
                                <div className="py-2 pr-2">
                                    <img className="h-[30px]" src="/icon/Bag.png" alt="cart_icon"/>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-xs mb-1'>Shopping Cart</p>
                                <p className='text-xs'>$43.00</p>
                            </div>
                        </div>
                    </div>
                    : 
                    <div className="xs:hidden md:block">
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2">Login</button>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 ml-2">Register</button>
                    </div>
                }
            </div>

            <div className="bg-gray-900 py-2 xs:hidden md:block">
                <div className='container mx-auto flex justify-between items-center px-5'>
                    <div className=''>
                        <ul className='flex items-center text-sm space-x-4 text-slate-300'>
                            {navLinkList.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a href="#" className="block py-2 pr-4 rounded hover:text-green-500" aria-current="page">{item?.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flex space-x-2 text-sm items-center'>
                        <img className="h-[25px]" src="/icon/Phone.png" alt="phone_icon"/>
                        <span className='text-slate-300'>(021) 555-0114</span>
                    </div>
                </div>
            </div>
        </>
    )
}