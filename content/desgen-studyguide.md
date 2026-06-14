# Designer Genes (Division C) — Comprehensive Study Guide

**Target level: State** (includes all Regional content plus State/Nationals-flagged topics; topics that are *Nationals-only* are flagged so you know they’re optional for State but included for completeness.)

**How to use this guide.** The structure follows the official rules document topic-for-topic (Mendelian Genetics → Mitosis/Meiosis → Population & Evolutionary Genetics → Molecular Biology of DNA → Prokaryotic Gene Expression → Technology & Techniques). Within each topic, conceptual explanation comes first, then the *quantitative method* (because this test is calculation-heavy), then worked examples and the traps that show up on tests. Anything tagged **[State/Nat]** or **[Nat only]** is advanced — covered fully here but know which tier you’re competing at.

**A note on what wins this event.** The rules state explicitly that questions emphasize quantitative reasoning, calculations, interpreting experimental results, and evidence-based conclusions. Reading this guide is necessary but not sufficient — the genetics-problem and Hardy–Weinberg/heritability sections must be drilled with real problems until the procedures are automatic. The guide gives you the method and the facts; fluency comes from reps.

-----

## TABLE OF CONTENTS

1. Mendelian Genetics
1. Mitosis and Meiosis
1. Population & Evolutionary Genetics
1. Molecular Biology of DNA
1. Prokaryotic Gene Expression and Regulation
1. Technology and Techniques
1. Quick-Reference Formula & Ratio Sheet (cheat-sheet candidates)
1. Appendix: Reference Tables (codon table, amino acids), Classic Experiments, Worked Examples & Lab Techniques
1. Worked Calculations & Gap-Fill Supplement (three-point cross, chi-square, ABO, partial-diploid operon, Ig/TCR structure, bacterial transfer, splicing)
1. Invitational Cross-Check Supplement (oogenesis/polar bodies, senescence, Bayesian probability, AID mechanism, Sanger peak interpretation, calico genetics, telomere functions, crRNA, initiation factors, Haldane mapping function, mutation-selection balance, heterozygote advantage equilibrium, Holliday junctions, replica plating, G-quadruplexes)
1. Practice-Set Gap Supplement (microarray probe design, BPG/hemoglobin allostery, m6A RNA modification, lipid nanoparticle delivery, amphipathic molecules, Cas12a structure, Pfu vs. Taq fidelity, protein termini/folding, Nail-Patella syndrome, antisense/exon-skipping therapy, structural gene frequency, Cas9 endo- vs. exonuclease, trisomy X dosage compensation)
1. Practice-Set Gap Supplement, Round 2 (origins of replication count, dG analogs, Cas9 metal cofactors, C9orf72 toxicity, non-homologous pairing, BLOSUM scoring, CRISPR type I-IV machinery, Cas9 nickase/dCas9 domain mutations, beta-strand topology, spacer-acquisition repeat duplication, complementation tables, albinism trait classification, Philadelphia chromosome/CML, missing-figure pedigree and dot-plot questions, Down syndrome symptom lists, sequence-independent dsDNA binding, APOBEC3 domains, csn2/Type II-A, polypeptide conformation counting, trisomy X germline effects)
1. Gene Therapy Classification Note (Set 2, Q142 — “Class I-VII” system)

-----

# 1. MENDELIAN GENETICS

## 1.1 Mendel’s Laws of Inheritance

**Vocabulary you must have cold:**

- **Gene** — a heritable unit of information; **locus** — its physical position on a chromosome.
- **Allele** — a variant form of a gene. **Homozygous** = two identical alleles (AA or aa); **heterozygous** = two different (Aa).
- **Genotype** — the allele pair; **phenotype** — the observable trait.
- **Dominant** allele masks the recessive in heterozygotes (write capital); **recessive** expressed only when homozygous (lowercase). Dominance is a relationship between alleles, *not* a statement about which is more common or “better.”
- **P generation** (parents) → **F1** (first filial) → **F2** (second filial, from F1 × F1 self/cross).
- **Hemizygous** — only one allele present (e.g., X-linked genes in XY males).
- **Wild type** — the most common/“reference” phenotype in a population; often written with a `+` superscript.

**Mendel’s three principles:**

1. **Law of Dominance** (technically an observation, not a universal law): in a heterozygote, one allele (dominant) determines the phenotype and masks the other (recessive). Many real systems violate this (see incomplete/codominance below).
1. **Law of Segregation** (Mendel’s *first* law): the two alleles of a gene separate (segregate) during gamete formation, so each gamete carries exactly one allele. Reunited at fertilization. **Physical basis:** homologous chromosomes separate during **anaphase I of meiosis.**
1. **Law of Independent Assortment** (Mendel’s *second* law): alleles of *different* genes segregate independently of one another during gamete formation. **Physical basis:** the random orientation of homologous pairs at **metaphase I.** *Critical caveat:* this holds **only for genes on different chromosomes (or far apart on the same chromosome).** Linked genes violate it — this is the bridge to linkage/mapping.

**Why Mendel succeeded (often tested as “experimental design” reasoning):** he chose pea plants with discrete, true-breeding traits; controlled crosses (emasculation to prevent self-pollination); tracked large numbers of offspring (statistical power); and analyzed one or two traits at a time. The large sample sizes are what let ratios emerge from probability.

## 1.2 Inheritance patterns that VIOLATE simple Mendelian laws

This subsection is explicitly called out in the rules — expect questions that hand you anomalous ratios and ask you to identify the mechanism.

**Incomplete dominance.** Heterozygote shows an *intermediate* phenotype (blend). Red (RR) × white (rr) → pink (Rr). F2 ratio is **1:2:1 phenotype = genotype** (1 red : 2 pink : 1 white). Key tell: three phenotypes in F2, heterozygote distinct from both homozygotes and intermediate.

**Codominance.** Both alleles fully and *simultaneously* expressed in the heterozygote — not blended, both visible. Classic example: **ABO blood type** (I^A and I^B are codominant; both produce their sugar antigen). Also MN blood group, roan coat color (distinct red and white hairs). Tell: heterozygote shows *both* parental phenotypes at once, not an intermediate.

**Multiple alleles.** More than two allelic forms exist *in the population* (any one diploid individual still has only two). ABO has three: I^A, I^B, i. Dominance hierarchy: I^A = I^B > i. Genotype→phenotype:

- Type A: I^A I^A or I^A i
- Type B: I^B I^B or I^B i
- Type AB: I^A I^B (codominant)
- Type O: i i

**Pleiotropy.** One gene affects *multiple* phenotypic traits. E.g., sickle-cell allele affects RBC shape, anemia, pain crises, malaria resistance. (Distinct from polygenic, which is many genes → one trait.)

**Lethal alleles.** Some genotypes die, distorting ratios. Classic: **yellow coat in mice (A^Y).** A^Y is dominant for coat color but recessive lethal. A^Y A^Y dies in utero. A^Y a × A^Y a → 1 A^YA^Y (dead) : 2 A^Ya (yellow) : 1 aa (agouti) → surviving ratio **2 yellow : 1 agouti** (a 2:1 ratio is the signature of a recessive lethal). Another: Manx cat tail.

**Penetrance and expressivity** (frequently confused — know the difference):

- **Penetrance** = the *percentage of individuals with a genotype who show any of the expected phenotype.* Incomplete penetrance: some genotype-carriers show nothing (e.g., 80% penetrant = 20% of carriers look unaffected). All-or-nothing, population-level.
- **Expressivity** = the *degree/intensity* to which the phenotype is expressed among those who do show it. Variable expressivity = a range of severity. Individual-level, graded.

**Epistasis** — covered in detail in §1.6 because it’s its own rules subtopic.

**Complementation** — see §1.7.

**Sex-influenced and sex-limited traits:**

- **Sex-limited:** trait expressed in only one sex though the gene is in both (e.g., milk yield, plumage).
- **Sex-influenced:** dominance flips by sex (e.g., pattern baldness — dominant in males, recessive in females, due to hormonal modulation).

**Other mechanisms worth knowing (can appear as “violations”):**

- **Genomic imprinting** — expression depends on parent of origin (only maternal or only paternal allele expressed; e.g., Prader–Willi vs. Angelman from the same chromosome 15 region).
- **Mitochondrial / maternal inheritance** — extranuclear genes inherited (almost) exclusively from the mother; no Mendelian ratios, all offspring of an affected mother affected. (Ties to organellar phylogenies in §3.)
- **Anticipation** — disease worsens/earlier-onset across generations (trinucleotide repeat expansion, e.g., Huntington’s, fragile X).

## 1.3 Probability rules (the engine behind every genetics calculation)

You will not survive the calculation questions without these. They underlie Punnett squares, multi-gene crosses, and pedigree risk.

**Product rule (AND):** probability that independent events *both* occur = product of their individual probabilities. P(A and B) = P(A) × P(B). Use for “what fraction of offspring are *aa* AND *bb*.”

**Sum rule (OR):** probability that *either* of two mutually exclusive events occurs = sum. P(A or B) = P(A) + P(B). Use for “what fraction show phenotype X, which can arise two different ways.”

**The product rule is the shortcut that replaces giant Punnett squares.** For a trihybrid cross AaBbCc × AaBbCc, don’t draw a 64-box square — compute each gene’s monohybrid probability and multiply. Example: P(offspring is A_ B_ cc) = (3/4)(3/4)(1/4) = 9/64.

**Binomial probability** — for “what is the chance that, among *n* offspring, exactly *k* show a trait.” Use when order doesn’t matter and each birth is independent.

P(k successes in n) = C(n,k) · p^k · q^(n−k)

where C(n,k) = n! / [k!(n−k)!], p = probability of the trait, q = 1−p.

*Example:* two carriers (Aa × Aa), P(affected child) = 1/4. Chance that exactly 2 of 5 children are affected:
C(5,2) · (1/4)² · (3/4)³ = 10 · (1/16) · (27/64) = 270/1024 ≈ 0.264.

**Conditional probability** shows up in pedigree problems: “given that this couple already has an unaffected child, what’s the probability they’re both carriers?” Requires Bayesian updating — at State level you’ll mostly use simpler forms, but know that observed unaffected offspring can shift carrier-probability estimates.

## 1.4 Punnett squares: mono-, di-, and trihybrid

**Monohybrid (Aa × Aa):**

- Genotypic ratio 1 AA : 2 Aa : 1 aa.
- Phenotypic ratio 3 dominant : 1 recessive.

**Test cross** — cross an individual of dominant phenotype (unknown genotype) to a homozygous recessive (aa). If any recessive offspring appear, the unknown parent was heterozygous. Pure tool for determining genotype. A 1:1 offspring ratio → parent was Aa; all-dominant → parent was AA.

**Back cross** — crossing an F1 to one of its parents (or a genotype identical to a parent). A test cross is a special case where that parent is homozygous recessive.

**Dihybrid (AaBb × AaBb), independent assortment:**

- Gametes from each parent: AB, Ab, aB, ab (each 1/4).
- 16-box square → phenotypic ratio **9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb** = **9:3:3:1.**
- This 9:3:3:1 is the single most important ratio in the event. Memorize it and its derivation.

**Dihybrid test cross (AaBb × aabb):** offspring **1:1:1:1** (AaBb : Aabb : aaBb : aabb). Used to verify independent assortment — deviation from 1:1:1:1 signals linkage.

**Trihybrid (AaBbCc × AaBbCc):** don’t draw 64 boxes. Use the product rule. Probability of fully recessive (aabbcc) = (1/4)³ = 1/64. Probability of fully dominant phenotype (A_B_C_) = (3/4)³ = 27/64. Number of distinct gametes from a triple heterozygote = 2³ = 8. Number of phenotype classes = 2³ = 8; genotype classes = 3³ = 27.

**General formulas for an n-gene heterozygous cross (all genes independent, simple dominance):**

|Quantity                         |Formula|
|---------------------------------|-------|
|Types of gametes per parent      |2^n    |
|Genotypes in offspring           |3^n    |
|Phenotypes in offspring          |2^n    |
|Fraction fully recessive         |(1/4)^n|
|Fraction fully dominant phenotype|(3/4)^n|
|Boxes in full Punnett square     |4^n    |

## 1.5 Predicting genotypes/phenotypes & computing likelihood

Standard workflow for any cross problem:

1. Assign clear allele symbols; write each parent’s genotype.
1. Determine the mode of inheritance (simple dominant? incomplete? codominant? sex-linked? epistatic?). The phenotype ratios in the data tell you which.
1. List gametes (or go straight to per-gene probabilities).
1. Combine with product/sum rules; only draw the full square if the problem is small or asks for the full distribution.
1. Convert to the asked-for quantity (a genotype probability, a phenotype probability, an expected count = probability × total offspring).

**Working backward from ratios (a very common question type) — diagnostic table:**

|Observed F2 phenotype ratio|Most likely mechanism                                    |
|---------------------------|---------------------------------------------------------|
|3:1                        |Simple monohybrid dominance                              |
|1:2:1                      |Incomplete dominance or codominance (3 phenotypes)       |
|9:3:3:1                    |Two independent genes, simple dominance                  |
|2:1                        |Recessive lethal allele                                  |
|9:3:4                      |Recessive epistasis                                      |
|9:7                        |Complementary gene action (duplicate recessive epistasis)|
|9:6:1                      |Duplicate genes with additive effect                     |
|12:3:1                     |Dominant epistasis                                       |
|13:3                       |Dominant suppression epistasis                           |
|15:1                       |Duplicate dominant genes (redundancy)                    |
|1:1                        |Test cross of a heterozygote (monohybrid)                |
|1:1:1:1                    |Dihybrid test cross (independent)                        |

All the epistasis ratios are modifications of 9:3:3:1 — they sum to 16. That observation is your fastest route to recognizing them: if a two-gene cross gives classes summing to 16 but they aren’t 9:3:3:1, suspect epistasis and match the pattern.

## 1.6 Epistasis (explicit rules subtopic)

**Definition:** one gene’s alleles mask or modify the phenotypic expression of a *different* gene. (Contrast **dominance**, which is interaction between alleles *at the same locus*; epistasis is *between loci*.) The gene doing the masking is **epistatic**; the gene being masked is **hypostatic.**

**Recessive epistasis — 9:3:4.** Homozygous recessive at one locus blocks expression of the other gene entirely. Classic: **Labrador coat color.** Gene B: black (B_) vs. brown/chocolate (bb). Gene E: allows pigment deposition (E_) vs. blocks it (ee → yellow regardless of B). So ee is epistatic. 9 B_E_ (black) : 3 bbE_ (brown) : 3 B_ee (yellow) + 1 bbee (yellow) = **9 black : 3 brown : 4 yellow.** The “4” is the merged yellow class.

**Dominant epistasis — 12:3:1.** A dominant allele at one locus masks the other. Classic: **squash/summer squash color**, or dog coat where dominant white (W_) masks color. 9 + 3 (both white because W is present) : 3 : 1 = **12 : 3 : 1.**

**Duplicate recessive epistasis (complementary gene action) — 9:7.** Both genes must have at least one dominant allele to produce the phenotype; homozygous recessive at *either* locus gives the same null phenotype. Classic: **purple flower pigment** requiring two enzymes in a pathway (sweet pea). 9 A_B_ (purple) : (3 + 3 + 1 = 7) white. This is the basis of the **complementation** concept (§1.7).

**Duplicate dominant epistasis (redundant genes) — 15:1.** A dominant allele at *either* locus is sufficient. Only the double recessive lacks the phenotype. 15 : 1.

**Duplicate genes with additive effect — 9:6:1.** Dominant at both → one phenotype; dominant at exactly one (either) → intermediate; neither → third. 9 : 6 : 1.

**Dominant suppression — 13:3.** One dominant allele suppresses the phenotype. 13 : 3.

**Test-taking tip:** epistasis problems usually give you a pathway (enzyme A converts precursor → intermediate; enzyme B converts intermediate → product). Map each genotype onto where the pathway breaks. A block early masks everything downstream → that’s the epistatic gene. Reasoning from the biochemical pathway is more reliable than memorizing ratios, and the rules reward evidence-based reasoning.

## 1.7 Complementation (explicit rules subtopic)

**The complementation test** determines whether two recessive mutations causing the *same* phenotype are in the **same gene** or in **different genes.**

**Procedure:** cross two homozygous mutants (both showing the mutant phenotype). Examine the F1 (which carries one mutant allele from each parent).

- If F1 is **wild type → the mutations COMPLEMENT → they are in different genes.** Each parent supplied a functional copy of the gene the other parent had mutated, so between them all genes work.
- If F1 is **still mutant → the mutations FAIL to complement → they are in the same gene** (they are allelic). Neither parent could supply a working copy of that one gene.

**Logic in one line:** complementation = “can these two broken genomes, combined, build one fully working set of genes?” Yes → different genes. No → same gene.

**Connection to 9:7 epistasis:** complementary gene action (two genes in one pathway, both required) is the population-cross manifestation of complementation logic.

**Caveats / traps:** the complementation test requires *recessive* mutations and assumes no intragenic complementation (rare exceptions exist where two mutations in the same gene partially restore function) and no interallelic complementation. Dominant mutations cannot be tested this way. A cis/trans framing: complementation tests the *trans* configuration (mutations on different chromosomes).

## 1.8 Pedigree analysis (explicit rules subtopic — high frequency)

**Symbols:** square = male, circle = female, diamond = unknown sex; horizontal line between two = mating; vertical line down = offspring; shaded/filled = affected; half-filled = carrier (when shown); a dot/center dot = known carrier; double horizontal line = consanguineous mating; diagonal slash = deceased; Roman numerals label generations, Arabic numerals label individuals within a generation.

**Determining the mode of inheritance — decision logic:**

**Recessive vs. dominant:**

- **Recessive** clue: trait can **skip generations**; two unaffected parents can have an affected child (the parents are carriers). Affected × affected → typically all affected.
- **Dominant** clue: trait appears in **every generation** (no skipping); every affected child has at least one affected parent; two affected parents can produce an unaffected child (if both heterozygous).

**Autosomal vs. sex-linked (X-linked):**

- **X-linked recessive** clues: **far more affected males than females** (males are hemizygous — one recessive allele suffices). An affected female must have an affected father AND a carrier/affected mother. Classic “criss-cross”: affected male → carrier daughters → affected grandsons. No male-to-male (father→son) transmission of the trait (father gives Y to sons).
- **X-linked dominant** clues: affected males pass it to **ALL daughters and NO sons** (this is the single strongest diagnostic). Roughly twice as many affected females as males; no male-to-male transmission.
- **Autosomal:** sexes affected roughly equally; male-to-male transmission is possible and, if present, **rules out X-linkage.**
- **Y-linked (holandric):** only males affected; passed father → all sons; very rare.
- **Mitochondrial:** affected mothers pass to ALL children (both sexes); affected fathers pass to none. Matrilineal.

**The two fastest elimination rules to apply first:**

1. **Father→son transmission present?** → NOT X-linked (must be autosomal or Y).
1. **Affected daughter with an unaffected father?** → NOT X-linked dominant; and if recessive, father must carry it, so for X-linked recessive an affected female requires an affected father.

**Constructing a pedigree from a case study:** translate the narrative into symbols generation by generation, assign genotypes where forced (affected recessive individuals are homozygous; an unaffected parent of an affected recessive child is an obligate carrier), then compute requested probabilities using the product rule. Always state assumptions (e.g., assuming complete penetrance, assuming the allele is rare so unrelated individuals marrying in are non-carriers).

**Calculating risk from a pedigree (worked logic):** identify each relevant person’s genotype probability, then chain with the product rule. E.g., for an autosomal recessive trait, if both parents are obligate carriers (Aa × Aa), each child is affected with probability 1/4; an unaffected child is Aa with probability 2/3 (because we’ve excluded the aa box — of the three unaffected genotypes AA, Aa, Aa, two are carriers).

## 1.9 Linkage [State/Nat for mapping, but linkage concept is general]

**Linked genes** are on the same chromosome and tend to be inherited together, violating independent assortment. The closer two loci, the more tightly linked (the less often crossing over separates them).

- **Parental (non-recombinant) gametes/offspring:** carry the same allele combinations as the parents — the *majority* class when genes are linked.
- **Recombinant gametes/offspring:** new combinations produced by crossing over — the *minority* class.
- **Cis (coupling):** both dominant alleles on one homolog (AB / ab). **Trans (repulsion):** dominants on opposite homologs (Ab / aB). Knowing the arrangement in the parent tells you which offspring are parental vs. recombinant.

**Recombination frequency (RF):**

RF = (number of recombinant offspring) / (total offspring) × 100%

- RF ranges 0–50%. **50% = genes assort independently** (either on different chromosomes, or so far apart on the same chromosome that crossing over always separates them).
- 1% RF ≈ **1 map unit = 1 centimorgan (cM).** This conversion is the heart of gene mapping.

**Three-point cross and gene mapping — [State: 2 genes; Nationals: 3 genes].** Covered with full worked method in §3 context and the formula sheet; the mechanics:

1. Do a test cross of a trihybrid to a triple recessive so offspring phenotypes reveal gametes directly.
1. Identify the **two most frequent** classes = parental; the **two least frequent** = double crossovers (DCO).
1. The gene whose allele “flips” between parental and DCO is the **middle gene.**
1. RF between two genes = (single crossovers for that interval + double crossovers) / total.
1. **Interference:** I = 1 − coefficient of coincidence (CoC); CoC = (observed DCO) / (expected DCO), where expected DCO = RF₁ × RF₂ × total. Positive interference (CoC < 1) means one crossover suppresses a nearby second.

Full numeric walkthrough is in §3.7.

# 2. MITOSIS AND MEIOSIS

## 2.1 The cell cycle (context for both)

**Interphase** (cell not dividing, but very active) = G1 → S → G2:

- **G1 (Gap 1):** cell growth, normal metabolism, organelle duplication. Cell decides whether to divide. **G0** is a quiescent exit from the cycle (e.g., neurons).
- **S (Synthesis):** **DNA replication.** Each chromosome becomes two identical **sister chromatids** joined at the **centromere.** DNA content doubles (2C → 4C); chromosome *number* unchanged.
- **G2 (Gap 2):** further growth, replication of centrosomes completed, preparation for mitosis; error-checking.

**M phase** = mitosis (nuclear division) + cytokinesis (cytoplasmic division).

**Checkpoints (control points):**

- **G1/S (restriction point):** is the environment favorable, cell big enough, DNA undamaged? Governed by Rb/E2F, p53 (p53 halts cycle or triggers apoptosis if DNA is damaged — major tumor suppressor).
- **G2/M:** is DNA fully and correctly replicated? Is DNA damage repaired?
- **Spindle assembly checkpoint (M, metaphase→anaphase):** are all kinetochores attached to spindle microtubules? Prevents premature anaphase and is the key guard against nondisjunction.
- Drivers: **cyclins + cyclin-dependent kinases (CDKs).** Cyclin levels rise and fall; CDKs are active only when bound to cyclin. (Know that loss of checkpoint control → genomic instability → cancer.)

## 2.2 Mitosis — stages and structures

Mitosis produces **two genetically identical diploid daughter cells** from one parent cell. Purpose: growth, repair, asexual reproduction.

**Prophase:** chromatin condenses into visible chromosomes (each = 2 sister chromatids); spindle apparatus begins forming from centrosomes; nucleolus disappears.

**Prometaphase:** nuclear envelope breaks down; **kinetochores** assemble at centromeres; spindle microtubules attach to kinetochores.

**Metaphase:** chromosomes align single-file on the **metaphase plate** (cell equator); spindle attached to both poles. Spindle checkpoint verifies attachment.

**Anaphase:** **sister chromatids separate** (cohesin cleaved by separase) and move to opposite poles; each chromatid now an independent chromosome. The defining event: centromeres split.

**Telophase:** chromosomes decondense; nuclear envelopes reform around each set; nucleoli reappear; spindle disassembles.

**Cytokinesis:** cytoplasm divides. **Animal cells:** cleavage furrow pinches via actin–myosin contractile ring. **Plant cells:** a **cell plate** forms from vesicles at the center (rigid cell wall prevents pinching).

**Key structures:** centromere, kinetochore (protein complex at centromere where spindle attaches), centrosome (microtubule-organizing center; contains centrioles in animals), spindle fibers (kinetochore, polar/non-kinetochore, and astral microtubules), metaphase plate.

## 2.3 Meiosis — stages and structures

Meiosis produces **four genetically distinct haploid cells (gametes)** from one diploid cell, via **one round of DNA replication followed by two divisions** (meiosis I and II). Purpose: sexual reproduction; generates genetic variation.

**Meiosis I — reductional division (2n → n; homologs separate):**

- **Prophase I** (longest, most important; substages **L-Z-P-D-D**: Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis):
  - Homologous chromosomes pair up = **synapsis**, held by the **synaptonemal complex**, forming a **bivalent / tetrad** (4 chromatids).
  - **Crossing over** (recombination) occurs between non-sister chromatids at **chiasmata** — physical exchange of DNA segments. This is the major source of new allele combinations and the basis of genetic mapping.
- **Metaphase I:** tetrads (homolog pairs) align at the metaphase plate. **Independent assortment** happens here — each pair orients randomly relative to others (2^n possible arrangements; humans 2²³).
- **Anaphase I:** **homologous chromosomes separate** to opposite poles; **sister chromatids stay together** (centromeres do NOT split). This is the reductional step.
- **Telophase I / cytokinesis:** two haploid cells, each chromosome still two chromatids.

