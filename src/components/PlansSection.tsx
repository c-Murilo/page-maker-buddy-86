const plans = [
  {
    name: "Premium",
    description:
      "Esse plano é perfeito para você que já tem um escritório e deseja desligar totalmente das funções do financeiro.",
    align: "left" as const,
  },
  {
    name: "Essence",
    description:
      "Esse plano é para com que deseja organizar seu financeiro, mas precisa controlar de conta em relação ao pagamento.",
    align: "right" as const,
  },
  {
    name: "Start",
    description:
      "Esse plano ideal para você que está abrindo um estúdio, a pouco não sabe por como começou para iniciar com as finanças.",
    align: "left" as const,
  },
  {
    name: "Combo Kit",
    description:
      "Ideal para quem deseja o pacote completo com todas as ferramentas necessárias.",
    align: "right" as const,
  },
];

const PlansSection = () => {
  return (
    <section className="bg-background px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto space-y-10">
        {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              {/* Plan image placeholder */}
              <div className="w-48 h-32 rounded-xl bg-accent border border-border flex items-center justify-center shrink-0">
                <span className="text-muted-foreground font-body text-xs">Imagem</span>
              </div>

              <div className={`flex-1 ${plan.align === "right" ? "text-right" : "text-left"}`}>
                <h3 className="font-elegant text-3xl md:text-4xl italic text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {plan.description}
                </p>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
