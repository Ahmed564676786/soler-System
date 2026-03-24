document.addEventListener("DOMContentLoaded", () => {

  const planets = [
    { orbit: ".mercury-orbit", duration: 4 },
    { orbit: ".venus-orbit", duration: 7 },
    { orbit: ".earth-orbit", duration: 10 },
    { orbit: ".mars-orbit", duration: 14 },
    { orbit: ".jupiter-orbit", duration: 20 },
    { orbit: ".saturn-orbit", duration: 26 },
    { orbit: ".uranus-orbit", duration: 32 },
    { orbit: ".neptune-orbit", duration: 40 }
  ];

  planets.forEach(p => {
    gsap.to(p.orbit, {
      rotation: 360,
      duration: p.duration,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%"
    });
  });

});