**Meiosis II — equational division (n → n; like mitosis on haploid cells):**

- **Prophase II:** chromosomes condense (if they decondensed); new spindle.
- **Metaphase II:** chromosomes (each 2 chromatids) align at plate.
- **Anaphase II:** **sister chromatids finally separate** (centromeres split).
- **Telophase II / cytokinesis:** four haploid daughter cells, each chromosome now a single chromatid.

**Two sources of variation in meiosis (know both, and that fertilization adds a third):**

1. **Independent assortment** (metaphase I random orientation): 2^n combinations.
1. **Crossing over / recombination** (prophase I): essentially infinite new combinations.
1. **Random fertilization** (which sperm meets which egg).

## 2.4 Mitosis vs. Meiosis — compare and contrast (high-frequency table)

|Feature               |Mitosis                             |Meiosis                    |
|----------------------|------------------------------------|---------------------------|
|Divisions             |1                                   |2 (I and II)               |
|Daughter cells        |2                                   |4                          |
|Ploidy change         |2n → 2n                             |2n → n                     |
|Genetic identity      |Identical to parent & each other    |Genetically distinct       |
|Synapsis / tetrads    |No                                  |Yes (prophase I)           |
|Crossing over         |Normally no                         |Yes (prophase I)           |
|Homologs separate     |No                                  |Yes (anaphase I)           |
|Sisters separate      |Yes (anaphase)                      |Yes (anaphase II only)     |
|Independent assortment|No                                  |Yes (metaphase I)          |
|Purpose               |Growth, repair, asexual reproduction|Gamete formation, variation|
|Where (humans)        |Somatic cells                       |Germ cells (gonads)        |

**The single most-tested distinction:** in **anaphase I**, homologs separate (sisters stay joined); in **anaphase II** *and* **mitotic anaphase**, sisters separate. If you remember only one thing, remember what separates when.

**DNA content tracking (C-value), starting from a 2n cell with content 2C:**

- After S phase: 4C (still 2n by chromosome number).
- End of meiosis I: each cell is 2C (n chromosomes, each 2 chromatids).
- End of meiosis II: each cell is 1C (n chromosomes, 1 chromatid).
- Mitosis: 4C → two 2C cells.

## 2.5 Nondisjunction and chromosomal abnormalities [State/Nat — explicit rules subtopic]

**Nondisjunction** = failure of chromosomes to separate properly during cell division.

- **Meiosis I nondisjunction:** homologs fail to separate → all four gametes abnormal (2 with n+1, 2 with n−1).
- **Meiosis II nondisjunction:** sister chromatids fail to separate → 2 normal gametes, 1 n+1, 1 n−1.
- **Mitotic nondisjunction:** produces **mosaicism** (some cell lines normal, some aneuploid).

**Aneuploidy** = abnormal chromosome number (not a multiple of the haploid set):

- **Monosomy (2n−1):** e.g., **Turner syndrome (45, X)** — single X, female, usually sterile, short stature. The only viable human monosomy.
- **Trisomy (2n+1):**
  - **Trisomy 21 = Down syndrome** (most common viable autosomal trisomy).
  - **Trisomy 18 = Edwards syndrome.**
  - **Trisomy 13 = Patau syndrome.**
  - **47, XXY = Klinefelter syndrome** (male, often sterile, reduced testosterone).
  - **47, XYY** (Jacob’s); **47, XXX** (Triple X).
- **Nullisomy (2n−2):** both copies missing — generally lethal.

**Euploidy abnormalities:**

- **Polyploidy** = whole extra sets (3n triploid, 4n tetraploid). Common and often advantageous in plants (many crops); usually lethal in animals. **Autopolyploidy** (sets from one species) vs. **allopolyploidy** (sets from hybridization of different species — important in plant speciation, e.g., wheat).

**Structural chromosome abnormalities (also classified at the DNA level in §4.6):**

- **Deletion** — segment lost. **Cri-du-chat** = deletion on chromosome 5p.
- **Duplication** — segment repeated.
- **Inversion** — segment reversed (paracentric = excludes centromere; pericentric = includes centromere). Can disrupt meiotic pairing → “inversion loops.”
- **Translocation** — segment moves to a non-homologous chromosome. **Reciprocal** (exchange) vs. **Robertsonian** (fusion of two acrocentric chromosomes at the centromere — a cause of familial Down syndrome).

## 2.6 Karyotypes and reading them [State/Nat — explicit rules subtopic]

**Karyotype** = the complete set of chromosomes of a cell, arranged by size, centromere position, and banding pattern. Made from cells arrested in **metaphase** (most condensed, most visible), stained (e.g., **G-banding** with Giemsa).

**Notation (ISCN):** total chromosome number, then sex chromosomes, then any abnormalities.

- 46, XX = normal female; 46, XY = normal male.
- 47, XY, +21 = male with trisomy 21.
- 45, X = Turner.
- 47, XXY = Klinefelter.
- p = short arm (petit), q = long arm. Band addresses like 5p15.2.

**Centromere position classification:** **metacentric** (centromere central), **submetacentric** (off-center), **acrocentric** (near one end), **telocentric** (at the very end).

**Reading a karyotype to detect abnormalities (the actual test skill):** count total chromosomes; check the sex pair; scan for an extra or missing chromosome (trisomy/monosomy); look at each homolog pair for length differences or altered banding (deletion, duplication, translocation, inversion). Be able to *write the correct ISCN string* from a described or pictured karyotype and to *infer the syndrome* from the string.

## 2.7 Somatic recombination: V(D)J recombination & class switching [State/Nat — explicit rules subtopic]

This is the rules’ “somatic recombination in immune cells.” It’s how a limited genome generates billions of distinct antibodies/T-cell receptors. It happens in *somatic* (body) cells, not germline — hence “somatic recombination.”

**The problem it solves:** the genome can’t encode a separate gene for every possible antibody. Instead, antibody (immunoglobulin, Ig) and T-cell receptor genes are assembled from **gene segments** that are recombined combinatorially.

**V(D)J recombination:**

- Antibody **heavy chain** is built from **V (Variable), D (Diversity), and J (Joining)** segments; **light chain** from **V and J** only (no D).
- During B-cell development, one V, (one D), and one J segment are randomly selected and joined; intervening DNA is excised.
- Catalyzed by **RAG1/RAG2 recombinase**, which cut at **recombination signal sequences (RSS)** flanking the segments; ends are joined by **non-homologous end joining (NHEJ).**
- **Sources of antibody diversity:** (1) **combinatorial** diversity from choosing among many V, D, J segments; (2) **junctional** diversity from imprecise joining and addition of nucleotides by **TdT (terminal deoxynucleotidyl transferase)** at the V-D and D-J junctions; (3) **combinatorial pairing** of different heavy and light chains; (4) **somatic hypermutation** later in mature B cells (in germinal centers, driven by **AID**) for affinity maturation.

**Class (isotype) switching (class-switch recombination, CSR):**

- Changes the antibody’s **constant (C) region**, switching the isotype (IgM → IgG, IgA, or IgE) **without changing antigen specificity** (the V(D)J region is retained).
- Occurs at **switch (S) regions** upstream of each constant-region gene; deletes the intervening DNA so a new C gene is brought adjacent to the assembled V(D)J.
- Driven by **AID (activation-induced cytidine deaminase)**; directed by cytokines from helper T cells.
- Result: same antigen-binding specificity, different effector function/location (e.g., IgA for mucosa, IgE for allergy/parasites, IgG for systemic/secondary response).

**Why it’s “recombination” tied to this unit:** like meiotic recombination it involves programmed DNA double-strand breaks and rejoining — but it is somatic, site-specific, and generates diversity rather than shuffling existing alleles.

# 3. POPULATION & EVOLUTIONARY GENETICS

## 3.1 Hardy–Weinberg equilibrium (HWE) — assumptions, equations, calculations

**What it is:** a null model. In a population that meets all assumptions, **allele and genotype frequencies stay constant generation to generation** — i.e., *no evolution occurs.* Real deviations from HWE are evidence that some evolutionary force is acting. This “null hypothesis” framing is exactly the evidence-based reasoning the rules reward.

**The five assumptions (memorize; each maps to a force that breaks it):**

1. **No mutation** (mutation changes allele frequencies/introduces alleles).
1. **No gene flow / migration** (migration moves alleles between populations).
1. **No genetic drift → requires infinitely large population** (drift = random change, strongest in small populations).
1. **Random mating** (no assortative mating, no inbreeding).
1. **No natural selection** (all genotypes equally fit/viable/fertile).

Mnemonic for what *violates* it: **M**utation, **M**igration, **D**rift (small N), **N**on-random mating, **S**election.

**The equations** (for one gene with two alleles, frequencies **p** and **q**):

- Allele frequencies: **p + q = 1**
- Genotype frequencies: **p² + 2pq + q² = 1**
  - p² = frequency of homozygous dominant (AA)
  - 2pq = frequency of heterozygotes (Aa)
  - q² = frequency of homozygous recessive (aa)

**Standard calculation workflow (the most common quantitative question in the whole event):**

1. For a recessive trait, the **affected frequency = q²** (only aa shows it). So **q = √(q²).**
1. **p = 1 − q.**
1. Carriers (heterozygotes) frequency = **2pq.**
1. Homozygous dominant = **p².**
1. Expected numbers = frequency × population size.

**Worked example:** 1 in 10,000 people has a recessive disorder.

- q² = 1/10,000 = 0.0001 → q = 0.01.
- p = 0.99.
- Carrier frequency 2pq = 2(0.99)(0.01) = 0.0198 ≈ **~1 in 50.** (Note how many more carriers than affected — a classic teaching point.)
- AA frequency p² = 0.9801.

**Counting alleles directly (when given genotype counts):** allele frequency = (2 × homozygotes of that allele + heterozygotes) / (2 × total individuals). Each diploid individual contributes 2 alleles. Use this when the problem gives you genotype numbers rather than a phenotype frequency — and you can then *test* whether the population is in HWE by comparing observed genotype counts to expected (p², 2pq, q²) counts, often with a chi-square test (§3.2).

**Three-allele extension (e.g., ABO):** if allele frequencies are p, q, r with p+q+r = 1, then (p+q+r)² expands to genotype frequencies: p² + q² + r² + 2pq + 2pr + 2qr = 1. For ABO with I^A = p, I^B = q, i = r:

- Type O = r²; Type A = p² + 2pr; Type B = q² + 2qr; Type AB = 2pq.

**X-linked alleles:** allele frequencies differ by sex bookkeeping. For an X-linked recessive trait with recessive allele frequency q: affected **males = q** (hemizygous, so frequency of affected males equals the allele frequency); affected **females = q²**. This is why X-linked recessive conditions are far more common in males — a frequently tested consequence.

## 3.2 Testing HWE with chi-square (you should be ready for this)

Chi-square (χ²) goodness-of-fit compares **observed** vs. **expected** counts:

χ² = Σ [(O − E)² / E]

- E (expected) genotype counts come from p², 2pq, q² × N.
- **Degrees of freedom (df)** for an HWE test = (number of genotype classes) − (number of alleles estimated) − 1. For 2 alleles / 3 genotypes: df = 3 − 1 − 1 = **1.** (For a simple Mendelian cross goodness-of-fit, df = number of phenotype classes − 1.)
- Compare χ² to the critical value at your df and α = 0.05. If χ² > critical, **reject** the hypothesis (population is NOT in HWE / cross does not fit expected ratio). If χ² ≤ critical, fail to reject.
- Critical values to know: df=1 → **3.84**; df=2 → 5.99; df=3 → 7.81; df=4 → 9.49 (α=0.05).

**Interpretation is the graded part:** a significant deviation means an evolutionary force is acting; an excess of homozygotes suggests inbreeding/Wahlund effect; an excess of heterozygotes can suggest heterozygote advantage or outbreeding.

## 3.3 Forces that change allele frequencies (rules subtopic: drift, founder, bottleneck, migration, fitness)

**Genetic drift** — random change in allele frequencies due to **sampling error** between generations.

- **Strongest in small populations** (large samples average out chance).
- Random with respect to fitness — can fix harmful or lose beneficial alleles.
- Over time, reduces genetic variation (alleles drift to fixation [freq 1] or loss [freq 0]); reduces heterozygosity.

**Founder effect** — a special case of drift: a **new population is started by a few individuals**, carrying only a non-representative subset of the source population’s alleles. Reduced diversity; rare alleles can become common (e.g., higher frequency of certain disorders in the Amish, Afrikaners, Ashkenazi populations).

**Bottleneck effect** — a special case of drift: a population is **drastically reduced** (disaster, overhunting) then recovers; survivors carry only a fraction of original variation, often with frequencies skewed by chance (e.g., northern elephant seals, cheetahs). Even after numbers rebound, diversity stays low.

**Migration / gene flow** — movement of alleles between populations via individuals or gametes. **Homogenizes** populations (makes them more genetically similar); introduces new alleles; counteracts drift and can oppose local adaptation.

**Mutation** — ultimate source of all new alleles/variation. Per-locus rates are low, so mutation alone changes frequencies slowly, but it’s the raw material selection and drift act on.

**Natural selection & fitness:**

- **Fitness (w)** = relative reproductive success of a genotype (contribution to the next gene pool). **Relative fitness** is scaled so the most-fit genotype = 1.
- **Selection coefficient s = 1 − w** (the fitness reduction; s for the favored genotype is 0).
- **Modes of selection:**
  - **Directional** — favors one extreme; shifts the mean (e.g., antibiotic resistance, peppered moth industrial melanism).
  - **Stabilizing** — favors the intermediate; reduces variance (e.g., human birth weight).
  - **Disruptive (diversifying)** — favors both extremes against the middle; can drive speciation.
- **Balancing selection** maintains polymorphism:
  - **Heterozygote advantage (overdominance):** Aa fitter than either homozygote → both alleles persist. Classic: **sickle-cell (HbS)** heterozygotes resist malaria; HbA/HbS maintained in malarial regions despite HbS/HbS being deleterious.
  - **Frequency-dependent selection:** a genotype’s fitness depends on how common it is (often rare-advantage).
- **Sexual selection:** differential mating success (intrasexual competition, intersexual choice); can oppose natural selection (e.g., costly ornaments).

**Allele frequency change under selection (be able to reason, possibly compute):** Δq per generation depends on s and the dominance of the allele. For a fully recessive deleterious allele, selection is **inefficient at low q** because the allele “hides” in heterozygotes (q² affected is tiny when q is small) — which is why recessive disease alleles persist. This reasoning is testable even without the full equation.

## 3.4 Speciation and related concepts (commonly bundled in)

- **Species (biological species concept):** groups that can interbreed and produce fertile offspring; reproductively isolated from others. (Know its limits: doesn’t apply to asexual organisms, fossils, or cases of hybridization.)
- **Reproductive isolating mechanisms:**
  - **Prezygotic** (prevent mating/fertilization): habitat, temporal, behavioral, mechanical, gametic isolation.
  - **Postzygotic** (hybrid problems): reduced hybrid viability, reduced hybrid fertility (e.g., mule), hybrid breakdown.
- **Allopatric speciation** (geographic separation) vs. **sympatric speciation** (same area; e.g., via polyploidy in plants, or host shifts).
- **Adaptive radiation, convergent evolution (analogy), divergent evolution (homology), coevolution.**

## 3.5 Quantitative/polygenic traits & continuous variation (rules subtopic)

**Polygenic trait** = a phenotype controlled by **many genes**, each contributing a small **additive** effect → **continuous variation** (a bell-shaped distribution) rather than discrete classes. Examples: height, skin color, weight. Often also influenced by environment → **multifactorial.**

**Why additive alleles make continuous variation:** if each “contributing” allele adds a small increment, the number of contributing alleles across many loci produces a near-continuous spread; more loci → smoother distribution and a tighter approach to a normal curve.

**Estimating the number of genes contributing to a trait (rules: “estimate the number of genes”):**

- For n loci each with two alleles, contributing additively, the number of distinct phenotypic classes in F2 ≈ **2n + 1.**
- The fraction of F2 resembling one extreme (parental) phenotype = **(1/4)^n.** So if 1/256 of F2 are as extreme as one parent, (1/4)^n = 1/256 → 4^n = 256 → n = 4 genes.
- This (1/4)^n logic is the standard “how many genes” calculation — be fluent in inverting it.

**Basic descriptive statistics you may need:**

- **Mean** (average), **median**, **mode.**
- **Variance (s²)** = average squared deviation from the mean = Σ(x − x̄)²/(N−1) for a sample.
- **Standard deviation (s)** = √variance.
- These feed directly into heritability (§3.6).

## 3.6 Heritability [State/Nat — explicit rules subtopic; calculation required]

**Heritability** quantifies **how much of the phenotypic variation in a population is due to genetic variation.** It is a property of a **population in an environment**, NOT of an individual, and NOT a statement that a trait is “X% genetic” for any person. (This caveat is a favorite conceptual question.)

**Variance partition:**

V_P = V_G + V_E (+ V_GE interaction, often folded in)

where V_P = total phenotypic variance, V_G = genetic variance, V_E = environmental variance.

V_G further splits: **V_G = V_A + V_D + V_I**

- **V_A = additive** genetic variance (effects of individual alleles that “breed true” — the part that responds to selection).
- **V_D = dominance** variance (interactions between alleles at the same locus).
- **V_I = interaction/epistatic** variance (between loci).

**Two heritabilities — know the difference cold:**

- **Broad-sense heritability:** **H² = V_G / V_P.** Fraction of phenotypic variance due to *all* genetic variance.
- **Narrow-sense heritability:** **h² = V_A / V_P.** Fraction due to *additive* genetic variance only. **This is the one that predicts response to selection** (because only additive effects are reliably passed parent→offspring).

**Realized heritability — from a selection experiment:**

h² = R / S

- **S = selection differential** = (mean of selected parents) − (population mean).
- **R = response to selection** = (mean of offspring of selected parents) − (original population mean).
- So **R = h² × S** (the **breeder’s equation**) — be ready to solve for any of the three.

**Worked example:** population mean tail length 10 cm; you breed only individuals averaging 14 cm (S = 4). Offspring average 12 cm (R = 2). Realized h² = R/S = 2/4 = **0.5.** Interpretation: half the selected superiority was transmitted; additive genetic variance accounts for ~50% of phenotypic variance for this trait in this population.

**Key conceptual points (testable):**

- Heritability ranges 0–1.
- High heritability does NOT mean environment is unimportant, nor that the trait is unchangeable — it’s specific to the population and environment measured.
- Heritability says nothing about *differences between groups/populations.*
- Estimated from resemblance among relatives (parent–offspring regression, twin studies: comparing monozygotic vs. dizygotic concordance) or directly from selection experiments (realized h²).

## 3.7 Gene mapping from recombination data [State: 2 genes; Nationals: 3 genes — explicit rules subtopic]

**Two-point mapping [State]:**

- RF = recombinants / total × 100; **1% = 1 cM = 1 map unit.**
- Determine recombinant vs. parental classes from a test cross (trihybrid → homozygous recessive so offspring genotype = the gamete from the heterozygous parent).

**Three-point cross [Nationals] — full method:**
Suppose a test cross yields 8 phenotype classes. Steps:

1. **Total** the offspring.
1. **Two largest classes = parental (non-crossover).** They tell you the parental allele arrangement (cis/trans).
1. **Two smallest classes = double crossovers (DCO).**
1. **Find the middle gene:** compare a parental gamete to a DCO gamete; the **one gene whose allele has switched** sides is in the **middle.**
1. **Distance gene1–gene2** = [single crossovers in that region + DCOs] / total × 100.
1. **Distance gene2–gene3** likewise.
1. (Outer distance = sum, ignoring double-count if asked for “additive” map; the directly observed outer RF underestimates true distance because DCOs restore the parental outer combination — which is *why* mapping with a middle marker is more accurate.)
1. **Interference:**
- Expected DCO = RF(1–2) × RF(2–3) × total (using frequencies as decimals).
- **Coefficient of coincidence (CoC) = observed DCO / expected DCO.**
- **Interference (I) = 1 − CoC.** I near 1 = strong interference (one crossover strongly inhibits a nearby one); I = 0 = crossovers independent.

**Worked micro-example (interference):** if RF(1–2) = 10% and RF(2–3) = 20%, expected DCO frequency = 0.10 × 0.20 = 0.02 = 2% of offspring. If you observed only 1% DCO, CoC = 1/2 = 0.5, so I = 0.5 — moderate positive interference.

## 3.8 Gene duplication, genome evolution & homology [State/Nat — explicit rules subtopic]

**Gene duplication** creates a second copy of a gene; one copy can retain the original function while the other is free to accumulate mutations. Outcomes:

- **Neofunctionalization:** the duplicate evolves a brand-new function.
- **Subfunctionalization:** the two copies divide the ancestral functions between them.
- **Pseudogene:** the duplicate accumulates inactivating mutations and becomes nonfunctional.
- **Gene families** arise from repeated duplication (e.g., **globin family** — α, β, myoglobin from a common ancestral gene; **Hox gene clusters**).

**Mechanisms of duplication:** unequal crossing over, whole-genome duplication (polyploidy — major in plants), retrotransposition (RNA→cDNA reinsertion, producing intronless copies), tandem duplication.

**Homology vocabulary (must distinguish precisely — common trap):**

- **Homologs / homologous genes:** share common ancestry (any related genes).
- **Orthologs:** homologous genes in **different species** that diverged due to a **speciation** event; typically retain the same function (e.g., human and mouse β-globin). Best for inferring species relationships.
- **Paralogs:** homologous genes within the **same genome** that arose by **gene duplication** (e.g., human α-globin and β-globin). Often diverge in function.
- (Advanced: **xenologs** — acquired by horizontal gene transfer.)

**One-line discriminator:** Speciation → **O**rtholog (same starting letter helps: *O*rtholog from *O*rganism-split). Duplication → **P**aralog (*P*aralog from du*P*lication). Same/similar function and cross-species → ortholog; within-genome and often new function → paralog.

## 3.9 Phylogenetics [State/Nat — explicit rules subtopic]

**A phylogenetic tree** depicts hypothesized evolutionary relationships. Read it correctly:

- **Tips/leaves** = taxa (species, genes, sequences). **Internal nodes** = inferred common ancestors. **Branches** = lineages. **Root** = the most recent common ancestor of everything on the tree (an **unrooted** tree shows relationships but not direction of time).
- **Clade (monophyletic group)** = an ancestor and ALL its descendants. **Paraphyletic** = ancestor and some (not all) descendants. **Polyphyletic** = members lacking a recent common ancestor (grouped by convergence).
- **Sister taxa** = two lineages sharing an immediate common ancestor (the node connecting only them).
- **Branch length** may represent time or amount of genetic change (depends on tree type — check the scale).
- **Rotating branches around a node does NOT change the relationships** — a key misreading trap. Relatedness is about shared nodes, not vertical proximity on the page.
- **Outgroup** = a taxon known to be outside the group of interest, used to **root** the tree and polarize character states (distinguish ancestral from derived).

**Characters used to build trees:**

- **Ancestral (plesiomorphic)** vs. **derived (apomorphic)** states.
- **Synapomorphy** = a shared *derived* character — the evidence that unites a clade.
- **Homoplasy** = similarity NOT from common ancestry: **convergent evolution, parallelism, or reversal** (misleading signal).

**Molecular phylogenetics — nuclear vs. organellar vs. extrachromosomal (the rules name these three categories explicitly; be able to interpret a phylogeny of each):**

- **Nuclear genes:** **biparental** inheritance, undergo **recombination**, large dataset, slower average mutation rate. The default for species-level phylogeny; recombination means different nuclear loci can have slightly different histories.
- **Organellar genomes:**
  - **Mitochondrial DNA (mtDNA):** **maternally** inherited, **no recombination**, **higher mutation rate** — good for recent/within-species divergence and matrilineal histories (e.g., “Mitochondrial Eve”). Because it’s a single non-recombining locus, it traces one lineage (the maternal line), which may **disagree** with the nuclear (species) tree.
  - **Chloroplast DNA (cpDNA):** uniparentally inherited (usually **maternal** in angiosperms, paternal in many gymnosperms), non-recombining; standard for **plant** phylogenetics.
- **Extrachromosomal elements (plasmids and viruses):** self-replicating DNA outside the chromosome. Their phylogenies can be **completely discordant** with the host’s because they move by **horizontal gene transfer** (HGT) between unrelated lineages. A plasmid/viral gene tree reflects the element’s transmission history, not the host species tree.
- **Why this matters (the interpretive skill the rules want):** when the **gene tree ≠ the species tree**, the discordance is *evidence* — it can reveal **hybridization/introgression, incomplete lineage sorting, horizontal gene transfer, or endosymbiotic origin** (mitochondria/chloroplasts branch with bacteria, not with their host’s nuclear genome — the molecular signature of **endosymbiotic theory**). This is why robust phylogenies use **multiple genes** from different genomic compartments and compare them.

**Basic steps of constructing a phylogenetic tree from sequence data (rules: “beginning with sequence data input”):**

