const WhyUsSwiper = () => {
    return (
        <>
            <div className="flex justify-start items-center gap-10">
                {SwiperData.map((item) => (
                    <SwiperCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </>
    )
}

export default WhyUsSwiper;

const SwiperCard = ({ id, title, description }) => {
    return (
        <div
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 80% 100%, 0% 100%)' }}
            className="overflow-hidden p-[1px] rounded-[16px] bg-gradient-to-br h-fit from-white/50 to-[#FE701A] flex items-center justify-center">
            <div
                // style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 83%, 85% 100%, 0% 100%)' }}
                className="bg-[#FE701A] p-[2vw] rounded-[15px] w-[calc(100%-1px)] h-[calc(100%-1px)] space-y-[3.5vw]">
                <p>00{id}</p>
                <h4 className="text-content-30 font-display">{title}</h4>
                <p className="text-content-20 w-9/10 mb-[3.5vw]">{description}</p>
            </div>
        </div>
    )
}

const SwiperData = [
    {
        id: 1,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 2,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 3,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
    {
        id: 4,
        title: "Faster Time to Market",
        description: "Launch your card program in days, not months. Our end-to-end platform handles everything — from issuance to compliance — so you can focus on growth."
    },
]