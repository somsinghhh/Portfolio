/**
 * ============================================================================
 * SOM RAMBHAN SINGH — PERSONAL PORTFOLIO JAVASCRIPT
 * Strictly Vanilla JS (ES6+) — Lightweight, Accessible & Zero Dependencies
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. ARCHITECTURAL SIGNATURE INTRO: "SOM SINGH" FADE
     -------------------------------------------------------------------------- */
  const introOverlay = document.getElementById('intro-overlay');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function dismissIntro(immediate = false) {
    if (!introOverlay) return;

    if (immediate) {
      introOverlay.classList.add('fade-out');
      setTimeout(() => {
        introOverlay.style.display = 'none';
      }, 50);
      return;
    }

    introOverlay.classList.add('fade-out');
    setTimeout(() => {
      introOverlay.style.display = 'none';
    }, 650);
  }

  if (prefersReducedMotion) {
    dismissIntro(true);
  } else {
    // Show signature intro on reload, hold briefly, then smoothly fade out
    const fadeTimer = setTimeout(() => {
      dismissIntro(false);
    }, 1100);

    // Allow user to click anywhere on overlay or press any key to dismiss instantly
    if (introOverlay) {
      introOverlay.addEventListener('click', () => {
        clearTimeout(fadeTimer);
        dismissIntro(false);
      });
    }

    // Safety timeout
    setTimeout(() => {
      dismissIntro(true);
    }, 2600);
  }

  /* --------------------------------------------------------------------------
     2. STICKY HEADER & DYNAMIC BLUR SHADOW
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('site-header');

  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* --------------------------------------------------------------------------
     3. ACTIVE NAVIGATION LINK ON SCROLL (SCROLLSPY)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    const headerHeight = siteHeader ? siteHeader.offsetHeight : 72;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  /* --------------------------------------------------------------------------
     4. RESPONSIVE MOBILE & TABLET NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openMobileMenu);
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeMobileMenu();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  /* --------------------------------------------------------------------------
     5. PROJECT CATEGORY FILTERING (ALL / COLLABORATIVE / ACADEMIC)
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          // Smooth fade in
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     6. ONE-CLICK EMAIL COPY TO CLIPBOARD
     -------------------------------------------------------------------------- */
  const copyBtn = document.getElementById('btn-copy-email');
  const copyBtnText = document.getElementById('copy-btn-text');
  const emailLink = document.getElementById('som-email-link');
  const targetEmail = 'i.somsinghh@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const emailToCopy = emailLink ? emailLink.textContent.trim() : targetEmail;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailToCopy).then(
          () => {
            showCopiedSuccess();
          },
          () => {
            fallbackCopy(emailToCopy);
          }
        );
      } else {
        fallbackCopy(emailToCopy);
      }
    });
  }

  function showCopiedSuccess() {
    if (copyBtnText) copyBtnText.textContent = 'Copied!';
    if (copyBtn) copyBtn.classList.add('copied');

    setTimeout(() => {
      if (copyBtnText) copyBtnText.textContent = 'Copy';
      if (copyBtn) copyBtn.classList.remove('copied');
    }, 2200);
  }

  function fallbackCopy(text) {
    try {
      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      tempInput.style.position = 'fixed';
      tempInput.style.opacity = '0';
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showCopiedSuccess();
    } catch (err) {
      window.location.href = `mailto:${text}`;
    }
  }

  /* --------------------------------------------------------------------------
     7. SMOOTH SCROLLING WITH FIXED HEADER OFFSET
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = siteHeader ? siteHeader.offsetHeight : 72;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      }
    });
  });


  /* Scroll reveals: progressive enhancement, with reduced-motion support. */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.section-header, .about-story-card, .about-philosophy-card, .metric-card, .edu-card, .exp-card, .project-card, .cap-card, .cert-card, .opp-panel, .channel-card, .location-box'
    );
    revealTargets.forEach((element) => element.classList.add('reveal-on-scroll'));
    document.documentElement.classList.add('reveal-ready');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    revealTargets.forEach((element) => revealObserver.observe(element));
  }

});
