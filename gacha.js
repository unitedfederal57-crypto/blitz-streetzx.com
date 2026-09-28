// ==========================================
// BLITZ-STREETZX SEPARATE GACHA ENGINE (v6.0.0 - FIXED ALL BUGS)
// ==========================================

// 1. DATABASE TOUHOU CHARACTERS (SLOT 01 - 06 MAX 7 CARDS, SLOT 07 - 30 MAX 5 CARDS)
const TOUHOU_DATABASE = {
    "th01": { name: "Reimu Hakurei", img: "TH01.jpg", maxCards: 7 },
    "th02": { name: "Marisa Kirisame", img: "TH02.jpg", maxCards: 7 },
    "th03": { name: "Reisen Udongein Inaba", img: "TH03.jpg", maxCards: 7 },
    "th04": { name: "Tenshi Hinanawi", img: "TH04.jpg", maxCards: 7 },
    "th05": { name: "Aya Shameimaru", img: "TH05.jpg", maxCards: 7 },
    "th06": { name: "Utsuho Reiuji", img: "TH06.jpg", maxCards: 7 },
    "th07": { name: "Junko", img: "TH07.jpg", maxCards: 5 },
    "th08": { name: "Yukari Yakumo", img: "TH08.jpg", maxCards: 5 },
    "th09": { name: "Youmu Konpaku", img: "TH09.jpg", maxCards: 5 },
    "th10": { name: "Yuyuko Saigyouji", img: "TH10.jpg", maxCards: 5 },
    "th11": { name: "Toyosatomimi no Miko", img: "TH11.jpg", maxCards: 5 },
    "th12": { name: "Sanae Kochiya", img: "TH12.jpg", maxCards: 5 },
    "th13": { name: "Nitori Kawashiro", img: "TH13.jpg", maxCards: 5 },
    "th14": { name: "Suika Ibuki", img: "TH14.jpg", maxCards: 5 },
    "th15": { name: "Sakuya Izayoi", img: "TH15.jpg", maxCards: 5 },
    "th16": { name: "Remilia Scarlet", img: "TH16.jpg", maxCards: 5 },
    "th17": { name: "Flandre Scarlet", img: "TH17.jpg", maxCards: 5 },
    "th18": { name: "Sumireko Usami", img: "TH18.jpg", maxCards: 5 },
    "th19": { name: "Renko Usami", img: "TH19.jpg", maxCards: 5 },
    "th20": { name: "Maribel Hearn", img: "TH20.jpg", maxCards: 5 },
    "th21": { name: "Rei'sen", img: "TH21.jpg", maxCards: 5 },
    "th22": { name: "Ran Yakumo", img: "TH22.jpg", maxCards: 5 },
    "th23": { name: "Nareko Michigami", img: "TH23.jpg", maxCards: 5 },
    "th24": { name: "Hina Kagiyama", img: "TH24.jpg", maxCards: 5 },
    "th25": { name: "Enoko Mitsugashira", img: "TH25.jpg", maxCards: 5 },
    "th26": { name: "Hong Meiling", img: "TH26.jpg", maxCards: 5 },
    "th27": { name: "Narumi Yatadera", img: "TH27.jpg", maxCards: 5 },
    "th28": { name: "Jo'on Yorigami", img: "TH28.jpg", maxCards: 5 },
    "th29": { name: "Seija Kijin", img: "TH29.jpg", maxCards: 5 },
    "th30": { name: "Nue Houjuu", img: "TH30.jpg", maxCards: 5 }
};

