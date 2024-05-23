import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

// Testimonial Image Imports
import carolyn from './assets/testimonials/carolynM.jpg';
import cecile from './assets/testimonials/Dumbbells.jpg';
import lawrence from './assets/testimonials/before_after.png';

const carouselData = [
  {
    id: 1,
    title: "~ Carolyn M.",
    paragraph: "Gabe has been my Trainor since 2020 and has kept me on track and accountable in my fitness journey for 4 years. I started off with CG Games Individual in 2022 reaching the semi-finals to finally winning the CG Games Teams Division 50 + last year. I'm 60 this year and feel like I'm in the best shape I have ever been. It is because of the socials, fun workout games and the community aspect that I continue with Gabe as my trainor.",
    imageUrl: carolyn
  },
  {
    id: 2,
    title: "~ Lawrence G.",
    paragraph: "Gabe has guided me to a level of athleticism that I would never have imagined, he’s been a real coach and friend.  He pushed me when I needed it but also compassionate when I needed it.  Thank you for all you do Gabe!",
    imageUrl: lawrence
  },
  {
    id: 3,
    title: "~ Cecile F.",
    paragraph: "I can't speak highly enough of my experience with Gabriel. I joined his outdoor bootcamp classes over a year ago, as I was approaching the big 5-0, after nearly two decades without regular exercise. Since then, I've been attending his classes 4-5 times a week, and I can honestly say I look forward to them each time. When you join One Body, you join a community of people of different ages and physical abilities that support each other. His approach is motivating and empowering, pushing me beyond what I thought possible while ensuring proper technique and safety. Thanks to his guidance, I've not only regained my fitness, but surpassed my own expectations. I feel stronger, healthier, and more energized than ever before. If you're looking for a trainer who will challenge and inspire you to reach your goals, look no further than Gabriel. I couldn't recommend him highly enough.",
    imageUrl: cecile
  },
  {
    id: 4,
    title: "~ Test",
    paragraph: "I can't speak highly enough of my experience with Gabriel. I joined his outdoor bootcamp classes over a year ago, as I was approaching the big 5-0, after nearly two decades without regular exercise.",
    imageUrl: cecile
  }
];

function MultiItemCarousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <Slider {...settings}>
      {carouselData.map(item => (
        <div className="card" key={item.id}>
          <img src={item.imageUrl} alt={item.title} style={{ width: "100%", height: "auto" }} />
          <h3>{item.title}</h3>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </Slider>
  );
}

export default MultiItemCarousel;
