import svgPaths from "./svg-pk7ikfe7m8";
import imgImage5 from "figma:asset/4b430c62ada5f995e1d0f1d29568a1758e4cf3e6.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Objectivity:Medium',sans-serif] items-start left-[calc(50%-107.49px)] not-italic top-[calc(50%-181.65px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#2f6d7c] text-[184px] tracking-[3.68px] w-[324.963px]">
        <p className="leading-none">779</p>
      </div>
      <p className="leading-[1.2] min-w-full relative shrink-0 text-[#5ed3b0] text-[36px] tracking-[0.72px] w-[min-content]">Excellent</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+0.19px)] top-[calc(50%+62.22px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute h-[73.069px] left-[calc(50%+0.19px)] rounded-[76.914px] top-[calc(50%+63.18px)] translate-x-[-50%] translate-y-[-50%] w-[540.323px]" style={{ backgroundImage: "linear-gradient(90.5315deg, rgb(228, 159, 159) 2.7086%, rgb(238, 192, 149) 48.566%, rgb(75, 205, 167) 98.504%)" }} />
      <div className="absolute bg-[#b0e56d] h-[90.374px] left-[calc(50%+124.22px)] rounded-[19.229px] top-[calc(50%+62.22px)] translate-x-[-50%] translate-y-[-50%] w-[7.691px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(50%+0.19px)] top-[calc(50%+84.41px)] translate-x-[-50%] translate-y-[-50%]">
      <Group />
      <p className="absolute font-['Objectivity:Medium',sans-serif] leading-[1.2] left-[calc(50%-269.97px)] not-italic text-[24px] text-[rgba(47,109,124,0.6)] text-nowrap top-[calc(50%+122.79px)] tracking-[-0.48px]">300</p>
      <p className="absolute font-['Objectivity:Medium',sans-serif] leading-[1.2] left-[calc(50%+270.08px)] not-italic text-[24px] text-[rgba(47,109,124,0.6)] text-nowrap text-right top-[calc(50%+122.79px)] tracking-[-0.48px] translate-x-[-100%]">900</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.212px] items-start leading-[1.2] left-[calc(50%-192.08px)] not-italic text-[#2f6d7c] top-[calc(50%+261.11px)] translate-x-[-50%] translate-y-[-50%] w-[155.782px]">
      <p className="font-['Objectivity:Regular',sans-serif] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Last updated</p>
      <p className="font-['Objectivity:Medium',sans-serif] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">10 days ago</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[23px] items-center left-[calc(50%+223.49px)] top-[calc(50%-111.67px)] translate-x-[-50%] translate-y-[-50%]">
      <p className="font-['Objectivity:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#2f6d7c] text-[36px] text-nowrap text-right tracking-[0.72px]">+30</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[23.074px] relative w-0">
            <div className="absolute inset-[-8.67%_-14.73px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4558 27.0743">
                <path d={svgPaths.p3094c00} fill="var(--stroke-0, #47CCA5)" id="Vector 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%+0.14px)] top-[calc(50%-0.27px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute h-[711.458px] left-[calc(50%+0.14px)] top-[calc(50%-0.27px)] translate-x-[-50%] translate-y-[-50%] w-[663.278px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 663.278 711.458">
          <path d={svgPaths.p6a19700} fill="var(--fill-0, white)" id="Vector 2" />
        </svg>
      </div>
      <div className="absolute h-[50px] left-[calc(50%+195px)] top-[calc(50%+265px)] translate-x-[-50%] translate-y-[-50%] w-[149px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <Frame1 />
      <Group1 />
      <Frame2 />
      <Frame />
    </div>
  );
}

function CreditScoreCalculator() {
  return (
    <div className="absolute h-[712px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[663px]" data-name="Credit score calculator">
      <Group2 />
    </div>
  );
}

export default function CreditScoreCalculator1() {
  return (
    <div className="relative size-full" data-name="Credit score calculator">
      <CreditScoreCalculator />
    </div>
  );
}