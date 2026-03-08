const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-card px-4 py-16">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
        Bem-vindo
      </p>

      {/* Photo placeholder */}
      <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl bg-accent border border-border mb-8 flex items-center justify-center">
        <span className="text-muted-foreground font-body text-sm">Foto principal</span>
      </div>

      <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground tracking-tight text-center">
        Laís Correia
      </h1>
      <p className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground mt-3 text-center">
        Especialista em<br />Terceirização Financeira
      </p>
    </section>
  );
};

export default HeroSection;
