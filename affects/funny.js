const body = document.getElementsByTagName('body')[0];

fetch('https://api.ipify.org/?format=json')
 .then(response => response.json())
 .then(data => {
    const ip = data.ip;

    window.addEventListener('keydown', (event) => {
      if (event.ctrlKey && (event.key === 'S' || event.key === 's')) {
        event.preventDefault()
        body.innerHTML = `<h1 style="text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">why are we skidding? Cool ip doe ${ip}</h1>`;
      }
      if (event.ctrlKey && event.key === 'C') {
        event.preventDefault()
        body.innerHTML = `<h1 style="text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">why are we skidding? Cool ip doe ${ip}</h1>`;
      }
      if (event.ctrlKey && (event.key === 'E' || event.key === 'e')) {
        event.preventDefault()
        body.innerHTML = `<h1 style="text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">why are we skidding? Cool ip doe ${ip}</h1>`;
      }
      if (event.ctrlKey && (event.key === 'I' || event.key === 'i' || event.key === 'Ä\xB1')) {
        event.preventDefault()
        body.innerHTML = `<h1 style="text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">why are we skidding? Cool ip doe ${ip}</h1>`;
      }
      if (event.ctrlKey && (event.key === 'K' || event.key === 'k')) {
        event.preventDefault()
        body.innerHTML = `<h1 style="text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">why are we skidding? Cool ip doe ${ip}</h1>`;
      }
      if (event.ctrlKey && (event.key === 'U' || event.key === 'u')) {
        event.preventDefault()
        body.innerHTML = `<h1 class="sparkle": style="text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">why are we skidding? Cool ip doe ${ip}</h1>`;
      }
    })
  });

document.addEventListener('contextmenu', function (e) {
  e.preventDefault()
})