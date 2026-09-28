// ==========================================================================
// SCRIPT.JS - ULTIMATE EXTRA FINAL V 5.0.0 ENGINE (SMOOTH BACK FIX)
// ==========================================================================

// 1. ENGINE CONFIGURATION & GLOBAL STATE
const V5_CONFIG = {
    version: '5.0.0',
    debug: false,
    rippleEffect: true,
    autoInitSplash: true,
    sfxVolume: 0.35,
    bgmVolume: 0.30,
    pageTransitionDuration: 300 // Durasi animasi transisi keluar (ms)
};

// Global Audio Reference (Single Source of Truth)
let globalSfxClick = null;
let globalBgmAudio = null;

// ==========================================================================
// 2. CORE AUDIO FUNCTIONS (Exposed Globally for HTML Inline Handlers)
// ==========================================================================

/**
 * Memutar efek suara klik saat tombol atau tautan diinteraksi
 */
function playClick() {
    try {
        if (!globalSfxClick) {
            globalSfxClick = new Audio('./click.mp3');
            globalSfxClick.volume = V5_CONFIG.sfxVolume;
        }
        globalSfxClick.currentTime = 0;
        const playPromise = globalSfxClick.play();
        if (playPromise !== undefined) {
            playPromise.catch(err => {
                if (V5_CONFIG.debug) console.warn("SFX play blocked/error:", err);
            });
        }
    } catch (error) {
        if (V5_CONFIG.debug) console.warn("SFX Error: 'click.mp3' missing or restricted.");
    }
}

/**
 * Mengontrol Play / Pause BGM secara global
 */
function toggleBGM(event) {
    if (event) event.preventDefault();

    const bgmAudio = getBgmAudioElement();
    if (!bgmAudio) return;

    if (bgmAudio.paused) {
        bgmAudio.volume = V5_CONFIG.bgmVolume;
        bgmAudio.play().then(() => {
            updateBGMUI(true);
            localStorage.setItem('bgm_playing', 'true');
        }).catch((err) => {
            console.error("BGM Playback Error:", err);
            updateBGMUI(false);
        });
    } else {
        bgmAudio.pause();
        updateBGMUI(false);
        localStorage.setItem('bgm_playing', 'false');
    }
}

/**
 * Memperbarui tampilan visual tombol BGM di DOM
 */
function updateBGMUI(isPlaying) {
    const musicBtn = document.getElementById('music-toggle') || 
                     document.getElementById('bgm-btn') || 
                     document.querySelector('.bgm-box');
                     
    if (!musicBtn) return;

    if (isPlaying) {
        musicBtn.innerText = '🎵 BGM: ON';
        musicBtn.classList.add('playing', 'active', 'v5-glow-active');
        musicBtn.classList.remove('muted');
        musicBtn.setAttribute('aria-pressed', 'true');
    } else {
        musicBtn.innerText = '🎵 BGM: OFF';
        musicBtn.classList.remove('playing', 'active', 'v5-glow-active');
        musicBtn.classList.add('muted');
        musicBtn.setAttribute('aria-pressed', 'false');
    }
}

/**
 * Helper internal untuk mendapatkan elemen audio BGM dari DOM atau instance JS
 */
function getBgmAudioElement() {
    let bgm = document.getElementById('bgm-audio') || document.querySelector('audio#bgm-audio');
    if (!bgm) {
        if (!globalBgmAudio) {
            globalBgmAudio = new Audio('./bgm.mp3');
            globalBgmAudio.id = 'bgm-audio';
            globalBgmAudio.loop = true;
            globalBgmAudio.preload = 'auto';
            document.body.appendChild(globalBgmAudio);
        }
        bgm = globalBgmAudio;
    }
    return bgm;
}

// ==========================================================================
// 3. SYSTEM INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll Restoration
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'smooth';
    }

    // A. Inisialisasi Audio Engine
    const bgmAudio = getBgmAudioElement();
    bgmAudio.volume = V5_CONFIG.bgmVolume;

    // Sinkronisasi Event Native Audio
    bgmAudio.addEventListener('pause', () => updateBGMUI(false));
    bgmAudio.addEventListener('play', () => updateBGMUI(true));

    // Sinkronisasi status tersimpan di LocalStorage (jika ada)
    const savedBgmState = localStorage.getItem('bgm_playing');
    if (savedBgmState === 'true') {
        bgmAudio.play().then(() => updateBGMUI(true)).catch(() => updateBGMUI(false));
    } else {
        updateBGMUI(false);
    }

    // B. Inisialisasi Slider Brightness (jika ada)
    const brightnessSlider = document.getElementById('brightness');
    if (brightnessSlider) {
        const savedBrightness = localStorage.getItem('site_brightness') || brightnessSlider.value || '50';
        brightnessSlider.value = savedBrightness;
        document.documentElement.style.setProperty('--bg-brightness', savedBrightness + '%');

        brightnessSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            document.documentElement.style.setProperty('--bg-brightness', val + '%');
            localStorage.setItem('site_brightness', val);
        });
    }

    // C. Efek Ripple pada Tombol Interaktif
    if (V5_CONFIG.rippleEffect) {
        document.querySelectorAll('.car-footer-btn, .a-navbar, .bgm-box, button').forEach(button => {
            button.addEventListener('click', function (e) {
                createCyberRipple(e, this);
            });
        });
    }

    // D. Inisialisasi Smooth Back Button Fix Listener
    initSmoothNavigation();
});

// Hide Splash Screen saat seluruh window selesai memuat asset
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        setTimeout(() => {
            splash.classList.add('fade-out');
            setTimeout(() => {
                splash.style.display = 'none';
            }, 500);
        }, 400);
    }
});

// Reset State saat Navigasi Back / Forward dari BFCache Browser
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.remove('v5-page-leaving');
    }
});

// ==========================================================================
// 4. ADVANCED VISUAL INTERACTIONS & NAV FIX
// ==========================================================================

/**
 * Handle Navigasi Back / Go-Back secara Smooth tanpa patah-patah
 */
function initSmoothNavigation() {
    // Intercept semua tombol yang berisikan kelas atau atribut navigasi kembali
    const backSelectors = '.btn-back, [data-action="back"], a[href="javascript:history.back()"]';
    
    document.querySelectorAll(backSelectors).forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothGoBack();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Tangkap semua tombol kembali / back
    const backButtons = document.querySelectorAll('.btn-back, [data-action="back"]');

    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Panggil efek suara jika ada
            if (typeof playClick === 'function') {
                playClick();
            }

            // Jalankan animasi transisi keluar secara presisi
            requestAnimationFrame(() => {
                document.body.classList.add('page-fade-out');
            });

            // Delay 250ms (sesuai durasi CSS) sebelum pindah halaman
            setTimeout(() => {
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = 'index.html'; // Fallback ke home
                }
            }, 250);
        });
    });
});

// FIX BFCache: Reset efek opacity saat user tekan tombol Back di browser
window.addEventListener('pageshow', (event) => {
    // Jika halaman dimuat ulang dari memori cache browser (back/forward)
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        document.body.classList.remove('page-fade-out');
    }
});