1. **Collect homologous sequences** (DNA or protein) for each taxon.
1. **Multiple sequence alignment** — line up homologous positions, inserting gaps for insertions/deletions (indels). Alignment quality is critical; errors propagate.
1. **Choose a substitution/evolutionary model** (e.g., Jukes–Cantor, Kimura) accounting for multiple hits at a site.
1. **Build the tree** by a method:
- **Distance-based:** compute pairwise distances, then cluster — **UPGMA** (assumes a molecular clock, ultrametric) or **Neighbor-Joining** (doesn’t assume equal rates).
- **Character-based:** **Maximum Parsimony** (fewest evolutionary changes), **Maximum Likelihood** (most probable tree under the model), **Bayesian inference** (posterior probabilities).
1. **Assess support:** **bootstrap** resampling (values ≥70–95% = well-supported nodes), or Bayesian posterior probabilities.
1. **Root** the tree (outgroup or midpoint) and interpret.

**Molecular clock:** the idea that mutations accumulate at a roughly constant rate, so genetic distance ≈ time since divergence — useful for dating splits but rates vary among lineages and genes (so it’s calibrated against fossils and treated cautiously).

# 4. MOLECULAR BIOLOGY OF DNA

## 4.1 DNA structure: nucleotides, backbone, directionality, base pairing

**Nucleotide = three parts:** a **nitrogenous base** + a **pentose sugar (deoxyribose in DNA)** + one or more **phosphate groups.** (A nucleo**side** = base + sugar only, no phosphate.)

**The sugar — deoxyribose vs. ribose:** DNA’s deoxyribose lacks the **2′-OH** that ribose (RNA) has (it has H at 2′ instead). This missing 2′-OH makes DNA more chemically **stable** than RNA — important for a long-term information store.

**Bases:**

- **Purines (two rings): Adenine (A), Guanine (G).** (“Pure As Gold” / Pure = Pur = A,G.)
- **Pyrimidines (one ring): Cytosine (C), Thymine (T)** — and **Uracil (U) in RNA** (replaces T).
- Mnemonic: pyrimidines are **CUT** (C, U, T).

**The backbone:** alternating **sugar–phosphate** units linked by **phosphodiester bonds** (between the 3′-OH of one sugar and the 5′-phosphate of the next). The bases project inward. The backbone is **negatively charged** (phosphates) — why DNA migrates to the positive electrode in gel electrophoresis.

**Directionality (5′ and 3′ — heavily tested):**

- Each strand has a **5′ end** (free phosphate on the 5′ carbon) and a **3′ end** (free hydroxyl on the 3′ carbon).
- Synthesis always proceeds **5′ → 3′** (new nucleotides added to the 3′-OH).
- The two strands are **antiparallel** — one runs 5′→3′, the complementary runs 3′→5′.
- When writing a complement, **reverse the direction.** E.g., strand 5′-ATGC-3′ pairs with 3′-TACG-5′, conventionally written 5′-GCAT-3′.

**Base pairing (Watson–Crick / Chargaff) — this is what the rules mean by “rules in the context of DNA structure and base pairing”:**

- **A pairs with T** via **2 hydrogen bonds**; **G pairs with C** via **3 hydrogen bonds.** (G–C is stronger/more stable; GC-rich DNA has a higher melting temperature.)
- **Complementarity rule:** the two strands are complementary — knowing one strand’s sequence gives the other.
- **Chargaff’s rules** (the empirical base-composition rules that *led to* the pairing model): in dsDNA, **%A = %T** and **%G = %C**; therefore **%A + %G (purines) = %T + %C (pyrimidines) = 50%.** Given %G, you can compute all four: if G = 30%, then C = 30%, so A + T = 40%, A = T = 20%. Be ready for these. *(Chargaff’s second rule: these near-equalities also hold approximately within a single strand for long sequences.)*
- These structural rules are the basis of replication, transcription, PCR primers, and hybridization probes.

**Higher structure:**

- **Double helix**, antiparallel, right-handed (**B-DNA** is the common physiological form; A-DNA dehydrated; **Z-DNA** left-handed).
- ~10.5 bp per turn; **major and minor grooves** (proteins read sequence mainly via the major groove).
- Strands held by H-bonds (between bases) and **base-stacking** interactions (hydrophobic, major contributor to stability).

## 4.2 DNA replication: stages from pre-RC assembly to termination (rules-specific depth)

**Overarching principle: semiconservative replication** (Meselson–Stahl experiment, density-gradient centrifugation with ¹⁵N/¹⁴N) — each daughter duplex has one parental and one new strand.

**Initiation / pre-replication complex (pre-RC):**

- Replication begins at **origins of replication** (one in bacteria — *oriC*; many in eukaryotes).
- **Origin Recognition Complex (ORC)** binds the origin (eukaryotes). Loading factors **Cdc6** and **Cdt1** recruit the **MCM2–7 helicase** to form the **pre-RC** (this “licensing” happens in G1).
- Activation in S phase (by CDKs and DDK kinases) fires the origin; helicase unwinds DNA, forming two **replication forks** (bidirectional) and a **replication bubble.**

**At the replication fork (rules: “in detail the processes at the fork”):**

- **Helicase** unwinds the double helix (breaks H-bonds), creating two single strands.
- **Single-strand binding proteins (SSBs)** coat and stabilize the separated strands, preventing reannealing/secondary structure.
- **Topoisomerase (gyrase in bacteria)** relieves the **supercoiling/torsional strain** ahead of the fork by nicking and resealing DNA.
- **Primase** (an RNA polymerase) lays down a short **RNA primer** providing a free 3′-OH (DNA polymerase can’t start de novo).
- **DNA polymerase** extends from the primer, adding dNTPs **5′→3′**, reading the template **3′→5′**.
  - **Leading strand:** synthesized **continuously** toward the fork (one primer).
  - **Lagging strand:** synthesized **discontinuously** away from the fork in short **Okazaki fragments**, each needing its own primer.
- **Sliding clamp (PCNA in eukaryotes, β-clamp in bacteria)** tethers polymerase to DNA for processivity; loaded by the **clamp loader (RFC).**
- **RNA primers removed** (bacteria: DNA Pol I with 5′→3′ exonuclease / RNase H; eukaryotes: RNase H + FEN1) and replaced with DNA.
- **DNA ligase** seals the nicks between fragments (forms phosphodiester bonds).

**Key bacterial polymerases (know roles):** **Pol III** = main replicative enzyme (high processivity); **Pol I** = removes primers, fills gaps, repair; **Pol II, IV, V** = repair/translesion. Eukaryotic: **Pol α** (primase-associated, initiation), **Pol δ** (lagging strand), **Pol ε** (leading strand), **Pol γ** (mitochondrial).

**Termination:**

- Bacteria (circular genome): forks meet at **ter** sites bound by **Tus** protein; topoisomerase IV decatenates the interlinked daughter circles.
- Eukaryotes: adjacent replication forks meet and merge.

**The end-replication problem & telomeres (eukaryote-specific):**

- Linear chromosome ends can’t be fully replicated on the lagging strand (no template for the final primer’s replacement) → chromosomes shorten each division.
- **Telomeres** are repetitive end sequences (TTAGGG in humans) that buffer this loss.
- **Telomerase** (a reverse transcriptase carrying its own RNA template) extends telomeres in germ cells, stem cells, and most cancers — relevant to aging and cancer.

## 4.3 Fidelity of replication & DNA proofreading (rules-specific subtopic)

DNA polymerase achieves extraordinarily low error rates (~1 in 10⁹–10¹⁰ overall) through **three layers:**

1. **Base selection / nucleotide selectivity:** correct base pairing geometry (Watson–Crick) is strongly favored at the active site; wrong nucleotides fit poorly. (~1 error per 10⁴–10⁵.)
1. **Proofreading (3′→5′ exonuclease activity):** many DNA polymerases can **reverse and excise** a freshly misincorporated nucleotide from the 3′ end, then resynthesize. This is the “proofreading” the rules name. Improves fidelity ~100–1000×. (Pol III and Pol I have it in bacteria; Pol δ/ε in eukaryotes.)
1. **Mismatch repair (MMR), post-replication:** a separate system (next section) catches errors that escaped proofreading, improving fidelity another ~100–1000×.

**Why proofreading needs a 3′ end / why replication is 5′→3′ (elegant testable point):** synthesizing 5′→3′ means the energy for adding each nucleotide comes from the incoming dNTP’s triphosphate. If synthesis went 3′→5′, removing a mismatched terminal nucleotide would strip the triphosphate needed to extend — proofreading would stall. The 5′→3′ directionality is what *enables* efficient proofreading.

## 4.4 DNA organization: plasmids, chromatin, euchromatin/heterochromatin, chromosomes (rules-specific)

**Prokaryotic organization:**

- Usually a single **circular chromosome** in the **nucleoid** (no membrane).
- Supercoiled and organized by nucleoid-associated proteins.
- **Plasmids:** small, circular, extrachromosomal DNA that replicates independently; carry accessory genes (antibiotic resistance, virulence, F-fertility). Basis of much **molecular cloning** (§6.4).

**Eukaryotic chromatin (DNA + protein packaging):**

- **Histones** (H2A, H2B, H3, H4 — the core; H1 linker) are **positively charged** (lysine/arginine) and bind the negatively charged DNA.
- **Nucleosome** = ~147 bp of DNA wrapped ~1.65 turns around a **histone octamer** (two each of H2A, H2B, H3, H4). “Beads on a string.”
- **H1** binds linker DNA, helps coil nucleosomes into the **30-nm fiber**, which loops and folds into higher-order structures and ultimately the metaphase chromosome.
- **Levels of compaction:** DNA → nucleosome (beads-on-string, 11 nm) → 30-nm fiber → looped domains → condensed chromosome.

**Euchromatin vs. heterochromatin:**

- **Euchromatin:** loosely packed, **transcriptionally active/accessible**, gene-rich, lighter staining.
- **Heterochromatin:** densely packed, **transcriptionally silent**, generally gene-poor, dark staining.
  - **Constitutive heterochromatin:** permanently condensed (centromeres, telomeres; repetitive DNA).
  - **Facultative heterochromatin:** can switch between states depending on cell type/signals (e.g., the inactivated X chromosome = **Barr body**).

**Chromatin remodeling / epigenetics (commonly tested alongside):**

- **Histone modifications:** acetylation (HATs) generally **loosens** chromatin → activation; deacetylation (HDACs) **tightens** → repression. Methylation effects depend on residue (e.g., H3K4me = active; H3K9me, H3K27me = repressive).
- **DNA methylation** (at CpG islands, adding methyl to cytosine) usually **represses** transcription; heritable epigenetic mark.
- These don’t change the DNA sequence but change expression — the epigenetic layer.

**Chromosome structure features:** **centromere** (spindle attachment, often heterochromatic), **telomeres** (protective ends), **origins of replication.**

## 4.5 DNA damage and repair (rules-specific subtopic)

**Sources/types of damage:**

- **Spontaneous:** depurination (loss of a base), deamination (e.g., cytosine → uracil), replication errors.
- **Chemical/alkylating agents**, oxidative damage (ROS → 8-oxo-guanine).
- **UV light:** forms **pyrimidine (thymine) dimers** — covalent links between adjacent pyrimidines that distort the helix.
- **Ionizing radiation / X-rays:** **double-strand breaks (DSBs)**, the most dangerous.

**Repair pathways (match the damage to the mechanism — classic test format):**

- **Direct reversal:** e.g., **photoreactivation** (photolyase splits thymine dimers using light energy; not in placental mammals); **MGMT** removes alkyl groups.
- **Base excision repair (BER):** fixes single damaged/incorrect **bases**. **DNA glycosylase** removes the base → AP (apurinic/apyrimidinic) site → AP endonuclease nicks → polymerase fills → ligase seals.
- **Nucleotide excision repair (NER):** removes **bulky, helix-distorting lesions** (thymine dimers, chemical adducts). Excises a short oligonucleotide *patch* (~24–32 nt), then resynthesizes. Defect → **xeroderma pigmentosum** (extreme UV/skin-cancer sensitivity) — a frequently cited example.
- **Mismatch repair (MMR):** corrects replication mismatches and small indels missed by proofreading; must distinguish new from template strand (bacteria use methylation state — **Dam methylation**; the unmethylated new strand is corrected). Defect → **hereditary nonpolyposis colorectal cancer (HNPCC/Lynch syndrome)**, microsatellite instability.
- **Double-strand break repair:**
  - **Non-homologous end joining (NHEJ):** directly ligates broken ends; **fast but error-prone** (can lose nucleotides); active throughout the cell cycle. (Same machinery exploited in V(D)J recombination, §2.7.)
  - **Homologous recombination (HR):** uses the **sister chromatid** as an undamaged template → **accurate**; restricted to S/G2. Key proteins: RAD51, BRCA1/BRCA2 (BRCA mutations → breast/ovarian cancer from failed HR).

**Big-picture link:** failure of repair → mutations accumulate → cancer and aging. Many repair-gene defects are classic disease examples — know XP (NER), Lynch (MMR), BRCA (HR).

## 4.6 DNA mutations: identify, explain, classify; impact on protein (rules-specific)

**Classify at the DNA level:**

**Classify at the DNA level (the rules’ exact list: chromosomal rearrangements, insertions, deletions, substitutions):**

**Chromosomal rearrangements (large-scale, the rules list these first):** deletions, duplications, inversions, and translocations of chromosome segments (full detail in §2.5). At the DNA level these move, lose, duplicate, or reorient large blocks of sequence — distinct from the single-base changes below. **Copy-number variants (CNVs)** and **repeat expansions** (trinucleotide, e.g., CAG in Huntington’s) also belong here.

**Point mutations (single base):**

- **Substitution** — one base swapped.
  - **Transition:** purine↔purine or pyrimidine↔pyrimidine (A↔G, C↔T). More common.
  - **Transversion:** purine↔pyrimidine.
- **Insertion / Deletion (indels)** — addition or loss of nucleotides.

**Larger-scale (cross-reference):** the chromosomal rearrangements listed above and in §2.5 — deletions, duplications, inversions, translocations, CNVs, repeat expansions.

**Classify by effect on the protein/reading frame (the rules call out frameshift, silent, missense, nonsense):**

- **Silent (synonymous):** codon changes but encodes the **same amino acid** (due to the degeneracy of the genetic code, usually at the third “wobble” position). No protein change.
- **Missense (non-synonymous):** codon now encodes a **different amino acid.**
  - **Conservative** missense: new amino acid is chemically similar (often tolerated).
  - **Non-conservative:** chemically different (often damaging). Example: sickle-cell = **Glu→Val** (GAG→GTG) at codon 6 of β-globin — a single transversion with major consequences.
- **Nonsense:** codon becomes a **premature stop codon** → truncated, usually nonfunctional protein.
- **Frameshift:** an insertion/deletion **not a multiple of 3** shifts the **reading frame** downstream → completely altered amino acid sequence and usually a premature stop. (Indels in multiples of 3 are **in-frame** insertions/deletions — add/remove whole amino acids without frameshift.)
- **Splice-site mutations:** disrupt intron/exon boundaries → aberrant splicing, intron retention or exon skipping.

**By location/functional consequence:**

- **Regulatory mutations** (in promoters/enhancers) — alter *amount/timing* of expression, not protein sequence.
- **Loss-of-function** (often recessive) vs. **gain-of-function** (often dominant).
- **Germline** (heritable, in gametes) vs. **somatic** (in body cells, not inherited; basis of most cancers).

**Causes:** spontaneous (replication errors, tautomeric shifts, depurination/deamination) vs. induced by **mutagens** (UV, ionizing radiation, base analogs like 5-bromouracil, intercalating agents like ethidium bromide/acridine that cause indels, alkylating agents). **Ames test** screens chemicals for mutagenicity using *Salmonella* reversion.

**Predicting protein impact from a sequence change (the exact skill tested):** given a DNA/mRNA sequence and a mutation, transcribe/translate using the codon table, compare wild-type vs. mutant protein, and classify (silent/missense/nonsense/frameshift) plus predict functional consequence. Always track the **reading frame from the start codon** and watch for new stop codons. Remember mRNA uses U for T, and you read **codons 5′→3′ on the mRNA.**

# 5. PROKARYOTIC GENE EXPRESSION AND REGULATION

## 5.1 Central Dogma & reverse transcription (rules-specific)

**Central Dogma:** information flows **DNA → RNA → Protein.**

- **Replication:** DNA → DNA.
- **Transcription:** DNA → RNA (RNA polymerase).
- **Translation:** RNA → protein (ribosome).

**The arrow that matters most for “gotcha” questions — what the dogma forbids:** information does **not** flow from protein back to nucleic acid. But several real exceptions/additions exist:

- **Reverse transcription:** RNA → DNA, by **reverse transcriptase** (an RNA-dependent DNA polymerase). Used by **retroviruses (e.g., HIV)** to make cDNA from their RNA genome for integration; also by telomerase and retrotransposons. Exploited in the lab for **RT-PCR / cDNA synthesis** (§6).
- **RNA replication:** RNA → RNA (RNA-dependent RNA polymerase in some RNA viruses).

So the modern view: DNA↔RNA both directions possible; RNA→protein yes; protein→nucleic acid never.

**Prokaryote vs. eukaryote contrasts relevant here (the event is *prokaryotic* gene expression, but contrasts get tested):**

- Prokaryotes: transcription and translation are **coupled** (occur simultaneously, same compartment — no nucleus); mRNA is often **polycistronic** (one mRNA, several genes = an operon); no 5′ cap/poly-A tail/splicing of typical mRNAs.
- Eukaryotes: transcription in nucleus, translation in cytoplasm (separated); mRNA processed (5′ **7-methylguanosine cap**, 3′ **poly-A tail**, **splicing** of introns); usually **monocistronic.**

## 5.2 Transcription: initiation, elongation, termination; RNA polymerase (rules-specific)

**RNA polymerase (bacterial):** the **core enzyme** (subunits 2α, β, β′, ω) + a **sigma (σ) factor** = **holoenzyme.** σ recognizes the promoter; once started, σ is released. RNA pol synthesizes **5′→3′**, reads the template strand **3′→5′**, needs **no primer**, and has **no proofreading** (so transcription is lower-fidelity than replication — acceptable because mRNA is transient).

**Mechanism of RNA polymerase (rules v.2 names this explicitly):** the enzyme catalyzes a **nucleotidyl transfer reaction** — the 3′-OH of the growing RNA attacks the α-phosphate of an incoming ribonucleoside **triphosphate (NTP)**, forming a phosphodiester bond and releasing **pyrophosphate (PPi)** (whose hydrolysis drives the reaction forward). It selects the NTP complementary to the template base. Unlike DNA pol, it needs no primer (can initiate de novo) and lacks 3′→5′ proofreading exonuclease. It is **processive** (stays bound through thousands of nucleotides) and maintains a ~17-bp **transcription bubble** with an ~8–9 bp RNA–DNA hybrid inside, re-annealing the DNA behind it. A single core enzyme + interchangeable σ factors lets bacteria switch which gene sets are transcribed (e.g., heat-shock σ).

**Strand vocabulary (commonly confused):** the **template (antisense) strand** is read by RNA pol; the **coding (sense) strand** has the **same sequence as the mRNA** (with T for U). mRNA is complementary to the template and identical to the coding strand.

**Promoter (bacterial):** upstream DNA where polymerase binds. Key elements: the **−10 box (Pribnow box, TATAAT consensus)** and the **−35 box (TTGACA consensus)**, numbered relative to the **+1 transcription start site.**

**Stages:**

1. **Initiation:** σ-holoenzyme binds the promoter (closed complex), unwinds DNA (open complex, “transcription bubble”), begins synthesizing RNA; σ released after a short RNA is made.
1. **Elongation:** core enzyme moves along template, adding ribonucleotides 5′→3′; the transcription bubble travels with it; RNA peels off as DNA re-anneals behind.
1. **Termination (two bacterial mechanisms):**
- **Rho-independent (intrinsic):** a **GC-rich hairpin** followed by a **poly-U** stretch in the RNA destabilizes the polymerase → release.
- **Rho-dependent:** **Rho protein** (a helicase) binds the RNA, translocates to the polymerase, and dislodges it.

**RNA types:** **mRNA** (template for protein), **tRNA** (adaptor, carries amino acids), **rRNA** (ribosome structure/catalysis), plus regulatory **small RNAs.**

## 5.3 Cis- and trans-regulatory elements (rules-specific: promoters, enhancers, silencers, riboswitches, transcription factors)

**Cis-regulatory elements** = DNA sequences on the **same molecule** as the gene they regulate (they act “in cis”): promoters, operators, enhancers, silencers. They are *binding sites.*

**Trans-acting factors** = **diffusible molecules** (usually proteins, sometimes RNAs) that bind the cis-elements; encoded elsewhere and act “in trans”: transcription factors, activators, repressors, sigma factors.

- **Promoter:** where RNA pol/holoenzyme binds to start transcription (cis).
- **Operator:** a cis sequence (in/near the promoter in prokaryotes) where a **repressor** binds to block transcription.
- **Enhancer:** a cis element that **increases** transcription; can act at a distance and in either orientation (more prominent in eukaryotes; binds activators).
- **Silencer:** a cis element that **decreases** transcription (binds repressors).
- **Transcription factors:** trans proteins that activate or repress by binding cis-elements; **activators** recruit/stabilize polymerase, **repressors** block it.
- **Riboswitch:** a regulatory segment of an **mRNA** itself (cis, in the 5′ UTR) that **binds a small-molecule metabolite directly** (no protein needed) and changes conformation to control transcription termination or translation initiation. Example: many bacterial biosynthetic operons sense their end-product metabolite via a riboswitch.

**The two operon paradigms (the rules explicitly name lac and trp — know both cold):**

### The lac operon (inducible catabolic operon — turned ON when lactose present)

- Genes: **lacZ (β-galactosidase), lacY (permease), lacA (transacetylase)** — one polycistronic mRNA.
- **lacI** (separate, constitutive) encodes the **Lac repressor.**
- **Negative control:** repressor binds the **operator** and blocks transcription **when lactose is absent.** When lactose is present, **allolactose (the inducer)** binds the repressor → repressor changes shape, releases the operator → transcription proceeds. (Lactose itself, via allolactose, *induces* the operon.)
- **Positive control (catabolite repression):** the cell prefers glucose. When glucose is **low**, **cAMP** is high; **cAMP–CAP (CRP)** complex binds upstream of the promoter and **activates** transcription (recruits RNA pol). When glucose is high, cAMP is low, CAP is inactive → low transcription even with lactose.
- **Logic table (testable):**
  - Lactose −, Glucose + → OFF (repressor on operator; CAP off).
  - Lactose −, Glucose − → OFF (repressor on operator).
  - Lactose +, Glucose + → very LOW (repressor off, but CAP off → little activation).
  - Lactose +, Glucose − → **fully ON** (repressor off AND CAP on).
- **Mutant analysis** (often tested): *lacI⁻* (no functional repressor) → **constitutive** expression. *lacI^s* (super-repressor, can’t bind inducer) → permanently OFF. *O^c* (operator mutation) → repressor can’t bind → constitutive, and acts only **in cis** (only the operon on the same DNA). This cis/trans distinction in lac mutants is a hallmark Designer Genes question.

### The trp operon (repressible anabolic operon — turned OFF when tryptophan is plentiful)

- Genes for **tryptophan biosynthesis** (trpE, D, C, B, A).
- **Repressible:** the **trp repressor** is made **inactive** on its own; **tryptophan acts as a corepressor** — when Trp is abundant, Trp binds the repressor → activates it → binds operator → transcription OFF. When Trp is scarce, repressor inactive → transcription ON. (Makes sense: stop making Trp when you already have it.)
- **Attenuation (a second, finer layer):** a **leader sequence** with a short ORF containing **two adjacent Trp codons**. Because transcription and translation are coupled, the ribosome’s progress (which depends on Trp-charged tRNA availability) determines whether the nascent mRNA folds into a **terminator** or **antiterminator** hairpin.
  - High Trp → ribosome translates quickly through the Trp codons → terminator hairpin forms → transcription **stops early (attenuated).**
  - Low Trp → ribosome **stalls** at the Trp codons → antiterminator forms → transcription **continues** into the structural genes.

**Inducible vs. repressible (clean contrast):**

- **Inducible** (lac): normally OFF, turned ON by a signal (inducer). Typical of **catabolic** pathways.
- **Repressible** (trp): normally ON, turned OFF by a signal (corepressor). Typical of **anabolic/biosynthetic** pathways.
- Both can be under **negative** control (repressor) and/or **positive** control (activator). Don’t conflate inducible/repressible (about the default state) with positive/negative (about whether the regulator turns it up or down).

## 5.4 Translation: initiation, elongation, termination; ribosome, mRNA, tRNA; regulation (rules-specific)

**Players:**

- **Ribosome:** bacterial **70S = 30S (small, 16S rRNA + proteins) + 50S (large, 23S + 5S rRNA + proteins).** Eukaryotic **80S = 40S + 60S.** rRNA is the catalyst (peptidyl transferase is a **ribozyme** — 23S rRNA). Three tRNA sites: **A (aminoacyl), P (peptidyl), E (exit).**
- **mRNA:** read in **codons** (triplets), 5′→3′.
- **tRNA:** adaptor with an **anticodon** (pairs with codon) and a 3′ **amino-acid attachment** site (CCA). Charged by **aminoacyl-tRNA synthetases** (one per amino acid; the step that establishes the genetic code’s accuracy).

**The genetic code (be fluent):**

