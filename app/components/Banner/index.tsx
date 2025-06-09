import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { whatsappLink } from "../Footer/Footer";

export function Banner() {
  return (
    <div id="banner" className="bg-blue-400 w-full p-2">
      <div className="mx-auto pt-10 w-full sm:pb-24">
        <div className="grid grid-cols-1 w-full lg:grid-cols-12 gap-12 space-x-1">
          <div className="col-span-6 max-lg:gap-6 w-full flex flex-col justify-evenly">
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Seu dispositivo com problema? A gente resolve!
            </h1>
            <h3 className="text-charcoal text-xl font-normal text-center lg:text-start opacity-75 lg:pt-0">
              Manutenção rápida, confiável e com garantia para PCs, notebooks e
              acessórios.
            </h3>

            <div className="relative flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                className="p-4 w-auto text-sm md:text-lg shadow-lg mx-3 items-center text-white font-semibold rounded-full flex gap-2 bg-kellygreen hover:bg-opacity-80 duration-150 ease-in-out "
              >
                CLIQUE AQUI e fale com um especialista <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" height={40} width={40} />
              </a>
            </div>

            <div className="flex w-full items-center gap-2 justify-around lg:pt-4">
              <div className="flex items-center text-white gap-2">
                <CheckBadgeIcon className="w-10 h-10" />
                <p className="text-sm w-full sm:text-lg font-semibold text-black">
                  Excelência técnica
                </p>
              </div>
              
              <div className="flex items-center text-white gap-2">
                <CheckBadgeIcon className="w-10 h-10" />
                <p className="text-sm w-full sm:text-lg font-semibold text-black">
                  Preço justo
                </p>
              </div>
              <div className="flex items-center text-white gap-2">
                <CheckBadgeIcon className="w-10 h-10" />
                <p className="text-sm w-full sm:text-lg font-semibold text-black">
                  Fácil e seguro
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 flex justify-center">
            <img
              src="/assets/propaganda_4.jpg"
              alt="nothing"
              className="object-cover max-sm:-mt-8 max-lg:h-full max-lg:w-3/4 rounded-2xl shadow-lg shadow-blue-500"
              /* width={1000}
              height={805} */
            />
          </div>
        </div>
      </div>
    </div>
  );
}
