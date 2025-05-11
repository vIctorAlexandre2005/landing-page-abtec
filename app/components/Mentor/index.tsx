"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
  profession: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: "Atendimento rápido",
    imgSrc: "https://img.icons8.com/?size=150&id=25643&format=png&color=000000",
  },
  {
    profession: "Garantia de 90 dias",
    imgSrc: "https://img.icons8.com/?size=150&id=nfBuOILFwpdb&format=png&color=000000",
  },
  {
    profession: "Equipe especializada",
    imgSrc: "https://img.icons8.com/?size=150&id=WomxPe5K20Ry&format=png&color=000000",
  },
  {
    profession: "Orçamento gratuito",
    imgSrc: "https://img.icons8.com/?size=150&id=Y8IQ8ywMsz8F&format=png&color=000000",
  },
  {
    profession: "Mais de 500 clientes atendidos",
    imgSrc: "https://img.icons8.com/?size=150&id=3sQY8JkktfnK&format=png&color=000000",
  },
  {
    profession: "Avaliações 5 estrelas no Google",
    imgSrc: "https://img.icons8.com/?size=150&id=8ggStxqyboK5&format=png&color=000000",
  },
];

export default function WhyAbtec() {
  return (
    <div className="py-10 sm:py-24 bg-gradient-to-r from-blue-200 to-cornflowerblue" id="mentor">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative">
        <h2 className="lh-82 text-midnightblue flex gap-2 text-4xl md:text-55xl text-center md:text-start font-semibold">
          Porquê escolher a
          <img
            className="block object-cover md:h-20 md:w-20 shadow-md shadow-blue-500 rounded-full"
            src={"/assets/abtec_logo.jpg"}
            height={60}
            width={60}
            alt="dsign-logo"
          />{" "}
          ?{" "}
        </h2>

        <div className="grid grid-cols-3">
        {postData.map((items, i) => (
          <div key={i} className="">
            <div className="m-3 py-14 md:my-10 text-center">
              <div className="relative">
                <img
                  src={items.imgSrc}
                  alt="user-image"
                  className="inline-block m-auto bg-white rounded-3xl p-4 mb-2 shadow-lg"
                />
              </div>
              <div className="">
                <h3 className="text-2xl flex gap-2 text-center justify-center font-semibold text-lightblack">
                  {items.profession}
                </h3>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
