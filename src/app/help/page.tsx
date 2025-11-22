export default function HelpPage() {
  return (
    <div className="bg-[var(--color-brand-lightgrey)] min-h-screen font-sans">
      {/* Banner Section */}
      <section className="font-sans max-w-[960px] mx-auto">
        <div className="container mx-auto">
          <div className="bg-[url('/images/img/join-banner.jpg')] bg-no-repeat bg-cover bg-center w-full py-[10em] max-md:px-[3em] md:px-[5em] lg:px-[20em]">
            <div className="border-[8px] border-white/70 px-8 text-center text-white bannertext">
              <h1 className="text-[48px] font-sans opacity-80 mb-4">
                加入我们
              </h1>
              <h3 className="text-[30px] font-sans opacity-80 mb-2 mt-4">
                成为志愿者网络的一份子，用简单的设计，帮助大部份人。
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[var(--color-brand-lightgrey)]">
        <div className="container mx-auto max-w-[960px]">
          <iframe
            width="100%"
            id="goldendata_form_4wW6YZ"
            className="mt-[2em]"
            allowTransparency
            height="2110"
            src="https://jinshuju.net/f/4wW6YZ?background=white&banner=show&embedded=true"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
