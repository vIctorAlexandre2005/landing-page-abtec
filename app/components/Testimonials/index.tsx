"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Tony Nascimento",
    profession: "Cliente da Abtec",
    comment:
      "Profissional sério, super atencioso, honesto e com um excelente serviço! Recomendo a todos!",
    imgSrc: "/avaliacoes/tony_nascimento.png",
  },
  {
    name: "Laiza Peres",
    profession: "Cliente da Abtec",
    comment:
      "Minha experiência com a Abtec foi maravilhosa! ✨🙏🏻 O Antônio é super prestativo e profissional. Resolveu rápido meu problema na CPU. Agora o próximo trabalho vai ser com meu notebook e, quando meu PC der problema, corro pra ele novamente! Kkkkk Nota 10.000.000",
    imgSrc: "/avaliacoes/laiza_peres.png",
  },
  {
    name: "Daniel Perfeito",
    profession: "Cliente da Abtec",
    comment:
      "Recomendo os serviços da Abtec, liderada pelo Abner. A empresa oferece assistência técnica completa para computadores e notebooks, desde hardware até software. Profissionalismo, competência e atendimento de qualidade são marcas registradas da Abtec. Confie seus equipamentos à Abtec e tenha a certeza de um serviço excelente!",
    imgSrc: "/avaliacoes/daniel.png",
  },
  {
    name: "Emily Pimenta",
    profession: "Cliente da Abtec",
    comment: "Trabalho impecável! Recomendo muito!",
    imgSrc: "/avaliacoes/emily.png",
  },
  {
    name: "Claudenise",
    profession: "Cliente da Abtec",
    comment:
      "Maravilhoso esse serviço, super indico! Confie de olhos fechados. Nota 10.000 ❤️",
    imgSrc: "/avaliacoes/claudenise.png",
  },
  {
    name: "André Silva",
    profession: "Cliente da Abtec",
    comment: "Excelente profissional, nota 1.000. Recomendo a todos!",
    imgSrc: "/avaliacoes/andre_silva.png",
  },
];

// CAROUSEL SETTINGS

export default function MultipleItems() {
  return (
    <div className="pt-40 pb-10 sm:pb-32 lg:py-32 bg-gradient-to-r from-blue-500 to-cornflowerblue" id="testimonial">
      <h1 className="text-center mb-10 text-55xl font-semibold text-white">Veja o que nossos clientes dizem ✨</h1>
      <div className="mx-auto max-w-7xl grid grid-cols-3 sm:py-4 lg:px-8">
        {postData.map((items, i) => (
          <div key={i}>
            <div
              className={`bg-white m-4 p-5 my-20 relative ${
                i % 2 ? "middleDiv" : "testimonial-shadow"
              }`}
            >
              <div className="absolute top-[-45px]">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={70}
                  height={70}
                  className="inline-block object-cover rounded-full p-1 bg-white shadow-md"
                />
              </div>
              <h4 className="text-base font-normal text-darkgray my-4">
                {items.comment}
              </h4>
              <hr style={{ color: "#D7D5D5" }} />
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                    {items.name}
                  </h3>
                  <h3 className="text-sm font-normal text-lightgray pb-2">
                    {items.profession}
                  </h3>
                </div>
                <div className="flex">
                  <StarIcon width={20} className="text-gold" />
                  <StarIcon width={20} className="text-gold" />
                  <StarIcon width={20} className="text-gold" />
                  <StarIcon width={20} className="text-gold" />
                  <StarIcon width={20} className="text-gold" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
