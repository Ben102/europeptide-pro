export type CategoryMeta = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroImage: string;
  intro: string[]; // paragraphs — combined 300+ words of unique category copy
  focusKeywords: string[];
};

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: 'weight-loss',
    name: 'Weight Loss',
    title: 'Weight Loss Research Peptides — GLP-1, GIP, Dual & Triple Agonists',
    description: 'Research-grade GLP-1 agonists (Semaglutide, Liraglutide), dual GIP/GLP-1 (Tirzepatide), triple agonists (Retatrutide), amylin analogs (Cagrilintide), and metabolic modulators. ≥99% purity, EU lab tested.',
    heroImage: '/images/category-weight.svg',
    focusKeywords: ['weight loss peptides europe', 'glp-1 research peptides', 'semaglutide research', 'tirzepatide research peptide', 'retatrutide europe'],
    intro: [
      'The weight-loss and metabolic category covers the most intensely studied peptide class in modern endocrinology research. At its core are the incretin mimetics — peptides that replicate or potentiate the action of endogenous gut hormones (GLP-1, GIP, glucagon) responsible for glycemic control, satiety signaling, and lipid homeostasis.',
      'Researchers working in this domain typically investigate how single-agonist, dual-agonist, and triple-agonist compounds differentially affect body composition, insulin sensitivity, and cardiovascular markers. Semaglutide remains the classical GLP-1 comparator; Tirzepatide combines GIP and GLP-1 receptor activation for superior metabolic outcomes in preclinical and translational models; Retatrutide is the newest tri-agonist also targeting glucagon receptors.',
      'Beyond the incretin family, this category includes amylin analogs such as Cagrilintide — frequently researched alongside GLP-1 agonists for additive satiety effects — as well as targeted adipose-tissue modulators (5-Amino-1MQ, AOD-9604, Adipotide), mitochondrial regulators (MOTS-c), and exercise-mimetic ERR agonists (SLU-PP-332).',
      'All peptides are supplied as lyophilized powder in sealed vials, independently tested by European laboratories using HPLC and mass spectrometry, and shipped discreetly across the EU. For laboratory research use only.',
    ],
  },
  {
    slug: 'muscle-growth',
    name: 'Muscle Growth',
    title: 'Muscle Growth Research Peptides — GH Secretagogues, IGF-1, Follistatin',
    description: 'GHRH analogs (CJC-1295, Sermorelin, Tesamorelin), ghrelin-receptor agonists (Ipamorelin, GHRP-2/6, Hexarelin), IGF-1 variants, MGF, and myostatin inhibitors. EU lab-tested research peptides.',
    heroImage: '/images/category-muscle.svg',
    focusKeywords: ['muscle growth peptides', 'cjc-1295 ipamorelin research', 'igf-1 lr3 europe', 'follistatin peptide', 'gh secretagogue'],
    intro: [
      'Research into growth-hormone axis modulation and anabolic signaling is one of the longest-running areas of peptide science. This category consolidates the major tool compounds for studying the GH / IGF-1 / myostatin pathway in preclinical models.',
      'Growth-hormone-releasing hormone (GHRH) analogs — CJC-1295 (with or without DAC), Sermorelin, and Tesamorelin — act at pituitary GHRH receptors to amplify endogenous pulsatile GH release. Pair these with ghrelin-receptor agonists (Ipamorelin, GHRP-2, GHRP-6, Hexarelin) and you can investigate synergistic secretagogue protocols that match or exceed the kinetics of exogenous HGH, while preserving physiological feedback control.',
      'Downstream of GH, IGF-1 LR3 and IGF-1 DES are commonly used in hypertrophy and fiber-repair research — LR3 for its extended half-life, DES for localized, high-potency action in myoblast cultures. Mechano Growth Factor (MGF) and its PEGylated form offer splice-variant-specific investigation of satellite-cell activation.',
      'Upstream regulation is represented by Follistatin-344 and Follistatin-315, which bind and sequester myostatin to study inhibin-pathway effects on muscle mass. Together these compounds give researchers the full toolkit to probe the anabolic cascade from secretion to terminal effector.',
      'For laboratory research use only. All products are lyophilized, third-party lab tested, and shipped with optional COA documentation across the EU.',
    ],
  },
  {
    slug: 'healing-recovery',
    name: 'Healing & Recovery',
    title: 'Healing & Recovery Research Peptides — BPC-157, TB-500, GHK-Cu',
    description: 'Cytoprotective and regenerative peptides: BPC-157, TB-500 (Thymosin Beta-4), GHK-Cu copper peptide, KPV, LL-37, VIP, Pentosan, Larazotide. ≥99% purity, EU tested.',
    heroImage: '/images/category-healing.svg',
    focusKeywords: ['bpc-157 europe', 'tb-500 research peptide', 'ghk-cu', 'peptide wound healing', 'regenerative peptides'],
    intro: [
      'The healing-and-recovery category covers regenerative, cytoprotective, and anti-inflammatory peptides used in tissue-repair and barrier-integrity research. BPC-157, a 15-amino-acid fragment derived from a gastric protective protein, sits at the center of this space — extensively studied for its angiogenic, anti-inflammatory, and fibroblast-stimulating properties in tendon, ligament, muscle, and gastrointestinal models.',
      'Thymosin Beta-4 (TB-500) acts complementary to BPC-157 — its G-actin-sequestering activity drives cell migration, actin remodeling, and angiogenesis, making it a staple in wound-closure and cardiac-repair research. Many protocols combine both compounds to study additive regenerative effects.',
      'GHK-Cu, a naturally occurring copper-binding tripeptide, is the benchmark research compound for collagen-synthesis, antioxidant, and dermal-remodeling studies. It is supplied in multiple vial sizes (50–200 mg) to support topical, in-vitro, and multi-experiment protocols.',
      'Antimicrobial and gut-barrier peptides complete the category: KPV (tripeptide of α-MSH) for mast-cell stabilization and mucosal inflammation, LL-37 for innate-immunity and biofilm-disruption research, VIP for vasoactive and immunomodulatory work, Pentosan for glycosaminoglycan signaling, and Larazotide for tight-junction / zonulin-pathway studies.',
      'All research peptides in this category are third-party tested and shipped with strict cold-chain packaging across the EU. For laboratory use only.',
    ],
  },
  {
    slug: 'anti-aging',
    name: 'Anti-Aging',
    title: 'Anti-Aging & Longevity Research Peptides — Epitalon, NAD+, SS-31',
    description: 'Longevity and cellular-rejuvenation research peptides: Epitalon, FOXO4-DRI (senolytic), NAD+, SS-31 (Elamipretide), GDF-11, Humanin, Matrixyl, Argireline. EU-tested.',
    heroImage: '/images/category-antiaging.svg',
    focusKeywords: ['longevity peptides', 'epitalon research', 'nad+ peptide', 'ss-31 elamipretide', 'senolytic peptide'],
    intro: [
      'Anti-aging and longevity research covers peptides targeting the hallmarks of cellular aging — telomere attrition, mitochondrial dysfunction, cellular senescence, proteostasis loss, and dermal extracellular-matrix decline. The category spans systemic longevity tools, senolytic candidates, mitochondrial-targeted therapeutics, and topical dermal peptides.',
      'Epitalon, a synthetic tetrapeptide based on the pineal epithalamin, is one of the most-studied longevity peptides in published Russian and international research — investigated for telomerase activation, circadian-amplitude preservation, and cellular rejuvenation across species.',
      'FOXO4-DRI is a senolytic research peptide designed to selectively disrupt the FOXO4–p53 interaction in senescent cells, triggering apoptosis in cells that have accumulated DNA damage. NAD+ vials (500 mg, 750 mg) support sirtuin-pathway, DNA-repair, and metabolic-aging research. SS-31 (Elamipretide) is the benchmark cardiolipin-targeted mitochondrial peptide, studied for bioenergetic rescue in aged muscle, heart, and neural tissue.',
      'Humanin and its potent S14G analog (Humanin-G) represent the mitochondrial-derived peptide class — investigated for cytoprotection, insulin sensitivity, and cognitive-aging endpoints. GDF-11 targets circulating rejuvenation factors; Pinealon supports neuro-oxidative-stress work.',
      'Topical and dermal anti-aging peptides — Matrixyl, Argireline, SNAP-8, SYN-COLL — are included for researchers focused on collagen biosynthesis, expression-wrinkle pathways, and TGF-β-mimetic signaling in skin models.',
      'Every vial is HPLC + MS verified by independent European labs. For research use only.',
    ],
  },
  {
    slug: 'cognitive-enhancement',
    name: 'Cognitive Enhancement',
    title: 'Nootropic Research Peptides — Selank, Semax, Cerebrolysin, Dihexa',
    description: 'Cognitive-enhancement and neurotrophic research peptides: Selank, Semax, N-Acetyl analogs, P21, Dihexa, Cerebrolysin, DSIP. BDNF/NGF-modulating compounds, EU-tested.',
    heroImage: '/images/category-antiaging.svg',
    focusKeywords: ['nootropic peptides', 'selank europe', 'semax research', 'dihexa', 'cerebrolysin research'],
    intro: [
      'Cognitive-enhancement peptides — often grouped under the "nootropic" umbrella — are a research category focused on neurotrophic factor modulation, synaptic plasticity, anxiolytic pathways, and stress resilience. Most of the foundational work in this space originated in Russian neuropsychopharmacology, which has since been extended by independent international research.',
      'Selank, a heptapeptide derived from endogenous tuftsin, is investigated for anxiolytic effects mediated through GABAergic modulation and BDNF upregulation. Semax, an ACTH(4-10) analog, drives BDNF and NGF expression and has been studied extensively in stroke-recovery and cognitive-decline models.',
      'The N-acetyl forms of Selank and Semax offer enhanced intranasal stability and half-life, making them preferred research tools for mucosal-delivery protocols. P21, a neurogenic peptide derived from CNTF, targets hippocampal neurogenesis and is investigated in Alzheimer-disease-related models.',
      'Dihexa is a small, orally active peptide researched for HGF/c-Met activation and dendritic spinogenesis — frequently cited for its dramatic in-vitro synaptic effects. Cerebrolysin, a porcine-brain-derived neuropeptide fraction, is included for researchers studying multi-factor neurotrophic support. DSIP (Delta Sleep-Inducing Peptide) rounds out the category for slow-wave-sleep architecture and HPA-axis research.',
      'All compounds shipped lyophilized, EU-tested, for laboratory research use only.',
    ],
  },
  {
    slug: 'immune-support',
    name: 'Immune Support',
    title: 'Immunomodulatory Research Peptides — Thymosin Alpha-1, Thymalin, LL-37',
    description: 'Thymic and innate-immune research peptides: Thymosin Alpha-1, Thymulin, Thymalin, LL-37. T-cell maturation, antiviral signaling, innate immunity models.',
    heroImage: '/images/category-healing.svg',
    focusKeywords: ['thymosin alpha-1 research', 'thymalin europe', 'll-37 peptide', 'immunomodulatory peptides', 'thymic peptides'],
    intro: [
      'Immune-support research peptides are dominated by the thymic-peptide family — compounds originally isolated from thymus extract that play central roles in T-cell differentiation, innate-immune priming, and adaptive-immunity regulation.',
      'Thymosin Alpha-1 (TA-1) is the most extensively studied member: a 28-amino-acid acetylated peptide researched for CD4+/CD8+ T-cell maturation, interferon and IL-2 production, and antiviral signaling. TA-1 has been investigated in chronic-infection, oncology, and immunosenescence models worldwide.',
      'Thymulin — a zinc-dependent nonapeptide — drives T-cell differentiation and is uniquely sensitive to zinc status, making it a useful research probe for trace-element immunology. Thymalin, a thymus-derived peptide extract, supports immune regulation and geroprotective research.',
      'Innate immunity is represented by LL-37, the human cathelicidin-derived antimicrobial peptide. Research spans bacterial and fungal biofilm disruption, wound-site innate immunity, and the broader antimicrobial-peptide mechanistic landscape.',
      'Every vial is independently verified for identity and purity by European labs. Laboratory research use only.',
    ],
  },
  {
    slug: 'reproductive-health',
    name: 'Reproductive Health',
    title: 'Sexual Health & Reproductive Research Peptides — PT-141, Kisspeptin, HCG',
    description: 'HPG-axis and sexual-health research peptides: PT-141 (Bremelanotide), Kisspeptin-10, Gonadorelin, HCG, Oxytocin. EU lab-tested, for laboratory use only.',
    heroImage: '/images/category-healing.svg',
    focusKeywords: ['pt-141 research', 'kisspeptin peptide', 'gonadorelin', 'hcg research', 'hpg axis peptides'],
    intro: [
      'Reproductive-health research peptides target the hypothalamic-pituitary-gonadal (HPG) axis and central neuropeptide systems governing sexual behavior and pair bonding. The category includes melanocortin-family agonists, GnRH-family peptides, and posterior-pituitary nonapeptides.',
      'PT-141 (Bremelanotide) is the canonical melanocortin-4-receptor agonist in sexual-arousal research — acting centrally rather than through peripheral vascular pathways, it offers a mechanistic counterpart to PDE5 inhibitors in comparative pharmacology.',
      'Kisspeptin-10 is the master-regulator neuropeptide of GnRH pulsatility and is investigated for puberty-onset timing, fertility models, and reproductive aging. Gonadorelin (synthetic GnRH decapeptide) supports downstream LH/FSH pulse-stimulation research, and HCG provides Leydig-cell-activation studies via its LH-receptor agonism.',
      'Oxytocin rounds out the category for researchers investigating social-bonding, trust-behavior, and prosocial-neuroscience endpoints. All peptides are shipped lyophilized, HPLC + MS tested, and intended for laboratory research use only.',
    ],
  },
  {
    slug: 'tanning',
    name: 'Tanning',
    title: 'Melanocortin Research Peptides — Melanotan I & II',
    description: 'α-MSH analogs for melanogenesis and photoprotection research: Melanotan I (Afamelanotide), Melanotan II. EU lab-tested, laboratory research use only.',
    heroImage: '/images/category-antiaging.svg',
    focusKeywords: ['melanotan ii europe', 'melanotan i research', 'afamelanotide', 'melanocortin peptide'],
    intro: [
      'The tanning and pigmentation category contains research peptides that activate melanocortin receptors to drive eumelanin production in skin research models — independent of UV exposure.',
      'Melanotan I (Afamelanotide) is a 13-amino-acid α-MSH analog with selective MC1R activity, studied for photoprotection and UV-independent melanogenesis. It is the cleaner research tool when MC1R-specific effects are the endpoint.',
      'Melanotan II is the shorter, non-selective melanocortin agonist — its activity spans MC1R (pigmentation), MC4R (appetite, libido), and others. This broader receptor profile makes it valuable for multi-pathway research but also means effects are less specific than MT-I.',
      'Both peptides are supplied as lyophilized powder in 10 mg and 20 mg vials, HPLC-tested, and shipped discreetly within the EU. For laboratory use only.',
    ],
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    title: 'Research Lab Accessories — Bacteriostatic Water, Syringes, Storage',
    description: 'Essential accessories for peptide reconstitution research: bacteriostatic water, insulin syringes, alcohol pads, storage vials, calculator cards, sharps containers.',
    heroImage: '/images/category-healing.svg',
    focusKeywords: ['bacteriostatic water europe', 'insulin syringes research', 'peptide reconstitution supplies'],
    intro: [
      'The accessories category supports the full peptide-reconstitution workflow. Lyophilized research peptides must be dissolved in an appropriate solvent and handled with sterile single-use injection supplies; this section groups the commonly paired consumables.',
      'Bacteriostatic Water (with 0.9% benzyl alcohol) is the standard solvent for multi-dose peptide reconstitution and is available in 30 ml and 10 ml multi-pack formats. Insulin syringes (1 ml and 0.5 ml, 29G × 100 ct) support precise reconstitution and aliquoting in laboratory protocols.',
      'Alcohol prep pads (70% IPA), amber glass storage vials with butyl stoppers, laminated peptide calculator reference cards, and puncture-resistant sharps containers complete the consumables set. All items are medical-grade or FDA-listed and ship with the research peptide order to minimize logistics complexity.',
    ],
  },
];

export const categoryBySlug = (slug: string): CategoryMeta | undefined =>
  CATEGORIES.find((c) => c.slug === slug);
