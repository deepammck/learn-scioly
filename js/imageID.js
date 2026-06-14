// Image ID data — placeholder cards (swap `src` field to add real images)
'use strict';

window.IMAGE_ID_DATA = {
  desgen: [
    {
      category: 'Cell Division',
      cards: [
        { id: 'dg-cd-01', label: 'Mitosis – Prophase', src: '', description: 'Chromatin condenses into visible chromosomes; mitotic spindle begins to form; nuclear envelope starts to break down.' },
        { id: 'dg-cd-02', label: 'Mitosis – Metaphase', src: '', description: 'Chromosomes align at the metaphase plate; kinetochore microtubules attach to centromeres.' },
        { id: 'dg-cd-03', label: 'Mitosis – Anaphase', src: '', description: 'Sister chromatids separate; pulled toward opposite poles; cell elongates.' },
        { id: 'dg-cd-04', label: 'Mitosis – Telophase', src: '', description: 'Chromosomes arrive at poles; nuclear envelopes reform; chromosomes decondense; cytokinesis begins.' },
        { id: 'dg-cd-05', label: 'Meiosis I – Prophase I', src: '', description: 'Homologous chromosomes pair (synapsis); crossing over (chiasmata) occurs; tetrads form.' },
        { id: 'dg-cd-06', label: 'Meiosis I – Metaphase I', src: '', description: 'Tetrads align at the metaphase plate; independent assortment occurs.' },
        { id: 'dg-cd-07', label: 'Meiosis II – Anaphase II', src: '', description: 'Sister chromatids separate; result is 4 haploid cells.' },
        { id: 'dg-cd-08', label: 'Karyotype – Normal Human', src: '', description: '46 chromosomes (23 pairs); arranged by size and centromere position; G-banding pattern used for identification.' },
        { id: 'dg-cd-09', label: 'Karyotype – Trisomy 21', src: '', description: 'Extra chromosome 21 (Down syndrome); 47 chromosomes total.' },
      ]
    },
    {
      category: 'DNA Structure & Replication',
      cards: [
        { id: 'dg-dna-01', label: 'DNA Double Helix', src: '', description: 'Two antiparallel polynucleotide strands; sugar-phosphate backbone; bases (A-T, G-C) paired in center via hydrogen bonds.' },
        { id: 'dg-dna-02', label: 'Nucleotide Structure', src: '', description: 'Phosphate group + deoxyribose sugar + nitrogenous base (purine: A or G; pyrimidine: C or T).' },
        { id: 'dg-dna-03', label: 'Replication Fork', src: '', description: 'Leading strand synthesized continuously; lagging strand synthesized in Okazaki fragments; helicase unwinds, DNA pol III extends.' },
        { id: 'dg-dna-04', label: 'Gel Electrophoresis – DNA', src: '', description: 'Bands show DNA fragment sizes; smaller fragments migrate farther; ladder/marker lane for size reference.' },
        { id: 'dg-dna-05', label: 'PCR Product – Gel', src: '', description: 'Amplified band at expected bp size; bright single band if successful; smearing = non-specific amplification.' },
      ]
    },
    {
      category: 'Transcription & Translation',
      cards: [
        { id: 'dg-tt-01', label: 'Central Dogma Diagram', src: '', description: 'DNA → (transcription) → mRNA → (translation) → Protein; reverse transcriptase: RNA → DNA.' },
        { id: 'dg-tt-02', label: 'tRNA Cloverleaf', src: '', description: 'Anticodon loop at bottom; 3′ CCA acceptor stem carries amino acid; TΨC and D loops for ribosome/enzyme recognition.' },
        { id: 'dg-tt-03', label: 'Ribosome – Translating mRNA', src: '', description: 'Large and small subunit; A, P, E sites; mRNA threaded through; polypeptide chain grows.' },
        { id: 'dg-tt-04', label: 'Codon Table (Standard)', src: '', description: '64 codons: AUG (start/Met), UAA/UAG/UGA (stop); degeneracy means multiple codons → same amino acid.' },
        { id: 'dg-tt-05', label: 'mRNA Splicing Diagram', src: '', description: 'Pre-mRNA with introns/exons; snRNPs form spliceosome; introns excised; exons ligated → mature mRNA.' },
      ]
    },
    {
      category: 'Genetic Techniques',
      cards: [
        { id: 'dg-tech-01', label: 'Restriction Enzyme Map', src: '', description: 'Linear or circular DNA map showing restriction sites; fragment sizes must sum to total plasmid/insert size.' },
        { id: 'dg-tech-02', label: 'Plasmid Map', src: '', description: 'Circular vector showing origin of replication, antibiotic resistance gene, multiple cloning site (MCS), promoter.' },
        { id: 'dg-tech-03', label: 'Southern Blot', src: '', description: 'DNA gel → nitrocellulose membrane → probe hybridization → X-ray film; detects specific sequences.' },
        { id: 'dg-tech-04', label: 'Northern Blot', src: '', description: 'RNA blot; detects mRNA expression levels; probe complements target mRNA.' },
        { id: 'dg-tech-05', label: 'Western Blot', src: '', description: 'Protein gel → membrane → antibody detection; band at expected molecular weight.' },
        { id: 'dg-tech-06', label: 'CRISPR-Cas9 Diagram', src: '', description: 'Guide RNA directs Cas9 to target DNA; PAM sequence (NGG) required; DSB created; repaired by NHEJ or HDR.' },
        { id: 'dg-tech-07', label: 'Transformation – Bacterial Plates', src: '', description: 'Control (-DNA) plate: no colonies; experimental (+ligation) plate: colonies; selection plate confirms insert.' },
        { id: 'dg-tech-08', label: 'FISH Karyotype', src: '', description: 'Fluorescent probes on chromosomes; color-coded; used to detect translocations, deletions, amplifications.' },
      ]
    },
    {
      category: 'Inheritance & Pedigrees',
      cards: [
        { id: 'dg-ped-01', label: 'Autosomal Dominant Pedigree', src: '', description: 'Affected in every generation; affected father → affected sons and daughters; unaffected carriers rare.' },
        { id: 'dg-ped-02', label: 'Autosomal Recessive Pedigree', src: '', description: 'Skip generations; carrier parents → 1/4 affected; consanguinity increases risk; parents usually unaffected.' },
        { id: 'dg-ped-03', label: 'X-Linked Recessive Pedigree', src: '', description: 'Mostly males affected; no father-to-son transmission; carrier mothers pass to sons; daughters can be carriers.' },
        { id: 'dg-ped-04', label: 'Mitochondrial Pedigree', src: '', description: 'All offspring of affected mother affected; father\'s trait not inherited; maternal lineage pattern.' },
        { id: 'dg-ped-05', label: 'Punnett Square – Dihybrid', src: '', description: '4×4 grid for two traits; AaBb × AaBb → 9:3:3:1 ratio; independent assortment.' },
      ]
    },
    {
      category: 'Chromosomal Abnormalities',
      cards: [
        { id: 'dg-chrom-01', label: 'Deletion Chromosome', src: '', description: 'Segment of chromosome missing; shown as shorter chromosome or missing band on karyotype.' },
        { id: 'dg-chrom-02', label: 'Inversion Chromosome', src: '', description: 'Segment inverted within chromosome; paracentric (no centromere) or pericentric (includes centromere).' },
        { id: 'dg-chrom-03', label: 'Translocation', src: '', description: 'Segment moved to non-homologous chromosome; reciprocal (balanced) or Robertsonian; Philadelphia chromosome example.' },
        { id: 'dg-chrom-04', label: 'Nondisjunction – Meiosis I', src: '', description: 'Homologs fail to separate; produces n+1 and n-1 gametes; leads to trisomy or monosomy in offspring.' },
      ]
    },
  ],

  forensics: [
    {
      category: 'Fingerprints',
      cards: [
        { id: 'for-fp-01', label: 'Fingerprint – Loop', src: '', description: 'Most common pattern (~60-65%); has one delta; ridges enter from one side, curve, and exit same side. Ulnar (toward pinky) or radial (toward thumb).' },
        { id: 'for-fp-02', label: 'Fingerprint – Whorl', src: '', description: 'Second most common (~30-35%); has two deltas; ridges form circles, spirals, or S-shapes. Plain, central pocket, double loop, accidental.' },
        { id: 'for-fp-03', label: 'Fingerprint – Arch', src: '', description: 'Least common (~5%); no delta; ridges enter one side and exit the other. Plain arch or tented arch (with upthrust).' },
        { id: 'for-fp-04', label: 'Fingerprint – Bifurcation', src: '', description: 'Minutiae: one ridge splits into two; used for individuality; Galton detail for comparison.' },
        { id: 'for-fp-05', label: 'Fingerprint – Ridge Ending', src: '', description: 'Minutiae: a ridge terminates; compared position and angle in AFIS and manual comparison.' },
        { id: 'for-fp-06', label: 'Latent Print – Ninhydrin', src: '', description: 'Purple/pink Ruhemann\'s purple color on porous surfaces (paper); reacts with amino acids in fingerprint residue.' },
        { id: 'for-fp-07', label: 'Latent Print – Cyanoacrylate', src: '', description: 'White fumed Superglue deposits on fingerprint ridges on non-porous surfaces; polymerizes on amino acids/lipids.' },
        { id: 'for-fp-08', label: 'Latent Print – DFO', src: '', description: 'Fluorescent reagent for porous surfaces; works on older/degraded prints; viewed under laser/alternate light source.' },
      ]
    },
    {
      category: 'Hair Analysis',
      cards: [
        { id: 'for-hair-01', label: 'Hair Cross-Section – Cortex', src: '', description: 'Middle layer; contains pigment granules (melanin); primary site of color; spindle-shaped cells.' },
        { id: 'for-hair-02', label: 'Hair Cross-Section – Medulla', src: '', description: 'Central canal; may be absent, fragmented, discontinuous, or continuous; medullary index = medulla diameter / total diameter.' },
        { id: 'for-hair-03', label: 'Hair Cross-Section – Cuticle', src: '', description: 'Outermost layer; overlapping scales pointing toward tip; scale pattern (coronal, spinous, imbricate) used for animal ID.' },
        { id: 'for-hair-04', label: 'Human Hair vs Animal Hair', src: '', description: 'Human: thin cuticle, broad cortex, small/absent medulla, MI <1/3. Animal: thick cuticle, narrow cortex, large medulla MI ≥1/2.' },
        { id: 'for-hair-05', label: 'Hair Root – Anagen Phase', src: '', description: 'Actively growing; follicular tag may be present (provides nuclear DNA); wider root.' },
        { id: 'for-hair-06', label: 'Hair Root – Telogen Phase', src: '', description: 'Resting/shed phase; club-shaped root; no follicular tag; only mitochondrial DNA available.' },
      ]
    },
    {
      category: 'Chromatography & Ink Analysis',
      cards: [
        { id: 'for-chrom-01', label: 'Paper Chromatography – Ink', src: '', description: 'Ink components separate by polarity/affinity; Rf = distance spot / distance solvent front; compared between samples.' },
        { id: 'for-chrom-02', label: 'TLC Plate – Multiple Inks', src: '', description: 'Thin-layer chromatography; silica gel plate; UV visualization; multiple lanes allow simultaneous comparison.' },
        { id: 'for-chrom-03', label: 'Chromatogram – Rf Calculation', src: '', description: 'Ruler measurement from baseline; Rf values 0–1; identical Rf in same solvent = possibly same compound.' },
        { id: 'for-chrom-04', label: 'GC-MS Chromatogram', src: '', description: 'Gas chromatography-mass spectrometry; peaks at retention times; MS confirms identity by fragmentation pattern.' },
      ]
    },
    {
      category: 'Blood Evidence',
      cards: [
        { id: 'for-blood-01', label: 'Blood Spatter – Drip', src: '', description: 'Circular stain from 90° (vertical) fall; scalloped edges increase with height; satellite droplets around large stains.' },
        { id: 'for-blood-02', label: 'Blood Spatter – Elliptical', src: '', description: 'Elongated oval stain from angled impact; θ = arcsin(width/length); more elongated = more acute angle.' },
        { id: 'for-blood-03', label: 'Blood Spatter – Cast-off', src: '', description: 'Arc or line of blood from swinging weapon; spacing of drops indicates direction and number of swings.' },
        { id: 'for-blood-04', label: 'Blood Spatter – Blow-back', src: '', description: 'Blood projected back toward shooter/attacker; small droplets on weapon or hands; characteristic of gunshot.' },
        { id: 'for-blood-05', label: 'ABO Blood Typing – Reaction', src: '', description: 'Agglutination (clumping) with anti-A or anti-B antibody indicates antigen present; Type A: + with anti-A; Type AB: + with both.' },
        { id: 'for-blood-06', label: 'Luminol Test', src: '', description: 'Blue-green chemiluminescence in dark with latent blood; oxidation reaction; works on cleaned surfaces.' },
        { id: 'for-blood-07', label: 'Kastle-Meyer (KM) Test', src: '', description: 'Presumptive; pink color with phenolphthalein + H₂O₂ + blood; peroxidase-like activity of hemoglobin.' },
      ]
    },
    {
      category: 'Entomology & Decomposition',
      cards: [
        { id: 'for-ento-01', label: 'Blowfly Life Cycle', src: '', description: 'Egg → 3 larval instars → pupa → adult; Calliphora, Lucilia, Phormia; first colonizers of remains.' },
        { id: 'for-ento-02', label: 'Blowfly Egg Mass', src: '', description: 'Laid in body orifices and wounds within hours of death; white elongated eggs in masses; hatches in 12-24h at warm temps.' },
        { id: 'for-ento-03', label: 'Larval Instars – Comparison', src: '', description: 'L1: small, no hooks; L2: medium, one hook row; L3: large (biggest/most important for PMI), two hook rows, ready to pupate.' },
        { id: 'for-ento-04', label: 'Puparium', src: '', description: 'Hardened brown case formed from L3 cuticle; pupa inside; duration depends on temperature; found in soil near body.' },
        { id: 'for-ento-05', label: 'Degree-Hour Calculation Chart', src: '', description: 'ADD = Σ(T_avg - T_base) × hours; K = 6023 degree-hours for Cochliomyia at base 9.1°C; PMI = K / ADD_rate.' },
        { id: 'for-ento-06', label: 'Decomposition Stages', src: '', description: 'Fresh → Bloat → Active decay → Advanced decay → Dry/skeletal; each stage has characteristic insect communities.' },
      ]
    },
    {
      category: 'Questioned Documents',
      cards: [
        { id: 'for-doc-01', label: 'ESDA (Electrostatic Detection)', src: '', description: 'Reveals indented writing on paper; electrostatic charge causes toner particles to adhere; no destructive treatment.' },
        { id: 'for-doc-02', label: 'Typeface Comparison', src: '', description: 'Letter spacing, font characteristics, defects in type; used to link document to specific typewriter/printer.' },
        { id: 'for-doc-03', label: 'Paper Fiber – Microscopy', src: '', description: 'Wood pulp cellulose fibers visible under polarized light; fiber length, beating, filler particles indicate paper source.' },
        { id: 'for-doc-04', label: 'Watermark – Transmitted Light', src: '', description: 'Visible when held to light; variations in paper thickness during manufacture; used for authentication.' },
      ]
    },
    {
      category: 'Ballistics & Firearms',
      cards: [
        { id: 'for-ball-01', label: 'Bullet – Rifling Marks', src: '', description: 'Lands and grooves imprinted on bullet during firing; twist direction (left/right) and pitch are weapon-specific.' },
        { id: 'for-ball-02', label: 'Cartridge Case – Firing Pin', src: '', description: 'Firing pin impression on primer; extractor/ejector marks; chamber marks unique to firearm.' },
        { id: 'for-ball-03', label: 'GSR Particle – SEM/EDX', src: '', description: 'Lead-antimony-barium spherical particles from primer; detected on hands/clothing; must collect within hours.' },
        { id: 'for-ball-04', label: 'Wound Characteristics – Contact', src: '', description: 'Stellate/star-shaped tear; soot and stippling inside wound; muzzle imprint on skin; hard contact vs. loose contact.' },
        { id: 'for-ball-05', label: 'Wound Characteristics – Distant', src: '', description: 'Clean entry wound; no soot/stippling; bullet wipe (lubricant ring) around hole; larger exit wound with irregular edges.' },
      ]
    },
    {
      category: 'Skeletal & Anthropology',
      cards: [
        { id: 'for-skel-01', label: 'Human Skull – Sutures', src: '', description: 'Coronal (frontal/parietal), sagittal (between parietals), lambdoid (parietal/occipital); fusion age helps estimate age.' },
        { id: 'for-skel-02', label: 'Pelvic Bone – Sex Determination', src: '', description: 'Female: wider subpubic angle (>90°), rounder pelvic outlet, preauricular sulcus; Male: narrower angle (<90°).' },
        { id: 'for-skel-03', label: 'Long Bone – Epiphyseal Fusion', src: '', description: 'Growth plates fuse with age; proximal humerus ~20yr; medial clavicle ~25-30yr; fusion order used for age estimation.' },
        { id: 'for-skel-04', label: 'Dental Development Chart', src: '', description: 'Tooth eruption ages (deciduous vs. permanent); wisdom teeth 17-21yr; used for age estimation in subadults.' },
        { id: 'for-skel-05', label: 'Stature Estimation – Long Bone', src: '', description: 'Regression equations from femur, tibia length; sex- and ancestry-specific formulas; ± error in estimates.' },
      ]
    },
    {
      category: 'Soil & Trace Evidence',
      cards: [
        { id: 'for-soil-01', label: 'Soil – Munsell Color Chip', src: '', description: 'Hue, value, chroma system; standardized color comparison in field; helps link soil sample to location.' },
        { id: 'for-soil-02', label: 'Glass Fracture – Radial & Concentric', src: '', description: 'Radial cracks extend from impact; concentric rings form around; RSVP rule: Radial cracks show Stress on Vent (back) face.' },
        { id: 'for-soil-03', label: 'Becke Line – RI Comparison', src: '', description: 'Bright halo moves toward medium with higher RI when focus raised; moves toward glass = glass has higher RI.' },
        { id: 'for-soil-04', label: 'Fiber – Polarized Light Microscopy', src: '', description: 'Natural vs synthetic; birefringence pattern; cross-section shape; dye absorption; twist angle.' },
      ]
    },
  ]
};