// 2. DATABASE SPORTS CARS (SLOT 01 - 30 COMPLETE FROM SOURCE DATA)
const CAR_DATABASE = {
    "car01": { name: "TOYOTA 86 GT 14R60 TURBO", img: "c1.jpg", bonusTouhou: "th01" },
    "car02": { name: "NISSAN GTR35 NISMO 2020", img: "c2.jpg", bonusTouhou: "th02" },
    "car03": { name: "PORSCHE CAYMAN 718 GT4", img: "c3.jpg", bonusTouhou: "th03" },
    "car04": { name: "ALPINE A110R", img: "c4.jpg", bonusTouhou: "th04" },
    "car05": { name: "TOYOTA GR SUPRA RZ BLITZ", img: "c5.jpg", bonusTouhou: "th05" },
    "car06": { name: "ASTON MARTIN VANTAGE V8 AM6", img: "c6.jpg", bonusTouhou: "th06" },
    "car07": { name: "PORSCHE CARRERA GT3 991.1", img: "c7.jpg", bonusTouhou: "th07" },
    "car08": { name: "FERRARI 488 GTB", img: "c8.jpg", bonusTouhou: "th08" },
    "car09": { name: "LAMBORGHINI HURACAN LP610-4", img: "c9.jpg", bonusTouhou: "th09" },
    "car10": { name: "AUDI R8 V10 PERFORMANCE", img: "c10.jpg", bonusTouhou: "th10" },
    "car11": { name: "BMW M4 DTM CHAMPION EDITION", img: "c11.jpg", bonusTouhou: "th11" },
    "car12": { name: "MERCEDES BENZ AMG GTR PRE-FACELIFT", img: "c12.jpg", bonusTouhou: "th12" },
    "car13": { name: "PORSCHE CARRERA GTS 991.2", img: "c13.jpg", bonusTouhou: "th13" },
    "car14": { name: "LEXUS LC500", img: "c14.jpg", bonusTouhou: "th14" },
    "car15": { name: "HONDA NSX NC1 CONCEPT", img: "c15.jpg", bonusTouhou: "th15" },
    "car16": { name: "LOTUS EMIRA FIRST EDITION", img: "c16.jpg", bonusTouhou: "th16" },
    "car17": { name: "ALFA ROMEO 4C TYPE-960", img: "c17.jpg", bonusTouhou: "th17" },
    "car18": { name: "TOYOTA GR-86 RZ BLITZ", img: "c18.jpg", bonusTouhou: "th18" },
    "car19": { name: "TOYOTA GR-86 SZ", img: "c19.jpg", bonusTouhou: "th19" },
    "car20": { name: "SUBARU BRZ ZD8 STI SPORTS", img: "c20.jpg", bonusTouhou: "th20" },
    "car21": { name: "PORSCHE CAYMAN 718 STYLE EDITION", img: "c21.jpg", bonusTouhou: "th21" },
    "car22": { name: "MAZDA RX8", img: "c22.jpg", bonusTouhou: "th22" },
    "car23": { name: "MAZDA MIATA SPIRIT RACING 12R", img: "c23.jpg", bonusTouhou: "th23" },
    "car24": { name: "SUBARU IMPREZA WRX STI TYPE-C", img: "c24.jpg", bonusTouhou: "th24" },
    "car25": { name: "AUDI TT COUPE", img: "c25.jpg", bonusTouhou: "th25" },
    "car26": { name: "BMW M2 COUPE F87", img: "c26.jpg", bonusTouhou: "th26" },
    "car27": { name: "NISSAN RZ34 ST VERSION", img: "c27.jpg", bonusTouhou: "th27" },
    "car28": { name: "HONDA S2000 AP2", img: "c28.jpg", bonusTouhou: "th28" },
    "car29": { name: "MITSUBISHI LANCER EVO 9 MR", img: "c29.jpg", bonusTouhou: "th29" },
    "car30": { name: "TOYOTA 86GT KOUKI TRD SUPERCHARGE", img: "c30.jpg", bonusTouhou: "th30" }
};

// FUNGSI MEMBACA KOIN SECARA AMAN
function loadStoredCoins() {
    const saved = localStorage.getItem('touhou_user_coins');
    if (saved !== null && !isNaN(parseInt(saved, 10))) {
        return parseInt(saved, 10);
    }
    localStorage.setItem('touhou_user_coins', '1000');
    return 1000;
}

// Inisialisasi Variable
let userCoins = loadStoredCoins();
let cardProgress = JSON.parse(localStorage.getItem('touhou_card_progress')) || {};
let carGarage = JSON.parse(localStorage.getItem('blitz_car_garage')) || {};
let activeGachaBanner = 'touhou';

// Inisialisasi DB Progress Kartu & Garasi Mobil
Object.keys(TOUHOU_DATABASE).forEach(id => {
    if (cardProgress[id] === undefined) cardProgress[id] = 0;
});

Object.keys(CAR_DATABASE).forEach(id => {
    if (carGarage[id] === undefined) carGarage[id] = 0;
});

// SIMPAN DATA KE LOCALSTORAGE
function saveData() {
    localStorage.setItem('touhou_user_coins', userCoins.toString());
    localStorage.setItem('touhou_card_progress', JSON.stringify(cardProgress));
    localStorage.setItem('blitz_car_garage', JSON.stringify(carGarage));
}

// UPDATE TAMPILAN KOIN KE SEMUA ELEMEN
function updateCoinsDisplay() {
    const displays = document.querySelectorAll('#userCoinsDisplay, #carCoinsDisplay, #coin-count, .user-coins-val');
    displays.forEach(el => {
        if (el) el.innerText = userCoins;
    });
}

