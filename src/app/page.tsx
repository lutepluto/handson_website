'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import VideoModal from './components/VideoModal';
import Banner from './components/Banner';
import { useI18n } from './contexts/I18nContext';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { t } = useI18n();

  return (
    <div className="bg-[var(--color-brand-lightgrey)]">
      {/* Hero Section */}
      <Banner backgroundImage="/images/img/handsnotext.jpg">
        <h3 className="text-[30px] font-sans opacity-80 mb-2 mt-4">
          {t('home', 'banner.line1')}
        </h3>
        {t('home', 'banner.line2') && (
          <h3 className="text-[30px] font-sans opacity-80 mb-2">
            {t('home', 'banner.line2')}
          </h3>
        )}
        <h1 className="text-[48px] font-sans opacity-80 mb-4">
          {t('home', 'banner.line3')}
        </h1>
      </Banner>

      {/* What we do */}
      <section className="font-sans max-w-[960px] mx-auto">
        <div className="container mx-auto">
          <div className="bg-[var(--color-brand-lightgrey)]">
            <div className="text-center my-[4em] px-[2em] text-[var(--color-text-grey)]">
              <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
              <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">
                {t('home', 'goal.title')}
              </h2>
              <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
              <h5 className="text-[20px] mb-[80px]">What we do?</h5>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-[var(--color-brand-purple)]">
            <div className="relative w-full md:w-[42%] h-[300px] md:h-auto overflow-hidden">
              <Image
                src="/images/img/nannan-crop.jpg"
                alt="Nannan"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 py-[2em] px-[1.5em] md:py-[1em] md:px-[3em] text-white">
              <h2 className="my-[0.5em] md:my-[1em] text-[2em]">
                Hands On 展翼计划
              </h2>
              <p className="my-[1.5em] font-light text-[18px] leading-relaxed">
                {t('home', 'goal.content')}
              </p>
              <div className="text-center mt-[2em] mb-[2em]">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-block px-6 py-2 rounded-full border border-white hover:bg-white hover:text-[var(--color-brand-purple)] transition-colors cursor-pointer"
                >
                  {t('home', 'goal.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="http://player.youku.com/embed/XMTU2MzIxNjkyNA==?autoplay=1"
      />

      {/* How we do it */}
      <section className="font-sans max-w-[960px] mx-auto">
        <div className="container mx-auto">
          <div className="bg-[var(--color-brand-lightgrey)]">
            <div className="text-center my-[4em] mx-[2em] text-[var(--color-text-grey)]">
              <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
              <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">
                {t('home', 'steps.title')}
              </h2>
              <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
              <h5 className="text-[20px] mb-[80px]">How we do it?</h5>
            </div>
          </div>

          <div className="flex items-stretch max-md:flex-col">
            {/* Step 1 */}
            <div className="flex-1 relative min-h-[370px] py-[1em] px-[2em] text-white bg-[var(--color-brand-blue)] group hover:z-10">
              <div className="text-center">
                <div className="mt-[10px] mb-[30px] text-[40px] font-medium text-left">
                  1
                </div>
                <div className="h-[60px] flex justify-center">
                  <Image
                    src="/images/img/info.png"
                    alt="Info"
                    width={60}
                    height={60}
                    className="h-full w-auto"
                  />
                </div>
                <h3 className="mt-[30px] mb-[30px] text-[25px] font-bold">
                  {t('home', 'steps.step1.title')}
                </h3>
                <p className="mt-[1em] mb-[1em] px-[2em]">
                  {t('home', 'steps.step1.content')}
                </p>
              </div>
              <Link
                href="/apply"
                className="hidden group-hover:block absolute inset-0 bg-black/80 z-20"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-bold whitespace-nowrap">
                  {t('home', 'steps.step1.button')}
                </span>
              </Link>
            </div>

            {/* Step 2 */}
            <div className="flex-1 relative min-h-[370px] py-[1em] px-[2em] text-white bg-[var(--color-brand-green)] ml-[8px] max-md:ml-0 max-md:mt-[8px] group hover:z-10">
              <div className="text-center">
                <div className="mt-[10px] mb-[30px] text-[40px] font-medium text-left">
                  2
                </div>
                <div className="h-[60px] flex justify-center">
                  <Image
                    src="/images/img/design.png"
                    alt="Design"
                    width={60}
                    height={60}
                    className="h-full w-auto"
                  />
                </div>
                <h3 className="mt-[30px] mb-[30px] text-[25px] font-bold">
                  {t('home', 'steps.step2.title')}
                </h3>
                <p className="mt-[1em] mb-[1em] px-[2em]">
                  {t('home', 'steps.step2.content')}
                </p>
              </div>
              <Link
                href="/about"
                className="hidden group-hover:block absolute inset-0 bg-black/80 z-20"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-bold whitespace-nowrap">
                  {t('home', 'steps.step2.button')}
                </span>
              </Link>
            </div>

            {/* Step 3 */}
            <div className="flex-1 relative min-h-[370px] py-[1em] px-[2em] text-white bg-[var(--color-brand-orange)] ml-[8px] max-md:ml-0 max-md:mt-[8px] group hover:z-10">
              <div className="text-center">
                <div className="mt-[10px] mb-[30px] text-[40px] font-medium text-left">
                  3
                </div>
                <div className="h-[60px] flex justify-center">
                  <Image
                    src="/images/img/make.png"
                    alt="Make"
                    width={60}
                    height={60}
                    className="h-full w-auto"
                  />
                </div>
                <h3 className="mt-[30px] mb-[30px] text-[25px] font-bold">
                  {t('home', 'steps.step3.title')}
                </h3>
                <p className="mt-[1em] mb-[1em] px-[2em]">
                  {t('home', 'steps.step3.content')}
                </p>
              </div>
              <Link
                href="/help"
                className="hidden group-hover:block absolute inset-0 bg-black/80 z-20"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-bold whitespace-nowrap">
                  {t('home', 'steps.step3.button')}
                </span>
              </Link>
            </div>

            {/* Step 4 */}
            <div className="flex-1 relative min-h-[370px] py-[1em] px-[2em] text-white bg-[var(--color-brand-bluepurple)] ml-[8px] max-md:ml-0 max-md:mt-[8px] group hover:z-10">
              <div className="text-center">
                <div className="mt-[10px] mb-[30px] text-[40px] font-medium text-left">
                  4
                </div>
                <div className="h-[60px] flex justify-center">
                  <Image
                    src="/images/img/track.png"
                    alt="Track"
                    width={60}
                    height={60}
                    className="h-full w-auto"
                  />
                </div>
                <h3 className="mt-[30px] mb-[30px] text-[25px] font-bold">
                  {t('home', 'steps.step4.title')}
                </h3>
                <p className="mt-[1em] mb-[1em] px-[2em]">
                  {t('home', 'steps.step4.content')}
                </p>
              </div>
              <Link
                href="/help"
                className="hidden group-hover:block absolute inset-0 bg-black/80 z-20"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-bold whitespace-nowrap">
                  {t('home', 'steps.step4.button')}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-[var(--color-brand-lightgrey)] font-sans max-w-[960px] mx-auto">
        <div className="container mx-auto">
          <div className="row">
            <div className="my-[5em] px-[5em] max-md:px-[1em]">
              <h3 className="text-[var(--color-text-grey)] text-[40px] font-medium mt-[80px]">
                {t('home', 'promise.title')}
              </h3>
              <h1 className="text-[#4d8ab6] mt-[40px] text-[50px] font-light mb-[40px]">
                {t('home', 'promise.content')}
              </h1>
              <div className="text-center my-[2em]">
                <Link
                  href="/about"
                  className="inline-block text-[20px] text-[#4d8ab6] px-[3em] py-[10px] border-[2px] border-[#4d8ab6] rounded-[2em] hover:bg-[#4d8ab6] hover:text-white transition-all duration-200"
                >
                  {t('home', 'moreButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
