const leftPerspectives = [
    { x: -10, z: -4 },
    { x: -20, z: -8 },
    { x: -30, z: -12 },
    { x: -40, z: -16 },
    { x: -50, z: -20 },
    { x: 10, z: -4 }
  ];
  
  const rightPerspectives = [
    { x: 10, z: -4 },
    { x: 20, z: -8 },
    { x: 30, z: -12 },
    { x: 40, z: -16 },
    { x: 50, z: -20 },
    { x: -10, z: -4 }
  ];
  
  const leftImages = document.querySelectorAll(".left .item");
  const rightImages = document.querySelectorAll(".right .item");
  
  const translateImg = (target, p) => {
    target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
  };
  
  const animateImages = (c, perspectives) => {
    const count = parseInt(c.dataset.counter);
    translateImg(c, perspectives[count - 1]);
    c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
  };
  
  const loop = () => {
    setInterval(() => {
      leftImages.forEach((c) => {
        animateImages(c, leftPerspectives);
      });
  
      rightImages.forEach((c) => {
        animateImages(c, rightPerspectives);
      });
    }, 1000);
  };
  
  loop();
  