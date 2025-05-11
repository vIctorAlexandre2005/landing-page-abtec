import Image from "next/image";
import { MdOutlineWhatsapp, MdWhatsapp } from "react-icons/md";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export function Banner() {
  return (
    <div id="banner" className="bg-blue-400 w-full">
      <div className="mx-auto pt-10 max-w-full w-full sm:pb-24 px-6">
        <div className="grid grid-cols-1 w-full lg:grid-cols-12 gap-12 space-x-1">
          <div className="col-span-6 w-full flex flex-col justify-evenly">
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Seu dispositivo com problema? A gente resolve!
            </h1>
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 lg:pt-0">
              Manutenção rápida, confiável e com garantia para PCs, notebooks e
              acessórios.
            </h3>

            <div className="relative flex justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=5521980478184"
                target="_blank"
                className="p-4 w-auto text-sm md:text-lg shadow-lg mx-3 items-center text-white font-semibold rounded-full flex gap-2 bg-kellygreen hover:bg-opacity-80 duration-150 ease-in-out "
              >
                CLIQUE AQUI e fale com um especialista <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" height={40} width={40} />
              </a>
            </div>

            <div className="flex w-full items-center justify-between lg:pt-4">
              <div className="flex w-full items-center text-white gap-2">
                <CheckBadgeIcon className="w-10 h-10" />{" "}
                <p className="text-sm w-full sm:text-lg font-semibold text-black">
                  Preço justo
                </p>
              </div>
              <div className="flex w-full items-center text-white gap-2">
                <CheckBadgeIcon className="w-10 h-10" />
                <p className="text-sm w-full sm:text-lg font-semibold text-black">
                  Excelência técnica
                </p>
              </div>
              <div className="flex w-full items-center text-white gap-2">
                <CheckBadgeIcon className="w-10 h-10" />
                <p className="text-sm w-full sm:text-lg font-semibold text-black">
                  Fácil e seguro
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 flex justify-center">
            <Image
              src="/assets/propaganda_4.jpg"
              alt="nothing"
              className="object-cover rounded-2xl shadow-lg shadow-blue-500"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
