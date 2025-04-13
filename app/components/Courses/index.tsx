"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}

const postData: DataType[] = [
  {
    heading: "Formatação e limpeza",
    heading2: "Troca de peças (HD, SSD, memória)",
    name: "Colt stelle",
    imgSrc: "/assets/services_1.jpg",
    students: 150,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
  {
    heading: "Atualização de hardware",
    heading2: "Instalação de programas e antivírus",
    name: "Colt stelle",
    imgSrc: "/assets/services_2.jpeg",
    students: 130,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
  {
    heading: "Reparo de notebooks",
    heading2: "Recuperação de dados",
    name: "Colt stelle",
    imgSrc: "/assets/services_3.jpg",
    students: 120,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
];

// CAROUSEL SETTINGS

export default function MultipleItems() {

  return (
    <div id="courses">
      <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 ">
        <div className="sm:flex justify-between items-center">
          <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">
            Nossos serviços
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl">
                <div className="relative rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt="Imagem dos serviços"
                    width={389}
                    height={262}
                    className="m-auto object-cover clipPath"
                  />
                </div>

                <div className="px-3">
                  <h4 className="text-xl font-semibold pt-6 text-black-800">
                    {items.heading}
                  </h4>
                  <h4 className="text-xl font-semibold pt-1 pb-2 text-black-800">
                    {items.heading2}
                  </h4>
                  <hr style={{ color: "#C4C4C4" }} />
                  <div className="flex mt-4 gap-4">
                    <h3 className="text-red text-22xl font-medium">
                      {items.rating}
                    </h3>
                    <div className="flex">
                      <StarIcon className="h-5 w-5 text-gold" />
                      <StarIcon className="h-5 w-5 text-gold" />
                      <StarIcon className="h-5 w-5 text-gold" />
                      <StarIcon className="h-5 w-5 text-gold" />
                      <StarIcon className="h-5 w-5 text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
