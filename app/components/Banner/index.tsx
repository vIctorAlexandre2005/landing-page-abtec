import Image from "next/image";
import { MdWhatsapp } from "react-icons/md";
import { LiaCheckCircleSolid } from "react-icons/lia";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export function Banner() {
  return (
    <div id="home-section" className="bg-blue-400">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Seu dispositivo com problema? A gente resolve!
            </h1>
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              Manutenção rápida, confiável e com garantia para PCs, notebooks e
              acessórios.
            </h3>

            <div className="relative flex justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=5521980478184"
                target="_blank"
                className="p-6 text-sm md:text-lg w-auto mx-3 items-center text-white font-semibold rounded-full flex gap-2 bg-kellygreen hover:bg-opacity-80 duration-150 ease-in-out "
              >
                Fale com um especialista <CheckBadgeIcon />
              </a>
            </div>

            <div className="flex items-center justify-between pt-2 lg:pt-4">
              <div className="flex gap-2">
                <CheckBadgeIcon />{" "}
                <p className="text-sm sm:text-lg font-normal text-black">
                  Preço justo
                </p>
              </div>
              <div className="flex gap-2">
                <CheckBadgeIcon />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Excelência técnica
                </p>
              </div>
              <div className="flex gap-2">
                <CheckBadgeIcon />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Fácil e seguro
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 flex justify-center">
            <Image
              src="/assets/propaganda_4.jpg"
              alt="nothing"
              className="object-cover rounded-2xl"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
