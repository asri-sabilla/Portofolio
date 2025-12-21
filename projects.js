document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabSections = document.querySelectorAll(".tab-section");

    function animateItems(section) {
        const items = section.querySelectorAll(
            ".portfolio-item, .cert-card"
        );

        items.forEach((item, index) => {
            item.classList.remove("fade-item"); 
            item.style.animationDelay = "0s";

            setTimeout(() => {
                item.classList.add("fade-item");
                item.style.animationDelay = `${index * 0.15}s`;
            }, 50);
        });
    }

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // reset tombol
            tabButtons.forEach(b => b.classList.remove("active"));

            // hide semua section
            tabSections.forEach(sec => sec.style.display = "none");

            // aktifkan tab
            btn.classList.add("active");
            const targetSection = document.getElementById(btn.dataset.tab);
            targetSection.style.display = "block";

            // animasi isi
            animateItems(targetSection);
        });
    });

    // animasi pertama kali load (Projects)
    const defaultSection = document.getElementById("projects");
    if (defaultSection) animateItems(defaultSection);
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    setTimeout(type, 1000);
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    if (currentPage === "index.html") {
        window.addEventListener("scroll", () => {
            let currentSection = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= sectionTop - 200) {
                    currentSection = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                const href = link.getAttribute("href");

                if (href.startsWith("#")) {
                    link.classList.remove("active");
                    if (href.substring(1) === currentSection) {
                        link.classList.add("active");
                    }
                }
            });
        });
    }

document.addEventListener('DOMContentLoaded', function() {

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.section:not(.hero)').forEach(section => {
        observer.observe(section);
    });
});     