- **64 codons**, 61 sense + 3 stop. **Degenerate/redundant** (multiple codons per amino acid), **unambiguous** (each codon = one amino acid), nearly **universal**, read in non-overlapping triplets.
- **Start codon: AUG** (Methionine; **fMet — formylmethionine — in bacteria**).
- **Stop codons: UAA, UAG, UGA** (mnemonic: “U Are Annoying / U Are Gone / U Go Away”).
- **Wobble:** the third codon position pairs loosely, so one tRNA can read several codons — explains much of the degeneracy and why third-position mutations are often silent.

**Stages (bacterial):**

1. **Initiation:** small (30S) subunit binds mRNA at the **Shine–Dalgarno sequence** (ribosome-binding site upstream of AUG, base-pairs with 16S rRNA); initiator **fMet-tRNA** binds the start codon in the P site; large (50S) subunit joins. Initiation factors (IF1–3) assist.
1. **Elongation:** charged tRNA enters the **A site** (codon-anticodon match; elongation factor **EF-Tu** delivers it, GTP). **Peptidyl transferase (23S rRNA)** forms the peptide bond, transferring the growing chain to the A-site tRNA. **Translocation** (EF-G, GTP) shifts the ribosome one codon; tRNAs move A→P→E; deacylated tRNA exits the E site. Repeat.
1. **Termination:** a **stop codon** enters the A site; **release factors** recognize it (no tRNA does), peptidyl transferase hydrolyzes the bond, the polypeptide is released, and the ribosome dissociates.

**Polysomes:** multiple ribosomes translate one mRNA simultaneously.

**Regulation of translation (prokaryotic emphasis):**

- **Shine–Dalgarno accessibility:** mRNA secondary structure or **small regulatory RNAs (sRNAs)** can occlude the ribosome-binding site to block initiation.
- **Riboswitches** (in the 5′ UTR) can sequester the SD sequence in response to a metabolite (overlaps §5.3).
- **Attenuation** (trp) is technically transcription-level but coupled to translation.
- **(Eukaryotic, for contrast):** miRNAs, phosphorylation of initiation factors (eIF2), 5′cap/poly-A–dependent initiation.

**Post-translational:** folding (chaperones), cleavage, modifications (phosphorylation, glycosylation), targeting — leads into secretion (§5.5).

## 5.5 Protein secretion: Sec and Tat systems [State/Nat — explicit rules subtopic]

Bacteria must export many proteins across the inner (cytoplasmic) membrane. Two major pathways:

**Sec (General Secretory) pathway:**

- Transports proteins in an **UNFOLDED** state, threading them through the **SecYEG translocon** channel.
- Substrates carry an N-terminal **signal peptide** (hydrophobic) that is cleaved by **signal peptidase** after translocation.
- Powered by the motor ATPase **SecA** (and the proton-motive force).
- Can operate **co-translationally** (via the **signal recognition particle, SRP**, for membrane proteins) or **post-translationally** (chaperone **SecB** keeps the substrate unfolded and delivers it to SecA).
- The dominant, high-throughput route.

**Tat (Twin-Arginine Translocation) pathway:**

- Transports proteins that are **ALREADY FOLDED** (often because they bind cofactors that must be inserted in the cytoplasm, e.g., metal centers, FeS clusters).
- Recognizes a signal peptide with a distinctive **twin-arginine (S/T-R-R-x-F-L-K) motif** — the source of the name.
- Powered by the **proton-motive force** (not ATP).
- Lower throughput; the cell’s solution for exporting proteins that cannot be unfolded.

**The key contrast (the exact thing tested):** **Sec = unfolded substrate, ATP (SecA)-driven; Tat = folded substrate, PMF-driven, twin-arginine signal.** Both move proteins across the inner membrane; they differ in folding state of cargo, signal motif, and energy source.

# 6. TECHNOLOGY AND TECHNIQUES

## 6.1 Polymerase Chain Reaction (PCR) (rules-specific)

**Purpose:** amplify a specific DNA region exponentially in vitro. Answers questions like “is this sequence present?”, “how much of this template is there (qPCR)?”, genotyping, cloning prep, diagnostics.

**Components needed (be able to list and give each role):**

- **Template DNA** (contains the target).
- **Two primers** (short ssDNA, ~18–25 nt) — a **forward** and **reverse** primer flanking the target; define what gets amplified and provide the 3′-OH start.
- **Taq DNA polymerase** — a **thermostable** polymerase (from *Thermus aquaticus*) that survives the denaturation heat; extends primers.
- **dNTPs** (the four nucleotide building blocks).
- **Buffer with Mg²⁺** (cofactor for polymerase).

**The three steps per cycle and the role of temperature (rules explicitly ask about temperature):**

1. **Denaturation (~94–98 °C):** heat separates the double strand into single strands (breaks H-bonds).
1. **Annealing (~50–65 °C):** cool so primers base-pair to their complementary template sequences. **Annealing temperature is set by primer Tm** — too high → primers won’t bind; too low → nonspecific binding.
1. **Extension/Elongation (~72 °C):** Taq’s optimum; polymerase synthesizes new strands 5′→3′ from the primers.

**Amplification math (a guaranteed calculation):** each cycle ~doubles the target. After **n cycles**, copies ≈ **starting copies × 2ⁿ.** So 30 cycles from one molecule → ~2³⁰ ≈ 10⁹. (Strictly, the discrete, correct-length product accumulates as 2ⁿ − 2n after accounting for the first cycles, but the **2ⁿ** approximation is what’s tested.) Amplification is **exponential** early, then **plateaus** as reagents deplete.

**Variants to recognize:**

- **RT-PCR:** reverse-transcribe RNA → cDNA first, then PCR (to study/quantify RNA/expression).
- **qPCR / real-time PCR:** measures product **during** the reaction (fluorescent dyes like SYBR Green, or TaqMan probes); the **Ct (cycle threshold)** is inversely related to starting template amount → quantitative.
- **Gel electrophoresis** typically follows PCR to check product size (DNA is negative → migrates to **+** anode; smaller fragments move faster; sized against a **ladder**).

**Designing for an experiment — “what experimental questions could PCR address?” (the rules ask this in these exact words):** PCR answers **presence/absence** (“is this sequence/pathogen/allele in the sample?”), **quantity** (via qPCR — “how much target RNA/DNA is there?”), **identity/genotyping** (“which allele does this individual carry?” using allele-specific primers), and supplies **amplified material** for downstream sequencing or cloning. It does **not** by itself give sequence — that needs sequencing. Frame any PCR application as the yes/no or how-much question it resolves.

## 6.2 Sanger sequencing (rules: how it differs from standard PCR)

**Principle (chain-termination):** like PCR but includes **dideoxynucleotides (ddNTPs)** that **lack a 3′-OH**. When a ddNTP is incorporated, **no further nucleotide can be added → the chain terminates.** Random termination at every position produces a nested set of fragments of all lengths, each ending in a known (fluorescently labeled) base.

**How it differs from standard PCR (the exact comparison asked):**

|Feature      |Standard PCR           |Sanger sequencing                         |
|-------------|-----------------------|------------------------------------------|
|Primers      |Two (forward + reverse)|**One** primer (single-stranded extension)|
|Nucleotides  |dNTPs only             |dNTPs **+ ddNTPs** (chain terminators)    |
|Amplification|Exponential (2ⁿ)       |**Linear** (one primer → linear copies)   |
|Goal         |Make many copies       |**Determine the sequence**                |
|Readout      |Amount/size of product |Ordered fragments → base sequence         |

**Readout:** fragments separated by size via **capillary electrophoresis**; each ddNTP carries a distinct fluorescent dye; a detector reads the color order = the sequence (the **chromatogram/electropherogram**, one peak per base). Read length ~500–1000 bp; very accurate per-read (the “gold standard” for short, high-accuracy reads).

**What experimental questions Sanger addresses (rules vi.2 asks this explicitly):** “**What is the exact sequence** of this gene/PCR product?”, “**Does this sample carry a specific point mutation** or which allele?”, confirming a clone’s sequence, and small-scale variant detection. It is the right tool when you need a definitive, high-accuracy read of **one or a few short regions**. It is **not** efficient for whole genomes or many samples at once (low throughput) — that’s what next-gen sequencing is for.

## 6.3 Next-gen (Illumina) vs. third-gen (Nanopore) sequencing (rules: compare & contrast — how performed, data produced, questions addressed)

**Next-Generation Sequencing (NGS), Illumina platform — “sequencing by synthesis”:**

- **How performed:** DNA fragmented → adapters ligated → fragments bound to a flow cell and **clonally amplified into clusters (bridge amplification)** → sequenced by adding **reversible-terminator** fluorescent nucleotides one base at a time; a camera reads the color of each cluster each cycle; **massively parallel** (millions–billions of reads at once).
- **Data produced:** enormous numbers of **short reads** (~50–300 bp), **very high accuracy** (~Q30+, ~99.9%), high throughput, low cost per base. Reads are computationally **aligned/assembled** to a reference.
- **Strengths:** accuracy, throughput, cost — best for resequencing, SNP/variant calling, RNA-seq, exome/whole-genome at scale.
- **Weaknesses:** short reads struggle with **repetitive regions and structural variants**; requires amplification (can introduce GC bias); large/expensive instruments; can’t directly read modifications.

**Third-Generation Sequencing, Oxford Nanopore — “single-molecule, nanopore”:**

- **How performed:** a single DNA (or RNA) molecule is threaded through a **protein nanopore** in a membrane; as each base passes, it disrupts an **ionic current** in a characteristic way; the **current signal** is decoded into bases. **No amplification, no synthesis** — reads the native molecule directly, in **real time.**
- **Data produced:** **very long reads** (kilobases to megabases), real-time output, portable (e.g., MinION), can detect **base modifications (e.g., methylation)** directly and sequence RNA directly. Historically **higher per-read error rate** (improving rapidly).
- **Strengths:** long reads resolve **repeats, structural variants, and full-length transcripts/isoforms**; portable/field-deployable; rapid; epigenetic info.
- **Weaknesses:** lower raw per-base accuracy than Illumina (mitigated by depth/consensus); lower throughput per dollar for some applications.

**Compare-and-contrast summary (the test framing):**

|               |Illumina (NGS)                        |Nanopore (3rd-gen)                                  |
|---------------|--------------------------------------|----------------------------------------------------|
|Mechanism      |Sequencing by synthesis, optical      |Ionic current through a pore                        |
|Amplification  |Yes (clusters)                        |No (single molecule)                                |
|Read length    |Short (~50–300 bp)                    |Long (kb–Mb)                                        |
|Accuracy       |Very high                             |Lower per-read (consensus improves)                 |
|Throughput/cost|High throughput, low cost/base        |Lower throughput, portable                          |
|Best for       |Variant calling, RNA-seq, resequencing|Genome assembly, repeats, SVs, isoforms, methylation|

## 6.4 Molecular cloning (rules-specific: plasmids, restriction enzymes, PCR, Gibson, blue-white screen)

**Goal:** insert a **gene of interest** into a **vector** so it can be propagated and/or **expressed** in a host organism.

**Major steps (be able to describe in order):**

1. **Obtain the insert** — amplify the gene of interest by PCR (often adding restriction sites or overlaps to the primers), or excise it.
1. **Cut vector and insert** — **restriction enzymes** (see below) generate compatible ends, OR use overlap-based assembly.
1. **Ligate** insert into the vector — **DNA ligase** seals insert and vector into a recombinant plasmid.
1. **Transform** the recombinant plasmid into host cells (e.g., *E. coli*) — uptake of DNA (heat shock of competent cells, or electroporation).
1. **Select & screen** for cells that took up the correct construct (antibiotic resistance for selection; blue-white or colony PCR for screening).
1. **Express** the gene (induce with an appropriate promoter, e.g., **lac/T7 + IPTG**) and/or grow up the clone.

**Plasmids (cloning vectors) — features to know:**

- **Origin of replication (ori):** lets the plasmid replicate in the host.
- **Selectable marker:** usually an **antibiotic-resistance gene** (e.g., ampR) so only transformed cells survive on selective media.
- **Multiple cloning site (MCS) / polylinker:** a cluster of unique restriction sites for inserting DNA.
- **Promoter** for expression (inducible, e.g., **lac promoter — induced by IPTG**, an allolactose mimic that isn’t metabolized).
- A **reporter** (e.g., lacZ for blue-white).

**Restriction enzymes (restriction endonucleases):**

- Bacterial enzymes that cut DNA at specific **palindromic recognition sequences** (e.g., EcoRI at GAATTC).
- **Sticky ends** (staggered cut → single-stranded overhangs, e.g., EcoRI) anneal to complementary overhangs → easy directional ligation. **Blunt ends** (straight cut, e.g., SmaI) ligate in any orientation, less efficiently.
- Cutting vector and insert with the **same enzyme(s)** gives compatible ends.
- (Biological role: bacterial defense against phage; the host protects its own DNA by **methylation** at those sites.)

**Gibson Assembly:** a **scarless, sequence-independent** method to join multiple DNA fragments in one isothermal reaction (50 °C). Fragments are designed with **overlapping ends (~20–40 bp).** Three enzymes work together: a **5′ exonuclease** chews back 5′ ends to expose single-stranded overlaps that anneal; a **DNA polymerase** fills gaps; a **DNA ligase** seals nicks. Advantage over restriction cloning: no reliance on restriction sites, joins many fragments at once, leaves no scar.

**Blue-white screening (how it works — frequently tested):**

- The vector carries **lacZα** (encodes the α-fragment of **β-galactosidase**); the host supplies the rest (**α-complementation**).
- The **MCS sits inside lacZα.** Insert a gene → disrupts lacZα → **no functional β-gal.**
- Plate on **X-gal** (a colorless substrate cleaved by β-gal into a **blue** product) + inducer (IPTG).
- **Blue colonies = no insert** (intact lacZα → functional β-gal → cleaves X-gal → blue).
- **White colonies = insert present** (lacZα disrupted → no β-gal → no blue).
- So you **pick the WHITE colonies.** (Antibiotic selection first ensures cells have the plasmid; blue-white then distinguishes recombinant from empty vector.)

## 6.5 Knockouts / knockdowns / complementation (rules-specific: to determine gene function)

**Core idea:** to learn what a gene does, eliminate or reduce its function and observe the phenotype (loss-of-function analysis), then optionally restore it (complementation/rescue) to confirm the gene is responsible.

**Knockout (KO):**

- **Complete, permanent inactivation** of a gene at the **DNA level** (deleted or disrupted so no functional product).
- **Stable and heritable** (whole organism or cell line).
- Reveals the **null phenotype.** Risk: if the gene is essential, the knockout is **lethal** (no viable organism to study) — a key reason you might choose a knockdown instead.

**Knockdown (KD):**

- **Partial, often reversible reduction** of gene expression, usually at the **RNA level** (less mRNA/protein, not zero).
- Useful for **essential genes** (you can study a hypomorph that’s still viable), for **tunable/temporary** effects, and when you can’t easily delete the gene.
- Effects can be **incomplete and variable**, and **off-target** effects (especially RNAi) are a concern.

**Compare & contrast / why choose one (the exact rules ask):**

|               |Knockout                       |Knockdown                                 |
|---------------|-------------------------------|------------------------------------------|
|Level          |DNA (gene disrupted)           |RNA (expression reduced)                  |
|Extent         |Complete (null)                |Partial                                   |
|Permanence     |Permanent, heritable           |Often transient/reversible                |
|Essential genes|May be **lethal** → can’t study|**Viable** (residual function) → studyable|
|Specificity    |High                           |Off-target risk (esp. RNAi)               |

**Complementation (functional rescue):** reintroduce a **wild-type copy** of the gene into the knockout/knockdown. If the normal phenotype is **restored**, it confirms that the mutation in *that gene* caused the phenotype (controls for off-target/secondary mutations). This is the gold-standard control and ties back to the genetic complementation concept (§1.7), here used as an experimental confirmation.

**Techniques to generate knockdowns/knockouts [State/Nat — explicitly RNAi, homologous recombination, CRISPR, TALENs]:**

- **RNA interference (RNAi) → knockdown.** Double-stranded RNA is processed by **Dicer** into **siRNA**; the **RISC** complex (with Argonaute) uses the guide strand to find complementary **mRNA** and cleave/repress it. Reduces, doesn’t eliminate; transient; some off-target effects. (shRNA can give stable knockdown.)
- **Homologous recombination (gene targeting) → knockout.** A donor DNA with homology arms flanking a selectable marker replaces the endogenous gene by HR. Classic method for mouse knockouts (ES cells). Precise but **low efficiency/labor-intensive.**
- **CRISPR-Cas9 → knockout (or more).** A **guide RNA (gRNA)** directs **Cas9** nuclease to a matching genomic site (next to a **PAM** sequence) to make a **double-strand break.** Repair by error-prone **NHEJ** → indels → frameshift → **knockout**; or, with a donor template, **HDR** → precise edits/knock-ins. Efficient, programmable, cheap — revolutionized the field. (Variants: dCas9 for **CRISPRi** knockdown/activation, base editors, prime editors.)
- **TALENs (and ZFNs) → knockout.** Engineered **DNA-binding domains** (TALE repeats, each recognizing one base) fused to the **FokI nuclease**; a pair brings two FokI together to cut at a chosen site → DSB → NHEJ indels. More laborious to design than CRISPR (protein engineering per target vs. swapping a gRNA), but very specific.

**One-line discriminator for the editing tools:** ZFN/TALEN = **protein**-guided DNA targeting (re-engineer a protein per target); CRISPR = **RNA**-guided (re-program by swapping the guide RNA — why it scaled).

## 6.6 ChIP-seq, Hi-C, RNA-Seq [Nationals only — procedure, applications, limitations]

Included for completeness; *Nationals-only* per the rules, so optional for State but worth a skim.

**RNA-Seq (transcriptome sequencing):**

- **Procedure:** extract RNA → (often select mRNA via poly-A or deplete rRNA) → **reverse-transcribe to cDNA** → build a sequencing library → **NGS** → align reads to genome/transcriptome → count reads per gene.
- **Applications:** measure **gene expression levels** genome-wide, discover **novel transcripts/isoforms**, detect **alternative splicing**, fusion genes, and (single-cell RNA-seq) cell-type heterogeneity. Read **count ∝ expression.**
- **Limitations:** depends on library prep biases; expression is relative (needs normalization, e.g., TPM/FPKM); doesn’t directly give protein levels; isoform resolution limited by short reads.

**ChIP-seq (Chromatin Immunoprecipitation sequencing):**

- **Procedure:** **crosslink** proteins to DNA (formaldehyde) → **fragment** chromatin (sonication) → **immunoprecipitate** with an **antibody** against a specific protein (e.g., a transcription factor) or histone modification → reverse crosslinks, purify the bound DNA → **sequence** → map reads to find **binding sites/peaks.**
- **Applications:** locate **where a protein binds the genome** (TF binding sites, histone-modification distributions → active/repressed regions), study gene-regulatory networks and epigenetics.
- **Limitations:** **antibody quality** is critical (specificity, availability); needs many cells; identifies binding *location*, not *function*; crosslinking artifacts.

**Hi-C (chromosome conformation capture, genome-wide):**

- **Procedure:** **crosslink** chromatin → digest with a restriction enzyme → **fill in and biotin-label** ends → **ligate** spatially **proximal** fragments (captures which DNA regions are near each other in 3D) → pull down ligated junctions → **sequence** the chimeric fragments → build a **contact map.**
- **Applications:** reveal **3D genome organization** — chromatin loops, **TADs (topologically associating domains)**, A/B compartments, enhancer–promoter contacts; aids **genome assembly/scaffolding.**
- **Limitations:** resolution depends on sequencing depth and restriction-site density; population-average (bulk) data obscure single-cell variation; complex analysis.

**The unifying theme of all three (-seq family):** each couples a **biological enrichment/capture step** (poly-A selection, antibody pulldown, proximity ligation) to **high-throughput sequencing**, turning a molecular question (what’s expressed / where does a protein bind / what’s near what in 3D) into read-counting.

# 7. QUICK-REFERENCE FORMULA & RATIO SHEET

*Designed to be the densest part of the guide and the core of your one permitted double-sided 8.5×11 cheat sheet. Everything here is high-frequency on this event. The rules allow exactly one 8.5×11 double-sided sheet (any content, both sides, may be laminated; no affixed labels, no multiple sheets), so prioritize ruthlessly: put the formulas and ratios you’d otherwise blank on, not the prose you already know.*

## Crosses & probability

- **Monohybrid Aa × Aa:** genotype **1:2:1**, phenotype **3:1.**
- **Dihybrid AaBb × AaBb:** **9:3:3:1.**
- **Trihybrid AaBbCc selfed:** fully dominant phenotype **27/64**, fully recessive **1/64.**
- **n-gene heterozygous self-cross:** gametes/parent = **2ⁿ**; genotypes = **3ⁿ**; phenotypes = **2ⁿ**; fully recessive = **(1/4)ⁿ**; fully dominant = **(3/4)ⁿ.**
- **Test cross** (× aabb): monohybrid **1:1**, dihybrid **1:1:1:1.**
- **Product rule (AND):** multiply. **Sum rule (OR, mutually exclusive):** add.
- **Binomial:** P = **C(n,k) pᵏ q^(n−k)**, C(n,k) = n!/[k!(n−k)!].

## Modified dihybrid ratios (all sum to 16)

|Ratio             |Mechanism                                |
|------------------|-----------------------------------------|
|9:3:3:1           |Two genes, simple dominance              |
|9:3:4             |Recessive epistasis                      |
|12:3:1            |Dominant epistasis                       |
|9:7               |Duplicate recessive / complementary genes|
|15:1              |Duplicate dominant (redundant)           |
|9:6:1             |Duplicate genes, additive                |
|13:3              |Dominant suppression                     |
|2:1 (monohybrid)  |Recessive lethal allele                  |
|1:2:1 (monohybrid)|Incomplete dominance / codominance       |

## Pedigree quick rules

- **Recessive:** skips generations; unaffected × unaffected → affected possible.
- **Dominant:** every generation; affected child has affected parent.
- **X-linked recessive:** more affected **males**; **no father→son** transmission; affected female needs affected father.
- **X-linked dominant:** affected father → **all daughters, no sons** affected.
- **Autosomal:** sexes equal; **father→son transmission possible.**
- **Mitochondrial:** affected mother → all kids; affected father → none.
- Unaffected child of Aa × Aa is a carrier with probability **2/3.**

## Hardy–Weinberg

- **p + q = 1**; **p² + 2pq + q² = 1.**
- Recessive trait freq = **q²** → q = √(q²); carriers = **2pq.**
- Allele freq from counts: p = (2·hom + het)/(2·total).
- X-linked recessive: affected **males = q**, affected **females = q².**
- 3 alleles: (p+q+r)² ; ABO: O = r², A = p²+2pr, B = q²+2qr, AB = 2pq.
- **5 assumptions broken by:** Mutation, Migration, Drift (small N), Non-random mating, Selection.
- **χ² = Σ(O−E)²/E**; HWE df = 1 (3 genotypes); cross df = (classes − 1); critical (α=.05): df1 **3.84**, df2 5.99, df3 7.81.

## Selection / fitness

- **Relative fitness w** (best = 1); **selection coefficient s = 1 − w.**
- Directional / stabilizing / disruptive; balancing = heterozygote advantage (sickle-cell) or frequency-dependent.

## Heritability

- **V_P = V_G + V_E**; **V_G = V_A + V_D + V_I.**
- **Broad-sense H² = V_G/V_P.**
- **Narrow-sense h² = V_A/V_P** (predicts response to selection).
- **Breeder’s equation: R = h²S**; **realized h² = R/S**; S = (selected parents mean − pop mean), R = (offspring mean − pop mean).

## Estimating # of genes (polygenic)

- F2 phenotypic classes ≈ **2n + 1.**
- Fraction as extreme as a parent = **(1/4)ⁿ** → solve for n. (e.g., 1/256 → n=4.)

## Linkage / mapping

- **RF = recombinants/total × 100; 1% = 1 cM = 1 map unit; max RF = 50%** (= independent).
- 3-point: 2 biggest = parental, 2 smallest = double crossovers; middle gene = the allele that flips between parental and DCO.
- **CoC = observed DCO / expected DCO** (expected = RF₁×RF₂×total); **Interference I = 1 − CoC.**

## Homology terms

- **Orthologs:** different species, from **speciation**, same function.
- **Paralogs:** same genome, from **duplication**, often new function.

## Chargaff / DNA

- **%A = %T, %G = %C**; purines = pyrimidines = 50%.
- **A–T: 2 H-bonds; G–C: 3 H-bonds** (GC = higher melting temp).
- Synthesis always **5′→3′**; strands **antiparallel.**

## Replication fork players

- Helicase (unwind) · SSB (stabilize) · topoisomerase/gyrase (relieve supercoils) · primase (RNA primer) · DNA pol III (extend) · DNA pol I (remove/replace primer) · ligase (seal). Leading = continuous; lagging = Okazaki fragments.
- **Fidelity layers:** base selection → 3′→5′ proofreading exonuclease → mismatch repair.

## Repair pathway → damage

- **BER** → single damaged base (glycosylase). **NER** → bulky lesions / **thymine dimers** (defect = xeroderma pigmentosum). **MMR** → replication mismatches (defect = Lynch). **NHEJ** → DSB, error-prone. **HR** → DSB, accurate, uses sister chromatid (BRCA).

## Mutation types

- DNA: substitution (transition = same ring type; transversion = purine↔pyrimidine), insertion, deletion.
- Protein: **silent** (same aa) · **missense** (diff aa) · **nonsense** (premature stop) · **frameshift** (indel not ×3).

## Operons

- **lac (inducible, catabolic):** repressor off when **allolactose** present; CAP-cAMP **activates** when glucose **low**. Fully ON = lactose+ / glucose−.
- **trp (repressible, anabolic):** **tryptophan = corepressor** activates repressor → OFF when Trp high. Plus **attenuation** (ribosome stalling at Trp codons → antiterminator → ON when Trp low).
- **Inducible** = off by default (catabolic); **repressible** = on by default (anabolic). Separate axis: **positive** (activator) vs **negative** (repressor) control.

## Translation

- Codons read **5′→3′**; **start AUG (fMet in bacteria)**; **stops UAA, UAG, UGA.**
- Code is degenerate, unambiguous, ~universal; **wobble** at 3rd position.
- Sites **A → P → E**; peptidyl transferase = **23S rRNA ribozyme**; bacterial ribosome **70S (30S+50S)**; **Shine–Dalgarno** = ribosome binding site.

## Secretion (State/Nat)

- **Sec:** unfolded cargo, **SecA/ATP**-driven, SecYEG translocon.
- **Tat:** **folded** cargo, **twin-arginine** signal, **PMF**-driven.

## PCR & sequencing

- **PCR steps/temps:** denature **~95 °C** → anneal **~50–65 °C** (set by primer Tm) → extend **~72 °C** (Taq). Yield ≈ **2ⁿ.** Needs template, 2 primers, Taq, dNTPs, Mg²⁺ buffer.
- **Sanger:** adds **ddNTPs** (no 3′-OH → chain termination); **one primer; linear**; readout = capillary electrophoresis chromatogram.
- **Illumina:** sequencing-by-synthesis, amplified clusters, **short** reads, **high accuracy**, high throughput.
- **Nanopore:** single molecule, **ionic current**, **long** reads, portable, detects methylation, lower per-read accuracy.

## Cloning

- Plasmid features: **ori, selectable marker (antibiotic R), MCS, promoter.**
- Restriction enzymes cut **palindromes**; sticky vs blunt ends.
- **Gibson:** overlapping ends + exonuclease + polymerase + ligase; scarless, multi-fragment.
- **Blue-white:** insert disrupts **lacZα** → **white = insert**, blue = empty vector (X-gal substrate).

## Gene-function tools

- **Knockout** = DNA-level, complete, permanent (can be lethal). **Knockdown** = RNA-level, partial, reversible (good for essential genes). **Complementation/rescue** = reintroduce WT to confirm.
- **RNAi** (Dicer→siRNA→RISC) = knockdown. **HR gene targeting** = knockout. **CRISPR-Cas9** (gRNA + PAM → DSB → NHEJ indels = KO; +template HDR = knock-in). **TALENs/ZFNs** = protein-guided nuclease (FokI). CRISPR is RNA-guided (why it scaled).

## Nationals-only -seq family

- **RNA-Seq** = expression/isoforms (cDNA → NGS). **ChIP-seq** = protein–DNA binding sites (antibody pulldown). **Hi-C** = 3D genome contacts (proximity ligation → TADs/loops).

-----

*End of guide. Reminder from the analysis at the start: this document is the recall-and-method layer. The calculation-heavy sections (Punnett/probability, Hardy–Weinberg, chi-square, mapping, heritability, sequence→protein) must be drilled with real practice problems and past Science Olympiad tests until the procedures are automatic — that fluency, not memorization, is what the test rewards.*

# 8. APPENDIX: REFERENCE TABLES, CLASSIC EXPERIMENTS & WORKED EXAMPLES

*Added to close the gaps a topic-only guide leaves. These are the tools and demonstrations you actually need at the table — especially the codon table (you cannot do translation problems without it) and the amino-acid properties (needed to judge whether a missense mutation is conservative).*

## 8.1 The Genetic Code (mRNA codon table)

Read codons **5′→3′ on the mRNA.** First base = row group, second = column, third = within cell. **AUG = Met = Start.** **UAA, UAG, UGA = Stop.**

|1st ↓ / 2nd →|U                                             |C                        |A                                    |G                                               |
|-------------|----------------------------------------------|-------------------------|-------------------------------------|------------------------------------------------|
|**U**        |UUU/UUC = Phe (F); UUA/UUG = Leu (L)          |UCU/UCC/UCA/UCG = Ser (S)|UAU/UAC = Tyr (Y); UAA/UAG = **STOP**|UGU/UGC = Cys (C); UGA = **STOP**; UGG = Trp (W)|
|**C**        |CUU/CUC/CUA/CUG = Leu (L)                     |CCU/CCC/CCA/CCG = Pro (P)|CAU/CAC = His (H); CAA/CAG = Gln (Q) |CGU/CGC/CGA/CGG = Arg (R)                       |
|**A**        |AUU/AUC/AUA = Ile (I); AUG = **Met (M)/START**|ACU/ACC/ACA/ACG = Thr (T)|AAU/AAC = Asn (N); AAA/AAG = Lys (K) |AGU/AGC = Ser (S); AGA/AGG = Arg (R)            |
|**G**        |GUU/GUC/GUA/GUG = Val (V)                     |GCU/GCC/GCA/GCG = Ala (A)|GAU/GAC = Asp (D); GAA/GAG = Glu (E) |GGU/GGC/GGA/GGG = Gly (G)                       |

**Patterns that speed you up:** the third position is often irrelevant (wobble) — every codon block in the C column (Ser, Pro, Thr, Ala) and several others are fully degenerate (any 3rd base). **Leu, Ser, Arg each have 6 codons.** Met (AUG) and Trp (UGG) are the only amino acids with a single codon. Knowing “GA_ = acidic (Asp/Glu),” “AA_ = Lys/Asn or Gln/His,” and the three stops by the mnemonic (**U A**re **A**nnoying / **U A**re **G**one / **U G**o **A**way) covers most quick lookups.

## 8.2 Amino acid properties (for judging missense severity)

|Category                  |Amino acids                                                                    |Note                                                        |
|--------------------------|-------------------------------------------------------------------------------|------------------------------------------------------------|
|**Nonpolar / hydrophobic**|Gly (G), Ala (A), Val (V), Leu (L), Ile (I), Pro (P), Phe (F), Met (M), Trp (W)|Pro kinks the backbone (helix breaker); Gly is tiny/flexible|
|**Polar uncharged**       |Ser (S), Thr (T), Cys (C), Tyr (Y), Asn (N), Gln (Q)                           |Cys forms disulfide bonds (structure)                       |
|**Acidic (negative)**     |Asp (D), Glu (E)                                                               |Carboxyl side chains                                        |
|**Basic (positive)**      |Lys (K), Arg (R), His (H)                                                      |His near-neutral pKa (often catalytic)                      |

- **Conservative missense** = substitution **within** a category (e.g., Leu→Ile, Asp→Glu) → often tolerated.
- **Non-conservative missense** = substitution **across** categories (e.g., Glu→Val in sickle-cell: acidic→hydrophobic) → often damaging.
- **Special residues to flag in problems:** Pro (disrupts secondary structure), Gly (flexibility), Cys (disulfide bonds), and any charge reversal (likely disruptive).

## 8.3 Worked sequence → protein example (the exact tested skill)

**Given DNA coding (sense) strand:** 5′-ATG GAG CCT AAG TGA-3′

1. **mRNA** = same as coding strand with U for T: 5′-AUG GAG CCU AAG UGA-3′.
1. **Translate** (codon table): AUG=Met(start), GAG=Glu, CCU=Pro, AAG=Lys, UGA=Stop.
1. **Protein:** Met–Glu–Pro–Lys (stop).

**Now apply a mutation — substitution at codon 2, GAG→GTG (coding strand), i.e., mRNA GAG→GUG:**

- GUG = Val. Protein becomes Met–**Val**–Pro–Lys.
- Classification: **missense, non-conservative** (Glu acidic → Val hydrophobic). *This is literally the sickle-cell mutation pattern.*

**Frameshift example — delete the first G of codon 2:**

- New mRNA reading frame: AUG AGC CUA AGU GA… → Met–Ser–Leu–Ser–… entirely different downstream sequence, no stop where expected.
- Classification: **frameshift** (deletion of 1, not a multiple of 3).

**Nonsense example — mRNA codon 3 CCU→ UAA equivalent change (e.g., a base change creating a stop):**

- Premature stop → truncated protein Met–Glu (stop). Classification: **nonsense.**

**Silent example — codon 4 AAG→AAA:**

- AAA still = Lys. No change. Classification: **silent (synonymous).**

**Method checklist for any such problem:** (1) find the start codon and set the reading frame; (2) write the mRNA (U for T) if given DNA; (3) translate in triplets to the first stop; (4) apply the mutation and re-translate **from the mutation onward**; (5) classify; (6) if asked for impact, reason from amino-acid properties or loss of stop/frame.

## 8.4 Classic experiments (genetics tests love these)

**Discovering DNA as the genetic material:**

- **Griffith (1928) — transformation:** heat-killed virulent (S) + live avirulent (R) *Streptococcus* → live mice died; a “transforming principle” passed from dead to live bacteria.
- **Avery–MacLeod–McCarty (1944):** showed the transforming principle was **DNA** (destroying DNA abolished transformation; destroying protein/RNA did not).
- **Hershey–Chase (1952) — blender experiment:** radiolabeled phage (³²P in DNA, ³⁵S in protein) → only **³²P (DNA) entered bacteria** and directed new phage → DNA is the genetic material.

**Structure & replication:**

- **Chargaff (1950):** %A=%T, %G=%C (base-pairing rules).
- **Franklin & Wilkins — X-ray diffraction (Photo 51):** revealed the helical, regular structure.
- **Watson & Crick (1953):** the double-helix model.
- **Meselson–Stahl (1958) — “most beautiful experiment”:** grew *E. coli* in heavy ¹⁵N, shifted to light ¹⁴N, used **CsCl density-gradient centrifugation.** After one generation: a single **intermediate** (hybrid) band → rules out conservative. After two: **half hybrid, half light** → rules out dispersive. Confirms **semiconservative** replication.

**The code & expression:**

- **Beadle & Tatum (1941):** *Neurospora* mutants → **“one gene–one enzyme”** hypothesis (later refined to one gene–one polypeptide).
- **Nirenberg & Matthaei (1961):** poly-U mRNA → poly-Phe; cracked the first codon (UUU=Phe), began deciphering the code.

**Spontaneous vs. directed mutation:**

- **Luria–Delbrück fluctuation test (1943):** showed mutations (e.g., phage resistance) arise **randomly before** selection, not in response to it.

## 8.5 Lab techniques: separation, blotting, detection (gap-fill)

**Gel electrophoresis:**

- Separates nucleic acids (or proteins) by **size** through a gel matrix (agarose for DNA/RNA; polyacrylamide/SDS-PAGE for proteins and small fragments).
- DNA is **negatively charged** (phosphate backbone) → migrates toward the **positive electrode (anode).**
- **Smaller fragments migrate faster/farther.** Sized against a **DNA ladder/marker.**
- Visualized with intercalating dyes (ethidium bromide, SYBR). Used to check PCR products, restriction digests, etc.

**The three blots (classic “which detects what” question):**

|Blot        |Target detected|Probe/detector                                               |
|------------|---------------|-------------------------------------------------------------|
|**Southern**|**DNA**        |Labeled nucleic-acid probe (after gel + transfer to membrane)|
|**Northern**|**RNA**        |Labeled nucleic-acid probe                                   |
|**Western** |**Protein**    |**Antibody**                                                 |

- Mnemonic: **S**outhern = **D**NA (alphabetical-ish: the name came first, others named by analogy), **N**orthern = **R**NA (**N** for nucleic-RNA), **W**estern = protein (antibod**y**). Common trick: Southern blots DNA, Northern blots RNA — the only one not named after a direction, **Western (protein)**, uses an **antibody** not a nucleic-acid probe.

**Other detection/quantification you may meet:**

- **qPCR/RT-qPCR** (quantify DNA/RNA; Ct value inversely ∝ starting amount).
- **ELISA** (antibody-based protein detection/quantification).
- **Microarray** (hybridization-based expression profiling — older alternative to RNA-seq).
- **FISH (fluorescence in situ hybridization):** fluorescent probes locate specific sequences on chromosomes (detect translocations, copy number) — bridges to karyotype analysis (§2.6).
- **Karyotyping/G-banding** (§2.6); **DNA fingerprinting/STR profiling** (size variation at repeat loci).

## 8.6 A few high-yield odds and ends

- **Tautomeric shifts:** bases briefly adopt rare tautomeric forms (e.g., enol/imino) that mispair (e.g., G with T) → cause spontaneous transition mutations during replication.
- **Hardy–Weinberg sanity check:** if you compute carrier frequency higher than affected frequency, that’s expected for a rare recessive — don’t second-guess it.
- **Reading frames:** any DNA has **6 possible reading frames** (3 per strand); the real ORF starts at an AUG and runs to a stop.
- **Degeneracy is third-position-biased:** most silent mutations are at codon position 3 — a fast heuristic when classifying.
- **Linkage vs. independent test:** if a dihybrid testcross deviates from 1:1:1:1 (parental classes in excess), suspect linkage and compute RF.
- **“Which technique answers this question?” framing** is extremely common — keep a mental map: amplify→PCR; sequence one gene→Sanger; sequence many/whole genome→NGS; long reads/repeats→Nanopore; expression genome-wide→RNA-seq; protein–DNA binding→ChIP-seq; 3D contacts→Hi-C; detect specific DNA→Southern/PCR/FISH; detect protein→Western/ELISA; reduce gene function→knockdown(RNAi)/knockout(CRISPR/HR); confirm causation→complementation/rescue.

# 9. WORKED CALCULATIONS & GAP-FILL SUPPLEMENT

*Added after a clause-by-clause audit against the rules. Every rules subtopic is covered in §1–8; this section fills the remaining “I understand it but can’t yet *work* it” gaps — fully worked hard problems and a few adjacent topics. **Important caveat:** the rules state the topic list “should be considered exhaustive,” so topics flagged **[adjacent]** below (bacterial gene transfer, eukaryotic splicing) are technically **outside** the listed scope and therefore low-probability on the test. They’re included because (a) they’re commonly taught alongside this material and (b) they directly illuminate the in-scope contrasts (prokaryotic vs. eukaryotic expression; the Griffith experiment referenced in §8.4). Don’t spend scarce study time mastering them before you’ve drilled the in-scope calculation types.*

**A note on the overarching expectation:** the rules’ lead sentence says participants must use quantitative reasoning, **analyze and interpret experimental results, and draw evidence-based conclusions** for *every* topic — not just the obviously mathematical ones. So expect data-interpretation even on “conceptual” topics: reading a phylogeny to infer relationships, interpreting a gene-tree/species-tree conflict (§3.9), inferring a repair pathway from which lesion accumulates in a mutant, deducing operon genotype from an expression table (§9.4), or identifying inheritance mode from a pedigree or ratio. When a question gives you data, the graded answer is the *conclusion drawn from the data with stated reasoning*, not a memorized fact.

## 9.1 Fully worked THREE-POINT CROSS (the signature hard problem)

**Setup.** In corn, three recessive traits: **v** (virescent), **gl** (glossy), **va** (variable). A trihybrid female **+ + + / v gl va** is test-crossed to a triple recessive male **v gl va / v gl va**. 1000 offspring sorted into 8 phenotype classes:

|Class|Phenotype (alleles inherited from trihybrid parent)|Count  |
|-----|---------------------------------------------------|-------|
|1    |+ + +                                              |235    |
|2    |v gl va                                            |270    |
|3    |+ + va                                             |62     |
|4    |v gl +                                             |60     |
|5    |+ gl va                                            |40     |
|6    |v + +                                              |48     |
|7    |+ gl +                                             |4      |
|8    |v + va                                             |7      |
|     |**Total**                                          |**726**|

**Step 1 — Identify parental (non-crossover) classes = the two LARGEST.** Classes 1 (+ + +, 235) and 2 (v gl va, 270). So the parental arrangement is **+ + + / v gl va** (confirms the cis setup).

**Step 2 — Identify double-crossover (DCO) classes = the two SMALLEST.** Classes 7 (+ gl +, 4) and 8 (v + va, 7).

**Step 3 — Find the MIDDLE gene.** Compare a parental class (+ + +) to a DCO class (+ gl +). The allele that **flipped** is **gl** (went from + to gl while the other two stayed +). **The gene that flips between parental and DCO is in the middle → gl is the middle gene.** Gene order: **v – gl – va.**

**Step 4 — Compute recombination frequency for each interval.** Recombinants for an interval = single crossovers in that interval + double crossovers.

- **v–gl interval:** single crossovers between v and gl are the classes where v and gl alleles are recombined relative to parental but va tracks appropriately — classes 5 (+ gl va, 40) and 6 (v + +, 48). Add DCOs (4 + 7 = 11).
  RF(v–gl) = (40 + 48 + 11) / 726 = 99/726 = **13.6 cM.**
- **gl–va interval:** single crossovers are classes 3 (+ + va, 62) and 4 (v gl +, 60). Add DCOs (11).
  RF(gl–va) = (62 + 60 + 11) / 726 = 133/726 = **18.3 cM.**

**Step 5 — Map.** v —13.6— gl —18.3— va. (Outer v–va distance by summation = 31.9 cM; the directly observed v–va recombinant frequency would be lower because DCOs restore the parental outer combination — which is why three-point mapping with a middle marker is more accurate than two-point.)

**Step 6 — Interference.**

- Expected DCO frequency = RF(v–gl) × RF(gl–va) = 0.136 × 0.183 = 0.0249 → expected DCO count = 0.0249 × 726 ≈ **18.1.**
- Observed DCO = 4 + 7 = **11.**
- **Coefficient of coincidence (CoC) = observed/expected = 11/18.1 = 0.61.**
- **Interference I = 1 − CoC = 1 − 0.61 = 0.39.** Moderate positive interference (one crossover reduced the chance of a nearby second by ~39%).

**The reusable algorithm:** largest 2 = parental; smallest 2 = DCO; the flipped gene is middle; RF = (relevant singles + doubles)/total; CoC = obs DCO / (RF₁·RF₂·N); I = 1 − CoC. Always add the DCOs into *both* interval recombinant counts.

## 9.2 Fully worked CHI-SQUARE — two examples

**A) Testing a monohybrid cross (goodness-of-fit to 3:1).** Observed: 320 purple, 80 white (N = 400). Expected under 3:1: 300 purple, 100 white.

χ² = Σ(O−E)²/E = (320−300)²/300 + (80−100)²/100 = 400/300 + 400/100 = 1.33 + 4.00 = **5.33.**

- df = classes − 1 = 2 − 1 = **1.** Critical value (α=0.05) = 3.84.
- 5.33 > 3.84 → **reject** the 3:1 hypothesis (the deviation is statistically significant; something other than simple dominance may be acting).

**B) Testing Hardy–Weinberg.** A population of 1000: genotypes observed AA = 640, Aa = 320, aa = 40.

1. Allele freqs: p = (2·640 + 320)/2000 = 1600/2000 = 0.8; q = 0.2.
1. Expected counts: AA = p²N = 0.64·1000 = 640; Aa = 2pq·N = 0.32·1000 = 320; aa = q²N = 0.04·1000 = 40.
1. χ² = (640−640)²/640 + (320−320)²/320 + (40−40)²/40 = **0.**
1. df = genotypes − alleles − 1 = 3 − 1 − 1 = **1.** 0 < 3.84 → **fail to reject**; this population is in HWE (here, perfectly).
   *(On a real test the numbers won’t be exact; compute χ² and compare to 3.84. χ² > 3.84 → not in equilibrium → some force acting.)*

## 9.3 Worked ABO (multiple-allele) cross

Cross: type A heterozygous father (I^A i) × type B heterozygous mother (I^B i).

- Gametes: father I^A or i; mother I^B or i.
- Offspring (¼ each): I^A I^B = **AB**; I^A i = **A**; I^B i = **B**; i i = **O.**
- **Phenotype ratio 1 AB : 1 A : 1 B : 1 O.** Famous result: two parents can produce children of all four blood types. (Good for “could this child belong to these parents?” exclusion problems — paternity logic.)

## 9.4 lac operon PARTIAL DIPLOID (merodiploid / F′) problems — a Designer Genes staple

A partial diploid carries two copies of the lac region (one on the chromosome, one on an **F′ plasmid**), written **chromosome / F′**. You predict β-galactosidase (lacZ) and permease (lacY) production with and without inducer. Keys:

- **lacI is trans-acting** (makes a diffusible repressor) → a **lacI⁺** anywhere in the cell can repress **both** operons.
- **The operator (O^c) is cis-acting** → an operator mutation affects **only the operon physically next to it.**
- **lacI^s (super-repressor)** is trans and **dominant** — it represses all operons even with inducer (can’t bind inducer).

**Worked predictions** (− = no inducer, + = inducer present; “+” in cell = enzyme made):

|Genotype (chromosome / F′)|− inducer                     |+ inducer|Reason                                                                                          |
|--------------------------|------------------------------|---------|------------------------------------------------------------------------------------------------|
|I⁺ O⁺ Z⁺ / (none)         |no                            |yes      |Wild type: repressed off, induced on                                                            |
|I⁻ O⁺ Z⁺ / (none)         |**yes**                       |yes      |No repressor → **constitutive**                                                                 |
|I⁻ Z⁺ / I⁺ Z⁻             |no                            |yes      |I⁺ on F′ is trans → represses both; behaves wild type for Z (the I⁺ supplies repressor in trans)|
|I⁺ O^c Z⁺ / I⁺ O⁺ Z⁺      |partial (the O^c Z⁺ copy only)|yes      |O^c is cis → only the operon attached to it is constitutive; the other stays regulated          |
|I^s O⁺ Z⁺ / I⁺ O⁺ Z⁺      |no                            |**no**   |I^s super-repressor is dominant & trans → off even with inducer                                 |

**Method:** (1) Is there a functional repressor source anywhere (any I⁺ or I^s)? I^s dominates everything → always off. (2) For each operon, check its **cis** operator: O^c → that operon is constitutive regardless of repressor. (3) Otherwise the trans repressor controls it normally. Track Z and Y **per operon**, remembering a structural gene only “counts” if it’s Z⁺/Y⁺ on that same DNA molecule.

## 9.5 Immunoglobulin & T-cell receptor STRUCTURE (supports the V(D)J subtopic)

**Antibody (immunoglobulin) structure:**

- **Y-shaped**, made of **two identical heavy chains + two identical light chains**, linked by **disulfide bonds.**
- Each chain has a **variable (V) region** (antigen-binding, hypervariable) and a **constant (C) region** (effector function).
- **Fab regions** (two “arms”) = antigen-binding fragments (V + part of C); **Fc region** (the “stem”) = constant, determines isotype/effector function and is what V(D)J does NOT change but class switching DOES change.
- **Antigen-binding site** is formed by the **V regions of one heavy + one light chain** together (the combinatorial pairing that multiplies diversity).
- **Five isotypes/classes (by heavy-chain C region):** **IgM** (first made, pentamer, primary response), **IgG** (most abundant in serum, secondary response, crosses placenta), **IgA** (mucosal/secretions, dimer), **IgE** (allergy, parasites, mast cells), **IgD** (B-cell receptor, function less defined).

**T-cell receptor (TCR):** a heterodimer (usually **α and β chains**), each with a V and C region; assembled by the **same V(D)J machinery (RAG1/2)**; recognizes antigen **only as peptide presented on MHC** (unlike antibodies, which bind free antigen). β chain uses V-D-J (like Ig heavy); α chain uses V-J (like Ig light).

## 9.6 Bacterial gene transfer & mapping [adjacent — likely on tests]

Three ways bacteria acquire new DNA (horizontal gene transfer):

- **Transformation:** uptake of **free DNA** from the environment (Griffith’s phenomenon). Cells must be “competent.”
- **Transduction:** DNA transferred **by a bacteriophage** (virus). **Generalized** (any gene, packaged by mistake) vs. **specialized** (genes adjacent to the prophage integration site). Co-transduction frequency maps genes close together.
- **Conjugation:** direct transfer through a **pilus** between cells; requires the **F (fertility) plasmid.** **F⁺** (has plasmid) × **F⁻** transfers the plasmid. **Hfr** (High frequency recombination) strains have the **F factor integrated into the chromosome** → transfer chromosomal genes in a time-ordered fashion.
- **Interrupted mating** maps genes by **time:** the order and timing genes enter the recipient (measured in **minutes**) gives their chromosomal order — the bacterial analog of a genetic map (the *E. coli* map is ~100 minutes).

## 9.7 Eukaryotic RNA processing & splicing [adjacent — contrast with prokaryotes]

The rules emphasize *prokaryotic* expression, but the prokaryote-vs-eukaryote contrast is fair game.

- **5′ cap** (7-methylguanosine) added co-transcriptionally → stability, ribosome recognition.
- **3′ poly-A tail** added after cleavage → stability, export.
- **Splicing:** **introns** (non-coding) removed, **exons** (coding/expressed) joined, by the **spliceosome** (snRNPs: U1, U2, U4, U5, U6 — small nuclear ribonucleoproteins). Recognizes **5′ GU…AG 3′** splice sites and a branch-point A.
- **Alternative splicing:** one gene → multiple mRNAs/proteins by including different exon combinations (a major reason humans have more proteins than genes). Detectable by RNA-seq/long-read sequencing.
- **Eukaryotic RNA polymerases:** **Pol I** (rRNA), **Pol II** (mRNA — the one with the cap/tail/splicing), **Pol III** (tRNA, 5S rRNA). Pol II requires **general transcription factors** (e.g., TFIID binding the **TATA box**) to assemble the pre-initiation complex — contrast with bacterial sigma factor.

