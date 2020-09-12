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