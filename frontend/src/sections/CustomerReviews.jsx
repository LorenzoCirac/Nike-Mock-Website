/* CONSTANTS */
import { reviews } from "../constants/constants";

/* COMPONENTS */
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="padding  bg-primary">
        <h3 className="font-palanquin text-center text-4xl
        font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
        </h3>
        <p className="info-text m-auto max-w-lg mt-4 text-center">
            Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>

        <div className="mt-12 flex flex-1 justify-evenly
        items-center max-lg:flex-col gap-14">
            {reviews.map((review, index) => {
                return(
                    <ReviewCard 
                        key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                )
            })}
        </div>
    </section>
  )
}

export default CustomerReviews