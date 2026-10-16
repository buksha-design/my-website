/**
 * NOTUS TYPE SPECIMEN — DISPLAAY JAVASCRIPT CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAndNav();
    initMastheadDelicateAnimation();
    initBroadsheetInteractive();
    initBroadsheetAmbientGlow();
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
   02-B. BROADSHEET VARIABLE / STYLE INTERACTIVE STUDIO & SLOGAN SCRAMBLE
   -------------------------------------------------------------------------- */
function initBroadsheetInteractive() {
    const title = document.getElementById('broadsheetHeroTitle');
    const badge = document.getElementById('broadsheetActiveBadge');
    const pills = document.querySelectorAll('.broadsheet-pill');

    if (!title) return;

    // Ensure headline is strictly non-editable
    title.removeAttribute('contenteditable');

    const slogans = [
        { line1: 'Silent rhythm,', line2: 'tactile grace.' },
        { line1: 'Жыве Беларусь,', line2: 'жыве вечна!' }
    ];

    const MAX_LEN_1 = Math.max(...slogans.map(s => s.line1.length));
    const MAX_LEN_2 = Math.max(...slogans.map(s => s.line2.length));

    // Build fixed two-line DOM structure with dedicated character slots
    title.innerHTML = '';
    const line1El = document.createElement('span');
    line1El.className = 'broadsheet-line';
    line1El.id = 'broadsheetLine1';

    const line2El = document.createElement('em');
    line2El.className = 'broadsheet-line';
    line2El.id = 'broadsheetLine2';

    const slots1 = [];
    const slots2 = [];

    for (let i = 0; i < MAX_LEN_1; i++) {
        const sp = document.createElement('span');
        sp.className = 'broadsheet-char';
        line1El.appendChild(sp);
        slots1.push(sp);
    }

    for (let i = 0; i < MAX_LEN_2; i++) {
        const sp = document.createElement('span');
        sp.className = 'broadsheet-char';
        line2El.appendChild(sp);
        slots2.push(sp);
    }

    title.appendChild(line1El);
    title.appendChild(line2El);

    // Hidden measurement nodes inside each line so they inherit exact font/size/style
    const measure1 = document.createElement('span');
    measure1.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;white-space:pre;left:-9999px;top:0;';
    line1El.appendChild(measure1);

    const measure2 = document.createElement('span');
    measure2.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;white-space:pre;left:-9999px;top:0;';
    line2El.appendChild(measure2);

    let currentFont = 'Notus Display';
    let currentItalic = false;
    let currentSloganIdx = 0;
    let isTransitioning = false;

    // Pre-measured character advance widths for each slogan: widthsCache[sloganIdx].line1[i], .line2[i]
    const widthsCache = [
        { line1: new Array(MAX_LEN_1).fill(0), line2: new Array(MAX_LEN_2).fill(0) },
        { line1: new Array(MAX_LEN_1).fill(0), line2: new Array(MAX_LEN_2).fill(0) }
    ];

    function measureCharAdvance(measureNode, ch) {
        if (!ch) return 0;
        measureNode.textContent = 'о' + 'о';
        const baseW = measureNode.getBoundingClientRect().width;
        measureNode.textContent = 'о' + ch + 'о';
        const fullW = measureNode.getBoundingClientRect().width;
        return Math.max(0, fullW - baseW);
    }

    function recalcAllWidths() {
        for (let sIdx = 0; sIdx < slogans.length; sIdx++) {
            const s = slogans[sIdx];
            for (let i = 0; i < MAX_LEN_1; i++) {
                widthsCache[sIdx].line1[i] = measureCharAdvance(measure1, s.line1[i] || '');
            }
            for (let i = 0; i < MAX_LEN_2; i++) {
                widthsCache[sIdx].line2[i] = measureCharAdvance(measure2, s.line2[i] || '');
            }
        }
        if (!isTransitioning) {
            applyStaticSlogan(currentSloganIdx);
        }
    }

    function applyStaticSlogan(sIdx) {
        const s = slogans[sIdx];
        const w1 = widthsCache[sIdx].line1;
        const w2 = widthsCache[sIdx].line2;

        for (let i = 0; i < MAX_LEN_1; i++) {
            const ch = s.line1[i] || '';
            slots1[i].textContent = ch;
            slots1[i].style.width = ch ? `${w1[i].toFixed(2)}px` : '0px';
        }
        for (let i = 0; i < MAX_LEN_2; i++) {
            const ch = s.line2[i] || '';
            slots2[i].textContent = ch;
            slots2[i].style.width = ch ? `${w2[i].toFixed(2)}px` : '0px';
        }
    }

    function applyStyle(font, isItalic, styleName) {
        currentFont = font;
        currentItalic = isItalic;
        title.style.fontFamily = `"${font}", serif`;
        title.style.fontStyle = isItalic ? 'italic' : 'normal';

        if (isItalic) {
            line2El.style.fontStyle = 'normal';
            line2El.style.fontFamily = `"${font}", serif`;
        } else {
            line2El.style.fontStyle = 'italic';
            if (font.includes('Display')) line2El.style.fontFamily = '"Notus Display Italic", serif';
            else if (font.includes('Text')) line2El.style.fontFamily = '"Notus Text Italic", serif';
            else line2El.style.fontFamily = '"Notus Caption", serif';
        }

        if (badge) badge.textContent = `Active Style: ${styleName}`;

        pills.forEach(pill => {
            if (pill.getAttribute('data-font') === font) {
                pill.classList.add('is-active');
            } else {
                pill.classList.remove('is-active');
            }
        });

        recalcAllWidths();
    }

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const font = pill.getAttribute('data-font');
            const isItalic = pill.getAttribute('data-italic') === 'true';
            applyStyle(font, isItalic, pill.textContent.trim());
        });
    });

    // Clean character pools without overhanging diacritics or tall ascenders
    const UPPER_CHARS = 'ACEGHIKLMNORSTUVWXZАБВГДЕЖЗИКЛМНОПРСТУХЧШЭЮЯ';
    const LOWER_CHARS = 'acemnorsuvwxzавгежзиклмнопстухцчшыьэюя';

    const HOLD_DURATION_MS = 4000;
    const SCRAMBLE_DURATION_MS = 475;
    const SCRAMBLE_STEP_MS = 35;

    function isUpperCaseChar(ch) {
        return ch && ch !== ch.toLowerCase() && ch === ch.toUpperCase();
    }

    function buildLineQueue(fromText, toText, fromWidths, toWidths, maxLen) {
        const queue = [];
        for (let i = 0; i < maxLen; i++) {
            const fromCh = fromText[i] || '';
            const toCh = toText[i] || '';
            const start = (i / Math.max(maxLen, 1)) * 0.18 + Math.random() * 0.12;
            const end = 0.48 + (i / Math.max(maxLen, 1)) * 0.32 + Math.random() * 0.16;
            const useUpper = isUpperCaseChar(toCh) || isUpperCaseChar(fromCh);
            queue.push({
                fromCh,
                toCh,
                fromW: fromWidths[i] || 0,
                toW: toWidths[i] || 0,
                start,
                end: Math.min(end, 0.96),
                useUpper,
                randCh: fromCh || toCh || 'a',
                lastStep: -1
            });
        }
        return queue;
    }

    function updateLineSlots(slots, queue, progress, globalEase, stepTick) {
        for (let i = 0; i < queue.length; i++) {
            const item = queue[i];
            const slot = slots[i];

            // Smoothly interpolate slot width so characters never jump horizontally
            const curW = item.fromW + (item.toW - item.fromW) * globalEase;
            slot.style.width = curW > 0.2 ? `${curW.toFixed(2)}px` : '0px';

            if (progress >= item.end) {
                slot.textContent = item.toCh;
            } else if (progress < item.start) {
                slot.textContent = item.fromCh;
            } else {
                const localP = (progress - item.start) / Math.max(0.01, item.end - item.start);
                if (!item.toCh && localP > 0.5) {
                    slot.textContent = '';
                } else if (!item.fromCh && localP < 0.35) {
                    slot.textContent = '';
                } else if ((localP < 0.5 && item.fromCh === ' ') || (localP >= 0.5 && item.toCh === ' ')) {
                    slot.textContent = ' ';
                } else {
                    if (item.lastStep !== stepTick) {
                        const pool = item.useUpper ? UPPER_CHARS : LOWER_CHARS;
                        item.randCh = pool[Math.floor(Math.random() * pool.length)];
                        item.lastStep = stepTick;
                    }
                    slot.textContent = item.randCh;
                }
            }
        }
    }

    function transitionToNextSlogan() {
        isTransitioning = true;
        const fromIdx = currentSloganIdx;
        const nextIdx = (currentSloganIdx + 1) % slogans.length;
        const fromSlogan = slogans[fromIdx];
        const toSlogan = slogans[nextIdx];

        const q1 = buildLineQueue(fromSlogan.line1, toSlogan.line1, widthsCache[fromIdx].line1, widthsCache[nextIdx].line1, MAX_LEN_1);
        const q2 = buildLineQueue(fromSlogan.line2, toSlogan.line2, widthsCache[fromIdx].line2, widthsCache[nextIdx].line2, MAX_LEN_2);

        const startTime = performance.now();

        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / SCRAMBLE_DURATION_MS, 1);
            const globalEase = progress * progress * (3 - 2 * progress);
            const stepTick = Math.floor(elapsed / SCRAMBLE_STEP_MS);

            if (progress < 1) {
                updateLineSlots(slots1, q1, progress, globalEase, stepTick);
                updateLineSlots(slots2, q2, progress, globalEase, stepTick);
                requestAnimationFrame(tick);
            } else {
                currentSloganIdx = nextIdx;
                isTransitioning = false;
                applyStaticSlogan(currentSloganIdx);
                // Force clean full-container repaint to eliminate any residual subpixel glyph artifacts
                title.style.opacity = '0.999';
                requestAnimationFrame(() => {
                    title.style.opacity = '';
                });
                setTimeout(transitionToNextSlogan, HOLD_DURATION_MS);
            }
        }

        requestAnimationFrame(tick);
    }

    // Initial calculation & re-measure after custom fonts finish loading / on resize
    recalcAllWidths();
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            recalcAllWidths();
        });
    }
    window.addEventListener('resize', recalcAllWidths, { passive: true });

    setTimeout(transitionToNextSlogan, HOLD_DURATION_MS);
}

