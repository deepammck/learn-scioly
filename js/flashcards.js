// Review flashcard data — term ↔ definition pairs drawn from both study guides
'use strict';

window.FLASHCARD_DATA = [

  // ─── DESIGNER GENES ───────────────────────────────────────────────────────

  // §1 Molecular Basis
  { id: 'dg-01', event: 'desgen', front: 'Central Dogma', back: 'DNA → RNA → Protein. Information flows from DNA (via transcription) to mRNA, then to protein (via translation). Reverse transcriptase runs RNA→DNA.' },
  { id: 'dg-02', event: 'desgen', front: 'Nucleotide components', back: 'Phosphate group + pentose sugar (deoxyribose in DNA, ribose in RNA) + nitrogenous base (A, T/U, G, C).' },
  { id: 'dg-03', event: 'desgen', front: 'Chargaff\'s Rules', back: '%A = %T and %G = %C in double-stranded DNA. Implies complementary base pairing (A–T: 2 H-bonds; G–C: 3 H-bonds).' },
  { id: 'dg-04', event: 'desgen', front: 'DNA antiparallel strands', back: 'Two strands run 5′→3′ in opposite directions. DNA polymerase synthesizes new strand 5′→3′ only, requiring a leading and lagging strand.' },
  { id: 'dg-05', event: 'desgen', front: 'Okazaki fragments', back: 'Short DNA segments synthesized discontinuously on the lagging template strand (3′→5′ template) during replication; joined by DNA ligase.' },
  { id: 'dg-06', event: 'desgen', front: 'Semiconservative replication', back: 'Each daughter DNA duplex retains one original parental strand and one newly synthesized strand. Confirmed by Meselson–Stahl experiment (¹⁵N/¹⁴N density labeling).' },

  // §2 Gene Expression
  { id: 'dg-07', event: 'desgen', front: 'Promoter', back: 'DNA sequence upstream of a gene where RNA polymerase binds to initiate transcription. In prokaryotes: –10 (Pribnow box) and –35 elements. In eukaryotes: TATA box (–25).' },
  { id: 'dg-08', event: 'desgen', front: 'Transcription vs Translation', back: 'Transcription: DNA template → mRNA (in nucleus, eukaryotes). Translation: mRNA codon → amino acid (at ribosome, cytoplasm). Coupled in prokaryotes.' },
  { id: 'dg-09', event: 'desgen', front: 'mRNA processing (eukaryotes)', back: '5′ 7-methylguanosine cap + 3′ poly-A tail added; introns removed by spliceosomes; exons ligated → mature mRNA exported to cytoplasm.' },
  { id: 'dg-10', event: 'desgen', front: 'Codon / anticodon', back: 'Codon: 3-nucleotide mRNA sequence specifying one amino acid. Anticodon: complementary 3-nt sequence on tRNA (read 3′→5′ on tRNA matching 5′→3′ codon). AUG = start (Met). UAA, UAG, UGA = stop.' },
  { id: 'dg-11', event: 'desgen', front: 'Wobble hypothesis', back: 'The third codon position pairs less strictly with the anticodon first position, allowing one tRNA to recognize multiple codons (degeneracy of genetic code).' },
  { id: 'dg-12', event: 'desgen', front: 'Ribosome A, P, E sites', back: 'A (aminoacyl): incoming charged tRNA. P (peptidyl): tRNA carrying growing chain. E (exit): tRNA leaving. Translocation moves ribosome 3 nt toward 3′ end.' },

  // §3 Mutations
  { id: 'dg-13', event: 'desgen', front: 'Silent mutation', back: 'Base change in codon that does not alter the amino acid (due to degeneracy of the genetic code). No effect on phenotype.' },
  { id: 'dg-14', event: 'desgen', front: 'Missense mutation', back: 'Single nucleotide change that alters the amino acid; may be conservative (similar properties) or non-conservative (different class). Example: sickle-cell HbS (Glu→Val).' },
  { id: 'dg-15', event: 'desgen', front: 'Nonsense mutation', back: 'Point mutation that changes a sense codon to a stop codon (UAA, UAG, UGA), causing premature termination → truncated protein.' },
  { id: 'dg-16', event: 'desgen', front: 'Frameshift mutation', back: 'Insertion or deletion of nucleotides (not a multiple of 3) shifts the reading frame → altered/garbled protein sequence downstream of mutation.' },
  { id: 'dg-17', event: 'desgen', front: 'Transition vs Transversion', back: 'Transition: purine↔purine (A↔G) or pyrimidine↔pyrimidine (C↔T) — same class. Transversion: purine↔pyrimidine — different class. Transitions more common spontaneously.' },
  { id: 'dg-18', event: 'desgen', front: 'Loss-of-function vs Gain-of-function', back: 'LoF: reduces/eliminates gene activity; usually recessive. GoF: new/enhanced activity; usually dominant. Example GoF: constitutively active Ras in cancer.' },

  // §4 Mendelian Genetics
  { id: 'dg-19', event: 'desgen', front: 'Law of Segregation', back: 'Each individual has two alleles for a gene; they segregate during gamete formation so each gamete carries only one. Meiosis I separates homologs.' },
  { id: 'dg-20', event: 'desgen', front: 'Law of Independent Assortment', back: 'Alleles of different genes assort independently during gamete formation, provided genes are on different chromosomes (or far apart). Basis of 9:3:3:1 dihybrid ratio.' },
  { id: 'dg-21', event: 'desgen', front: 'Incomplete dominance', back: 'Heterozygote shows intermediate phenotype (blending). Example: red × white → pink (RR × rr → Rr pink). 1:2:1 phenotype ratio in F2.' },
  { id: 'dg-22', event: 'desgen', front: 'Codominance', back: 'Both alleles expressed simultaneously in heterozygote. Example: ABO blood type IA and IB both expressed → type AB.' },
  { id: 'dg-23', event: 'desgen', front: 'Epistasis', back: 'One gene masks expression of another. Recessive epistasis (9:3:4), dominant epistasis (12:3:1), duplicate recessive (9:7), duplicate dominant (15:1).' },
  { id: 'dg-24', event: 'desgen', front: 'Test cross', back: 'Cross of unknown genotype × homozygous recessive (aa or aabb). Offspring ratios reveal unknown genotype. 1:1 offspring → Aa; 1:1:1:1 → AaBb.' },

  // §5 Hardy-Weinberg
  { id: 'dg-25', event: 'desgen', front: 'Hardy-Weinberg equations', back: 'p + q = 1 (allele frequencies) and p² + 2pq + q² = 1 (genotype frequencies). p² = AA, 2pq = Aa, q² = aa. Equilibrium requires: large population, random mating, no mutation/migration/selection.' },
  { id: 'dg-26', event: 'desgen', front: 'H-W assumptions (violations)', back: '5 assumptions: no natural selection, no mutation, no gene flow, random mating, large population. Violations cause allele frequency change = evolution.' },
  { id: 'dg-27', event: 'desgen', front: 'Chi-square test (genetics)', back: 'χ² = Σ(O−E)²/E. Degrees of freedom = categories − 1. Compare to critical value table (usually α=0.05). High χ² → reject H₀ (no significant deviation from expected).' },

  // §6 Linkage & Recombination
  { id: 'dg-28', event: 'desgen', front: 'Recombination frequency (RF)', back: 'RF = (recombinant offspring / total offspring) × 100%. 1% RF ≈ 1 centimorgan (cM) / map unit. RF ≤ 50% indicates linkage (>50% = independent).' },
  { id: 'dg-29', event: 'desgen', front: 'Crossing over', back: 'Reciprocal exchange of segments between non-sister chromatids of homologous chromosomes during Prophase I of meiosis. Produces recombinant chromosomes.' },
  { id: 'dg-30', event: 'desgen', front: 'Three-point cross / interference', back: 'Map order determined by double-crossover class (least frequent). Coefficient of Coincidence (CoC) = observed doubles / expected. Interference = 1 − CoC.' },

  // §7 Sex Determination & Sex-Linked
  { id: 'dg-31', event: 'desgen', front: 'X-linked recessive inheritance', back: 'Males (XY) have only one X — hemizygous; one mutant allele = affected. Females need two copies. Carrier mothers pass to 50% of sons. No father→son transmission.' },
  { id: 'dg-32', event: 'desgen', front: 'Lyon hypothesis (X-inactivation)', back: 'One X chromosome randomly inactivated per cell in female mammals (Barr body = inactive X). Mosaic expression in heterozygous females (e.g., tortoiseshell cats).' },
  { id: 'dg-33', event: 'desgen', front: 'SRY gene', back: 'Sex-determining Region Y; on Y chromosome; encodes TDF (testis-determining factor). Triggers differentiation of gonads into testes. XX with SRY translocation → male phenotype.' },

  // §8 Epigenetics
  { id: 'dg-34', event: 'desgen', front: 'DNA methylation', back: 'Addition of methyl group to cytosine (CpG sites); generally represses transcription. Inherited through mitosis (epigenetic memory). Demethylation reactivates genes.' },
  { id: 'dg-35', event: 'desgen', front: 'Histone modification', back: 'Acetylation (HAT): loosens chromatin → active transcription. Deacetylation (HDAC): condenses chromatin → repression. Methylation of H3K4: active; H3K9: repressive.' },
  { id: 'dg-36', event: 'desgen', front: 'Genomic imprinting', back: 'Parent-of-origin specific gene expression; imprinted genes have silenced allele based on whether inherited from mother or father. Example: IGF2 (paternal) and H19 (maternal).' },
  { id: 'dg-37', event: 'desgen', front: 'Prader-Willi vs Angelman syndromes', back: 'Both involve chromosome 15q11-13. PWS: missing paternal contribution (maternal UPD or paternal deletion) → obesity, hyperphagia, hypogonadism. AS: missing maternal contribution → seizures, "happy puppet" behavior, absent speech.' },

  // §9 Quantitative Genetics
  { id: 'dg-38', event: 'desgen', front: 'Heritability (H²)', back: 'H² = V_A / V_P = (R / S). Proportion of phenotypic variance due to additive genetic variance. 0 = all environment; 1 = all genetics. Used to predict response to selection.' },
  { id: 'dg-39', event: 'desgen', front: 'Breeder\'s equation', back: 'R = H² × S. R = response to selection (change in mean across generation). S = selection differential (mean of selected parents − population mean). H² = narrow-sense heritability.' },
  { id: 'dg-40', event: 'desgen', front: 'QTL (quantitative trait locus)', back: 'Chromosomal region containing gene(s) affecting a quantitative trait; mapped by association of molecular markers with trait values in mapping populations.' },

  // §10 Population Genetics & Evolution
  { id: 'dg-41', event: 'desgen', front: 'Genetic drift', back: 'Random changes in allele frequency due to chance sampling; stronger in small populations. Can fix or eliminate alleles regardless of fitness. Founder effect & bottleneck are forms.' },
  { id: 'dg-42', event: 'desgen', front: 'Natural selection modes', back: 'Directional: shifts mean. Stabilizing: favors mean, removes extremes (reduces variance). Disruptive: favors extremes, can lead to speciation.' },
  { id: 'dg-43', event: 'desgen', front: 'Heterozygote advantage (overdominance)', back: 'Heterozygotes have higher fitness than either homozygote → balances allele frequencies. Equilibrium q̂ = s₁/(s₁+s₂). Classic example: sickle-cell/malaria.' },
  { id: 'dg-44', event: 'desgen', front: 'Mutation-selection balance', back: 'Equilibrium allele frequency when mutation pressure adding deleterious allele equals selection removing it. q̂ = √(μ/s) for recessive; q̂ = μ/s for dominant.' },

  // §11 Biotechnology
  { id: 'dg-45', event: 'desgen', front: 'Restriction enzymes (endonucleases)', back: 'Cut DNA at specific palindromic sequences (recognition sites). Type II most common in labs. Create blunt or sticky (cohesive) ends. Named for organism (EcoRI = E. coli).' },
  { id: 'dg-46', event: 'desgen', front: 'Gel electrophoresis', back: 'Separates DNA/RNA/protein by size (and charge for protein). Smaller fragments migrate faster through agarose. Ethidium bromide (or safer SYBR) stains DNA under UV.' },
  { id: 'dg-47', event: 'desgen', front: 'PCR steps & components', back: 'Denaturation (94°C) → Annealing (primer-specific Tm) → Extension (72°C, Taq pol). Needs: template DNA, two primers, dNTPs, Taq polymerase, MgCl₂, buffer. Exponential amplification (2ⁿ).' },
  { id: 'dg-48', event: 'desgen', front: 'CRISPR-Cas9 mechanism', back: 'Guide RNA (gRNA = crRNA + tracrRNA) directs Cas9 nuclease to complementary DNA sequence; PAM (NGG) required adjacent to target; Cas9 creates DSB; repaired by NHEJ (indels) or HDR (precise edit).' },
  { id: 'dg-49', event: 'desgen', front: 'Transformation (bacteria)', back: 'Introduction of foreign DNA into bacterial cell. Chemical method: CaCl₂ + heat shock (42°C). Electroporation: electrical pulse creates transient pores. Selection by antibiotic resistance marker.' },
  { id: 'dg-50', event: 'desgen', front: 'Southern / Northern / Western blots', back: 'Southern: DNA. Northern: RNA (expression). Western: Protein (using antibody). All involve gel → transfer to membrane → probe/antibody detection. "SNoW DRoP": South=DNA, North=RNA, West=Protein.' },

  // §12 Genetic Disorders
  { id: 'dg-51', event: 'desgen', front: 'Cystic Fibrosis (CF)', back: 'AR; CFTR gene (chr 7); most common mutation ΔF508 (deletion of Phe508) → misfolded protein → absent Cl⁻ channel; thick mucus in lungs, pancreas, gut.' },
  { id: 'dg-52', event: 'desgen', front: 'Huntington\'s Disease', back: 'AD; CAG trinucleotide repeat expansion in HTT gene (chr 4); >36 repeats = disease; anticipation (repeats expand in successive generations); onset 30-50yr; neurodegeneration.' },
  { id: 'dg-53', event: 'desgen', front: 'Sickle Cell Disease', back: 'AR; HBB gene; Glu→Val substitution at codon 6 (missense); HbS polymerizes when deoxygenated → sickle-shaped RBCs → vaso-occlusion, hemolytic anemia.' },
  { id: 'dg-54', event: 'desgen', front: 'Hemophilia A vs B', back: 'X-linked recessive. Hemophilia A: Factor VIII deficiency (F8 gene). Hemophilia B: Factor IX deficiency (F9 gene, "Christmas disease"). Both: prolonged bleeding, hemarthrosis.' },
  { id: 'dg-55', event: 'desgen', front: 'PKU (Phenylketonuria)', back: 'AR; PAH gene; phenylalanine hydroxylase deficient → Phe accumulates → brain damage if untreated. Newborn screening (Guthrie test); treated with low-Phe diet.' },
  { id: 'dg-56', event: 'desgen', front: 'Turner Syndrome (45,X)', back: 'Monosomy X; female phenotype; short stature, webbed neck, shield chest, gonadal dysgenesis (streak gonads), infertility, usually normal intelligence; bicuspid aortic valve.' },
  { id: 'dg-57', event: 'desgen', front: 'Klinefelter Syndrome (47,XXY)', back: 'Extra X in males; tall, small testes, infertility, gynecomastia, Barr body present; some language/learning differences; testosterone treatment.' },
  { id: 'dg-58', event: 'desgen', front: 'Down Syndrome (Trisomy 21)', back: 'Extra chromosome 21; advanced maternal age risk; features: intellectual disability, flat face, epicanthal folds, single palmar crease, CHD (AV canal), Hirschsprung risk.' },
  { id: 'dg-59', event: 'desgen', front: 'Bayesian carrier risk calculation', back: 'Prior P(carrier)=2/3 for sister of affected (AR). Each unaffected child: carrier mother has P(unaffected child)=1/2; non-carrier mother P=1. Posterior ∝ prior × likelihood.' },
  { id: 'dg-60', event: 'desgen', front: 'BRCA1 / BRCA2', back: 'Tumor suppressor genes; AD hereditary breast/ovarian cancer. BRCA1 (chr17), BRCA2 (chr13). Encode DNA repair proteins (homologous recombination). Pathogenic variants: ~50-85% lifetime breast cancer risk.' },

  // ─── FORENSICS ─────────────────────────────────────────────────────────────

  // §1 Intro & Chain of Custody
  { id: 'for-01', event: 'forensics', front: 'Chain of custody', back: 'Documented record of who had physical/legal control of evidence from collection through court; broken chain can exclude evidence as inadmissible.' },
  { id: 'for-02', event: 'forensics', front: 'Locard\'s Exchange Principle', back: '"Every contact leaves a trace." When two objects contact, materials are transferred bidirectionally. Basis for trace evidence (fibers, hair, glass, soil).' },
  { id: 'for-03', event: 'forensics', front: 'Frye standard vs Daubert standard', back: 'Frye (1923): scientific evidence must be "generally accepted" by scientific community. Daubert (1993, federal courts): judge as gatekeeper; considers testability, peer review, error rate, acceptance.' },
  { id: 'for-04', event: 'forensics', front: 'Class vs Individual evidence', back: 'Class: narrows source to a group (hair color, blood type, fiber type). Individual: identifies unique source (fingerprint, DNA profile, tool mark). Goal is always individualization.' },

  // §2 Fingerprints
  { id: 'for-05', event: 'forensics', front: 'Fingerprint pattern types', back: 'Loop (~65%): one delta, ridges enter/exit same side (ulnar or radial). Whorl (~30%): two deltas, circular/spiral ridges. Arch (~5%): no delta, ridges undulate.' },
  { id: 'for-06', event: 'forensics', front: 'Fingerprint minutiae', back: 'Ridge endings (ridge terminates), bifurcations (splits into two), dots, short ridges, enclosures (eye/lake), spurs. Minimum 8-16 matching points for court identification.' },
  { id: 'for-07', event: 'forensics', front: 'Latent vs patent vs plastic prints', back: 'Latent: invisible, requires development (sweat/oils). Patent: visible without development (blood, grease, paint). Plastic: 3D impression in soft material (wax, putty, soap).' },
  { id: 'for-08', event: 'forensics', front: 'Fingerprint development – porous surfaces', back: 'Ninhydrin (purple; reacts amino acids), DFO (fluorescent; older prints), Physical Developer (silver; old/wet), Indanedione-zinc. Order: DFO → ninhydrin → PD.' },
  { id: 'for-09', event: 'forensics', front: 'Fingerprint development – non-porous surfaces', back: 'Cyanoacrylate (Superglue) fuming (white deposits on ridges) → then powder or fluorescent dye (Rhodamine 6G). Powder: black (light surfaces), aluminum/white (dark surfaces).' },
  { id: 'for-10', event: 'forensics', front: 'AFIS', back: 'Automated Fingerprint Identification System; computerized database search; scores candidates; requires human examiner for final ACE-V verification (Analyze, Compare, Evaluate, Verify).' },

  // §3 Hair
  { id: 'for-11', event: 'forensics', front: 'Hair structure layers', back: 'Cuticle (outer, overlapping scales), Cortex (middle, pigment granules, fusiform cells, cortical fusi), Medulla (central canal; present, fragmented, discontinuous, or continuous).' },
  { id: 'for-12', event: 'forensics', front: 'Medullary index', back: 'MI = medulla diameter / total hair diameter. Human hair: MI < 1/3 (often absent). Animal hair: MI ≥ 1/2. Used to distinguish human from animal in forensic analysis.' },
  { id: 'for-13', event: 'forensics', front: 'Anagen vs catagen vs telogen', back: 'Anagen (growing): follicular tag present → nuclear DNA available; bulb shape is wide. Catagen (transition): brief. Telogen (resting/shed): club root; nuclear DNA absent; only mtDNA.' },
  { id: 'for-14', event: 'forensics', front: 'Cuticle scale patterns in animals', back: 'Coronal (crown-like, stacked): bat, rodent. Spinous (petal/spine-like): cat. Imbricate (flattened, overlapping): human and most mammals. Used for animal species identification.' },
  { id: 'for-15', event: 'forensics', front: 'Racial/ancestry hair characteristics', back: 'Caucasian: straight/wavy, oval cross-section, diffuse pigment. African: tightly coiled, flattened cross-section, dense/clumped pigment, broader medulla. East Asian: straight, round cross-section, dense diffuse pigment, thick cuticle. Note: only probabilistic estimates.' },

  // §4 Blood Evidence
  { id: 'for-16', event: 'forensics', front: 'Kastle-Meyer test', back: 'Presumptive test for blood; phenolphthalein reagent + H₂O₂ → pink/magenta color. Peroxidase-like activity of hemoglobin catalyzes reaction. False positives: some vegetables, certain chemicals.' },
  { id: 'for-17', event: 'forensics', front: 'Luminol test', back: 'Presumptive chemiluminescent test (blue-green glow in dark); oxidizes luminol with blood traces; can detect after cleaning; 1:1,000,000 dilution; does not destroy DNA; false positives: bleach, copper compounds.' },
  { id: 'for-18', event: 'forensics', front: 'ABO blood type antigens & antibodies', back: 'A: A antigen + anti-B antibody. B: B antigen + anti-A antibody. AB: both antigens, no antibodies (universal recipient). O: no antigens, both antibodies (universal donor). Codominant IA/IB alleles over recessive i.' },
  { id: 'for-19', event: 'forensics', front: 'Blood spatter impact angle', back: 'θ = arcsin(W/L) where W = width of stain, L = length of stain. More elongated → smaller angle (more glancing). Tail/satellite drops point in direction of travel.' },
  { id: 'for-20', event: 'forensics', front: 'Area of Origin (blood spatter)', back: 'Strings (or rods) strung through each elliptical stain\'s long axis converge at approximate origin. Vertical height determined by tangent method using satellite spatter or trigonometry.' },
  { id: 'for-21', event: 'forensics', front: 'Void pattern', back: 'Absence of blood spatter where an object (victim, perpetrator, furniture) blocked droplets; can reveal position of person/object during bloodshed.' },

  // §5 DNA Evidence
  { id: 'for-22', event: 'forensics', front: 'STR (Short Tandem Repeat) profiling', back: 'Core of CODIS; 20 STR loci (CODIS Core) + amelogenin for sex. Multiplexed PCR amplification; capillary electrophoresis; allele sizes compared. Match probability <1 in quadrillion for full 20-locus profile.' },
  { id: 'for-23', event: 'forensics', front: 'CODIS database', back: 'Combined DNA Index System (FBI); SDIS (state) → LDIS (local) → NDIS (national). Forensic (crime scene) index + offender index + missing persons. Hit = potential match requiring confirmation.' },
  { id: 'for-24', event: 'forensics', front: 'Touch DNA', back: 'Very small amounts from skin cells left by handling; requires low-copy number (LCN) PCR or advanced techniques; higher risk of contamination and stochastic effects.' },
  { id: 'for-25', event: 'forensics', front: 'Mitochondrial DNA (mtDNA) forensics', back: 'Used when nuclear DNA unavailable (shed hairs, old bones, teeth). Maternally inherited; all maternal relatives identical; not unique; sequence HVR1/HVR2 regions; cannot individualize like STR.' },

  // §6 Entomology / PMI
  { id: 'for-26', event: 'forensics', front: 'Post-Mortem Interval (PMI)', back: 'Time since death. Entomological PMI uses oldest life stage present, working backward through development times. Add Development Time = K (species constant in degree-hours or degree-days) / daily ADD.' },
  { id: 'for-27', event: 'forensics', front: 'ADD (Accumulated Degree Days/Hours)', back: 'ADD = Σ (T_avg − T_base) for each interval. T_base = minimum development temperature. For Cochliomyia macellaria at T_base = 9.1°C, K = 6023 degree-hours egg→adult.' },
  { id: 'for-28', event: 'forensics', front: 'Blow fly succession', back: 'Calliphoridae (blowflies) first colonizers within minutes to hours. Followed by Sarcophagidae (flesh flies), then Piophilidae, Dermestidae (dry stage), Acari (mites). Order diagnostic for interval estimate.' },
  { id: 'for-29', event: 'forensics', front: 'Larval instars – identification', back: 'L1: small (~2mm), no anterior hooks. L2: medium, one row of teeth on mouth hooks. L3: largest (~12-15mm), two rows; migrate from body to pupate in soil. Distinguish by size, spiracle morphology.' },
  { id: 'for-30', event: 'forensics', front: 'Calliphora vs Lucilia vs Phormia', back: 'Calliphora (bluebottles): metallic blue-black, cold-weather colonizers. Lucilia (greenbottles): metallic green, warm weather, sheep strike. Phormia regina (black blowfly): common N. America.' },
  { id: 'for-31', event: 'forensics', front: 'Decomposition stages', back: 'Fresh (0-3d): no odor, autolysis. Bloat (2-6d): gas buildup, marbling, purge fluid. Active decay (5-11d): collapse, putrefaction, maggot mass. Advanced decay. Dry/skeletal: beetle stage.' },

  // §7 Chromatography
  { id: 'for-32', event: 'forensics', front: 'Rf value (chromatography)', back: 'Rf = distance traveled by compound / distance traveled by solvent front. Range 0–1. Dimensionless. Reproducible only with identical solvent, medium, temperature. Used to compare unknowns to standards.' },
  { id: 'for-33', event: 'forensics', front: 'Paper chromatography vs TLC', back: 'Paper: cellulose stationary phase, aqueous mobile phase. TLC: silica gel (more polar) on aluminum/glass; faster, sharper bands; UV visualization possible. Both used for ink/dye/drug analysis.' },
  { id: 'for-34', event: 'forensics', front: 'Gas Chromatography-Mass Spectrometry (GC-MS)', back: 'GC separates compounds by volatility/polarity; MS fragments and identifies by m/z ratio. Gold standard for drug/arson/toxicology identification. Library matching of fragmentation patterns.' },
  { id: 'for-35', event: 'forensics', front: 'HPLC (High-Performance Liquid Chromatography)', back: 'Liquid mobile phase; used for non-volatile compounds. Reverse-phase HPLC most common (nonpolar stationary, polar mobile). Used for drugs, dyes, proteins. UV/fluorescence/MS detection.' },

  // §8 Questioned Documents
  { id: 'for-36', event: 'forensics', front: 'Indented writing (ESDA)', back: 'Electrostatic Detection Apparatus reveals impressions from writing on overlying sheets; non-destructive; latent indentations visualized with metallic toner and Mylar sheet.' },
  { id: 'for-37', event: 'forensics', front: 'Ink analysis methods', back: 'Paper chromatography/TLC: separate dye components. HPLC/MS: component ID. VSC (Video Spectral Comparator): different inks same color appear different under IR/UV. SEM-EDX: elemental pen/ink analysis.' },
  { id: 'for-38', event: 'forensics', front: 'Paper analysis', back: 'Fiber content (wood pulp vs cotton/rag), filler (clay, titanium dioxide), watermarks (manufacturer authentication), fluorescence under UV (optical brighteners), thickness/weight.' },

  // §9 Ballistics
  { id: 'for-39', event: 'forensics', front: 'Rifling (striae on bullet)', back: 'Spiral lands and grooves cut inside barrel; impart spin to bullet for accuracy; leave unique marks. Number of lands/grooves, twist direction (L/R), twist rate are class characteristics.' },
  { id: 'for-40', event: 'forensics', front: 'DRUGFIRE / NIBIN', back: 'National Integrated Ballistic Information Network; images firing pin impressions and ejector marks on cartridge cases; links cases from same firearm across crime scenes.' },
  { id: 'for-41', event: 'forensics', front: 'GSR (Gunshot Residue)', back: 'Lead-antimony-barium (PbSbBa) spherical primer residue particles; deposited on hands, face, clothing; collected by SEM-EDX swabs; must collect within 4-6 hours (washing removes).' },
  { id: 'for-42', event: 'forensics', front: 'Caliber & gauge', back: 'Caliber: internal barrel diameter in inches (US, e.g., .38) or mm (e.g., 9mm). Gauge: shotgun bore measurement; inverse of how many balls of bore-diameter fill one pound of lead. 12-gauge most common; smaller gauge # = larger bore.' },
  { id: 'for-43', event: 'forensics', front: 'Entrance vs Exit wounds', back: 'Entrance: smaller, inverted edges, bullet wipe ring, may have abrasion collar. Exit: larger, irregular/stellate, everted edges, no bullet wipe. Contact shot: soot, stippling, star-shaped tear.' },

  // §10 Toxicology
  { id: 'for-44', event: 'forensics', front: 'LD50 / LC50', back: 'LD50: dose killing 50% of test population (mg/kg). LC50: lethal concentration for 50% in air/water (mg/L). Used to compare relative toxicity. Lower LD50 = more toxic.' },
  { id: 'for-45', event: 'forensics', front: 'Vitreous humor toxicology', back: 'Eye fluid resists decomposition better than blood; useful for postmortem alcohol/drug analysis; less subject to postmortem redistribution; refrigerate and analyze promptly.' },
  { id: 'for-46', event: 'forensics', front: 'Postmortem redistribution', back: 'Drug/alcohol concentrations change after death due to diffusion from organs (especially stomach, liver) into blood. Can falsely elevate blood levels. Vitreous or femoral blood preferred.' },
  { id: 'for-47', event: 'forensics', front: 'Immunoassay drug screening', back: 'ELISA, EMIT, CLIA: antibody-based rapid screening; highly sensitive but cross-reactivity causes false positives. All positives must be confirmed by GC-MS or LC-MS/MS (specific & definitive).' },

  // §11 Mass Spectrometry (Forensics)
  { id: 'for-48', event: 'forensics', front: 'Mass spectrometry m/z', back: 'm/z = mass-to-charge ratio; most ions singly charged (z=1) so m/z ≈ mass in Da. Molecular ion M⁺• = m/z of intact molecule. Base peak = most abundant fragment. Fragmentation pattern is a "fingerprint."' },
  { id: 'for-49', event: 'forensics', front: 'M+1 isotope peak', back: '¹³C contribution: ~1.1% per carbon. M+1 intensity / M intensity × 100 ≈ number of carbons. Used to determine molecular formula from mass spectrum.' },
  { id: 'for-50', event: 'forensics', front: 'Halogen isotope patterns', back: 'Cl: ³⁵Cl/³⁷Cl ≈ 3:1 → M:M+2 peaks ≈ 3:1. Br: ⁷⁹Br/⁸¹Br ≈ 1:1 → M:M+2 peaks ≈ 1:1. Two Cl: M:M+2:M+4 = 9:6:1. Diagnostic for halogenated compounds.' },

  // §12 Glass & Soil
  { id: 'for-51', event: 'forensics', front: 'Refractive Index (RI) of glass', back: 'RI = c/v = sin(θᵢ)/sin(θᵣ). Glass fragments matched to source by RI. Becke line method: immerse in liquid, focus up; Becke line moves toward higher RI medium. Same RI = glass may share source.' },
  { id: 'for-52', event: 'forensics', front: 'Glass fracture patterns', back: 'Radial cracks extend from point of impact. Concentric cracks form rings. RSVP rule: Radial cracks show Stress on Vent (back) face (tension side). Sequence of multiple impacts: later radial cracks stop at existing ones.' },
  { id: 'for-53', event: 'forensics', front: 'Soil analysis methods', back: 'Munsell color chart; particle size distribution (sand/silt/clay); mineral content (XRD); pollen/spores (palynology); density gradient; diatoms. Geologically-specific combinations link to location.' },

  // §13 Anthropology
  { id: 'for-54', event: 'forensics', front: 'Forensic anthropology Big Four', back: 'Sex, age, ancestry, stature estimated from skeletal remains. Pelvis most reliable for sex; dental development for age in subadults; long bone regression equations for stature.' },
  { id: 'for-55', event: 'forensics', front: 'Pubic symphysis aging', back: 'Surface morphology changes with age (Suchey-Brooks phases): irregular ridges early → smooth platform → deterioration late. Requires comparing to reference casts.' },
  { id: 'for-56', event: 'forensics', front: 'Taphonomy', back: 'Study of what happens to remains after death: weathering stages, animal scavenging, burial chemistry, plant root effects. Helps interpret depositional environment and postmortem interval.' },

  // §14 Cause, Manner, Mechanism of Death
  { id: 'for-57', event: 'forensics', front: 'Cause vs Manner vs Mechanism of death', back: 'Cause: disease/injury initiating fatal chain (e.g., gunshot wound to chest). Mechanism: physiological reason for death (e.g., hemorrhagic shock). Manner: circumstances (homicide, suicide, accident, natural, undetermined).' },
  { id: 'for-58', event: 'forensics', front: 'Livor mortis', back: 'Postmortem lividity; blood pools due to gravity (12-24h); skin discolors purple-red; fixed after ~6-12h; pallor where body pressed against surface. Position at death vs moved.' },
  { id: 'for-59', event: 'forensics', front: 'Rigor mortis', back: 'Muscular stiffening; ATP depleted → myosin-actin locked. Begins 2-4h, peaks 12h, releases 24-48h. Rate affected by temperature, exertion, body composition. Not reliable for time of death alone.' },
  { id: 'for-60', event: 'forensics', front: 'Algor mortis', back: 'Body cooling after death; ~1-1.5°C/hr under standard conditions (Henssge nomogram). Affected by body size, clothing, ambient temp, air movement. Used with caution for PMI.' },

];
