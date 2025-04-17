import FigmaLogo from "./assets/svg/figma-logo.svg?react";

const main = () => {
  return (
    <>
      <section className="bg-w1">
        <div className="container grid gap-6 py-15 items-center md:grid-cols-[0.7fr_0.5fr] md:gap-5 md:py-[5rem] lg:py-[7.5rem]">
          <div className="grid gap-3 md:gap-5 lg:gap-10">
            <div className="grid *:col-start-1 *:row-start-1">
              <h1 className=" max-w-[14ch] text-[3.5rem] leading-[1.1] font-jost font-semibold text-t1 z-10 sm:text-6xl md:text-[4.75rem] lg:text-8xl max-[360px]:break-all">
                Vetorização de Logos
              </h1>
              <span className="block -translate-x-2 -translate-y-2 w-8 h-8 -left-4 -top-4 rounded-t-full bg-green5 md:-translate-y-0"></span>
            </div>
            <p className="text-2xl leading-[1.3] font-unna max-w-[40ch] text-t2 lg:text-[2rem]">
              Transformo logos em baixa qualidade em vetores prontos para
              qualquer mídia.
            </p>
          </div>
          <div className="grid justify-center">
            <FigmaLogo className="max-w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default main;
