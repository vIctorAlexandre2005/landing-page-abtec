import Image from "next/image";

const Newsletter = () => {
  return (
    <>
      {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
      <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className="col-span-12 bg-imagee">
            <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
              <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mb-3">
                Agende um diagnóstico gratuito
              </h3>
              <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                Seu computador não pode esperar. Traga agora mesmo para a gente
                dar um jeito!
              </h3>

              <div>
                <div className="text-white w-full justify-center focus-within:text-white flex flex-row-reverse rounded-full pt-5 lg:pt-0">
                  <a
                    type="submit"
                    href="https://api.whatsapp.com/send?phone=5521980478184"
                    target="_blank"
                    className="p-3 lg:p-5 w-1/2 text-xl flex gap-2 items-center justify-center text-center font-semibold focus:outline-none focus:shadow-outline bg-kellygreen shadow-lg hover:bg-opacity-80 duration-150 ease-in-out rounded-full"
                  >
                    Agendar agora{" "}
                    <img
                      src="https://img.icons8.com/?size=100&id=16713&format=png&color=ffffff"
                      height={40}
                      width={40}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
