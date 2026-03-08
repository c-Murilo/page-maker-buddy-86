import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Você oferece serviços de contabilidade?",
    answer:
      "Não, mas trabalho em parceria com um escritório que faz toda a parte fiscal e contábil, unindo forças nessa jornada da organização financeira.",
  },
  {
    question: "Vou conseguir saber se tenho lucro ou prejuízo?",
    answer:
      "Sim! Com certeza você terá muita clareza sobre esse indicador importantíssimo da sua empresa.",
  },
  {
    question: "Os planos tem fidelidade?",
    answer:
      "Não. Apenas um combinado, pois que se desejar interromper os serviços, que o combinado seria feito 30 dias antes.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-secondary px-4 py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 text-center">
          Dúvidas comuns
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-xl px-6 border border-border"
            >
              <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
