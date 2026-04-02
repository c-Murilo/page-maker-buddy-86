const CtaSection = () => {
  return (
    <section className="bg-olive px-4 py-20 md:py-28 text-center">
      <h2 className="font-display text-3xl md:text-5xl italic text-olive-foreground">
        Vamos crescer juntas?
      </h2>
      <button className="mt-8 font-body text-sm tracking-widest uppercase border border-olive-foreground text-olive-foreground px-8 py-3 rounded-full hover:bg-olive-foreground hover:text-olive transition-colors">
        <a href="tel:+5543988132015">Entre contato</a>
      </button>
    </section>
  );
};

export default CtaSection;
