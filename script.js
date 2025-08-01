// /**
//  * Scroll reveal effect
//  */
// const sections = document.querySelectorAll("[data-section]");

// const scrollReveal = function () {
//   for (let i = 0; i < sections.length; i++) {
//     const sectionTop = sections[i].getBoundingClientRect().top;
//     const triggerPoint = window.innerHeight / 1.3;

//     if (sectionTop < triggerPoint) {
//       sections[i].classList.add("revealed");
//     } else {
//       sections[i].classList.remove("revealed");
//     }
//   }
// };

// scrollReveal();
// addEventOnElem(window, "scroll", scrollReveal);



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const icon = question.querySelector('.icon');

  question.addEventListener('click', () => {
    // Close others
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
      }
    });

    // Toggle current
    item.classList.toggle('active');
    icon.textContent = item.classList.contains('active') ? '–' : '+';
  });
});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


const HamBuger = document.querySelector('.hambuger');
const NavMenu = document.querySelector('.nav-menu');


HamBuger.addEventListener("click", () => {
  HamBuger.classList.toggle("animate");
  NavMenu.classList.toggle("animate");
})

  // Create a temporary image object to preload the CSS background

  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // adjust this if your header is taller
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `index.html#${sectionId}` || link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

