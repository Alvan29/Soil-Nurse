// ===================== DATA TANAMAN: CHILLI =====================
// File ini berisi data deteksi warna (HSV) dan nutrisi untuk tanaman Cabai.
// Edit file ini untuk menyesuaikan rentang warna atau nilai nutrisi ideal.

const PLANT_CHILLI = {
    // --- Identitas tanaman ---
    id: 'chilli',
    plant: 'Chilli',
    color: '#dd1f2f',
    icon: 'chilli',

    // --- Rentang HSV untuk deteksi warna indikator strip tes ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - warna biru/ungu gelap pada strip
        n: { hMin: 220, hMax: 280, sMin: 40, sMax: 100, vMin: 20, vMax: 70 },
        // P (Fosfor) - warna oranye/merah pada strip
        p: { hMin: 0, hMax: 30, sMin: 50, sMax: 100, vMin: 40, vMax: 90 },
        // K (Kalium) - warna kuning pada strip
        k: { hMin: 40, hMax: 70, sMin: 40, sMax: 100, vMin: 50, vMax: 95 },
        // pH - warna hijau/kuning (pH ideal cabai ~6.0-6.8)
        ph: { hMin: 60, hMax: 140, sMin: 30, sMax: 100, vMin: 40, vMax: 90 }
    },

    // --- Nilai referensi N, P, K (%) dan pH untuk matching ---
    n: 72,
    p: 66,
    k: 81,
    ph: 6.4,

    // --- Alasan & tips ---
    reason: 'NPK cukup tinggi dan pH sedikit asam, cocok untuk cabai yang butuh tanah subur.',
    guide: 'How to plant chilli?',
    tips: 'Tanam di area penuh matahari, beri kompos matang, siram teratur, dan tambahkan mulsa agar tanah stabil.',

    // --- Detail nutrisi (untuk modal nutrisi) ---
    nutri: {
        n: {
            ideal: '70-80%',
            desc: 'Nitrogen penting untuk pertumbuhan daun dan batang. Cabai membutuhkan nitrogen sedang-tinggi untuk produksi daun yang sehat.',
            tips: 'Tambahkan pupuk urea atau kompos kaya nitrogen secara bertahap.',
        },
        p: {
            ideal: '60-70%',
            desc: 'Fosfor mendukung perkembangan akar dan pembungaan. Cabai membutuhkan fosfor cukup untuk hasil buah maksimal.',
            tips: 'Gunakan pupuk SP-36 atau rock phosphate saat tanam.',
        },
        k: {
            ideal: '75-85%',
            desc: 'Kalium meningkatkan ketahanan terhadap penyakit dan kualitas buah. Cabai sangat responsif terhadap kalium.',
            tips: 'Berikan pupuk KCL atau abu kayu secara teratur.',
        },
        ph: {
            ideal: '6.0 - 6.8',
            desc: 'pH tanah mempengaruhi ketersediaan unsur hara. Cabai tumbuh optimal pada pH agak asam hingga netral.',
            tips: 'Jika pH terlalu asam, tambahkan kapur dolomit. Jika terlalu basa, tambahkan belerang.',
        },
        
        link: 'https://drive.google.com/file/d/1OjtpGt1P2U3Fhd5szKtOj1xcfbJZ4apY/view?usp=drive_link'
    },

    preventionTips: 'https://drive.google.com/file/d/1wHRjoNAXG1cQFJadFhwpItOoCS1Lf4m0/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/174ZK1SlqWx76GAQ3xsTX0Hl8WXzYzBKm/view?usp=drive_link',
};
