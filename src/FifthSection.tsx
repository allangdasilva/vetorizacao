import ContatoIcon from "./assets/svg/contato-icon.svg?react";
import WhatsAppLogo from "./assets/svg/icons8-whatsapp.svg?react";
import OutlookLogo from "./assets/svg/icons8-outlook.svg?react";

const FifthSection = () => {
  return (
    <>
      <section className="bg-w1" id="contato">
        <div className="container grid gap-6 py-8 md:grid-cols-[0.7fr_0.5fr] md:gap-5 md:py-15">
          <div>
            <div className="grid *:col-start-1 *:row-start-1">
              <h2 className="mb-4 text-5xl leading-[1.1] font-jost font-semibold text-t1 z-10 sm:text-[3.25rem] md:text-6xl lg:mb-6 lg:text-7xl">
                Contato
              </h2>
              <span className="block -translate-x-2 -translate-y-2 w-8 h-8 -left-4 -top-4 rounded-t-full bg-blue5 md:-translate-y-0"></span>
            </div>
            <p className="mb-2 text-2xl leading-[1.3] font-unna text-balance text-t2 lg:text-3xl">
              Estou disponível para novos projetos no momento. Quer dar vida
              nova à sua marca? Me chama no WhatsApp!
            </p>
            <a
              href="./"
              className="flex gap-2 items-center w-fit mb-2 font-unna text-xl leading-[1.3] text-t2 lg:text-2xl hover:text-green5"
            >
              <WhatsAppLogo className="max-w-8 h-auto" />
              WhatsApp
            </a>
            <a
              href="./"
              className="flex gap-2 items-center w-fit font-unna text-xl leading-[1.3] text-t2 lg:text-2xl hover:text-blue5"
            >
              <OutlookLogo className="max-w-8 h-auto" />
              E-mail
            </a>
          </div>
          <div className="grid justify-center">
            <ContatoIcon className="max-w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FifthSection;
