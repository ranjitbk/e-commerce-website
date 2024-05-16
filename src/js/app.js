import ready, { HTML } from './utils';
import initMobileMenu from './components/mobileMenu';
import initAccordion from './components/accordion';
import initViewport from './components/in-view';
import initFixedHeader from './components/fixedHeader';
import initSwiper from './components/swiper';
import initSmoothScroll from './components/smoothScroll';
import initTabs from './components/tabs';
import initStickyScrollBlock from './components/sticky';
import initIframeLightbox from './components/iframe-lightbox';
import initGsap from './components/gsap';

ready(() => {
  HTML.classList.add('is-loaded');
  initMobileMenu()
  initAccordion()
  initViewport()
  initFixedHeader()
  initSwiper()
  initSmoothScroll()
  initTabs()
  initStickyScrollBlock()
  initIframeLightbox()
  initGsap()
});

