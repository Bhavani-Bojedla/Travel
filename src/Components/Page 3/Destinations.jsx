// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";

// import { EffectCoverflow, Navigation } from "swiper/modules";

// import slide_image_1 from "../../assets/Images/image-1.jpeg";
// import slide_image_2 from "../../assets/Images/image-2.jpeg";
// import slide_image_3 from "../../assets/Images/image-3.jpeg";
// import slide_image_4 from "../../assets/Images/image-4.jpeg";
// import slide_image_5 from "../../assets/Images/image-5.jpeg";
// import slide_image_6 from "../../assets/Images/image-6.jpeg";
// import slide_image_7 from "../../assets/Images/image-7.jpeg";

// export default function Destinations() {
//   return (
//     <>
//     <h1 className="pb-5 mx-auto text-2xl font-bold text-center bg-sky-50 lg:hidden md:hidden">
//           Popular Destinations
//         </h1>
//       <div className="flex flex-wrap items-center justify-center gap-3 pt-5 lg:hidden md:hidden bg-sky-50">
      
//         {[
//           slide_image_1,
//           slide_image_2,
//           slide_image_3,
//           slide_image_4,
//           slide_image_5,
//           slide_image_6,
//           slide_image_7,
//         ].map((image, index) => (
//           <div key={index} className="">
//             <img
//               src={image}
//               alt={`slide_image_${index}`}
//               className="object-cover w-32 h-32 rounded-md"
//             />
//           </div>
//         ))}
//       </div>
      
//       <div className="relative w-full lg:mx-auto md:px-10 lg:py-28 md:py-12 bg-sky-50 phone:hidden lg:block md:block">
//         <h1 className="text-3xl font-bold text-center md:mb-10 lg:mb-12">
//           Popular Destinations
//         </h1>
//         <div className="max-w-screen-lg mx-auto">
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: -9,
//               depth: 100,
//               modifier: 2,
//             }}
//             modules={[EffectCoverflow, Navigation]}
//             className="swiper-container"
//           >
//             {[
//               slide_image_1,
//               slide_image_2,
//               slide_image_3,
//               slide_image_4,
//               slide_image_5,
//               slide_image_6,
//               slide_image_7,
//             ].map((image, index) => (
//               <SwiperSlide
//                 key={index}
//                 className="lg:w-60 md:w-56 md:h-60 lg:h-80"
//               >
//                 <img
//                   src={image}
//                   alt={`slide_image_${index}`}
//                   className="object-cover rounded-md lg:w-60 md:w-56 md:h-60 lg:h-80"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";

import slide_image_1 from "../../assets/Images/image-1.jpeg";
import slide_image_2 from "../../assets/Images/image-2.jpeg";
import slide_image_3 from "../../assets/Images/image-3.jpeg";
import slide_image_4 from "../../assets/Images/image-4.jpeg";
import slide_image_5 from "../../assets/Images/image-5.jpeg";
import slide_image_6 from "../../assets/Images/image-6.jpeg";
import slide_image_7 from "../../assets/Images/image-7.jpeg";

export default function Destinations() {
  return (
    <>
      
      <div className="relative w-full lg:mx-auto md:px-10 lg:py-28 md:py-12 phone:px-5 bg-sky-50 ">
        <h1 className="text-3xl font-bold text-center md:mb-10 lg:mb-12 phone:pb-10">
          Popular Destinations
        </h1>
        <div className="max-w-screen-lg mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: -3,
              depth: 100,
              modifier: 2,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper-container"
          >
            {[
              slide_image_1,
              slide_image_2,
              slide_image_3,
              slide_image_4,
              slide_image_5,
              slide_image_6,
              slide_image_7,
            ].map((image, index) => (
              <SwiperSlide
                key={index}
                className="lg:w-60 md:w-56 md:h-60 lg:h-80 phone:w-24 phone:h-24"
              >
                <img
                  src={image}
                  alt={`slide_image_${index}`}
                  className="object-cover rounded-md lg:w-60 phone:w-24 phone:h-24 md:w-56 md:h-60 lg:h-80"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
