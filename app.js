const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// END SECTION

const section = document.querySelector("section");
const end = section.querySelector("h1");

// SCROLLMAGIC

const controller = new ScrollMagic.Controller();

// duration이라는건 길이를 뜻하는 듯, 대충 영상길이만큼
// 맞추면 된다는 것 같고 triggerHook은 시작점을 말하니까 0부터 하자는 것임.
const scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElemnt: intro,
  triggerHook: 0,
})
  .addIndicators()
  //   이게 화면을 고정시키는 거임.
  .setPin(intro)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
