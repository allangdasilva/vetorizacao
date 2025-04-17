import SweetLogo from "./assets/svg/logo-sweet.svg?react";
import DecoLeft from "./assets/svg/decoracao-left.svg?react";
import DecoRight from "./assets/svg/decoracao-right.svg?react";

const FirstSection = () => {
  return (
    <>
      <section className="bg-gradient-to-b py-8 from-pink1 via-pink2 to-pink1 md:py-15">
        <div className="container relative grid gap-6 items-start md:grid-cols-2">
          <div className="grid gap-2 md:gap-3 lg:gap-5">
            <h2 className="text-4xl leading-[1.1] font-jost font-semibold text-pink4 sm:text-[2.5rem] md:text-[2.75rem] lg:text-5xl">
              Vetorização Simples
            </h2>
            <p className="max-w-[40ch] font-unna text-xl leading-[1.3] text-pink3 lg:text-2xl">
              Cliente enviou logo antiga. Refiz o traçado, alinhei proporções e
              entreguei arquivos em SVG, PDF e PNG com fundo transparente.
            </p>
          </div>
          <div className="relative grid justify-center items-start p-10 ">
            <span className="absolute inset-0 bg-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border-[1px_solid_rgba(255,255,255,0.3)] rounded-2xl"></span>
            <SweetLogo className="row-start-1 col-start-1 max-w-full h-auto max-h-120  z-10" />
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

export default FirstSection;
