'use client';

import {
  Power,
  Video,
  Home,
  User,
  Globe,
  Flag,
  Award,
  ThumbsUp,
  Star
} from 'lucide-react';
import Banner from '../components/Banner';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import { useI18n } from '../contexts/I18nContext';

export default function AboutPage() {
  const { t } = useI18n();

  // Roadmap data with translations
  const rowOneItems = [
    {
      date: '2015 Oct.',
      title: t('about', 'roadMap.steps.step1.line1').split('。')[0],
      content: [
        t('about', 'roadMap.steps.step1.line1'),
        t('about', 'roadMap.steps.step1.line2')
      ],
      color: '#f26739',
      icon: <Power className="w-8 h-8" />,
      position: 'top' as const
    },
    {
      date: '2015 Nov.',
      title: t('about', 'roadMap.steps.step2.line1').split(/,|。/)[0],
      content: [
        t('about', 'roadMap.steps.step2.line1'),
        t('about', 'roadMap.steps.step2.line2')
      ],
      color: '#91beae',
      icon: <Video className="w-8 h-8" />,
      position: 'bottom' as const
    },
    {
      date: '2016 Jan.',
      title: t('about', 'roadMap.steps.step3').split(/,|。/)[0],
      content: [t('about', 'roadMap.steps.step3')],
      color: '#9bcb3c',
      icon: <User className="w-8 h-8" />,
      position: 'top' as const
    },
    {
      date: '2016 Mar.',
      title: t('about', 'roadMap.steps.step4.line1').split(/,|。/)[0],
      content: [
        t('about', 'roadMap.steps.step4.line1'),
        t('about', 'roadMap.steps.step4.line2')
      ],
      color: '#104a57',
      icon: <Home className="w-8 h-8" />,
      position: 'bottom' as const
    },
    {
      date: '2016 May',
      title: t('about', 'roadMap.steps.step5.line1').split(/,|。/)[0],
      content: [
        t('about', 'roadMap.steps.step5.line1'),
        t('about', 'roadMap.steps.step5.line2')
      ],
      color: '#a86eae',
      icon: <Globe className="w-8 h-8" />,
      position: 'top' as const
    }
  ];

  const rowTwoItems = [
    {
      date: '2017 Sept.',
      title: t('about', 'roadMap.steps.step6.line1').split(/,|。/)[0],
      content: [t('about', 'roadMap.steps.step6.line1')],
      color: '#f26739',
      icon: <Flag className="w-8 h-8" />,
      position: 'top' as const
    },
    {
      date: '2018 Jun.',
      title: t('about', 'roadMap.steps.step7.line1').split(/,|。/)[0],
      content: [t('about', 'roadMap.steps.step7.line1')],
      color: '#91beae',
      icon: <ThumbsUp className="w-8 h-8" />,
      position: 'bottom' as const
    },
    {
      date: '2018 Aug.',
      title: t('about', 'roadMap.steps.step8.line1').split(/。/)[0],
      content: [t('about', 'roadMap.steps.step8.line1')],
      color: '#9bcb3c',
      icon: <Award className="w-8 h-8" />,
      position: 'top' as const
    },
    {
      date: '2018 Sept.',
      title: t('about', 'roadMap.steps.step9.line1').split(/,|。/)[0],
      content: [t('about', 'roadMap.steps.step9.line1')],
      color: '#104a57',
      icon: <Star className="w-8 h-8" />,
      position: 'bottom' as const
    }
  ];

  // FAQ data with translations
  const faqItems = [
    {
      q: t('about', 'faq.question1'),
      a: t('about', 'faq.answer1')
    },
    {
      q: t('about', 'faq.question2'),
      a:
        t('about', 'faq.answer2.main') +
        '\n- ' +
        t('about', 'faq.answer2.list1') +
        '\n- ' +
        t('about', 'faq.answer2.list2') +
        '\n- ' +
        t('about', 'faq.answer2.list3')
    },
    {
      q: t('about', 'faq.question3'),
      a:
        t('about', 'faq.answer3.main') +
        '\n- ' +
        t('about', 'faq.answer3.list1') +
        '\n- ' +
        t('about', 'faq.answer3.list2') +
        '\n- ' +
        t('about', 'faq.answer3.list3') +
        '\n- ' +
        t('about', 'faq.answer3.list4')
    },
    {
      q: t('about', 'faq.question4'),
      a: t('about', 'faq.answer4')
    },
    {
      q: t('about', 'faq.question5'),
      a: t('about', 'faq.answer5')
    },
    {
      q: t('about', 'faq.question6'),
      a:
        t('about', 'faq.answer6.line1') + '\n' + t('about', 'faq.answer6.line2')
    },
    {
      q:
        t('about', 'faq.question7.title') +
        ' ' +
        t('about', 'faq.question7.tag'),
      a: t('about', 'faq.answer7')
    },
    {
      q:
        t('about', 'faq.question8.title') +
        ' ' +
        t('about', 'faq.question8.tag'),
      a:
        t('about', 'faq.answer8.main') +
        '\n' +
        t('about', 'faq.answer8.list1.title') +
        ' ' +
        t('about', 'faq.answer8.list1.line1') +
        ' ' +
        t('about', 'faq.answer8.list1.line2') +
        '\n' +
        t('about', 'faq.answer8.list2.title') +
        ' ' +
        t('about', 'faq.answer8.list2.line1') +
        ' ' +
        t('about', 'faq.answer8.list2.line2') +
        '\n' +
        t('about', 'faq.answer8.list3.title') +
        ' ' +
        t('about', 'faq.answer8.list3.line1') +
        ' ' +
        t('about', 'faq.answer8.list3.line2') +
        '\n' +
        t('about', 'faq.answer8.list4.title') +
        ' ' +
        t('about', 'faq.answer8.list4.line1') +
        '\n' +
        t('about', 'faq.answer8.list5')
    },
    {
      q: t('about', 'faq.question9'),
      a: t('about', 'faq.answer9')
    }
  ];

  return (
    <div className="bg-[var(--color-brand-lightgrey)] min-h-screen font-sans">
      {/* Banner Section */}
      <Banner backgroundImage="/images/img/about-banner.jpg">
        <h1 className="text-[48px] font-sans opacity-80 mb-4 mt-4">
          {t('about', 'banner')}
        </h1>
      </Banner>

      <div className="container mx-auto px-4 py-16 max-w-[960px]">
        {/* Mission */}
        <section className="mb-16 text-center">
          <div className="text-center my-[4em] px-[2em] text-[var(--color-text-grey)]">
            <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
            <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">
              {t('about', 'mission.title')}
            </h2>
            <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
            <h5 className="text-[20px] mb-[80px]">Our Mission</h5>
          </div>

          <div className="mb-12">
            <h3 className="text-[2em] font-bold text-[#4a90e2] mb-4 leading-relaxed">
              {t('about', 'mission.summary.line1')}
              <br />
              {t('about', 'mission.summary.line2')}
            </h3>
          </div>

          <div className="text-left max-w-[800px] mx-auto px-4">
            <ul className="space-y-6 text-[18px] text-[#5a5a5a] list-disc pl-6">
              <li>
                {t('about', 'mission.details.line1.prefix')}{' '}
                <span className="font-bold text-[#4a90e2]">
                  {t('about', 'mission.details.line1.strong')}
                </span>{' '}
                {t('about', 'mission.details.line1.suffix')}
              </li>
              <li>
                {t('about', 'mission.details.line2.prefix')}{' '}
                <span className="font-bold text-[#4a90e2]">
                  {t('about', 'mission.details.line2.strong')}
                </span>{' '}
                {t('about', 'mission.details.line2.suffix')}
              </li>
              <li>
                {t('about', 'mission.details.line3.prefix')}{' '}
                <span className="font-bold text-[#4a90e2]">
                  {t('about', 'mission.details.line3.strong')}
                </span>{' '}
                {t('about', 'mission.details.line3.suffix')}
              </li>
            </ul>
          </div>
        </section>

        {/* Roadmap */}
        <Roadmap
          title={t('about', 'roadMap.title')}
          subtitle="Our Road Map"
          rowOneItems={rowOneItems}
          rowTwoItems={rowTwoItems}
          startLabel={t('about', 'roadMap.steps.start')}
          endLabel={t('about', 'roadMap.steps.end')}
        />

        {/* FAQ */}
        <Faq title={t('about', 'faq.title')} subtitle="FAQ" items={faqItems} />
      </div>
    </div>
  );
}
