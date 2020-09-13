var textWrapper = document.querySelector('.animated-headline')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.animated-headline .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.animated-headline',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// TERMINAL TYPING
var options = {
    strings: ['$ login:^1500 081295578742^1500\n$ Enter OTP:^2000  *^1000**^1000*\n\n Menu:^2500\n`1. Create VA\n2. Open Report\n3. Quit`\n:^7000'],
    typeSpeed: 40,
    loop: true,
    loopCount: 4,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true
  };
  var typed = new Typed('#terminal-typing', options);