// ANIMATED HEADLINE
var texts = ['projects', 'business', 'side hustle'];
var index = 0;
var textWrapper = document.querySelector('.animated-headline')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

setInterval(() => {
    $('.animated-headline').animate({
        opacity: 0
    }, function () {
        if (texts.length > index) {
            $(this).text(texts[index]).animate({opacity: 1});
            index++;
        }
        else
        index = 0;
    });
}, 2500);
// anime.timeline({loop: true})
//   .add({
//     targets: '.animated-headline .letter',
//     translateY: [-100,0],
//     easing: "easeOutExpo",
//     duration: 1500,
//     delay: (el, i) => 30 * i
//   }).add({
//     targets: '.animated-headline',
//     opacity: 0,
//     duration: 2000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

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