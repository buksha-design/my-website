/**
 * NOTUS TYPE SPECIMEN — DISPLAAY JAVASCRIPT CONTROLLER
 * Lightweight, zero dependencies, high performance.
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAndNav();
    initTheme();
    initCoverSwitcher();
    initFamiliesScale();
    initTesterStudio();
    initOpticsSync();
    initGlyphMatrix();
    initOpenTypeSandbox();
    initLottie();
});

/* --------------------------------------------------------------------------
   01. SCROLL PROGRESS & ACTIVE NAV TRACKER
   -------------------------------------------------------------------------- */
function initScrollAndNav() {
    const progressBar = document.getElementById('scrollBar');
    const navPills = document.querySelectorAll('.nav-pill');
    const sections = Array.from(navPills).map(pill => {
        const id = pill.getAttribute('href');
        return document.querySelector(id);
    }).filter(Boolean);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        // Active nav pill highlight
        let currentSectionId = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            const height = sec.offsetHeight;
            if (scrollTop >= top && scrollTop < top + height) {
                currentSectionId = `#${sec.id}`;
            }
        });

        if (currentSectionId) {
            navPills.forEach(pill => {
                if (pill.getAttribute('href') === currentSectionId) {
                    pill.classList.add('is-active');
                } else {
                    pill.classList.remove('is-active');
                }
            });
        }
    }, { passive: true });
}

/* --------------------------------------------------------------------------
   02. THEME TOGGLE (Light / Dark)
   -------------------------------------------------------------------------- */
function initTheme() {
    const toggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('notus-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '☀' : '☾';
    }

    toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('notus-theme', next);
        if (themeIcon) {
            themeIcon.textContent = next === 'dark' ? '☀' : '☾';
        }
    });
}

/* --------------------------------------------------------------------------
   03. COVER HERO WORD SWITCHER
   -------------------------------------------------------------------------- */
function initCoverSwitcher() {
    const titleEl = document.getElementById('coverHeroTitle');
    const subEl = document.getElementById('coverHeroSubtitle');
    const switcherBtns = document.querySelectorAll('.switcher-btn');

    switcherBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switcherBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            const word = btn.getAttribute('data-word');
            const sub = btn.getAttribute('data-sub');

            if (titleEl && word) {
                titleEl.style.opacity = '0';
                setTimeout(() => {
                    titleEl.textContent = word;
                    titleEl.style.opacity = '1';
                }, 150);
            }

            if (subEl && sub) {
                subEl.style.opacity = '0';
                setTimeout(() => {
                    subEl.textContent = sub;
                    subEl.style.opacity = '1';
                }, 150);
            }
        });
    });
}

/* --------------------------------------------------------------------------
   04. FAMILIES GLOBAL SCALE SLIDER
   -------------------------------------------------------------------------- */
