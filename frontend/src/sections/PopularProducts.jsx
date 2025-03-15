/* COMPONENTS */
import PopularProductCard from "../components/PopularProductCard";

/* CONSTANTS */
import { products } from "../constants/constants";

const PopularProducts = () => {
  return (
    <section 
        id="products"
        className="max-container mt-25 padding">
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">
                Our <span className="text-coral-red">Popular</span> Products
            </h2>
            <p className="lg:max-w-lg mt-2 font-montserrat
            text-slate-gray">
                Experience top-notch quality and style with our
                sougth-after selections. Discover a world of
                comfort, design, and value.
            </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-4
        md:grid-cols-3 sm:grid-cols-2 grid-cols-1
        sm:gap-4 gap-14">
            {products.map((product) => {
                return(
                    <PopularProductCard 
                        key={product.name}
                        {...product}
                    />
                )
            })}
        </div>

    </section>
  )
}

export default PopularProducts