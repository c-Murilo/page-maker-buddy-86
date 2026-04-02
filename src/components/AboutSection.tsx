import aboutPhoto from "@/assets/about-photo.png";

const AboutSection = () => {
  return (
    <section className="bg-card px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          Sobre <span className="italic">mim</span>
        </h2>

        <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-56 h-72 rounded-2xl overflow-hidden border border-border shrink-0">
            <img src={aboutPhoto} alt="Sobre mim" className="w-full h-full object-cover object-center" />
          </div>

          <div className="flex-1">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Digite aqui um breve texto se apresentando...Este espaço foi criado para
              destacar quem você é, o que faz e como pode transformar a vida das suas
              clientes. No passo a passo da BIO Vitrine, você vai aprender exatamente como
              preencher esse campo de forma estratégica, transmitindo confiança e
              profissionalismo — mesmo sem saber escrever textos prontos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
