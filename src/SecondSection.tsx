import EchosLogo from "./assets/svg/logo-echos-azul.svg?react";
import DecoLeft from "./assets/svg/decoracao-left.svg?react";
import DecoRight from "./assets/svg/decoracao-right.svg?react";

const SecondSection = () => {
  return (
    <>
      <section className="bg-gradient-to-b py-8 from-blue1 via-blue2 to-blue1 md:py-15">
        <div className="container relative grid gap-6 items-start md:grid-cols-2">
          <div className="grid relative row-start-2 justify-center items-start md:row-start-1">
            <span className="absolute inset-0 bg-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border-[1px_solid_rgba(255,255,255,0.3)]"></span>
            <EchosLogo className="row-start-1 col-start-1 max-w-full h-80 p-10 md:h-90 lg:h-100 z-10" />
          </div>
          <div className="grid gap-2 md:gap-3 lg:gap-5">
            <h2 className="text-4xl leading-[1.1] font-jost font-semibold text-blue4 sm:text-[2.5rem] md:text-[2.75rem] lg:text-5xl">
              Vetorização com melhoria
            </h2>
            <p className="max-w-[40ch] font-unna text-xl leading-[1.3] text-blue3 lg:text-2xl">
              Além da vetorização, melhorei o espaçamento da tipografia e
              reequilibrei os elementos para deixar mais harmônico.
            </p>
          </div>
          <span className="hidden md:block absolute right-5 bottom-0">
            <DecoLeft />
          </span>
          <span className="hidden md:block absolute left-[calc(50%+10px)] bottom-0">
            <DecoRight />
          </span>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
