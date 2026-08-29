// Scroll progress bar
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = pct + '%';
});

// Typing effect
const phrases = ["monitorando redes...", "otimizando ambientes...", "resolvendo incidentes N1/N2...", "escrevendo código..."];
const typedEl = document.getElementById('typed');
let pi = 0, ci = 0, deleting = false;
function tick() {
    const current = phrases[pi];
    if (!deleting) {
        ci++;
        typedEl.textContent = current.slice(0, ci);
        if (ci === current.length) { deleting = true; setTimeout(tick, 1400); return; }
    } else {
        ci--;
        typedEl.textContent = current.slice(0, ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 35 : 65);
}
tick();

// Scroll reveal + counters
function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    let cur = 0;
    const step = Math.max(1, Math.round(target / 30));
    const iv = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(iv); }
        el.textContent = cur;
    }, 30);
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            const counters = e.target.querySelectorAll('[data-count]');
            counters.forEach(animateCount);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
});
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Tabs (Realizados / Em Progresso / Futuros)
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
});

// Scroll-spy nav highlighting
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('[data-nav]');
const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const link = document.querySelector(`[data-nav][href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) navLinks.forEach(l => l.classList.remove('active')), link.classList.add('active');
    });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => spy.observe(s));