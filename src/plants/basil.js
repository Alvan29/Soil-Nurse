// ===================== DATA TANAMAN: BASIL =====================
// File ini berisi data deteksi warna (HSV) dan nutrisi untuk tanaman Kemangi.
// Edit file ini untuk menyesuaikan rentang warna atau nilai nutrisi ideal.

const PLANT_BASIL = {
    // --- Identitas tanaman ---
    id: 'basil',
    plant: 'Basil',
    color: '#3a9c4e',
    icon: 'leaf',

    // --- Rentang HSV untuk deteksi warna indikator strip tes ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - warna biru-ungu pada strip (kemangi butuh N sedang-tinggi)
        n: { hMin: 200, hMax: 270, sMin: 35, sMax: 100, vMin: 25, vMax: 72 },
        // P (Fosfor) - warna oranye-merah pada strip
        p: { hMin: 0, hMax: 32, sMin: 45, sMax: 100, vMin: 42, vMax: 88 },
        // K (Kalium) - warna kuning pada strip
        k: { hMin: 42, hMax: 72, sMin: 38, sMax: 100, vMin: 48, vMax: 93 },
        // pH - warna hijau (pH ideal kemangi ~6.0-7.0)
        ph: { hMin: 65, hMax: 148, sMin: 28, sMax: 100, vMin: 38, vMax: 90 }
    },

    // --- Nilai referensi N, P, K (%) dan pH untuk matching ---
    n: 65,
    p: 55,
    k: 60,
    ph: 6.5,

    // --- Alasan & tips ---
    reason: 'Kemangi tumbuh baik pada tanah subur dengan nitrogen cukup dan pH mendekati netral.',
    guide: 'How to plant basil?',
    tips: 'Tanam di tempat yang mendapat sinar matahari 6–8 jam per hari, siram secara teratur tapi jangan sampai tergenang, dan pangkas bunga sesegera mungkin agar daun terus tumbuh lebat.',

    // --- Detail nutrisi (untuk modal nutrisi) ---
    nutri: {
        n: {
            ideal: '60-70%',
            desc: 'Nitrogen (N) adalah nutrisi paling krusial untuk kemangi karena bagian yang dipanen adalah daunnya. N mendukung pertumbuhan daun yang lebar, hijau pekat, dan beraroma kuat. Kekurangan N menyebabkan daun pucat, kecil, dan tidak beraroma.',
            tips: 'Pupuk dengan kompos cair atau pupuk kandang setiap 2–3 minggu. Jika menggunakan pupuk kimia, pilih urea encer (1–2 gram/liter) dan siramkan ke media tanam, bukan ke daun.',
        },
        p: {
            ideal: '50-60%',
            desc: 'Fosfor (P) mendukung perkembangan akar kemangi yang kuat dan pembentukan akar lateral yang banyak. Akar yang sehat memungkinkan tanaman menyerap air dan nutrisi lebih efisien, terutama di musim kemarau.',
            tips: 'Campurkan pupuk fosfat alami (rock phosphate) ke media tanam saat persiapan. Untuk tanaman pot, gunakan pupuk slow-release mengandung fosfor agar nutrisi tersedia secara bertahap.',
        },
        k: {
            ideal: '55-65%',
            desc: 'Kalium (K) meningkatkan produksi minyak esensial dalam daun kemangi yang bertanggung jawab atas aroma khasnya. Selain itu, kalium memperkuat ketahanan tanaman terhadap penyakit layu dan kondisi stres lingkungan.',
            tips: 'Gunakan abu sekam padi atau pupuk kalium sulfat sebagai sumber kalium alami. Hindari pemberian kalium berlebihan karena dapat menghambat penyerapan magnesium dan kalsium.',
        },
        ph: {
            ideal: '6.0 - 7.5',
            desc: 'Kemangi toleran terhadap rentang pH yang cukup lebar (6.0–7.0). Pada kondisi ini, semua unsur hara tersedia dengan baik. pH di bawah 6.0 menyebabkan kekurangan kalsium dan magnesium, sedangkan pH di atas 7.0 menghambat penyerapan zat besi dan mangan.',
            tips: 'Campurkan kompos matang atau vermikompos ke tanah untuk menjaga pH tetap stabil di kisaran ideal. Lakukan tes pH tanah setiap 2–3 bulan sekali.',
        },
        ph_kurang: {
            ideal: 'pH < 6.0 (Terlalu Asam)',
            desc: 'Pada pH terlalu asam, kemangi mengalami toksisitas aluminium yang merusak ujung akar, serta kekurangan kalsium dan magnesium. Gejala yang terlihat adalah daun mengecil, tepi daun kecokelatan, dan tanaman tumbuh kerdil meski sudah dipupuk.',
            tips: 'Tambahkan kapur pertanian (CaCO₃) atau kapur dolomit secara bertahap ke media tanam dan aduk rata. Untuk pot, ganti sebagian media dengan campuran yang mengandung kompos matang untuk menaikkan pH secara organik.',
        },
        ph_lebih: {
            ideal: 'pH > 7.0 (Terlalu Basa)',
            desc: 'Tanah basa mengunci zat besi (Fe) dan mangan (Mn) sehingga tidak dapat diserap kemangi. Daun muda tampak menguning dengan tulang daun yang tetap hijau (klorosis interveinal). Pertumbuhan melambat dan tanaman mudah stres saat cuaca panas.',
            tips: 'Turunkan pH dengan menambahkan belerang (sulfur) granular ke tanah atau siram dengan larutan cuka encer (pH cuka disesuaikan). Gunakan pupuk berbasis amonium sulfat yang bersifat asam untuk pemupukan rutin.',
        },
        unsur_hara: {
            ideal: 'Unsur Mikro untuk Aroma & Kesehatan Daun',
            desc: 'Selain N, P, K, kemangi memerlukan magnesium (Mg) untuk pembentukan klorofil agar daun tetap hijau pekat, kalsium (Ca) untuk kekuatan dinding sel, besi (Fe) untuk respirasi sel, serta seng (Zn) yang berperan dalam sintesis klorofil dan hormon pertumbuhan.',
            tips: 'Semprotkan pupuk daun lengkap mengandung Mg, Fe, dan Zn setiap 2 minggu sekali. Gunakan media tanam berbasis kompos yang kaya akan unsur mikro alami untuk mendukung pertumbuhan daun yang sehat dan beraroma.',
        },

        link: 'https://drive.google.com/file/d/1r8dPMJuFrj-RlDXxX-JGAxzQzwaRG3YD/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/1nNFie5kQVgQ1k5injykIkYnYkOv8ToZF/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1z4cfOyEy-5I5EzN1lZg8391eatXCVSfj/view?usp=drive_link',
};
