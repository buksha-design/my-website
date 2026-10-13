/**
 * NOTUS TYPE SPECIMEN — DISPLAAY JAVASCRIPT CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAndNav();
    initBroadsheetInteractive();
    initHeaderLogo();
    initFamiliesScale();
    initTesterStudio();
    initDisplaayGlyphs();
    initOpenTypeSandbox();
});

/* --------------------------------------------------------------------------
   01. SCROLL PROGRESS & ACTIVE GIANT SUB-NAV TRACKING
   -------------------------------------------------------------------------- */
function initScrollAndNav() {
    const progressBar = document.getElementById('scrollBar');
    const header = document.querySelector('.header');
    const giantPills = document.querySelectorAll('.giant-pill[href^="#"]');
    const notusPill = document.querySelector('.giant-pill--dropdown');
    // Dynamically calculate and sync exact header height
    function syncHeaderHeight() {
        if (header) {
            const h = header.offsetHeight;
            document.documentElement.style.setProperty('--header-height', `${h}px`);
        }
    }
    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight, { passive: true });

    // Smooth scrolling for giant pills with precise offset
    giantPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            const href = pill.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerH = header ? header.offsetHeight : 104;
                const subnav = document.querySelector('.notus-giant-subnav-wrapper');
                const subnavH = subnav ? subnav.offsetHeight : 56;
                const totalOffset = headerH + subnavH + 16;
                const targetTop = target.getBoundingClientRect().top + window.pageYOffset - totalOffset;
                window.scrollTo({
                    top: Math.max(0, targetTop),
                    behavior: 'smooth'
                });
                history.pushState(null, null, href);
            }
        });
    });

    const sections = Array.from(giantPills).map(pill => {
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

        if (header) {
            if (scrollTop > 100) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        }

        let currentSectionId = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 180;
            const height = sec.offsetHeight;
            if (scrollTop >= top && scrollTop < top + height) {
                currentSectionId = `#${sec.id}`;
            }
        });

        if (currentSectionId) {
            if (notusPill) notusPill.classList.remove('is-active', 'giant-pill--active');
            giantPills.forEach(pill => {
                if (pill.getAttribute('href') === currentSectionId) {
                    pill.classList.add('is-active');
                } else {
                    pill.classList.remove('is-active');
                }
            });
        } else {
            // At the top of the page
            if (notusPill) notusPill.classList.add('is-active', 'giant-pill--active');
            giantPills.forEach(pill => pill.classList.remove('is-active'));
        }
    }, { passive: true });
}

/* --------------------------------------------------------------------------
   02. HEADER LOTTIE LOGO (Matches index.html)
   -------------------------------------------------------------------------- */
function initHeaderLogo() {
    const logoContainer = document.getElementById('lottie-logo') || document.getElementById('siteLottieLogo');
    if (logoContainer && typeof lottie !== 'undefined') {
        const logoData = {"v":"5.12.1","fr":25,"ip":0,"op":100,"w":500,"h":500,"nm":"WB Animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"W3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.182,-1.095],[50,150],[-50,150],[-49.818,-1.095]],"c":true}]},{"i":{"x":0.63,"y":1},"o":{"x":0.953,"y":0},"t":27,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":0.333,"y":0},"t":49,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50.182,-148.905],[-49.818,-148.905],[-50,-150]],"c":true}]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":50,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.182,148.905],[50.365,150],[-49.635,150],[-49.818,148.905]],"c":true}]},{"t":74,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.183,-2.19],[50.365,150],[-49.635,150],[-49.817,-2.19]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"W2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[370,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"W1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0}],"markers":[],"props":{}};

        lottie.loadAnimation({
            container: logoContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: logoData
        });
    }
}

/* --------------------------------------------------------------------------
   03. FAMILIES GLOBAL SCALE SLIDER
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
   04. INTERACTIVE TYPE TESTER
   -------------------------------------------------------------------------- */
