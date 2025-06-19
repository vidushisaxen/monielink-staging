export const AccordionButton = ({ isOpen }) => {
    return (
        <button className="round cursor-pointer">
            <div className="mx-auto h-full text-current relative z-10 flex items-center gap-3 justify-center">
                <div className={`-rotate-90 text-current flex items-center justify-center gap-0 w-fit h-full transition-transform duration-400 ${isOpen ? 'rotate-90' : '-rotate-90'}`}>
                    <svg
                        className="arrow primera next size-[90%]"
                        width="8"
                        height="15"
                        viewBox="0 0 8 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                            fill="currentColor"
                        />
                    </svg>
                    <svg
                        className="arrow segunda next size-[90%]"
                        width="8"
                        height="15"
                        viewBox="0 0 8 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <span className="text-content-18">{isOpen ? 'View Less' : 'View More'}</span>
            </div>
        </button>
    )
}