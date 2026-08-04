document.addEventListener('DOMContentLoaded', () => {
    // Данные Lottie-анимации (общие для хедера и футера)
    const logoAnimationData = {"v":"5.12.1","fr":25,"ip":0,"op":100,"w":500,"h":500,"nm":"WB Animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"W3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.182,-1.095],[50,150],[-50,150],[-49.818,-1.095]],"c":true}]},{"i":{"x":0.63,"y":1},"o":{"x":0.953,"y":0},"t":27,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":0.333,"y":0},"t":49,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50.182,-148.905],[-49.818,-148.905],[-50,-150]],"c":true}]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":50,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.182,148.905],[50.365,150],[-49.635,150],[-49.818,148.905]],"c":true}]},{"t":74,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50.183,-2.19],[50.365,150],[-49.635,150],[-49.817,-2.19]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"W2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[370,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"W1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,250,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[50,-150],[50,150],[-50,150],[-50,-150]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.921568986481,1,0.317646998985,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.070587001127,0.070587001127,0.070587001127,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":250,"st":0,"ct":1,"bm":0}],"markers":[],"props":{}};

    // Инициализация Lottie логотипа — хедер
    const logoContainer = document.getElementById('lottie-logo');
    if (logoContainer && typeof lottie !== 'undefined') {
        lottie.loadAnimation({
            container: logoContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: logoAnimationData
        });
    }

    // Клик на логотип — плавная прокрутка наверх (к шапке)
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Инициализация Lottie логотипа — футер
    const footerLogoContainer = document.getElementById('lottie-logo-footer');
    if (footerLogoContainer && typeof lottie !== 'undefined') {
        lottie.loadAnimation({
            container: footerLogoContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: logoAnimationData
        });
    }

    // Инициализация Lottie анимации Notus с гибридной обработкой (без CORS блокировок)
    const notusContainer = document.getElementById('lottie-notus');
    if (notusContainer && typeof lottie !== 'undefined') {
        // 1. Сначала пробуем использовать встроенные данные из data.js (работает мгновенно локально без CORS)
        if (window.notusAnimationData) {
            lottie.loadAnimation({
                container: notusContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: window.notusAnimationData
            });
        } else {
            // 2. Резервный динамический fetch для веб-серверов, если data.js отсутствует
            fetch('json/Notus/data.json')
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(data => {
                    lottie.loadAnimation({
                        container: notusContainer,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        animationData: data
                    });
                })
                .catch(error => {
                    console.warn('Lottie Notus loading failed:', error);
                    notusContainer.innerHTML = `
                        <div style="
                            padding: 2rem; 
                            text-align: center; 
                            font-family: var(--font-main); 
                            color: #c0392b; 
                            font-size: 0.95rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100%;
                        ">
                            Не удалось загрузить файл анимации Notus. Убедитесь, что файл <code>json/Notus/data.json</code> существует.
                        </div>
                    `;
                });
        }
    }


    // Scroll Progress Bar & Header Scrolled state
    const progressBar = document.querySelector('.scroll-progress');
    const header = document.querySelector('.header');

    const checkScrollState = () => {
        if (!header) return;
        const worksTitle = document.querySelector('#works h2');
        if (worksTitle) {
            const rect = worksTitle.getBoundingClientRect();
            const headerHeight = header.offsetHeight || 80;
            if (rect.bottom <= headerHeight) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        } else {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > 200) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        }
    };

    // Инициализация при загрузке
    checkScrollState();

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;
        scrollTimeout = requestAnimationFrame(() => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            if (progressBar) {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
                progressBar.style.width = `${scrollPercentage}%`;
            }

            checkScrollState();

            scrollTimeout = null;
        });
    }, { passive: true });

    // Пересчет при ресайзе страницы
    window.addEventListener('resize', checkScrollState, { passive: true });

    // Утилита: разбить текст элемента на символы для анимации
    function splitTextToChars(element) {
        const lines = element.innerHTML.split(/<br\s*\/?>/i);
        let charIndex = 0;
        element.innerHTML = lines.map(line => {
            const words = line.trim().split(/\s+/).filter(w => w.length > 0);
            return words.map(word => {
                const chars = word.split('').map(char => {
                    const span = `<span class="char" style="--char-index: ${charIndex}">${char}</span>`;
                    charIndex++;
                    return span;
                }).join('');
                charIndex++; // пробел как символ для timing
                return `<span class="word">${chars}</span>`;
            }).join(' ');
        }).join('<br>');
    }

    // Применяем анимацию символов к hero__title
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) splitTextToChars(heroTitle);

    // Применяем анимацию символов к cta__title
    const ctaTitle = document.querySelector('.cta__title');
    if (ctaTitle) splitTextToChars(ctaTitle);

    // Применяем анимацию символов к stats__title
    const statsTitle = document.querySelector('.stats__title');
    if (statsTitle) splitTextToChars(statsTitle);

    // Применяем анимацию символов к stats-white__title
    const statsWhiteTitle = document.querySelector('.stats-white__title');
    if (statsWhiteTitle) splitTextToChars(statsWhiteTitle);

    // Scroll Reveal Animation (IntersectionObserver)
    const observerOptions = {
        threshold: 0,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.project-card, .project-antigravity, .project-dclex, .project-verity, .hero__title, .stats__title, .stats-white__title, .cta__title, .type-lab__header, .type-lab__showcase-header, .type-lab__showcase-item, .type-lab__toggle, .type-lab__slider-container-wide');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // =============================================
    // ЛОГИКА КОНТАКТНОЙ ФОРМЫ
    // =============================================

    const contactTrigger = document.getElementById('contactTrigger');
    const contactSection = document.getElementById('contactSection');
    const contactClose   = document.getElementById('contactClose');
    const contactForm    = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');

    // --- Проверяем, вернулся ли пользователь после успешной отправки формы (#success в URL) ---
    if (window.location.hash === '#success') {
        openContact();
        if (contactForm) contactForm.style.display = 'none';
        if (contactSuccess) {
            contactSuccess.style.display = 'flex';
            contactSuccess.classList.add('contact__success--visible');
            contactSuccess.setAttribute('aria-hidden', 'false');
        }
        
        // Очищаем хэш из адресной строки без перезагрузки
        history.replaceState(null, null, window.location.pathname + window.location.search);

        // Возвращаем форму в исходное состояние через 5 секунд
        setTimeout(() => {
            if (contactSuccess) {
                contactSuccess.classList.remove('contact__success--visible');
                setTimeout(() => {
                    contactSuccess.style.display = 'none';
                    contactSuccess.setAttribute('aria-hidden', 'true');
                    if (contactForm) contactForm.style.display = '';
                }, 400);
            }
        }, 5000);
    }

    // --- Открытие / закрытие ---
    function openContact() {
        contactSection.classList.add('contact--open');
        contactSection.setAttribute('aria-hidden', 'false');
        if (contactTrigger) contactTrigger.setAttribute('aria-expanded', 'true');
        
        const ctaLink = document.querySelector('.cta__link');
        if (ctaLink) {
            ctaLink.innerHTML = '&times; Close';
        }

        // Прокрутка к форме с увеличенной задержкой для согласования с плавной 1.2s анимацией раскрытия
        setTimeout(() => {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 350);
    }

    // --- Открытие / закрытие ---
    function closeContact() {
        contactSection.classList.remove('contact--open');
        contactSection.setAttribute('aria-hidden', 'true');
        if (contactTrigger) contactTrigger.setAttribute('aria-expanded', 'false');

        const ctaLink = document.querySelector('.cta__link');
        if (ctaLink) {
            ctaLink.innerHTML = '&rarr; Contact';
        }
    }

    if (contactTrigger) contactTrigger.addEventListener('click', () => {
        const isOpen = contactSection.classList.contains('contact--open');
        isOpen ? closeContact() : openContact();
    });

    if (contactClose) contactClose.addEventListener('click', closeContact);

    // Также реагируем на весь кликабельный блок cta__top
    const ctaTop = document.querySelector('.cta__top');
    if (ctaTop) {
        ctaTop.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = contactSection.classList.contains('contact--open');
            isOpen ? closeContact() : openContact();
        });
    }

    // --- Теги выбора типа проекта ---
    const tagButtons   = document.querySelectorAll('.contact__tag');
    const hiddenType   = document.getElementById('contactType');

    const selectTag = (btn) => {
        // Снять активность со всех
        tagButtons.forEach(b => b.classList.remove('contact__tag--active'));
        // Поставить на текущий
        btn.classList.add('contact__tag--active');
        if (hiddenType) hiddenType.value = btn.dataset.value;

        // Сбросить ошибку поля типа
        clearError('error-type', 'field-type');
    };

    tagButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => selectTag(btn));
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            selectTag(btn);
        });
    });

    // --- Утилиты валидации ---

    function showError(errorId, fieldId, message) {
        const errorEl = document.getElementById(errorId);
        const fieldEl = document.getElementById(fieldId);
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('contact__error--visible');
        }
        if (fieldEl) fieldEl.classList.add('contact__field--error');
    }

    function clearError(errorId, fieldId) {
        const errorEl = document.getElementById(errorId);
        const fieldEl = document.getElementById(fieldId);
        if (errorEl) {
            errorEl.textContent = '';
            errorEl.classList.remove('contact__error--visible');
        }
        if (fieldEl) fieldEl.classList.remove('contact__field--error');
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    // Валидация конкретного поля при потере фокуса (live validation)
    function attachLiveValidation(inputId, errorId, fieldId, validator) {
        const input = document.getElementById(inputId);
        if (!input) return;

        input.addEventListener('blur', () => {
            const result = validator(input.value);
            if (result) {
                showError(errorId, fieldId, result);
            } else {
                clearError(errorId, fieldId);
            }
        });

        input.addEventListener('input', () => {
            // Если уже есть ошибка — очищаем при вводе
            const errorEl = document.getElementById(errorId);
            if (errorEl && errorEl.classList.contains('contact__error--visible')) {
                const result = validator(input.value);
                if (!result) clearError(errorId, fieldId);
            }
        });
    }

    // Подключаем live-валидацию
    attachLiveValidation('contactName', 'error-name', 'field-name', (val) => {
        if (!val.trim()) return 'Please enter your name.';
        if (val.trim().length < 2) return 'Name must be at least 2 characters.';
        return null;
    });

    attachLiveValidation('contactEmail', 'error-email', 'field-email', (val) => {
        if (!val.trim()) return 'Please enter your email.';
        if (!validateEmail(val)) return 'Please enter a valid email address.';
        return null;
    });

    attachLiveValidation('contactMessage', 'error-message', 'field-message', (val) => {
        if (!val.trim()) return 'Please write a message.';
        if (val.trim().length < 10) return 'Message is too short (minimum 10 characters).';
        return null;
    });

    // --- Полная валидация при сабмите ---
    function validateAll() {
        let valid = true;

        const name = document.getElementById('contactName');
        if (!name.value.trim() || name.value.trim().length < 2) {
            showError('error-name', 'field-name', !name.value.trim()
                ? 'Please enter your name.'
                : 'Name must be at least 2 characters.');
            valid = false;
        } else {
            clearError('error-name', 'field-name');
        }

        const email = document.getElementById('contactEmail');
        if (!email.value.trim()) {
            showError('error-email', 'field-email', 'Please enter your email.');
            valid = false;
        } else if (!validateEmail(email.value)) {
            showError('error-email', 'field-email', 'Please enter a valid email address.');
            valid = false;
        } else {
            clearError('error-email', 'field-email');
        }

        const type = document.getElementById('contactType');
        if (!type || !type.value) {
            showError('error-type', 'field-type', 'Please select a project type.');
            valid = false;
        } else {
            clearError('error-type', 'field-type');
        }

        const message = document.getElementById('contactMessage');
        if (!message.value.trim()) {
            showError('error-message', 'field-message', 'Please write a message.');
            valid = false;
        } else if (message.value.trim().length < 10) {
            showError('error-message', 'field-message', 'Message is too short (minimum 10 characters).');
            valid = false;
        } else {
            clearError('error-message', 'field-message');
        }

        return valid;
    }

    // --- Отправка формы через Web3Forms (AJAX) ---
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!validateAll()) return;

            const submitBtn = document.getElementById('contactSubmit');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.classList.add('contact__submit--loading');
                submitBtn.querySelector('.contact__submit-text').textContent = 'Sending';
            }

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                const result = await response.json();

                if (result.success) {
                    // Показываем встроенный success-state
                    contactForm.style.display = 'none';
                    const successEl = document.getElementById('contactSuccess');
                    if (successEl) {
                        successEl.removeAttribute('aria-hidden');
                        successEl.style.display = 'flex';
                        // Небольшая задержка чтобы сработал CSS-transition
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                successEl.classList.add('contact__success--visible');
                            });
                        });

                        // Через 5 секунд возвращаем форму в исходное состояние
                        setTimeout(() => {
                            successEl.classList.remove('contact__success--visible');
                            setTimeout(() => {
                                successEl.style.display = 'none';
                                successEl.setAttribute('aria-hidden', 'true');
                                contactForm.style.display = '';
                                contactForm.reset();
                                // Сбрасываем кнопку
                                if (submitBtn) {
                                    submitBtn.disabled = false;
                                    submitBtn.classList.remove('contact__submit--loading');
                                    submitBtn.querySelector('.contact__submit-text').textContent = 'Send';
                                }
                            }, 500);
                        }, 5000);
                    }
                } else {
                    // Возвращаем кнопку в исходное состояние при ошибке
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('contact__submit--loading');
                        submitBtn.querySelector('.contact__submit-text').textContent = 'Send';
                    }
                    console.error('Web3Forms error:', result);
                }
            } catch (err) {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('contact__submit--loading');
                    submitBtn.querySelector('.contact__submit-text').textContent = 'Send';
                }
                console.error('Network error:', err);
            }
        });
    }

    // --- Раскрытие инструментов Лаборатории Шрифтов ---
    const labToggles = document.querySelectorAll('.type-lab__toggle');
    labToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const link = toggle.querySelector('.type-lab__toggle-link');
            
            if (targetContent) {
                const isOpen = targetContent.classList.contains('is-open');
                
                if (isOpen) {
                    targetContent.classList.remove('is-open');
                    toggle.classList.remove('is-active');
                    // Возвращаем исходную стрелку
                    if (targetId === 'lab-kerning') {
                        link.innerHTML = '&rarr; Spacing Tool';
                    } else if (targetId === 'lab-weight') {
                        link.innerHTML = '&rarr; Weight Tool';
                    }
                } else {
                    // Закрываем другие открытые инструменты (поведение аккордеона)
                    labToggles.forEach(otherToggle => {
                        if (otherToggle !== toggle) {
                            const otherTargetId = otherToggle.getAttribute('data-target');
                            const otherTargetContent = document.getElementById(otherTargetId);
                            const otherLink = otherToggle.querySelector('.type-lab__toggle-link');
                            
                            if (otherTargetContent && otherTargetContent.classList.contains('is-open')) {
                                otherTargetContent.classList.remove('is-open');
                                otherToggle.classList.remove('is-active');
                                if (otherTargetId === 'lab-kerning') {
                                    otherLink.innerHTML = '&rarr; Spacing Tool';
                                } else if (otherTargetId === 'lab-weight') {
                                    otherLink.innerHTML = '&rarr; Weight Tool';
                                }
                            }
                        }
                    });

                    targetContent.classList.add('is-open');
                    toggle.classList.add('is-active');
                    // Показываем крестик закрытия
                    link.innerHTML = '&times; Close Tool';
                }
            }
        });
    });

    // 01 — Spacing Control
    const kerningText = document.getElementById('kerning-text');
    const kerningSlider = document.getElementById('kerning-slider');

    if (kerningSlider && kerningText) {
        // Dynamic word list
        const words = ["NOTUS", "MOTION", "DESIGN", "FOCUS"];
        let wordIndex = 0;
        let kerningCase = 'upper';

        kerningText.style.margin = '0 auto';
        kerningText.style.width = '100%';
        kerningSlider.value = 7.5;
        kerningText.style.setProperty('--letter-spacing', '0em');
        kerningText.style.setProperty('--text-stroke', '0em');

        const updateKerningText = () => {
            const rawWord = words[wordIndex];
            if (kerningCase === 'upper') {
                kerningText.textContent = rawWord.toUpperCase();
            } else {
                kerningText.textContent = rawWord.charAt(0).toUpperCase() + rawWord.slice(1).toLowerCase();
            }
        };

        updateKerningText();

        kerningSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            let spacing = 0;
            if (val < 7.5) {
                spacing = -0.18 + (0.18 * (val / 7.5));
            } else {
                spacing = 0.85 * ((val - 7.5) / 7.5);
            }
            kerningText.style.setProperty('--letter-spacing', `${spacing}em`);
        });

        kerningText.addEventListener('click', () => {
            wordIndex = (wordIndex + 1) % words.length;
            updateKerningText();
        });

        const kerningCaseBtns = document.querySelectorAll('#kerning-case-group .type-lab__pill-btn');
        kerningCaseBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                kerningCaseBtns.forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                kerningCase = btn.dataset.case;
                updateKerningText();
            });
        });

        const kerningAlignBtns = document.querySelectorAll('#kerning-align-group .type-lab__pill-btn');
        kerningAlignBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                kerningAlignBtns.forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                kerningText.style.textAlign = btn.dataset.align;
            });
        });
    }

    // 02 — Weight Morphing (Simulating Variable Weight with Webkit Text Stroke)
    const weightItem = document.getElementById('lab-weight');
    const weightText = document.getElementById('weight-text');
    const weightIndicator = document.getElementById('weight-indicator');
    const weightSlider = document.getElementById('weight-slider');

    if (weightItem && weightText && weightIndicator) {
        const pangrams = [
            "The quick brown fox jumps over the lazy dog",
            "Pack my box with five dozen liquor jugs",
            "Jackdaws love my big sphinx of quartz",
            "How vexingly quick daft zebras jump"
        ];
        let pangramIndex = 0;
        let weightCase = 'mixed';

        const updateWeightText = () => {
            const rawPangram = pangrams[pangramIndex];
            if (weightCase === 'upper') {
                weightText.textContent = rawPangram.toUpperCase();
            } else {
                weightText.textContent = rawPangram;
            }
        };

        weightText.style.cursor = 'pointer';
        weightText.addEventListener('click', () => {
            pangramIndex = (pangramIndex + 1) % pangrams.length;
            updateWeightText();
        });

        const updateStrokeWeight = (ratio) => {
            const maxStroke = 0.035;
            const currentStroke = maxStroke * ratio;
            weightText.style.setProperty('--text-stroke', `${currentStroke}em`);
            weightIndicator.textContent = `STROKE WEIGHT: ${Math.round(ratio * 100)}%`;
            if (weightSlider) {
                weightSlider.value = Math.round(ratio * 100);
            }
        };

        const weightCaseBtns = document.querySelectorAll('#weight-case-group .type-lab__pill-btn');
        weightCaseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                weightCaseBtns.forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                weightCase = btn.dataset.case;
                updateWeightText();
            });
        });

        const weightAlignBtns = document.querySelectorAll('#weight-align-group .type-lab__pill-btn');
        weightAlignBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                weightAlignBtns.forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                const align = btn.dataset.align;
                weightText.style.textAlign = align;

                if (align === 'left') {
                    weightText.style.webkitMaskImage = 'linear-gradient(to right, #000 85%, transparent 100%)';
                    weightText.style.maskImage = 'linear-gradient(to right, #000 85%, transparent 100%)';
                } else if (align === 'right') {
                    weightText.style.webkitMaskImage = 'linear-gradient(to left, #000 85%, transparent 100%)';
                    weightText.style.maskImage = 'linear-gradient(to left, #000 85%, transparent 100%)';
                } else {
                    weightText.style.webkitMaskImage = 'linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)';
                    weightText.style.maskImage = 'linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)';
                }
            });
        });

        updateStrokeWeight(0);

        if (weightSlider) {
            weightSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                updateStrokeWeight(val / 100);
            });
        }
    }

    // 03 — Type Anything (Dynamic 3D Typography Morph)
    const transformTextContainer = document.getElementById('transform-text');
    const labTransformItem = document.getElementById('lab-transform');
    const transformInput = document.getElementById('transform-input');

    if (transformTextContainer && labTransformItem) {
        let isFlipped = false;
        let isAnimating = false;

        const render3DText = (text) => {
            transformTextContainer.innerHTML = '';
            const uppercaseText = text.toUpperCase();
            
            for (let i = 0; i < uppercaseText.length; i++) {
                const char = uppercaseText[i];
                const charWrap = document.createElement('span');
                charWrap.className = 'type-lab__char-wrap';
                charWrap.style.transitionDelay = `${i * 0.03}s`;
                
                if (char === ' ') {
                    charWrap.style.width = '0.6ch';
                    transformTextContainer.appendChild(charWrap);
                    continue;
                }

                const faceFront = document.createElement('span');
                faceFront.className = 'type-lab__char-face type-lab__char-face--front';
                faceFront.textContent = char;

                const faceBack = document.createElement('span');
                faceBack.className = 'type-lab__char-face type-lab__char-face--back';
                faceBack.textContent = char;

                charWrap.appendChild(faceFront);
                charWrap.appendChild(faceBack);
                transformTextContainer.appendChild(charWrap);
                
                charWrap.style.width = '1.1ch';
                charWrap.style.textAlign = 'center';

                if (isFlipped) {
                    charWrap.style.transform = 'rotateY(180deg)';
                }
            }
        };

        render3DText("KINETIC");

        const flipText = () => {
            if (isAnimating) return;
            isAnimating = true;
            isFlipped = !isFlipped;

            const charWraps = transformTextContainer.querySelectorAll('.type-lab__char-wrap');
            charWraps.forEach((charWrap) => {
                charWrap.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
            });

            setTimeout(() => {
                isAnimating = false;
            }, 800);
        };

        transformTextContainer.style.cursor = 'pointer';
        transformTextContainer.addEventListener('click', flipText);

        if (transformInput) {
            transformInput.value = '';
            transformInput.addEventListener('input', (e) => {
                const text = e.target.value.trim();
                render3DText(text.length > 0 ? text : "KINETIC");
            });
        }
    }

    // =============================================
    // ИНТЕРАКТИВНЫЙ ЭФФЕКТ СФЕРЫ (CANVAS 2D)
    // =============================================
    const statsSection = document.querySelector('.stats');
    const canvas = document.getElementById('stats-canvas');

    if (statsSection && canvas) {
        const ctx = canvas.getContext('2d');
        const N = 900;
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));
        const particles = [];

        let centerX = 0;
        let centerY = 0;
        let sphereRadius = 180;
        let influenceRadius = 112;

        let angleX = 0;
        let angleY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let mouseActive = false;
        let mouseStrength = 0;

        let currentTiltX = 0;
        let currentTiltY = 0;
        let targetTiltX = 0;
        let targetTiltY = 0;

        function getGoogleStyleHSL(x0, y0, z0) {
            if (y0 > 0.25) {
                const t = (x0 + 1) / 2;
                const h = 212 + t * 50;
                return { h, s: 85, l: 62 };
            } else if (y0 < -0.25) {
                const t = (x0 + 1) / 2;
                const h = 18 + t * 27;
                return { h, s: 95, l: 56 };
            } else {
                const t = (z0 + 1) / 2;
                const h = 325 + t * 35;
                return { h, s: 85, l: 58 };
            }
        }

        function generateCubePoints(count) {
            const points = [];
            const size = 0.75;
            const pointsPerFace = Math.floor(count / 6);
            const gridSize = Math.ceil(Math.sqrt(pointsPerFace));
            
            for (let face = 0; face < 6; face++) {
                for (let i = 0; i < pointsPerFace; i++) {
                    const r = Math.floor(i / gridSize);
                    const c = i % gridSize;
                    
                    let u = (r / (gridSize - 1)) * 2 - 1;
                    let v = (c / (gridSize - 1)) * 2 - 1;
                    
                    u += (Math.random() - 0.5) * 0.04;
                    v += (Math.random() - 0.5) * 0.04;
                    
                    const scaleU = u * size;
                    const scaleV = v * size;
                    
                    let x = 0, y = 0, z = 0;
                    switch (face) {
                        case 0: x = size; y = scaleU; z = scaleV; break;
                        case 1: x = -size; y = scaleU; z = scaleV; break;
                        case 2: x = scaleU; y = size; z = scaleV; break;
                        case 3: x = scaleU; y = -size; z = scaleV; break;
                        case 4: x = scaleU; y = scaleV; z = size; break;
                        case 5: x = scaleU; y = scaleV; z = -size; break;
                    }
                    points.push({ x, y, z });
                }
            }
            
            while (points.length < count) {
                const face = Math.floor(Math.random() * 6);
                const u = (Math.random() * 2 - 1) * size;
                const v = (Math.random() * 2 - 1) * size;
                let x = 0, y = 0, z = 0;
                switch (face) {
                    case 0: x = size; y = u; z = v; break;
                    case 1: x = -size; y = u; z = v; break;
                    case 2: x = u; y = size; z = v; break;
                    case 3: x = u; y = -size; z = v; break;
                    case 4: x = u; y = v; z = size; break;
                    case 5: x = u; y = v; z = -size; break;
                }
                points.push({ x, y, z });
            }
            return points;
        }

        const cubePoints = generateCubePoints(N);

        for (let i = 0; i < N; i++) {
            const y0 = 1 - (i / (N - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y0 * y0);
            const theta = goldenAngle * i;
            const x0 = Math.cos(theta) * radiusAtY;
            const z0 = Math.sin(theta) * radiusAtY;
            const hsl = getGoogleStyleHSL(x0, y0, z0);

            // Начальный концентрический угол сферы для плавного перехода
            const initialAngle = Math.atan2(y0, x0) + Math.PI / 2;

            particles.push({
                x0, y0, z0,
                sphereX: x0,
                sphereY: y0,
                sphereZ: z0,
                targetX: x0,
                targetY: y0,
                targetZ: z0,
                cubeX: cubePoints[i].x,
                cubeY: cubePoints[i].y,
                cubeZ: cubePoints[i].z,
                // Координаты бесконечного потока
                motionX: (Math.random() * 2.6) - 1.3, // от -1.3 до 1.3
                motionY: (Math.random() * 1.7) - 0.85, // от -0.85 до 0.85
                motionZ: (Math.random() * 1.0) - 0.5, // от -0.5 до 0.5
                motionSpeed: 0.005 + Math.random() * 0.01, // скорость полета для параллакса
                angle: initialAngle, // текущий угол штриха
                dispX: 0, dispY: 0, dispZ: 0,
                vx: 0, vy: 0, vz: 0,
                h: hsl.h,
                s: hsl.s,
                l: hsl.l,
                lengthOffset: 0.85 + Math.random() * 0.3
            });
        }

        const statsWords = statsSection.querySelectorAll('.stats__title .word');
        const wordData = [];
        statsWords.forEach((wordEl) => {
            wordData.push({ el: wordEl, x: 0, y: 0, vx: 0, vy: 0 });
        });

        function resizeCanvas() {
            const rect = statsSection.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

            const contentEl = statsSection.querySelector('.stats__content');
            if (contentEl) {
                const contentRect = contentEl.getBoundingClientRect();
                centerX = (contentRect.left + contentRect.width / 2) - rect.left;
            } else {
                centerX = rect.width / 2;
            }
            centerY = rect.height / 2;

            sphereRadius = Math.min(rect.width, rect.height) * 0.588;
            if (rect.width < 768) {
                sphereRadius = Math.min(rect.width, rect.height) * 0.462;
            }
            influenceRadius = Math.max(98, sphereRadius * 0.6375);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        statsSection.addEventListener('pointermove', (e) => {
            const rect = statsSection.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            mouseActive = true;

            targetTiltX = ((mouseX - centerX) / centerX) * 0.25;
            targetTiltY = -((mouseY - centerY) / centerY) * 0.25;
        });

        statsSection.addEventListener('pointerleave', () => {
            mouseActive = false;
            targetTiltX = 0;
            targetTiltY = 0;
        });

        const serviceMotion = document.getElementById('service-motion');
        const service3D = document.getElementById('service-3d');
        const serviceBrand = document.getElementById('service-brand');
        
        let activeService = 'motion';
        let rotationReduction = 0;
        let lengthMult = 1.0;
        let noiseMult = 1.0;
        let brandActive = 0;

        const updateActiveService = (serviceName) => {
            activeService = serviceName;

            if (activeService) {
                statsSection.classList.add('stats--active');
            } else {
                statsSection.classList.remove('stats--active');
            }

            const items = [
                { el: serviceMotion, name: 'motion' },
                { el: service3D, name: '3d' },
                { el: serviceBrand, name: 'brand' }
            ];

            items.forEach(item => {
                if (item.el) {
                    if (item.name === activeService) {
                        item.el.classList.add('is-active');
                    } else {
                        item.el.classList.remove('is-active');
                    }
                }
            });

            particles.forEach(p => {
                if (activeService === 'motion') {
                    p.targetX = p.motionX;
                    p.targetY = p.motionY;
                    p.targetZ = p.motionZ;
                } else if (activeService === '3d') {
                    p.targetX = p.sphereX;
                    p.targetY = p.sphereY;
                    p.targetZ = p.sphereZ;
                } else if (activeService === 'brand') {
                    p.targetX = p.sphereX;
                    p.targetY = p.sphereY;
                    p.targetZ = p.sphereZ;
                } else {
                    p.targetX = p.sphereX;
                    p.targetY = p.sphereY;
                    p.targetZ = p.sphereZ;
                }
            });
        };

        if (serviceMotion) {
            serviceMotion.addEventListener('mouseenter', () => updateActiveService('motion'));
            serviceMotion.addEventListener('click', (e) => {
                e.preventDefault();
                updateActiveService('motion');
            });
        }
        if (service3D) {
            service3D.addEventListener('mouseenter', () => updateActiveService('3d'));
            service3D.addEventListener('click', (e) => {
                e.preventDefault();
                updateActiveService('3d');
            });
        }
        if (serviceBrand) {
            serviceBrand.addEventListener('mouseenter', () => updateActiveService('brand'));
            serviceBrand.addEventListener('click', (e) => {
                e.preventDefault();
                updateActiveService('brand');
            });
        }

        // По умолчанию активируем услугу Motion Design
        updateActiveService('motion');

        let isVisible = false;
        let isRunning = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                if (isVisible && !isRunning) {
                    isRunning = true;
                    requestAnimationFrame(animate);
                }
            });
        }, { threshold: 0.15 });

        observer.observe(statsSection);

        function animate() {
            if (!isVisible) {
                isRunning = false;
                return;
            }

            const rect = statsSection.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            mouseStrength += ((mouseActive ? 1 : 0) - mouseStrength) * 0.08;

            angleY += 0.0028;
            angleX += 0.0013;

            currentTiltX += (targetTiltX - currentTiltX) * 0.06;
            currentTiltY += (targetTiltY - currentTiltY) * 0.06;

            const targetRotationReduction = (activeService === 'motion') ? 1 : 0;
            rotationReduction += (targetRotationReduction - rotationReduction) * 0.08;

            const targetLengthMult = (activeService === 'motion') ? 1.25 : 1.0;
            lengthMult += (targetLengthMult - lengthMult) * 0.08;

            const targetNoiseMult = (activeService === 'motion') ? 1.15 : 1.0;
            noiseMult += (targetNoiseMult - noiseMult) * 0.08;

            const targetBrandActive = (activeService === 'brand') ? 1 : 0;
            brandActive += (targetBrandActive - brandActive) * 0.08;

            const rx = angleX * (1 - rotationReduction) + currentTiltY;
            const ry = angleY * (1 - rotationReduction) + currentTiltX;

            const projected = [];
            const k = 0.05;
            const damping = 0.84;
            const camD = sphereRadius * 3.5;

            for (let i = 0; i < N; i++) {
                const p = particles[i];

                // Обновление координат потока движения для Motion Design
                p.motionX += p.motionSpeed;
                if (p.motionX > 1.3) {
                    p.motionX = -1.3;
                    p.motionY = (Math.random() * 1.7) - 0.85;
                    p.motionZ = (Math.random() * 1.0) - 0.5;
                }

                if (activeService === 'motion') {
                    p.targetX = p.motionX;
                    p.targetY = p.motionY;
                    p.targetZ = p.motionZ;
                }

                p.x0 += (p.targetX - p.x0) * 0.08;
                p.y0 += (p.targetY - p.y0) * 0.08;
                p.z0 += (p.targetZ - p.z0) * 0.08;

                const x1 = p.x0 * Math.cos(ry) - p.z0 * Math.sin(ry);
                const z1 = p.x0 * Math.sin(ry) + p.z0 * Math.cos(ry);
                const y2 = p.y0 * Math.cos(rx) - z1 * Math.sin(rx);
                const z2 = p.y0 * Math.sin(rx) + z1 * Math.cos(rx);

                const base3DX = x1 * sphereRadius;
                const base3DY = y2 * sphereRadius;
                const base3DZ = z2 * sphereRadius;

                const current3DX = base3DX + p.dispX;
                const current3DY = base3DY + p.dispY;
                const current3DZ = base3DZ + p.dispZ;

                const scale = camD / (camD + current3DZ);
                const screenX = centerX + current3DX * scale;
                const screenY = centerY + current3DY * scale;

                const dxScreen = screenX - mouseX;
                const dyScreen = screenY - mouseY;
                const distScreen = Math.sqrt(dxScreen * dxScreen + dyScreen * dyScreen);

                if (distScreen < influenceRadius && mouseStrength > 0.01) {
                    const force = (1 - distScreen / influenceRadius) * mouseStrength;
                    const sDist = distScreen === 0 ? 0.1 : distScreen;
                    const dirX = dxScreen / sDist;
                    const dirY = dyScreen / sDist;

                    const targetPushX = dirX * force * 90;
                    const targetPushY = dirY * force * 90;
                    const targetPushZ = force * 120;

                    p.vx += (targetPushX - p.dispX) * 0.08;
                    p.vy += (targetPushY - p.dispY) * 0.08;
                    p.vz += (targetPushZ - p.dispZ) * 0.08;
                }

                const timeMs = performance.now();
                const waveAmp = 13.5;
                const waveX = Math.sin(timeMs * 0.0014 + p.y0 * 2.5 + p.z0 * 1.5) * waveAmp;
                const waveY = Math.cos(timeMs * 0.0010 + p.x0 * 2.0 + p.z0 * 2.0) * waveAmp;
                const waveZ = Math.sin(timeMs * 0.0016 + p.x0 * 1.5 + p.y0 * 2.0) * waveAmp;

                const idleFactor = 1 - mouseStrength;

                const ax = -k * p.dispX + waveX * idleFactor * 0.035 * noiseMult;
                const ay = -k * p.dispY + waveY * idleFactor * 0.035 * noiseMult;
                const az = -k * p.dispZ + waveZ * idleFactor * 0.035 * noiseMult;

                p.vx = (p.vx + ax) * damping;
                p.vy = (p.vy + ay) * damping;
                p.vz = (p.vz + az) * damping;

                p.dispX += p.vx;
                p.dispY += p.vy;
                p.dispZ += p.vz;

                const alpha = (1 - (current3DZ + sphereRadius) / (2 * sphereRadius)) * 0.75 + 0.15;

                let mouseSizeFactor = 1.0;
                if (distScreen < influenceRadius && mouseStrength > 0.01) {
                    const force = (1 - distScreen / influenceRadius) * mouseStrength;
                    mouseSizeFactor = Math.max(0.1, 1.0 - force * 0.9);
                }

                // Вычисляем целевой угол для каждой частицы (для motion - строго горизонтально 0, для остальных - по кругу относительно центра)
                const currentAngleTarget = (activeService === 'motion') ? 0 : Math.atan2(current3DY, current3DX) + Math.PI / 2;
                
                // Мягкое сглаживание разности углов (с переходом через PI)
                let angleDiff = currentAngleTarget - p.angle;
                angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
                p.angle += angleDiff * 0.08;

                // Вычисляем текущие сглаженные насыщенность и яркость (для отбеливания в режиме Brand Identity)
                const currentS = p.s * (1 - brandActive);
                const currentL = p.l + (100 - p.l) * brandActive;

                projected.push({
                    screenX, screenY, posX: current3DX, posY: current3DY, posZ: current3DZ,
                    scale, alpha, h: p.h, s: currentS, l: currentL, lengthOffset: p.lengthOffset, mouseSizeFactor,
                    angle: p.angle,
                    lengthMult: lengthMult,
                    brandActive: brandActive
                });
            }

            const titleEl = statsSection.querySelector('.stats__title');
            if (wordData.length > 0 && titleEl && titleEl.classList.contains('reveal-active')) {
                const rect = statsSection.getBoundingClientRect();
                wordData.forEach((w) => {
                    let tx = 0;
                    let ty = 0;
                    if (mouseActive) {
                        const wordRect = w.el.getBoundingClientRect();
                        const wordCenterX = wordRect.left + wordRect.width / 2;
                        const wordCenterY = wordRect.top + wordRect.height / 2;
                        const screenMouseX = mouseX + rect.left;
                        const screenMouseY = mouseY + rect.top;
                        const dx = screenMouseX - wordCenterX;
                        const dy = screenMouseY - wordCenterY;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 300) {
                            const pull = (1 - dist / 300) * 7;
                            tx = (dx / dist) * pull;
                            ty = (dy / dist) * pull;
                        }
                    }
                    const wordK = 0.08;
                    const wordDamping = 0.82;
                    w.vx += (tx - w.x) * wordK;
                    w.vy += (ty - w.y) * wordK;
                    w.vx *= wordDamping;
                    w.vy *= wordDamping;
                    w.x += w.vx;
                    w.y += w.vy;
                    w.el.style.transform = `translate3d(${w.x}px, ${w.y}px, 0)`;
                });
            }

            projected.sort((a, b) => b.posZ - a.posZ);

            for (let i = 0; i < N; i++) {
                const pr = projected[i];
                const timeMs = performance.now();
                const dynamicFactor = 1.0 + Math.sin(timeMs * 0.0035 + pr.posZ * 0.015) * 0.25;
                // В режиме Brand Identity уменьшаем длину штрихов до минимума, заменяя их круглыми точками
                const brandActiveFactor = pr.brandActive;
                const len = 2.0 * pr.lengthOffset * pr.scale * dynamicFactor * pr.mouseSizeFactor * pr.lengthMult * (1 - brandActiveFactor * 0.9);
                const thickness = 0.825 * pr.scale * pr.mouseSizeFactor;

                // 1. Отрисовка лучей из центра к частицам на поверхности сферы (для 3D-одуванчика в Brand Identity)
                if (brandActiveFactor > 0.01) {
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(pr.screenX, pr.screenY);
                    // Очень тонкие полупрозрачные линии, становящиеся белыми
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * pr.alpha * brandActiveFactor})`;
                    ctx.lineWidth = 0.5 * pr.scale;
                    ctx.stroke();
                }

                ctx.save();
                ctx.translate(pr.screenX, pr.screenY);
                ctx.rotate(pr.angle);

                // Отрисовка исходного штриха частицы
                ctx.beginPath();
                ctx.moveTo(-len / 2, 0);
                ctx.lineTo(len / 2, 0);
                const currentL = pr.l;
                ctx.strokeStyle = `hsl(${pr.h}, ${pr.s}%, ${currentL}%)`;
                ctx.lineWidth = thickness;
                ctx.lineCap = 'round';
                ctx.globalAlpha = Math.max(0, Math.min(1, pr.alpha));
                ctx.stroke();

                // 2. Отрисовка ярких круглых точек на концах лучей (для 3D-одуванчика)
                if (brandActiveFactor > 0.01) {
                    ctx.beginPath();
                    const dotRadius = 2.2 * pr.scale * pr.mouseSizeFactor * brandActiveFactor;
                    ctx.arc(0, 0, dotRadius, 0, Math.PI * 2);
                    // Белые светящиеся кружки на концах лучей
                    ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, pr.alpha * brandActiveFactor))})`;
                    ctx.fill();
                }

                ctx.restore();
            }

            requestAnimationFrame(animate);
        }

        // =============================================
        // ЛЕНИВАЯ ЗАГРУЗКА И УПРАВЛЕНИЕ ВИДЕО (PLAY/PAUSE)
        // =============================================
        const videoObserverOptions = {
            threshold: 0.05, // Запускаем, если видно хотя бы 5% видео
            rootMargin: '150px 0px 150px 0px' // Подгружаем и запускаем чуть заранее
        };

        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    if (video.paused) {
                        video.play().catch(err => {
                            console.log('Autoplay prevented:', err);
                        });
                    }
                } else {
                    if (!video.paused) {
                        video.pause();
                    }
                }
            });
        }, videoObserverOptions);

        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(video => {
            const isHeroVideo = video.closest('.hero') || video.closest('.project-antigravity');
            if (!isHeroVideo) {
                video.setAttribute('preload', 'none');
            } else {
                video.setAttribute('preload', 'auto');
            }
            videoObserver.observe(video);
        });
    }
});
