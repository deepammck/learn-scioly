/* ============================================================
   Learn Tab — guided curriculum with per-lesson teaching
   ============================================================ */
'use strict';

// ── Guide file paths ──────────────────────────────────────────────────────────
const LEARN_GUIDE_FILES = {
  desgen:    'content/desgen-studyguide.md',
  forensics: 'content/forensics-studyguide.md',
};
const _learnRawMd   = { desgen: null, forensics: null };
const _learnFetches = {};

// ── Section name maps ─────────────────────────────────────────────────────────
const SECTION_NAMES = {
  desgen: {
    '1':  '§1 — Mendelian Genetics',
    '2':  '§2 — Mitosis & Meiosis',
    '3':  '§3 — Population & Evolutionary Genetics',
    '4':  '§4 — Molecular Biology of DNA',
    '5':  '§5 — Prokaryotic Gene Expression',
    '6':  '§6 — Technology & Techniques',
    '7':  '§7 — Quick-Reference Formula Sheet',
    '8':  '§8 — Reference Tables & Worked Examples',
    '9':  '§9 — Worked Calculations & Gap-Fill',
    '10': '§10 — Invitational Cross-Check',
    '11': '§11 — Gap-Fill Supplement II',
    '12': '§12 — Lexington Set Analysis',
    '_':  'Other',
  },
  forensics: {
    '§1':  '§1 — Qualitative Analysis (15 Substances)',
    '§2':  '§2 — Polymers (Plastics)',
    '§3':  '§3 — Fibers',
    '§4':  '§4 — Hair',
    '§5':  '§5 — Fingerprints',
    '§6':  '§6 — Crime-Scene Physical Evidence',
    '§7':  '§7 — Chromatography & Mass Spectrometry',
    '§8':  '§8 — Advanced Chemistry Topics',
    '§9':  '§9 — The 30% Analysis Write-Up',
    '§10': '§10 — DNA Sequencing Technologies',
    '§11': '§11 — Seeds, Pollen, Soil, Tracks',
    '§12': '§12 — Event Logistics & Strategy',
    '§13': '§13 — Image-Only Gaps',
    '§14': '§14 — Resources',
    '§15': '§15 — General-Knowledge Supplement',
    '§16': '§16 — Technical Appendix',
    '_':   'Other',
  },
};

function getLessonGroup(heading, event) {
  if (event === 'desgen') {
    const m = heading.match(/^(\d+)\./);
    return m ? m[1] : '_';
  }
  const m = heading.match(/^§(\d+)/);
  return m ? `§${m[1]}` : '_';
}

