/* ============================================
   Marigold Wellness Studio — Main JavaScript
   Vanilla JS only. No libraries.
   ============================================ */

(function() {
  'use strict';

  // --- Scroll Reveal (Intersection Observer) ---
  function initScrollReveal() {
    var revealElements = document.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale');

    if (!revealElements.length) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach(function(el) {
        el.classList.add('reveal--visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // --- Mobile Menu ---
  function initMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.querySelector('.mobile-menu');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('hamburger--active');
      mobileMenu.classList.toggle('mobile-menu--active');
      document.body.style.overflow = mobileMenu.classList.contains('mobile-menu--active') ? 'hidden' : '';
    });

    // Close menu on link click
    var menuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('hamburger--active');
        mobileMenu.classList.remove('mobile-menu--active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Email Capture Modal (Desktop only, 30s delay, first visit) ---
  function initEmailModal() {
    var modal = document.querySelector('.email-modal');
    if (!modal) return;

    // Do not show on mobile
    if (window.innerWidth < 769) return;

    // Check if already shown this session
    if (sessionStorage.getItem('marigold_modal_shown')) return;

    setTimeout(function() {
      modal.classList.add('email-modal--active');
      sessionStorage.setItem('marigold_modal_shown', 'true');
    }, 30000);

    var closeBtn = modal.querySelector('.email-modal__close');
    var backdrop = modal.querySelector('.email-modal__backdrop');

    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        modal.classList.remove('email-modal--active');
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', function() {
        modal.classList.remove('email-modal--active');
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('email-modal--active')) {
        modal.classList.remove('email-modal--active');
      }
    });
  }

  // --- Email Form Handling (Placeholder) ---
  function initEmailForms() {
    var emailForms = document.querySelectorAll('.email-form');

    emailForms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var input = form.querySelector('input[type="email"]');
        var btn = form.querySelector('.btn');

        if (input && input.value) {
          // Placeholder response
          var originalText = btn.textContent;
          btn.textContent = 'Thank you!';
          btn.style.backgroundColor = 'var(--burnished-gold)';
          input.value = '';
          input.disabled = true;
          btn.disabled = true;

          setTimeout(function() {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
            input.disabled = false;
            btn.disabled = false;
          }, 3000);
        }
      });
    });
  }

  // --- Contact Form Handling (Placeholder) ---
  function initContactForm() {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var message = form.querySelector('.form-message');
      if (message) {
        message.classList.add('form-message--visible');
        form.reset();

        setTimeout(function() {
          message.classList.remove('form-message--visible');
        }, 5000);
      }
    });
  }

  // --- FAQ Accordion ---
  function initFAQ() {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');

      if (!question || !answer) return;

      question.addEventListener('click', function() {
        var isActive = item.classList.contains('faq-item--active');

        // Close all
        faqItems.forEach(function(otherItem) {
          otherItem.classList.remove('faq-item--active');
          var otherQuestion = otherItem.querySelector('.faq-question');
          var otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('faq-item--active');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  // --- Subtle Parallax on Hero Background ---
  function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var heroBg = document.querySelector('.hero__bg');
    if (!heroBg) return;

    var ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          var scrolled = window.pageYOffset;
          var heroHeight = heroBg.parentElement.offsetHeight;

          if (scrolled < heroHeight) {
            heroBg.style.transform = 'translateY(' + (scrolled * 0.2) + 'px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // --- Header scroll behavior ---
  function initHeaderScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var lastScroll = 0;

    window.addEventListener('scroll', function() {
      var currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
      }

      // Always show header — just add a subtle shadow on scroll
      if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 20px rgba(59, 50, 48, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    });
  }

  // --- Initialize ---
  document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    initMobileMenu();
    initEmailModal();
    initEmailForms();
    initContactForm();
    initFAQ();
    initParallax();
    initHeaderScroll();
  });

})();
