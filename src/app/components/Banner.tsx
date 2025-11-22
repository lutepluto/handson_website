interface BannerProps {
  backgroundImage: string;
  children: React.ReactNode;
}

export default function Banner({ backgroundImage, children }: BannerProps) {
  return (
    <section className="font-sans max-w-[960px] mx-auto">
      <div className="container mx-auto">
        <div
          className="bg-no-repeat bg-cover bg-center w-full py-[10em] max-md:px-[3em] md:px-[5em] lg:px-[16em]"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="border-[8px] border-white/70 px-8 text-center text-white bannertext">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
