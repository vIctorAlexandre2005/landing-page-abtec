import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  rua: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
  telefone: string;
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "https://img.icons8.com/?size=100&id=16713&format=png&color=000000",
    link: "https://api.whatsapp.com/send?phone=5521980478184",
    width: 32,
  },
  {
    imgSrc:
      "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
    link: "https://www.instagram.com/abtecrj/",
    width: 28,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Endereço",
    rua: "Rua Machado de Assis, Lote:18; Quadra:67",
    bairro: "Praça da Bandeira",
    cidade: "São João de Meriti",
    cep: "25560-140",
    estado: "Rio de Janeiro - RJ",
    telefone: "(21) 98047-8184",
    // Rua Machado de Assis Lote:18; Quadra:67 - Praça da Bandeira, São João de Meriti - RJ, 25560-140
  },
];

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl w-full lg:px-8">
      <div className="my-12 flex justify-center items-center flex-col gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}

        <div className="sm:col-span-6 lg:col-span-5 flex justify-center items-center flex-col gap-y-10">
          <div className="flex flex-shrink-0 items-center border-right">
            <Image
              src="/assets/abtec_logo.jpg"
              alt="logo"
              width={214}
              height={66}
              className="block object-cover md:h-20 md:w-20 shadow-md rounded-full"
            />
          </div>
          <h3 className="text-lg font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16">
            {" "}
            Siga-nos nas redes sociais
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((items, i) => (
              <Link href={items.link} key={i}>
                <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                  <img
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className=""
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="py-10 md:flex items-center justify-between border-t border-t-gray-blue">
        <h4 className="text-dark-red opacity-75 text-sm text-center md:text-start font-normal">
          @2025. Desenvolvido por Victor Alexandre. Todos os direitos
          reservados.
        </h4>
        {/* <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
          <h4 className="text-dark-red opacity-75 text-sm font-normal">
            <Link href="/" target="_blank">
              Privacy policy
            </Link>
          </h4>
          <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
          <h4 className="text-dark-red opacity-75 text-sm font-normal">
            <Link href="/" target="_blank">
              Terms & conditions
            </Link>
          </h4>
        </div> */}
      </div>
    </div>
  );
};

export default footer;
