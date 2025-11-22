interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export default function Faq({ title, subtitle, items }: FaqProps) {
  return (
    <section>
      <div className="text-center my-[4em] px-[2em] text-[var(--color-text-grey)]">
        <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
        <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">{title}</h2>
        <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
        <h5 className="text-[20px] mb-[80px]">{subtitle}</h5>
      </div>

      <div className="space-y-8 px-4">
        {items.map((faq, index) => (
          <div key={index} className="mb-8">
            <h4 className="font-bold text-lg mb-2 text-[#333]">{faq.q}</h4>
            <div className="text-[#5a5a5a] whitespace-pre-line leading-relaxed pl-4">
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
