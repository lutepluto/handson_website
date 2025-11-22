import Banner from '../components/Banner';

export default function ApplyPage() {
  return (
    <div className="bg-[var(--color-brand-lightgrey)] min-h-screen font-sans">
      {/* Banner Section */}
      <Banner backgroundImage="/images/img/Africa.jpg">
        <h3 className="text-[30px] font-sans opacity-80 mb-2 mt-4">
          协助我们寻找需要帮助的小孩，还他们
        </h3>
        <h1 className="text-[48px] font-sans opacity-80 mb-4">一双翅膀</h1>
      </Banner>

      {/* Form Section */}
      <section className="bg-[var(--color-brand-lightgrey)]">
        <div className="container mx-auto max-w-[960px]">
          <iframe
            width="100%"
            id="goldendata_form_vAzl4E"
            className="mt-[2em]"
            height="2466"
            src="https://jinshuju.net/f/vAzl4E?background=white&banner=show&embedded=true"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
