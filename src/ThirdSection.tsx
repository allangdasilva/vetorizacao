import EscudoLogo from "./assets/svg/escudo.svg?react";
import DecoLeft from "./assets/svg/decoracao-left.svg?react";
import DecoRight from "./assets/svg/decoracao-right.svg?react";

const ThirdSection = () => {
  return (
    <>
      <section className="bg-gradient-to-b py-8 from-green1 via-green2 to-green1 md:py-15">
        <div className="container relative grid gap-6 items-start md:grid-cols-2">
          <div className="grid gap-2 md:gap-3 lg:gap-5">
            <h2 className="text-4xl leading-[1.1] font-jost font-semibold text-green4 sm:text-[2.5rem] md:text-[2.75rem] lg:text-5xl">
              Vetorização de logo complexa
            </h2>
            <p className="max-w-[40ch] font-unna text-xl leading-[1.3] text-green3 lg:text-2xl">
              Mascote, escudo de time, ilustração detalhada...
            </p>
          </div>
          <div className="relative grid justify-center items-start">
            <span className="absolute inset-0 bg-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border-[1px_solid_rgba(255,255,255,0.3)] rounded-2xl"></span>
            <EscudoLogo className="row-start-1 col-start-1 max-w-full h-auto max-h-120 p-10 z-10" />
          </div>
          <span className="hidden md:block absolute right-[calc(50%+10px)] bottom-0">
            <DecoLeft />
          </span>
          <span className="hidden md:block absolute left-5 bottom-0">
            <DecoRight />
          </span>
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