// ── "In Plain Terms" content ──────────────────────────────────────────────────
const LESSON_SIMPLE_TERMS = {

  // §1 Mendelian Genetics
  'desgen-11-mendels-laws-of-inheritance':
    'Mendel cracked heredity by counting pea plants — and the math still runs every genetics problem you\'ll see. His Law of Segregation says each parent donates exactly one allele per gene to each offspring; his Law of Independent Assortment says alleles for different genes shuffle separately (as long as they\'re on different chromosomes). Dominant alleles mask recessive ones, giving the 3:1 ratio in monohybrid crosses. Every pedigree, every cross, every H-W calculation rests on these two laws.',

  'desgen-12-inheritance-patterns-that-violate-simple-mendelian-laws':
    'Not everything follows 3:1. When heterozygotes look intermediate between parents, that\'s incomplete dominance (red × white → pink). When both alleles show up equally in the heterozygote, that\'s codominance (A and B blood type antigens in type AB). Multiple alleles means a gene has more than two alleles in the population — the ABO system has three (IA, IB, i). Learn to distinguish these: they change what ratios you expect and how you write genotypes.',

  'desgen-13-probability-rules-the-engine-behind-every-genetics-calculation':
    'Two rules power all genetics math. The product rule: probability that independent events both occur equals the product of their individual probabilities — use it for "what fraction are AA AND BB." The sum rule: probability that either of two mutually exclusive events occurs equals the sum — use it for "what fraction are AA OR Aa." Combine them for dihybrid and trihybrid crosses without drawing giant Punnett squares.',

  'desgen-14-punnett-squares-mono--di--and-trihybrid':
    'A Punnett square is just organized probability. For a monohybrid cross list 2 gametes × 2 gametes = 4 boxes. For dihybrid, list 4 gametes × 4 gametes = 16 boxes (which gives 9:3:3:1 for AaBb × AaBb). For a trihybrid, the grid is 8 × 8 = 64 boxes — use probability math instead. The key skill: correctly writing out the gametes (which means listing all possible allele combinations from the parent genotype).',

  'desgen-15-predicting-genotypesphenotypes-computing-likelihood':
    'Once you have a cross, you need to know what fraction of offspring show a specific genotype or phenotype. Phenotype ratio (3:1, 9:3:3:1) tells you what organisms look like; genotype ratio (1:2:1, 1:2:1:2:4:2:1:2:1) tells you their actual allele combinations. For linked or conditional questions, set up the cross systematically — write parent genotypes, list gametes, fill grid or multiply probabilities, then count.',

  'desgen-16-epistasis-explicit-rules-subtopic':
    'Epistasis is when one gene shuts up another gene. The result is modified dihybrid ratios (all must add up to 16). Recessive epistasis at one locus silences both alleles of the other gene → 9:3:4. Dominant epistasis at one locus silences the other → 12:3:1. Duplicate dominant epistasis (either gene alone causes phenotype) → 15:1. Duplicate recessive epistasis (both must be homozygous recessive) → 9:7. Memorizing ratios is fragile — reason from the biochemical pathway instead.',

  'desgen-17-complementation-explicit-rules-subtopic':
    'Complementation answers "are these two recessive mutations in the same gene or different genes?" Cross two homozygous recessive mutants. If offspring are WILD-TYPE (normal), the mutations complement each other — they\'re in different genes, each providing a working copy. If offspring are still MUTANT, the mutations are in the same gene — no complementation. This is the gold-standard way to assign mutations to genes.',

  'desgen-18-pedigree-analysis-explicit-rules-subtopic-high-frequency':
    'Pedigrees are family trees that map trait transmission across generations. Squares = males, circles = females, filled shapes = affected. Four main patterns: autosomal dominant (every affected person has an affected parent, both sexes equally affected), autosomal recessive (skips generations, carrier parents unaffected), X-linked recessive (mostly males affected, no father-to-son, carrier mothers), and mitochondrial (all children of affected MOTHER are affected, father doesn\'t transmit). Work through the pedigree systematically — figure out the transmission pattern first, then assign genotypes.',

  'desgen-19-linkage-statenat-for-mapping-but-linkage-concept-is-general':
    'Genes on the same chromosome are linked — they tend to travel together instead of assorting independently. The closer two genes are on the chromosome, the more linked they are. Crossing over during meiosis can separate linked genes; the frequency of recombinant offspring directly measures the map distance between genes (1% recombinant frequency = 1 centimorgan = 1 map unit). If RF > 50%, genes behave as if unlinked regardless of chromosome location.',

  // §2 Mitosis & Meiosis
  'desgen-21-the-cell-cycle-context-for-both':
    'The cell cycle has two main phases: interphase (G1 → S → G2) where the cell grows and copies its DNA, and the mitotic (M) phase where it divides. S phase is when DNA replication happens — each chromosome gets duplicated into two sister chromatids joined at the centromere. G1 checkpoint checks cell size and nutrients; G2 checkpoint checks DNA replication completeness; the spindle assembly checkpoint during M phase ensures all chromosomes attach properly before separation.',

  'desgen-22-mitosis-stages-and-structures':
    'Mitosis produces two genetically identical daughter cells for growth and repair. The four stages: Prophase (chromosomes condense, spindle forms, nuclear envelope breaks down), Metaphase (chromosomes line up at the metaphase plate — easiest to count them here), Anaphase (sister chromatids pulled apart to opposite poles), Telophase + cytokinesis (nuclear envelopes reform, cell splits). Key structure: the kinetochore is the protein complex on the centromere where spindle microtubules attach.',

  'desgen-23-meiosis-stages-and-structures':
    'Meiosis produces four haploid gametes from one diploid cell. It has TWO rounds of division. Meiosis I separates homologous chromosomes (the big reduction division — this is where independence assortment and crossing over happen). Meiosis II separates sister chromatids (like mitosis but starting haploid). The critical event in Prophase I is synapsis: homologs pair up as bivalents/tetrads and crossing over creates chiasmata, generating new allele combinations.',

  'desgen-24-mitosis-vs-meiosis-compare-and-contrast-high-frequency-table':
    'The comparison table is one of the highest-yield topics in the event. Key contrasts: Mitosis produces 2 diploid cells, meiosis produces 4 haploid cells. Mitosis has 1 division, meiosis has 2. Mitosis has no homolog pairing or crossing over, meiosis I does. Mitosis is for growth/repair/asexual reproduction, meiosis is for sexual reproduction. Crossing over in meiosis I increases genetic diversity. Nondisjunction can occur in either, but consequences differ.',

  'desgen-25-nondisjunction-and-chromosomal-abnormalities-statenat-explicit-rules-subtopic':
    'Nondisjunction occurs when chromosomes fail to separate properly. In Meiosis I, homologs don\'t separate → gametes get two copies of one chromosome OR none. In Meiosis II, sister chromatids don\'t separate → similar result. The outcomes: trisomy (2n+1, like Down syndrome = trisomy 21), monosomy (2n-1, like Turner syndrome = 45,X). Polyploidy (3n, 4n) arises when entire sets don\'t separate. Know that the sex chromosomal aneuploidies (XXY=Klinefelter, 45X=Turner) are generally less severe than autosomal ones.',

  'desgen-26-karyotypes-and-reading-them-statenat-explicit-rules-subtopic':
    'A karyotype is a photograph of chromosomes arranged by size and centromere position, stained to show banding patterns. You can diagnose trisomies (extra chromosome), monosomies (missing chromosome), translocations (piece of one chromosome fused to another), and deletions. Human karyotypes: 46 chromosomes normally (44 autosomes + XX or XY). Banding patterns are reproducible enough to identify each chromosome pair uniquely.',

  // §3 Population Genetics
  'desgen-31-hardyweinberg-equilibrium-hwe-assumptions-equations-calculations':
    'Hardy-Weinberg is the null model: in an ideal population with no evolution, allele frequencies stay constant forever. The two equations: p + q = 1 (allele frequencies sum to 1) and p² + 2pq + q² = 1 (genotype frequencies). Start from q² (the recessive homozygote frequency, which you can observe) → take the square root to get q → then p = 1 − q → compute 2pq (carriers). The five assumptions that must hold: large population, random mating, no mutation, no gene flow, no natural selection. Any violation means evolution is occurring.',

  'desgen-32-testing-hwe-with-chi-square-you-should-be-ready-for-this':
    'Chi-square tests whether observed genotype counts deviate significantly from H-W expectations. Formula: χ² = Σ(O − E)²/E where O is observed count and E is expected count (from H-W frequencies × total N). Degrees of freedom = number of genotype categories − 1 − number of allele frequencies estimated from data (usually df = 1 for 2-allele autosomal locus). Compare your χ² to the critical value table at α = 0.05. If χ² > critical value, reject H-W equilibrium.',

  'desgen-33-forces-that-change-allele-frequencies-rules-subtopic-drift-founder-bottleneck':
    'Five forces move populations away from H-W equilibrium. Natural selection: differential reproduction based on fitness. Mutation: introduces new alleles (usually rare). Gene flow (migration): moving individuals in/out changes frequencies. Genetic drift: random fluctuations, strongest in small populations. Non-random mating (inbreeding): shifts genotype but not allele frequencies. The founder effect and bottleneck are both forms of drift — small founding populations carry only a subset of original allele diversity.',

  'desgen-35-quantitativepolygenic-traits-continuous-variation-rules-subtopic':
    'Height, skin color, and yield are polygenic — many genes each contribute small additive effects. The result is a continuous bell-curve distribution rather than discrete classes. The more genes involved (n), the more phenotypic classes: 2n + 1 classes, with the middle class most common. Environmental variation also contributes, blurring the distribution further. Heritability (H²) quantifies how much of the phenotypic variation in a population is due to genetic differences.',

  'desgen-36-heritability-statenat-explicit-rules-subtopic-calculation-required':
    'Narrow-sense heritability (h² or H²) = VA/VP = (additive genetic variance)/(total phenotypic variance). The practical formula for calculation: H² = R/S, where R is the response to selection (change in mean between offspring and the population mean) and S is the selection differential (mean of selected parents minus the population mean). H² ranges from 0 (all environmental) to 1 (all genetic). Use the breeder\'s equation R = H² × S to predict how a trait will respond to artificial selection.',

  'desgen-37-gene-mapping-from-recombination-data-state-2-genes-nationals-3-genes-explicit':
    'Recombination frequency (RF) between two genes = (recombinant offspring / total offspring) × 100%. 1% RF ≈ 1 centimorgan (cM) ≈ 1 map unit. For a two-point cross: do a dihybrid test cross, identify the recombinant classes (the least frequent), calculate RF. For a three-point cross (Nationals): the double-crossover class is the rarest — compare it to the parental class to determine gene ORDER in the middle, then calculate RF for each interval.',

  // §4 Molecular Biology of DNA
  'desgen-41-dna-structure-nucleotides-backbone-directionality-base-pairing':
    'DNA is a double helix of two antiparallel polynucleotide strands. Each nucleotide has three parts: a phosphate group, a deoxyribose sugar, and a nitrogenous base (A, T, G, or C). The backbone is sugar-phosphate; bases point inward and pair across via hydrogen bonds (A–T: 2 bonds; G–C: 3 bonds, stronger). The two strands run antiparallel — one 5′→3′ left to right, the other 3′→5′. Chargaff\'s rules: %A = %T and %G = %C in any double-stranded DNA.',

  'desgen-42-dna-replication-stages-from-pre-rc-assembly-to-termination-rules-specific-dep':
    'Replication starts at origins (many in eukaryotes, one in bacteria). Helicase unwinds the double helix forming a replication fork. Primase lays short RNA primers to give DNA polymerase a starting point. DNA polymerase III (prokaryotes) / Pol δ/ε (eukaryotes) extends 5′→3′ only. The leading strand is synthesized continuously; the lagging strand is synthesized as short Okazaki fragments that are later joined by DNA ligase. Single-strand binding proteins (SSBs) stabilize the unwound strands; topoisomerase relieves supercoiling ahead of the fork.',

  'desgen-43-fidelity-of-replication-dna-proofreading-rules-specific-subtopic':
    'DNA polymerase makes about 1 error per 10⁵ bases but the final mutation rate is ~1 per 10⁹ because of proofreading. DNA pol\'s 3′→5′ exonuclease activity detects and excises mismatched bases immediately after incorporation. Mismatch repair (MMR) after replication catches remaining errors. Replication fidelity also depends on dNTP pool balance and base stacking stability. High-fidelity Pfu polymerase has strong proofreading; Taq does not, so Taq-PCR products have higher error rates.',

  'desgen-44-dna-organization-plasmids-chromatin-euchromatinheterochromatin-chromosomes-ru':
    'DNA is packaged at multiple levels. The nucleosome is the basic unit: 147 bp of DNA wrapped ~1.7× around an octamer of histones (H2A, H2B, H3, H4, two copies each). Nucleosomes are like beads on a string; these pack into 30 nm fibers, then loops and domains. Euchromatin is loosely packed and transcriptionally active; heterochromatin is condensed and silenced (e.g., centromeres, telomeres). Bacterial DNA is a circular chromosome compacted by DNA gyrase and HU proteins. Plasmids are small extrachromosomal circles.',

  'desgen-45-dna-damage-and-repair-rules-specific-subtopic':
    'DNA is constantly damaged by UV light (thymine dimers), reactive oxygen species, alkylating agents, and replication errors. Key repair pathways: Base excision repair (BER) removes damaged bases with a glycosylase, then fills the gap. Nucleotide excision repair (NER) cuts out ~25-30 bp around bulky lesions like thymine dimers (defect → Xeroderma pigmentosum). Mismatch repair (MMR) corrects replication errors. Homologous recombination (HR) and non-homologous end joining (NHEJ) repair double-strand breaks.',

  'desgen-46-dna-mutations-identify-explain-classify-impact-on-protein-rules-specific':
    'Point mutations: substitution of one base. Silent — changed codon still codes for same amino acid (degeneracy). Missense — changed codon codes for a different amino acid (may be conservative if similar properties, or non-conservative). Nonsense — creates a premature stop codon, truncating protein. Frameshift — insertion or deletion of nucleotides not in multiples of 3, shifts the reading frame downstream. Transitions (purine↔purine or pyrimidine↔pyrimidine) are more common than transversions (purine↔pyrimidine).',

  // §5 Gene Expression
  'desgen-51-central-dogma-reverse-transcription-rules-specific':
    'The Central Dogma: DNA → (transcription) → RNA → (translation) → Protein. Information normally flows in that direction. Reverse transcriptase is the enzyme that breaks the rule, copying RNA back into DNA — used by retroviruses like HIV and exploited in cDNA cloning. DNA-to-DNA replication happens during the cell cycle. RNA-to-RNA replication is used by some RNA viruses. Protein-to-nucleic acid has never been observed.',

  'desgen-52-transcription-initiation-elongation-termination-rna-polymerase-rules-specific':
    'In prokaryotes, a single RNA polymerase (with σ factor for promoter recognition) transcribes all RNA types. The σ factor recognizes the –10 (Pribnow box: TATAAT) and –35 (TTGACA) promoter elements. Eukaryotes have three RNA pols: Pol I (rRNA), Pol II (mRNA), Pol III (tRNA, 5S rRNA). Eukaryotic mRNA is processed: 5′ methylguanosine cap added, 3′ poly-A tail added, introns spliced out by the spliceosome. Only the mature mRNA leaves the nucleus.',

  'desgen-53-cis--and-trans-regulatory-elements-rules-specific-promoters-enhancers-silence':
    'Cis-regulatory elements are DNA sequences that regulate nearby genes — they act on the same chromosome. Promoters (upstream of gene), enhancers (can be far away, activate transcription), silencers (repress). Trans-acting factors are proteins (transcription factors) that bind to cis elements and are encoded elsewhere in the genome. In the lac operon: the operator is a cis element; the lac repressor protein is a trans-acting factor. Understanding this distinction is critical for partial diploid (merodiploid) problems.',

  'desgen-54-translation-initiation-elongation-termination-ribosome-mrna-trna-regulation-r':
    'Translation occurs at ribosomes. In prokaryotes, the Shine-Dalgarno sequence (upstream of AUG) base-pairs with 16S rRNA to position the ribosome. AUG (methionine) is the start codon. Three sites: A (aminoacyl — incoming charged tRNA), P (peptidyl — growing chain), E (exit). Peptidyl transferase (a ribozyme, 23S/28S rRNA) forms the peptide bond. UAA, UAG, UGA are stop codons recognized by release factors. In eukaryotes, ribosomes scan from the 5′ cap to find the first AUG.',

  // §6 Techniques
  'desgen-61-polymerase-chain-reaction-pcr-rules-specific':
    'PCR amplifies a specific DNA region exponentially — 2ⁿ copies after n cycles. Three steps per cycle: Denaturation (~95°C) separates the strands. Annealing (Tm of primers, typically 50–65°C) — primers bind their complementary sequences flanking the target. Extension (72°C, Taq polymerase) — new strand synthesized 5′→3′. Requirements: template DNA, two specific primers, dNTPs, Taq polymerase, MgCl₂ (cofactor), buffer. After ~30 cycles the dominant product is the region between the primers.',

  'desgen-62-sanger-sequencing-rules-how-it-differs-from-standard-pcr':
    'Sanger sequencing uses dideoxy chain-terminating nucleotides (ddNTPs) alongside normal dNTPs. Each ddNTP lacks a 3′-OH, so DNA synthesis stops when one is incorporated. Modern Sanger uses four fluorescently labeled ddNTPs in one reaction; capillary electrophoresis separates the resulting fragments by size and a laser reads the color of each — giving the sequence. Read length: ~700–1000 bp. It\'s the gold standard for verifying a specific sequence but too slow for whole-genome projects.',

  'desgen-63-next-gen-illumina-vs-third-gen-nanopore-sequencing-rules-compare-contrast-how':
    'Illumina (second-generation): sequence by synthesis on a flow cell. DNA fragments get adapters, cluster on flow cell, each cluster is sequenced one base at a time using reversibly-terminated fluorescent dNTPs; camera images each cycle. Massive parallel — billions of short reads (~150 bp). Highly accurate but short reads struggle with repetitive regions. Oxford Nanopore (third-generation): strand of DNA (or RNA) threads through a protein nanopore; changes in ionic current identify each base. Reads are very long (>10 kb, even >1 Mb), real-time, but higher raw error rate.',

  'desgen-64-molecular-cloning-rules-specific-plasmids-restriction-enzymes-pcr-gibson-blue':
    'Molecular cloning inserts a DNA fragment into a vector (usually a plasmid) to propagate it in bacteria. Classic restriction-ligation cloning: cut insert and vector with the same restriction enzyme → compatible sticky ends → ligate → transform into bacteria → select on antibiotic plates. Blue-white screening uses lacZ: cells with insert disrupt lacZ → white colonies; cells with empty vector → blue. Gibson Assembly joins fragments by overlapping sequences — no restriction sites needed. Restriction maps show where enzymes cut on a linear or circular DNA.',

  'desgen-65-knockouts-knockdowns-complementation-rules-specific-to-determine-gene-functio':
    'To determine what a gene does you disrupt it and observe the result. Knockout: completely eliminate the gene (CRISPR-Cas9 indels, homologous recombination). Knockdown: reduce expression (RNAi, antisense, CRISPRi). Overexpression: express extra copies to see gain-of-function. Complementation: re-introduce a wild-type copy into a mutant — if it rescues the phenotype, you\'ve confirmed the gene is responsible. Conditional knockouts (using Cre/lox) allow tissue-specific or temporal control.',

  // §8 Appendix content
  'desgen-81-the-genetic-code-mrna-codon-table':
    'The genetic code is the key that maps 64 mRNA codons to 20 amino acids (plus 3 stop signals). It\'s redundant (degenerate) — multiple codons can encode the same amino acid, especially differing only in the third position (wobble). AUG is the ONLY start codon and codes for methionine. Stop codons: UAA ("ochre"), UAG ("amber"), UGA ("opal/umber"). The code is nearly universal across all life, strong evidence for common ancestry. You need to know how to translate a sequence and identify mutation effects using the table.',

  'desgen-83-worked-sequence-protein-example-the-exact-tested-skill':
    'The translation skill: given a DNA coding strand, write the mRNA (T→U, same sequence but with U), then read the mRNA in 5′→3′ codons from the AUG start, translate each codon using the genetic code table, write the amino acid sequence. Then introduce a mutation and classify it: silent (same AA), missense (different AA), nonsense (stop codon), or frameshift (indel shifts reading frame). Know the amino acid property categories — a missense from nonpolar to acidic is non-conservative and likely harmful.',

  'desgen-103-bayesian-conditional-probability-for-carrier-risk-2-tests-nuso-yji':
    'Bayesian analysis updates probability using new evidence. Classic scenario: sister of an affected male (X-linked recessive). Prior probability she\'s a carrier = 2/3 (since she\'s unaffected but has one affected brother). Each unaffected son she has provides evidence: a carrier mother has a 1/2 chance of an unaffected son; a non-carrier mother has probability 1. Multiply prior × likelihoods for each child → normalize. With n unaffected sons, carrier probability drops from 2/3 to 2/(2 + 2ⁿ).',

  'desgen-1011-mutation-selection-balance-and-heterozygote-advantage-equilibrium-1-test-ea':
    'For a deleterious recessive allele, mutation pressure (rate μ adding the allele) equals selection pressure (removing it). Equilibrium frequency: q̂ = √(μ/s) where s is the selection coefficient against the homozygote. For a dominant deleterious allele: q̂ = μ/s (much lower, since selection acts in every heterozygote). Heterozygote advantage (overdominance): both homozygotes have lower fitness than the heterozygote. Equilibrium: q̂ = s₁/(s₁ + s₂) where s₁ and s₂ are the selection coefficients against the two homozygotes. Classic example: sickle-cell / malaria.',

  // ── Forensics lessons ────────────────────────────────────────────────────────

  'forensics-the-15-substances':
    'The 15 substances make up roughly 20% of your score — you must be able to identify each one from chemical tests, physical properties, or appearance. The substances span acids, bases, salts, sugars, and polymers: baking soda (NaHCO₃), baking powder (NaHCO₃ + cream of tartar + starch), cream of tartar, cornstarch, calcium carbonate (CaCO₃), glucose, sodium acetate, copper sulfate, ferric chloride, lead nitrate, potassium iodide, sodium chloride, sodium sulfate, calcium chloride, and laundry detergent. Master the discriminating tests that separate them.',

  'forensics-core-discriminating-tests':
    'A systematic test sequence separates the 15 substances efficiently. Start with solubility (which dissolve in water). Apply indicators: iodine for starch (blue-black), Benedict\'s for reducing sugars (orange/brick-red precipitate), litmus/pH paper for acids vs. bases. Use flame tests to distinguish cations (sodium = intense yellow, copper = blue-green, iron = no/brown, calcium = brick red). Confirmatory tests: add AgNO₃ to detect chloride (white precipitate), add BaCl₂ to detect sulfate (white precipitate). Work down the decision tree.',

  'forensics-flame-colors-cation-based-verified-rsc-libretexts':
    'Flame colors come from metal cations being excited by heat, then releasing that energy as visible light at characteristic wavelengths. The key colors to know: Sodium (Na⁺) — intense persistent yellow/orange (even trace contamination lights up). Potassium (K⁺) — lilac/violet (best seen through cobalt-blue filter). Calcium (Ca²⁺) — brick red/orange-red. Copper (Cu²⁺) — blue-green (verdigris color). Barium (Ba²⁺) — pale green. Iron (Fe³⁺) — no characteristic flame color (yellow from sodium contamination). Lithium — crimson red.',

  'forensics-indicator-acid-tests':
    'Indicator tests reveal the chemical nature of a substance. Litmus: turns red in acid, blue in base, stays purple in neutral. Universal indicator/pH paper: gives a numerical pH. Phenolphthalein: colorless in acid/neutral, pink in base. Methyl orange: red in acid, yellow in base. For substances: baking soda is mildly basic, cream of tartar is mildly acidic, baking powder is slightly acidic overall. Sodium acetate solution is slightly basic (hydrolysis of acetate ion). These simple tests often narrow down the suspect substance immediately.',

  'forensics-stoichiometry-molar-mass-new-carso-gap':
    'Molar mass is the mass of one mole of a substance in grams. Calculate it by summing atomic masses of all atoms. For glucose C₆H₁₂O₆: 6(12) + 12(1) + 6(16) = 180 g/mol. Moles = mass / molar mass. This lets you convert between grams you can weigh and moles you need for stoichiometry. For forensic chemical analysis, knowing molar mass helps interpret mass spectrometry results (the M⁺ peak = molecular weight) and prepare standard solutions for titrations.',

  'forensics-hair-structure':
    'A hair has three concentric layers visible under a microscope. The cuticle is the outermost layer — overlapping scale-like cells point toward the tip (like roof shingles). Cuticle scale pattern helps identify animal species. The cortex is the thick middle layer containing fusiform cells packed with melanin granules (giving hair its color) and cortical fusi (air spaces). The medulla is the central canal — may be absent, fragmented, discontinuous, or continuous. Medullary pattern is key for distinguishing human from animal hair.',

  'forensics-medullary-index-verified-ncbi-pmc6088218':
    'Medullary Index (MI) = diameter of medulla ÷ total hair diameter. Measure both under a microscope with a calibrated eyepiece. Human hair: MI < 1/3 (often absent entirely). Animal hair: MI ≥ 1/2, often continuous. The medulla is more prominent in animal hairs — cats, dogs, and deer all have larger medullas relative to total diameter. This single measurement is the first line of discrimination between human and non-human hair in forensic analysis. Always measure at least 3 places and average.',

  'forensics-species-atlas-verified-unless-tagged':
    'Each species has a characteristic hair profile. Human: oval/round cross-section, thin cuticle, broad cortex, diffuse pigment, MI < 1/3. Cat: prominent medulla (lattice-like), spinous (petal-shaped) scale pattern. Dog: wavy medulla, amorphous pigment clumps. Deer: cellular medulla occupying most of hair. Rabbit: multiserial ladder medulla. The combination of scale pattern (coronal = stacked crowns; spinous = petal-like; imbricate = flat overlapping) + medullary pattern + cross-section shape uniquely identifies most common species.',

  'forensics-the-8-patterns':
    'Fingerprint patterns fall into three types (but there are sub-types). Loops (~65%): ridges enter from one side, recurve, and exit the same side; have ONE delta (triradius). Ulnar loops open toward the pinky; radial loops open toward the thumb. Whorls (~30%): ridges form circles, spirals, or S-shapes; have TWO deltas. Sub-types: plain whorl, central pocket, double loop, accidental. Arches (~5%): ridges enter one side and exit the other with no delta; plain arch or tented arch (with upthrust). Pattern type is a CLASS characteristic — alone it cannot individualize.',

  'forensics-minutiae-vocabulary-exact-terms-from-rules':
    'Minutiae are the individual ridge details that make fingerprints unique. The most forensically important: Ridge ending (a ridge simply stops), Bifurcation (one ridge splits into two), Dot (an isolated ridge unit), Short ridge (a brief ridge segment that doesn\'t run the full field), Enclosure/lake (a ridge that splits and rejoins forming an oval), Spur (short ridge branching off a longer one). To identify a latent print, examiners compare the type, position, and direction of minutiae between the latent and the known exemplar.',

  'forensics-three-levels-of-detail-ace-v':
    'ACE-V is the standard fingerprint identification methodology. Level 1 detail: pattern type (loop, whorl, arch) — the overall flow. Level 2 detail: ridge characteristics (minutiae) — bifurcations, endings, etc. Level 3 detail: pore locations, ridge edge shape, incipient ridges — only visible in high-quality prints. ACE-V stands for Analyze, Compare, Evaluate, Verify. The verifier is a second, independent examiner who repeats the ACE process without knowing the original conclusion. Minimum point standards for identification vary by jurisdiction (often 8–16 matching minutiae).',

  'forensics-development-chemistry':
    'Developing a latent fingerprint means making the invisible sweat/oil deposit visible. Porous surfaces (paper, cardboard): DFO (fluorescent dye, excellent for aged prints) → ninhydrin (Ruhemann\'s purple, reacts with amino acids) → Physical Developer (silver deposition, works after wet exposure) — applied in THAT ORDER because PD is destructive to earlier reagents. Non-porous surfaces (glass, plastic): cyanoacrylate fuming (superglue polymerizes on amino acids/lipids, leaves white deposit) → then luminescent dyes like Rhodamine 6G under alternate light source, or conventional powders.',

  'forensics-decomposition-stages-overview-new-v5-resolves-q187-inconsistency':
    'Decomposition passes through predictable stages, each hosting different insect communities. Fresh (0–3 days): no external change, autolysis starts, blowflies arrive within minutes. Bloat (2–6 days): gas production from bacterial fermentation, body swells, marbling from hemolysis, purge fluid. Active decay (5–11 days): rapid mass loss, liquefaction, massive maggot activity. Advanced decay (10–25 days): most soft tissue gone, beetles dominate. Dry/skeletal: only bone and dried material. Temperature, humidity, burial, and season all shift these timelines significantly.',

  'forensics-entomology-insect-succession':
    'Forensic entomology uses insect evidence to estimate time since death. Blowflies (Calliphoridae) are primary colonizers — females arrive within minutes of death to lay eggs in wounds and natural orifices. After blowflies: flesh flies (Sarcophagidae), then Piophilidae (cheese flies at active decay), then Dermestidae (skin beetles at dry stage). The PMI is calculated by identifying the oldest insect life stage present and working backward: the time required to reach that stage at the temperatures recorded = minimum PMI. ADD (Accumulated Degree Hours) is the currency: ADD = Σ(T_avg − T_base) × hours.',

  'forensics-blood-abo-typing-verified':
    'ABO blood typing is based on antigens on red blood cells and antibodies in plasma. Type A: A antigen, anti-B antibodies. Type B: B antigen, anti-A antibodies. Type AB: both antigens, no ABO antibodies (universal recipient for red cells). Type O: no ABO antigens, both antibodies (universal donor for red cells). The alleles are IA, IB (codominant) and i (recessive). Add anti-A and anti-B antisera to a blood sample — agglutination (clumping) indicates that antigen is present. Used for exclusion in forensics (can rule out a suspect, rarely individualizes).',

  'forensics-glass-verified-aafs-2006-swgmat-wvu':
    'Glass is amorphous solid silica (SiO₂) with various metal oxide additives that affect refractive index (RI) and density. Forensic comparison focuses on RI matching — glass fragments from the same source have the same RI. The Becke line method: immerse glass fragment in oil of known RI under microscope; when focus is raised, the Becke line (bright halo) moves toward the medium with higher RI. Match by finding the immersion liquid where the Becke line disappears = glass and liquid have same RI. The 3R rule (radial/concentric cracks) plus glass direction helps reconstruct sequencing and force of impact.',

  'forensics-dna-verified-new-gap-fills':
    'DNA evidence is the most powerful individualizing evidence in forensic science. CODIS uses 20 STR (Short Tandem Repeat) loci — highly variable repetitive sequences where the number of repeats differs between individuals. DNA is extracted from blood, saliva, semen, hair roots, or touch DNA, amplified by PCR, and sized by capillary electrophoresis. An allelic ladder calibrates the results. A full 20-locus match has a random match probability below 1 in a quadrillion. Mitochondrial DNA (from shed hairs, bones, teeth) can only exclude, not individualize, because all maternal relatives are identical.',

  'forensics-blood-spatter-verified':
    'Blood spatter analysis determines direction of travel, impact angle, and sometimes area of origin from blood stain patterns. The impact angle is θ = arcsin(width/length) for an elliptical stain — a circular stain means 90° (vertical drop); the more elongated, the more acute the angle. The tail or satellite droplets point in the direction of travel. To find the area of origin, string (or computer software) lines are drawn through the long axis of multiple stains — they converge at the origin point in 2D; the height is calculated trigonometrically.',

  'forensics-bullet-striations-firearms-verified-new-lexso-gap':
    'When a bullet travels through a rifled barrel, the lands (raised spirals) cut striations into the bullet\'s surface. The class characteristics of a firearm: number of lands and grooves, direction of twist (left or right), and twist rate (angle). These narrow down the make/model. Individual characteristics: microscopic irregularities unique to one barrel, used to link a bullet to a specific gun. Cartridge cases also carry firing pin impressions (unique to gun), ejector/extractor marks, and chamber marks. NIBIN databases link cases from the same firearm across crime scenes.',

  'forensics-chromatography':
    'Chromatography separates compounds based on differential affinity between a stationary phase and a mobile phase. The key measurement is Rf = distance compound traveled ÷ distance solvent front traveled (always 0–1). Identical Rf values in the same solvent system suggest the same compound. Paper chromatography: cellulose stationary phase, aqueous mobile phase; used for ink, dye, and drug analysis. TLC (thin-layer chromatography): silica gel plate, faster and sharper separation; UV lamp reveals bands. HPLC and GC-MS are the definitive confirmation techniques.',

  'forensics-mass-spectrometry-verified-u-richmond-cie-premier-mcast':
    'Mass spectrometry identifies compounds by their mass-to-charge ratio (m/z). Electron ionization (EI) fragments the molecule; the intact molecular ion (M⁺•) appears at the highest m/z and gives the molecular weight. The base peak is the most abundant fragment — often a structurally informative loss. Key patterns: Chlorine gives M:M+2 in roughly 3:1 ratio (³⁵Cl/³⁷Cl); bromine gives 1:1 (⁷⁹Br/⁸¹Br). The M+1 peak / M peak × 100 ≈ number of carbons (each ¹³C adds ~1.1%). Fragmentation patterns are a molecular fingerprint matchable to reference libraries.',

  'forensics-class-vs-individual-evidence':
    'Class evidence narrows a source to a group but cannot individualize — hair color, fiber type, blood type, shoe sole pattern all have class characteristics. Individual evidence can be linked to a unique source — DNA profiles, fingerprint minutiae, toolmark striations, handwriting features (sometimes). In practice, most physical evidence is class-level; the power comes from multiple independent class characteristics converging on one suspect. Elimination is also valuable: if one characteristic doesn\'t match, the suspect can be excluded.',

  'forensics-structure-cer':
    'The analysis write-up (30% of score) follows Claim-Evidence-Reasoning (CER) structure. Claim: a direct statement of your conclusion ("Suspect A left the fingerprint at the scene"). Evidence: specific, precise data from the analysis ("The latent print and Suspect A\'s known print share matching bifurcations at positions 3, 7, and 11 as well as ridge endings at positions 2 and 9"). Reasoning: explain WHY the evidence supports the claim using scientific principles ("Fingerprint ridge details are unique to each individual and do not change with age"). Avoid vague language; examiners want precision.',
};

// ── Calc module mapping (lesson slug → module IDs) ────────────────────────────
const LESSON_CALC_MAP = {
  'desgen-31-hardyweinberg-equilibrium-hwe-assumptions-equations-calculations': ['hwe'],
  'desgen-hardyweinberg':                       ['hwe'],
  'desgen-32-testing-hwe-with-chi-square-you-should-be-ready-for-this': ['chi-square'],
  'desgen-92-fully-worked-chi-square-two-examples': ['chi-square'],
  'desgen-14-punnett-squares-mono--di--and-trihybrid': ['punnett'],
  'desgen-36-heritability-statenat-explicit-rules-subtopic-calculation-required': ['heritability'],
  'desgen-heritability':                        ['heritability'],
  'desgen-37-gene-mapping-from-recombination-data-state-2-genes-nationals-3-genes-explicit': ['gene-mapping'],
  'desgen-linkage-mapping':                     ['gene-mapping'],
  'desgen-54-translation-initiation-elongation-termination-ribosome-mrna-trna-regulation-r': ['translation'],
  'desgen-83-worked-sequence-protein-example-the-exact-tested-skill': ['translation'],
  'desgen-translation':                         ['translation'],
  'desgen-103-bayesian-conditional-probability-for-carrier-risk-2-tests-nuso-yji': ['bayesian-carrier'],
  'desgen-1011-mutation-selection-balance-and-heterozygote-advantage-equilibrium-1-test-ea': ['mutation-selection'],
  'forensics-entomology-insect-succession':     ['pmi-entomology'],
  'forensics-chromatography':                   ['rf-value'],
  'forensics-medullary-index-verified-ncbi-pmc6088218': ['medullary-index'],
  'forensics-glass-verified-aafs-2006-swgmat-wvu': ['snells-law'],
  'forensics-stoichiometry-molar-mass-new-carso-gap': ['molar-mass'],
  'forensics-blood-spatter-verified':           ['blood-spatter'],
  'forensics-mass-spectrometry-verified-u-richmond-cie-premier-mcast': ['mass-spec'],
  'forensics-bullet-striations-firearms-verified-new-lexso-gap': ['ballistics'],
};

// ── Image card mapping (lesson slug → IMAGE_ID_DATA card IDs) ─────────────────
const LESSON_IMAGE_MAP = {
  'desgen-22-mitosis-stages-and-structures':
    ['dg-cd-01','dg-cd-02','dg-cd-03','dg-cd-04'],
  'desgen-23-meiosis-stages-and-structures':
    ['dg-cd-05','dg-cd-06','dg-cd-07'],
  'desgen-26-karyotypes-and-reading-them-statenat-explicit-rules-subtopic':
    ['dg-cd-08','dg-cd-09'],
  'desgen-25-nondisjunction-and-chromosomal-abnormalities-statenat-explicit-rules-subtopic':
    ['dg-chrom-01','dg-chrom-02','dg-chrom-03','dg-chrom-04'],
  'desgen-41-dna-structure-nucleotides-backbone-directionality-base-pairing':
    ['dg-dna-01','dg-dna-02'],
  'desgen-42-dna-replication-stages-from-pre-rc-assembly-to-termination-rules-specific-dep':
    ['dg-dna-03'],
  'desgen-61-polymerase-chain-reaction-pcr-rules-specific':
    ['dg-dna-04','dg-dna-05'],
  'desgen-64-molecular-cloning-rules-specific-plasmids-restriction-enzymes-pcr-gibson-blue':
    ['dg-tech-01','dg-tech-02','dg-tech-07'],
  'desgen-18-pedigree-analysis-explicit-rules-subtopic-high-frequency':
    ['dg-ped-01','dg-ped-02','dg-ped-03','dg-ped-04'],
  'desgen-14-punnett-squares-mono--di--and-trihybrid':
    ['dg-ped-05'],
  'desgen-51-central-dogma-reverse-transcription-rules-specific':
    ['dg-tt-01'],
  'desgen-54-translation-initiation-elongation-termination-ribosome-mrna-trna-regulation-r':
    ['dg-tt-02','dg-tt-03'],
  'desgen-81-the-genetic-code-mrna-codon-table':
    ['dg-tt-04'],
  'desgen-52-transcription-initiation-elongation-termination-rna-polymerase-rules-specific':
    ['dg-tt-05'],
  'forensics-the-8-patterns':
    ['for-fp-01','for-fp-02','for-fp-03'],
  'forensics-minutiae-vocabulary-exact-terms-from-rules':
    ['for-fp-04','for-fp-05'],
  'forensics-development-chemistry':
    ['for-fp-06','for-fp-07','for-fp-08'],
  'forensics-hair-structure':
    ['for-hair-01','for-hair-02','for-hair-03'],
  'forensics-species-atlas-verified-unless-tagged':
    ['for-hair-04'],
  'forensics-medullary-index-verified-ncbi-pmc6088218':
    ['for-hair-01','for-hair-02'],
  'forensics-hair-growth-phases-new-clclexso-gap':
    ['for-hair-05','for-hair-06'],
  'forensics-blood-abo-typing-verified':
    ['for-blood-05','for-blood-06','for-blood-07'],
  'forensics-blood-spatter-verified':
    ['for-blood-01','for-blood-02','for-blood-03','for-blood-04'],
  'forensics-entomology-insect-succession':
    ['for-ento-01','for-ento-02','for-ento-03','for-ento-04'],
  'forensics-decomposition-stages-overview-new-v5-resolves-q187-inconsistency':
    ['for-ento-06'],
  'forensics-chromatography':
    ['for-chrom-01','for-chrom-02','for-chrom-03'],
  'forensics-mass-spectrometry-verified-u-richmond-cie-premier-mcast':
    ['for-chrom-04'],
  'forensics-glass-verified-aafs-2006-swgmat-wvu':
    ['for-soil-02','for-soil-03'],
  'forensics-bullet-striations-firearms-verified-new-lexso-gap':
    ['for-ball-01','for-ball-02','for-ball-03'],
};

// ── Lesson extraction ─────────────────────────────────────────────────────────

function extractLessons(rawMd, event) {
  const lines = rawMd.split('\n');
  const lessons = [];
  let current = null;
  const idCount = {};

  function finalize(c) {
    const baseId = `${c.event}-${slugify(c.heading)}`;
    let id = baseId;
    if (idCount[baseId]) { idCount[baseId]++; id = `${baseId}-${idCount[baseId]}`; }
    else idCount[baseId] = 1;
    return { id, heading: c.heading, event: c.event, markdown: c.lines.join('\n').trim() };
  }

  for (const line of lines) {
    if (/^# /.test(line)) {
      if (current) { lessons.push(finalize(current)); current = null; }
      continue;
    }
    const m = line.match(/^## (.+)/);
    if (m) {
      if (current) lessons.push(finalize(current));
      current = { heading: m[1], event, lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) lessons.push(finalize(current));
  return lessons;
}

async function getOrBuildLessons(event) {
  if (state.learn.lessons[event]) return state.learn.lessons[event];

  if (!_learnRawMd[event]) {
    if (!_learnFetches[event]) {
      _learnFetches[event] = fetch(LEARN_GUIDE_FILES[event])
        .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); });
    }
    _learnRawMd[event] = await _learnFetches[event];
  }

  state.learn.lessons[event] = extractLessons(_learnRawMd[event], event);
  return state.learn.lessons[event];
}

// ── Persistence ───────────────────────────────────────────────────────────────

const LEARN_LS_KEY = 'scioly-learn-v1';

function loadLearnProgress() {
  try {
    const raw = localStorage.getItem(LEARN_LS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state.learn.completedIds = new Set(parsed.completedIds || []);
      state.learn.lastId       = parsed.lastId || null;
    }
  } catch (_) {}
}

function saveLearnProgress() {
  try {
    localStorage.setItem(LEARN_LS_KEY, JSON.stringify({
      completedIds: [...state.learn.completedIds],
      lastId: state.learn.lastId,
    }));
  } catch (_) {}
}

function toggleLearned(lessonId) {
  if (state.learn.completedIds.has(lessonId)) {
    state.learn.completedIds.delete(lessonId);
  } else {
    state.learn.completedIds.add(lessonId);
  }
  saveLearnProgress();
}

// ── Tab init ──────────────────────────────────────────────────────────────────

function initLearnTab() {
  loadLearnProgress();

  document.querySelectorAll('#tab-learn .etab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tab-learn .etab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.learn.event = btn.dataset.learnEvent;
      state.learn.view  = 'curriculum';
      openLearnTab();
    });
  });
}

async function openLearnTab() {
  if (state.learn.view === 'lesson') return; // already in a lesson, don't reset
  state.learn.view = 'curriculum';

  const curriculum = document.getElementById('learn-curriculum');
  const lessonDiv  = document.getElementById('learn-lesson');
  lessonDiv.classList.add('hidden');
  curriculum.classList.remove('hidden');
  curriculum.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading lessons…</p></div>';

  try {
    await getOrBuildLessons(state.learn.event);
    renderCurriculumView();
  } catch (e) {
    curriculum.innerHTML = `<div class="error-state">⚠ Could not load guide.<br><code>npm start</code> is required to serve the content files.<br><small>${escapeHtml(String(e))}</small></div>`;
  }
}

// ── Curriculum view ───────────────────────────────────────────────────────────

function renderCurriculumView() {
  const event   = state.learn.event;
  const lessons = state.learn.lessons[event];
  const curriculum = document.getElementById('learn-curriculum');
  const summaryEl  = document.getElementById('learn-progress-summary');

  const total     = lessons.length;
  const completed = lessons.filter(l => state.learn.completedIds.has(l.id)).length;
  const pct       = total ? Math.round(completed / total * 100) : 0;

  summaryEl.innerHTML =
    `<span class="learn-prog-nums">${completed}/${total}</span>` +
    `<div class="learn-prog-bar"><div class="learn-prog-fill" style="width:${pct}%"></div></div>`;

  // Group lessons by section
  const groups = {};
  const groupOrder = [];
  const sectionMap = SECTION_NAMES[event];

  lessons.forEach((lesson, idx) => {
    const key   = getLessonGroup(lesson.heading, event);
    const label = sectionMap[key] || sectionMap['_'];
    if (!groups[key]) { groups[key] = { label, lessons: [] }; groupOrder.push(key); }
    groups[key].lessons.push({ lesson, idx });
  });

  // Resume button
  const firstIncomplete = lessons.find(l => !state.learn.completedIds.has(l.id));
  let html = '';
  if (firstIncomplete) {
    const resumeIdx = lessons.indexOf(firstIncomplete);
    html += `<button class="btn-resume" id="learn-resume">
      <span class="resume-icon">▶</span>
      <span>Resume: <em>${escapeHtml(firstIncomplete.heading.slice(0, 50))}${firstIncomplete.heading.length > 50 ? '…' : ''}</em></span>
    </button>`;
    setTimeout(() => {
      document.getElementById('learn-resume')?.addEventListener('click', () => openLesson(resumeIdx));
    }, 0);
  } else {
    html += `<div class="learn-all-done">✓ All ${total} lessons complete!</div>`;
  }

  // Section groups
  groupOrder.forEach(key => {
    const { label, lessons: groupLessons } = groups[key];
    const secTotal = groupLessons.length;
    const secDone  = groupLessons.filter(({ lesson }) => state.learn.completedIds.has(lesson.id)).length;
    const secPct   = secTotal ? Math.round(secDone / secTotal * 100) : 0;

    html += `<div class="lesson-section-group">
      <div class="lesson-section-header">
        <span class="lesson-section-title">${escapeHtml(label)}</span>
        <span class="lesson-section-count">${secDone}/${secTotal}</span>
      </div>
      <div class="section-prog-bar"><div class="section-prog-fill" style="width:${secPct}%"></div></div>`;

    groupLessons.forEach(({ lesson, idx }) => {
      const done     = state.learn.completedIds.has(lesson.id);
      const hasCalc  = !!(LESSON_CALC_MAP[lesson.id]?.length);
      const hasImg   = !!(LESSON_IMAGE_MAP[lesson.id]?.length);
      const hasTerms = !!(LESSON_SIMPLE_TERMS[lesson.id]);

      html += `<button class="lesson-row${done ? ' completed' : ''}" data-idx="${idx}">
        <span class="lesson-check">${done ? '✓' : '○'}</span>
        <span class="lesson-heading-text">${escapeHtml(lesson.heading)}</span>
        <span class="lesson-row-badges">
          ${hasTerms ? '<span class="lbadge lbadge-plain" title="Plain-language intro">✎</span>' : ''}
          ${hasCalc  ? '<span class="lbadge lbadge-calc"  title="Practice problem">∑</span>' : ''}
          ${hasImg   ? '<span class="lbadge lbadge-img"   title="Image recognition">⊡</span>' : ''}
        </span>
      </button>`;
    });

    html += `</div>`;
  });

  curriculum.innerHTML = html;

  // Re-bind resume button (innerHTML replaced it)
  if (firstIncomplete) {
    const resumeIdx = lessons.indexOf(firstIncomplete);
    document.getElementById('learn-resume')?.addEventListener('click', () => openLesson(resumeIdx));
  }

  curriculum.querySelectorAll('.lesson-row').forEach(btn => {
    btn.addEventListener('click', () => openLesson(parseInt(btn.dataset.idx, 10)));
  });
}

// ── Lesson view ───────────────────────────────────────────────────────────────

function openLesson(index) {
  state.learn.view        = 'lesson';
  state.learn.lessonIndex = index;
  document.getElementById('learn-curriculum').classList.add('hidden');
  document.getElementById('learn-lesson').classList.remove('hidden');
  renderLessonView(index);
}

function renderLessonView(index) {
  const event    = state.learn.event;
  const lessons  = state.learn.lessons[event];
  const lesson   = lessons[index];
  const lessonDiv = document.getElementById('learn-lesson');
  const isDone   = state.learn.completedIds.has(lesson.id);
  const isFirst  = index === 0;
  const isLast   = index === lessons.length - 1;

  // Track last seen for resume
  state.learn.lastId = lesson.id;
  saveLearnProgress();

  // ── "In plain terms" block
  const simpleTerms = LESSON_SIMPLE_TERMS[lesson.id];
  const simpleHtml = simpleTerms
    ? `<div class="lesson-plain-terms">
        <div class="lesson-block-label">In Plain Terms</div>
        <p class="lesson-plain-text">${escapeHtml(simpleTerms)}</p>
       </div>`
    : '';

  // ── Full guide content
  let guideHtml = '';
  if (lesson.markdown) {
    const rendered = marked.parse(processTags(lesson.markdown));
    guideHtml = `<div class="lesson-guide-content">
      <div class="lesson-block-label">Full Guide Content</div>
      <div class="lesson-guide-body">${rendered}</div>
    </div>`;
  }

  // ── Practice problem placeholder
  const calcIds = LESSON_CALC_MAP[lesson.id] || [];
  const calcHtml = calcIds.length
    ? `<div class="lesson-calc-wrap">
        <div class="lesson-block-label">Practice Problem</div>
        <div id="lesson-calc-inner"></div>
       </div>`
    : '';

  // ── Image recognition placeholder
  const imageIds = LESSON_IMAGE_MAP[lesson.id] || [];
  const imgHtml = imageIds.length
    ? `<div class="lesson-img-wrap">
        <div class="lesson-block-label">Image Recognition</div>
        <div class="lesson-img-grid" id="lesson-img-grid"></div>
       </div>`
    : '';

  lessonDiv.innerHTML = `
    <div class="lesson-header">
      <button class="ws-back-btn" id="lesson-back">← Lessons</button>
      <span class="lesson-counter-text">${index + 1} / ${lessons.length}</span>
      <button class="learn-mark-btn${isDone ? ' marked' : ''}" id="lesson-mark" aria-pressed="${isDone}">
        ${isDone ? '✓ Learned' : '○ Mark Learned'}
      </button>
    </div>
    <div class="lesson-title-bar">
      <h2 class="lesson-title">${escapeHtml(lesson.heading)}</h2>
    </div>
    <div class="lesson-body">
      ${simpleHtml}
      ${guideHtml}
      ${calcHtml}
      ${imgHtml}
    </div>
    <div class="lesson-nav-footer">
      <button class="btn-secondary lesson-nav-btn" id="lesson-prev" ${isFirst ? 'disabled' : ''}>← Prev</button>
      <button class="btn-primary  lesson-nav-btn" id="lesson-next" ${isLast  ? 'disabled' : ''}>Next →</button>
    </div>`;

  document.getElementById('lesson-back').addEventListener('click', () => {
    state.learn.view = 'curriculum';
    document.getElementById('learn-lesson').classList.add('hidden');
    document.getElementById('learn-curriculum').classList.remove('hidden');
    renderCurriculumView();
  });

  document.getElementById('lesson-mark').addEventListener('click', () => {
    toggleLearned(lesson.id);
    const done2 = state.learn.completedIds.has(lesson.id);
    const btn   = document.getElementById('lesson-mark');
    btn.textContent = done2 ? '✓ Learned' : '○ Mark Learned';
    btn.classList.toggle('marked', done2);
    btn.setAttribute('aria-pressed', String(done2));
  });

  document.getElementById('lesson-prev').addEventListener('click', () => {
    if (index > 0) renderLessonView(index - 1);
  });

  document.getElementById('lesson-next').addEventListener('click', () => {
    // Auto-mark current as learned when advancing
    if (!state.learn.completedIds.has(lesson.id)) {
      state.learn.completedIds.add(lesson.id);
      saveLearnProgress();
    }
    if (index < lessons.length - 1) renderLessonView(index + 1);
  });

  // Scroll lesson body to top
  lessonDiv.scrollTop = 0;

  // Setup inline calc
  if (calcIds.length) setupLessonCalc(calcIds[0], 'lesson-calc-inner');

  // Setup image grid
  if (imageIds.length) setupLessonImages(imageIds, 'lesson-img-grid');
}

// ── Inline practice problem ───────────────────────────────────────────────────

function setupLessonCalc(moduleId, containerId) {
  const mod = (window.CALC_MODULES || []).find(m => m.id === moduleId);
  if (!mod) return;
  generateLessonProblem(mod, document.getElementById(containerId));
}

function generateLessonProblem(mod, container) {
  if (!container) return;
  let problem;
  try { problem = mod.generate(); }
  catch (e) {
    container.innerHTML = `<div class="error-state">Could not generate: ${escapeHtml(String(e))}</div>`;
    return;
  }

  container.innerHTML = `
    <div class="lesson-calc-card">
      <div class="formula-box">
        <span class="formula-label">Formula</span>
        <span class="formula-text">${escapeHtml(mod.formula || '')}</span>
      </div>
      <div class="problem-box">
        <p class="problem-text">${escapeHtml(problem.problem)}</p>
        <p class="question-text"><strong>${escapeHtml(problem.question)}</strong></p>
      </div>
      <div class="answer-row">
        <input type="text" id="lc-ans" class="answer-input" placeholder="Your answer…" inputmode="decimal" autocomplete="off">
        <button id="lc-check" class="btn-primary">Check</button>
      </div>
      <div id="lc-fb"    class="calc-feedback hidden"></div>
      <div id="lc-steps" class="calc-steps hidden"></div>
      <div id="lc-acts"  class="calc-actions hidden">
        <button id="lc-new" class="btn-secondary">New Problem</button>
      </div>
    </div>`;

  let answered = false;

  const check = () => {
    if (answered) return;
    const raw = document.getElementById('lc-ans')?.value.trim() ?? '';
    if (!raw) { showToast('Enter an answer first.'); return; }
    answered = true;

    const userNum = parseFloat(raw.replace(/[,%]/g, ''));
    let correct = false;
    if (typeof problem.answer === 'number') {
      const tol = problem.tolerance ?? 0.01;
      correct = !isNaN(userNum) && Math.abs(userNum - problem.answer) <= Math.abs(problem.answer * tol) + 1e-9;
    } else {
      correct = raw.toLowerCase() === String(problem.answer).toLowerCase();
    }

    const fb = document.getElementById('lc-fb');
    fb.classList.remove('hidden', 'correct', 'incorrect');
    fb.classList.add(correct ? 'correct' : 'incorrect');
    fb.innerHTML = correct
      ? `✓ Correct! Answer: <strong>${lcFmt(problem.answer)}</strong>`
      : `✗ Incorrect — correct answer: <strong>${lcFmt(problem.answer)}</strong>`;

    if (problem.steps?.length) {
      let sh = '<div class="steps-label">Solution:</div>';
      problem.steps.forEach((s, i) => {
        sh += `<div class="step">
          <span class="step-num">${i + 1}</span>
          <div class="step-body">
            <div class="step-label">${escapeHtml(s.label)}</div>
            ${s.calc ? `<div class="step-calc">${escapeHtml(s.calc)}</div>` : ''}
            <div class="step-result">${escapeHtml(s.result)}</div>
          </div>
        </div>`;
      });
      const stepsEl = document.getElementById('lc-steps');
      stepsEl.innerHTML = sh;
      stepsEl.classList.remove('hidden');
    }

    document.getElementById('lc-check').disabled = true;
    document.getElementById('lc-acts').classList.remove('hidden');
  };

  document.getElementById('lc-check').addEventListener('click', check);
  document.getElementById('lc-ans').addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
  document.getElementById('lc-new').addEventListener('click', () => generateLessonProblem(mod, container));
}

function lcFmt(ans) {
  if (typeof ans === 'number') return Number.isInteger(ans) ? String(ans) : ans.toFixed(4).replace(/\.?0+$/, '');
  return escapeHtml(String(ans));
}

// ── Inline image recognition ──────────────────────────────────────────────────

function setupLessonImages(imageIds, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const allCards = [];
  const data = window.IMAGE_ID_DATA || {};
  for (const ev of ['desgen', 'forensics']) {
    for (const cat of (data[ev] || [])) {
      for (const card of cat.cards) {
        if (imageIds.includes(card.id)) allCards.push(card);
      }
    }
  }
  if (!allCards.length) return;

  grid.innerHTML = allCards.map((card, i) => `
    <div class="li-card" data-i="${i}">
      <div class="li-front">
        ${card.src
          ? `<img src="${escapeHtml(card.src)}" alt="${escapeHtml(card.label)}" class="li-photo">`
          : `<div class="card-image-placeholder"><span>🖼</span><span>Image placeholder</span></div>`}
        <div class="li-label">${escapeHtml(card.label)}</div>
        <div class="card-hint">Tap to reveal description</div>
      </div>
      <div class="li-back">
        <div class="li-label">${escapeHtml(card.label)}</div>
        <div class="li-desc">${escapeHtml(card.description)}</div>
        <div class="card-hint">Tap to flip back</div>
      </div>
    </div>`).join('');

  grid.querySelectorAll('.li-card').forEach(c => {
    c.addEventListener('click', () => c.classList.toggle('flipped'));
  });
}
