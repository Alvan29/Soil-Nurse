// ===================== DATA TANAMAN: TOMATO =====================
// File ini berisi data deteksi warna (HSV) dan nutrisi untuk tanaman Tomat.
// Edit file ini untuk menyesuaikan rentang warna atau nilai nutrisi ideal.

const PLANT_TOMATO = {
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
    reason: 'pH mendekati netral dan unsur hara seimbang mendukung pertumbuhan tomat yang optimal.',
    guide: 'How to plant tomato?',
    tips: 'Gunakan ajir sejak awal, beri jarak antar tanaman 50–60 cm, pangkas tunas air secara rutin, dan jaga daun tetap kering untuk mengurangi risiko penyakit jamur.',

    // --- Detail nutrisi (untuk modal nutrisi) ---
    nutri: {
        n: {
            ideal: '55-65%',
            desc: 'Nitrogen (N) mendukung pertumbuhan vegetatif tomat secara seimbang. Terlalu banyak nitrogen membuat tanaman lebat daun namun buah sedikit dan berwarna pucat. Terlalu sedikit menyebabkan daun menguning dan pertumbuhan kerdil.',
            tips: 'Gunakan pupuk NPK 16-16-16 di awal tanam. Setelah memasuki fase berbunga, kurangi nitrogen dan tingkatkan kalium agar buah terbentuk optimal.',
        },
        p: {
            ideal: '50-60%',
            desc: 'Fosfor (P) berperan penting dalam pembentukan bunga, pembuahan, dan perkembangan akar tomat. Kekurangan fosfor ditandai dengan daun dan batang berwarna ungu kemerahan serta pembungaan yang lambat.',
            tips: 'Tambahkan tepung tulang atau pupuk SP-36 saat persiapan lahan. Aplikasikan kembali secara foliasi saat tanaman mulai menunjukkan tanda pembungaan.',
        },
        k: {
            ideal: '60-70%',
            desc: 'Kalium (K) meningkatkan rasa, warna, dan daya simpan buah tomat. Kalium juga memperkuat ketahanan tanaman terhadap stres kekeringan dan penyakit. Kekurangan K menyebabkan tepi daun mengering (leaf scorch).',
            tips: 'Berikan pupuk KCl atau kalium sulfat saat fase pembungaan dan pembuahan. Hindari kelebihan kalium karena dapat menghambat penyerapan magnesium.',
        },
        ph: {
            ideal: '6.2 - 6.8',
            desc: 'Tomat tumbuh paling baik pada pH netral hingga sedikit asam (6.2–6.8). Pada rentang ini, semua unsur hara tersedia secara maksimal. Di luar rentang ini, risiko kekurangan kalsium meningkat sehingga memicu busuk ujung buah (blossom-end rot).',
            tips: 'Lakukan tes pH tanah secara berkala, minimal setiap 2 bulan. Gunakan kapur dolomit untuk menaikkan pH atau sulfur untuk menurunkannya secara bertahap.',
        },
        ph_kurang: {
            ideal: 'pH < 6.2 (Terlalu Asam)',
            desc: 'Tanah terlalu asam membuat tomat rentan terhadap keracunan mangan dan aluminium. Kalsium dan magnesium menjadi tidak tersedia, memicu busuk ujung buah (blossom-end rot) dan klorosis pada daun tua. Akar juga menjadi pendek dan rapuh.',
            tips: 'Aplikasikan kapur dolomit (kalsium-magnesium karbonat) sebanyak 1–1.5 ton/ha dan inkorporasikan ke dalam tanah sedalam 20 cm. Tunggu minimal 3 minggu sebelum tanam. Tambahkan kalsium melalui penyemprotan kalsium klorida (CaCl₂) jika gejala sudah muncul.',
        },
        ph_lebih: {
            ideal: 'pH > 6.8 (Terlalu Basa)',
            desc: 'Pada pH di atas 6.8, ketersediaan besi (Fe), mangan (Mn), seng (Zn), dan boron (B) menurun drastis. Tomat menunjukkan klorosis interveinal pada daun muda (daun menguning dengan tulang daun hijau), pertumbuhan lambat, dan hasil panen berkurang.',
            tips: 'Turunkan pH dengan sulfur elemental (2–3 kg per 10 m²) atau gypsum pertanian. Siram dengan larutan asam humat untuk membantu menstabilkan pH tanah. Hindari penggunaan kapur berlebihan dan pilih pupuk berbasis amonium untuk pemupukan rutin.',
        },
        unsur_hara: {
            ideal: 'Keseimbangan Unsur Makro & Mikro',
            desc: 'Tomat sangat membutuhkan kalsium (Ca) untuk mencegah busuk ujung buah, magnesium (Mg) sebagai inti klorofil, dan boron (B) untuk pembentukan dinding sel buah. Kekurangan salah satu unsur ini menyebabkan buah cacat, retak, atau busuk meski tanaman tampak sehat.',
            tips: 'Semprotkan kalsium klorida (CaCl₂ 0.5%) setiap seminggu sekali selama fase pembungaan. Gunakan pupuk daun lengkap yang mengandung Ca, Mg, Fe, Zn, dan B. Pastikan pengairan merata untuk mendukung transportasi kalsium dari akar ke buah.',
        },

        link: 'https://drive.google.com/file/d/1PnHM7XOcXug-ko5qStpE0Z9LKO3lducB/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/1VR__o--lqJp3ReKYdzsUNOxVPCSmynu6/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1E900SOvB-K4DNehuRZOPaIouqrIC3HX4/view?usp=drive_link',
};
