const splide = new Splide('.splide', {
    type: 'loop', //slide, loop, fade
    padding: 20 , 
    gap: '20px', 
    // rewind: true,
    speed: 500, //transition in milliseconds
    // fixedWidth: '100vw',
    // width: '200vw',
    perPage: 3,
    start: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: false,
    pauseOnHover: true,
    wheel: true,
    // autowidth: true,
  });
  splide.mount();
