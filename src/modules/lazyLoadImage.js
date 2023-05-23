const lazyLoadImages = () => {
  const lazyImages = document.querySelectorAll('.lazy');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        img.src = src;
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
};

export default lazyLoadImages;