## 9.8 A few more numbers/facts worth having

- **Eukaryotic transcription factors** bind enhancers/silencers; **mediator** complex bridges them to Pol II. (Contrast: bacteria use sigma + simple activators/repressors.)
- **Genetic distance ceiling:** because RF maxes at 50%, genes far apart on one chromosome look unlinked in a two-point cross; you map them through intermediate markers (additive map distances).
- **Hardy–Weinberg with a lethal recessive:** q changes each generation as q² individuals are removed; Δq per generation = −sq²/(1−sq²)… but at State, the testable point is qualitative — selection against recessives is slow at low q because the allele hides in heterozygotes.
- **Number of bivalents at metaphase I** = n (haploid number); **number of chromosomes** still 2n until anaphase I.
- **Sanger product count** is linear (one primer), PCR is exponential (two primers) — already in §6 but a frequent contrast point.
- **PCR primer design rules:** ~18–25 nt, ~40–60% GC, similar Tm for both primers, 3′ end specificity, avoid self-complementarity (hairpins/dimers).

-----

*End of supplement. With §1–9, every rules subtopic is covered conceptually AND the hard calculation types (multi-gene crosses, three-point mapping, chi-square, Hardy–Weinberg, heritability, sequence→protein, partial-diploid operon logic) are demonstrated with worked arithmetic. This is now usable as a standalone information resource alongside practice questions. The one thing it still cannot give you is speed — that remains a function of doing timed problems.*

# 10. INVITATIONAL CROSS-CHECK SUPPLEMENT

*This section was built by cross-checking the study guide against seven 2026 invitational examinations (CARSO, CMU, Fairfax, Haslett, HUSO, NUSO, Yellow Jacket). Every item below appeared on at least one real test and was missing or thin in §1–9. Items are flagged by frequency: **[3 tests]**, **[2 tests]**, or **[1 test]**. One invitational (Lexington) was written at a level clearly beyond State scope — its unique gaps are noted at the end with an honest assessment.*

-----

## 10.1 Oogenesis and polar bodies [3 tests: Fairfax, Haslett, YJI]

Meiosis is **asymmetric in females** — the cell does not divide cytoplasm equally. This is the critical contrast with spermatogenesis that the guide did not explain.

**Oogenesis (egg formation):**

- **Primary oocyte** (2n, 4C after S phase) → begins meiosis I but **arrests in prophase I** (sometimes for decades in humans).
- At ovulation, meiosis I resumes. Division is **unequal**: a large **secondary oocyte** (gets most cytoplasm) + a tiny **first polar body** (discarded, barely viable).
- The secondary oocyte begins meiosis II but **arrests again in metaphase II** — it only completes meiosis II if fertilization occurs.
- Fertilization triggers completion of meiosis II → a large **egg (ovum)** + a tiny **second polar body.**
- The first polar body may or may not divide, giving up to **3 polar bodies total** (most degenerate).
- **Net result: 1 functional egg + 2–3 polar bodies** from one primary oocyte. All four meiotic products form, but only one survives as a functional gamete.

**Spermatogenesis contrast:** division is equal → **4 functional sperm** per primary spermatocyte.

**Why unequal?** The asymmetric spindle attachment lets the oocyte retain nearly all cytoplasm, yolk, and organelles — essential for embryo development. The polar bodies are a “garbage disposal” mechanism for the extra haploid nuclei.

**Tested fact:** a primary oocyte undergoes **meiosis I and part of meiosis II** before fertilization; the egg is actually a **secondary oocyte** at the moment of fertilization in most organisms.

-----

## 10.2 Cellular senescence vs. G0 vs. quiescence [1 test: CARSO; important concept]

The guide only mentions **G0** as “quiescent.” These three states are distinct:

|State             |Division?|Reversible?                         |Key features                                                                                                                                    |
|------------------|---------|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
|**G0 (quiescent)**|No       |Yes (can re-enter cell cycle)       |Metabolically active but not proliferating; e.g., neurons, liver cells awaiting signal                                                          |
|**Senescent**     |No       |**No** (permanent cell-cycle arrest)|Still metabolically active; secretes pro-inflammatory signals (**SASP** = senescence-associated secretory phenotype); does NOT undergo apoptosis|
|**Apoptotic**     |No       |No                                  |Programmed cell death; cell fragments into apoptotic bodies, cleared by phagocytes                                                              |

**Senescence is triggered by:** telomere shortening (after many divisions), oncogene activation, DNA damage. The arrested cell remains as a “zombie cell” — metabolically active, secretes cytokines, but cannot divide. **p53** and **p21** (CDK inhibitor) enforce the senescent state; **Rb** (retinoblastoma protein) blocks E2F transcription factors to prevent S-phase entry.

**Why it matters:** senescence is a tumor-suppression mechanism (prevents damaged cells from proliferating) but accumulated senescent cells contribute to aging and age-related disease. Cells that bypass senescence and continue dividing are a step toward cancer.

**Mnemonic:** Quiescent = sleeping (can wake); Senescent = retired (permanent); Apoptotic = dead.

-----

## 10.3 Bayesian / conditional probability for carrier risk [2 tests: NUSO, YJI]

The guide covers the basic “2/3 of unaffected offspring from Aa × Aa are carriers” logic but does not show the full Bayesian update when multiple unaffected offspring are observed.

**The framework — Bayes’ theorem applied to carrier risk:**

P(carrier | observations) = P(observations | carrier) × P(carrier) / P(observations)

**Classic problem structure:** A woman’s brother has an autosomal recessive condition (both parents obligate carriers Aa × Aa). The woman is unaffected — so she is either AA (prob 1/3) or Aa (prob 2/3) *before* any children. She marries an unaffected man from the general population. They have *k* unaffected children. What is the updated probability she is a carrier?

**Step-by-step:**

1. **Prior probabilities:** P(she is AA) = 1/3; P(she is Aa) = 2/3.
1. **Likelihood of k unaffected children given each hypothesis:** if she is AA, P(unaffected child) = 1 regardless of husband’s status. If she is Aa and husband is a carrier (prob 2pq ≈ 2q if q is small), each child has a 3/4 chance of being unaffected. Simplify by assuming husband is not a carrier (rare allele) → if she is Aa × non-carrier husband, P(each child unaffected) = 1 (no affected children possible without two carriers). *In the version where husband is also a known carrier (Aa × Aa):* P(each unaffected child | both parents Aa) = 3/4.
1. Apply Bayes and update.

**The specific 1/5 result (NUSO Q18 — woman’s parents are both Aa, she is unaffected, has 2 unaffected sons, husband is unrelated non-carrier):**

- Prior: P(carrier) = 2/3, P(AA) = 1/3.
- Husband is not a carrier → no affected children possible regardless of her genotype → the unaffected sons give NO information here (both genotypes predict unaffected sons equally). The answer stays 2/3 in that framing.
- *If husband is an obligate carrier:* P(unaffected son | she is Aa, husband Aa) = (3/4)² = 9/16 for 2 sons. P(unaffected son | she is AA) = 1.
  - Posterior ∝ prior × likelihood: carrier: (2/3)(9/16) = 18/48; AA: (1/3)(1) = 16/48.
  - P(carrier | 2 unaffected children, husband = carrier) = 18/(18+16) = 18/34 = **9/17 ≈ 0.53.** *(The 1/5 result arises in a specific multi-generation pedigree variant — the exact answer always depends on the problem setup.)*

**The universal method:** identify prior, compute likelihood of the observed data under each hypothesis, multiply, normalize. The key variable is whether the husband is a carrier (changes the likelihoods dramatically).

**Simpler case for practice:** Prior P(carrier) = 2/3. She has 1 unaffected child with a carrier husband. P(unaffected | Aa × Aa) = 3/4. P(unaffected | AA × Aa) = 1.

- Posterior ∝ (2/3)(3/4) : (1/3)(1) = 1/2 : 1/3 → normalize: (1/2)/(5/6) = **3/5 carrier; 2/5 AA.**

-----

## 10.4 AID mechanism detail [1 test: YJI; also strengthens §2.7]

The guide states that AID (activation-induced cytidine deaminase) drives class-switch recombination and somatic hypermutation but does not give its biochemical mechanism.

**AID’s enzymatic mechanism:** AID is a **cytidine deaminase** — it converts **cytosine (C) → uracil (U)** in single-stranded DNA, creating a C→U mismatch. This is the initiating lesion for both:

- **Somatic hypermutation** (in V regions, for affinity maturation): the U is either replicated over (C→T transition) or removed by UNG (uracil-DNA glycosylase) creating an abasic site, then repaired error-prone → introducing mutations throughout the V region.
- **Class-switch recombination** (in switch regions): the C→U lesion in the S region is processed into DNA double-strand breaks by UNG and APE1 (AP endonuclease); the breaks are joined by NHEJ to bring a new constant region adjacent to V(D)J.

**One-line mechanism:** AID deaminates C→U in ssDNA → downstream repair (error-prone or DSB) → diversity.

-----

## 10.5 Overlapping peaks in Sanger sequencing = heterozygosity [1 test: Fairfax]

The guide explains how a chromatogram works but does not state this specific interpretive rule:

**Overlapping peaks on a Sanger electropherogram indicate that the sequenced sample is heterozygous at that position.** Both alleles are present in the PCR product → at the heterozygous position, two different ddNTP terminations occur simultaneously → two overlapping fluorescent signals at the same position → the basecalling software may call an “N” or show a double peak.

**Application:** if you see a position with two clearly overlapping peaks (e.g., a red/green double peak), that patient is heterozygous for a SNP or mutation at that base. This is routinely used in clinical sequencing to detect heterozygous disease mutations.

-----

## 10.6 Calico cats and X-linked coat color [1 test: Haslett]

The guide covers X-inactivation (Barr bodies) and sex-influenced traits, but not the specific calico/tortoiseshell genetics.

**The genetics:** Coat color in cats is X-linked. The two alleles at the *O* locus are:

- **X^O** = orange/yellow (produces phaeomelanin)
- **X^+** = black/brown (produces eumelanin)

**Genotype → phenotype:**

- **X^O X^O** (homozygous female): **orange** cat
- **X^+ X^+** (homozygous female): **black** cat
- **X^O X^+** (heterozygous female): **calico/tortoiseshell** — patches of orange AND black because of **random X-inactivation.** In each cell, one X is inactivated; if X^O is active → orange fur; if X^+ is active → black fur. Clonal expansion of each cell produces a patch.
- **X^O Y** (male): orange
- **X^+ Y** (male): black
- **Calico males are extremely rare** and are almost always **47, XXY (Klinefelter)** — they need two X chromosomes with different alleles to produce the mixed phenotype.

**Key tested fact:** calico/tortoiseshell coat in cats is **direct visible evidence of X-inactivation.** A calico cat is almost always female (or XXY). If asked “can a calico cat be male?” — answer is essentially no under normal circumstances (XXY is rare and typically infertile).

-----

## 10.7 Extended telomere functions [1 test: Haslett]

The guide describes telomeres as buffers against shortening. Full tested list:

**All four functions of telomeres:**

1. **Buffer against replication-end loss:** each round of replication shortens the chromosome; telomeric repeats (TTAGGG) are expendable buffer, protecting coding sequence.
1. **Prevent end-to-end chromosome fusion:** without telomeres, the DNA repair machinery (NHEJ) would treat chromosome ends as double-strand breaks and fuse them together → dicentric chromosomes → breakage-fusion-bridge cycles.
1. **Prevent activation of DNA damage response (DDR):** the protective protein complex **shelterin** (includes TRF1, TRF2, POT1, etc.) caps the telomere, preventing ATM/ATR kinases from recognizing the end as a DSB. Loss of shelterin or critically short telomeres → DDR activation → senescence or apoptosis.
1. **Chromosome anchoring/nuclear organization:** telomeres associate with the nuclear lamina and help organize chromosome positioning.

**Telomerase:** reverse transcriptase (protein + RNA template, TERC) that extends telomeres in germ cells, stem cells, and most cancers. The RNA template carries the sequence 3′-AAUCCC-5′ which templates addition of TTAGGG repeats. **Most somatic cells lack telomerase** → progressive shortening → eventual senescence/apoptosis limit (Hayflick limit, ~50 divisions). Cancer cells reactivate telomerase (or use ALT — Alternative Lengthening of Telomeres) to achieve replicative immortality.

-----

## 10.8 crRNA and the CRISPR machinery [1 test: CARSO]

The guide covers CRISPR-Cas9 function but not all the RNA terminology.

**CRISPR RNA components:**

- **crRNA (CRISPR RNA):** the processed spacer RNA that contains the ~20 nt guide sequence complementary to the target DNA. Derived from the CRISPR array (spacer sequences in the bacterial genome).
- **tracrRNA (trans-activating crRNA):** a structural RNA that base-pairs with the crRNA repeat region and recruits Cas9.
- **sgRNA (single guide RNA):** an engineered fusion of crRNA + tracrRNA in one molecule — what is actually used in most CRISPR experiments (simpler to deliver).
- **PAM (protospacer adjacent motif):** a short sequence (NGG for SpCas9) immediately downstream of the target on the non-template strand. Cas9 requires it for binding and cleavage — provides self vs. non-self discrimination in bacteria.

**Cas9 mechanism detail:** Cas9 is a **nuclease with two cutting domains** — RuvC (cuts non-template strand) and HNH (cuts template strand) → blunt-ended DSB 3 bp upstream of PAM. The guide sequence in sgRNA directs Cas9 by complementarity. **dCas9** (dead Cas9, both domains inactivated) can be fused to activators/repressors for **CRISPRa/CRISPRi** without cutting.

-----

## 10.9 Initiation factors IF1, IF2, IF3 [1 test: NUSO]

The guide mentions “initiation factors (IF1–3) assist” without detailing each role.

**Individual roles:**

- **IF3:** binds the **30S subunit**, prevents premature 50S joining, and helps **proofread** the initiator tRNA–start codon interaction (ensures fMet-tRNA in P site, correct AUG recognition).
- **IF2 (a GTPase):** binds **fMet-tRNA** and escorts it to the P site of the 30S ribosome; GTP hydrolysis upon 50S joining releases IF2. *This is what NUSO tested:* IF2’s role = facilitate binding of the **initiator tRNA** to the ribosome.
- **IF1:** binds the **A site** of the 30S subunit, blocking other tRNAs from entering before the 50S joins; also stimulates IF2 and IF3.

-----

## 10.10 Haldane mapping function and Kosambi function [1 test: YJI]

The guide gives RF and cM conversions assuming RF ≈ map distance, which holds for short distances. For longer intervals, **mapping functions** correct for multiple crossovers that are invisible (double crossovers restore parental combination → you undercount crossovers).

**Haldane mapping function** (assumes no crossover interference — crossovers are Poisson distributed):

**r = ½(1 − e^(−2d))**

where r = recombination frequency (0 to 0.5), d = map distance in **Morgans** (divide cM by 100).

**Inverse (map distance from observed r):**

**d = −½ ln(1 − 2r)**

- At small distances: r ≈ d (the functions converge — 1 cM ≈ 1% recombination works fine under ~15 cM).
- At large distances: r approaches 0.5 (asymptote) while d can exceed 50 cM — the function accounts for this.
- Example: r = 0.30 (30%) → d = −½ ln(1 − 0.6) = −½ ln(0.4) = −½(−0.916) = **0.458 M = 45.8 cM.** Direct calculation would have given only 30 cM — Haldane adds the “hidden” crossovers.

**Kosambi mapping function** (accounts for positive interference — nearby crossovers inhibit each other):

**r = ½ · tanh(2d)**; inverse: **d = ¼ ln[(1+2r)/(1−2r)]**

- More biologically realistic for most organisms (which do show interference).
- Kosambi gives shorter map distances than Haldane for the same r.

**When to use each:** Haldane when asked to assume no interference; Kosambi when interference is mentioned. At State level, knowing the Haldane formula and being able to apply it is sufficient.

-----

## 10.11 Mutation-selection balance and heterozygote advantage equilibrium [1 test each: Lexso, YJI]

These are the quantitative formulas that let you calculate the *equilibrium frequency* of a deleterious allele when it is being held up by mutation or by heterozygote advantage.

**Mutation-selection balance** — at equilibrium, the rate mutations create the deleterious allele equals the rate selection removes it:

|Dominance of deleterious allele            |Equilibrium frequency of deleterious allele (q̂)|
|-------------------------------------------|-----------------------------------------------|
|**Dominant** (or partially dominant, h > 0)|**q̂ ≈ μ / (hs)**                               |
|**Completely recessive** (h = 0)           |**q̂ = √(μ / s)**                               |

where μ = mutation rate (per gene per generation), s = selection coefficient against the homozygote, h = dominance coefficient (h=0 recessive, h=0.5 additive, h=1 dominant).

- **Intuition:** recessive deleterious alleles hide in heterozygotes → selection is inefficient → they accumulate to higher frequency than dominant deleterious alleles. This is why √(μ/s) >> μ/s for the same μ and s.
- **Example:** s = 0.02, μ = 10⁻⁵, recessive. q̂ = √(10⁻⁵/0.02) = √(0.0005) ≈ 0.022 = 2.2%. Confirms that recessive disease alleles persist at measurable frequency even under selection.

**Heterozygote advantage (balancing selection) equilibrium** — when the heterozygote (A₁A₂) is fitter than both homozygotes, both alleles are maintained. Let:

- w₁₁ = 1 − s₁ (fitness of A₁A₁, s₁ = selection against it)
- w₁₂ = 1 (heterozygote, fittest)
- w₂₂ = 1 − s₂ (fitness of A₂A₂)

At equilibrium:

**q̂ (freq of A₂) = s₁ / (s₁ + s₂)**

**p̂ (freq of A₁) = s₂ / (s₁ + s₂)**

- If s₁ = s₂ → p̂ = q̂ = 0.5 (equal selection against both homozygotes → 50:50 equilibrium).
- **Sickle-cell example:** In a malarial environment, s₁ (against normal HbA/HbA = susceptible to malaria) and s₂ (against HbS/HbS = sickle-cell disease) are both substantial → both alleles maintained at intermediate frequency. If s₁ = 0.2 and s₂ = 0.8, q̂ = 0.2/(0.2+0.8) = 0.20 (20% HbS allele).

-----

## 10.12 Holliday junctions and homologous recombination detail [1 test: Lexso — high-level]

The guide covers HR as a DSB repair mechanism (§4.5) but not the molecular intermediates. These are more likely at Nationals/advanced invitationals, but appear on some State-level hard tests.

**Key intermediates in prokaryotic HR (RecBCD pathway, E. coli):**

1. **RecBCD** (helicase/nuclease complex) binds the DSB end, unwinds and degrades DNA until it encounters a **χ (chi) site** (8 bp sequence 5′-GCTGGTGG-3′ in E. coli).
1. At χ, RecBCD switches from degrading to generating a **3′ single-stranded tail**; **RecA** (the bacterial Rad51 equivalent) coats the ssDNA and catalyzes **strand invasion** into the homologous sequence.
1. **Holliday junction (HJ):** the four-way DNA intermediate formed when two homologous duplexes are joined by strand exchange. It is a cross-shaped structure where two strands have been exchanged.
1. **Branch migration:** the HJ moves along the DNA (catalyzed by **RuvAB** helicase), extending the region of heteroduplex.
1. **Resolution:** **RuvC** (an endonuclease) recognizes and cleaves the HJ at a specific consensus sequence in two orientations → either patch (non-crossover) or splice (crossover) products.

**Eukaryotic equivalent:** Rad51 (RecA homolog) for strand invasion; Mus81/Eme1 or GEN1 for resolution. The intermediate logic is the same — HJ forms, migrates, resolves.

**Why this matters for understanding HR vs. NHEJ:** HR *always* goes through a Holliday junction (or dissolution via SDSA — synthesis-dependent strand annealing). NHEJ does not; it simply ligates ends. The HJ is the reason HR requires a template and is accurate; NHEJ skips it and is error-prone.

-----

## 10.13 Replica plating [1 test: HUSO]

**Replica plating** is a technique to non-destructively test many colonies for a phenotype (e.g., antibiotic resistance) simultaneously.

**Procedure:**

1. Grow colonies on a **master plate** (permissive medium, no selection).
1. Press a **sterile velvet cloth** (or filter membrane) onto the master plate — the velvet picks up cells from each colony in their exact spatial configuration.
1. Press the velvet onto one or more **replica plates** (different selective media, e.g., + antibiotic, different nutrient, different temperature).
1. Colonies that grow on the replica plate are positive for that trait; their position maps back to the master plate to retrieve the colony.

**Applications:** identifying auxotrophic mutants (grow on complete but not minimal medium), antibiotic-sensitive mutants, testing many conditions at once. Historically important in the Lederberg experiment proving that mutations arise randomly (pre-exist before selection) — replating a plate that never saw phage still produced resistant colonies in the same positions as a plate exposed to phage.

-----

## 10.14 Polyploid gamete probability [1 test: YJI]

The guide mentions polyploidy but gives no method for calculating gamete genotype frequencies in polyploids. This is genuinely complex — a brief treatment:

**Autotetraploid (4n) gamete calculation:**

- A tetraploid individual has **4 copies** of each chromosome. A tetraploid with genotype **AAAA** produces only **AA** gametes. **AAAa** produces gametes: **AA, Aa** in 1:1 ratio (one A segregates with the a). **AAaa** → gametes **AA : Aa : aa** in ratio **1:4:1** (combinatorial from choosing 2 of 4 chromosomes; 1 way to pick 2A, 4 ways to pick 1A+1a, 1 way to pick 2a). **Aaaa** → **Aa : aa = 1:1.**
- The key formula for **AAaa → gametes**: C(2,2)/C(4,2) = 1/6 AA; C(2,1)·C(2,1)/C(4,2) = 4/6 Aa; C(2,2)/C(4,2) = 1/6 aa → **1:4:1.**

-----

## 10.15 Lexington Invitational — honest scope assessment

The Lexington (LEXSO) invitational produced a 54.6% projected score. I want to be transparent about why, and what it means for your preparation.

**What LEXSO tested that is genuinely beyond State scope:**

- Sigma factor subtypes (σ⁵⁴, σ³⁸, σ²⁸ functions)
- SeqA/hemimethylation-based replication timing control
- XerC/XerD dimer resolution at *dif* site
- Holliday junction mechanics (RuvABC) — *added in §10.12 above*
- Internal NTP channels of RNA polymerase
- WPGMA algorithm step-by-step matrix recalculation
- Golden Gate Assembly (Type IIS restriction enzymes)
- His-tag purification / imidazole elution
- TN-Seq (transposon sequencing)
- G-quadruplex structures and Hoogsteen base pairing (see §10.16 below)
- Specific σ factor subunit functions

**My assessment:** This test was written at a difficulty level roughly equivalent to an undergraduate molecular biology exam. Several topics (SeqA, XerCD, internal RNAP channels, WPGMA math) are not covered in any standard Science Olympiad study resource and are unlikely to appear at a typical State tournament. I am adding the **highest-yield of these** (Holliday junctions, G-quadruplexes, mutation-selection balance) because they appeared on other hard invitationals or are intellectually important. I am **not adding** the purely technical trivia (chromosome 1 length, “color body” etymology, Pol III processing rate of exactly 1000 nt/s) because those are memorization-without-understanding items unlikely to reappear.

**Bottom line:** If you face a LEXSO-style test at State, the guide will not be sufficient. But LEXSO appears to be an extreme outlier — the other six invitationals all scored ≥96%. No study guide can protect against an examiner who writes outside the rules.

-----

## 10.16 G-quadruplexes (G4 structures) [1 test: Lexso — 9 pts]

Given the high point value and the fact that G-quadruplexes are genuinely relevant to telomere biology (which is in-scope), this is worth covering.

**What is a G-quadruplex?** A non-B-DNA secondary structure formed by **G-rich sequences** — particularly in **telomeric DNA** (TTAGGG repeats) and gene promoters. Four guanines hydrogen-bond in a planar **G-quartet** (square arrangement); multiple G-quartets stack to form a **G-quadruplex (G4).**

**Bonding:** G-quartets are held by **Hoogsteen hydrogen bonds** (not the Watson-Crick base-pairing geometry). In Hoogsteen pairing, the Hoogsteen face of the purine (N7 and O6 of guanine) bonds to the donor/acceptor on the partner — this is distinct from the usual Watson-Crick face (N1, N2).

**Structure types:** G4s can form from one strand folded back on itself (intramolecular), or from multiple strands. Topology varies (parallel, antiparallel, mixed) depending on the direction of strand running. **Diagonal loops** connect G-runs that fold across the top or bottom of the G-quartet stack.

**Biological significance:**

- **Telomeres:** the 3′ G-rich overhang of telomeres can fold into G4 structures; **telomerase must unfold these** to extend the telomere. G4 stabilization (by small-molecule G4 ligands) = an anti-cancer strategy to block telomerase.
- **Promoters:** G4s in oncogene promoters (e.g., *MYC*, *VEGF*) regulate transcription; G4 ligands can repress these genes.
- **Replication blocks:** G4 structures must be resolved by helicases (e.g., FANCJ, BLM) during replication; failure → fragile sites and genomic instability.

**One-line summary:** G4 = G-rich DNA forms stacked G-quartet planes via Hoogsteen bonds; important at telomeres and promoters; relevant to cancer therapy and genome stability.

-----

# 11. PRACTICE-SET GAP SUPPLEMENT

This section addresses topics that appeared on practice question sets but were not covered by the guide as originally written. Coverage here is intentionally honest about confidence level — some of these are mainstream facts with high confidence; a few are genuinely ambiguous without the exact question wording and answer choices, and are flagged as such rather than force-fit to a guess.

## 11.1 Microarray probe design — oligonucleotide length [confidence: moderate, depends on answer choices]

DNA microarrays detect gene expression or genotype by hybridization of labeled sample DNA/RNA to a grid of immobilized **probe oligonucleotides**, each complementary to a known sequence.

**Two major probe-design conventions, both real and both testable:**

- **Short oligo arrays (Affymetrix-style):** probes are typically **~25 nucleotides** long. Short probes are cheap to synthesize in massive arrays (millions of features per chip) but any single 25-mer has weaker, less specific binding, so multiple probes per transcript are used and results are computationally combined.
- **Long oligo / spotted arrays:** probes are typically **50–70 nucleotides**, sometimes up to ~80–100 nt. Longer probes bind more specifically and tolerate single mismatches better, but fewer can fit per chip.

**Why this matters conceptually (likely the actual point of the question):** probe length is a tradeoff between **specificity** (longer = better discrimination of similar sequences, fewer false positives from cross-hybridization) and **density/cost** (shorter = more features per chip, cheaper synthesis). If the question asks “why are probes typically short” or “why are probes typically long,” the answer should be framed around this tradeoff rather than a bare number.

**Caveat:** if the question gave a specific number in the answer choices (e.g., “200 nucleotides,” “1000 base pairs”), those are too long for standard oligo probes and would be a distractor — the correct choice is almost certainly in the 25–70 nt range. Without seeing the actual choices, pick the option closest to 25 nt (Affymetrix convention) as the more commonly tested default, but verify against your specific answer key.

## 11.2 BPG and hemoglobin allostery [confidence: high on the biochemistry; low on relevance to this test]

**2,3-bisphosphoglycerate (2,3-BPG or BPG)** is a small molecule produced in red blood cells (as a side-product of glycolysis) that regulates hemoglobin’s oxygen affinity.

**Mechanism:** BPG binds in the **central cavity of deoxyhemoglobin**, between the two β-globin chains, where it forms electrostatic interactions with positively charged residues. This binding **stabilizes the T-state (tense, low-affinity)** conformation of hemoglobin, shifting the oxygen dissociation curve to the **right** — hemoglobin releases O₂ more readily at a given partial pressure of oxygen. BPG binds deoxyhemoglobin much more tightly than oxyhemoglobin, so it preferentially accumulates in and stabilizes the deoxy form.

**Physiological relevance:** elevated BPG (e.g., at high altitude, or in chronic hypoxia) promotes O₂ unloading to tissues. Fetal hemoglobin (HbF) has lower BPG affinity than adult HbA, which is part of why HbF has higher O₂ affinity — useful for extracting oxygen across the placenta from maternal blood.

**Honest note on relevance:** this is standard biochemistry/physiology content, not a typical Designer Genes (genetics-focused) topic. If this question appeared on your set, it’s worth double-checking that it was actually part of *this* test and not misattributed from a different exam — the rest of this guide’s scope (Mendelian genetics, molecular biology of DNA, prokaryotic gene regulation, biotechnology) doesn’t naturally include hemoglobin allostery.

## 11.3 m6A (N6-methyladenosine) RNA modification — timing [confidence: moderate]

**m6A** is the most abundant internal chemical modification on eukaryotic mRNA — methylation at the N6 position of adenosine.

**When it’s added:** m6A is deposited **co-transcriptionally**, while the nascent transcript is still being synthesized by RNA Pol II and is often still associated with chromatin. The “writer” complex (core catalytic subunit **METTL3**, paired with **METTL14** and accessory proteins like WTAP) methylates adenosines, predominantly within a **DRACH consensus motif**, often enriched near stop codons and in 3′ UTRs.

**Downstream effects:** “reader” proteins (e.g., YTHDF1/2/3, YTHDC1/2) recognize m6A marks and influence mRNA splicing, nuclear export, stability/decay, and translation efficiency. “Eraser” enzymes (FTO, ALKBH5) can remove the mark, making it a reversible/dynamic modification — analogous in concept to histone marks but on RNA (“epitranscriptomics”).

**If the question asked specifically “before, during, or after transcription”** — the best-supported answer is **during (co-transcriptional)**, though some m6A deposition can also occur post-transcriptionally on already-exported mRNA. If the answer choices distinguish “co-transcriptional” from “post-splicing,” co-transcriptional is the more defensible primary answer, but this is an area of active research and the precise timing can vary by transcript.

## 11.4 Lipid nanoparticle (LNP) mRNA delivery — endosomal escape mechanism [confidence: high on mechanism, low on exact phrasing match]

LNPs are the delivery vehicle used for mRNA vaccines (e.g., COVID-19 mRNA vaccines) and other RNA therapeutics. A typical LNP contains four components: an **ionizable cationic lipid**, **cholesterol**, a **helper phospholipid**, and a **PEGylated lipid**.

**Mechanism of cellular entry and release:**

1. The LNP is taken up by the cell via **endocytosis**, ending up inside an **endosome**.
1. As the endosome matures, its interior becomes increasingly **acidic** (pH drops toward ~5–6).
1. The **ionizable lipid**, which is neutral at physiological pH, becomes **protonated (positively charged) in the acidic endosome**.
1. This charge change causes the ionizable lipid to interact with the negatively charged phospholipids of the endosomal membrane, promoting a structural transition that **destabilizes/disrupts the endosomal membrane**.
1. This membrane disruption allows the mRNA cargo to escape into the **cytoplasm**, where it can be translated by ribosomes — this step is called **endosomal escape**, and it is widely considered the major bottleneck/inefficiency point of LNP delivery (the majority of LNPs that enter cells never successfully release their cargo).

**If the question asks “what triggers release of the mRNA”** — the answer centers on **pH-dependent protonation of the ionizable lipid causing endosomal membrane disruption**. This is solid, current (as of 2025) consensus mechanism, but the field is active and some mechanistic details (e.g., exact lipid geometry changes) are still being refined in the literature.

## 11.5 Amphipathic molecules [confidence: high — this is a definitional question]

**Amphipathic** (also “amphiphilic”) describes a molecule that has **both a hydrophilic (polar/charged) region and a hydrophobic (nonpolar) region** within the same molecule.

**Classic examples:**

- **Phospholipids** — polar phosphate-containing head group + nonpolar fatty acid tails. This amphipathic property is *why* phospholipids spontaneously form bilayers in water (hydrophobic tails cluster away from water, polar heads face the aqueous environment on both sides).
- **Detergents/soaps** — same logic, enabling them to solubilize lipids.
- Many **membrane proteins** have amphipathic helices that sit at the membrane-water interface.

If the question’s answer choices include “a molecule with both polar and nonpolar regions” (or equivalent phrasing about hydrophilic/hydrophobic), that’s the correct choice. This is a vocabulary-recall question with essentially no ambiguity once you know the term.

## 11.6 Cas12a structure — REC1/REC2 domains [confidence: high on the structure, low on matching specific answer choices]

Cas12a (also called **Cpf1**) is a Class 2, Type V CRISPR effector — distinct from Cas9 (Type II) — used for genome editing, notably in **DETECTR**-style diagnostic platforms.

**Overall architecture:** Cas12a has a **bilobed structure**, consisting of:

- A **recognition (REC) lobe**, made of two α-helical domains, **REC1 and REC2**, which mediate binding of the crRNA-target DNA heteroduplex.
- A **nuclease (NUC) lobe**, containing the **RuvC** catalytic domain, the **PAM-interacting (PI)** domain, and the **Wedge (WED)** domain, connected to the REC lobe via a **bridge helix (BH)**.

**Functional roles of REC1/REC2:** together they form the channel that accommodates the crRNA:target-DNA duplex as it forms; REC2 in particular undergoes large conformational shifts upon DNA binding that help activate the nuclease.

**Key contrasts with Cas9 (likely the actual point of comparison questions):**

- Cas9 uses a **single RuvC + HNH** active site arrangement (two nuclease domains, blunt cuts); Cas12a uses a **single RuvC domain** to cleave both strands sequentially, producing **staggered (“sticky”) cuts** with 5′ overhangs.
- Cas12a requires a **shorter crRNA only** (no separate tracrRNA needed, unlike Cas9’s crRNA+tracrRNA or sgRNA), and recognizes a **T-rich PAM** (e.g., 5′-TTTV-3′) on the **5′ side** of the target, whereas Cas9 typically uses a G-rich PAM (e.g., 5′-NGG-3′) on the **3′ side**.
- Cas12a additionally has **collateral ssDNA-cleavage (“trans”) activity** once activated — the basis for DETECTR diagnostics — which Cas9 lacks.

Without the specific answer choices, I can confirm the REC1/REC2-as-part-of-the-REC-lobe fact with confidence, but can’t guarantee which framing (“which domains bind the crRNA-DNA duplex,” “which lobe is REC1 part of,” etc.) matches your question’s intent.

## 11.7 Pfu vs. Taq polymerase — fidelity [confidence: high]

Both are thermostable polymerases used in PCR, but they differ in a key enzymatic property:

- **Taq polymerase** (from *Thermus aquaticus*) **lacks 3′→5′ exonuclease (proofreading) activity**. It is fast and robust but has a relatively high error rate (~1 error per 10⁴–10⁵ nucleotides), and it adds non-templated 3′ A overhangs (useful for TA cloning, but a source of error).
- **Pfu polymerase** (from *Pyrococcus furiosus*) **has 3′→5′ proofreading exonuclease activity**, giving it roughly 10–100× higher fidelity than Taq. The tradeoff is that Pfu is **slower** (lower processivity/extension rate) and produces **blunt ends**.

**Bottom line for a “what is the advantage of Pfu over Taq” question:** the answer is **proofreading / higher fidelity (lower error rate)**, due to 3′→5′ exonuclease activity that Taq lacks. This directly parallels the DNA replication proofreading concept already covered in §4 of this guide — if you understand why Pol III’s proofreading matters for replication fidelity, this is the same logic applied to PCR enzymes.

## 11.8 Protein termini and folding — N-terminus vs. C-terminus [confidence: high on the general rule; the specific question needs its figure]

**General rules (high confidence, broadly applicable):**

- Translation proceeds such that the **first amino acid incorporated becomes the N-terminus** (it retains a free amino group), and synthesis proceeds toward the **C-terminus** (the last amino acid added has a free carboxyl group). This mirrors mRNA’s 5′→3′ reading direction: 5′ end of mRNA → N-terminus of protein; 3′ end of mRNA → C-terminus of protein.
- During **protein folding**, the polypeptide collapses such that **hydrophobic side chains cluster toward the interior** of the folded protein, away from the aqueous cytoplasm, while hydrophilic/charged side chains tend to remain on the surface, in contact with water. This is thermodynamically driven largely by the **hydrophobic effect** (an entropy-driven process — water molecules are “freed” from ordering around hydrophobic surfaces when those surfaces bury together).
- For questions about **C-terminal domains (CTD)** specifically: the CTD of RNA polymerase II (already covered in §4/§5 of this guide under transcription) is a well-known example of a functionally important C-terminal region — its repeated heptapeptide sequence gets phosphorylated to coordinate transcription/processing events.

**Why I can’t fully resolve Q127/Q130 without more information:** these questions appear to reference a **specific diagram or physical model** (e.g., a 3D protein model in a lab station, or a labeled figure showing two ends of a molecule and asking which is N vs. C). The *rule* for determining N- vs. C-terminus is the one above, but applying it requires seeing which end of the depicted molecule corresponds to the first vs. last residue added — that’s positional information only the figure can supply. If you can describe or share the figure/model, I can walk through the assignment.

## 11.9 Nail-Patella Syndrome [confidence: high]

Nail-Patella Syndrome (NPS) is a rare genetic disorder affecting nails, knees (patella), elbows, and pelvis (iliac horns), with kidney and eye involvement in some patients.

**Inheritance pattern:** NPS is an autosomal dominant disorder, caused by heterozygous loss-of-function mutations in the **LMX1B** gene (a LIM-homeodomain transcription factor important in limb dorsoventral patterning during development). The disease mechanism is **haploinsufficiency** — one functional copy of LMX1B is not enough for normal development, so a single mutated/deleted copy causes disease even though the other copy is normal.

**If the question asks about inheritance pattern:** the answer is **autosomal dominant**. If it asks about the underlying mechanism: **haploinsufficiency of LMX1B** (loss of one functional gene copy is sufficient to cause the phenotype, distinguishing it from typical recessive loss-of-function disorders where both copies must be lost).

## 11.10 Antisense/exon-skipping therapy and gene deletions [confidence: moderate — depends heavily on question framing]

This appears to reference therapies like **exon-skipping antisense oligonucleotides (ASOs)**, used clinically for conditions like **Duchenne muscular dystrophy (DMD)**.

**General principle:** some genetic deletions remove one or more exons in a way that **shifts the reading frame** (out-of-frame deletion), causing a severely truncated/nonfunctional protein. Exon-skipping ASOs work by causing the splicing machinery to **also skip an adjacent exon**, restoring the reading frame — producing a shorter but partially functional protein (this is the basis of drugs like eteplirsen for certain DMD mutations).

**Key limitation (likely the crux of the question):** this approach **only works for deletions that can be “frame-corrected” by skipping additional exon(s)** — specifically, **out-of-frame deletions** where skipping a neighboring exon restores a multiple-of-three reading frame. It does **not** work for:

- Deletions that are already **in-frame** (no correction needed, or skipping would disrupt rather than help)
- Deletions removing exons that are **essential** and cannot be skipped without destroying critical protein domains
- **Point mutations** that don’t involve exon boundaries (different therapeutic approach needed)

**If the question asks “for which type of deletion would this suppression/exon-skipping therapy be effective”** — the answer should center on **out-of-frame deletions where an adjacent exon can be skipped to restore the reading frame**, producing a truncated-but-functional (rather than nonfunctional) protein. Without the exact answer choices, I can’t map this to a specific letter, but this is the underlying logic to apply.

## 11.11 Frequency of structural genes in the genome [confidence: low — needs the question’s specific framing]

“Structural genes” generally refers to genes that **encode proteins or functional RNAs** (as opposed to regulatory sequences, introns, or other non-coding DNA).

**What’s reasonably well-established:** in the **human genome**, protein-coding sequence makes up only a small fraction of total DNA — commonly cited figures are that **protein-coding exons represent roughly 1–2% of the genome**, with the rest being introns, regulatory elements, repetitive sequences, and DNA of largely unclear function. The **number of protein-coding genes in humans** is commonly cited as roughly **20,000** (a figure that has been revised downward over the decades as gene-finding methods improved).

**In bacteria**, by contrast, the genome is far more “gene-dense” — protein-coding sequence accounts for the large majority (often **85–90%+**) of the genome, with minimal intergenic/non-coding DNA.

**Why I’m flagging low confidence:** “frequency of structural genes” could mean (a) the percentage of genome that is coding, (b) the absolute number of structural genes, (c) a ratio relative to regulatory genes, or (d) something organism-specific from a context I don’t have. If you can share the answer choices, I can match the framing precisely — the figures above (≈1–2% coding in humans vs. ≈85–90%+ in bacteria) are the most likely relevant facts either way.

## 11.12 Cas9 — endonuclease vs. exonuclease [confidence: high]

Cas9 is unambiguously an **endonuclease**, not an exonuclease.

**Why:** Cas9 makes a **double-strand break within (internal to) a DNA molecule**, at a site determined by the guide RNA and PAM sequence — this is the defining property of an endonuclease (cuts *within* a strand, as opposed to an exonuclease, which chews nucleotides off the *end* of a strand). Mechanistically, Cas9 uses two nuclease domains — **RuvC** (cuts the non-target strand) and **HNH** (cuts the target strand) — each making a single cut, together producing a blunt double-strand break ~3 bp upstream of the PAM.

**If the question asks “is Cas9 an endonuclease or exonuclease” or “compare Cas9’s endonuclease vs. exonuclease activity”** — Cas9 **has endonuclease activity and does not have exonuclease activity**. If the answer choices frame this as a comparison of “efficiency” between the two activities, the most defensible answer is that the comparison itself is a false premise — Cas9 doesn’t perform exonuclease cleavage at all, so there’s no exonuclease efficiency to compare. (If your answer choices nonetheless require picking between “endonuclease is more efficient” vs. “exonuclease is more efficient,” pick the endonuclease option, but flag this question to your coach — it may be poorly written.)

## 11.13 Trisomy X (47,XXX) and dosage compensation [confidence: moderate]

**Trisomy X** is a sex chromosome aneuploidy (47,XXX) where an individual has three X chromosomes instead of the typical two.

**Dosage compensation mechanism:** as in typical females (46,XX), **X-inactivation (forming a Barr body)** occurs to equalize gene dosage between sexes. In 47,XXX individuals, **two of the three X chromosomes are inactivated**, leaving one active X — the same end state as a typical 46,XX cell (one active X). This is why trisomy X often produces a **mild or even subclinical phenotype** — tall stature and sometimes mild learning differences are reported, but many individuals are never diagnosed.

**Connection to histones:** X-inactivation is mediated by the **XIST** non-coding RNA (already covered elsewhere in this guide regarding Barr bodies), which coats the inactive X and recruits **histone-modifying complexes** — the inactive X(s) acquire heterochromatin-associated histone marks (e.g., H3K27 trimethylation via Polycomb repressive complex 2, and loss of active marks like H3K4 methylation/acetylation) and become transcriptionally silent, condensed Barr bodies.

**If the question asks about “histone expression” in trisomy X specifically:** the most defensible framing is that the **two extra/inactivated X chromosomes acquire repressive histone modifications** (heterochromatin marks) as part of X-inactivation, similar to the single Barr body in normal females — dosage compensation via inactivation, not via altered histone gene expression elsewhere in the genome. If the answer choices ask about global histone gene expression levels (rather than chromatin marks on the inactive X), that’s a different and much less standard question that I can’t confidently match without seeing the options.

-----

**Overall honesty check on this section:** of the 17 originally-flagged items, about half (§11.2, 11.5, 11.7, 11.9, 11.12, and the general rules in 11.3–11.4, 11.6, 11.8) are mainstream facts I’m confident in. The rest (§11.1, 11.8’s specific figure, 11.10, 11.11, 11.13) depend on exact question wording or answer choices that weren’t provided — I’ve given the underlying concept and the most likely correct framing, but if your answer key disagrees, trust the answer key and treat this section as “concept review” rather than a guaranteed answer key.

-----

# 12. PRACTICE-SET GAP SUPPLEMENT, ROUND 2

A second batch of “not answerable from the guide” items, from both practice sets. As before: some of these are solid factual additions, some are genuinely underdetermined without the missing figure/table/answer-choices, and a few look like they may be testing something other than what the “unanswerable” label suggests. I’ll be explicit about which is which.

## 12.1 Number of origins of replication in a human cell (Set 1, Q22) [confidence: moderate]

The guide already notes (§4) that eukaryotes have **many origins of replication** per chromosome, unlike the single *oriC* in bacteria. The practice answer of **10⁵** is a commonly cited **order-of-magnitude estimate** for the total number of replication origins across the entire human genome in a single S phase.

**Why this number, roughly:** the human genome is about 3.2 × 10⁹ bp. Eukaryotic replicons (the stretch of DNA replicated from one origin) are typically on the order of tens to a few hundred kilobases. Dividing genome size by typical replicon size lands in the **10⁴–10⁵** range, which is why **~10⁵** (or sometimes “tens of thousands to ~100,000”) shows up as the standard textbook estimate. Some sources cite numbers as low as ~30,000–50,000 “active” origins per S phase (not all potential origins fire in every cell cycle), while licensed-but-dormant origins could push the total higher.

**Bottom line:** if the answer choices include 10⁵ alongside options like 10² or 10¹⁰, **10⁵ is the right order of magnitude** and is well-supported as a standard estimate. I flag “moderate” rather than “high” confidence only because the exact figure varies somewhat by source and by whether “origins” means licensed origins, active origins, or both — but for a multiple-choice order-of-magnitude question, 10⁵ is the conventional answer.

## 12.2 Carbocyclic dG analogs / PaPydG (Set 1, Q25) [confidence: low]

I want to be upfront: **“PaPydG”** is not a standard, widely-used abbreviation in mainstream molecular biology or biochemistry literature that I can confidently identify. It may refer to a specific modified nucleoside analog (carbocyclic deoxyguanosine analogs are used in antiviral nucleoside research, e.g., in studies of reverse transcriptase inhibitors), but without being able to verify the specific compound and its “stabilized” mutagenic/misincorporation properties, I’d be guessing at a level that isn’t useful to you.

**What I can say generally:** carbocyclic nucleoside analogs replace the furanose oxygen of the sugar ring with a carbon, making the analog resistant to certain enzymatic cleavage (e.g., by phosphorylases) while still being recognized by polymerases — this is a common strategy in antiviral/anticancer nucleoside drug design (e.g., entecavir is a carbocyclic guanosine analog used against hepatitis B). If the question is testing “why would a chemist make a carbocyclic analog,” resistance to enzymatic degradation while retaining base-pairing/incorporation is the general answer. But matching this to “specific nucleotides misincorporated” requires source material I don’t have confident access to — **this one genuinely needs the original reference material or your instructor**, rather than a guess from me.

## 12.3 Cas9 metal ion cofactors (Set 1, Q37) [confidence: high]

Cas9’s two nuclease domains, **RuvC** and **HNH**, are both **metal-dependent endonucleases** that require divalent metal ions for catalysis.

**The relevant metal ion is magnesium (Mg²⁺).** Both the RuvC and HNH active sites coordinate Mg²⁺ ions, which are essential for the phosphodiester bond cleavage chemistry (a two-metal-ion mechanism typical of many nucleases and polymerases — one metal stabilizes the leaving group, the other activates the attacking water/hydroxide). This is the same general “two-metal-ion” catalytic mechanism seen in DNA polymerases, which the guide already covers in §4.

**If the answer choices are Mg, Zn, and Mn:** **Mg²⁺ is the physiologically relevant cofactor** for Cas9 cleavage activity. Zn²⁺ plays a structural role in some Cas9-family or related nuclease zinc-finger-like motifs in certain contexts, and Mn²⁺ can sometimes substitute for Mg²⁺ in vitro for some nucleases (often with altered specificity), but for the standard “what does Cas9 need to cut DNA” question, **magnesium is the answer**.

## 12.4 C9orf72 hexanucleotide expansion — toxicity mechanisms beyond a general list (Set 1, Q60) [confidence: high on the mechanisms; moderate on matching “beyond a list”]

C9orf72 repeat expansions (GGGGCC, in intron 1) are the most common genetic cause of ALS and frontotemporal dementia. Normal individuals carry 2–10 hexanucleotide GGGGCC repeats in the C9orf72 gene, while more than a few hundred repeats represent a risk for ALS and FTD.

**Three non-mutually-exclusive proposed mechanisms** (this is the “list” the question may be asking you to go beyond, or may itself be the expected answer):

1. **Loss of function / haploinsufficiency** — C9orf72 loss-of-function through haploinsufficiency, where the expanded allele is transcribed less due to hypermethylation, reducing normal C9orf72 protein levels.
1. **RNA toxic gain-of-function** — the expanded repeats are transcribed bidirectionally and form RNA foci in the central nervous system, sequestering key RNA-binding proteins and impairing RNA processing. The formation of G-quadruplex structures is part of this structural polymorphism and significantly impairs the expression and normal function of the C9orf72 protein — this directly connects to the G-quadruplex material already in §10.16 of this guide.
1. **Toxic dipeptide-repeat (DPR) protein gain-of-function** — non-ATG (repeat-associated non-AUG, RAN) translation of the hexanucleotide repeat expansions leads to accumulated production of cytoplasmic dipeptide-repeat proteins, whose toxicity is considered a contributing factor to pathology.

**If the question wants something “beyond” these three** — the literature also discusses **nucleocytoplasmic transport defects** (DPR proteins and RNA foci disrupting the nuclear pore complex) and **mitochondrial dysfunction**, but these are generally considered downstream consequences of the three mechanisms above rather than a fourth independent category. Given the phrasing “beyond a list of general possibilities,” I suspect the expected answer may actually be the **RAN translation / dipeptide-repeat protein mechanism** specifically (since it’s the most mechanistically distinct and “surprising” of the three — toxic proteins made without a start codon), but I can’t be certain without the answer choices.

## 12.5 “Non-homologous chromosome pairing” (Set 1, Q75) [confidence: low — ambiguous as stated]

This phrase is unusual, and I want to flag that directly rather than force an answer. In normal meiosis, **homologous chromosomes pair** (synapsis, forming the synaptonemal complex) during prophase I — this is one of the most fundamental facts in the guide’s meiosis section.