/* --------------------------------------------------------------------------
   02-C. BROADSHEET SCULPTURAL MARBLE DUST (Delicate Micro-Canvas Particles on Wind)
   -------------------------------------------------------------------------- */
function initBroadsheetAmbientGlow() {
    const section = document.getElementById('editorial-now');
    const canvas = document.getElementById('broadsheetAmbientCanvas');
    if (!section || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animId = null;
    let isVisible = true;
    let isHovered = false;

    const mouse = { x: -9999, y: -9999 };
    let mouseVelocity = { x: 0, y: 0 };
    let lastMouseX = -9999;
    let lastMouseY = -9999;
    let lastMoveTime = performance.now();

    // 80 Sculptural Marble Dust particles across 3 optical depth layers
    const PARTICLE_COUNT = 80;
    const particles = [];
    const trailSparks = [];

    function createParticle(initialX) {
        // Layer: 0 = background (fine/slow), 1 = midground, 2 = foreground (luminous/close)
        const depthRoll = Math.random();
        let depth = 0;
        let radius = 0.9;
        let baseOpacity = 0.35;
        let baseVx = 0.45;

        if (depthRoll > 0.78) {
            // Foreground: close luminous marble grains (reduced by 40%)
            depth = 2;
            radius = 1.32 + Math.random() * 0.66;
            baseOpacity = 0.85 + Math.random() * 0.12;
            baseVx = 1.1 + Math.random() * 0.55;
        } else if (depthRoll > 0.42) {
            // Midground: floating marble dust (reduced by 40%)
            depth = 1;
            radius = 0.78 + Math.random() * 0.42;
            baseOpacity = 0.55 + Math.random() * 0.22;
            baseVx = 0.65 + Math.random() * 0.40;
        } else {
            // Background: distant micro-haze (reduced by 40%)
            depth = 0;
            radius = 0.45 + Math.random() * 0.30;
            baseOpacity = 0.25 + Math.random() * 0.20;
            baseVx = 0.35 + Math.random() * 0.25;
        }

        return {
            x: initialX !== undefined ? initialX : Math.random() * (width || 1200),
            y: Math.random() * (height || 600),
            vx: baseVx,
            vy: (Math.random() - 0.5) * 0.15,
            baseVx: baseVx,
            baseVy: 0,
            radius: radius,
            depth: depth,
            baseOpacity: baseOpacity,
            waveFreq: 0.35 + Math.random() * 0.45,
            waveAmp: 0.25 + Math.random() * 0.45,
            phase: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.8 + Math.random() * 1.4,
            // Warm marble tones: alabaster cream, sunlit champagne, and warm amber gold
            hueType: Math.random()
        };
    }

    function initParticles() {
        particles.length = 0;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle(Math.random() * width));
        }
    }

    function resize() {
        const rect = section.getBoundingClientRect();
        width = Math.max(rect.width, 300);
        height = Math.max(rect.height, 300);
        dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);

        if (particles.length === 0) {
            initParticles();
        }
    }

    const resizeObserver = new ResizeObserver(() => {
        resize();
    });
    resizeObserver.observe(section);
    resize();

    function updatePointer(clientX, clientY) {
        const rect = section.getBoundingClientRect();
        const curX = clientX - rect.left;
        const curY = clientY - rect.top;
        const now = performance.now();
        const dt = Math.max((now - lastMoveTime) * 0.001, 0.016);

        if (lastMouseX !== -9999) {
            mouseVelocity.x = (curX - lastMouseX) / dt * 0.05;
            mouseVelocity.y = (curY - lastMouseY) / dt * 0.05;
        }

        lastMouseX = curX;
        lastMouseY = curY;
        lastMoveTime = now;
        mouse.x = curX;
        mouse.y = curY;

        // Occasionally spawn subtle momentary luminous sparks at cursor
        if (Math.hypot(mouseVelocity.x, mouseVelocity.y) > 8 && trailSparks.length < 18) {
            trailSparks.push({
                x: curX + (Math.random() - 0.5) * 16,
                y: curY + (Math.random() - 0.5) * 16,
                vx: mouseVelocity.x * 0.08 + (Math.random() * 0.8 + 0.4),
                vy: mouseVelocity.y * 0.08 + (Math.random() - 0.5) * 0.8,
                radius: 0.9 + Math.random() * 0.9,
                opacity: 0.85,
                life: 1.0,
                decay: 0.02 + Math.random() * 0.025
            });
        }
    }

    section.addEventListener('mouseenter', (e) => {
        isHovered = true;
        lastMouseX = -9999;
        lastMouseY = -9999;
        updatePointer(e.clientX, e.clientY);
    });

    section.addEventListener('mousemove', (e) => {
        isHovered = true;
        updatePointer(e.clientX, e.clientY);
    });

    section.addEventListener('mouseleave', () => {
        isHovered = false;
        mouse.x = -9999;
        mouse.y = -9999;
    });

    section.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
            isHovered = true;
            lastMouseX = -9999;
            lastMouseY = -9999;
            updatePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    section.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            isHovered = true;
            updatePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    section.addEventListener('touchend', () => {
        isHovered = false;
        mouse.x = -9999;
        mouse.y = -9999;
    });

    function getParticleColor(hueType, opacity) {
        if (hueType > 0.65) {
            // Warm golden amber flecks
            return `rgba(248, 208, 148, ${opacity})`;
        } else if (hueType > 0.3) {
            // Sunlit champagne marble
            return `rgba(255, 238, 212, ${opacity})`;
        } else {
            // Alabaster white dust
            return `rgba(255, 252, 245, ${opacity})`;
        }
    }

    function render(currentTime) {
        if (!isVisible) {
            animId = null;
            return;
        }

        const t = (currentTime || performance.now()) * 0.001;

        // Clear with pure pitch black base
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        // Soft ambient beam of light through the studio center (sculptor's light shaft)
        const centerGrad = ctx.createRadialGradient(width * 0.5, height * 0.48, 0, width * 0.5, height * 0.48, Math.max(width * 0.45, 450));
        centerGrad.addColorStop(0, 'rgba(235, 195, 140, 0.075)');
        centerGrad.addColorStop(0.5, 'rgba(185, 135, 75, 0.025)');
        centerGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = centerGrad;
        ctx.fillRect(0, 0, width, height);

        // Decay mouse velocity
        mouseVelocity.x *= 0.92;
        mouseVelocity.y *= 0.92;

        const MOUSE_RADIUS = 180;
        const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // 1. Natural wind drift & wave
            const waveY = Math.sin(t * p.waveFreq + p.phase) * p.waveAmp;
            p.x += p.vx;
            p.y += p.vy + waveY;

            // 2. Mouse deflection & fluid wind reaction
            if (isHovered && mouse.x !== -9999) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < MOUSE_RADIUS_SQ && distSq > 1) {
                    const dist = Math.sqrt(distSq);
                    const normalX = dx / dist;
                    const normalY = dy / dist;
                    const force = Math.pow(1 - dist / MOUSE_RADIUS, 1.8) * 3.8;

                    // Deflection away from cursor + gentle lift in mouse direction
                    p.vx += normalX * force + mouseVelocity.x * 0.04;
                    p.vy += normalY * force + mouseVelocity.y * 0.04;
                }
            }

            // Smooth damping back to steady-state wind speed
            p.vx += (p.baseVx - p.vx) * 0.045;
            p.vy += (p.baseVy - p.vy) * 0.045;

            // Wrap boundaries smoothly
            if (p.x > width + 25) {
                p.x = -25;
                p.y = Math.random() * height;
                p.vx = p.baseVx;
                p.vy = 0;
            } else if (p.x < -25) {
                p.x = width + 25;
            }

            if (p.y > height + 20) p.y = -20;
            else if (p.y < -20) p.y = height + 20;

            // Twinkle pulsation
            const twinkle = 0.8 + 0.2 * Math.sin(t * p.twinkleSpeed + p.phase);
            const currentOpacity = Math.min(Math.max(p.baseOpacity * twinkle, 0.1), 0.98);
            const particleColor = getParticleColor(p.hueType, currentOpacity);

            // Draw particle
            if (p.depth === 2) {
                // Foreground: draw with soft luminous bloom halo
                const glowRad = p.radius * 2.8;
                const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRad);
                halo.addColorStop(0, particleColor);
                halo.addColorStop(0.35, getParticleColor(p.hueType, currentOpacity * 0.5));
                halo.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = halo;
                ctx.beginPath();
                ctx.arc(p.x, p.y, glowRad, 0, Math.PI * 2);
                ctx.fill();

                // Bright crystalline core
                ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2);
                ctx.fill();
            } else {
                // Midground & Background: crisp, delicate micro-dust dots
                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Draw and update fleeting trail sparks
        for (let i = trailSparks.length - 1; i >= 0; i--) {
            const sp = trailSparks[i];
            sp.x += sp.vx;
            sp.y += sp.vy;
            sp.vx *= 0.96;
            sp.vy *= 0.96;
            sp.life -= sp.decay;

            if (sp.life <= 0) {
                trailSparks.splice(i, 1);
                continue;
            }

            const spAlpha = sp.opacity * sp.life;
            const spGrad = ctx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, sp.radius * 2.4);
            spGrad.addColorStop(0, `rgba(255, 240, 205, ${spAlpha})`);
            spGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = spGrad;
            ctx.beginPath();
            ctx.arc(sp.x, sp.y, sp.radius * 2.4, 0, Math.PI * 2);
            ctx.fill();
        }

        animId = requestAnimationFrame(render);
    }

    // Start immediately!
    animId = requestAnimationFrame(render);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isVisible) {
                    isVisible = true;
                    if (!animId) animId = requestAnimationFrame(render);
                }
            } else {
                isVisible = false;
                if (animId) {
                    cancelAnimationFrame(animId);
                    animId = null;
                }
            }
        });
    }, { threshold: 0.0, rootMargin: '250px 0px' });

    observer.observe(section);
}

