/* COMPONENTS */
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard";

/* IMAGES & ICONS */
import rightArrowIcon from "../assets/icons/arrow-right.svg";
import bigShoe1 from "../assets/images/big-shoe1.png";

/* CONSTANTS */
import { statistics, shoes } from "../constants/constants";

/* REACT */
import { useState } from "react";

const Hero = () => {

    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

    return (
        <section id="home" className="w-full flex xl:flex-row
    flex-col justify-center min-h-screen 
    max-container gap-10">

            {/* TEXT */}
            <div className="flex xl:w-2/5 flex-col justify-center 
        items-start w-full padding mt-16">
                <p className="text-xl font-montserrat text-coral-red">
                    Our Summer Collection
                </p>
                <h1 className="mt-8 font-palanquin text-8xl
            max-sm:text-[60px] max-sm:leading-[82px] leading-tight
            font-bold">
                    <span className="xl:bg-white relative
                xl:whitespace-nowrap pr-10 z-10 rounded-full">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-coral-red mt-3">
                        Nike
                    </span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg
            leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort,
                    and innovation fro your active life.
                </p>

                <Button label="Shop now" iconURL={rightArrowIcon} />

                <div className="flex justify-start items-center 
            flex-wrap w-full mt-20 gap-8">
                    {statistics.map((stat, index) => {
                        return (
                            <div key={index}>
                                <p className="text-4xl font-palanquin
                            font-bold">
                                    {stat.value}
                                </p>
                                <p className="leading-8 font-montserrat
                            text-slate-gray">
                                    {stat.label}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* IMAGES */}
            <div className="relative flex-1 flex justify-center
        items-center max-xl:py-40 bg-primary 
        bg-[url('assets/images/collection-background.svg')] 
        bg-cover bg-center w-full rounded-b-4xl">
                <img
                    src={bigShoeImage}
                    alt="shoe collection"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />

                <div className="flex absolute -bottom-[5%] 
            gap-6 sm:gap-6 max-sm:px-6
             ">
                    {shoes.map((shoe, index) => {
                        return (
                            <div key={index}>
                                <ShoeCard
                                    imgURL={shoe}
                                    changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                                    bigShoeImage={bigShoeImage}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Hero