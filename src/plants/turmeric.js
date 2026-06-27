// ===================== DATA TANAMAN: TURMERIC =====================
// File ini berisi data deteksi warna (HSV) dan nutrisi untuk tanaman Kunyit.
// Edit file ini untuk menyesuaikan rentang warna atau nilai nutrisi ideal.

const PLANT_TURMERIC = {
    // --- Identitas tanaman ---
    id: 'turmeric',
    plant: 'Turmeric',
    color: '#e8a020',
    icon: 'corn',

    // --- Rentang HSV untuk deteksi warna indikator strip tes ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - warna biru-ungu gelap pada strip
        n: { hMin: 210, hMax: 272, sMin: 35, sMax: 100, vMin: 20, vMax: 68 },
        // P (Fosfor) - warna oranye pada strip
        p: { hMin: 8, hMax: 35, sMin: 48, sMax: 100, vMin: 42, vMax: 88 },
        // K (Kalium) - warna kuning-oranye pada strip (kunyit butuh K tinggi)
        k: { hMin: 35, hMax: 65, sMin: 45, sMax: 100, vMin: 52, vMax: 96 },
        // pH - warna hijau-kuning (pH ideal kunyit ~5.5-7.0)
        ph: { hMin: 58, hMax: 148, sMin: 25, sMax: 100, vMin: 38, vMax: 90 }
    },

    // --- Nilai referensi N, P, K (%) dan pH untuk matching ---
    n: 55,
    p: 60,
    k: 72,
    ph: 6.2,

    // --- Alasan & tips ---
    reason: 'Kunyit tumbuh baik pada tanah gembur dengan kalium tinggi, fosfor cukup, dan pH agak asam.',
    guide: 'How to grow turmeric?',
    tips: 'Tanam rimpang kunyit sedalam 5–7 cm dengan posisi tunas menghadap atas. Jaga kelembapan tanah tetap konsisten, beri mulsa organik tebal untuk menjaga suhu tanah, dan hindari genangan air agar rimpang tidak membusuk.',

    // --- Detail nutrisi (untuk modal nutrisi) ---
    nutri: {
        n: {
            ideal: '50-60%',
            desc: 'Nitrogen (N) mendukung pertumbuhan daun dan batang semu kunyit yang lebat, yang penting untuk fotosintesis dan pengisian rimpang. Meski kebutuhan N kunyit tidak setinggi tanaman daun, kekurangan N menyebabkan daun menguning dan pembentukan rimpang terhambat.',
            tips: 'Berikan pupuk urea atau pupuk kandang sapi yang sudah matang setiap 4–6 minggu sekali. Kurangi pemberian nitrogen menjelang masa pembentukan rimpang (3–4 bulan setelah tanam) agar energi tanaman dialihkan ke perkembangan rimpang, bukan daun.',
        },
        p: {
            ideal: '55-65%',
            desc: 'Fosfor (P) sangat krusial untuk pembentukan dan pembesaran rimpang kunyit. Fosfor mendukung pembelahan sel yang aktif di dalam rimpang sehingga rimpang tumbuh besar, padat, dan mengandung kurkumin tinggi. Kekurangan fosfor menyebabkan rimpang kerdil dan pucat.',
            tips: 'Campurkan pupuk TSP (Triple Super Phosphate) atau tepung tulang ke lubang tanam sebagai pupuk dasar. Lakukan pemupukan fosfat susulan setiap 2 bulan dengan pupuk SP-36 encer yang disiramkan di sekitar zona perakaran.',
        },
        k: {
            ideal: '68-80%',
            desc: 'Kalium (K) adalah nutrisi paling penting untuk produksi rimpang kunyit yang berkualitas tinggi. Kalium mendukung translokasi karbohidrat dari daun ke rimpang, meningkatkan kadar kurkumin, dan memperkuat ketahanan terhadap penyakit layu Fusarium yang sering menyerang kunyit.',
            tips: 'Berikan pupuk kalium sulfat (K₂SO₄) atau pupuk KCl setiap 6–8 minggu. Tingkatkan dosis kalium saat memasuki fase pembentukan rimpang (mulai bulan ke-3). Abu sekam padi atau abu kayu juga merupakan sumber kalium organik yang sangat baik untuk kunyit.',
        },
        ph: {
            ideal: '5.5 - 6.5',
            desc: 'Kunyit toleran terhadap rentang pH yang cukup lebar (5.5–7.0), namun tumbuh paling optimal pada pH agak asam (5.5–6.5). Pada kondisi ini, fosfor, kalium, dan unsur mikro tersedia dengan baik untuk mendukung perkembangan rimpang. pH di luar rentang ini dapat menghambat penyerapan nutrisi secara signifikan.',
            tips: 'Lakukan pengujian pH tanah sebelum tanam. Tambahkan kompos matang sebanyak 2–3 kg per m² untuk menjaga pH tanah stabil sekaligus meningkatkan kesuburan. Untuk lahan masam, gunakan kapur dolomit secara bertahap.',
        },
        ph_kurang: {
            ideal: 'pH < 5.5 (Terlalu Asam)',
            desc: 'Pada pH di bawah 5.5, kunyit mengalami toksisitas aluminium (Al³⁺) yang merusak ujung akar dan menghambat pembentukan rimpang. Kalsium dan magnesium menjadi langka, sehingga rimpang yang terbentuk menjadi kecil, berserat kasar, dan kandungan kurkuminnya rendah.',
            tips: 'Aplikasikan kapur dolomit atau kapur pertanian sebanyak 1–2 ton/ha pada lahan, atau 0.5 kg per lubang tanam untuk skala kecil. Campurkan rata dengan tanah dan biarkan 3–4 minggu sebelum tanam. Tambahkan bokashi atau pupuk organik untuk mempercepat stabilisasi pH.',
        },
        ph_lebih: {
            ideal: 'pH > 7.0 (Terlalu Basa)',
            desc: 'Pada pH di atas 7.0, fosfor bereaksi dengan kalsium dan menjadi tidak tersedia bagi kunyit, padahal fosfor sangat dibutuhkan untuk pembesaran rimpang. Unsur mikro seperti besi (Fe) dan mangan (Mn) juga mengendap. Akibatnya, rimpang tumbuh lambat, berwarna pucat, dan mudah terserang penyakit.',
            tips: 'Turunkan pH secara bertahap dengan belerang (sulfur) granular atau pupuk ferrous sulfat. Semprot tanah dengan larutan asam humat untuk membantu mengurai senyawa yang mengikat fosfor. Gunakan mulsa organik tebal untuk membantu menurunkan pH permukaan tanah secara alami.',
        },
        unsur_hara: {
            ideal: 'Kalium & Boron untuk Kualitas Rimpang',
            desc: 'Selain N, P, K, kunyit sangat membutuhkan boron (B) untuk memastikan translokasi gula dan karbohidrat ke rimpang berjalan lancar, yang langsung memengaruhi ukuran dan kandungan kurkumin rimpang. Kalsium (Ca) dibutuhkan untuk kekuatan dinding sel rimpang, magnesium (Mg) untuk klorofil, dan seng (Zn) untuk regulasi hormon pertumbuhan.',
            tips: 'Semprotkan larutan boraks (sodium boraks, 1–2 gram/liter) setiap 4–6 minggu untuk memenuhi kebutuhan boron. Gunakan pupuk NPK lengkap yang sudah mengandung unsur mikro (Ca, Mg, Fe, Zn, B) sebagai pemupukan rutin. Penambahan vermikompos juga sangat efektif untuk menyediakan unsur hara lengkap secara bertahap.',
        },

        link: 'https://drive.google.com/file/d/1rURQOB9awwi8IDHuhe1IJka4IDseDjsA/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/1lOHx8dJ5LaYIIiQ56DXTCh_R1ynPgPxW/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1VxYGewRHaa7StAPCHzYXpoN-YH7HvYKn/view?usp=drive_link',
};
