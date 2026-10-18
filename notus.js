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
    initComparisonStackSwitchers();
    initDownloadForm();
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
                const subnavH = subnav ? subnav.offsetHeight : 0;
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
            const top = sec.getBoundingClientRect().top + scrollTop - 180;
            if (scrollTop >= top) {
                currentSectionId = `#${sec.id}`;
            }
        });

        if (currentSectionId) {
            if (notusPill) notusPill.classList.remove('is-active', 'giant-pill--active');
            giantPills.forEach(pill => {
                if (pill.getAttribute('href') === currentSectionId) {
                    pill.classList.add('is-active');
                } else {
                    pill.classList.remove('is-active', 'giant-pill--active');
                }
            });
        } else {
            // At the top of the page
            if (notusPill) notusPill.classList.add('is-active', 'giant-pill--active');
            giantPills.forEach((pill, idx) => {
                if (idx === 0) {
                    pill.classList.add('is-active');
                } else {
                    pill.classList.remove('is-active', 'giant-pill--active');
                }
            });
        }
    }, { passive: true });
}

/* --------------------------------------------------------------------------
   02. HEADER & FOOTER LOTTIE LOGO (Matches index.html)
   -------------------------------------------------------------------------- */
function initHeaderLogo() {
    const logoContainer = document.getElementById('lottie-logo') || document.getElementById('siteLottieLogo');
    const footerLogoContainer = document.getElementById('lottie-logo-footer');
    if (typeof lottie !== 'undefined') {
        const logoData = {"v":"5.12.1","fr":25,"ip":0,"op":100,"w":500,"h":500,"nm":"WB Animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"W3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.182,-1.095],[50,150],[-50,150],[-49.818,-1.095]],"c":true}]},{"i":{"x":0.63,"y":1},"o":{"x":0.953,"y":0},"t":27,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":0.333,"y":0},"t":49,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50.182,-148.905],[-49.818,-148.905],[-50,-150]],"c":true}]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":50,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.182,148.905],[50.365,150],[-49.635,150],[-49.818,148.905]],"c":true}]},{"t":74,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.183,-2.19],[50.365,150],[-49.635,150],[-49.817,-2.19]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"W2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[370,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"W1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0}],"markers":[],"props":{}};

        if (logoContainer) {
            lottie.loadAnimation({
                container: logoContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: logoData
            });
        }
        if (footerLogoContainer) {
            lottie.loadAnimation({
                container: footerLogoContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: logoData
            });
        }
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
        'all': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789.,:;!?\'"—–-()[]{}/\\@#$%&*+=<>€$£¥₽§¶†‡©®™°¼½¾',
        'latin': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ',
        'cyrillic': 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяҐЄІЇґєії',
        'figures': '0123456789¼½¾%‰+−±×÷=≠≈$€£¥₽¢№',
        'symbols': '.,:;!?\'"—–-()[]{}/\\@#&*§¶†‡©®™°•…„“”«»'
    };

    function updateInspector(char) {
        selectedChar = char;
        if (giantChar) giantChar.textContent = char;
        
        const codePoint = char.codePointAt(0);
        const hex = 'U+' + codePoint.toString(16).toUpperCase().padStart(4, '0');
        if (charUnicode) charUnicode.textContent = hex;
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
            if (idx === 0) {
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
            const activeSet = sets[cat] || sets['all'];
            renderMatrix(activeSet);
            updateInspector(Array.from(activeSet)[0] || 'A');
        });
    });

    renderMatrix(sets['all']);
    updateInspector('A');
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
        { line1: 'Жыве Беларусь!', line2: 'Жыве вечна!' },
        { line1: 'Souffle doré,', line2: 'beauté pure.' },
        { line1: 'Stille Größe,', line2: 'klare Form.' },
        { line1: 'Czułe światło,', line2: 'żywa forma.' }
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
    const widthsCache = slogans.map(() => ({
        line1: new Array(MAX_LEN_1).fill(0),
        line2: new Array(MAX_LEN_2).fill(0)
    }));

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
   02-C. BROADSHEET ATMOSPHERIC GOLDEN STARDUST & KINETIC PARTICLES
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

    const mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999 };
    let mouseSpeed = 0;
    let lastMouseX = -9999;
    let lastMouseY = -9999;

    const PARTICLE_COUNT = 90;
    const particles = [];
    const interactiveBursts = [];

    function createParticle(randomX) {
        // Optical tiers: 0 = distant micro-spark, 1 = midground drift, 2 = foreground luminous ember
        const tierRoll = Math.random();
        let tier = 0;
        let radius = 0.75;
        let baseAlpha = 0.35;
        let speed = 0.45;

        if (tierRoll > 0.8) {
            tier = 2;
            radius = 1.35 + Math.random() * 0.75;
            baseAlpha = 0.75 + Math.random() * 0.2;
            speed = 0.85 + Math.random() * 0.45;
        } else if (tierRoll > 0.4) {
            tier = 1;
            radius = 0.85 + Math.random() * 0.4;
            baseAlpha = 0.45 + Math.random() * 0.25;
            speed = 0.55 + Math.random() * 0.3;
        } else {
            tier = 0;
            radius = 0.5 + Math.random() * 0.3;
            baseAlpha = 0.2 + Math.random() * 0.2;
            speed = 0.3 + Math.random() * 0.2;
        }

        // Color palette: 0 = pure crystalline white, 1 = warm champagne alabaster, 2 = golden bronze
        const colorType = Math.random();
        let rgb = '255, 255, 255';
        if (colorType > 0.65) rgb = '245, 210, 155'; // warm gold
        else if (colorType > 0.3) rgb = '255, 240, 220'; // champagne alabaster

        return {
            x: randomX ? Math.random() * (width || 1200) : -15,
            y: Math.random() * (height || 600),
            vx: speed,
            vy: (Math.random() - 0.5) * 0.25,
            baseVx: speed,
            baseVy: (Math.random() - 0.5) * 0.15,
            radius,
            tier,
            baseAlpha,
            rgb,
            waveFreq: 0.4 + Math.random() * 0.5,
            waveAmp: 0.35 + Math.random() * 0.5,
            phase: Math.random() * Math.PI * 2,
            twinkleFreq: 0.8 + Math.random() * 1.5
        };
    }

    function initParticles() {
        particles.length = 0;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle(true));
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

        if (lastMouseX !== -9999) {
            const dx = curX - lastMouseX;
            const dy = curY - lastMouseY;
            mouseSpeed = Math.hypot(dx, dy);

            // Emit subtle kinetic micro-sparks on cursor move
            if (mouseSpeed > 9 && interactiveBursts.length < 24) {
                interactiveBursts.push({
                    x: curX + (Math.random() - 0.5) * 12,
                    y: curY + (Math.random() - 0.5) * 12,
                    vx: dx * 0.08 + (Math.random() * 0.6 + 0.3),
                    vy: dy * 0.08 + (Math.random() - 0.5) * 0.7,
                    radius: 0.8 + Math.random() * 0.8,
                    alpha: 0.85,
                    decay: 0.02 + Math.random() * 0.025,
                    rgb: Math.random() > 0.4 ? '255, 235, 190' : '255, 255, 255'
                });
            }
        }

        lastMouseX = curX;
        lastMouseY = curY;
        mouse.targetX = curX;
        mouse.targetY = curY;

        if (mouse.x === -9999) {
            mouse.x = curX;
            mouse.y = curY;
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
        lastMouseX = -9999;
        lastMouseY = -9999;
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
    });

    function render(currentTime) {
        if (!isVisible) {
            animId = null;
            return;
        }

        const t = (currentTime || performance.now()) * 0.001;

        // Smooth mouse cursor interpolation
        if (isHovered && mouse.targetX !== -9999) {
            mouse.x += (mouse.targetX - mouse.x) * 0.08;
            mouse.y += (mouse.targetY - mouse.y) * 0.08;
        }

        // 1. Deep Obsidian Studio Base
        ctx.fillStyle = '#05070c';
        ctx.fillRect(0, 0, width, height);

        // 2. Dynamic Notus Times Dual-Color Harmonics (Midnight Sapphire Blue & Radiant Amber Orange)
        // Orbiting ethereal focal centers
        const blueX = width * (0.32 + 0.22 * Math.sin(t * 0.38));
        const blueY = height * (0.42 + 0.28 * Math.cos(t * 0.44));
        const blueRadius = Math.max(width * 0.55, 520);

        const orangeX = width * (0.68 + 0.22 * Math.sin(t * 0.42 + 2.8));
        const orangeY = height * (0.58 + 0.26 * Math.cos(t * 0.36 + 1.2));
        const orangeRadius = Math.max(width * 0.52, 480);

        const thirdX = width * (0.5 + 0.18 * Math.cos(t * 0.25 + 0.8));
        const thirdY = height * (0.35 + 0.2 * Math.sin(t * 0.31 + 2.1));
        const thirdRadius = Math.max(width * 0.4, 380);

        // A. Flowing Midnight Sapphire & Electric Cobalt Blue Orb
        const blueGrad = ctx.createRadialGradient(blueX, blueY, 0, blueX, blueY, blueRadius);
        blueGrad.addColorStop(0, 'rgba(30, 85, 235, 0.24)');
        blueGrad.addColorStop(0.35, 'rgba(18, 52, 175, 0.14)');
        blueGrad.addColorStop(0.7, 'rgba(10, 26, 95, 0.05)');
        blueGrad.addColorStop(1, 'rgba(5, 7, 12, 0)');
        ctx.fillStyle = blueGrad;
        ctx.fillRect(0, 0, width, height);

        // B. Radiant Molten Amber & Sunset Orange Glow Orb
        const orangeGrad = ctx.createRadialGradient(orangeX, orangeY, 0, orangeX, orangeY, orangeRadius);
        orangeGrad.addColorStop(0, 'rgba(255, 125, 30, 0.26)');
        orangeGrad.addColorStop(0.3, 'rgba(235, 95, 20, 0.16)');
        orangeGrad.addColorStop(0.65, 'rgba(175, 60, 10, 0.05)');
        orangeGrad.addColorStop(1, 'rgba(5, 7, 12, 0)');
        ctx.fillStyle = orangeGrad;
        ctx.fillRect(0, 0, width, height);

        // C. Central Atmospheric Diffusion
        const mixGrad = ctx.createRadialGradient(thirdX, thirdY, 0, thirdX, thirdY, thirdRadius);
        mixGrad.addColorStop(0, 'rgba(215, 140, 75, 0.10)');
        mixGrad.addColorStop(0.5, 'rgba(55, 80, 170, 0.06)');
        mixGrad.addColorStop(1, 'rgba(5, 7, 12, 0)');
        ctx.fillStyle = mixGrad;
        ctx.fillRect(0, 0, width, height);

        // 3. Delicate Cursor Halo with dual chromatic warmth
        if (isHovered && mouse.x !== -9999) {
            const cursorGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 260);
            cursorGrad.addColorStop(0, 'rgba(255, 175, 85, 0.18)');
            cursorGrad.addColorStop(0.35, 'rgba(120, 145, 245, 0.09)');
            cursorGrad.addColorStop(0.7, 'rgba(35, 70, 190, 0.03)');
            cursorGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = cursorGrad;
            ctx.fillRect(0, 0, width, height);
        }

        // 4. Update & Render Golden Particles
        const MOUSE_REPEL_RADIUS = 160;
        const MOUSE_REPEL_SQ = MOUSE_REPEL_RADIUS * MOUSE_REPEL_RADIUS;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // Harmonic vertical undulation
            const wave = Math.sin(t * p.waveFreq + p.phase) * p.waveAmp;
            p.x += p.vx;
            p.y += p.vy + wave;

            // Interactive cursor repulsion / draft
            if (isHovered && mouse.x !== -9999) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < MOUSE_REPEL_SQ && distSq > 4) {
                    const dist = Math.sqrt(distSq);
                    const force = Math.pow(1 - dist / MOUSE_REPEL_RADIUS, 1.6) * 3.2;
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
            }

            // Restore equilibrium speed
            p.vx += (p.baseVx - p.vx) * 0.04;
            p.vy += (p.baseVy - p.vy) * 0.04;

            // Seamless boundary wrap
            if (p.x > width + 20) {
                p.x = -20;
                p.y = Math.random() * height;
                p.vx = p.baseVx;
                p.vy = p.baseVy;
            } else if (p.x < -20) {
                p.x = width + 20;
            }

            if (p.y > height + 20) p.y = -20;
            else if (p.y < -20) p.y = height + 20;

            // Twinkle oscillation
            const twinkle = 0.75 + 0.25 * Math.sin(t * p.twinkleFreq + p.phase);
            const currentAlpha = Math.min(Math.max(p.baseAlpha * twinkle, 0.1), 0.95);

            // Draw particle
            if (p.tier === 2) {
                // Foreground: luminous halo + bright center
                const haloR = p.radius * 2.6;
                const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR);
                halo.addColorStop(0, `rgba(${p.rgb}, ${currentAlpha * 0.85})`);
                halo.addColorStop(0.4, `rgba(${p.rgb}, ${currentAlpha * 0.3})`);
                halo.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = halo;
                ctx.beginPath();
                ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 0.65, 0, Math.PI * 2);
                ctx.fill();
            } else {
                // Midground & Background: crisp delicate embers
                ctx.fillStyle = `rgba(${p.rgb}, ${currentAlpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 5. Update & Render Interactive Cursor Bursts
        for (let i = interactiveBursts.length - 1; i >= 0; i--) {
            const b = interactiveBursts[i];
            b.x += b.vx;
            b.y += b.vy;
            b.vx *= 0.95;
            b.vy *= 0.95;
            b.alpha -= b.decay;

            if (b.alpha <= 0) {
                interactiveBursts.splice(i, 1);
                continue;
            }

            const bGrad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius * 2.2);
            bGrad.addColorStop(0, `rgba(${b.rgb}, ${b.alpha})`);
            bGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = bGrad;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.radius * 2.2, 0, Math.PI * 2);
            ctx.fill();
        }

        animId = requestAnimationFrame(render);
    }

    // Start rendering loop
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

    // Inject subtle SVG fractal-noise filter for the prismatic gradient
    if (!document.getElementById('masthead-grain-filter')) {
        const svgNS = 'http://www.w3.org/2000/svg';
        const svgEl = document.createElementNS(svgNS, 'svg');
        svgEl.setAttribute('width', '0');
        svgEl.setAttribute('height', '0');
        svgEl.setAttribute('aria-hidden', 'true');
        svgEl.style.cssText = 'position:absolute;width:0;height:0;pointer-events:none;overflow:hidden;';
        svgEl.innerHTML = `
            <defs>
                <filter id="masthead-grain-filter" x="-25%" y="-25%" width="150%" height="150%" color-interpolation-filters="sRGB">
                    <feTurbulence type="fractalNoise" baseFrequency="0.78" numOctaves="3" seed="11" stitchTiles="stitch" result="noise" />
                    <feColorMatrix in="noise" type="matrix"
                        values="1 0 0 0 0
                                1 0 0 0 0
                                1 0 0 0 0
                                1 0 0 0 0" result="monoNoise" />
                    <feComposite in="SourceGraphic" in2="monoNoise" operator="arithmetic" k1="0.82" k2="0.59" k3="0" k4="0" />
                </filter>
            </defs>
        `;
        coverSection.appendChild(svgEl);
    }

    // Build un-split core layer (preserves native kerning, ligatures, and full 'h' ascender)
    // and radial-masked background glow layer so only the local mouse/wind region glows
    mastheadTitle.innerHTML = '';

    const glowMask = document.createElement('div');
    glowMask.className = 'masthead-glow-mask';
    glowMask.setAttribute('aria-hidden', 'true');

    const glowGrain = document.createElement('div');
    glowGrain.className = 'masthead-glow-grain';

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
    glowGrain.appendChild(glowLayer);
    glowMask.appendChild(glowGrain);

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
    let isVisible = true;
    let targetX = 0;
    let targetY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let vx = 0;
    let vy = 0;
    let lastClientX = null;
    let lastClientY = null;
    let hoverMix = 0;
    let shiftX = 14;
    let shiftY = 7;
    let animId = null;

    const SPOT_RADIUS = 260;

    function startLoop() {
        if (!animId && isVisible) {
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

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    startLoop();
                } else if (animId) {
                    cancelAnimationFrame(animId);
                    animId = null;
                }
            });
        }, { threshold: 0.02 });
        io.observe(coverSection);
    }

    glowMask.style.opacity = '1';

    function animate(now) {
        if (!isVisible) {
            animId = null;
            return;
        }

        const t = (now || performance.now()) * 0.001;

        vx *= 0.90;
        vy *= 0.90;

        smoothX += (targetX - smoothX) * 0.18;
        smoothY += (targetY - smoothY) * 0.18;

        const targetHover = isHovered ? 1 : 0;
        hoverMix += (targetHover - hoverMix) * 0.08;

        // Gentle southern breeze harmonics ("Notus" wind)
        const gust1 = Math.sin(t * 0.85);
        const gust2 = Math.sin(t * 1.45 + 1.2);
        const gust3 = Math.cos(t * 0.62 + 2.5);
        const windPulse = 0.88 + 0.18 * gust1 + 0.10 * gust2;

        const clampedVx = Math.max(-16, Math.min(16, vx));
        const clampedVy = Math.max(-12, Math.min(12, vy));

        const targetShiftX = (14.0 + gust1 * 3.2 + gust2 * 1.8) + Math.abs(clampedVx) * 0.65;
        const targetShiftY = (6.8 + gust3 * 2.4) + clampedVy * 0.42;

        shiftX += (targetShiftX - shiftX) * 0.10;
        shiftY += (targetShiftY - shiftY) * 0.10;

        // 1) Continuous drifting wind-wave streams across the masthead
        const cycle1 = (t * 0.095) % 1;
        const env1 = Math.sin(cycle1 * Math.PI);
        const w1x = (8 + cycle1 * 84).toFixed(1);
        const w1y = (48 + Math.sin(t * 0.75) * 14).toFixed(1);
        const w1a = (env1 * (0.72 - hoverMix * 0.25)).toFixed(3);

        const cycle2 = (t * 0.095 + 0.5) % 1;
        const env2 = Math.sin(cycle2 * Math.PI);
        const w2x = (8 + cycle2 * 84).toFixed(1);
        const w2y = (54 + Math.cos(t * 0.68 + 1.1) * 15).toFixed(1);
        const w2a = (env2 * (0.68 - hoverMix * 0.25)).toFixed(3);

        const rx1 = Math.round(320 + gust1 * 38);
        const ry1 = Math.round(215 + gust3 * 24);
        const rx2 = Math.round(290 + gust2 * 34);
        const ry2 = Math.round(205 - gust1 * 22);

        const windGrad1 = `radial-gradient(ellipse ${rx1}px ${ry1}px at ${w1x}% ${w1y}%, rgba(0,0,0,${w1a}) 0%, rgba(0,0,0,${(w1a * 0.65).toFixed(3)}) 42%, rgba(0,0,0,0) 100%)`;
        const windGrad2 = `radial-gradient(ellipse ${rx2}px ${ry2}px at ${w2x}% ${w2y}%, rgba(0,0,0,${w2a}) 0%, rgba(0,0,0,${(w2a * 0.65).toFixed(3)}) 42%, rgba(0,0,0,0) 100%)`;

        // 2) Local mouse spotlight gently elongated and swaying with the breeze
        let maskGrad = `${windGrad1}, ${windGrad2}`;
        if (hoverMix > 0.005) {
            const hm = hoverMix;
            const spotRx = (SPOT_RADIUS * (1.06 + 0.08 * gust1)).toFixed(1);
            const spotRy = (SPOT_RADIUS * (0.94 + 0.06 * gust3)).toFixed(1);
            const driftX = smoothX + gust1 * 10 + gust2 * 5;
            const driftY = smoothY + gust3 * 7;
            const mouseGrad = `radial-gradient(ellipse ${spotRx}px ${spotRy}px at ${driftX.toFixed(1)}px ${driftY.toFixed(1)}px, rgba(0,0,0,${hm.toFixed(3)}) 0%, rgba(0,0,0,${(hm * 0.78).toFixed(3)}) 36%, rgba(0,0,0,${(hm * 0.32).toFixed(3)}) 68%, rgba(0,0,0,0) 100%)`;
            maskGrad = `${mouseGrad}, ${windGrad1}, ${windGrad2}`;
        }

        glowMask.style.webkitMaskImage = maskGrad;
        glowMask.style.maskImage = maskGrad;

        // 3) Traveling wind-wave phase across the 5 RGB dispersion layers
        const a = windPulse;
        const sx = shiftX;
        const sy = shiftY;
        const wavePhase = t * 1.55;

        const wA = 1 + 0.22 * Math.sin(wavePhase);
        const wM = 1 + 0.20 * Math.sin(wavePhase - 0.55);
        const wV = 1 + 0.18 * Math.sin(wavePhase - 1.10);
        const wB = 1 + 0.20 * Math.sin(wavePhase - 1.65);
        const wC = 1 + 0.25 * Math.sin(wavePhase - 2.20);

        const liftA = Math.cos(wavePhase * 0.85) * 2.2;
        const liftM = Math.cos(wavePhase * 0.85 - 0.55) * 1.8;
        const liftV = Math.cos(wavePhase * 0.85 - 1.10) * 2.0;
        const liftB = Math.cos(wavePhase * 0.85 - 1.65) * 1.8;
        const liftC = Math.cos(wavePhase * 0.85 - 2.20) * 2.4;

        const blurPx = (3.85 + 0.65 * Math.sin(t * 1.1)).toFixed(2);
        glowLayer.style.filter = `blur(${blurPx}px)`;

        const sAmber   = `${(-sx * 1.45 * wA).toFixed(1)}px ${(sy * 1.15 + liftA).toFixed(1)}px ${(15.4 * a + 2.5).toFixed(1)}px rgba(255, 178, 38, ${(0.42 * a).toFixed(3)})`;
        const sMagenta = `${(-sx * 0.80 * wM).toFixed(1)}px ${(sy * 0.56 + liftM).toFixed(1)}px ${(9.0 * a + 1.3).toFixed(1)}px rgba(255, 38, 108, ${(0.43 * a).toFixed(3)})`;
        const sViolet  = `${(-sx * 0.16 * wV).toFixed(1)}px ${(-sy * 0.86 + liftV).toFixed(1)}px ${(9.6 * a + 1.3).toFixed(1)}px rgba(112, 16, 255, ${(0.42 * a).toFixed(3)})`;
        const sBlue    = `${(sx * 0.82 * wB).toFixed(1)}px ${(-sy * 0.30 + liftB).toFixed(1)}px ${(9.0 * a + 1.3).toFixed(1)}px rgba(12, 88, 255, ${(0.43 * a).toFixed(3)})`;
        const sCyan    = `${(sx * 1.62 * wC).toFixed(1)}px ${(sy * 0.22 + liftC).toFixed(1)}px ${(16.6 * a + 2.5).toFixed(1)}px rgba(0, 228, 255, ${(0.43 * a).toFixed(3)})`;

        glowLayer.style.textShadow = `${sAmber}, ${sMagenta}, ${sViolet}, ${sBlue}, ${sCyan}`;

        animId = requestAnimationFrame(animate);
    }

    startLoop();
}

/* --------------------------------------------------------------------------
   08. COMPARISON STACK OPTICAL SIZE SWITCHERS (Display / Text / Caption)
   -------------------------------------------------------------------------- */
function initComparisonStackSwitchers() {
    const switcherGroups = document.querySelectorAll('.stack-style-switchers');
    if (!switcherGroups.length) return;

    // Preload all optical sizes so switching is instantaneous on first click
    if (document.fonts && document.fonts.load) {
        [
            '1em "Notus Display"',
            'italic 1em "Notus Display Italic"',
            '1em "Notus Text"',
            'italic 1em "Notus Text Italic"',
            '1em "Notus Caption"'
        ].forEach((f) => {
            try { document.fonts.load(f); } catch (_) {}
        });
    }

    const ALL_STYLE_CLASSES = [
        'style-display',
        'style-display-it',
        'style-text',
        'style-text-it',
        'style-caption',
        'style-caption-it'
    ];

    const FONT_MAP = {
        'style-display':    { family: '"Notus Display", serif', style: 'normal' },
        'style-display-it': { family: '"Notus Display Italic", serif', style: 'italic' },
        'style-text':       { family: '"Notus Text", serif', style: 'normal' },
        'style-text-it':    { family: '"Notus Text Italic", serif', style: 'italic' },
        'style-caption':    { family: '"Notus Caption", serif', style: 'normal' },
        'style-caption-it': { family: '"Notus Caption", serif', style: 'italic' }
    };

    switcherGroups.forEach((group) => {
        const block = group.closest('.stack-block');
        if (!block) return;

        const buttons = group.querySelectorAll('button[data-style-class]');
        const targetTextEl = block.querySelector('.stack-hero-word, .stack-question, .stack-cascade-list, .ot-ligatures-stage, .ot-smcp-stage, .bilingual-spread-stage');
        const metaLabelEl = block.querySelector('.stack-meta-label');
        if (!buttons.length || !targetTextEl) return;

        function activateButton(btn) {
            buttons.forEach((b) => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            const styleClass = btn.getAttribute('data-style-class');
            const labelText = btn.getAttribute('data-label');

            targetTextEl.classList.remove(...ALL_STYLE_CLASSES);
            if (styleClass) {
                targetTextEl.classList.add(styleClass);
                const mapped = FONT_MAP[styleClass];
                if (mapped) {
                    targetTextEl.style.setProperty('font-family', mapped.family, 'important');
                    targetTextEl.style.setProperty('font-style', mapped.style, 'important');
                }
            }

            if (metaLabelEl && labelText) {
                metaLabelEl.textContent = labelText;
            }

            // Force synchronous WebKit/Blink glyph cache & layer repaint while cursor stays on button
            targetTextEl.style.webkitTransform = 'translateZ(0)';
            targetTextEl.style.transform = 'translateZ(0)';
            targetTextEl.style.opacity = '0.999';
            void targetTextEl.offsetHeight;
            requestAnimationFrame(() => {
                targetTextEl.style.webkitTransform = '';
                targetTextEl.style.transform = '';
                targetTextEl.style.opacity = '';
            });
        }

        buttons.forEach((btn) => {
            btn.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                activateButton(btn);
            });
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                activateButton(btn);
                btn.blur();
            });
        });
    });

    // OpenType Feature Toggle Pills (liga, dlig, smcp, onum)
    const otToggleBtns = document.querySelectorAll('.ot-feature-toggle-btn[data-ot-toggle]');

    // Store clean original text/HTML for deterministic ZWNJ splitting when ligatures are disabled
    document.querySelectorAll('.ot-ligature-card__pair, .ot-ligature-card__word mark, .ot-specimen-stream').forEach((el) => {
        if (!el.hasAttribute('data-orig-text')) {
            el.setAttribute('data-orig-text', el.textContent);
        }
    });

    function syncLigatureStage(stage) {
        const ligaOff = stage.classList.contains('is-liga-off');
        const dligOff = stage.classList.contains('is-dlig-off');

        // 1. Update stream line
        const stream = stage.querySelector('.ot-specimen-stream');
        if (stream) {
            const orig = stream.getAttribute('data-orig-text') || stream.textContent.replace(/\u200C/g, '');
            let txt = orig;
            if (ligaOff) {
                txt = txt.replace(/ffl/g, 'f\u200Cf\u200Cl').replace(/ffi/g, 'f\u200Cf\u200Ci').replace(/fl/g, 'f\u200Cl').replace(/fi/g, 'f\u200Ci').replace(/ff/g, 'f\u200Cf').replace(/Th/g, 'T\u200Ch');
            }
            if (dligOff) {
                txt = txt.replace(/ct/g, 'c\u200Ct').replace(/st/g, 's\u200Ct').replace(/fj/g, 'f\u200Cj').replace(/Fj/g, 'F\u200Cj');
            }
            stream.textContent = txt;
            stream.style.setProperty('font-feature-settings', `"kern" 1, "liga" ${ligaOff ? 0 : 1}, "clig" ${ligaOff ? 0 : 1}, "dlig" ${dligOff ? 0 : 1}`, 'important');
        }

        // 2. Update each ligature card
        stage.querySelectorAll('.ot-ligature-card').forEach((card) => {
            const otType = card.getAttribute('data-ot');
            const isOff = (otType === 'liga' && ligaOff) || (otType === 'dlig' && dligOff);
            const pairEl = card.querySelector('.ot-ligature-card__pair');
            const markEl = card.querySelector('.ot-ligature-card__word mark');
            const wordEl = card.querySelector('.ot-ligature-card__word');

            if (pairEl) {
                const origPair = pairEl.getAttribute('data-orig-text') || pairEl.textContent.replace(/\u200C/g, '');
                pairEl.textContent = isOff ? origPair.split('').join('\u200C') : origPair;
                pairEl.style.setProperty('font-feature-settings', isOff ? '"kern" 1, "liga" 0, "clig" 0, "dlig" 0' : '"kern" 1, "liga" 1, "dlig" 1', 'important');
            }
            if (markEl) {
                const origMark = markEl.getAttribute('data-orig-text') || markEl.textContent.replace(/\u200C/g, '');
                markEl.textContent = isOff ? origMark.split('').join('\u200C') : origMark;
            }
            if (wordEl) {
                wordEl.style.setProperty('font-feature-settings', isOff ? '"kern" 1, "liga" 0, "clig" 0, "dlig" 0' : '"kern" 1, "liga" 1, "dlig" 1', 'important');
            }
        });
    }

    otToggleBtns.forEach((btn) => {
        const toggleFeature = () => {
            const block = btn.closest('.stack-block');
            if (!block) return;
            const stage = block.querySelector('.ot-ligatures-stage, .ot-smcp-stage');
            if (!stage) return;

            const feat = btn.getAttribute('data-ot-toggle');
            const isNowActive = !btn.classList.contains('is-active');
            btn.classList.toggle('is-active', isNowActive);
            btn.setAttribute('aria-pressed', isNowActive ? 'true' : 'false');

            const offClass = `is-${feat}-off`;
            stage.classList.toggle(offClass, !isNowActive);

            if (stage.classList.contains('ot-ligatures-stage')) {
                syncLigatureStage(stage);
            }

            // Synchronous WebKit repaint
            stage.style.transform = 'translateZ(0)';
            stage.style.opacity = '0.999';
            void stage.offsetHeight;
            requestAnimationFrame(() => {
                stage.style.transform = '';
                stage.style.opacity = '';
            });
        };

        btn.addEventListener('pointerdown', (e) => {
            if (e.button && e.button !== 0) return;
            e.preventDefault();
            toggleFeature();
        });
        btn.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    // Interactive Small Caps & Old-Style Figures Magnifier with Glyphs Metric Grid
    const smcpLine = document.getElementById('smcpAlphabetLine');
    const smcpCharEl = document.getElementById('smcpMagnifierChar');
    const smcpNameEl = document.getElementById('smcpMagnifierName');
    const smcpCodeEl = document.getElementById('smcpMagnifierCode');
    const smcpStageEl = document.getElementById('smcpMagnifierStage');
    const smcpProbeEl = document.getElementById('smcpBaselineProbe');
    const smcpLineBase = document.getElementById('smcpLineBase');
    const smcpLineX = document.getElementById('smcpLineX');
    const smcpLineOvershoot = document.getElementById('smcpLineOvershoot');
    const smcpLineA = document.getElementById('smcpLineA');
    const smcpLineC = document.getElementById('smcpLineC');
    const smcpVLineLeft = document.getElementById('smcpVLineLeft');
    const smcpVLineRight = document.getElementById('smcpVLineRight');

    function syncSmcpGrid() {
        if (!smcpCharEl || !smcpStageEl || !smcpProbeEl) return;
        const stageRect = smcpStageEl.getBoundingClientRect();
        const probeRect = smcpProbeEl.getBoundingClientRect();
        const charRect = smcpCharEl.getBoundingClientRect();
        if (stageRect.height < 10 || charRect.width < 2) return;

        const fontSize = parseFloat(window.getComputedStyle(smcpCharEl).fontSize) || 320;
        const baselineFromBottom = Math.max(16, stageRect.bottom - probeRect.bottom);

        // Exact 1000-UPM metric coordinates from Notus Glyphs master:
        // baseline = 0, x (smcp height) = 0.518em, overshoot = 0.538em, a (diacritic/ascender) = 0.772em, c (cap/top) = 0.858em
        if (smcpLineBase) smcpLineBase.style.bottom = `${baselineFromBottom.toFixed(1)}px`;
        if (smcpLineX) smcpLineX.style.bottom = `${(baselineFromBottom + fontSize * 0.518).toFixed(1)}px`;
        if (smcpLineOvershoot) smcpLineOvershoot.style.bottom = `${(baselineFromBottom + fontSize * 0.538).toFixed(1)}px`;
        if (smcpLineA) smcpLineA.style.bottom = `${(baselineFromBottom + fontSize * 0.772).toFixed(1)}px`;
        if (smcpLineC) smcpLineC.style.bottom = `${(baselineFromBottom + fontSize * 0.858).toFixed(1)}px`;

        const leftX = charRect.left - stageRect.left;
        const rightX = charRect.right - stageRect.left;
        if (smcpVLineLeft) smcpVLineLeft.style.left = `${leftX.toFixed(1)}px`;
        if (smcpVLineRight) smcpVLineRight.style.left = `${rightX.toFixed(1)}px`;
    }

    if (smcpLine && smcpCharEl) {
        const rawText = smcpLine.textContent.trim();
        smcpLine.innerHTML = '';

        function updateSmcpMagnifier(ch) {
            smcpCharEl.textContent = ch;
            const code = ch.codePointAt(0);
            const hex = 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
            if (smcpCodeEl) smcpCodeEl.textContent = hex;
            if (smcpNameEl) {
                const isDigit = /[0-9]/.test(ch);
                smcpNameEl.textContent = isDigit
                    ? `${ch}.onum · OLD-STYLE FIGURE`
                    : `${ch}.smcp · TRUE SMALL CAPITAL`;
            }
            syncSmcpGrid();
        }

        let firstAssigned = false;
        Array.from(rawText).forEach((ch) => {
            if (ch === ' ' || ch === '·') {
                const sep = document.createTextNode(ch);
                smcpLine.appendChild(sep);
                return;
            }
            const span = document.createElement('span');
            span.className = 'ot-smcp-char';
            if (!firstAssigned) {
                span.classList.add('is-active');
                firstAssigned = true;
            }
            span.textContent = ch;
            span.addEventListener('mouseenter', () => {
                smcpLine.querySelectorAll('.ot-smcp-char').forEach((s) => s.classList.remove('is-active'));
                span.classList.add('is-active');
                updateSmcpMagnifier(ch);
            });
            span.addEventListener('click', () => {
                smcpLine.querySelectorAll('.ot-smcp-char').forEach((s) => s.classList.remove('is-active'));
                span.classList.add('is-active');
                updateSmcpMagnifier(ch);
            });
            smcpLine.appendChild(span);
        });

        syncSmcpGrid();
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(syncSmcpGrid);
        }
        window.addEventListener('resize', syncSmcpGrid, { passive: true });

        // Re-sync grid when optical size or OpenType toggles are clicked in this block
        const smcpBlock = smcpStageEl ? smcpStageEl.closest('.stack-block') : null;
        if (smcpBlock) {
            smcpBlock.addEventListener('click', () => requestAnimationFrame(syncSmcpGrid));
            smcpBlock.addEventListener('pointerdown', () => requestAnimationFrame(syncSmcpGrid));
        }
    }
}

/* --------------------------------------------------------------------------
   09. DOWNLOAD & REQUEST FONT EXPANDABLE CONTROLLER
   -------------------------------------------------------------------------- */
function initDownloadForm() {
    const ctaBar = document.getElementById('downloadCtaBar');
    const formWrapper = document.getElementById('downloadFormWrapper');
    const closeBtn = document.getElementById('downloadFormClose');
    const actionLabel = document.getElementById('downloadCtaAction');
    const form = document.getElementById('notusDownloadForm');
    const successBox = document.getElementById('notusDownloadSuccess');
    const submitBtn = document.getElementById('dfSubmitBtn');
    const tags = document.querySelectorAll('.download-form__tag');
    const hiddenLicenseInput = document.getElementById('dfLicenseType');

    if (!ctaBar || !formWrapper) return;

    function openForm() {
        formWrapper.classList.add('is-open');
        formWrapper.setAttribute('aria-hidden', 'false');
        ctaBar.classList.add('is-open');
        ctaBar.setAttribute('aria-expanded', 'true');
        if (actionLabel) actionLabel.innerHTML = '&times; Close Form';

        setTimeout(() => {
            const section = document.getElementById('download');
            if (section) {
                const headerH = document.querySelector('.header')?.offsetHeight || 104;
                const top = section.getBoundingClientRect().top + window.pageYOffset - (headerH + 20);
                window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
            }
        }, 300);
    }

    function closeForm() {
        formWrapper.classList.remove('is-open');
        formWrapper.setAttribute('aria-hidden', 'true');
        ctaBar.classList.remove('is-open');
        ctaBar.setAttribute('aria-expanded', 'false');
        if (actionLabel) actionLabel.innerHTML = '&rarr; Request Font';
    }

    ctaBar.addEventListener('click', (e) => {
        // Prevent toggle if clicked directly on close button
        if (e.target.closest('#downloadFormClose')) return;
        const isOpen = formWrapper.classList.contains('is-open');
        isOpen ? closeForm() : openForm();
    });

    ctaBar.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const isOpen = formWrapper.classList.contains('is-open');
            isOpen ? closeForm() : openForm();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeForm();
        });
    }

    // License Type Tags Selection
    tags.forEach((tag) => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            tags.forEach((t) => t.classList.remove('is-active'));
            tag.classList.add('is-active');
            const val = tag.getAttribute('data-value') || tag.textContent.trim();
            if (hiddenLicenseInput) hiddenLicenseInput.value = val;
        });
    });

    // Form submission via Web3Forms
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('dfName');
            const emailInput = document.getElementById('dfEmail');
            const errName = document.getElementById('df-error-name');
            const errEmail = document.getElementById('df-error-email');

            let isValid = true;
            if (errName) errName.textContent = '';
            if (errEmail) errEmail.textContent = '';

            if (!nameInput || !nameInput.value.trim()) {
                if (errName) errName.textContent = 'Please enter your name.';
                isValid = false;
            }

            if (!emailInput || !emailInput.value.trim()) {
                if (errEmail) errEmail.textContent = 'Please enter your email.';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
                if (errEmail) errEmail.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            if (!isValid) return;

            if (submitBtn) {
                submitBtn.disabled = true;
                const txtSpan = submitBtn.querySelector('.download-form__submit-text');
                if (txtSpan) txtSpan.textContent = 'Sending...';
            }

            try {
                const formData = new FormData(form);
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                const result = await response.json();

                if (result.success) {
                    form.style.display = 'none';
                    if (successBox) successBox.classList.add('is-visible');
                } else {
                    alert(result.message || 'Something went wrong. Please try again.');
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        const txtSpan = submitBtn.querySelector('.download-form__submit-text');
                        if (txtSpan) txtSpan.textContent = 'Send Request';
                    }
                }
            } catch (err) {
                alert('Connection error. Please try again later.');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    const txtSpan = submitBtn.querySelector('.download-form__submit-text');
                    if (txtSpan) txtSpan.textContent = 'Send Request';
                }
            }
        });
    }
}