function initTesterStudio() {
    const inputStage = document.getElementById('testerInput');
    const viewport = document.getElementById('testerViewport');
    const activeStyleText = document.getElementById('testerActiveStyleText');
    const charCountDisplay = document.getElementById('testerCharCount');
    if (!inputStage) return;

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

    const alignBtns = document.querySelectorAll('.tester-align-btn');
    alignBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alignBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            inputStage.style.textAlign = btn.getAttribute('data-align');
        });
    });

    const caseBtns = document.querySelectorAll('.tester-case-btn');
    caseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            caseBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            inputStage.style.textTransform = btn.getAttribute('data-case');
        });
    });

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

    const presets = {
        'myth-en': "Notus brings the warmth of southern gales into rigid typographic stone.",
        'editorial-ru': "Плавность текучих капель и непоколебимая строгость высокого контраста.",
        'pangram-en': "The quick brown fox jumps over a lazy sphinx of quartz. 0123456789",
        'pangram-ru': "В чащах юга жил-был цитрус? Да, но фальшивый экземпляр! № 1892",
        'financial': "Quarterly Report § 48/B — €4,250.00 to ₽380,000 ($1,450.80) · ⅓ ½ ¾"
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

    function updateCharCount() {
        if (charCountDisplay && inputStage) {
            charCountDisplay.textContent = `${inputStage.textContent.length} chars`;
        }
    }

    inputStage.addEventListener('input', updateCharCount);
    updateCharCount();
}

/* --------------------------------------------------------------------------
   05. DISPLAAY DUAL-PANE GLYPH INSPECTOR
   -------------------------------------------------------------------------- */
function initDisplaayGlyphs() {
    const grid = document.getElementById('displaayGlyphMatrix');
    const giantChar = document.getElementById('inspectorGiantChar');
    const charName = document.getElementById('inspectorCharName');
    const charUnicode = document.getElementById('inspectorCharUnicode');
    const copyBtn = document.getElementById('inspectorCopyBtn');
    if (!grid) return;

    let selectedChar = 'a';

    const sets = {
        'all': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789.,:;!?\'"—–-()[]{}/\\@#$%&*+=<>€$£¥₽§¶†‡©®™°¼½¾⅓⅔',
        'latin': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ',
        'cyrillic': 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяҐЄІЇґєії',
        'figures': '0123456789¼½¾⅓⅔⅛⅜⅝⅞%‰+−±×÷=≠≈$€£¥₽¢№',
        'symbols': '.,:;!?\'"—–-()[]{}/\\@#&*§¶†‡©®™°•…„“”«»'
    };

    function updateInspector(char) {
        selectedChar = char;
        if (giantChar) giantChar.textContent = char;
        
        const codePoint = char.codePointAt(0);
        const hex = 'U+' + codePoint.toString(16).toUpperCase().padStart(4, '0');
        if (charUnicode) charUnicode.textContent = `${hex} · Dec ${codePoint}`;
        if (charName) charName.textContent = getCharacterDescription(char, codePoint);
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
            cell.className = 'glyph-box';
            if (ch === 'a' || (idx === 0 && !chars.includes('a'))) {
                cell.classList.add('is-active');
            }
            cell.textContent = ch;

            cell.addEventListener('mouseenter', () => {
                document.querySelectorAll('.glyph-box').forEach(c => c.classList.remove('is-active'));
                cell.classList.add('is-active');
                updateInspector(ch);
            });

            cell.addEventListener('click', () => {
                document.querySelectorAll('.glyph-box').forEach(c => c.classList.remove('is-active'));
                cell.classList.add('is-active');
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

    const tabBtns = document.querySelectorAll('.glyph-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const cat = btn.getAttribute('data-glyph-cat');
            renderMatrix(sets[cat] || sets['all']);
        });
    });

    renderMatrix(sets['all']);
    updateInspector('a');
}

/* --------------------------------------------------------------------------
   06. OPENTYPE FEATURE SWITCHES
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
   02-B. BROADSHEET VARIABLE / STYLE INTERACTIVE STUDIO
   -------------------------------------------------------------------------- */
