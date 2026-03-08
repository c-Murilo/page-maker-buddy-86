const HeroSection = () => {
  return (
    <section className="relative w-full h-80 md:h-96 bg-accent border-b border-border flex items-center justify-center">
      {/* Photo placeholder */}
      <span className="absolute text-muted-foreground font-body text-sm">Foto principal</span>

      {/* Content overlay - centered on the image */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Bem-vindo
        </p>

        <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground tracking-tight text-center">
          Laís Correia
        </h1>
        <p className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground mt-3 text-center">
          Especialista em<br />Terceirização Financeira
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
