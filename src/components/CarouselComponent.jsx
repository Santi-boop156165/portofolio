/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({items}) => {
  return (
    <Carousel
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    infiniteLoop={true}
    autoPlay={true}
    interval={5000}
    stopOnHover={false}
    swipeable={true}
    emulateTouch={true}
    centerMode={true}
    centerSlidePercentage={80}
    dynamicHeight={false}
    className="overflow-hidden rounded-lg w-[800px]">
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`Slide ${index}`} />
          <p>{item.text}</p>
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselComponent