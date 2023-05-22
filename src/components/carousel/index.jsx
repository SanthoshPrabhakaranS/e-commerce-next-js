import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBtb2RlbHMlMjBtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1490915785914-0af2806c22b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMG1vZGVscyUyMG1lbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb24lMjBtb2RlbHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

const Carousel = () => {
  const [translateX, setTranslateX] = useState(0);

  const handlePrev = () => {
    if (translateX < 0) {
      setTranslateX(translateX + 33.33);
    } else {
      setTranslateX(-33.33);
    }
  };

  const handleNext = () => {
    if (translateX > -33.33) {
      setTranslateX(translateX - 33.33);
    } else {
      setTranslateX(0);
    }
  };

  return (
    <div className="relative w-full h-80 mt-[3rem] lg:ml-[3rem] max-h-[400px] sm:ml-0">
      <div
        className="flex absolute top-0 left-0 h-full transition-all duration-500 ease-in-out overflow-x-hidden"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-full min-w-[200px] h-full ${
              index === 2 ? "ml-5" : "mr-5"
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={img}
              alt={`carousel-${index}`}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-3 absolute bottom-2 left-[45%] items-center">
        <div
          onClick={handlePrev}
          className={` h-1 w-9 bg-grey cursor-pointer hover:bg-yellow`}
        ></div>
        <div
          onClick={handleNext}
          className={`h-1 w-9 bg-grey cursor-pointer hover:bg-yellow`}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
