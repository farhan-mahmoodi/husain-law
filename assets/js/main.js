/* Husain Law LLC — site behaviour. No dependencies. */
(function () {
  'use strict';

  /* Menu (small screens) */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  var closeBtn = document.querySelector('.nav-close');
  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); toggle.focus(); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); toggle.focus(); } });
  }

  /* Section navigation on the practice areas page */
  var links = Array.prototype.slice.call(document.querySelectorAll('.subnav a[href^="#"]'));
  if (links.length && 'IntersectionObserver' in window) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var sections = Object.keys(byId).map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var setActive = function (id) { links.forEach(function (a) { a.classList.toggle('is-active', a === byId[id]); }); };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(function (s) { io.observe(s); });
    if (sections[0]) setActive(sections[0].id);
  }

  /* Consultation form: opens the visitor's email app with the details filled in */
  var form = document.getElementById('consult-form');
  if (form) {
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var name = v('f-name'), email = v('f-email'), phone = v('f-phone'), area = v('f-area'), msg = v('f-message');
      var subject = 'Consultation request' + (area ? ' - ' + area : '') + (name ? ' - ' + name : '');
      var body = ['Name: ' + name, 'Email: ' + email, 'Phone: ' + (phone || 'not provided'), 'Matter: ' + (area || 'not specified'), '', msg].join('\n');
      if (status) status.textContent = 'Your email app should open with the details filled in. If it does not, write to daniyal@husain.law or call 443-273-1115.';
      window.location.href = 'mailto:daniyal@husain.law?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
