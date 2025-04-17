const FourthSection = () => {
  return (
    <>
      <section className="bg-w1">
        <div className="container py-8 sm:grid-cols-2 md:py-15">
          <div className="grid *:col-start-1 *:row-start-1">
            <h2 className="mb-10 text-5xl leading-[1.1] font-jost font-semibold text-t1 z-10 sm:text-[3.25rem] md:text-6xl lg:mb-10 lg:text-7xl">
              O que eu ofereço?
            </h2>
            <span className="block -translate-x-2 -translate-y-2 w-8 h-8 -left-4 -top-4 rounded-t-full bg-purple1 md:-translate-y-0"></span>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
            <div className="mb-6">
              <h3 className="mb-1 text-[2rem] font-jost font-semibold leading-[1.2] text-t1 sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
                Logo em Alta Resolução
              </h3>
              <p className="font-unna text-xl leading-[1.3] text-t2 lg:text-2xl">
                Sua marca vetorizada com nitidez impecável, pronta para qualquer
                tamanho ou mídia — do cartão de visita ao outdoor.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="mb-1 text-[2rem] font-jost font-semibold leading-[1.2] text-t1 sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
                Versões para Diferentes Fundos
              </h3>
              <p className="font-unna text-xl leading-[1.3] text-t2 lg:text-2xl">
                Entregas com fundo branco, preto e transparente para garantir
                versatilidade em qualquer aplicação.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="mb-1 text-[2rem] font-jost font-semibold leading-[1.2] text-t1 sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
                Pacote de Arquivos Profissionais
              </h3>
              <p className="font-unna text-xl leading-[1.3] text-t2 lg:text-2xl">
                .AI (original editável), .SVG (web responsivo), .PNG (com
                transparência) e .JPG (uso geral).
              </p>
            </div>
            <div className="mb-6">
              <h3 className="mb-1 text-[2rem] font-jost font-semibold leading-[1.2] text-t1 sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
                Entrega Rápida e Organização
              </h3>
              <p className="font-unna text-xl leading-[1.3] text-t2 lg:text-2xl">
                Envio dos arquivos em até 2 dias úteis, com tudo separado em
                pastas prontas pra usar — sem complicação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourthSection;
