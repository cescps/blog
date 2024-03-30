const cet = document.querySelector('.cet .the-time');

  const animate = () => {
    const timeCET = moment().tz('Europe/Paris').format('HH:mm:ss');
    cet.innerHTML = `<span style="color: ${document.body.classList.contains('dark-mode') ? 'white' : 'black'};">${timeCET}</span>`;
  };

  setInterval(animate, 1000);
  animate();

  function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    animate();
  }
