/**
 * NOTUS TYPE SPECIMEN — INTERACTIVE CONTROLLER
 * Vanilla JS, lightweight, responsive.
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initThemeToggle();
    initTypeTester();
    initGlyphMatrix();
    initLottie();
});

/* 1. Scroll Progress */
function initScrollProgress() {
    const bar = document.getElementById('scrollBar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${progress}%`;
    }, { passive: true });
}

/* 2. Theme Toggle (Light / Dark) */
function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    const currentTheme = localStorage.getItem('notus-theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(btn, currentTheme);

    btn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('notus-theme', theme);
        updateThemeIcon(btn, theme);
    });
}

function updateThemeIcon(btn, theme) {
    btn.innerHTML = theme === 'dark' 
        ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

/* 3. Interactive Type Tester */
function initTypeTester() {
    const canvas = document.getElementById('testerCanvas');
    if (!canvas) return;

    // Font style pills
    const styleBtns = document.querySelectorAll('[data-font-style]');
    styleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            styleBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const font = btn.getAttribute('data-font-style');
            canvas.style.fontFamily = font;
        });
    });

    // Sliders
    const sizeSlider = document.getElementById('sizeSlider');
    const sizeVal = document.getElementById('sizeVal');
    if (sizeSlider && sizeVal) {
        sizeSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            canvas.style.fontSize = `${val}px`;
            sizeVal.textContent = `${val}px`;
        });
    }

    const leadingSlider = document.getElementById('leadingSlider');
    const leadingVal = document.getElementById('leadingVal');
    if (leadingSlider && leadingVal) {
        leadingSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            canvas.style.lineHeight = val;
            leadingVal.textContent = val;
        });
    }

    const trackingSlider = document.getElementById('trackingSlider');
    const trackingVal = document.getElementById('trackingVal');
    if (trackingSlider && trackingVal) {
        trackingSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            canvas.style.letterSpacing = `${val}em`;
            trackingVal.textContent = `${val}em`;
        });
    }

    // Alignment
    const alignBtns = document.querySelectorAll('[data-tester-align]');
    alignBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alignBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            canvas.style.textAlign = btn.getAttribute('data-tester-align');
        });
    });

    // Case
    const caseBtns = document.querySelectorAll('[data-tester-case]');
    caseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            caseBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const mode = btn.getAttribute('data-tester-case');
            if (mode === 'upper') {
                canvas.style.textTransform = 'uppercase';
            } else if (mode === 'lower') {
                canvas.style.textTransform = 'lowercase';
            } else {
                canvas.style.textTransform = 'none';
            }
        });
    });

    // Presets
    const presets = {
        'headline-en': "The architecture of stillness, rhythm and form.",
        'editorial-ru': "Плавность текучих засечек и точность высокого контраста.",
        'pangram-en': "Jackdaws love my big sphinx of quartz. 0123456789",
        'pangram-ru': "В чащах юга жил-был цитрус? Да, но фальшивый экземпляр!",
        'numerals': "$1,450.80 & €2,390.00 — № 48/B (1892–2026) ⅓ ½ ¾"
    };

    const presetTags = document.querySelectorAll('[data-preset]');
    presetTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const key = tag.getAttribute('data-preset');
            if (presets[key]) {
                canvas.innerText = presets[key];
            }
        });
    });
}

/* 4. Glyph Matrix */
function initGlyphMatrix() {
    const grid = document.getElementById('glyphGrid');
    if (!grid) return;

    const glyphSets = {
        'all': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789.,:;!?\'"—–-()[]{}/\\@#$%&*+=<>€$£¥₽§¶†‡©®™°',
        'latin': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        'cyrillic': 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя',
        'figures': '0123456789¼½¾⅓⅔⅛⅜⅝⅞%‰+−±×÷=≠≈$€£¥₽¢',
        'symbols': '.,:;!?\'"—–-()[]{}/\\@#&*§¶†‡©®™°•'
    };

    function renderGlyphs(charString) {
        grid.innerHTML = '';
        const chars = Array.from(charString);
        chars.forEach(ch => {
            const cell = document.createElement('div');
            cell.className = 'glyph-cell';
            cell.textContent = ch;
            cell.title = `Click to copy "${ch}" (U+${ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')})`;
            cell.addEventListener('click', () => {
                navigator.clipboard.writeText(ch).then(() => {
                    const original = cell.textContent;
                    cell.textContent = '✓';
                    setTimeout(() => {
                        cell.textContent = original;
                    }, 600);
                });
            });
            grid.appendChild(cell);
        });
    }

    renderGlyphs(glyphSets['all']);

    const tabs = document.querySelectorAll('[data-glyph-tab]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('is-active'));
            tab.classList.add('is-active');
            const cat = tab.getAttribute('data-glyph-tab');
            renderGlyphs(glyphSets[cat] || glyphSets['all']);
        });
    });
}

/* 5. Lottie Player */
function initLottie() {
    const container = document.getElementById('notusLottiePlayer');
    if (container && typeof lottie !== 'undefined') {
        if (window.notusAnimationData) {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: window.notusAnimationData
            });
        } else {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'json/Notus/data.json'
            });
        }
    }
}