// UPDATE TAMPILAN GRID DAN PROGRESS KARTU
function updateGridUI() {
    Object.keys(cardProgress).forEach(cardId => {
        const cardElement = document.querySelector(`.th-card[data-id="${cardId}"]`);
        if (!cardElement) return;

        const currentAmount = cardProgress[cardId];
        const maxAmount = TOUHOU_DATABASE[cardId] ? TOUHOU_DATABASE[cardId].maxCards : 5;
        const progressPercent = Math.min(100, Math.floor((currentAmount / maxAmount) * 100));

        const progressBar = cardElement.querySelector('.th-progress-bar-fill');
        const progressText = cardElement.querySelector('.th-progress-text');
        
        if (progressBar) progressBar.style.width = `${progressPercent}%`;
        if (progressText) progressText.innerText = `${currentAmount}/${maxAmount} Cards`;

        if (currentAmount >= maxAmount) {
            cardElement.classList.remove('locked');
            cardElement.classList.add('unlocked');
            const overlay = cardElement.querySelector('.th-lock-overlay');
            if (overlay) overlay.style.display = 'none';
        } else {
            cardElement.classList.add('locked');
            cardElement.classList.remove('unlocked');
            const overlay = cardElement.querySelector('.th-lock-overlay');
            if (overlay) overlay.style.display = 'flex';
        }
    });

    // Update Tampilan Garasi Mobil (Jika Ada)
    Object.keys(CAR_DATABASE).forEach(carId => {
        const carCard = document.querySelector(`.car-card[data-car-id="${carId}"]`);
        if (carCard) {
            if (carGarage[carId]) {
                carCard.classList.remove('locked');
                carCard.classList.add('unlocked');
                const overlay = carCard.querySelector('.car-lock-overlay');
                if (overlay) overlay.style.display = 'none';
            } else {
                carCard.classList.add('locked');
                carCard.classList.remove('unlocked');
                const overlay = carCard.querySelector('.car-lock-overlay');
                if (overlay) overlay.style.display = 'flex';
            }
        }
    });
}

// INISIALISASI ENGINE
function initGachaEngine() {
    userCoins = loadStoredCoins();
    updateCoinsDisplay();
    updateGridUI();
}

document.addEventListener('DOMContentLoaded', () => {
    initGachaEngine();
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetAllData);
    }
});

// KLAIM CREDITS HARIAN DENGAN COOLDOWN 20 JAM
function claimDailyCoins() {
    if (typeof playClick === 'function') playClick();

    const now = Date.now();
    const cooldownTime = 20 * 60 * 60 * 1000;
    const lastClaimTimestamp = parseInt(localStorage.getItem('touhou_last_claim_timestamp') || '0', 10);

    if (now - lastClaimTimestamp < cooldownTime) {
        const remainingMs = cooldownTime - (now - lastClaimTimestamp);
        const hoursLeft = Math.floor(remainingMs / (1000 * 60 * 60));
        const minutesLeft = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
        
        alert(`⏳ Cooldown belum selesai! Kamu bisa klaim lagi dalam ${hoursLeft} jam ${minutesLeft} menit.`);
        return;
    }

    userCoins += 1000;
    localStorage.setItem('touhou_last_claim_timestamp', now.toString());
    saveData();
    updateCoinsDisplay();

    alert("🎉 Berhasil mengklaim +2000 Credits!");
}

// MODAL CONTROLLER & BANNER SWITCHING
function openGachaModal(bannerType = 'touhou') {
    if (typeof playClick === 'function') playClick();
    
    activeGachaBanner = bannerType;
    const modal = document.getElementById('gachaModal');
    const statusText = document.getElementById('gachaStatusText');
    const displayArea = document.getElementById('gachaDisplayArea');

    if (activeGachaBanner === 'touhou') {
        if (statusText) statusText.innerText = "🌸 TOUHOU CHARACTER BANNER";
        if (displayArea) displayArea.innerHTML = `<div style="font-size: 60px; margin: 20px;">🌸 🎴</div>`;
    } else {
        if (statusText) statusText.innerText = "🏎️ SPORTS CAR BANNER";
        if (displayArea) displayArea.innerHTML = `<div style="font-size: 60px; margin: 20px;">🏎️ 🏁</div>`;
    }

    if (modal) modal.classList.add('active');
}

function closeGachaModal() {
    if (typeof playClick === 'function') playClick();
    const modal = document.getElementById('gachaModal');
    if (modal) modal.classList.remove('active');
}

