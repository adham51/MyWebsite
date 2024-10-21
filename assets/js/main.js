/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // Load the Lottie animation
  document.addEventListener("DOMContentLoaded", function() {
    lottie.loadAnimation({
      container: document.getElementById('coding-person'), // the DOM element where you want to render the animation
      renderer: 'svg', // render as SVG
      loop: true, // loop the animation
      autoplay: true, // autoplay the animation
      path: './assets/codingPerson.json' // path to the JSON animation file
    });
  });

    // Load the Skills selection animation

    document.addEventListener("DOMContentLoaded", function () {
      const skills = [
        { skillName: "HTML", iconClass: "fab fa-html5" },
        { skillName: "CSS", iconClass: "fab fa-css3-alt" },
        { skillName: "JavaScript", iconClass: "fab fa-js" },
        { skillName: "React", iconClass: "fab fa-react" },
        { skillName: "Node.js", iconClass: "fab fa-node" },
        { skillName: "npm", iconClass: "fab fa-npm" },
        { skillName: "SQL/MariaDB", iconClass: "fas fa-database" },
        { skillName: "GitHub", iconClass: "fab fa-github" },
        { skillName: "Python", iconClass: "fab fa-python" },
        { skillName: "C++", iconClass: "fab fa-c" },
        { skillName: "Java", iconClass: "fab fa-java" },
        { skillName: "Linux", iconClass: "fab fa-linux" },


      ];
    
      const skillsContainer = document.getElementById("skillsContainer");
      console.log("Skills container:", skillsContainer);

    
      // Ensure skillsContainer exists
      if (skillsContainer) {
        skills.forEach((skill) => {
          console.log("Adding skill:", skill.skillName);

          const li = document.createElement("li");
          li.classList.add("software-skill-inline");
    
          const icon = document.createElement("i");
          icon.className = skill.iconClass; // FontAwesome icon class
          li.appendChild(icon);
    
          const skillText = document.createElement("p");
          skillText.textContent = skill.skillName;
          li.appendChild(skillText);
    
          skillsContainer.appendChild(li);
        });
      } else {
        console.error("Skills container not found");
      }
    });
    
    const educationInfo = {
      display: true,
      schools: [
          {
              schoolName: "Harvard University",
              logo: "../assets/img/stem_logo.png",
              subHeader: "Master of Science in Computer Science",
              duration: "September 2017 - April 2019",
              desc: "Participated in the research of XXX and published 3 papers.",
              descBullets: [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              ]
          },
          {
              schoolName: "Stanford University",
              logo: "assets/images/stanfordLogo.png",
              subHeader: "Bachelor of Science in Computer Science",
              duration: "September 2013 - April 2017",
              desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
              descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
          }
      ]
  };
  
  if (educationInfo.display) {
      const cardContainer = document.getElementById('education-cards');
  
      educationInfo.schools.forEach(school => {
          const card = document.createElement('div');
          card.className = 'education-card';
          
          card.innerHTML = `
              <img src="${school.logo}" alt="${school.schoolName} Logo">
              <h4>${school.schoolName}</h4>
              <h5>${school.subHeader}</h5>
              <p>${school.duration}</p>
              <p>${school.desc}</p>
              <ul>
                  ${school.descBullets.map(bullet => `<li>${bullet}</li>`).join('')}
              </ul>
          `;
          
          cardContainer.appendChild(card);
      });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();