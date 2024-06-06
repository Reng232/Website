document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);
  
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // New JavaScript for easing in the h1 tag
    const keyFeatures = document.getElementById('key-features');
    keyFeatures.style.transition = 'opacity 2s ease-in';
    keyFeatures.style.opacity = 0;

    const keyFeaturesObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                keyFeaturesObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    keyFeaturesObserver.observe(keyFeatures);

    // Arrow visibility based on scroll position
    const arrow1 = document.querySelectorAll(".scroll-down-arrow")[0];
    const arrow2 = document.querySelectorAll(".scroll-down-arrow")[1];

    document.addEventListener("scroll", function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 20) {
            arrow1.classList.add("hide-arrow");
            arrow2.classList.add("show-arrow");
        } else {
            arrow1.classList.remove("hide-arrow");
            arrow2.classList.remove("show-arrow");
        }
    });
});