function initFamiliesScale() {
    const slider = document.getElementById('familySizeSlider');
    const valDisplay = document.getElementById('familySizeVal');
    const samples = document.querySelectorAll('.family-row__sample');
    const testBtns = document.querySelectorAll('.btn-test-family');

    if (slider && valDisplay) {
        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            valDisplay.textContent = `${val}px`;
            samples.forEach(sample => {
                sample.style.fontSize = `${val}px`;
            });
        });
    }

    // "Test in Studio" button on family rows
    testBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const font = btn.getAttribute('data-target-style');
            const testerStyleBtn = document.querySelector(`.tester-style-btn[data-font="${font}"]`);
            if (testerStyleBtn) {
                testerStyleBtn.click();
            }
            const testerSec = document.getElementById('tester');
            if (testerSec) {
                testerSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* --------------------------------------------------------------------------
   05. INTERACTIVE TYPE TESTER (Displaay Studio Console)
   -------------------------------------------------------------------------- */
function initTesterStudio() {
    const inputStage = document.getElementById('testerInput');
    const viewport = document.getElementById('testerViewport');
    const activeStyleText = document.getElementById('testerActiveStyleText');
    const charCountDisplay = document.getElementById('testerCharCount');
    if (!inputStage) return;

    // Font style selector
    const styleBtns = document.querySelectorAll('.tester-style-btn');
    styleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            styleBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const font = btn.getAttribute('data-font');
            inputStage.style.fontFamily = font;
            if (activeStyleText) {
                activeStyleText.textContent = `Notus ${btn.textContent.trim()}`;
            }
        });
    });

    // Alignment
    const alignBtns = document.querySelectorAll('.tester-align-btn');
    alignBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alignBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            inputStage.style.textAlign = btn.getAttribute('data-align');
        });
    });

    // Case
    const caseBtns = document.querySelectorAll('.tester-case-btn');
    caseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            caseBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            inputStage.style.textTransform = btn.getAttribute('data-case');
        });
    });

    // Background themes (Sand / Night / Paper)
    const bgBtns = document.querySelectorAll('.tester-bg-btn');
    bgBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            bgBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const theme = btn.getAttribute('data-bg');
            if (viewport) {
                viewport.className = `tester-viewport theme-${theme}`;
            }
        });
    });

    // Sliders
    const sizeSlider = document.getElementById('testerSizeSlider');
    const sizeVal = document.getElementById('testerSizeVal');
    if (sizeSlider && sizeVal) {
        sizeSlider.addEventListener('input', (e) => {
            const v = e.target.value;
            inputStage.style.fontSize = `${v}px`;
            sizeVal.textContent = `${v}px`;
        });
    }

    const leadingSlider = document.getElementById('testerLeadingSlider');
    const leadingVal = document.getElementById('testerLeadingVal');
    if (leadingSlider && leadingVal) {
        leadingSlider.addEventListener('input', (e) => {
            const v = e.target.value;
            inputStage.style.lineHeight = v;
            leadingVal.textContent = v;
        });
    }

    const trackingSlider = document.getElementById('testerTrackingSlider');
    const trackingVal = document.getElementById('testerTrackingVal');
    if (trackingSlider && trackingVal) {
        trackingSlider.addEventListener('input', (e) => {
            const v = e.target.value;
            inputStage.style.letterSpacing = `${v}em`;
            trackingVal.textContent = `${v}em`;
        });
    }

    // Presets
    const presets = {
        'headline-en': "The architecture of stillness, rhythm and form.",
        'editorial-ru': "Плавность текучих засечек и точность высокого контраста.",
        'pangram-en': "Jackdaws love my big sphinx of quartz. 0123456789",
        'pangram-ru': "В чащах юга жил-был цитрус? Да, но фальшивый экземпляр!",
        'numerals': "$1,450.80 & €2,390.00 — № 48/B (1892–2026) ⅓ ½ ¾"
    };

    const presetBtns = document.querySelectorAll('.preset-btn');
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            presetBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const key = btn.getAttribute('data-preset');
            if (presets[key]) {
                inputStage.textContent = presets[key];
                updateCharCount();
            }
        });
    });

    // Character counter
    function updateCharCount() {
        if (charCountDisplay && inputStage) {
            const count = inputStage.textContent.length;
            charCountDisplay.textContent = `${count} chars`;
        }
    }

    inputStage.addEventListener('input', updateCharCount);
    updateCharCount();
}

/* --------------------------------------------------------------------------
   06. SYNCHRONIZED OPTICAL SIZING PREVIEW
   -------------------------------------------------------------------------- */
function initOpticsSync() {
    const syncBtns = document.querySelectorAll('.sync-word-btn');
    const displayEl = document.getElementById('syncDisplay');
    const textEl = document.getElementById('syncText');
    const captionEl = document.getElementById('syncCaption');

    syncBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            syncBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const word = btn.getAttribute('data-sync');
            if (displayEl) displayEl.textContent = word;
            if (textEl) textEl.textContent = word;
            if (captionEl) captionEl.textContent = word;
        });
    });
}

/* --------------------------------------------------------------------------
   07. GLYPH MATRIX & INSPECTOR (Displaay Character Map)
   -------------------------------------------------------------------------- */