function initBroadsheetInteractive() {
    const title = document.getElementById('broadsheetHeroTitle');
    const opticalSlider = document.getElementById('broadsheetOpticalSlider');
    const opticalVal = document.getElementById('broadsheetOpticalVal');
    const slantSlider = document.getElementById('broadsheetSlantSlider');
    const slantVal = document.getElementById('broadsheetSlantVal');
    const sizeSlider = document.getElementById('broadsheetSizeSlider');
    const sizeVal = document.getElementById('broadsheetSizeVal');
    const badge = document.getElementById('broadsheetActiveBadge');
    const pills = document.querySelectorAll('.broadsheet-pill');

    if (!title) return;

    const opticalNames = ['Display', 'Text', 'Caption'];

    function getStyle(opticalIdx, slantIdx) {
        if (opticalIdx === 0) {
            return slantIdx === 1 
                ? { font: 'Notus Display Italic', name: 'Notus Display Italic', italic: true }
                : { font: 'Notus Display', name: 'Notus Display Regular', italic: false };
        } else if (opticalIdx === 1) {
            return slantIdx === 1
                ? { font: 'Notus Text Italic', name: 'Notus Text Italic', italic: true }
                : { font: 'Notus Text', name: 'Notus Text Regular', italic: false };
        } else {
            return slantIdx === 1
                ? { font: 'Notus Caption', name: 'Notus Caption Italic', italic: true }
                : { font: 'Notus Caption', name: 'Notus Caption Regular', italic: false };
        }
    }

    function applyStyle(styleObj, opticalIdx, slantIdx) {
        title.style.fontFamily = `"${styleObj.font}", serif`;
        title.style.fontStyle = styleObj.italic ? 'italic' : 'normal';

        const em = title.querySelector('em');
        if (em) {
            if (styleObj.italic) {
                em.style.fontStyle = 'normal';
            } else {
                em.style.fontStyle = 'italic';
                if (opticalIdx === 0) em.style.fontFamily = '"Notus Display Italic", serif';
                else if (opticalIdx === 1) em.style.fontFamily = '"Notus Text Italic", serif';
                else em.style.fontFamily = '"Notus Caption", serif';
            }
        }

        if (opticalVal) opticalVal.textContent = opticalNames[opticalIdx];
        if (slantVal) slantVal.textContent = styleObj.italic ? '12°' : '0°';
        if (opticalSlider) opticalSlider.value = opticalIdx;
        if (slantSlider) slantSlider.value = slantIdx;
        if (badge) badge.textContent = `Active Style: ${styleObj.name}`;

        pills.forEach(pill => {
            const pillOptical = parseInt(pill.getAttribute('data-optical'), 10);
            const pillItalic = pill.getAttribute('data-italic') === 'true';
            if (pillOptical === opticalIdx && pillItalic === styleObj.italic) {
                pill.classList.add('is-active');
            } else {
                pill.classList.remove('is-active');
            }
        });
    }

    if (opticalSlider && slantSlider) {
        const handleSliderChange = () => {
            const opt = parseInt(opticalSlider.value, 10);
            const sl = parseInt(slantSlider.value, 10);
            const style = getStyle(opt, sl);
            applyStyle(style, opt, sl);
        };
        opticalSlider.addEventListener('input', handleSliderChange);
        slantSlider.addEventListener('input', handleSliderChange);
    }

    if (sizeSlider && sizeVal) {
        sizeSlider.addEventListener('input', (e) => {
            const sz = e.target.value;
            title.style.fontSize = `${sz}px`;
            sizeVal.textContent = `${sz}px`;
        });
    }

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const opt = parseInt(pill.getAttribute('data-optical'), 10);
            const isItalic = pill.getAttribute('data-italic') === 'true';
            const sl = isItalic ? 1 : 0;
            const style = getStyle(opt, sl);
            applyStyle(style, opt, sl);
        });
    });
}
