/* IMAGES & ICONS */
import star from "../assets/icons/star.svg";

const ReviewCard = ({ imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center
    flex-col bg-white p-4 rounded-4xl shadow-2xl">
        <img src={imgURL} alt="customer" className="rounded-full
        object-cover w-[120px] h-[120px] shadow-xl"/>
        <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} width={24} height={24} className="
            object-contain m-0"/>
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 text-3xl font-bold font-palanquin">{customerName}</h3>
    </div>
  )
}

export default ReviewCard