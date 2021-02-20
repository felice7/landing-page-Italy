document.getElementById("btn").addEventListener("click", function () {
    
  TweenMax.staggerFrom(
    ".header_text h1",
    1,
    {
      opacity: 0,
      width: "100%",
      delay: 1,
      ease: Expo.easeInOut,
    },
    1.5
  );

  TweenMax.from(".header_text h2", 1, {
    opacity: 0,
    y: -30,
    delay: 2,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".header_text p", 1, {
    opacity: 0,
    width: "100%",
    delay: 2,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".header_text button", 1.5, {
    opacity: 0,
    y: "-100%",
    delay: 2,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(
    ".social-media ul li",
    1,
    {
      opacity: 0,
      width: "100%",
      delay: 1,
      ease: Expo.easeInOut,
    },
    0.5
  );

  TweenMax.staggerFrom(".side-text", 1, {
    opacity: 0,
    x: "100%",
    delay: 1,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".base", 0.5, {
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".monument_3", 2, {
    opacity: 0,
    x: -80,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".monument_2", 2, {
    opacity: 0,
    x: 80,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".monument_1", 1.4, {
    opacity: 0,
    y: 90,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".monument_4", 1.8, {
    opacity: 0,
    y: 190,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".background_1", 5, {
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".background_2", 7, {
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(".sole", 10, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
  });
});
