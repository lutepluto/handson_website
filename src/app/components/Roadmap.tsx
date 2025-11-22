import React from 'react';

interface RoadmapItem {
  date: string;
  title: string;
  content: string[];
  color: string;
  icon: React.ReactNode;
  position: 'top' | 'bottom';
}

interface RoadmapProps {
  title: string;
  subtitle: string;
  rowOneItems: RoadmapItem[];
  rowTwoItems: RoadmapItem[];
  startLabel: string;
  endLabel: string;
}

export default function Roadmap({
  title,
  subtitle,
  rowOneItems,
  rowTwoItems,
  startLabel,
  endLabel
}: RoadmapProps) {
  const renderTimelineItem = (item: RoadmapItem, index: number) => (
    <div key={index} className="flex flex-col items-center relative group">
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
  );

  return (
    <section className="mb-16 hidden md:block">
      <div className="text-center my-[4em] px-[2em] text-[var(--color-text-grey)]">
        <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
        <h2 className="inline-block px-[1em] text-[38px] mt-[50px]">{title}</h2>
        <div className="border-b-[2px] border-[#4d8ab6] w-[70px] inline-block mb-[5px]"></div>
        <h5 className="text-[20px] mb-[80px]">{subtitle}</h5>
      </div>

      <div className="pb-12">
        {/* Row 1 */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {/* Start Label */}
            <div className="bg-[#868686] text-white px-4 text-sm flex items-center justify-center h-8 self-center mr-[-1px] z-20 relative">
              {startLabel}
            </div>

            <div className="grid grid-cols-5 flex-1">
              {rowOneItems.map(renderTimelineItem)}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-4 flex-1">
              {rowTwoItems.map(renderTimelineItem)}
            </div>

            {/* End Label */}
            <div className="bg-[#868686] text-white px-4 text-sm flex items-center justify-center h-8 self-center ml-[-1px] z-20 relative">
              {endLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
