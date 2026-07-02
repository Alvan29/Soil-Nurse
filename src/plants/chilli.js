// ===================== PLANT DATA: CHILLI =====================
// This file contains color detection data (HSV) and nutrition for Chilli plants.
// Edit this file to adjust the color range or ideal nutrition values.

const PLANT_CHILLI = {
    // --- Plant identity ---
    id: 'chilli',
    plant: 'Chilli',
    color: '#dd1f2f',
    icon: 'chilli',

    // --- HSV ranges for test strip indicator color detection ---
    // Hue: 0-360, Saturation: 0-100, Value: 0-100
    hsvRange: {
        // N (Nitrogen) - dark blue/purple color on the strip
        n: { hMin: 220, hMax: 280, sMin: 40, sMax: 100, vMin: 20, vMax: 70 },
        // P (Phosphorus) - orange/red color on the strip
        p: { hMin: 0, hMax: 30, sMin: 50, sMax: 100, vMin: 40, vMax: 90 },
        // K (Potassium) - yellow color on the strip
        k: { hMin: 40, hMax: 70, sMin: 40, sMax: 100, vMin: 50, vMax: 95 },
        // pH - green/yellow color (ideal pH for chilli is ~6.0-6.8)
        ph: { hMin: 60, hMax: 140, sMin: 30, sMax: 100, vMin: 40, vMax: 90 }
    },

    // --- N, P, K (%) and pH reference values for matching ---
    n: 72,
    p: 66,
    k: 81,
    ph: 6.4,

    // --- Reasons & tips ---
    reason: 'Fairly high NPK and slightly acidic pH, suitable for chilli which requires fertile soil.',
    guide: 'How to plant chilli?',
    tips: 'Plant in an area with full sun, provide mature compost, water regularly, and add mulch to stabilize the soil.',

    // --- Nutrition details (for nutrition modal) ---
    nutri: {
        n: {
            ideal: '70-80%',
            desc: 'Nitrogen (N) is very important for the growth of chilli leaves and stems. Nitrogen deficiency causes leaves to yellow and growth to be stunted, while excess N makes the plant too leafy but with minimal fruit.',
            tips: 'Add urea fertilizer or nitrogen-rich compost gradually every 2 weeks starting from early vegetative growth.',
        },
        p: {
            ideal: '60-70%',
            desc: 'Phosphorus (P) supports the development of a strong root system and heavy flowering. Chilli needs sufficient phosphorus to be able to produce fruit optimally from the first flowering season.',
            tips: 'Use SP-36 fertilizer or rock phosphate during land preparation. Reapply when flowering begins to support fruiting.',
        },
        k: {
            ideal: '75-85%',
            desc: 'Potassium (K) increases chilli resistance to disease attacks, drought, and improves the color quality and taste of the fruit. Potassium also strengthens plant cell walls.',
            tips: 'Apply KCl fertilizer or wood ash regularly, especially during the fruit formation and ripening phases.',
        },
        ph: {
            ideal: '5.5 - 6.5',
            desc: 'Soil pH greatly affects the availability of all nutrients. Chilli grows optimally at a slightly acidic to neutral pH (6.0-6.8). Outside this range, some nutrients become unavailable even if fertilized.',
            tips: 'Perform a soil pH test before planting. Adjust with dolomite lime (if too acidic) or sulfur (if too alkaline).',
        },
        ph_kurang: {
            ideal: 'pH < 6.0 (Too Acidic)',
            desc: 'When soil pH is below 6.0, chilli experiences aluminum and manganese toxicity, as well as calcium and magnesium deficiency. Leaves appear chlorotic (yellowing), leaf edges dry out, and root growth is severely stunted.',
            tips: 'Add dolomite lime (CaMg(CO₃)₂) at 1-2 tons/ha and mix to a depth of 20 cm. Leave for 2-4 weeks before planting so the pH stabilizes. Re-measure before planting.',
        },
        ph_lebih: {
            ideal: 'pH > 6.8 (Too Alkaline)',
            desc: 'At a pH above 6.8, micro nutrients like iron (Fe), manganese (Mn), and zinc (Zn) precipitate so they cannot be absorbed by chilli. Symptoms that appear are yellowing of young leaves with veins remaining green (interveinal chlorosis).',
            tips: 'Lower the pH by adding elemental sulfur (S) or ammonium sulfate fertilizer. Applying compost or organic matter regularly also helps stabilize the pH naturally over the long term.',
        },
        unsur_hara: {
            ideal: 'Balanced Micro & Macro Nutrients',
            desc: 'Besides N, P, and K, chilli also needs calcium (Ca) to prevent blossom-end rot, magnesium (Mg) for chlorophyll formation, sulfur (S) for protein synthesis, and micro nutrients like iron (Fe), zinc (Zn), and boron (B) for flower and fruit formation.',
            tips: 'Spray foliar fertilizer containing Ca, Mg, and Zn every 2 weeks. Use a complete NPK fertilizer that already contains micro nutrients, or add micro fertilizer separately if deficiency symptoms are visible.',
        },

        link: 'https://drive.google.com/file/d/1OjtpGt1P2U3Fhd5szKtOj1xcfbJZ4apY/view?usp=drive_link'
    },

    preventionTips: 'https://drive.google.com/file/d/1wHRjoNAXG1cQFJadFhwpItOoCS1Lf4m0/view?usp=drive_link',
    Guidelines: 'https://drive.google.com/file/d/174ZK1SlqWx76GAQ3xsTX0Hl8WXzYzBKm/view?usp=drive_link',
};
