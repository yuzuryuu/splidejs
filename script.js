const splide = new Splide('.splide', {
    type: 'loop', //slide, loop, fade
    // padding: { y: 10 }, //css values
    // gap: '20px', //1 rem default
    // rewind: true,
    speed: 500, //transition in milliseconds
    // fixedWidth: '100vw',
    // width: '200vw',
    perPage: 3,
    // start: 5,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: false,
    // pagination: false,
    pauseOnHover: true,
    wheel: true,
  });
  splide.mount();