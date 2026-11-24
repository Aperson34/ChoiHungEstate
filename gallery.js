const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

for (const gallery of document.querySelectorAll('.gallery')) {
  new Swiper(gallery, {
    speed: reducedMotion.matches ? 0 : 320,
    spaceBetween: 16,
    navigation: {
      prevEl: gallery.querySelector('.gallery-prev'),
      nextEl: gallery.querySelector('.gallery-next'),
    },
    a11y: { slideLabelMessage: '{{index}} of {{slidesLength}}' },
    on: {
      slideChange(swiper) {
        swiper.slides.forEach((slide, index) => {
          slide.setAttribute('aria-hidden', String(index !== swiper.activeIndex));
        });
      },
    },
  });
  gallery.querySelectorAll('.swiper-slide').forEach((slide, index) => {
    slide.setAttribute('aria-hidden', String(index !== 0));
  });
}
