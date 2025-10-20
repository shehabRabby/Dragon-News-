import React from 'react';
import swimImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playImg from "../assets/playground.png";
// const Qzon = () => {
//     return (
//         <div className='bg-base-200 p-5'>
//             <h2 className='font-bold mb-5'>QZone</h2>
//             <div className=''>
//                 <img src={swimImg} alt="" />
//                 <img src={classImg} alt="" />
//                 <img src={playImg} alt="" />
//             </div>
//         </div>
//     );
// };

const Qzon = () => {
  const qzoneImages = [
    { img: swimImg, title: "Swimming Time" },
    { img: classImg, title: "Classroom Fun" },
    { img: playImg, title: "Playground Vibes" },
  ];

  return (
    <div className="bg-base-200 p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        QZone
      </h2>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
        {qzoneImages.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 sm:h-48 md:h-52 lg:h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />

            {/* Subtle overlay + text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
              <p className="text-white text-base font-semibold drop-shadow-md">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-6 text-center">
        <button className="btn btn-primary btn-wide rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Join the Fun 🎉
        </button>
      </div>
    </div>
  );
};

export default Qzon;