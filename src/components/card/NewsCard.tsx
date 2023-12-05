export const NewsCard = () => {
    return (
        <>
        <div className="mx-auto text-center border border-gray-200 rounded-lg shadow-lg hover:cursor-pointer">
            <div className="relative">
                {/* <span className="absolute bottom-2 left-2"><span>21</span></span> */}
                <div className="absolute bottom-3 left-3 bg-white rounded-lg h-[50px] w-[50px] text-[12px] flex flex-col items-center justify-center">
                    <p>21</p>
                    <p>Dec</p>
                </div>
                <img className="w-full" src="/news-img.png" alt="" />
            </div>
            <div className="p-3">
                <div className="flex items-center justify-between my-2">
                    <div className="flex text-gray-400 items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1583 10.6748L10.1833 16.6498C10.0285 16.8048 9.84469 16.9277 9.64236 17.0116C9.44003 17.0955 9.22315 17.1386 9.00413 17.1386C8.7851 17.1386 8.56822 17.0955 8.36589 17.0116C8.16356 16.9277 7.97975 16.8048 7.82496 16.6498L0.666626 9.49984V1.1665H8.99996L16.1583 8.32484C16.4687 8.63711 16.6429 9.05953 16.6429 9.49984C16.6429 9.94015 16.4687 10.3626 16.1583 10.6748V10.6748Z" stroke="#B3B3B3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.83325 5.33301H4.84159" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="text-[14px]">Food</p>
                    </div>
                    <div className="flex text-gray-400 items-center gap-2">
                        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99996 7.66667C8.84091 7.66667 10.3333 6.17428 10.3333 4.33333C10.3333 2.49238 8.84091 1 6.99996 1C5.15901 1 3.66663 2.49238 3.66663 4.33333C3.66663 6.17428 5.15901 7.66667 6.99996 7.66667Z" stroke="#B3B3B3" stroke-width="1.2"/>
                            <path d="M9.49995 10.1665H4.49995C2.19828 10.1665 0.137447 12.2915 1.65161 14.024C2.68161 15.2023 4.38495 15.9998 6.99995 15.9998C9.61495 15.9998 11.3174 15.2023 12.3474 14.024C13.8624 12.2907 11.8008 10.1665 9.49995 10.1665Z" stroke="#B3B3B3" stroke-width="1.2"/>
                        </svg>
                        <p className="text-[14px]">By Admin</p>
                    </div>
                    <div className="flex text-gray-400 items-center gap-2">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.52381 11.2728L8.48206 13.0087C8.43209 13.092 8.36139 13.1609 8.27687 13.2088C8.19234 13.2566 8.09686 13.2818 7.99972 13.2818C7.90258 13.2818 7.8071 13.2566 7.72257 13.2088C7.63804 13.1609 7.56735 13.092 7.51738 13.0087L6.47675 11.2728C6.42671 11.1895 6.35596 11.1206 6.27138 11.0728C6.1868 11.025 6.09128 10.9999 5.99413 11H1.8125C1.66332 11 1.52024 10.9407 1.41475 10.8352C1.30926 10.7298 1.25 10.5867 1.25 10.4375V1.4375C1.25 1.28832 1.30926 1.14524 1.41475 1.03975C1.52024 0.934263 1.66332 0.875 1.8125 0.875H14.1875C14.3367 0.875 14.4798 0.934263 14.5852 1.03975C14.6907 1.14524 14.75 1.28832 14.75 1.4375V10.4375C14.75 10.5867 14.6907 10.7298 14.5852 10.8352C14.4798 10.9407 14.3367 11 14.1875 11H10.0059C9.90881 11 9.81341 11.0252 9.72894 11.073C9.64446 11.1208 9.5738 11.1896 9.52381 11.2728V11.2728Z" stroke="#B3B3B3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                        <p className="text-[14px]">65 Comments</p>
                    </div>
                </div>
                <div className="text-left my-2">
                    <h3 className="text-[14px]">Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</h3>
                    <a href="" className="flex items-center gap-3 stroke-green-600 mt-4 text-[14px] text-green-600 font-bold hover:text-green-800 hover:stroke-green-800">
                        <span>Read More</span>
                        <svg width="16" height="13" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 7.50049H1" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.94995 1.47559L16 7.49959L9.94995 13.5246" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}