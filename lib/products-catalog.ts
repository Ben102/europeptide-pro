export type CatalogProduct = {
  name: string;
  category: string;
  dosage: string;
  price: number;
  purity: string;
  description: string;
};

// Deterministic branded placeholder (dark slate + white product name)
export const productImage = (label: string): string =>
  `https://placehold.co/600x600/0f172a/ffffff/png?text=${encodeURIComponent(label)}&font=inter`;

// 100+ unique research peptide SKUs. Name + dosage combined ensures uniqueness.
export const CATALOG: CatalogProduct[] = [
  // === Healing & Recovery ===
  { name: 'BPC-157 (5mg)', category: 'Healing & Recovery', dosage: '5mg', price: 34.99, purity: '99.4%', description: 'BPC-157 is a 15-amino-acid peptide derived from a protective protein in the stomach. Research focuses on accelerated soft-tissue repair, tendon and ligament regeneration, and gut-lining integrity.' },
  { name: 'BPC-157 (10mg)', category: 'Healing & Recovery', dosage: '10mg', price: 59.99, purity: '99.4%', description: 'High-concentration BPC-157 for extended research protocols. Widely studied for its angiogenic, anti-inflammatory, and cytoprotective properties.' },
  { name: 'TB-500 (2mg)', category: 'Healing & Recovery', dosage: '2mg', price: 24.99, purity: '99.2%', description: 'Thymosin Beta-4 fragment investigated for cell migration, tissue remodeling, and wound repair pathways.' },
  { name: 'TB-500 (5mg)', category: 'Healing & Recovery', dosage: '5mg', price: 39.99, purity: '99.2%', description: 'Synthetic fragment of Thymosin Beta-4 studied for actin regulation, angiogenesis, and recovery in connective-tissue injury models.' },
  { name: 'TB-500 (10mg)', category: 'Healing & Recovery', dosage: '10mg', price: 69.99, purity: '99.2%', description: 'Research-grade TB-500 in extended vial format for long-cycle tissue-repair investigations.' },
  { name: 'GHK-Cu (50mg)', category: 'Healing & Recovery', dosage: '50mg', price: 42.99, purity: '99.4%', description: 'Copper-peptide complex researched for collagen synthesis, antioxidant signaling, and skin remodeling.' },
  { name: 'GHK-Cu (100mg)', category: 'Healing & Recovery', dosage: '100mg', price: 74.99, purity: '99.4%', description: 'Extended-volume GHK-Cu for prolonged dermal research protocols.' },
  { name: 'GHK-Cu (200mg)', category: 'Healing & Recovery', dosage: '200mg', price: 129.99, purity: '99.4%', description: 'Laboratory bulk vial of GHK-Cu for multi-experiment research.' },
  { name: 'KPV (5mg)', category: 'Healing & Recovery', dosage: '5mg', price: 37.99, purity: '99.0%', description: 'C-terminal tripeptide of α-MSH investigated for anti-inflammatory action and gut-barrier support.' },
  { name: 'Pentosan Polysulfate (100mg)', category: 'Healing & Recovery', dosage: '100mg', price: 54.99, purity: '99.0%', description: 'Semi-synthetic glycosaminoglycan studied in joint-cartilage and bladder-lining research.' },
  { name: 'Larazotide (5mg)', category: 'Healing & Recovery', dosage: '5mg', price: 49.99, purity: '98.5%', description: 'Zonulin antagonist investigated for tight-junction regulation and intestinal permeability research.' },
  { name: 'ARA-290 (5mg)', category: 'Healing & Recovery', dosage: '5mg', price: 62.99, purity: '99.0%', description: 'Cibinetide — 11-aa peptide of erythropoietin studied for tissue protection and neuropathic inflammation.' },
  { name: 'VIP (5mg)', category: 'Healing & Recovery', dosage: '5mg', price: 69.99, purity: '98.5%', description: 'Vasoactive Intestinal Peptide researched for vasodilation, immune modulation, and neuro-inflammatory protocols.' },

  // === Weight Loss & Metabolic ===
  { name: 'Semaglutide (2mg)', category: 'Weight Loss', dosage: '2mg', price: 44.99, purity: '99.8%', description: 'Long-acting GLP-1 receptor agonist studied for glycemic regulation and appetite pathways.' },
  { name: 'Semaglutide (5mg)', category: 'Weight Loss', dosage: '5mg', price: 89.99, purity: '99.8%', description: 'GLP-1 analog extensively researched for body-weight modulation, insulin sensitivity, and cardiovascular endpoints.' },
  { name: 'Semaglutide (10mg)', category: 'Weight Loss', dosage: '10mg', price: 149.99, purity: '99.8%', description: 'Bulk-volume Semaglutide for extended GLP-1 research cycles and dose-response studies.' },
  { name: 'Tirzepatide (5mg)', category: 'Weight Loss', dosage: '5mg', price: 79.99, purity: '99.7%', description: 'Dual GIP / GLP-1 receptor agonist researched for synergistic metabolic regulation.' },
  { name: 'Tirzepatide (10mg)', category: 'Weight Loss', dosage: '10mg', price: 119.99, purity: '99.7%', description: 'Next-generation incretin mimetic combining GIP and GLP-1 activity.' },
  { name: 'Tirzepatide (15mg)', category: 'Weight Loss', dosage: '15mg', price: 169.99, purity: '99.7%', description: 'High-dose Tirzepatide for extended dual-agonist research.' },
  { name: 'Tirzepatide (30mg)', category: 'Weight Loss', dosage: '30mg', price: 299.99, purity: '99.7%', description: 'Research bulk vial of Tirzepatide — ideal for institutions and pharmacology labs.' },
  { name: 'Retatrutide (5mg)', category: 'Weight Loss', dosage: '5mg', price: 129.99, purity: '99.5%', description: 'Triple agonist targeting GLP-1, GIP, and glucagon receptors. Cutting-edge peptide for industry-leading lipid research.' },
  { name: 'Retatrutide (10mg)', category: 'Weight Loss', dosage: '10mg', price: 229.99, purity: '99.5%', description: 'Novel tri-agonist at the frontier of obesity research.' },
  { name: 'Liraglutide (5mg)', category: 'Weight Loss', dosage: '5mg', price: 64.99, purity: '99.5%', description: 'Daily-use GLP-1 receptor agonist. Classic comparator peptide in glucose and appetite research.' },
  { name: 'Cagrilintide (5mg)', category: 'Weight Loss', dosage: '5mg', price: 84.99, purity: '99.0%', description: 'Long-acting amylin analog studied alongside GLP-1 agonists for additive satiety.' },
  { name: 'Cagrilintide (10mg)', category: 'Weight Loss', dosage: '10mg', price: 149.99, purity: '99.0%', description: 'Bulk amylin analog vial for combination-protocol research.' },
  { name: 'Survodutide (10mg)', category: 'Weight Loss', dosage: '10mg', price: 189.99, purity: '99.0%', description: 'Dual GLP-1 / glucagon receptor agonist researched for liver fat and metabolic syndrome endpoints.' },
  { name: 'AOD-9604 (5mg)', category: 'Weight Loss', dosage: '5mg', price: 39.99, purity: '99.2%', description: 'C-terminal HGH fragment (176-191 analog) researched for lipolysis without diabetogenic effects.' },
  { name: 'AOD-9604 (10mg)', category: 'Weight Loss', dosage: '10mg', price: 69.99, purity: '99.2%', description: 'High-volume AOD-9604 for extended fat-metabolism research.' },
  { name: 'MOTS-c (5mg)', category: 'Weight Loss', dosage: '5mg', price: 54.99, purity: '99.1%', description: 'Mitochondrial-derived peptide studied for insulin sensitivity and AMPK activation.' },
  { name: 'MOTS-c (10mg)', category: 'Weight Loss', dosage: '10mg', price: 89.99, purity: '99.1%', description: 'Extended MOTS-c vial for longitudinal mitochondrial-function research.' },
  { name: '5-Amino-1MQ (50mg)', category: 'Weight Loss', dosage: '50mg', price: 59.99, purity: '99.0%', description: 'Selective NNMT inhibitor researched for white-adipose metabolism and body-composition models.' },
  { name: 'SLU-PP-332 (10mg)', category: 'Weight Loss', dosage: '10mg', price: 79.99, purity: '98.5%', description: 'ERR agonist investigated as an exercise mimetic.' },
  { name: 'Adipotide (10mg)', category: 'Weight Loss', dosage: '10mg', price: 69.99, purity: '98.0%', description: 'Prohibitin-targeted peptide studied for selective adipose vasculature effects.' },
  { name: 'HGH Fragment 176-191 (2mg)', category: 'Weight Loss', dosage: '2mg', price: 24.99, purity: '99.2%', description: 'C-terminal HGH fragment researched for targeted lipolysis without growth-factor signaling.' },
  { name: 'HGH Fragment 176-191 (5mg)', category: 'Weight Loss', dosage: '5mg', price: 44.99, purity: '99.2%', description: 'Extended HGH-Frag vial for prolonged adipose-metabolism research.' },

  // === Muscle Growth & GH Secretagogues ===
  { name: 'CJC-1295 DAC (2mg)', category: 'Muscle Growth', dosage: '2mg', price: 29.99, purity: '99.1%', description: 'GHRH analog with Drug Affinity Complex — extended half-life for sustained GH amplification.' },
  { name: 'CJC-1295 DAC (5mg)', category: 'Muscle Growth', dosage: '5mg', price: 64.99, purity: '99.1%', description: 'Long-acting GHRH analog in bulk vial format for multi-week GH-axis research.' },
  { name: 'CJC-1295 No DAC (2mg)', category: 'Muscle Growth', dosage: '2mg', price: 27.99, purity: '99.1%', description: 'Short half-life GHRH analog (Mod GRF 1-29) studied for pulse-aligned GH secretion.' },
  { name: 'CJC-1295 No DAC (5mg)', category: 'Muscle Growth', dosage: '5mg', price: 59.99, purity: '99.1%', description: 'Bulk Mod GRF 1-29 for research protocols requiring endogenous-like GH pulses.' },
  { name: 'Ipamorelin (2mg)', category: 'Muscle Growth', dosage: '2mg', price: 22.99, purity: '99.5%', description: 'Selective GH secretagogue studied for clean GH release without cortisol elevation.' },
  { name: 'Ipamorelin (5mg)', category: 'Muscle Growth', dosage: '5mg', price: 32.99, purity: '99.5%', description: 'Pentapeptide ghrelin agonist — the benchmark clean secretagogue for GH-axis research.' },
  { name: 'Ipamorelin (10mg)', category: 'Muscle Growth', dosage: '10mg', price: 54.99, purity: '99.5%', description: 'Extended Ipamorelin vial. Widely paired with CJC-1295 in secretagogue research.' },
  { name: 'Sermorelin (2mg)', category: 'Muscle Growth', dosage: '2mg', price: 29.99, purity: '99.3%', description: 'GHRH 1-29 analog studied for physiologic GH release and diagnostic stimulation.' },
  { name: 'Sermorelin (5mg)', category: 'Muscle Growth', dosage: '5mg', price: 54.99, purity: '99.3%', description: 'Foundational GHRH analog for natural GH rhythm and IGF-1 response research.' },
  { name: 'Tesamorelin (2mg)', category: 'Muscle Growth', dosage: '2mg', price: 49.99, purity: '99.4%', description: 'Stabilized GHRH analog researched for visceral-adipose reduction and metabolic indicators.' },
  { name: 'Tesamorelin (5mg)', category: 'Muscle Growth', dosage: '5mg', price: 94.99, purity: '99.4%', description: 'Potent GHRH analog in extended vial — studied for lipodystrophy protocols.' },
  { name: 'GHRP-2 (5mg)', category: 'Muscle Growth', dosage: '5mg', price: 28.99, purity: '99.1%', description: 'Ghrelin-receptor agonist with strong GH-release amplitude.' },
  { name: 'GHRP-2 (10mg)', category: 'Muscle Growth', dosage: '10mg', price: 49.99, purity: '99.1%', description: 'High-volume GHRP-2 for dose-response secretagogue research.' },
  { name: 'GHRP-6 (5mg)', category: 'Muscle Growth', dosage: '5mg', price: 26.99, purity: '99.0%', description: 'Ghrelin mimetic — increases GH release with notable appetite stimulation.' },
  { name: 'GHRP-6 (10mg)', category: 'Muscle Growth', dosage: '10mg', price: 46.99, purity: '99.0%', description: 'Extended GHRP-6 for appetite-pathway research.' },
  { name: 'Hexarelin (2mg)', category: 'Muscle Growth', dosage: '2mg', price: 34.99, purity: '99.2%', description: 'Potent hexapeptide secretagogue with cardioprotective signaling research interest.' },
  { name: 'Hexarelin (5mg)', category: 'Muscle Growth', dosage: '5mg', price: 59.99, purity: '99.2%', description: 'High-affinity ghrelin receptor agonist — GH, cardiac, and neuroprotective models.' },
  { name: 'IGF-1 LR3 (1mg)', category: 'Muscle Growth', dosage: '1mg', price: 89.99, purity: '98.5%', description: 'Long-range IGF-1 analog with extended half-life. Researched for hypertrophy signaling.' },
  { name: 'IGF-1 DES (1mg)', category: 'Muscle Growth', dosage: '1mg', price: 94.99, purity: '98.5%', description: 'Truncated IGF-1 variant with localized, high-potency action.' },
  { name: 'MGF (2mg)', category: 'Muscle Growth', dosage: '2mg', price: 79.99, purity: '98.5%', description: 'Mechano Growth Factor — IGF-1 splice variant for satellite-cell activation research.' },
  { name: 'PEG-MGF (2mg)', category: 'Muscle Growth', dosage: '2mg', price: 89.99, purity: '98.5%', description: 'PEGylated MGF with extended systemic half-life for prolonged anabolic research.' },
  { name: 'Follistatin-344 (1mg)', category: 'Muscle Growth', dosage: '1mg', price: 119.99, purity: '98.0%', description: 'Myostatin-binding protein investigated for muscle hypertrophy research.' },
  { name: 'Follistatin-315 (1mg)', category: 'Muscle Growth', dosage: '1mg', price: 119.99, purity: '98.0%', description: 'Circulating Follistatin isoform studied for systemic myostatin modulation.' },
  { name: 'MK-677 (25mg × 60 caps)', category: 'Muscle Growth', dosage: '25mg × 60 caps', price: 64.99, purity: '99.0%', description: 'Oral ghrelin mimetic (Ibutamoren) — non-peptide GH secretagogue.' },

  // === Anti-Aging & Longevity ===
  { name: 'Epitalon (10mg)', category: 'Anti-Aging', dosage: '10mg', price: 45.99, purity: '99.3%', description: 'Synthetic tetrapeptide based on pineal epithalamin. Researched for telomerase activation.' },
  { name: 'Epitalon (50mg)', category: 'Anti-Aging', dosage: '50mg', price: 129.99, purity: '99.3%', description: 'Bulk Epitalon vial for long-cycle longevity research.' },
  { name: 'Epitalon (100mg)', category: 'Anti-Aging', dosage: '100mg', price: 219.99, purity: '99.3%', description: 'Institutional-volume Epitalon for longevity and chronobiology research.' },
  { name: 'FOXO4-DRI (5mg)', category: 'Anti-Aging', dosage: '5mg', price: 149.99, purity: '98.0%', description: 'Senolytic peptide designed to disrupt the FOXO4–p53 complex.' },
  { name: 'NAD+ (500mg)', category: 'Anti-Aging', dosage: '500mg', price: 89.99, purity: '99.5%', description: 'Nicotinamide Adenine Dinucleotide for sirtuin-pathway and DNA-repair research.' },
  { name: 'NAD+ (750mg)', category: 'Anti-Aging', dosage: '750mg', price: 119.99, purity: '99.5%', description: 'High-dose NAD+ vial for extended cellular-energy research.' },
  { name: 'SS-31 / Elamipretide (10mg)', category: 'Anti-Aging', dosage: '10mg', price: 169.99, purity: '99.0%', description: 'Cardiolipin-targeted mitochondrial peptide researched for bioenergetics.' },
  { name: 'GDF-11 (1mg)', category: 'Anti-Aging', dosage: '1mg', price: 189.99, purity: '97.5%', description: 'Circulating growth/differentiation factor studied for systemic aging.' },
  { name: 'Humanin (10mg)', category: 'Anti-Aging', dosage: '10mg', price: 84.99, purity: '98.5%', description: 'Mitochondrial-encoded peptide researched for cytoprotection and insulin sensitivity.' },
  { name: 'Humanin-G (5mg)', category: 'Anti-Aging', dosage: '5mg', price: 99.99, purity: '98.5%', description: 'Potent S14G-Humanin analog with enhanced receptor affinity.' },
  { name: 'Pinealon (20mg)', category: 'Anti-Aging', dosage: '20mg', price: 59.99, purity: '98.0%', description: 'Tri-peptide investigated for neuronal protection and oxidative-stress resilience.' },

  // === Cognitive Enhancement ===
  { name: 'Selank (5mg)', category: 'Cognitive Enhancement', dosage: '5mg', price: 34.99, purity: '99.0%', description: 'Synthetic heptapeptide derived from tuftsin — studied for anxiolytic signaling and BDNF.' },
  { name: 'Selank (10mg)', category: 'Cognitive Enhancement', dosage: '10mg', price: 59.99, purity: '99.0%', description: 'Extended Selank vial for neuroplasticity research.' },
  { name: 'N-Acetyl Selank (10mg)', category: 'Cognitive Enhancement', dosage: '10mg', price: 64.99, purity: '99.0%', description: 'Acetylated Selank with improved intranasal stability.' },
  { name: 'Semax (5mg)', category: 'Cognitive Enhancement', dosage: '5mg', price: 39.99, purity: '99.0%', description: 'ACTH(4-10) analog researched for BDNF/NGF upregulation and neurogenesis.' },
  { name: 'Semax (10mg)', category: 'Cognitive Enhancement', dosage: '10mg', price: 69.99, purity: '99.0%', description: 'Extended Semax vial for cognitive-enhancement research.' },
  { name: 'N-Acetyl Semax (10mg)', category: 'Cognitive Enhancement', dosage: '10mg', price: 74.99, purity: '99.0%', description: 'Acetylated Semax with enhanced half-life and intranasal bioavailability.' },
  { name: 'P21 (10mg)', category: 'Cognitive Enhancement', dosage: '10mg', price: 129.99, purity: '98.0%', description: 'Neurogenic peptide derivative of CNTF investigated for hippocampal neurogenesis.' },
  { name: 'Dihexa (15mg)', category: 'Cognitive Enhancement', dosage: '15mg', price: 139.99, purity: '98.0%', description: 'HGF/c-Met activator — orally active peptide researched for dendritic spinogenesis.' },
  { name: 'Cerebrolysin (5ml × 5)', category: 'Cognitive Enhancement', dosage: '5ml × 5', price: 89.99, purity: 'Pharma-grade', description: 'Porcine-derived neuropeptide fraction researched for neurotrophic support.' },
  { name: 'DSIP (5mg)', category: 'Cognitive Enhancement', dosage: '5mg', price: 29.99, purity: '98.5%', description: 'Delta Sleep-Inducing Peptide investigated for slow-wave sleep and HPA-axis modulation.' },

  // === Immune Support ===
  { name: 'Thymosin Alpha-1 (5mg)', category: 'Immune Support', dosage: '5mg', price: 54.99, purity: '99.2%', description: '28-aa thymic peptide researched for T-cell maturation and antiviral response.' },
  { name: 'Thymosin Alpha-1 (10mg)', category: 'Immune Support', dosage: '10mg', price: 99.99, purity: '99.2%', description: 'Extended TA-1 vial for long-cycle immunomodulation research.' },
  { name: 'Thymulin (10mg)', category: 'Immune Support', dosage: '10mg', price: 74.99, purity: '98.5%', description: 'Zinc-dependent thymic nonapeptide investigated for T-cell differentiation.' },
  { name: 'Thymalin (20mg)', category: 'Immune Support', dosage: '20mg', price: 64.99, purity: '98.0%', description: 'Thymic peptide extract researched for immune regulation and geroprotective endpoints.' },
  { name: 'LL-37 (5mg)', category: 'Immune Support', dosage: '5mg', price: 69.99, purity: '98.5%', description: 'Human cathelicidin-derived antimicrobial peptide researched for innate immunity.' },
  { name: 'LL-37 (10mg)', category: 'Immune Support', dosage: '10mg', price: 119.99, purity: '98.5%', description: 'Extended LL-37 vial for broader antimicrobial research.' },

  // === Sexual Health ===
  { name: 'PT-141 / Bremelanotide (10mg)', category: 'Reproductive Health', dosage: '10mg', price: 35.99, purity: '99.2%', description: 'Melanocortin-4 receptor agonist researched for CNS pathways underlying sexual arousal.' },
  { name: 'PT-141 / Bremelanotide (20mg)', category: 'Reproductive Health', dosage: '20mg', price: 64.99, purity: '99.2%', description: 'Extended PT-141 vial for long-cycle MC4R research.' },
  { name: 'Kisspeptin-10 (5mg)', category: 'Reproductive Health', dosage: '5mg', price: 79.99, purity: '98.5%', description: 'Neuropeptide regulator of the HPG axis — researched for GnRH pulsatility.' },
  { name: 'Gonadorelin (10mg)', category: 'Reproductive Health', dosage: '10mg', price: 49.99, purity: '99.0%', description: 'Synthetic GnRH decapeptide studied for LH/FSH pulse stimulation.' },
  { name: 'HCG (5000iu)', category: 'Reproductive Health', dosage: '5000iu', price: 34.99, purity: 'Pharma-grade', description: 'Human Chorionic Gonadotropin researched for LH-receptor activation.' },
  { name: 'Oxytocin (5mg)', category: 'Reproductive Health', dosage: '5mg', price: 44.99, purity: '99.0%', description: 'Nonapeptide researched for social-bonding and prosocial-behavior neuroscience.' },

  // === Tanning / Pigmentation ===
  { name: 'Melanotan I (10mg)', category: 'Tanning', dosage: '10mg', price: 49.99, purity: '99.5%', description: 'Afamelanotide — α-MSH analog studied for photoprotection and UV-independent melanogenesis.' },
  { name: 'Melanotan II (10mg)', category: 'Tanning', dosage: '10mg', price: 24.99, purity: '99.6%', description: 'Non-selective melanocortin agonist researched for melanogenesis and MC-receptor signaling.' },
  { name: 'Melanotan II (20mg)', category: 'Tanning', dosage: '20mg', price: 39.99, purity: '99.6%', description: 'Extended Melanotan II vial for long-cycle pigmentation research.' },

  // === Skin & Beauty (categorized as Anti-Aging) ===
  { name: 'Matrixyl (10mg)', category: 'Anti-Aging', dosage: '10mg', price: 39.99, purity: '98.5%', description: 'Palmitoyl Pentapeptide-4 (Pal-KTTKS) researched for collagen I & III synthesis.' },
  { name: 'Argireline (10mg)', category: 'Anti-Aging', dosage: '10mg', price: 34.99, purity: '98.5%', description: 'Acetyl Hexapeptide-8 studied for SNAP-25 modulation and expression-wrinkle research.' },
  { name: 'SNAP-8 (10mg)', category: 'Anti-Aging', dosage: '10mg', price: 44.99, purity: '98.5%', description: 'Octapeptide-3 — extended Argireline analog researched for enhanced topical SNARE inhibition.' },
  { name: 'SYN-COLL (10mg)', category: 'Anti-Aging', dosage: '10mg', price: 49.99, purity: '98.5%', description: 'Palmitoyl Tripeptide-5 (TGF-β mimetic) researched for collagen biosynthesis.' },

  // === Accessories ===
  { name: 'Bacteriostatic Water (30ml)', category: 'Accessories', dosage: '30ml', price: 9.99, purity: 'USP', description: 'Sterile water with 0.9% benzyl alcohol. Standard solvent for peptide reconstitution.' },
  { name: 'Bacteriostatic Water (10ml × 5)', category: 'Accessories', dosage: '10ml × 5', price: 19.99, purity: 'USP', description: 'Multi-pack of 10 ml Bac-Water vials.' },
  { name: 'Insulin Syringes (100 ct, 1ml)', category: 'Accessories', dosage: '100 ct', price: 17.99, purity: 'Medical-grade', description: 'Single-use 29G × 1 ml insulin syringes. Sterile, individually packaged.' },
  { name: 'Insulin Syringes (100 ct, 0.5ml)', category: 'Accessories', dosage: '100 ct', price: 16.99, purity: 'Medical-grade', description: 'Low-volume 0.5 ml syringes for fractional peptide research dosing.' },
  { name: 'Alcohol Prep Pads (200 ct)', category: 'Accessories', dosage: '200 ct', price: 6.99, purity: '70% IPA', description: 'Sterile 70% isopropyl alcohol prep pads for vial-top sanitation.' },
  { name: 'Peptide Calculator Card', category: 'Accessories', dosage: 'Card', price: 3.99, purity: 'N/A', description: 'Laminated reconstitution-dose reference card.' },
  { name: 'Sharps Container (1L)', category: 'Accessories', dosage: '1 L', price: 8.99, purity: 'FDA-listed', description: 'Puncture-resistant sharps disposal container.' },
  { name: 'Peptide Storage Vial (2ml, 10 ct)', category: 'Accessories', dosage: '10 ct', price: 12.99, purity: 'Lab-grade', description: 'Amber borosilicate glass vials with butyl stoppers for peptide storage.' },

  // === Research Blends ===
  { name: 'Follistatin + BPC Blend (5mg)', category: 'Muscle Growth', dosage: '5mg blend', price: 99.99, purity: '98.0%', description: 'Research blend combining Follistatin-344 and BPC-157.' },
  { name: 'GHK-Cu + Matrixyl Blend (50mg)', category: 'Anti-Aging', dosage: '50mg blend', price: 69.99, purity: '98.5%', description: 'Dual dermal-remodeling research blend.' },
  { name: 'CJC-1295 + Ipamorelin Blend (5mg)', category: 'Muscle Growth', dosage: '5mg blend', price: 54.99, purity: '99.0%', description: 'Classic combo vial for synergistic GHRH + ghrelin-receptor research.' },
  { name: 'Semaglutide + Cagrilintide Blend (10mg)', category: 'Weight Loss', dosage: '10mg blend', price: 139.99, purity: '99.0%', description: 'Next-gen CagriSema-style research blend combining GLP-1 with amylin.' },
  { name: 'BPC-157 + TB-500 Blend (10mg)', category: 'Healing & Recovery', dosage: '10mg blend', price: 79.99, purity: '99.2%', description: 'Dual regenerative-peptide research blend.' },
];