**“Non-homologous pairing” could refer to a few different real phenomena, depending on context:**

- **Robertsonian translocations** — two non-homologous acrocentric chromosomes fuse; during meiosis in a carrier, this can create a trivalent (three chromosomes associating) rather than normal bivalent pairing.
- **Ectopic pairing** — non-homologous chromosome regions (often containing repetitive sequences, like satellite DNA) can sometimes associate, particularly noted in some insect (e.g., *Drosophila*) cytogenetics.
- **Errors leading to nondisjunction** — improper pairing/synapsis can contribute to chromosomes segregating incorrectly.

**If the question asks “does non-homologous pairing occur regularly”** — under normal meiotic conditions, the answer is **no, it does not occur regularly**; homologous pairing via sequence complementarity is the rule, and non-homologous associations are exceptions associated with chromosomal abnormalities (translocations) or specific organism-dependent phenomena, not routine events. If your answer choices frame this as true/false (“non-homologous pairing is a regular occurrence”), **false** is the better-supported default — but if the question is about a specific organism or specific structural variant context, that context would change the answer, and I don’t have it.

## 12.6 BLOSUM scoring — lowest penalty (Set 1, Q119) [confidence: moderate, general principle only]

**BLOSUM (BLOcks SUbstitution Matrix)** matrices are used in protein sequence alignment (e.g., BLAST) to score how “costly” it is to substitute one amino acid for another, based on observed substitution frequencies in real protein families.

**General principle:** BLOSUM matrices assign **positive scores** to substitutions that occur frequently between related proteins (conservative substitutions, e.g., between similar amino acids like Leu↔Ile) and **negative scores** to substitutions that occur rarely (radical/non-conservative substitutions, e.g., between chemically very different amino acids like Trp↔Asp, or involving Cys or Trp, which are rare and structurally important).

**The “lowest scoring” (most negative) penalties in commonly used matrices like BLOSUM62** tend to involve **tryptophan (W)** paired with small or charged residues — for example, **W↔D** substitutions are among the most negatively scored in BLOSUM62 (commonly cited values around −4). Tryptophan is large, hydrophobic, and structurally constrained, so substituting it for almost anything is rarely tolerated and rarely observed — hence a strongly negative score.

**Honest caveat:** the *exact* lowest value depends on which BLOSUM matrix (BLOSUM45, 62, 80, etc.) and the precise pair of residues in your answer choices — these are empirically derived tables, not something derivable from first principles, so I genuinely cannot tell you “the” single lowest-penalty pair without either the matrix or your answer choices in front of me. The conceptual answer — **substitutions involving rare, structurally distinctive residues like tryptophan, especially paired with chemically opposite residues, receive the most negative scores** — is the defensible takeaway; matching it to a specific number or pair from your choices needs the source table.

## 12.7 CRISPR systems I, II, III, IV — relative machinery requirements (Set 1, Q120) [confidence: high]

The guide covers Type II (Cas9) in detail since that’s the genome-editing workhorse, but the broader classification is useful context:

**Class 1 systems (Types I, III, IV)** use **multi-subunit effector complexes** — multiple different Cas proteins assemble together to find and cleave the target. Class 1 CRISPR-Cas systems are comprised of types I, III, and IV.

- **Type I:** uses the multi-protein **Cascade complex** for target recognition plus the signature helicase-nuclease **Cas3** for degradation of the target DNA.
- **Type III:** uses the **Csm/Cmr multi-subunit complex**; signature gene is **cas10**; notably can target **RNA** (in addition to DNA in some subtypes) and some subtypes encode reverse transcriptase.
- **Type IV:** encodes a minimal multisubunit crRNA-effector complex comprising a partially degraded large subunit, Csf1, Cas5, and Cas7, and lacks cas1 and cas2 genes — meaning Type IV systems are often **missing the adaptation (spacer-acquisition) machinery** entirely and may rely on other systems for that function. This makes Type IV somewhat enigmatic functionally compared to the others.

**Class 2 systems (Types II, V, VI)** use a **single large multidomain protein** as the effector — this is the simplicity that made Cas9 (Type II) and Cas12a (Type V, §11.6) attractive for genome editing, since you only need to deliver one protein plus a guide RNA rather than reconstituting a multi-subunit complex.

**Bottom line for “relative machinery requirements”:** **Types I, III, and IV (Class 1) require multiple Cas proteins assembled into a complex; Type II (and Class 2 generally) requires only a single effector protein** — this single-vs-multi-subunit distinction is almost certainly the core of what’s being tested, and it directly explains why Cas9/Cas12a (not Cascade-based systems) became the genome-editing tools of choice.

## 12.8 Cas9 domain mutation that abolishes ALL activity — nickase vs. dCas9 (Set 1, Q124) [confidence: high]

This is a precise, well-documented piece of molecular biology:

- Cas9 has two nuclease domains: **RuvC** (cleaves the non-target/non-complementary strand) and **HNH** (cleaves the target/complementary strand).
- A single point mutation in **either** domain — classically **D10A** (inactivates RuvC) or **H840A** (inactivates HNH) — produces a **Cas9 nickase (nCas9)**, which can make a nick in only the corresponding strand of the target DNA rather than a full double-strand break. A nickase **still has partial activity** (one functional nuclease domain remains).
- To **abolish all catalytic activity** and produce **dead Cas9 (dCas9)** — which binds DNA via the guide RNA but cuts nothing, used for CRISPRi/CRISPRa as covered elsewhere in this guide — **both mutations are needed together**: the combination of D10A and H840A erases the nuclease activities of both RuvC and HNH, producing dCas9, which can bind to the target DNA without cleavage.

**Direct answer:** a mutation in **only one** domain (D10A *or* H840A alone) gives a **nickase**, not a fully dead Cas9 — it does not abolish all activity. **Both D10A AND H840A together** are required to abolish all Cas9 nuclease activity (dCas9). If the question’s framing is “which single domain mutation abolishes all activity,” the most accurate response is that **no single-domain mutation does** — that’s the conceptual trap the question may be testing.

## 12.9 Beta-strand positioning/topology (Set 1, Q125) [confidence: low — needs the figure]

Like the N-/C-terminus questions in §11.8, this almost certainly references a **specific structural diagram** showing beta-strands in a protein (e.g., a beta-sheet topology diagram with arrows indicating strand direction, or a Ramachandran-adjacent figure).

**General facts that may help:**

- Beta-strands in a beta-sheet can be arranged **parallel** (all strands running the same N→C direction) or **antiparallel** (adjacent strands running in opposite directions) — antiparallel sheets tend to have straighter, stronger hydrogen bonds and are generally more stable than parallel sheets.
- Beta-strands are typically depicted as **flat arrows**, with the arrowhead pointing toward the **C-terminal** direction of that strand.
- “Relative positioning” questions often ask you to identify which strands are adjacent/hydrogen-bonded based on a topology diagram, or to determine parallel vs. antiparallel arrangement from arrow directions.

Without the actual figure, I can’t tell you which specific strands the question refers to — but if you can describe the arrow directions and adjacency shown in the diagram, I can help you reason through parallel vs. antiparallel classification using the rules above.

## 12.10 Protospacer integration — leader-terminal repeat duplication (Set 2, Q29) [confidence: high]

This refers to the **CRISPR adaptation step** — how new spacers get added to a CRISPR array (the guide covers the CRISPR array generally but not this mechanistic detail).

**Mechanism:** when **Cas1-Cas2** integrates a new spacer (captured foreign DNA) into the CRISPR array, integration occurs at the **leader-proximal end** of the array (the end closest to the leader sequence, which contains the promoter for crRNA transcription). The integration reaction is a **staggered, half-site mechanism**: Cas1-Cas2 catalyzes nucleophilic attack at both ends of the new spacer into the **first repeat** adjacent to the leader. Because the repeat sequence is duplicated/copied on both sides of the new spacer during this process, the result is **a new spacer flanked by two copies of the repeat** — effectively, **the repeat is duplicated** so that the array now reads: leader → repeat → new spacer → repeat → old spacer 1 → repeat → old spacer 2… This repeat duplication is what allows the array to grow while maintaining the alternating repeat-spacer structure.

**Direct answer:** the new spacer integration is accompanied by **duplication of the repeat sequence** at the leader-proximal end of the array, so that the newly inserted spacer ends up flanked by repeats on both sides (one being the original leader-adjacent repeat, one being its duplicate). This is the mechanistic basis for why CRISPR arrays grow over time while preserving their repeat-spacer architecture, and it’s also why the **leader-proximal end of an array represents the most recently acquired spacers** (useful for reconstructing a population’s “immunological history” against phages — a concept sometimes tested separately).

## 12.11 Melanoma phenotype from a complementation table (Set 2, Q49) [confidence: cannot answer — missing data]

This is explicitly a **data-interpretation question dependent on a table that wasn’t provided** to me. The general logic of complementation (§1.7 of the guide, already covers this) is: if two mutant strains/lines are crossed/fused and the resulting phenotype is **wild-type (complementation occurs)**, the mutations are in **different genes**; if the phenotype remains **mutant (no complementation)**, the mutations are likely in the **same gene**.

I can’t reconstruct melanoma-specific genotype-phenotype assignments without the actual table — this isn’t a case where general knowledge substitutes for the missing data, since the answer depends entirely on the specific pattern of +/− results in the table. If you can transcribe the table (which lines were crossed and what phenotype resulted), I can walk through the complementation logic with you directly.

## 12.12 What kind of trait is albinism? (Set 2, Q62) [confidence: moderate — likely answer depends on framing]

The guide (and the answer to the same question on Set 1, Q10) frames albinism in the context of **epistasis** — and that’s defensible, because albinism (loss of the enzyme **tyrosinase**, which is upstream in the melanin synthesis pathway) can mask the expression of other pigmentation genes downstream in the pathway. An albino individual (genotype *cc* at the albinism locus, where *c* = non-functional tyrosinase) will appear white/unpigmented **regardless of their genotype at other pigmentation loci** — the albinism gene is **epistatic** to other coat/eye/skin color genes.

**However**, if Set 2’s answer choices are specifically **pleiotropic / polygenic / codominant / [something else]** and don’t include “epistatic” as an option, the question may be probing a different angle:

- **Pleiotropic** — albinism (specifically conditions like oculocutaneous albinism) does have **pleiotropic effects**: the same *single gene* mutation (e.g., in tyrosinase or related genes) affects **multiple traits** simultaneously — skin pigmentation, hair pigmentation, eye pigmentation, AND often visual function (due to abnormal development of the optic pathways, which depends on melanin during eye development). This is a well-documented pleiotropic effect, distinct from the epistasis framing.
- **Polygenic** — albinism itself (the classic OCA forms) is typically caused by mutations at a **single gene** (monogenic), so “polygenic” would generally be **incorrect** for albinism as a trait in itself — though normal skin color variation (without albinism) IS polygenic. This distinction (the *trait causing* albinism vs. *normal pigmentation variation*) matters.
- **Codominant** — albinism is classically **recessive** (you need two copies of the loss-of-function allele), not codominant. This would generally be **incorrect**.

**My best read:** if “epistasis” isn’t an option, **pleiotropic** is the better-supported alternative, because a single albinism gene affects multiple distinct traits (skin, hair, eye color, AND visual development) — this is textbook pleiotropy. But I’d flag to your coach that **both epistasis and pleiotropy are defensible framings of albinism depending on what aspect of the trait the question emphasizes** (its effect on *other genes’ expression* = epistasis; its effect on *multiple traits from one gene* = pleiotropy) — if your two practice sets gave different “correct” framings, that may reflect genuinely ambiguous question design rather than an error on your part.

## 12.13 Chronic myelogenous leukemia and the Philadelphia chromosome (Set 2, Q65) [confidence: high]

CML is the textbook example of a cancer caused by a specific, well-characterized chromosomal translocation.

**The Philadelphia chromosome** results from a **reciprocal translocation between chromosomes 9 and 22**, written as **t(9;22)(q34;q11)**. This translocation fuses part of the **ABL1** gene (chromosome 9) with part of the **BCR** gene (chromosome 22), creating the **BCR-ABL1 fusion gene** on the shortened chromosome 22 (the “Philadelphia chromosome”). The BCR-ABL1 fusion protein is a **constitutively active tyrosine kinase**, driving uncontrolled proliferation of myeloid cells — this is the molecular basis of CML.

**Direct answer:** **Chronic myelogenous leukemia is specifically and strongly associated with the Philadelphia chromosome** — this is one of the most well-established genotype-disease associations in cancer genetics (and historically important as the first consistent chromosomal abnormality linked to a specific cancer). This also connects to the chromosomal translocation material the guide already covers in its rearrangements section (§2.5) — CML/Philadelphia chromosome is the canonical real-world example of a translocation with a clear phenotypic consequence.

## 12.14 Missing pedigree (Set 2, Q93) and missing dot plot (Set 2, Q192) [confidence: cannot answer — missing data]

Both of these are explicitly figure-dependent questions. As with §12.11, I can’t generate genotype answers for a pedigree or a dot-plot comparison without seeing the actual figure — the “correct” answer is entirely determined by the specific symbols, shading, and relationships shown.

**What I can offer:** if you transcribe the pedigree (generation structure, who’s affected/unaffected/carrier, sex of each individual, and any notation like “Dd” labels already given for some individuals) or describe the dot plot (what’s being compared — e.g., two DNA sequences for a similarity/alignment dot plot, common in bioinformatics — and what the diagonal/off-diagonal patterns look like), I can walk through the genotype-assignment logic step by step. This is a case where the *method* (pedigree analysis rules, dot-plot interpretation rules — both of which the guide covers in general terms) is sound, but the *application* needs the specific data.

## 12.15 “Premature breast enlargement” and Down syndrome (Set 2, Q168) [confidence: moderate — likely a mismatch/distractor]

I want to flag this directly: **premature breast enlargement (premature thelarche) is not a standard or characteristic feature of Down syndrome (trisomy 21).**

**Standard Down syndrome features** include intellectual disability, characteristic facial features (epicanthal folds, flattened nasal bridge, upslanting palpebral fissures), hypotonia, congenital heart defects, and increased risk of certain conditions (e.g., hypothyroidism, leukemia, early-onset Alzheimer’s). Premature breast development is **not** part of this standard symptom list.

**If the question is “which of the following is NOT a symptom of Down syndrome”** (i.e., asking you to identify the odd one out among a list of real Down syndrome features plus one distractor) — **“premature breast enlargement” is very likely the correct answer to pick as the non-feature/distractor**, consistent with how the original answer key flagged it. This interpretation (premature breast enlargement = the thing that does NOT belong) is the most internally consistent reading, and matches the original “Not a standard symptom” annotation from your practice answer key — I’d treat that original annotation as correct and this entry mainly as confirmation/context.

## 12.16 Systems binding sequence-independently to dsDNA (Set 2, Q177) [confidence: moderate]

“Sequence-independent dsDNA binding” describes proteins/systems that bind double-stranded DNA based on its **general structural features** (the double helix, backbone, minor/major groove geometry) rather than recognizing a specific base sequence.

**Likely candidates, depending on context:**

- **Histones** — bind DNA via electrostatic interactions with the negatively charged phosphate backbone, largely independent of sequence (though some sequence preferences exist for nucleosome positioning).
- **Architectural/structural DNA-binding proteins** in bacteria (e.g., **HU, H-NS**) — bind and bend DNA without strong sequence specificity, important for nucleoid organization.
- **Topoisomerases** (already covered in the guide’s replication section) — act on DNA topology (supercoiling) rather than specific sequences, though some have preferred sites.
- In a **CRISPR context** (given the surrounding questions on this set), this could also be contrasting **Cas1-Cas2** (which can bind DNA ends somewhat independent of sequence during the early steps of capture, before PAM-based selection refines specificity) versus PAM/sequence-dependent recognition steps later in adaptation.

**Without the answer choices**, I can’t pin down which specific system the question wants — but the **conceptual contrast** (sequence-independent = structural/backbone-based recognition, e.g., histones or architectural proteins, vs. sequence-dependent = recognizes specific bases, e.g., restriction enzymes, transcription factors, Cas9-PAM) is the key distinction being tested, whichever specific example is in your choices.

## 12.17 APOBEC3 “C-Terminal Domain” as catalytic domain (Set 2, Q181) [confidence: high]

**APOBEC3** family proteins (cytidine deaminases involved in innate antiviral defense, and also a major source of mutations in some cancers) characteristically have a **two-domain structure**: an **N-terminal domain (NTD)** and a **C-terminal domain (CTD)**.

**Key fact:** for the APOBEC3 enzymes that have two deaminase domains (e.g., **APOBEC3G**), it is the **C-terminal domain (CTD) that contains the catalytically active deaminase site** responsible for cytidine-to-uridine deamination (the mutagenic activity). The N-terminal domain in these proteins is often catalytically inactive but plays roles in substrate binding, packaging into viral particles, or oligomerization.

**Direct answer:** **yes, the C-Terminal Domain (CTD) is correctly identified as the catalytic domain** in APOBEC3 enzymes with this bipartite structure — this is a well-supported structural biology fact and connects to the guide’s existing coverage of AID/APOBEC acting on ssDNA (§1, Q88 area).

## 12.18 Type II CRISPR-Cas subtypes with csn2 (Set 2, Q182) [confidence: high]

This connects directly to §12.7 above. Type II systems are divided into three sub-types: II-A, II-B, and II-C. Sub-type II-A contains an additional gene, csn2, with an example organism being Streptococcus thermophilus.

**Direct answer:** **Subtype II-A** is the Type II CRISPR-Cas subtype characterized by the presence of the **csn2** gene (involved in the adaptation/spacer-acquisition module, working alongside Cas1-Cas2). Subtypes II-B and II-C use different accessory genes (II-B typically has **cas4**; II-C often lacks csn2 and cas4 accessory genes entirely, relying on a more minimal adaptation module). This is a precise, well-documented classification fact.

## 12.19 Polypeptide conformations — 3^198 for a 100-residue protein (Set 2, Q187) [confidence: high on the math, moderate on whether 3^198 is “the” intended figure]

This is a **combinatorics/estimation** question about the astronomical number of possible conformations a polypeptide chain could theoretically adopt — famously used to illustrate **Levinthal’s paradox** (proteins fold to their native state vastly faster than random conformational search would allow, implying folding follows defined pathways rather than sampling all possibilities).

**Where “3^198” likely comes from:** a common simplified model assigns **each peptide bond (or each residue, depending on convention) roughly 3 possible backbone conformations** (corresponding to rough regions of φ/ψ angle space — e.g., alpha-helix-like, beta-sheet-like, and “other”). For a polypeptide of **n residues**, there are **n−1 peptide bonds** (or sometimes n−2 if end effects are excluded), each with ~3 conformational states. For **100 residues**, if you count **2 backbone dihedral angles (φ and ψ) per residue**, each with ~3 possible values, and consider roughly **99 internal residues** (excluding the two termini, which lack one dihedral each) — you get combinations like **3^(2×99) = 3^198**.

**Calculation check:** 3^198 is an almost incomprehensibly large number (~10^94), which is the **entire point** of the Levinthal’s paradox illustration — even sampling 10^13 conformations per second, exploring this many would take vastly longer than the age of the universe, yet real proteins fold in milliseconds to seconds.

**Bottom line:** **3^198 is consistent with the standard “~3 conformations per dihedral angle, 2 dihedral angles per residue, ~99 residues contributing” calculation** used to illustrate Levinthal’s paradox for a 100-residue protein. If your answer choices include 3^198 alongside other exponents, this derivation supports 3^198 as correct — though the *exact* exponent in textbook treatments does vary (some use 3^(n-1), some 2^(3n), etc., depending on the simplifying assumptions), so if a different specific number was marked correct in your key, it likely reflects a slightly different (but equally valid) simplifying assumption about how many dihedral angles/residues to count.

## 12.20 Trisomy X — germline phenotype and “general protein expression” (Set 2, Q191) [confidence: moderate]

This is the Set 2 counterpart to §11.13 (Set 1’s framing of the same underlying biology), now asking specifically about **germline** effects and **general protein expression** rather than histones.

**What’s reasonably well-supported:** in **47,XXX (trisomy X)**, as covered in §11.13, dosage compensation via X-inactivation means **two of the three X chromosomes are silenced**, leaving one active X per cell — similar to typical 46,XX females. Because of this compensation, **overall/general protein expression from X-linked genes is largely normalized** toward the typical female level, **not** simply 1.5× (3 copies / 2 typical copies) the normal amount. This is the core reason trisomy X often has a **mild phenotype**.

**Germline-specific considerations:** X-inactivation patterns in germ cells are dynamic — in female germ cells, **X-reactivation occurs during oogenesis** (both X chromosomes become active again in oocytes prior to meiosis, related to X-inactivation being reset each generation). In a 47,XXX individual, this means germ cells may transiently have **three active X chromosomes** during this reactivation window, which could plausibly affect dosage-sensitive genes important for oocyte development/meiosis — this is consistent with **reduced fertility/earlier menopause** sometimes reported in trisomy X, though most individuals with trisomy X are fertile.

**Direct answer for “effect on general protein expression”:** the dominant, well-supported effect is that **X-inactivation largely normalizes X-linked gene dosage/protein expression toward typical (46,XX) levels**, despite the extra chromosome — this is the “compensation” framing. If the question’s answer choices include something like “protein expression is approximately normal due to X-inactivation” vs. “protein expression is 1.5x normal” vs. “protein expression is severely reduced,” **the normalization-via-inactivation option is the best-supported answer**. The germline-specific reactivation nuance above is real but more specialized, and I’d flag it as a secondary consideration rather than the primary expected answer unless your choices specifically reference oogenesis/germ cells.

-----

**Honesty summary for this round:** of these 20 items, I’m confident in §12.1, 12.3, 12.7, 12.8, 12.10, 12.13, 12.17, 12.18, and 12.19 as solid factual/conceptual answers. §12.5, 12.6, 12.12, 12.15, 12.16, and 12.20 give you the best-supported reasoning but carry real residual ambiguity tied to answer-choice framing I can’t see. §12.2, 12.9, 12.11, and 12.14 are cases where I genuinely don’t have enough information (a chemical identifier I can’t verify, or figures/tables that were never provided) — for those four, getting the actual source material or transcribing the missing figure/table will get you a real answer faster than further guessing from me would.

-----

# 13. GENE THERAPY CLASSIFICATION NOTE (Set 2, Q142)

**I want to be straightforward about this one rather than fabricate a system: I cannot find a standard, recognized “Class I through Class VII” classification scheme for human gene therapy** in the regulatory frameworks I know of (FDA, NIH/OBA, EMA) or in mainstream gene therapy textbooks/reviews. I don’t want to invent roman-numeral categories and present them as if they’re an established system — that would be worse than leaving this flagged.

**What real classification systems DO exist for gene therapy, in case one of these is what the question (or its source material) actually means:**

- **Somatic vs. germline** — the most fundamental classification, already discussed in §11/§13 elsewhere in this guide’s broader biotech sections: somatic gene therapy affects only the treated individual, while germline gene therapy would be heritable. Germline human gene therapy is prohibited or heavily restricted in most jurisdictions.
- **In vivo vs. ex vivo** — based on *where* the genetic modification happens: in vivo delivers the therapeutic gene directly into the patient’s body (e.g., AAV injected directly into the eye for inherited retinal disease); ex vivo removes cells from the patient, modifies them in the lab (often with viral vectors or CRISPR), and reinfuses them (e.g., CAR-T cell therapy).
- **Gene addition vs. gene editing vs. gene silencing/inhibition** — based on *mechanism*: adding a functional gene copy (e.g., AAV-delivered functional gene for a recessive disorder), directly editing the genome (CRISPR-based correction), or knocking down/inhibiting a harmful gene’s expression (antisense oligonucleotides, RNAi/siRNA — connects to material already in this guide’s RNAi/knockdown sections).
- **NIH Recombinant DNA Advisory Committee (RAC) / NIH Guidelines, Section III categories** — the NIH Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules group recombinant DNA experiments (including human gene transfer experiments) into risk-based oversight categories (Sections III-A through III-F), determining the level of institutional biosafety review required. These aren’t named “Class I-VII” but are a real numbered/lettered regulatory classification scheme that touches human gene therapy oversight — if your source material referenced “classes” of oversight requirements, this family of categories is the most likely real-world match.
- **Vector-based classification** — viral vector types (retroviral/lentiviral, adenoviral, AAV, herpesvirus-based) vs. non-viral methods (naked DNA, lipid nanoparticles, electroporation) — already partly covered elsewhere in this guide’s biotechnology delivery sections and in §11.4 (LNPs).

**My honest recommendation:** if “Class I-VII” appeared in your practice set’s answer choices or question stem, I’d treat this as a strong signal to **go back to whatever source document the practice set was generated from** (a specific textbook, course slide deck, or lab manual likely defines this numbering explicitly — it doesn’t appear to be a widely-circulated standard that would show up in general search results or mainstream reviews). It’s also possible this is a simplified or invented teaching scheme specific to your course (some instructors create numbered categories for pedagogical clarity that don’t map onto a single named external standard) — in which case the “answer key” for your specific class is the only authoritative source, and no amount of external research will reproduce a scheme that exists only in your course materials. If you can share the source material that defines “Class I-VII,” I can map the seven categories to the conceptual distinctions above (somatic/germline, in vivo/ex vivo, addition/editing/silencing, vector type) and give you a confident answer.