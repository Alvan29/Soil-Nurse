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
            desc: 'Nitrogen (N) sangat penting untuk pertumbuhan daun dan batang cabai. Kekurangan N menyebabkan daun menguning dan pertumbuhan terhambat, sedangkan kelebihan N membuat tanaman terlalu lebat daun namun minim buah.',
            tips: 'Tambahkan pupuk urea atau kompos kaya nitrogen secara bertahap setiap 2 minggu sejak awal pertumbuhan vegetatif.',
        },
        p: {
            ideal: '60-70%',
            desc: 'Fosfor (P) mendukung perkembangan sistem akar yang kuat dan pembungaan lebat. Cabai membutuhkan fosfor yang cukup agar mampu menghasilkan buah secara maksimal sejak musim berbunga pertama.',
            tips: 'Gunakan pupuk SP-36 atau rock phosphate saat pengolahan lahan. Aplikasikan kembali saat mulai berbunga untuk mendukung pembuahan.',
        },
        k: {
            ideal: '75-85%',
            desc: 'Kalium (K) meningkatkan ketahanan cabai terhadap serangan penyakit, kekeringan, dan meningkatkan kualitas warna serta rasa buah. Kalium juga memperkuat dinding sel tanaman.',
            tips: 'Berikan pupuk KCl atau abu kayu secara teratur, terutama saat fase pembentukan dan pematangan buah.',
        },
        ph: {
            ideal: '5.5 - 6.5',
            desc: 'pH tanah sangat memengaruhi ketersediaan semua unsur hara. Cabai tumbuh optimal pada pH agak asam hingga netral (6.0–6.8). Di luar rentang ini, beberapa nutrisi menjadi tidak tersedia meski sudah dipupuk.',
            tips: 'Lakukan uji pH tanah sebelum tanam. Sesuaikan dengan kapur dolomit (jika terlalu asam) atau belerang/sulfur (jika terlalu basa).',
        },
        ph_kurang: {
            ideal: 'pH < 6.0 (Terlalu Asam)',
            desc: 'Ketika pH tanah di bawah 6.0, cabai mengalami keracunan aluminium dan mangan, serta kekurangan kalsium dan magnesium. Daun tampak klorosis (menguning), tepi daun mengering, dan pertumbuhan akar sangat terhambat.',
            tips: 'Tambahkan kapur dolomit (CaMg(CO₃)₂) sebanyak 1–2 ton/ha dan campurkan hingga kedalaman 20 cm. Biarkan 2–4 minggu sebelum tanam agar pH stabil. Lakukan pengukuran ulang sebelum menanam.',
        },
        ph_lebih: {
            ideal: 'pH > 6.8 (Terlalu Basa)',
            desc: 'Pada pH di atas 6.8, unsur mikro seperti besi (Fe), mangan (Mn), dan seng (Zn) mengendap sehingga tidak dapat diserap cabai. Gejala yang muncul adalah daun muda menguning dengan tulang daun tetap hijau (klorosis interveinal).',
            tips: 'Turunkan pH dengan menambahkan belerang elemental (S) atau pupuk amonium sulfat. Pemberian kompos atau bahan organik secara rutin juga membantu menstabilkan pH secara alami dalam jangka panjang.',
        },
        unsur_hara: {
            ideal: 'Unsur Mikro & Makro Seimbang',
            desc: 'Selain N, P, K, cabai juga membutuhkan kalsium (Ca) untuk mencegah blossom-end rot, magnesium (Mg) untuk pembentukan klorofil, sulfur (S) untuk sintesis protein, serta unsur mikro seperti besi (Fe), seng (Zn), dan boron (B) untuk pembentukan bunga dan buah.',
            tips: 'Semprotkan pupuk daun mengandung Ca, Mg, dan Zn setiap 2 minggu. Gunakan pupuk NPK lengkap yang sudah mengandung unsur mikro, atau tambahkan pupuk mikro secara terpisah jika gejala kekurangan terlihat.',
        },

        link: 'https://drive.google.com/file/d/1OjtpGt1P2U3Fhd5szKtOj1xcfbJZ4apY/view?usp=drive_link'
    },

    preventionTips: 'https://drive.google.com/file/d/1wHRjoNAXG1cQFJadFhwpItOoCS1Lf4m0/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/174ZK1SlqWx76GAQ3xsTX0Hl8WXzYzBKm/view?usp=drive_link',
};
