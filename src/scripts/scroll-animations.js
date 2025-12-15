// Intersection Observer para animaciones de scroll
document.addEventListener('DOMContentLoaded', () => {
  // Configuración del observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
  };

  // Crear el observer
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añadir clase cuando entra en viewport
        entry.target.classList.add('in-view');
        
        // Opcional: dejar de observar después de animar
        // para mejor rendimiento
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleccionar todos los elementos con clases de animación
  const animatedElements = document.querySelectorAll(`
    .scroll-animate,
    .scroll-fade-up,
    .scroll-fade-left,
    .scroll-fade-right,
    .scroll-scale,
    .scroll-stagger,
    .scroll-title,
    .scroll-card,
    .scroll-blur
  `);

  // Observar cada elemento
  animatedElements.forEach(element => {
    scrollObserver.observe(element);
  });

  // Para elementos que ya están en viewport al cargar
  // (por ejemplo, si el usuario recarga en medio de la página)
  const checkInitialViewport = () => {
    animatedElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        element.classList.add('in-view');
        scrollObserver.unobserve(element);
      }
    });
  };

  // Verificar elementos visibles al cargar
  checkInitialViewport();
});
