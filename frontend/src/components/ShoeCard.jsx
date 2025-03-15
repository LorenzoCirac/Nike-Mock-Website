const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {

  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  }

  return (
    <div
      className={`border-2 rounded-3xl 
      ${bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }
      cursor-pointer max-sm:flex-1 max-sm:h-40 
      max-sm:w-full`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center 
  bg-[url('assets/images/thumbnail-background.svg')]
  bg-cover bg-center sm:w-40 sm:h-40 max-sm:h-full max-sm:w-full rounded-3xl
  max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={125}
          height={103}
          className="object-contain max-sm:h-full max-sm:w-full"
        />
      </div>
    </div>
  )
}

export default ShoeCard