// HANDLER CLICK PADA KARTU TOUHOU
function handleCardClick(element, event) {
    if (typeof playClick === 'function') playClick();
    
    const cardId = element.getAttribute('data-id');
    const isLocked = element.classList.contains('locked');

    if (isLocked) {
        const current = cardProgress[cardId] || 0;
        const max = TOUHOU_DATABASE[cardId] ? TOUHOU_DATABASE[cardId].maxCards : 5;
        alert(`🔒 Kartu ini masih terkunci (${current}/${max} terkumpul). Lakukan Gacha Banner Touhou untuk mengumpulkannya!`);
        return;
    }

    const modalImg = document.getElementById('modalImg');
    const modalName = document.getElementById('modalName');
    const modalStars = document.getElementById('modalStars');
    const modalTitle = document.getElementById('modalTitle');
    const modalStory = document.getElementById('modalStory');
    const modalLine1 = document.getElementById('modalLine1');
    const modalLine2 = document.getElementById('modalLine2');
    const modalWikiLink = document.getElementById('modalWikiLink');

    if (modalImg) modalImg.src = element.getAttribute('data-img');
    if (modalName) modalName.innerText = element.getAttribute('data-name');
    if (modalStars) modalStars.innerText = element.getAttribute('data-stars');
    if (modalTitle) modalTitle.innerText = element.getAttribute('data-title');
    if (modalStory) modalStory.innerText = element.getAttribute('data-story');
    if (modalLine1) modalLine1.innerText = element.getAttribute('data-line1');
    if (modalLine2) modalLine2.innerText = element.getAttribute('data-line2');
    if (modalWikiLink) modalWikiLink.href = element.getAttribute('data-wiki');

    const charModal = document.getElementById('charModal');
    if (charModal) charModal.classList.add('active');
}

function closeModal() {
    if (typeof playClick === 'function') playClick();
    const charModal = document.getElementById('charModal');
    if (charModal) charModal.classList.remove('active');
}

// EKSEKUSI PULL GACHA
function executePull(times) {
    if (typeof playClick === 'function') playClick();
    
    userCoins = loadStoredCoins();

    const costPerPull = (activeGachaBanner === 'car') ? 2000 : 100;
    const cost = times * costPerPull;

    if (userCoins < cost) {
        alert(`🪙 Credits kamu tidak cukup! Kamu membutuhkan ${cost} Coin. Klik Claim Credits terlebih dahulu.`);
        return;
    }

    userCoins -= cost;
    saveData();
    updateCoinsDisplay();

    const displayArea = document.getElementById('gachaDisplayArea');
    const statusText = document.getElementById('gachaStatusText');
    const btn1 = document.getElementById('btnPull1x');
    const btn5 = document.getElementById('btnPull5x');

    if (btn1) btn1.disabled = true;
    if (btn5) btn5.disabled = true;
    if (statusText) statusText.innerText = "🎰 Rolling Machine...";
    if (displayArea) displayArea.innerHTML = `<div style="font-size: 50px; margin: 20px;" class="coming-soon-icon">✨🎲✨</div>`;

    setTimeout(() => {
        let results = [];
        const currentDb = (activeGachaBanner === 'touhou') ? TOUHOU_DATABASE : CAR_DATABASE;
        const keys = Object.keys(currentDb);

        for (let i = 0; i < times; i++) {
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            const item = currentDb[randomKey];

            if (activeGachaBanner === 'touhou') {
                cardProgress[randomKey] = (cardProgress[randomKey] || 0) + 1;
            } else {
                carGarage[randomKey] = (carGarage[randomKey] || 0) + 1;
                
                if (item.bonusTouhou) {
                    cardProgress[item.bonusTouhou] = (cardProgress[item.bonusTouhou] || 0) + 1;
                }
            }
            results.push(item);
        }

        saveData();
        updateGridUI();

        if (statusText) statusText.innerText = `🎉 Result (${activeGachaBanner.toUpperCase()} BANNER)`;
        if (displayArea) {
            displayArea.innerHTML = "";

            let resultsContainer = document.createElement('div');
            resultsContainer.style.display = "flex";
            resultsContainer.style.gap = "10px";
            resultsContainer.style.justifyContent = "center";
            resultsContainer.style.flexWrap = "wrap";
            resultsContainer.style.maxHeight = "280px";
            resultsContainer.style.overflowY = "auto";

            results.forEach(res => {
                const cardRes = document.createElement('div');
                cardRes.className = 'gacha-card-result';
                cardRes.innerHTML = `
                    <img src="${res.img}" onerror="this.src='logo.png'" alt="${res.name}">
                    <div class="gacha-card-info">${res.name}</div>
                `;
                resultsContainer.appendChild(cardRes);
            });

            displayArea.appendChild(resultsContainer);
        }

        if (btn1) btn1.disabled = false;
        if (btn5) btn5.disabled = false;
    }, 800);
}

function resetAllData() {
    if (confirm("⚠️ Apakah kamu yakin ingin mereset semua data koin, garasi, dan kartu?")) {
        localStorage.removeItem('touhou_user_coins');
        localStorage.removeItem('touhou_card_progress');
        localStorage.removeItem('blitz_car_garage');
        localStorage.removeItem('touhou_last_claim_timestamp');
        localStorage.removeItem('playerLevel');
        localStorage.removeItem('playerScore');
        
        userCoins = 1000;
        cardProgress = {};
        carGarage = {};
        
        saveData();
        initGachaEngine();
        
        alert("🔄 Data berhasil di-reset!");
        location.reload();
    }
}