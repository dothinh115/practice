gsap.registerPlugin(ScrollTrigger);
const firstSection = document.querySelector(".firstSection");
const firstSectionMainImg = firstSection.querySelector(".main");
let firstSectionDataObj = {
  width: firstSectionMainImg.offsetWidth,
  height: firstSectionMainImg.offsetHeight,
};

const updateFirstSectionPos = (progress) => {
  const widthToUpdate =
    firstSectionDataObj.width + window.innerWidth * progress;
  const heightToUpdate = firstSectionDataObj.height + 100 * progress;
  gsap.to(firstSectionMainImg, {
    width: widthToUpdate + "px",
    height: heightToUpdate + "px",
    filter: `brightness(${1 - 0.5 * progress})`,
  });

  gsap.to(".sectionText", {
    yPercent: -100,
  });

  gsap.to([...leftImgArr, ...rightImgArr], {
    scale: 1 - 0.5 * progress,
  });
};

ScrollTrigger.create({
  trigger: firstSection,
  start: "center center",
  end: "4000 85%",
  toggleActions: "restart none reverse none",
  pin: true,
  onUpdate: (self) => updateFirstSectionPos(self.progress),
});
