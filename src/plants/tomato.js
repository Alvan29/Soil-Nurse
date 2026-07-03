// ===================== PLANT DATA: TOMATO =====================
// This file contains color detection data (HSV) and nutrition for Tomato plants.
// Edit this file to adjust the color range or ideal nutrition values.

const PLANT_TOMATO = {
    // --- Plant identity ---
    id: 'tomato',
    plant: 'Tomato',
    color: '#e04435',
    icon: 'tomato',

    // --- HSV ranges for test strip indicator color detection ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - blue/blue-green color on the strip
        n: { hMin: 190, hMax: 260, sMin: 35, sMax: 100, vMin: 25, vMax: 75 },
        // P (Phosphorus) - orange/red-orange color on the strip
        p: { hMin: 5, hMax: 35, sMin: 45, sMax: 100, vMin: 45, vMax: 90 },
        // K (Potassium) - yellow/yellow-green color on the strip
        k: { hMin: 45, hMax: 75, sMin: 35, sMax: 100, vMin: 45, vMax: 95 },
        // pH - green color (ideal pH for tomato is ~6.2-6.8)
        ph: { hMin: 70, hMax: 145, sMin: 25, sMax: 100, vMin: 40, vMax: 88 }
    },

    // --- N, P, K (%) and pH reference values for matching ---
    n: 61,
    p: 58,
    k: 64,
    ph: 6.8,

    // --- Reasons & tips ---
    reason: 'A pH close to neutral and balanced nutrients support optimal tomato growth.',
    guide: 'How to plant tomato?',
    tips: 'Use stakes from the beginning, space plants 50-60 cm apart, regularly prune water shoots, and keep leaves dry to reduce the risk of fungal diseases.',

    // --- Nutrition details (for nutrition modal) ---
    nutri: {
        n: {
            ideal: '55-65%',
            desc: 'Nitrogen (N) supports balanced vegetative growth of tomatoes. Too much nitrogen makes the plant leafy but with few and pale fruits. Too little causes leaves to yellow and stunted growth.',
            tips: 'Use NPK 16-16-16 fertilizer at the beginning of planting. After entering the flowering phase, reduce nitrogen and increase potassium so fruit forms optimally.',
        },
        p: {
            ideal: '50-60%',
            desc: 'Phosphorus (P) plays an important role in flower formation, fruiting, and tomato root development. Phosphorus deficiency is characterized by reddish-purple leaves and stems, and slow flowering.',
            tips: 'Add bone meal or SP-36 fertilizer during land preparation. Reapply as a foliar spray when plants start showing signs of flowering.',
        },
        k: {
            ideal: '60-70%',
            desc: 'Potassium (K) improves the flavor, color, and shelf life of tomato fruits. Potassium also strengthens plant resistance to drought stress and diseases. K deficiency causes leaf scorch (drying leaf edges).',
            tips: 'Apply KCl or potassium sulfate fertilizer during the flowering and fruiting phases. Avoid excessive potassium as it can inhibit magnesium absorption.',
        },
        ph: {
            ideal: '6.2 - 6.8',
            desc: 'Tomatoes grow best at a neutral to slightly acidic pH (6.2-6.8). In this range, all nutrients are maximally available. Outside this range, the risk of calcium deficiency increases, triggering blossom-end rot.',
            tips: 'Perform soil pH tests regularly, at least every 2 months. Use dolomite lime to raise the pH or sulfur to lower it gradually.',
        },
        ph_kurang: {
            ideal: 'pH < 6.2 (Too Acidic)',
            desc: 'Soil that is too acidic makes tomatoes susceptible to manganese and aluminum toxicity. Calcium and magnesium become unavailable, triggering blossom-end rot and chlorosis in older leaves. Roots also become short and brittle.',
            tips: 'Apply dolomite lime (calcium-magnesium carbonate) at 1-1.5 tons/ha and incorporate into the soil to a depth of 20 cm. Wait at least 3 weeks before planting. Add calcium through foliar spraying of calcium chloride (CaCl₂) if symptoms have appeared.',
        },
        ph_lebih: {
            ideal: 'pH > 6.8 (Too Alkaline)',
            desc: 'At a pH above 6.8, the availability of iron (Fe), manganese (Mn), zinc (Zn), and boron (B) drops drastically. Tomatoes show interveinal chlorosis on young leaves (leaves yellow with green veins), slow growth, and reduced crop yield.',
            tips: 'Lower the pH with elemental sulfur (2-3 kg per 10 m²) or agricultural gypsum. Water with humic acid solution to help stabilize soil pH. Avoid excessive use of lime and choose ammonium-based fertilizers for routine fertilization.',
        },
        unsur_hara: {
            ideal: 'Macro & Micro Nutrient Balance',
            desc: 'Tomatoes highly need calcium (Ca) to prevent blossom-end rot, magnesium (Mg) as the core of chlorophyll, and boron (B) for fruit cell wall formation. Deficiency in any of these elements causes deformed, cracked, or rotten fruits even if the plant looks healthy.',
            tips: 'Spray calcium chloride (CaCl₂ 0.5%) once a week during the flowering phase. Use a complete foliar fertilizer containing Ca, Mg, Fe, Zn, and B. Ensure even watering to support calcium transport from roots to fruits.',
        },

        link: 'https://drive.google.com/file/d/1PnHM7XOcXug-ko5qStpE0Z9LKO3lducB/view?usp=drive_link'
    },
    preventionTips: 'https://drive.google.com/file/d/1VR__o--lqJp3ReKYdzsUNOxVPCSmynu6/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/1E900SOvB-K4DNehuRZOPaIouqrIC3HX4/view?usp=drive_link',
};
