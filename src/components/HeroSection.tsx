import heroPhoto from "@/assets/hero-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center">
      {/* Background photo with blur */}
      <img
        src="https://res.cloudinary.com/dfa0eesxx/image/upload/q_auto/f_auto/v1775273127/WhatsApp_Image_2026-03-09_at_21.08.15_3_i6xqid.jpg"
        alt="Laís Correia"
        className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-90 origin-top"
        style={{ objectPosition: '50% 30%' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-8">
          Bem-vindo
        </p>

        <h1 className="font-display text-4xl md:text-6xl font-medium text-primary-foreground tracking-tight text-center drop-shadow-md whitespace-nowrap">
          Laís Correia
        </h1>
        <p className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-primary-foreground/80 mt-3 text-center">
          Especialista em<br />Terceirização Financeira
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
