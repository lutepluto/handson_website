'use client';

import Image from 'next/image';
import { useI18n } from '../contexts/I18nContext';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-white border-t border-black/10 font-sans w-full">
      <div className="container max-w-[960px] mx-auto py-4">
        <div className="flex flex-wrap">
          {/* Column 1: Logo and Intro */}
          <div className="w-full md:w-7/12 px-8">
            <Image
              src="/images/handson-logo.png"
              alt="Handson Logo"
              width={200}
              height={67}
              className="my-4 w-[200px]"
            />
            <p className="text-[14px] mb-2 text-[#5a5a5a]">
              {t('common', 'footer.about.line1')}
            </p>
            <p className="text-[14px] text-[#5a5a5a]">
              {t('common', 'footer.about.line2')}
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="w-full md:w-3/12 px-8 mt-8 md:mt-0">
            <h4 className="text-[15px] font-sans mt-[35px] mb-2 font-bold text-[#5a5a5a]">
              {t('common', 'footer.contact.title')}
            </h4>
            <p className="text-[14px] font-sans mb-2 text-[#5a5a5a]">
              <span>{t('common', 'footer.contact.email')} </span>
              techforgood.china@gmail.com
            </p>
            <p className="text-[14px] font-sans mb-2 text-[#5a5a5a]">
              <span>{t('common', 'footer.contact.wechat')} </span>wow3dhand
            </p>
            <div className="flex gap-2 mt-2">
              <div className="inline-block mx-[0.25em]">
                <Image
                  src="/images/img/wechat-green.png"
                  alt="WeChat"
                  width={30}
                  height={30}
                  className="w-[30px]"
                />
              </div>
              <div className="inline-block mx-[0.25em]">
                <Image
                  src="/images/img/mail_grande.png"
                  alt="Email"
                  width={30}
                  height={30}
                  className="w-[30px]"
                />
              </div>
            </div>
          </div>

          {/* Column 3: QR Code */}
          <div className="w-full md:w-2/12 px-4 mt-4 md:mt-0">
            <Image
              src="/images/qr.webp"
              alt="QR Code"
              width={150}
              height={150}
              className="my-4 w-full max-w-[150px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
