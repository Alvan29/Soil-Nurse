// ===================== PLANT DATA: BASIL =====================
// This file contains color detection data (HSV) and nutrition for Basil plants.
// Edit this file to adjust the color range or ideal nutrition values.

const PLANT_BASIL = {
    // --- Plant identity ---
    id: 'basil',
    plant: 'Basil',
    color: '#3a9c4e',
    icon: 'leaf',

    // --- HSV ranges for test strip indicator color detection ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - blue-purple color on the strip (basil needs medium-high N)
        n: { hMin: 200, hMax: 270, sMin: 35, sMax: 100, vMin: 25, vMax: 72 },
        // P (Phosphorus) - orange-red color on the strip
        p: { hMin: 0, hMax: 32, sMin: 45, sMax: 100, vMin: 42, vMax: 88 },
        // K (Potassium) - yellow color on the strip
        k: { hMin: 42, hMax: 72, sMin: 38, sMax: 100, vMin: 48, vMax: 93 },
        // pH - green color (ideal pH for basil is ~6.0-7.0)
        ph: { hMin: 65, hMax: 148, sMin: 28, sMax: 100, vMin: 38, vMax: 90 }
    },

    // --- N, P, K (%) and pH reference values for matching ---
    n: 65,
    p: 55,
    k: 60,
    ph: 6.5,

    // --- Reasons & tips ---
    reason: 'Basil grows well in fertile soil with sufficient nitrogen and a pH close to neutral.',
    guide: 'How to plant basil?',
    tips: 'Plant in an area that gets 6-8 hours of sunlight per day, water regularly but avoid waterlogging, and prune flowers as soon as possible so leaves continue to grow densely.',

    // --- Nutrition details (for nutrition modal) ---
    nutri: {
        n: {
            ideal: '60-70%',
            desc: 'Nitrogen (N) is the most crucial nutrient for basil because the harvested part is the leaves. N supports the growth of broad, deep green, and strongly scented leaves. Nitrogen deficiency causes pale, small, and odorless leaves.',
            tips: 'Fertilize with liquid compost or manure every 2-3 weeks. If using chemical fertilizer, choose diluted urea (1-2 grams/liter) and apply it to the growing medium, not the leaves.',
        },
        p: {
            ideal: '50-60%',
            desc: 'Phosphorus (P) supports the development of strong basil roots and the formation of many lateral roots. Healthy roots allow the plant to absorb water and nutrients more efficiently, especially during the dry season.',
            tips: 'Mix natural phosphate fertilizer (rock phosphate) into the growing medium during preparation. For potted plants, use slow-release fertilizer containing phosphorus so nutrients are available gradually.',
        },
        k: {
            ideal: '55-65%',
            desc: 'Potassium (K) increases the production of essential oils in basil leaves responsible for its distinct aroma. Additionally, potassium strengthens the plant\'s resistance to wilt disease and environmental stress conditions.',
            tips: 'Use rice husk ash or potassium sulfate fertilizer as a natural source of potassium. Avoid excessive potassium application as it can inhibit the absorption of magnesium and calcium.',
        },
        ph: {
            ideal: '6.0 - 7.5',
            desc: 'Basil is tolerant to a fairly wide pH range (6.0-7.0). Under these conditions, all nutrients are well available. A pH below 6.0 causes calcium and magnesium deficiency, while a pH above 7.0 inhibits the absorption of iron and manganese.',
            tips: 'Mix mature compost or vermicompost into the soil to keep the pH stable in the ideal range. Perform a soil pH test every 2-3 months.',
        },
        ph_kurang: {
            ideal: 'pH < 6.0 (Too Acidic)',
            desc: 'At a pH that is too acidic, basil experiences aluminum toxicity which damages the root tips, as well as calcium and magnesium deficiency. Visible symptoms include smaller leaves, browning leaf edges, and stunted growth even after fertilization.',
            tips: 'Gradually add agricultural lime (CaCO₃) or dolomite lime to the growing medium and mix well. For pots, replace some of the medium with a mixture containing mature compost to raise the pH organically.',
        },
        ph_lebih: {
            ideal: 'pH > 7.0 (Too Alkaline)',
            desc: 'Alkaline soil locks up iron (Fe) and manganese (Mn) so they cannot be absorbed by basil. Young leaves appear yellowed with veins remaining green (interveinal chlorosis). Growth slows down and the plant is easily stressed during hot weather.',
            tips: 'Lower the pH by adding granular sulfur to the soil or watering with a dilute vinegar solution (adjust the vinegar pH). Use ammonium sulfate-based fertilizers which are acidic for routine fertilization.',
        },
        unsur_hara: {
            ideal: 'Micro Nutrients for Aroma & Leaf Health',
            desc: 'Besides N, P, and K, basil requires magnesium (Mg) for chlorophyll formation to keep leaves deep green, calcium (Ca) for cell wall strength, iron (Fe) for cellular respiration, and zinc (Zn) which plays a role in chlorophyll synthesis and growth hormones.',
            tips: 'Spray a complete foliar fertilizer containing Mg, Fe, and Zn every 2 weeks. Use a compost-based growing medium rich in natural micro nutrients to support the growth of healthy and aromatic leaves.',
        },

        link: 'https://drive.google.com/file/d/1r8dPMJuFrj-RlDXxX-JGAxzQzwaRG3YD/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/1nNFie5kQVgQ1k5injykIkYnYkOv8ToZF/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1z4cfOyEy-5I5EzN1lZg8391eatXCVSfj/view?usp=drive_link',
};
