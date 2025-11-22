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

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-brand-lightgrey)] min-h-screen font-sans">
      {/* Banner Section */}
      <Banner backgroundImage="/images/img/about-banner.jpg">
        <h1 className="text-[48px] font-sans opacity-80 mb-4 mt-4">展翼计划</h1>
      </Banner>

      <div className="container mx-auto px-4 py-16 max-w-[960px]">
        {/* Mission */}
        <section className="mb-16 text-center">
          <div className="text-center my-[4em] px-[2em] text-[var(--color-text-grey)]">
            <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
            <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">
              我们的使命
            </h2>
            <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
            <h5 className="text-[20px] mb-[80px]">Our Mission</h5>
          </div>

          <div className="mb-12">
            <h3 className="text-[2em] font-bold text-[#4a90e2] mb-4 leading-relaxed">
              『 以普及性的创新科技
              <br />
              满足弱势群体的切身之需 』
            </h3>
          </div>

          <div className="text-left max-w-[800px] mx-auto px-4">
            <ul className="space-y-6 text-[18px] text-[#5a5a5a] list-disc pl-6">
              <li>
                我们关注{' '}
                <span className="font-bold text-[#4a90e2]">
                  弱势群体的切身之需
                </span>{' '}
                。我们认为社会的发展不应该遗忘或忽视弱势群体；
              </li>
              <li>
                我们相信科技的发展是有温度的。我们认为{' '}
                <span className="font-bold text-[#4a90e2]">创新科技</span>{' '}
                的应用能够给弱势群体带了新的解决方法；
              </li>
              <li>
                我们坚持{' '}
                <span className="font-bold text-[#4a90e2]">普及性的方式</span>{' '}
                来解决问题。立足于科技创新，我们以普及性的方式来研发、引进和传播相关的技术方案，应用到弱势群体的具体问题上
              </li>
            </ul>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-16">
          <div className="text-center my-[4em] px-[2em] text-[var(--color-text-grey)]">
            <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
            <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">
              我们的历程
            </h2>
            <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
            <h5 className="text-[20px] mb-[80px]">Our Road Map</h5>
          </div>

          <div className="pb-12">
            {/* Row 1 */}
            <div className="mb-12">
              <div className="flex items-center justify-center">
                {/* Start Label */}
                <div className="bg-[#868686] text-white px-4 text-sm flex items-center justify-center h-8 self-center mr-[-1px] z-20 relative">
                  盘古开天辟地
                </div>

                <div className="grid grid-cols-5 flex-1">
                  {[
                    {
                      date: '2015 Oct.',
                      title: '项目启动',
                      content: [
                        '通过腾讯公益众筹到项目启动资金。',
                        '通过各种渠道收集到需要义肢帮助的需求方信息30例。'
                      ],
                      color: '#f26739', // orangered
                      icon: <Power className="w-8 h-8" />,
                      position: 'top'
                    },
                    {
                      date: '2015 Nov.',
                      title: '纪录片上线',
                      content: [
                        '项目纪录短片上线,全平台播放超过10万。',
                        '基于3D打印机械义肢开源社区e-NABLE的义肢模型改进了第一版的机械手模型。'
                      ],
                      color: '#91beae', // cadetblue
                      icon: <Video className="w-8 h-8" />,
                      position: 'bottom'
                    },
                    {
                      date: '2016 Jan.',
                      title: '工作坊举办',
                      content: [
                        '在北京，上海，广州三地举办三场机械手制作工作坊，参与志愿者超过100人，制作16只机械义肢并全部配送给需求方。'
                      ],
                      color: '#9bcb3c', // limegreen
                      icon: <User className="w-8 h-8" />,
                      position: 'top'
                    },
                    {
                      date: '2016 Mar.',
                      title: '核心团队组建',
                      content: [
                        '组建核心运营团队，针对义肢研发，志愿者网络建立，义肢设计师管理，线上平台，工作坊产品等方向设定计划。',
                        '项目入驻清华X-lab，拟以社企形式运营。'
                      ],
                      color: '#104a57', // darkslategrey
                      icon: <Home className="w-8 h-8" />,
                      position: 'bottom'
                    },
                    {
                      date: '2016 May',
                      title: '扩展与合作',
                      content: [
                        '与AIESEC合作，义肢制作工作坊将会扩展到深圳，武汉，哈尔滨，广州，北京，苏州等更多城市。',
                        '针对更多其他残疾情况的义肢模型进行开发。'
                      ],
                      color: '#a86eae', // bluepurple
                      icon: <Globe className="w-8 h-8" />,
                      position: 'top'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center relative group"
                    >
                      {item.position === 'top' ? (
                        <>
                          {/* Top: Text */}
                          <div className="h-[280px] flex flex-col justify-end w-full px-2 pb-4">
                            <div className="text-left">
                              <h4
                                className="text-2xl font-bold mb-2"
                                style={{ color: item.color }}
                              >
                                {item.date}
                              </h4>
                              {item.content.map((paragraph, i) => (
                                <p
                                  key={i}
                                  className="text-sm leading-relaxed text-left mb-2 last:mb-0"
                                  style={{ color: item.color }}
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* Middle: Bar */}
                          <div
                            className="w-full h-8 relative flex items-center justify-center"
                            style={{ backgroundColor: item.color }}
                          >
                            <div
                              className="w-4 h-4 bg-white rounded-full border-2"
                              style={{ borderColor: item.color }}
                            ></div>
                          </div>

                          {/* Bottom: Icon */}
                          <div className="h-[280px] flex flex-col justify-start w-full">
                            <div
                              className="h-8 w-2 mx-auto"
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <div
                              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white shadow-lg z-10"
                              style={{ backgroundColor: item.color }}
                            >
                              {item.icon}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Top: Icon */}
                          <div className="h-[280px] flex flex-col justify-end w-full">
                            <div
                              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white shadow-lg z-10"
                              style={{ backgroundColor: item.color }}
                            >
                              {item.icon}
                            </div>
                            <div
                              className="h-8 w-2 mx-auto"
                              style={{ backgroundColor: item.color }}
                            ></div>
                          </div>

                          {/* Middle: Bar */}
                          <div
                            className="w-full h-8 relative flex items-center justify-center"
                            style={{ backgroundColor: item.color }}
                          >
                            <div
                              className="w-4 h-4 bg-white rounded-full border-2"
                              style={{ borderColor: item.color }}
                            ></div>
                          </div>

                          {/* Bottom: Text */}
                          <div className="h-[280px] flex flex-col justify-start w-full px-2 pt-4">
                            <div className="text-left">
                              <h4
                                className="text-2xl font-bold mb-2"
                                style={{ color: item.color }}
                              >
                                {item.date}
                              </h4>
                              {item.content.map((paragraph, i) => (
                                <p
                                  key={i}
                                  className="text-sm leading-relaxed text-left mb-2 last:mb-0"
                                  style={{ color: item.color }}
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-4 flex-1">
                  {[
                    {
                      date: '2017 Sept.',
                      title: '腾讯99公益日',
                      content: [
                        '展翼计划作为科技+公益代表受邀参加腾讯“99公益日”及腾讯公益市集，腾讯公益携手展翼计划拍摄公益专题宣传片，发布于99公益日首页推荐位置，播放量超过1600万。'
                      ],
                      color: '#f26739', // orangered
                      icon: <Flag className="w-8 h-8" />,
                      position: 'top'
                    },
                    {
                      date: '2018 Jun.',
                      title: '联合国开发计划署奖项',
                      content: [
                        '展翼计划获得联合国开发计划署（UNDP）举办的“青年创客对话”挑战赛中国区冠军，最终代表中国区参与亚太区决赛并荣获“亚太青年可持续发展创新奖”。'
                      ],
                      color: '#91beae', // cadetblue
                      icon: <ThumbsUp className="w-8 h-8" />,
                      position: 'bottom'
                    },
                    {
                      date: '2018 Aug.',
                      title: '明日益才奖项',
                      content: ['展翼计划获得首届明日益才社会创新大赛铜奖。'],
                      color: '#9bcb3c', // limegreen
                      icon: <Award className="w-8 h-8" />,
                      position: 'top'
                    },
                    {
                      date: '2018 Sept.',
                      title: '黑客马拉松',
                      content: [
                        '展翼计划子项目Tech For Good与腾讯广告算法大赛联合举办以“AI助力寻回跨年龄走失儿童”为核心议题的黑客马拉松，并受到参赛者及公益组织的一致好评。'
                      ],
                      color: '#104a57', // darkslategrey
                      icon: <Star className="w-8 h-8" />,
                      position: 'bottom'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center relative group"
                    >
                      {item.position === 'top' ? (
                        <>
                          {/* Top: Text */}
                          <div className="h-[280px] flex flex-col justify-end w-full px-2">
                            <div className="text-left">
                              <h4
                                className="text-2xl font-bold mb-2"
                                style={{ color: item.color }}
                              >
                                {item.date}
                              </h4>
                              {item.content.map((paragraph, i) => (
                                <p
                                  key={i}
                                  className="text-sm leading-relaxed text-left mb-2 last:mb-0"
                                  style={{ color: item.color }}
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* Middle: Bar */}
                          <div
                            className="w-full h-8 relative flex items-center justify-center"
                            style={{ backgroundColor: item.color }}
                          >
                            <div
                              className="w-4 h-4 bg-white rounded-full border-2"
                              style={{ borderColor: item.color }}
                            ></div>
                          </div>

                          {/* Bottom: Icon */}
                          <div className="h-[280px] flex flex-col justify-start w-full">
                            <div
                              className="h-8 w-2 mx-auto"
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <div
                              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white shadow-lg z-10"
                              style={{ backgroundColor: item.color }}
                            >
                              {item.icon}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Top: Icon */}
                          <div className="h-[280px] flex flex-col justify-end w-full">
                            <div
                              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white shadow-lg z-10"
                              style={{ backgroundColor: item.color }}
                            >
                              {item.icon}
                            </div>
                            <div
                              className="h-8 w-2 mx-auto"
                              style={{ backgroundColor: item.color }}
                            ></div>
                          </div>

                          {/* Middle: Bar */}
                          <div
                            className="w-full h-8 relative flex items-center justify-center"
                            style={{ backgroundColor: item.color }}
                          >
                            <div
                              className="w-4 h-4 bg-white rounded-full border-2"
                              style={{ borderColor: item.color }}
                            ></div>
                          </div>

                          {/* Bottom: Text */}
                          <div className="h-[280px] flex flex-col justify-start w-full px-2">
                            <div className="text-left">
                              <h4
                                className="text-2xl font-bold mb-2"
                                style={{ color: item.color }}
                              >
                                {item.date}
                              </h4>
                              {item.content.map((paragraph, i) => (
                                <p
                                  key={i}
                                  className="text-[#5a5a5a] text-sm leading-relaxed text-left mb-2 last:mb-0"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* End Label */}
                <div className="bg-[#868686] text-white px-4 text-sm flex items-center justify-center h-8 self-center ml-[-1px] z-20 relative">
                  更美好的未来
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center my-[4em] px-[2em] text-[var(--color-text-grey)]">
            <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
            <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">
              或许你想知道的
            </h2>
            <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
            <h5 className="text-[20px] mb-[80px]">FAQ</h5>
          </div>

          <div className="space-y-8 px-4">
            {[
              {
                q: '1. 你们只帮助儿童吗？成年人昵？',
                a: '我们现在的机械义肢(Cyborg Beast)主要为儿童设计，所以会更有針对性地幫助3-14岁的青少年儿童受助者。义肢也适用于成人，我们也在 研发外观更仿真，更话合成人的义肢产品（如Flexy Hand)。'
              },
              {
                q: '2. 你们这个义肢能实现什么功能？对小朋友有什么实际帮助？',
                a: '我们的机械义肢主要实现的是抓握功能。 3D打印机械义胜作为手部輔助工具，并非为了完全实现真手的功能。但是对于手部残疾的小朋友来说，我们这款义肢的意义主要体现在︰\n- 生活中场景式的双手配合活动\n- 鍛炼残肢手部肌肉，促进正常发育\n- 将"双手配合使用"变成一个没有那么沮丧的学习过程，減少双手不能配合时的焦虑，有助于心理健康成长。'
              },
              {
                q: '3. 你们的义肢跟市面上的其他义肢比起来有什么不同呀？',
                a: '市面上已有的义肢产品从成本﹑外形﹑功能﹑重量等等都不适用於儿童，我们所做的3D打印机械义肢︰\n- 主要部件3D打印，生产成本低\n- 机械传动﹑装卸更换方便\n- 可以实现基本的抓握功能\n- 制作简单，对晋通人来说不存在制作门槛，适合大范圍普及'
              },
              {
                q: '4. 你们的义肢收费吗？',
                a: '需要义肢的小朋友通过展翼计划申请的义肢均为免费。'
              },
              {
                q: '5. 网上好多各种高级的脑电波之类的机械手啊，你们要不要试一下？',
                a: '项目不侧重研发高精尖科技，而侧重普及牲强的，为解决大多数人遇到的问题而设计的科技。'
              },
              {
                q: '6. 你们的产品都适用于什么残疾情况？',
                a: '针对手部残疾情况，我们目前分为三种主要手型︰短指﹑保留腕骨﹑沒有腕骨。\n对应三种手型，我们会分别研发义肢﹑义手和义臂。目前所有义肢的其本摸型都會基于开源义肢社区 e-NABLE (http://enablingthefuture.org)上的模型進行改进设汁。'
              },
              {
                q: '7. 我想学习制作这样的义肢帮助别人，具体如何做？ ＃设计师',
                a: '我们正在组建一个设计师志愿者网络，欢迎有3D打印经驗/3D建模經驗的朋友通过網站或者我们微信公众号（wow3dhand)报名。设计师报名之后需要参写到入门任务当中，完成入门任务并通过评定之後可以参考问题8选择适合您的工作。'
              },
              {
                q: '8. 设计师可以承担什麼工作？ ＃设计师',
                a: '完成入门任务的前提下，有四类工作可以選擇，可以多選︰\n1.志愿者设计师能力較强且有打印资源的设计师，我们会直接配对一位受助者，协助數據采集和沟通等工作，设计师独立解决具体案例。＜设计师的工作＞︰与受助者沟通，基於数据來独立设计模型〔可以自行设计也可以参考其他人研发的模型，自行打印组装义肢井寄给受助者。\n2.模型研发设计师我们协助和组织设计师基于上面提到的三种情况进行模型研发与侧试，会由合作的3D打印企业提供打印服务支持。＜设计师的工作＞︰基于三种基本情況挑選自己感兴趣的种类进行模型研发工作，我們的核心技術成員也会跟大家一起協作，我们提供3D打印服务支持。\n3.工作坊支持设计师每次工作坊我们会从受助者中挑選多位残疾情况类似（适配同一种模型）的人，每位设计师视情况分配1-3个受助者，根据测量数据，测试模型匹配度并进行一定调整，保证工作坊上志願者组裝的机械手适合受助者使用，会由合作的3D打印企业提供仃印服务支持。＜设汁师的工作＞︰基於被分配的受助者數据和基礎模型尝试制作1-2只手井对模型做一定微调，调整打印比例保证适合受助者，確定无误后，由我们统一打印并配送到工作坊由志願者进行组裝。\n4. 教育产品支持设计师根据具体教育产品设計情况，主要工作会是向學生提供一定时间的线上指导，协助學生學习机械义肢的制作并帮助到特定的受助者。\nPS. 除了志愿者设计师外，另外三类设计师都会根据项目运营情况获得补助。'
              },
              {
                q: '9. 我想帮忙，但我不具备相关专业能力，我可以贡献什么？',
                a: '如果你身边有需要帮助的人，请在我们的网站或者微信公众号(wow3dhand)上提交帮助申请，我们会定明处理并提供免費帮助。 如果你有其他資源介绍(3D打印，需求方寻找渠道，媒體，义肢研发等），希望你可以关注我们微信公众号并在后台给我们留言。'
              }
            ].map((faq, index) => (
              <div key={index} className="mb-8">
                <h4 className="font-bold text-lg mb-2 text-[#333]">{faq.q}</h4>
                <div className="text-[#5a5a5a] whitespace-pre-line leading-relaxed pl-4">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
