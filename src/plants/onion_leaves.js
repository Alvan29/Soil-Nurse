// ===================== DATA TANAMAN: TOMATO =====================
// File ini berisi data deteksi warna (HSV) dan nutrisi untuk tanaman Tomat.
// Edit file ini untuk menyesuaikan rentang warna atau nilai nutrisi ideal.

const PLANT_ONION = {
    // --- Identitas tanaman ---
    id: 'tomato',
    plant: 'Tomato',
    color: '#e04435',
    icon: 'tomato',

    // --- Rentang HSV untuk deteksi warna indikator strip tes ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - warna biru/biru-hijau pada strip
        n: { hMin: 190, hMax: 260, sMin: 35, sMax: 100, vMin: 25, vMax: 75 },
        // P (Fosfor) - warna oranye/merah-oranye pada strip
        p: { hMin: 5, hMax: 35, sMin: 45, sMax: 100, vMin: 45, vMax: 90 },
        // K (Kalium) - warna kuning/kuning-hijau pada strip
        k: { hMin: 45, hMax: 75, sMin: 35, sMax: 100, vMin: 45, vMax: 95 },
        // pH - warna hijau (pH ideal tomat ~6.2-6.8)
        ph: { hMin: 70, hMax: 145, sMin: 25, sMax: 100, vMin: 40, vMax: 88 }
    },

    // --- Nilai referensi N, P, K (%) dan pH untuk matching ---
    n: 61,
    p: 58,
    k: 64,
    ph: 6.8,

    // --- Alasan & tips ---
    reason: 'pH mendekati netral dan unsur hara seimbang mendukung pertumbuhan tomat.',
    guide: 'How to plant tomato?',
    tips: 'Gunakan ajir sejak awal, beri jarak antar tanaman, dan jaga daun tetap kering untuk mengurangi penyakit.',

    // --- Detail nutrisi (untuk modal nutrisi) ---
    nutri: {
        n: {
            ideal: '55-65%',
            desc: 'Tomat membutuhkan nitrogen seimbang untuk pertumbuhan vegetatif dan generatif. Terlalu banyak nitrogen dapat mengurangi buah.',
            tips: 'Gunakan pupuk NPK 16-16-16 pada awal tanam.',
        },
        p: {
            ideal: '50-60%',
            desc: 'Fosfor penting untuk pembentukan bunga dan buah tomat.',
            tips: 'Tambahkan tepung tulang atau pupuk fosfat saat persiapan lahan.',
        },
        k: {
            ideal: '60-70%',
            desc: 'Kalium meningkatkan rasa, warna, dan daya simpan tomat.',
            tips: 'Berikan pupuk kalium saat fase pembungaan.',
        },
        ph: {
            ideal: '6.2 - 6.8',
            desc: 'Tomat tumbuh baik pada pH netral hingga sedikit asam.',
            tips: 'Lakukan tes pH secara berkala dan sesuaikan dengan kapur atau sulfur.',
        },
        link: 'https://drive.google.com/file/d/1wFuT-JLSO6ZSvITU9dtXE606H3vZD3_k/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/15V0Cc21G_32AhFjN2Q72w9tg4HWnjeHD/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1hdrYIH1eG3zhQmP6ELT6emzcFxT9gPEt/view?usp=drive_link',
};
