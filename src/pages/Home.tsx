import { CategoryCard } from "../components/card/CategoryCard"
import { NewsCard } from "../components/card/NewsCard"
import { ProductCard } from "../components/card/ProductCard"
import { categories } from "../fakeapi/Categories"
import { products } from "../fakeapi/Products"

export const Home = () => {
    const featureItems = [
        {  
            title: "Free Shipping",
            description: "Free shipping on all your order",
            icon: "/icon/delivery-truck-icon.png"
        },
        {  
            title: "Customer Support 24/7",
            description: "Instant access to Support",
            icon: "/icon/headphones-icon.png"
        },
        {  
            title: "100% Secure Payment",
            description: "We ensure your money is save",
            icon: "/icon/shopping-bag-icon.png"
        },
        {  
            title: "Money-Back Guarantee",
            description: "30 Days Money-Back Guarantee",
            icon: "/icon/package-icon.png"
        }
    ]

    return (
        <>
        <div className="container mx-auto p-5 grid xs:grid-cols-1 md:grid-cols-2">
            <div className="xs:mb-6 sm:mb-0">
                <img src="/Home_Img.png" alt="home-img" />
            </div>
            <div className="my-auto mx-auto xs:w-full md:w-2/3">
                <h4 className="text-green-500 italic xs:mb-2 xs:text-[14px] md:text-[16px]">Welcome To Ecobazar</h4>
                <h1 className="xs:text-[36px] md:text-[32px] lg:text-[56px] font-bold mb-4 leading-tight xs:text-justify sm:text-start">Fresh & Healthy Organic Food</h1>
                <p className="xs:text-[16px] lg:text-[18px] text-slate-500 font-extralight mb-10">Free shipping on all your order. we deliver, you enjoy</p>
                <button className=" flex items-center justify-center xs:px-6 md:px-9 xs:py-2.5 md:py-3 bg-green-700 text-white rounded-full gap-5 hover:bg-green-600">
                    <span className="xs:text-[14px] md:[16px]">Shop Now</span>
                    <img className="xs:h-[12px] md:h-[14px]" src="/icon/ArrowRight.png" alt="arrow-icon" />
                </button>
            </div>
        </div>
        <div className="container grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 shadow-lg xs:my-10 md:my-16 mx-auto rounded-md">
            {featureItems.map((item) => {
                return (
                    <div className="flex gap-5 items-center mx-auto p-8">
                        <img className="h-[40px]" src={item.icon} alt="icon" />
                        <div>
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <p className="font-extralight text-[14px] text-gray-500">{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="container mx-auto xs:my-10 md:my-20">
            <div className="flex justify-between items-center">
                <h1 className="xs:text-[1.3rem] sm:text-[2rem] font-semibold">Popular Categories</h1>
                <a href="" className="flex items-center gap-3 stroke-green-600 text-green-600 font-bold hover:text-green-500 hover:stroke-green-500">
                    <span>View All</span>
                    <svg width="16" height="13" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7.50049H1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.94995 1.47559L16 7.49959L9.94995 13.5246" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 my-5">
                {categories.map((item) => {
                    return (
                        <CategoryCard title={item.title}/>
                    )
                })}
            </div>
        </div>
        <div className="container mx-auto">
            <img className="" src="/Discount-Bannar.png" alt="discount-banner" />
        </div>
        <div className="container mx-auto xs:my-10 md:my-20">
            <div className="flex justify-between items-center">
                <h1 className="xs:text-[1.3rem] sm:text-[2rem] font-semibold">Popular Products</h1>
                <a href="" className="flex items-center gap-3 stroke-green-600 text-green-600 font-bold hover:text-green-500 hover:stroke-green-500">
                    <span>View All</span>
                    <svg width="16" height="13" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7.50049H1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.94995 1.47559L16 7.49959L9.94995 13.5246" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            <div className="grid xs:grid-cols-1 xs:gap-3 md:gap-0 sm:grid-cols-3 lg:grid-cols-5 my-5">
                {products.map((item) => {
                    return (
                        <ProductCard name={item.name}/>
                    )
                })}
            </div>
        </div>
        <div className="container text-center mx-auto xs:my-10 md:my-20">
            <h1 className="xs:text-[1.3rem] sm:text-[2rem] font-semibold">Latest News</h1>
            <div className="grid xs:grid-cols-1 sm:grid-cols-4 my-5 gap-10">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        </div>
        </>
    )
}