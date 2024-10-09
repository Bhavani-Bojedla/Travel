// import React from "react";
// import "./Activity.css";

// import image_1 from '../../assets/Images/ActivityPic1.png';
// import image_2 from '../../assets/Images/ActivityPic2.png';
// import image_3 from '../../assets/Images/ActivityPic3.png';
// import image_4 from '../../assets/Images/ActivityPic4.png';
// import image_5 from '../../assets/Images/ActivityPic5.png';
// import image_6 from '../../assets/Images/ActivityPic6.png';

// export default function Activity() {
  
//   return (
//     <div className="w-full mx-auto lg:p-4 md:py-6 bg-sky-50">
//       <div className="text-xl font-bold text-center lg:mb-2 md:mb-2 text-sky-500">
//         Activity
//       </div>
//       <div className="text-xl font-bold text-center lg:mb-6 md:mb-4">
//         Unique Offerings Included Under Package
//       </div>

//       <div className="grid mx-32 lg:grid-cols-3 md:grid-cols-2 lg:gap-14 md:gap-10">
//         <div className="page-1-box">
//           <div className="page1-img">{image_1}</div>
//           <div className="page1-content">
//             <div className="page1-cont-title">Historical Place</div>
            
//             <div className="page1-cont-info">
//               Immerse yourself in the grandeur of Rajasthan and Agra's
//               historical treasures.
//             </div>
//           </div>
//         </div>

//         <div className="page-1-box">
//           <div className="page1-img"></div>
//           <div className="page1-content">
//             <div className="page1-cont-title">Historical Place</div>
//             <div className="page1-cont-info">
//               Immerse yourself in the grandeur of Rajasthan and Agra's
//               historical treasures.
//             </div>
//           </div>
//         </div>

//         <div className="page-1-box">
//           <div className="page1-img"></div>
//           <div className="page1-content">
//             <div className="page1-cont-title">Historical Place</div>
//             <div className="page1-cont-info">
//               Immerse yourself in the grandeur of Rajasthan and Agra's
//               historical treasures.
//             </div>
//           </div>
//         </div>

//         <div className="page-1-box">
//           <div className="page1-img"></div>
//           <div className="page1-content">
//             <div className="page1-cont-title">Historical Place</div>
//             <div className="page1-cont-info">
//               Immerse yourself in the grandeur of Rajasthan and Agra's
//               historical treasures.
//             </div>
//           </div>
//         </div>

//         <div className="page-1-box">
//           <div className="page1-img"></div>
//           <div className="page1-content">
//             <div className="page1-cont-title">Historical Place</div>
//             <div className="page1-cont-info">
//               Immerse yourself in the grandeur of Rajasthan and Agra's
//               historical treasures.
//             </div>
//           </div>
//         </div>

//         <div className="page-1-box">
//           <div className="page1-img"></div>
//           <div className="page1-content">
//             <div className="page1-cont-title">Historical Place</div>
//             <div className="page1-cont-info">
//               Immerse yourself in the grandeur of Rajasthan and Agra's
//               historical treasures.
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }


import React from "react";

import image_1 from '../../assets/Images/ActivityPic1.png';
import image_2 from '../../assets/Images/ActivityPic2.png';
import image_3 from '../../assets/Images/ActivityPic3.png';
import image_4 from '../../assets/Images/ActivityPic4.png';
import image_5 from '../../assets/Images/ActivityPic5.png';
import image_6 from '../../assets/Images/ActivityPic6.png';

export default function Activity() {
  const activities = [
    {
      image: image_1,
      title: "Historical Place",
      info: "Immerse yourself in the grandeur of Rajasthan and Agra's historical treasures.",
    },
    {
      image: image_2,
      title: "Shopping Fun",
      info: "Enjoy a vibrant shopping experience through Rajasthan's colorful markets."
    },
    {
      image: image_3,
      title: "Holi Celebration",
      info: "Celebrate the festival of colors with an unforgettable Holi celebration.",
    },
    {
      image: image_4,
      title: "Pushkar Fair",
      info: "Witness the cultural charm of the Pushkar Fair, with its unique blend of tradition,livestock trading, and festivities.",
    },
    {
      image: image_5,
      title: "Indian Wedding",
      info: "Experience the grandeur of an Indian wedding, complete with rituals, colors, and celebrations.",
    },
    {
      image: image_6,
      title: "Diwali Celebration",
      info: "Celebrate Diwali in Rajasthan, surrounded by glowing lights, festive decorations, and cultural festivities.",
    },
  ];

  return (
    <div className="w-full mx-auto lg:p-4 md:py-6 phone:py-4 bg-sky-50">
      <div className="font-bold text-center md:text-xl phone:text-base lg:text-xl lg:mb-2 md:mb-2 phone:mb-1 text-sky-500">
        Activity
      </div>
      <div className="font-bold text-center lg:text-xl md:text-xl phone:text-lg lg:mb-6 md:mb-4 phone:mb-4">
        Unique Offerings Included Under Package
      </div>

      <div className="grid lg:gap-16 md:gap-10 phone:gap-7 lg:mx-40 phone:mx-10 md:mx-12 lg:grid-cols-3 md:grid-cols-2">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-center w-full lg:h-40 md:h-32 page-1-box">
            <img src={activity.image} alt={activity.title} className="object-cover mr-4 lg:h-20 md:h-20 phone:h-14 page1-img" />
            <div className=" page1-cont">
              <div className="mb-2 font-semibold lg:text-lg md:text-lg phone:text-base page1-cont-title">{activity.title}</div>
              <div className="text-justify lg:text-sm phone:text-xs md:text-sm lg:w-56 md:w-48 page1-cont-info">{activity.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
