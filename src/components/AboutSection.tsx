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
            <p className="font-body text-sm text-muted-foreground text-justify  leading-relaxed">
             Contadora especializada em transformar números em decisões inteligentes.
Ajudo empreendedoras e empresas a organizarem suas finanças, reduzirem impostos de forma legal e crescerem com segurança.

Acredito que uma contabilidade bem feita vai além de obrigações fiscais — ela traz clareza, tranquilidade e direcionamento para o seu negócio prosperar.

Se você busca organização, estratégia e confiança para evoluir financeiramente, estou aqui para te ajudar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
