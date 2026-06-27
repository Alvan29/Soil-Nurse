// ===================== DATA TANAMAN: ONION LEAVES =====================
// File ini berisi data deteksi warna (HSV) dan nutrisi untuk tanaman Daun Bawang.
// Edit file ini untuk menyesuaikan rentang warna atau nilai nutrisi ideal.

const PLANT_ONION = {
    // --- Identitas tanaman ---
    id: 'onion_leaves',
    plant: 'Onion Leaves',
    color: '#6dab3c',
    icon: 'leaf',

    // --- Rentang HSV untuk deteksi warna indikator strip tes ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - warna biru-ungu pada strip (daun bawang butuh N tinggi)
        n: { hMin: 205, hMax: 265, sMin: 40, sMax: 100, vMin: 22, vMax: 70 },
        // P (Fosfor) - warna oranye-merah pada strip
        p: { hMin: 5, hMax: 30, sMin: 50, sMax: 100, vMin: 45, vMax: 90 },
        // K (Kalium) - warna kuning pada strip
        k: { hMin: 40, hMax: 70, sMin: 40, sMax: 100, vMin: 50, vMax: 94 },
        // pH - warna hijau-kuning (pH ideal daun bawang ~6.0-7.0)
        ph: { hMin: 60, hMax: 145, sMin: 30, sMax: 100, vMin: 40, vMax: 90 }
    },

    // --- Nilai referensi N, P, K (%) dan pH untuk matching ---
    n: 68,
    p: 54,
    k: 62,
    ph: 6.5,

    // --- Alasan & tips ---
    reason: 'Daun bawang membutuhkan nitrogen tinggi dan pH netral untuk pertumbuhan daun yang cepat dan lebat.',
    guide: 'How to grow onion leaves?',
    tips: 'Tanam di tanah gembur dan berdrainase baik, beri pupuk nitrogen secara rutin, panen dengan memotong daun dari pangkal dan biarkan tumbuh kembali untuk panen berkelanjutan.',

    // --- Detail nutrisi (untuk modal nutrisi) ---
    nutri: {
        n: {
            ideal: '65-75%',
            desc: 'Nitrogen (N) adalah nutrisi terpenting untuk daun bawang karena seluruh bagian yang dikonsumsi adalah daun dan batang semu. N mendorong pertumbuhan daun yang cepat, tebal, dan berwarna hijau segar. Kekurangan N menyebabkan daun menguning, tipis, dan pertumbuhan sangat lambat.',
            tips: 'Berikan pupuk urea atau pupuk NPK seimbang setiap 2 minggu sekali. Siram dengan pupuk cair organik seperti kompos cair atau pupuk kandang cair untuk mendukung pertumbuhan daun yang konsisten. Tingkatkan frekuensi pemupukan saat masuk musim tanam aktif.',
        },
        p: {
            ideal: '50-60%',
            desc: 'Fosfor (P) mendukung perkembangan sistem akar daun bawang yang kuat dan efisien. Akar yang sehat memungkinkan tanaman menyerap air dan hara dengan optimal, terutama saat cuaca ekstrem. Fosfor juga membantu pemulihan tanaman setelah panen dan menstimulasi pertumbuhan tunas baru.',
            tips: 'Campurkan pupuk fosfat (SP-36) ke tanah saat persiapan lahan. Untuk perawatan, siram dengan larutan pupuk fosfat cair setiap 5–6 minggu. Pemberian bokashi (fermentasi bahan organik) juga efektif sebagai sumber fosfor organik.',
        },
        k: {
            ideal: '58-68%',
            desc: 'Kalium (K) meningkatkan ketahanan daun bawang terhadap penyakit busuk daun dan infeksi jamur yang umum terjadi di lingkungan lembap. Kalium juga memperkuat turgor sel sehingga daun tetap tegak, segar, dan tidak mudah layu saat suhu tinggi.',
            tips: 'Berikan pupuk kalium sulfat (K₂SO₄) atau abu sekam padi sebagai sumber kalium organik. Siram secara merata dan hindari genangan air karena dapat mengurangi efektivitas penyerapan kalium oleh akar.',
        },
        ph: {
            ideal: '6.0 - 7.0',
            desc: 'Daun bawang tumbuh optimal pada pH netral hingga sedikit asam (6.0–7.0). Pada rentang ini, nitrogen, fosfor, dan kalium tersedia secara maksimal. pH di bawah 6.0 dapat menyebabkan keracunan aluminium, sementara pH di atas 7.0 menghambat penyerapan besi dan seng.',
            tips: 'Uji pH tanah sebelum tanam dan setiap 2 bulan sekali. Gunakan kapur dolomit untuk menaikkan pH atau pupuk belerang untuk menurunkannya. Penambahan kompos matang secara rutin membantu menjaga pH tetap stabil di kisaran ideal.',
        },
        ph_kurang: {
            ideal: 'pH < 6.0 (Terlalu Asam)',
            desc: 'Pada pH terlalu asam, daun bawang mengalami keracunan aluminium (Al) dan mangan (Mn) yang menghambat penyerapan kalsium dan magnesium. Akibatnya, daun tampak pucat, ujung daun mengering (tip burn), dan akar memendek sehingga tanaman tidak dapat berdiri tegak.',
            tips: 'Naikkan pH dengan mengaplikasikan kapur pertanian (CaCO₃) atau kapur dolomit sebanyak 1–2 ton/ha, campurkan hingga kedalaman 15–20 cm. Biarkan 2–3 minggu sebelum tanam. Lakukan pengukuran pH ulang untuk memastikan kestabilan sebelum menanam.',
        },
        ph_lebih: {
            ideal: 'pH > 7.0 (Terlalu Basa)',
            desc: 'Tanah basa mengunci zat besi (Fe), seng (Zn), dan mangan (Mn) sehingga daun bawang tidak dapat menyerap nutrisi mikro ini. Gejala yang terlihat adalah klorosis interveinal pada daun muda, pertumbuhan lambat, dan daun yang kecil serta tidak berwarna hijau pekat.',
            tips: 'Turunkan pH dengan belerang (sulfur) granular atau pupuk amonium sulfat. Siram tanah dengan larutan asam humat yang membantu mengurai senyawa yang mengunci unsur mikro. Hindari penggunaan pupuk berkalsium tinggi yang dapat memperburuk kondisi basa.',
        },
        unsur_hara: {
            ideal: 'Kalsium & Magnesium untuk Daun Sehat',
            desc: 'Daun bawang sangat membutuhkan kalsium (Ca) untuk mencegah tip burn (ujung daun mengering dan menghitam), yang merupakan masalah umum pada daun bawang di lingkungan panas dan lembap. Magnesium (Mg) diperlukan untuk sintesis klorofil agar daun tetap hijau segar, sementara besi (Fe) dan boron (B) mendukung pembelahan sel yang aktif.',
            tips: 'Semprotkan kalsium klorida (CaCl₂ 0.3%) setiap minggu untuk mencegah tip burn. Tambahkan magnesium sulfat (garam epsom, 10 g/liter) melalui penyiraman setiap 3 minggu. Gunakan pupuk daun lengkap yang mengandung semua unsur mikro untuk mendukung pertumbuhan daun yang optimal.',
        },

        link: 'https://drive.google.com/file/d/1wFuT-JLSO6ZSvITU9dtXE606H3vZD3_k/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/15V0Cc21G_32AhFjN2Q72w9tg4HWnjeHD/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1hdrYIH1eG3zhQmP6ELT6emzcFxT9gPEt/view?usp=drive_link',
};
