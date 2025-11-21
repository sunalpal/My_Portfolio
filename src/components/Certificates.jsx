// src/components/Certificates.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Certificates() {
  const certs = [
    { title: "Job Ready Cohort — Sheryians Coding School", img: "/images/certificate_shery.png" },
    { title: "Full Stack Developer Certification", img: "/images/fullstack.png" },
    { title: "Java Certification", img: "/images/javaCertificate.png" },
    { title: "SQL Database Certification", img: "/images/certificate_sql.png" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 relative">
      <h2 className="text-4xl font-bold mb-6">Certificates</h2>
      <p className="text-gray-400 mb-6">Selected certifications and achievements.</p>

      {/* Custom arrow placement */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: white !important;
            top: 42% !important;
            width: 45px !important;
            height: 45px !important;
          }
          
          .swiper-button-prev {
            left: -50px !important;
          }
          
          .swiper-button-next {
            right: -50px !important;
          }

          .swiper-pagination {
            bottom: -20px !important;
          }
        `}
      </style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {certs.map((c, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#2a2a2b] h-full flex flex-col shadow-lg">
              <p className="text-gray-300 text-sm mb-3">{c.title}</p>

              <div className="flex-1 overflow-hidden rounded-lg">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-44 sm:h-48 md:h-56 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <a
                  href={c.img}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-2 bg-white text-black rounded"
                >
                  View
                </a>
                <span className="text-xs text-gray-500">Certification</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
