// ===================== PLANT DATA: ONION LEAVES =====================
// This file contains color detection data (HSV) and nutrition for Onion Leaves plants.
// Edit this file to adjust the color range or ideal nutrition values.

const PLANT_ONION = {
    // --- Plant identity ---
    id: 'onion_leaves',
    plant: 'Onion Leaves',
    color: '#6dab3c',
    icon: 'leaf',

    // --- HSV ranges for test strip indicator color detection ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - blue-purple color on the strip (onion leaves need high N)
        n: { hMin: 205, hMax: 265, sMin: 40, sMax: 100, vMin: 22, vMax: 70 },
        // P (Phosphorus) - orange-red color on the strip
        p: { hMin: 5, hMax: 30, sMin: 50, sMax: 100, vMin: 45, vMax: 90 },
        // K (Potassium) - yellow color on the strip
        k: { hMin: 40, hMax: 70, sMin: 40, sMax: 100, vMin: 50, vMax: 94 },
        // pH - green-yellow color (ideal pH for onion leaves is ~6.0-7.0)
        ph: { hMin: 60, hMax: 145, sMin: 30, sMax: 100, vMin: 40, vMax: 90 }
    },

    // --- N, P, K (%) and pH reference values for matching ---
    n: 68,
    p: 54,
    k: 62,
    ph: 6.5,

    // --- Reasons & tips ---
    reason: 'Onion leaves require high nitrogen and a neutral pH for fast and dense leaf growth.',
    guide: 'How to grow onion leaves?',
    tips: 'Plant in loose and well-drained soil, apply nitrogen fertilizer regularly, harvest by cutting leaves from the base and let them grow back for continuous harvest.',

    // --- Nutrition details (for nutrition modal) ---
    nutri: {
        n: {
            ideal: '65-75%',
            desc: 'Nitrogen (N) is the most important nutrient for onion leaves because the entire consumed part is the leaves and pseudostems. N promotes fast, thick, and fresh green leaf growth. N deficiency causes yellowing, thin leaves, and very slow growth.',
            tips: 'Apply urea fertilizer or balanced NPK fertilizer every 2 weeks. Water with liquid organic fertilizer such as liquid compost or liquid manure to support consistent leaf growth. Increase fertilization frequency during the active growing season.',
        },
        p: {
            ideal: '50-60%',
            desc: 'Phosphorus (P) supports the development of a strong and efficient onion leaf root system. Healthy roots allow the plant to absorb water and nutrients optimally, especially during extreme weather. Phosphorus also helps plant recovery after harvest and stimulates new shoot growth.',
            tips: 'Mix phosphate fertilizer (SP-36) into the soil during land preparation. For maintenance, water with liquid phosphate fertilizer solution every 5-6 weeks. Bokashi (fermented organic matter) application is also effective as an organic phosphorus source.',
        },
        k: {
            ideal: '58-68%',
            desc: 'Potassium (K) increases onion leaf resistance to late blight and fungal infections that commonly occur in humid environments. Potassium also strengthens cell turgor so leaves remain upright, fresh, and do not easily wilt during high temperatures.',
            tips: 'Apply potassium sulfate (K₂SO₄) fertilizer or rice husk ash as an organic potassium source. Water evenly and avoid waterlogging as it can reduce the effectiveness of potassium absorption by roots.',
        },
        ph: {
            ideal: '6.0 - 7.0',
            desc: 'Onion leaves grow optimally at a neutral to slightly acidic pH (6.0-7.0). In this range, nitrogen, phosphorus, and potassium are maximally available. A pH below 6.0 can cause aluminum toxicity, while a pH above 7.0 inhibits iron and zinc absorption.',
            tips: 'Test soil pH before planting and every 2 months. Use dolomite lime to raise the pH or sulfur fertilizer to lower it. Regular addition of mature compost helps keep the pH stable in the ideal range.',
        },
        ph_kurang: {
            ideal: 'pH < 6.0 (Too Acidic)',
            desc: 'At a pH that is too acidic, onion leaves experience aluminum (Al) and manganese (Mn) toxicity which inhibits calcium and magnesium absorption. As a result, leaves appear pale, leaf tips dry out (tip burn), and roots shorten so the plant cannot stand upright.',
            tips: 'Raise the pH by applying agricultural lime (CaCO₃) or dolomite lime at 1-2 tons/ha, mix to a depth of 15-20 cm. Leave for 2-3 weeks before planting. Re-measure the pH to ensure stability before planting.',
        },
        ph_lebih: {
            ideal: 'pH > 7.0 (Too Alkaline)',
            desc: 'Alkaline soil locks up iron (Fe), zinc (Zn), and manganese (Mn) so onion leaves cannot absorb these micro nutrients. Visible symptoms are interveinal chlorosis on young leaves, slow growth, and small leaves that are not deep green.',
            tips: 'Lower the pH with granular sulfur or ammonium sulfate fertilizer. Water the soil with humic acid solution which helps break down compounds that lock up micro nutrients. Avoid using high-calcium fertilizers that can worsen alkaline conditions.',
        },
        unsur_hara: {
            ideal: 'Calcium & Magnesium for Healthy Leaves',
            desc: 'Onion leaves highly need calcium (Ca) to prevent tip burn (leaf tips drying and blackening), which is a common problem for onion leaves in hot and humid environments. Magnesium (Mg) is needed for chlorophyll synthesis so leaves stay fresh green, while iron (Fe) and boron (B) support active cell division.',
            tips: 'Spray calcium chloride (CaCl₂ 0.3%) every week to prevent tip burn. Add magnesium sulfate (epsom salt, 10 g/liter) through watering every 3 weeks. Use complete foliar fertilizer containing all micro nutrients to support optimal leaf growth.',
        },

        link: 'https://drive.google.com/file/d/1wFuT-JLSO6ZSvITU9dtXE606H3vZD3_k/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/15V0Cc21G_32AhFjN2Q72w9tg4HWnjeHD/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1hdrYIH1eG3zhQmP6ELT6emzcFxT9gPEt/view?usp=drive_link',
};
