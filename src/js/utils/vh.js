(function (window, document) {
  const variable = '--full-viewport';
  function vh() {
    document.documentElement.style.setProperty(variable, `${window.innerHeight}px`);
  }
  vh();
  window.addEventListener('resize', () => {
    if (window.matchMedia("(min-width: 700px)").matches) {
      vh()
    }
  });
  window.addEventListener('orientationchange', vh);
})(window, document);
