// ===================== PLANT DATA: MAKRUT LIME LEAVES =====================
// This file contains color detection data (HSV) and nutrition for Makrut Lime Leaves.
// Edit this file to adjust the color range or ideal nutrition values.

const PLANT_MAKRUT_LEAVES = {
    // --- Plant identity ---
    id: 'makrut_lime_leaves',
    plant: 'Makrut Lime Leaves',
    color: '#4a7c3f',
    icon: 'leaf',

    // --- HSV ranges for test strip indicator color detection ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - dark blue-purple color on the strip
        n: { hMin: 215, hMax: 275, sMin: 38, sMax: 100, vMin: 22, vMax: 68 },
        // P (Phosphorus) - orange color on the strip
        p: { hMin: 5, hMax: 33, sMin: 48, sMax: 100, vMin: 44, vMax: 90 },
        // K (Potassium) - yellow-orange color on the strip
        k: { hMin: 38, hMax: 68, sMin: 42, sMax: 100, vMin: 50, vMax: 94 },
        // pH - green color (ideal pH for makrut lime is ~5.5-6.5)
        ph: { hMin: 62, hMax: 140, sMin: 32, sMax: 100, vMin: 38, vMax: 88 }
    },

    // --- N, P, K (%) and pH reference values for matching ---
    n: 58,
    p: 52,
    k: 62,
    ph: 6.0,

    // --- Reasons & tips ---
    reason: 'Makrut lime leaves like fertile soil with a slightly acidic pH and good drainage.',
    guide: 'How to grow makrut lime leaves?',
    tips: 'Plant in a location that receives full sun, ensure pot or land drainage is very good, and do light pruning after harvest to stimulate new shoot growth.',

    // --- Nutrition details (for nutrition modal) ---
    nutri: {
        n: {
            ideal: '55-65%',
            desc: 'Nitrogen (N) is highly needed for the growth of dense and shiny green makrut lime leaves. Nitrogen deficiency causes yellowing of leaves (chlorosis), faster leaf drop, and a drastic decrease in leaf production. Excess N makes the plant susceptible to aphids and fungal attacks.',
            tips: 'Apply a balanced NPK fertilizer every month during the growing season. Add organic compost as mulch around the stem to release nitrogen slowly. Avoid high nitrogen fertilization before the dry season.',
        },
        p: {
            ideal: '48-58%',
            desc: 'Phosphorus (P) supports the development of a deep and extensive root system in makrut lime, which is crucial for water and nutrient absorption in the dry season. Phosphorus also plays a role in shoot formation and plant recovery after pruning.',
            tips: 'Mix phosphate fertilizer (SP-36 or TSP) into the planting hole. For routine care, water with liquid phosphate fertilizer solution every 6-8 weeks. Ensure ideal soil pH so phosphorus can be absorbed optimally.',
        },
        k: {
            ideal: '58-68%',
            desc: 'Potassium (K) strengthens makrut lime tree resistance to drought, pests, and fungal diseases. Potassium also improves leaf aroma quality by supporting essential oil production. K deficiency causes leaf edges to yellow and dry out.',
            tips: 'Apply potassium sulfate (K₂SO₄) fertilizer every 2 months. For potted plants, use slow-release fertilizer containing potassium so nutrient availability is more consistent. Rice husk ash or wood ash is also a good source of organic potassium.',
        },
        ph: {
            ideal: '5.5 - 6.5',
            desc: 'Makrut lime grows optimally in slightly acidic to neutral soil (5.5-6.5). A pH below 5.5 causes manganese toxicity and calcium deficiency, while a pH above 6.5 inhibits the absorption of iron and zinc which are important for chlorophyll synthesis.',
            tips: 'Test soil pH before planting and every 3 months. Add dolomite lime if the pH is too acidic, or sulfur if it is too alkaline. Regular application of mature compost helps maintain pH stability in the long term.',
        },
        ph_kurang: {
            ideal: 'pH < 5.5 (Too Acidic)',
            desc: 'At a pH below 5.5, makrut lime experiences aluminum and manganese toxicity which damages young root tips. As a result, the plant cannot absorb calcium and magnesium properly. Symptoms that appear are curling leaves, brown leaf edges, and very slow growth.',
            tips: 'Apply dolomite lime (CaMg(CO₃)₂) at 0.5-1 kg per tree, mix evenly with soil around the roots. Do this 4-6 weeks before the planting season. Avoid using fertilizers with acidic reactions like ammonium sulfate during the liming process.',
        },
        ph_lebih: {
            ideal: 'pH > 6.5 (Too Alkaline)',
            desc: 'Alkaline soil precipitates iron (Fe) and zinc (Zn) so they cannot be absorbed by makrut lime. A classic symptom is interveinal chlorosis on young leaves — leaves yellow with veins remaining green. Over time, leaves fall off and the tree weakens overall.',
            tips: 'Lower the pH with granular sulfur or ammonium sulfate fertilizer. Spray iron chelate (Fe-EDTA) solution or micro fertilizer on leaves as a quick solution to overcome chlorosis. Water with water containing humic acid to help dissolve precipitated minerals.',
        },
        unsur_hara: {
            ideal: 'Micro Nutrients for Aroma & Leaf Production',
            desc: 'Makrut lime requires high amounts of magnesium (Mg) to maintain deep green leaf color and chlorophyll production. Zinc (Zn) plays a role in leaf growth hormone formation, while iron (Fe) is needed for cellular respiration. Deficiency of these micro nutrients causes small, pale, and odorless leaves.',
            tips: 'Spray foliar fertilizer containing Mg, Fe, and Zn every 3 weeks during the active growing season. Water with magnesium sulfate solution (MgSO₄ or epsom salt, 10 grams/liter) every month to ensure sufficient magnesium, especially if leaves start to yellow.',
        },

        link: 'https://drive.google.com/file/d/1V2aol9nhyl8BmvrVWsVyTALel3RH2nEu/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/1T2s-dAXaYl3xRaPJ-gggJlDos3CcGy-P/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1H2gHUMbtkCDFDhvtY7MKl1d6wQVafAbh/view?usp=drive_link',
};
