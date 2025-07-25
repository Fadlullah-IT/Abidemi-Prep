  
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      const dropdownMenu = document.getElementById('dropdownMenu');

      const scrollTopBtn = document.getElementById('scrollTopBtn');

      hamburgerBtn.addEventListener('click', function () {
        hamburgerBtn.classList.toggle('active');
        dropdownMenu.classList.toggle('show');
      });

      
      document.addEventListener('click', function (event) {
        if (
          !hamburgerBtn.contains(event.target) &&
          !dropdownMenu.contains(event.target)
        ) {
          hamburgerBtn.classList.remove('active');
          dropdownMenu.classList.remove('show');
        }
      });

      
      function switchTab(tabType) {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach((tab) => tab.classList.remove('active'));
        event.target.classList.add('active');
      }

      
      function animateOnScroll() {
        const elements = document.querySelectorAll(
          '.service-card, .feature, .platform-feature'
        );

        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('show');
          }
        });
      }

      
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      
      function toggleScrollButton() {
       

        if (window.pageYOffset > 300) {
          scrollTopBtn.style.display = 'block';
        } else {
          scrollTopBtn.style.display = 'none';
        }
      }

    
      window.addEventListener('scroll', function () {
        animateOnScroll();
        toggleScrollButton();
      });

      
      document.addEventListener('DOMContentLoaded', function () {
        animateOnScroll();
      });