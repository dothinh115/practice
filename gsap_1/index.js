gsap.registerPlugin(ScrollTrigger);
//SECTION 1
const firstSection = document.querySelector(".firstSection");
const firstSectionMainImg = firstSection.querySelector(".main");
let firstSectionDataObj = {
  width: firstSectionMainImg.offsetWidth,
  height: firstSectionMainImg.offsetHeight,
};

const updateFirstSectionPos = (progress) => {
  const widthToUpdate =
    firstSectionDataObj.width + window.innerWidth * progress;
  const heightToUpdate = firstSectionDataObj.height + 200 * progress;
  gsap.to(firstSectionMainImg, {
    width: widthToUpdate + "px",
    height: heightToUpdate + "px",
    maxHeight: heightToUpdate + "px",
    filter: `brightness(${1 - 0.5 * progress})`,
  });
  gsap.to(".firstSectionText", {
    yPercent: -100,
  });
};

ScrollTrigger.create({
  trigger: firstSection,
  start: "center center",
  end: "4000 center",
  toggleActions: "restart none reverse none",
  pin: true,
  onUpdate: (self) => updateFirstSectionPos(self.progress),
});

//SECTION 2
const secondSection = document.querySelector(".secondSection");
const secondSectionDivs = secondSection.querySelectorAll("div");
const secondSectionMainImg = secondSection.querySelector(".main");
let secondSectionDataObj = {
  width: secondSectionMainImg.offsetWidth,
  height: secondSectionMainImg.offsetHeight,
};
const updateSecondSectionPos = (progress) => {
  const translateX =
    (window.innerWidth - secondSectionDataObj.width) * progress * 1.5;
  const translateY =
    (window.innerHeight - secondSectionDataObj.height) * progress * 1.5;
  gsap.to(secondSectionDivs, {
    scale: 1 + 2.5 * progress,
    filter: `brightness(${1 - 0.5 * progress})`,
    transformOrigin: "center",
  });
  gsap.to([secondSectionDivs[0], secondSectionDivs[3], secondSectionDivs[6]], {
    x: -translateX + "px",
  });
  gsap.to([secondSectionDivs[2], secondSectionDivs[5], secondSectionDivs[8]], {
    x: translateX + "px",
  });
  gsap.to([secondSectionDivs[0], secondSectionDivs[1], secondSectionDivs[2]], {
    y: -translateY + "px",
  });
  gsap.to([secondSectionDivs[6], secondSectionDivs[7], secondSectionDivs[8]], {
    y: translateY + "px",
  });
  gsap.to(".secondSectionText", {
    y: -window.innerHeight / 2 + "px",
    yPercent: -100,
  });
};

ScrollTrigger.create({
  trigger: secondSection,
  start: "center center",
  end: "4000 center",
  toggleActions: "restart none reverse none",
  pin: true,
  onUpdate: (self) => updateSecondSectionPos(self.progress),
});
