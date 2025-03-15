/* IMAGES & ICONS */
import star from "../assets/icons/star.svg";

const PopularProductCard = ({ imgURL, name, rating, price}) => {
    return (
        
        <div className='flex flex-1 flex-col m-auto'>
          <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
          <div className='mt-8 ml-2 flex justify-start gap-2.5'>
            <img src={star} alt='rating icon' width={24} height={24} />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>
              ({rating})
            </p>
          </div>
          <h3 className='ml-2 mt-2 text-2xl leading-normal font-semibold 
          font-palanquin text-nowrap'>
            {name}
          </h3>
          <p className='mt-2 ml-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
            {price}
          </p>
        </div>
      );
};


export default PopularProductCard