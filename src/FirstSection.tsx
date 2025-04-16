import SweetLogo from "./assets/svg/logo-sweet.svg?react";

const FirstSection = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-pink1 via-pink2 to-pink1">
        <div className="container py-8 grid gap-6 items-start md:grid-cols-2 md:py-15">
          <div className="grid gap-2 md:gap-3 lg:gap-5">
            <h2 className="text-4xl leading-[1.1] font-jost font-semibold text-t1 sm:text-[2.5rem] md:text-[2.75rem] lg:text-5xl">
              Vetorização Simples
            </h2>
            <p className="max-w-[40ch] font-unna text-xl leading-[1.3] text-t2 lg:text-2xl">
              Cliente enviou logo antiga. Refiz o traçado, alinhei proporções e
              entreguei arquivos em SVG, PDF e PNG com fundo transparente.
            </p>
          </div>
          <div className="grid justify-center items-start">
            <SweetLogo className="max-w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