function initGlyphMatrix() {
    const grid = document.getElementById('displaayGlyphGrid');
    const inspectorGlyph = document.getElementById('inspectorGlyph');
    const inspectorName = document.getElementById('inspectorName');
    const inspectorUnicode = document.getElementById('inspectorUnicode');
    const copyBtn = document.getElementById('inspectorCopyBtn');
    if (!grid) return;

    let selectedChar = 'A';

    const sets = {
        'all': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789.,:;!?\'"—–-()[]{}/\\@#$%&*+=<>€$£¥₽§¶†‡©®™°¼½¾⅓⅔',
        'latin': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ',
        'cyrillic': 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяҐЄІЇґєії',
        'figures': '0123456789¼½¾⅓⅔⅛⅜⅝⅞%‰+−±×÷=≠≈$€£¥₽¢№',
        'symbols': '.,:;!?\'"—–-()[]{}/\\@#&*§¶†‡©®™°•…„“”«»'
    };

    function updateInspector(char) {
        selectedChar = char;
        if (inspectorGlyph) inspectorGlyph.textContent = char;
        
        const codePoint = char.codePointAt(0);
        const hex = 'U+' + codePoint.toString(16).toUpperCase().padStart(4, '0');
        if (inspectorUnicode) {
            inspectorUnicode.textContent = `${hex} · Dec ${codePoint}`;
        }
        if (inspectorName) {
            inspectorName.textContent = getCharacterDescription(char, codePoint);
        }
    }

    function getCharacterDescription(char, code) {
        if (/[A-Z]/.test(char)) return `LATIN CAPITAL LETTER ${char}`;
        if (/[a-z]/.test(char)) return `LATIN SMALL LETTER ${char}`;
        if (/[А-ЯЁ]/.test(char)) return `CYRILLIC CAPITAL LETTER ${char}`;
        if (/[а-яё]/.test(char)) return `CYRILLIC SMALL LETTER ${char}`;
        if (/[0-9]/.test(char)) return `DIGIT ${char}`;
        const map = {
            '$': 'DOLLAR SIGN', '€': 'EURO SIGN', '£': 'POUND SIGN', '₽': 'RUBLE SIGN',
            '&': 'AMPERSAND', '§': 'SECTION SIGN', '¶': 'PILCROW SIGN', '©': 'COPYRIGHT SIGN',
            '®': 'REGISTERED TRADEMARK SIGN', '™': 'TRADEMARK SIGN', '†': 'DAGGER', '‡': 'DOUBLE DAGGER'
        };
        return map[char] || `CHARACTER "${char}" (${code})`;
    }

    function renderMatrix(charString) {
        grid.innerHTML = '';
        const chars = Array.from(charString);
        chars.forEach((ch, idx) => {
            const cell = document.createElement('div');
            cell.className = 'glyph-cell';
            if (idx === 0) cell.classList.add('is-selected');
            cell.textContent = ch;

            cell.addEventListener('mouseenter', () => {
                updateInspector(ch);
            });

            cell.addEventListener('click', () => {
                document.querySelectorAll('.glyph-cell').forEach(c => c.classList.remove('is-selected'));
                cell.classList.add('is-selected');
                updateInspector(ch);
                copyToClipboard(ch, cell);
            });

            grid.appendChild(cell);
        });
    }

    function copyToClipboard(text, el) {
        navigator.clipboard.writeText(text).then(() => {
            if (copyBtn) {
                const prev = copyBtn.textContent;
                copyBtn.textContent = 'Copied! ✓';
                setTimeout(() => { copyBtn.textContent = prev; }, 1200);
            }
            if (el) {
                const prev = el.textContent;
                el.textContent = '✓';
                setTimeout(() => { el.textContent = prev; }, 500);
            }
        }).catch(() => {});
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            copyToClipboard(selectedChar, null);
        });
    }

    // Tab buttons
    const tabBtns = document.querySelectorAll('.glyph-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const cat = btn.getAttribute('data-glyph-cat');
            renderMatrix(sets[cat] || sets['all']);
        });
    });

    // Initial render
    renderMatrix(sets['all']);
    updateInspector('A');
}

/* --------------------------------------------------------------------------
   08. OPENTYPE FEATURE SWITCHES SANDBOX
   -------------------------------------------------------------------------- */
function initOpenTypeSandbox() {
    const sandbox = document.getElementById('featureSandbox');
    const toggleBtns = document.querySelectorAll('.feature-toggle-btn');
    if (!sandbox) return;

    function updateFeatures() {
        const activeTags = [];
        toggleBtns.forEach(btn => {
            const feat = btn.getAttribute('data-feat');
            if (btn.classList.contains('is-active')) {
                activeTags.push(`"${feat}" 1`);
            } else {
                activeTags.push(`"${feat}" 0`);
            }
        });
        sandbox.style.fontFeatureSettings = activeTags.join(', ');
    }

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('is-active');
            updateFeatures();
        });
    });

    updateFeatures();
}

/* --------------------------------------------------------------------------
   09. LOTTIE MOTION SPECIMEN
   -------------------------------------------------------------------------- */
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
