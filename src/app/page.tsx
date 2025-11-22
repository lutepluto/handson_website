'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Settings, Users, Activity } from 'lucide-react';
import { useState } from 'react';
import VideoModal from './components/VideoModal';
import Banner from './components/Banner';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <div className="bg-[var(--color-brand-lightgrey)]">
      {/* Hero Section */}
      <Banner backgroundImage="/images/img/handsnotext.jpg">
        <h3 className="text-[30px] font-sans opacity-80 mb-2 mt-4">
          中国有2400万肢残人士
        </h3>
        <h3 className="text-[30px] font-sans opacity-80 mb-2">
          其中4.6％是0-14岁的
        </h3>
        <h1 className="text-[48px] font-sans opacity-80 mb-4">青少年儿童</h1>
      </Banner>

      {/* What we do */}
      <section className="font-sans max-w-[960px] mx-auto">
        <div className="container mx-auto">
          <div className="bg-[var(--color-brand-lightgrey)]">
            <div className="text-center my-[4em] px-[2em] text-[var(--color-text-grey)]">
              <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
              <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">
                我们做什么?
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
              <p className="my-[0.5em] md:my-[1em] text-[1.5em]">
                通过设计，制作经济简易的3D打印机械义肢，并开源与传播这项技术，展翼计划希望能帮助中国上百万有肢体残疾问题的青少年儿童。
              </p>
              <div className="text-center mt-[2em] mb-[2em]">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-block border-[2px] border-white rounded-[2em] px-[2em] py-[10px] text-[22px] hover:bg-white hover:text-[var(--color-brand-purple)] transition-all duration-200 cursor-pointer"
                >
                  了解南南的故事
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
                我们怎么做?
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
                  登记义肢需求信息
                </h3>
                <p className="mt-[1em] mb-[1em] px-[2em]">
                  我们会配对可以帮忙设计与制作的志愿者
                </p>
              </div>
              <Link
                href="/apply"
                className="hidden group-hover:block absolute inset-0 bg-black/80 z-20"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-bold whitespace-nowrap">
                  - 立刻申请 -
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
                  设计定制化的义肢
                </h3>
                <p className="mt-[1em] mb-[1em] px-[2em]">
                  根据收集上来的数据，我们会设计适合的模型
                </p>
              </div>
              <Link
                href="/about"
                className="hidden group-hover:block absolute inset-0 bg-black/80 z-20"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-bold whitespace-nowrap">
                  - 了解技术 -
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
                  通过志愿者网络制作
                </h3>
                <p className="mt-[1em] mb-[1em] px-[2em]">
                  我们通过我们遍布全国的志愿者网络为需求方制作义肢
                </p>
              </div>
              <Link
                href="/help"
                className="hidden group-hover:block absolute inset-0 bg-black/80 z-20"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-bold whitespace-nowrap">
                  - 我想帮助 -
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
                  跟踪改进义肢
                </h3>
                <p className="mt-[1em] mb-[1em] px-[2em]">
                  我们会针对受助者进行定期的回访，不断更新和辅助义肢在生活中的使用情况
                </p>
              </div>
              <Link
                href="/help"
                className="hidden group-hover:block absolute inset-0 bg-black/80 z-20"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-bold whitespace-nowrap">
                  - 立即加入 -
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
                并且，我们承诺︰
              </h3>
              <h1 className="text-[#4d8ab6] mt-[40px] text-[50px] font-light mb-[40px]">
                所有设计制作的义肢，都将免费捐赠给有需要的人。
              </h1>
              <div className="text-center my-[2em]">
                <Link
                  href="/about"
                  className="inline-block text-[20px] text-[#4d8ab6] px-[3em] py-[10px] border-[2px] border-[#4d8ab6] rounded-[2em] hover:bg-[#4d8ab6] hover:text-white transition-all duration-200"
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
