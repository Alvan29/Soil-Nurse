// ===================== DATA TANAMAN: MAKRUT LIME LEAVES =====================
// File ini berisi data deteksi warna (HSV) dan nutrisi untuk tanaman Daun Jeruk Purut.
// Edit file ini untuk menyesuaikan rentang warna atau nilai nutrisi ideal.

const PLANT_MAKRUT_LEAVES = {
    // --- Identitas tanaman ---
    id: 'makrut_lime_leaves',
    plant: 'Makrut Lime Leaves',
    color: '#4a7c3f',
    icon: 'leaf',

    // --- Rentang HSV untuk deteksi warna indikator strip tes ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - warna biru-ungu tua pada strip
        n: { hMin: 215, hMax: 275, sMin: 38, sMax: 100, vMin: 22, vMax: 68 },
        // P (Fosfor) - warna oranye pada strip
        p: { hMin: 5, hMax: 33, sMin: 48, sMax: 100, vMin: 44, vMax: 90 },
        // K (Kalium) - warna kuning-oranye pada strip
        k: { hMin: 38, hMax: 68, sMin: 42, sMax: 100, vMin: 50, vMax: 94 },
        // pH - warna hijau (pH ideal jeruk purut ~5.5-6.5)
        ph: { hMin: 62, hMax: 140, sMin: 32, sMax: 100, vMin: 38, vMax: 88 }
    },

    // --- Nilai referensi N, P, K (%) dan pH untuk matching ---
    n: 58,
    p: 52,
    k: 62,
    ph: 6.0,

    // --- Alasan & tips ---
    reason: 'Daun jeruk purut menyukai tanah subur dengan pH agak asam dan drainase baik.',
    guide: 'How to grow makrut lime leaves?',
    tips: 'Tanam di lokasi yang mendapat sinar matahari penuh, pastikan drainase pot atau lahan sangat baik, dan lakukan pemangkasan ringan setelah panen untuk merangsang pertumbuhan tunas baru.',

    // --- Detail nutrisi (untuk modal nutrisi) ---
    nutri: {
        n: {
            ideal: '55-65%',
            desc: 'Nitrogen (N) sangat dibutuhkan untuk pertumbuhan daun jeruk purut yang lebat dan hijau mengkilap. Kekurangan nitrogen menyebabkan daun menguning (klorosis), rontok lebih cepat, dan produksi daun menurun drastis. Kelebihan N membuat tanaman rentan serangan kutu dan jamur.',
            tips: 'Berikan pupuk NPK seimbang setiap bulan selama musim tumbuh. Tambahkan kompos organik sebagai mulsa di sekeliling batang untuk melepas nitrogen secara lambat. Hindari pemupukan nitrogen tinggi menjelang musim kering.',
        },
        p: {
            ideal: '48-58%',
            desc: 'Fosfor (P) mendukung perkembangan sistem perakaran yang dalam dan luas pada jeruk purut, yang krusial untuk penyerapan air dan nutrisi di musim kemarau. Fosfor juga berperan dalam pembentukan tunas dan pemulihan tanaman setelah pemangkasan.',
            tips: 'Campurkan pupuk fosfat (SP-36 atau TSP) ke lubang tanam. Untuk perawatan rutin, siram dengan larutan pupuk fosfat cair setiap 6–8 minggu. Pastikan pH tanah ideal agar fosfor dapat diserap dengan optimal.',
        },
        k: {
            ideal: '58-68%',
            desc: 'Kalium (K) memperkuat ketahanan pohon jeruk purut terhadap kekeringan, hama, dan penyakit jamur. Kalium juga meningkatkan kualitas aroma daun dengan mendukung produksi minyak atsiri. Kekurangan K menyebabkan tepi daun menguning dan mengering.',
            tips: 'Berikan pupuk kalium sulfat (K₂SO₄) setiap 2 bulan. Untuk tanaman pot, gunakan pupuk slow-release mengandung kalium agar ketersediaan nutrisi lebih konsisten. Abu sekam atau abu kayu juga merupakan sumber kalium organik yang baik.',
        },
        ph: {
            ideal: '5.5 - 6.5',
            desc: 'Jeruk purut tumbuh optimal pada tanah agak asam hingga netral (5.5–6.5). pH di bawah 5.5 menyebabkan toksisitas mangan dan defisiensi kalsium, sedangkan pH di atas 6.5 menghambat penyerapan besi dan seng yang penting untuk sintesis klorofil.',
            tips: 'Uji pH tanah sebelum tanam dan setiap 3 bulan sekali. Tambahkan kapur dolomit jika pH terlalu asam, atau belerang jika terlalu basa. Pemberian kompos matang secara rutin membantu menjaga kestabilan pH dalam jangka panjang.',
        },
        ph_kurang: {
            ideal: 'pH < 5.5 (Terlalu Asam)',
            desc: 'Pada pH di bawah 5.5, jeruk purut mengalami keracunan aluminium dan mangan yang merusak ujung-ujung akar muda. Akibatnya, tanaman tidak mampu menyerap kalsium dan magnesium dengan baik. Gejala yang muncul adalah daun menggulung, tepi daun cokelat, dan pertumbuhan yang sangat lambat.',
            tips: 'Aplikasikan kapur dolomit (CaMg(CO₃)₂) sebanyak 0.5–1 kg per pohon, campur rata dengan tanah di sekitar perakaran. Lakukan 4–6 minggu sebelum musim tanam. Hindari penggunaan pupuk dengan reaksi asam seperti amonium sulfat selama proses pengapuran.',
        },
        ph_lebih: {
            ideal: 'pH > 6.5 (Terlalu Basa)',
            desc: 'Tanah basa mengendapkan besi (Fe) dan seng (Zn) sehingga tidak dapat diserap oleh jeruk purut. Gejala khas adalah klorosis interveinal pada daun muda — daun menguning dengan tulang daun tetap hijau. Lama-kelamaan daun rontok dan pohon melemah secara keseluruhan.',
            tips: 'Turunkan pH dengan belerang (sulfur) granular atau pupuk amonium sulfat. Semprotkan larutan besi kelat (Fe-EDTA) atau pupuk mikro pada daun sebagai solusi cepat mengatasi klorosis. Siram dengan air yang mengandung asam humat untuk membantu melarutkan mineral yang mengendap.',
        },
        unsur_hara: {
            ideal: 'Unsur Mikro untuk Aroma & Produksi Daun',
            desc: 'Jeruk purut membutuhkan magnesium (Mg) dalam jumlah tinggi untuk mempertahankan warna hijau daun yang pekat dan produksi klorofil. Seng (Zn) berperan dalam pembentukan hormon pertumbuhan daun, sedangkan besi (Fe) diperlukan untuk respirasi sel. Kekurangan unsur mikro ini menyebabkan daun kecil, pucat, dan tidak beraroma.',
            tips: 'Semprotkan pupuk daun mengandung Mg, Fe, dan Zn setiap 3 minggu selama musim tumbuh aktif. Siram dengan larutan magnesium sulfat (MgSO₄ atau garam epsom, 10 gram/liter) setiap bulan untuk memastikan kecukupan magnesium, terutama jika daun mulai menguning.',
        },

        link: 'https://drive.google.com/file/d/1V2aol9nhyl8BmvrVWsVyTALel3RH2nEu/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/1T2s-dAXaYl3xRaPJ-gggJlDos3CcGy-P/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1H2gHUMbtkCDFDhvtY7MKl1d6wQVafAbh/view?usp=drive_link',
};