/* --------------------------------------------------------------------------
   01-B. MASTHEAD PRISMATIC RGB DISPERSION & BLUR ON HOVER ("The Notus TIMES")
   -------------------------------------------------------------------------- */
function initMastheadDelicateAnimation() {
    const coverSection = document.getElementById('cover');
    const mastheadTitle = document.querySelector('.masthead-title');
    const topLine = document.querySelector('.masthead-title-top');
    const bottomLine = document.querySelector('.masthead-title-bottom');
    if (!coverSection || !mastheadTitle || !topLine || !bottomLine) return;

    const topText = topLine.textContent.trim();
    const bottomText = bottomLine.textContent.trim();

    // Build un-split core layer (preserves native kerning, ligatures, and full 'h' ascender)
    // and radial-masked background glow layer so only the local mouse region glows
    mastheadTitle.innerHTML = '';

    const glowMask = document.createElement('div');
    glowMask.className = 'masthead-glow-mask';
    glowMask.setAttribute('aria-hidden', 'true');

    const glowLayer = document.createElement('div');
    glowLayer.className = 'masthead-glow-layer';

    const glowTop = document.createElement('span');
    glowTop.className = 'masthead-title-top';
    glowTop.textContent = topText;

    const glowBottom = document.createElement('span');
    glowBottom.className = 'masthead-title-bottom';
    glowBottom.textContent = bottomText;

    glowLayer.appendChild(glowTop);
    glowLayer.appendChild(glowBottom);
    glowMask.appendChild(glowLayer);

    const coreLayer = document.createElement('div');
    coreLayer.className = 'masthead-core-layer';

    const coreTop = document.createElement('span');
    coreTop.className = 'masthead-title-top';
    coreTop.textContent = topText;

    const coreBottom = document.createElement('span');
    coreBottom.className = 'masthead-title-bottom';
    coreBottom.textContent = bottomText;

    coreLayer.appendChild(coreTop);
    coreLayer.appendChild(coreBottom);

    mastheadTitle.appendChild(glowMask);
    mastheadTitle.appendChild(coreLayer);

    let isHovered = false;
    let targetX = 0;
    let targetY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let vx = 0;
    let vy = 0;
    let lastClientX = null;
    let lastClientY = null;
    let intensity = 0;
    let shiftX = 14;
    let shiftY = 7;
    let animId = null;

    const SPOT_RADIUS = 260;

    function startLoop() {
        if (!animId) {
            animId = requestAnimationFrame(animate);
        }
    }

    function updatePointerFromEvent(e, snap) {
        const maskRect = glowMask.getBoundingClientRect();
        const nx = e.clientX - maskRect.left;
        const ny = e.clientY - maskRect.top;

        if (lastClientX !== null && !snap) {
            vx = (e.clientX - lastClientX) * 0.35;
            vy = (e.clientY - lastClientY) * 0.35;
        }
        lastClientX = e.clientX;
        lastClientY = e.clientY;

        targetX = nx;
        targetY = ny;
        if (snap) {
            smoothX = nx;
            smoothY = ny;
        }
    }

    coverSection.addEventListener('mouseenter', (e) => {
        updatePointerFromEvent(e, true);
        isHovered = true;
        startLoop();
    }, { passive: true });

    coverSection.addEventListener('mousemove', (e) => {
        updatePointerFromEvent(e, !isHovered);
        isHovered = true;
        startLoop();
    }, { passive: true });

    coverSection.addEventListener('mouseleave', () => {
        isHovered = false;
        lastClientX = null;
        lastClientY = null;
        startLoop();
    }, { passive: true });

    function animate() {
        vx *= 0.88;
        vy *= 0.88;

        smoothX += (targetX - smoothX) * 0.22;
        smoothY += (targetY - smoothY) * 0.22;

        const targetIntensity = isHovered ? 1 : 0;
        intensity += (targetIntensity - intensity) * 0.12;

        const clampedVx = Math.max(-16, Math.min(16, vx));
        const clampedVy = Math.max(-12, Math.min(12, vy));
        const targetShiftX = 14.0 + Math.abs(clampedVx) * 0.65;
        const targetShiftY = 7.0 + clampedVy * 0.42;

        shiftX += (targetShiftX - shiftX) * 0.12;
        shiftY += (targetShiftY - shiftY) * 0.12;

        if (intensity > 0.005) {
            const a = Math.min(1, intensity);
            const sx = shiftX * a;
            const sy = shiftY * a;

            // Radial mask spotlight centered on the mouse cursor so only the local region glows
            const maskGrad = `radial-gradient(circle ${SPOT_RADIUS}px at ${smoothX.toFixed(1)}px ${smoothY.toFixed(1)}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.78) 34%, rgba(0,0,0,0.32) 66%, rgba(0,0,0,0) 100%)`;
            glowMask.style.opacity = '1';
            glowMask.style.webkitMaskImage = maskGrad;
            glowMask.style.maskImage = maskGrad;

            // Soft optical blur on the background glow layer (-20% additional intensity reduction)
            const blurPx = (a * 4.15).toFixed(2);
            glowLayer.style.filter = `blur(${blurPx}px)`;

            // Multi-spectrum RGB/prismatic dispersion layers (-20% additional intensity reduction)
            const sAmber   = `${(-sx * 1.50).toFixed(1)}px ${(sy * 1.20).toFixed(1)}px ${(15.4 * a + 2.5).toFixed(1)}px rgba(255, 178, 38, ${(a * 0.42).toFixed(3)})`;
            const sMagenta = `${(-sx * 0.82).toFixed(1)}px ${(sy * 0.58).toFixed(1)}px ${(9.0 * a + 1.3).toFixed(1)}px rgba(255, 38, 108, ${(a * 0.43).toFixed(3)})`;
            const sViolet  = `${(-sx * 0.18).toFixed(1)}px ${(-sy * 0.88).toFixed(1)}px ${(9.6 * a + 1.3).toFixed(1)}px rgba(112, 16, 255, ${(a * 0.42).toFixed(3)})`;
            const sBlue    = `${(sx * 0.82).toFixed(1)}px ${(-sy * 0.32).toFixed(1)}px ${(9.0 * a + 1.3).toFixed(1)}px rgba(12, 88, 255, ${(a * 0.43).toFixed(3)})`;
            const sCyan    = `${(sx * 1.60).toFixed(1)}px ${(sy * 0.22).toFixed(1)}px ${(16.6 * a + 2.5).toFixed(1)}px rgba(0, 228, 255, ${(a * 0.43).toFixed(3)})`;

            glowLayer.style.textShadow = `${sAmber}, ${sMagenta}, ${sViolet}, ${sBlue}, ${sCyan}`;

            animId = requestAnimationFrame(animate);
        } else {
            intensity = 0;
            glowMask.style.opacity = '0';
            glowMask.style.webkitMaskImage = 'none';
            glowMask.style.maskImage = 'none';
            glowLayer.style.filter = 'none';
            glowLayer.style.textShadow = 'none';
            animId = null;
        }
    }
}




