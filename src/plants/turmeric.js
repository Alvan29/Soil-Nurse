// ===================== PLANT DATA: TURMERIC =====================
// This file contains color detection data (HSV) and nutrition for Turmeric plants.
// Edit this file to adjust the color range or ideal nutrition values.

const PLANT_TURMERIC = {
    // --- Plant identity ---
    id: 'turmeric',
    plant: 'Turmeric',
    color: '#e8a020',
    icon: 'corn',

    // --- HSV ranges for test strip indicator color detection ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - dark blue-purple color on the strip
        n: { hMin: 210, hMax: 272, sMin: 35, sMax: 100, vMin: 20, vMax: 68 },
        // P (Phosphorus) - orange color on the strip
        p: { hMin: 8, hMax: 35, sMin: 48, sMax: 100, vMin: 42, vMax: 88 },
        // K (Potassium) - yellow-orange color on the strip (turmeric needs high K)
        k: { hMin: 35, hMax: 65, sMin: 45, sMax: 100, vMin: 52, vMax: 96 },
        // pH - green-yellow color (ideal pH for turmeric is ~5.5-7.0)
        ph: { hMin: 58, hMax: 148, sMin: 25, sMax: 100, vMin: 38, vMax: 90 }
    },

    // --- N, P, K (%) and pH reference values for matching ---
    n: 55,
    p: 60,
    k: 72,
    ph: 6.2,

    // --- Reasons & tips ---
    reason: 'Turmeric grows well in loose soil with high potassium, sufficient phosphorus, and a slightly acidic pH.',
    guide: 'How to grow turmeric?',
    tips: 'Plant turmeric rhizomes 5-7 cm deep with the shoots facing upwards. Keep soil moisture consistent, provide thick organic mulch to maintain soil temperature, and avoid waterlogging so rhizomes do not rot.',

    // --- Nutrition details (for nutrition modal) ---
    nutri: {
        n: {
            ideal: '50-60%',
            desc: 'Nitrogen (N) supports the growth of dense turmeric leaves and pseudostems, which is important for photosynthesis and rhizome filling. Although turmeric\'s N requirement is not as high as leafy plants, N deficiency causes leaf yellowing and stunted rhizome formation.',
            tips: 'Apply urea fertilizer or mature cow manure every 4-6 weeks. Reduce nitrogen application towards the rhizome formation period (3-4 months after planting) so plant energy is diverted to rhizome development, not leaves.',
        },
        p: {
            ideal: '55-65%',
            desc: 'Phosphorus (P) is very crucial for the formation and enlargement of turmeric rhizomes. Phosphorus supports active cell division in the rhizome so it grows large, dense, and contains high curcumin. Phosphorus deficiency causes stunted and pale rhizomes.',
            tips: 'Mix TSP (Triple Super Phosphate) fertilizer or bone meal into the planting hole as basal fertilizer. Perform supplementary phosphate fertilization every 2 months with dilute SP-36 fertilizer watered around the root zone.',
        },
        k: {
            ideal: '68-80%',
            desc: 'Potassium (K) is the most important nutrient for the production of high-quality turmeric rhizomes. Potassium supports carbohydrate translocation from leaves to rhizomes, increases curcumin levels, and strengthens resistance to Fusarium wilt which often attacks turmeric.',
            tips: 'Apply potassium sulfate (K₂SO₄) or KCl fertilizer every 6-8 weeks. Increase the potassium dose when entering the rhizome formation phase (starting from the 3rd month). Rice husk ash or wood ash is also an excellent source of organic potassium for turmeric.',
        },
        ph: {
            ideal: '5.5 - 6.5',
            desc: 'Turmeric is tolerant to a fairly wide pH range (5.5-7.0), but grows most optimally at a slightly acidic pH (5.5-6.5). Under these conditions, phosphorus, potassium, and micro nutrients are well available to support rhizome development. A pH outside this range can significantly inhibit nutrient absorption.',
            tips: 'Perform soil pH testing before planting. Add mature compost at 2-3 kg per m² to keep soil pH stable while improving fertility. For acidic land, use dolomite lime gradually.',
        },
        ph_kurang: {
            ideal: 'pH < 5.5 (Too Acidic)',
            desc: 'At a pH below 5.5, turmeric experiences aluminum (Al³⁺) toxicity which damages root tips and inhibits rhizome formation. Calcium and magnesium become scarce, so the formed rhizomes are small, coarse-fibered, and have low curcumin content.',
            tips: 'Apply dolomite lime or agricultural lime at 1-2 tons/ha on the land, or 0.5 kg per planting hole for small scale. Mix evenly with the soil and leave for 3-4 weeks before planting. Add bokashi or organic fertilizer to speed up pH stabilization.',
        },
        ph_lebih: {
            ideal: 'pH > 7.0 (Too Alkaline)',
            desc: 'At a pH above 7.0, phosphorus reacts with calcium and becomes unavailable to turmeric, even though phosphorus is highly needed for rhizome enlargement. Micro nutrients like iron (Fe) and manganese (Mn) also precipitate. As a result, rhizomes grow slowly, are pale-colored, and are easily attacked by diseases.',
            tips: 'Lower the pH gradually with granular sulfur or ferrous sulfate fertilizer. Spray the soil with humic acid solution to help break down compounds that bind phosphorus. Use thick organic mulch to help lower the surface soil pH naturally.',
        },
        unsur_hara: {
            ideal: 'Potassium & Boron for Rhizome Quality',
            desc: 'Besides N, P, and K, turmeric highly needs boron (B) to ensure smooth translocation of sugar and carbohydrates to the rhizome, which directly affects rhizome size and curcumin content. Calcium (Ca) is needed for rhizome cell wall strength, magnesium (Mg) for chlorophyll, and zinc (Zn) for growth hormone regulation.',
            tips: 'Spray borax solution (sodium borate, 1-2 grams/liter) every 4-6 weeks to meet boron needs. Use a complete NPK fertilizer that already contains micro nutrients (Ca, Mg, Fe, Zn, B) for routine fertilization. The addition of vermicompost is also highly effective to provide complete nutrients gradually.',
        },

        link: 'https://drive.google.com/file/d/1rURQOB9awwi8IDHuhe1IJka4IDseDjsA/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/1lOHx8dJ5LaYIIiQ56DXTCh_R1ynPgPxW/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1VxYGewRHaa7StAPCHzYXpoN-YH7HvYKn/view?usp=drive_link',
};
