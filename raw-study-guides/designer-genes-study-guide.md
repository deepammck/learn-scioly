# Designer Genes C — Study Guide

Built directly from the rules text's six topic categories (i–vi). Nothing here is organized by "chapter" for its own sake — each major heading below corresponds one-to-one with a category the rules name explicitly. Confidence tags are kept where they add value, but read them honestly: **[checked]** means I verified it during this rewrite (via search or direct calculation) or it's standard, settled material I'm confident in from training; it is not a guarantee that a primary source was pulled for every single fact. If a specific number or named study result matters to you, verify it yourself before treating it as fact.

No cheat sheet allowed at this tryout, so nothing here is written as "put this on your sheet." Everything is written to be memorized or re-derived from logic. Where a result is easy to forget but easy to rebuild from a smaller set of rules (Punnett ratios, epistasis ratios, HWE), the *method* is given equal weight to the final number, because reconstructing a forgotten ratio from logic is more reliable under test pressure than recalling a number cold.

---

## I. Mendelian Genetics

### Mendel's three laws

A **gene** sits at a **locus**; an **allele** is a variant of it. **Segregation**: the two alleles at a locus separate into different gametes — physically, homologous chromosomes separating at anaphase I. **Independent assortment**: alleles of *different* genes segregate independently — physically, random orientation of homolog pairs at metaphase I — but this only holds for genes on different chromosomes, or far enough apart on the same one (linkage breaks it; see below). "Law of Dominance" is really an observation, not a universal rule: plenty of real systems don't show full masking.

Vocabulary you need cold: homozygous/heterozygous, genotype/phenotype, dominant/recessive (a relationship between alleles, not a statement about which is more common — most human dominant disorders are *rare*), P/F1/F2, hemizygous (one allele only — X-linked genes in XY males), wild type.

### Patterns that break simple ratios

Each pattern below breaks one of Mendel's simplifying assumptions.

- **Incomplete dominance** — heterozygote is a blended intermediate. F2 ratio 1:2:1, phenotype matches genotype exactly.
- **Codominance** — both alleles fully and simultaneously expressed, not blended. ABO blood type: I^A and I^B are codominant.
- **Multiple alleles** — more than two forms exist *in the population*; any one diploid still carries two. ABO: I^A = I^B > i. Type A = I^AI^A or I^Ai; B = I^BI^B or I^Bi; AB = I^AI^B; O = ii. A heterozygous-A father (I^Ai) × heterozygous-B mother (I^Bi) gives offspring 1:1:1:1 across all four blood types — the standard setup behind paternity-exclusion problems.
- **Pleiotropy** — one gene, multiple traits (sickle-cell allele affects RBC shape, anemia, pain crises, and malaria resistance at once). The reverse of polygenic (many genes, one trait — see Population Genetics below).
- **Lethal alleles** — a genotype class dies, distorting the ratio. Yellow coat in mice (A^Y): dominant for color, recessive lethal. A^Ya × A^Ya gives 1 dead : 2 yellow : 1 agouti among conceptions, so **2:1 among survivors** — that 2:1 signature means "recessive lethal hiding behind a dominant trait."
- **Genomic imprinting** — expression depends on parent of origin. Prader-Willi vs. Angelman: same chromosome-15 region, opposite parent's copy deleted.
- **Mitochondrial inheritance** — maternal only; no Mendelian ratio applies; affected mother → all offspring affected regardless of father.
- **Anticipation** — disease worsens/earlier-onset across generations, typically trinucleotide-repeat expansion (Huntington's, fragile X).

Two pairs that get mixed up on tests:

| Pair | Distinction |
|---|---|
| Penetrance vs. expressivity | Penetrance = % of carriers showing *any* phenotype (population-level, all-or-nothing). Expressivity = *degree* of phenotype among those who show it (individual-level, graded). |
| Sex-limited vs. sex-influenced | Sex-limited = trait expressed in only one sex though gene is in both (milk yield). Sex-influenced = dominance itself flips by sex (pattern baldness — dominant in males, recessive in females). |

### Maternal effect genes vs. mitochondrial inheritance

Not separated explicitly in the rules' topic list, but it's the same examiner trap either way: both produce a pedigree where offspring phenotype tracks the mother regardless of the father, for two completely different reasons.

**Maternal effect**: the gene is nuclear and inherited normally (it could even be autosomal) — but the *offspring's* phenotype is set by the *mother's genotype*, because she loads the egg cytoplasm with mRNA/protein from her own alleles before fertilization, before the zygote's own genome is even transcriptionally active. Classic case: snail shell-coiling direction (dextral vs. sinistral) is set by the mother's genotype, not the snail's own; *Drosophila* axis-patterning genes (*bicoid*) work the same way. The tell: cross a homozygous-mutant mother × wild-type father — all offspring are phenotypically mutant (mom's cytoplasm controls it). But cross those (heterozygous, phenotypically-mutant) F1 females to wild-type males, and the F2 are wild-type, because the F1 females' own eggs are now controlled by their own heterozygous genotype. That one-generation lag — phenotype reflects the *parent's* genotype, not the individual's own — is the signature, and it's absent from true mitochondrial inheritance, where phenotype always matches the individual's own mtDNA with no lag at all.

**Mitochondrial/cytoplasmic inheritance** (above): no nuclear gene is involved — it's mtDNA itself, a separate genome, passed via the egg's mitochondria.

**Heteroplasmy**: real mitochondrial-disease pedigrees are rarely clean, because a cell holds many mitochondria, and the *proportion* of mutant vs. wild-type mtDNA — not just presence/absence — varies between cells, tissues, and siblings (the cleaner case, where every copy matches, is **homoplasmy**). During oogenesis mtDNA is randomly partitioned into developing oocytes — a genetic bottleneck — so a mildly-affected mother can have children ranging from unaffected to severely affected depending on which mix of mtDNA each egg happened to get. Disease severity tracks % mutant mtDNA against a **threshold**: a tissue functions normally below some critical mutant fraction, then symptoms appear once it's crossed. That threshold model is also why mitochondrial disease often shows late onset (mutant load can drift upward with age/division until it crosses the line) and hits high-energy tissues — muscle, brain, heart — hardest and first.

### Complementation

Cross two homozygous mutants with the same mutant phenotype; look at F1. **F1 wild type → mutations complement → different genes** (each parent supplied a working copy of what the other lacked). **F1 still mutant → fail to complement → same gene.** Requires recessive mutations; doesn't apply to dominant mutations. One-line test: can these two broken genomes, combined, build one working set? Yes → different genes.

### Probability rules

**Product rule (AND)**: independent events, multiply. **Sum rule (OR)**: mutually exclusive events, add. **Binomial**: P(*k* successes in *n* trials) = C(*n*,*k*)·*p*ᵏ·*q*⁽ⁿ⁻ᵏ⁾. Use binomial only when order doesn't matter and you're counting all arrangements — a question asking for one *specific* birth order is plain multiplication, not a binomial coefficient.

Worked: trihybrid AaBbCc × AaBbCc, P(A_B_cc) = (3/4)(3/4)(1/4) = 9/64 — product rule replaces a 64-box Punnett square. Two carriers (Aa×Aa), P(exactly 2 of 5 children affected) = C(5,2)(1/4)²(3/4)³ = 10·(1/16)·(27/64) ≈ 0.264.

### Punnett squares and the general formulas

| Cross | Phenotypic ratio |
|---|---|
| Monohybrid Aa×Aa | 3:1 |
| Monohybrid test cross (Aa×aa) | 1:1 |
| Dihybrid AaBb×AaBb | 9:3:3:1 |
| Dihybrid test cross | 1:1:1:1 |
| Trihybrid AaBbCc×AaBbCc | fully recessive 1/64, fully dominant 27/64 |

For *n* genes, heterozygous self-cross, all independent: gametes/parent = 2ⁿ, genotypes = 3ⁿ, phenotypes = 2ⁿ, fully recessive = (1/4)ⁿ, fully dominant = (3/4)ⁿ. Beyond two genes, don't draw the square — apply the product rule gene by gene.

**Test cross** = unknown-genotype individual × homozygous recessive; any recessive offspring proves heterozygosity. **Back cross** = F1 × either parent; a test cross is the special case where that parent is homozygous recessive.

### Epistasis

One gene's alleles mask or modify a *different* gene's expression — contrast with dominance, which is within one locus. All ratios below sum to 16 — fastest recognition heuristic for a two-gene cross.

| Ratio | Mechanism |
|---|---|
| 9:3:3:1 | Two genes, simple dominance (no epistasis) |
| 9:3:4 | Recessive epistasis |
| 12:3:1 | Dominant epistasis |
| 9:7 | Duplicate recessive / complementary genes |
| 15:1 | Duplicate dominant (redundant) |
| 9:6:1 | Duplicate genes, additive |
| 13:3 | Dominant suppression |

Worked logic, not just memorized ratios: Labrador coat color — gene E (E_ allows pigment, ee blocks it regardless of B) is epistatic to gene B (B_ black, bb brown). 9 B_E_ black : 3 bbE_ brown : 4 (3 B_ee + 1 bbee) yellow — recessive epistasis, 9:3:4. Albinism (loss of tyrosinase) is the classic worked case: an albino (cc) is unpigmented regardless of every other pigmentation locus — epistatic to all of them — and simultaneously pleiotropic, since the same mutation hits skin, hair, eye color, and visual-pathway development. Both labels are correct at once, describing different relationships.

**Method**: when given a biochemical pathway (enzyme A converts precursor→intermediate, enzyme B converts intermediate→product), map each genotype to where the pathway breaks. A block early masks everything downstream — that's the epistatic gene. This beats memorizing the ratio table from scratch.

### Pedigree analysis

Symbols: square = male, circle = female, filled = affected, half-filled/dot = carrier, double line = consanguineous, slash = deceased.

| | Recessive | Dominant |
|---|---|---|
| Skips generations? | Yes (two unaffected carriers → affected child) | No — affected child needs an affected parent |
| Affected×affected | Usually all affected | Can give unaffected child if both heterozygous |

| | X-linked recessive | X-linked dominant | Autosomal | Y-linked |
|---|---|---|---|---|
| Sex ratio | far more males | ~2× more females | equal | only males |
| Father→son? | never | never | possible | only route |
| Strongest tell | criss-cross: affected male → carrier daughters → affected grandsons | affected father → all daughters affected, no sons affected | father→son rules out X-linkage | very rare |

Fastest two elimination checks: (1) father→son transmission present? → rules out X-linkage entirely. (2) affected daughter, unaffected father? → rules out X-linked dominant; if recessive, father must be a carrier.

For an autosomal recessive trait, two obligate carriers (Aa×Aa): each child affected with probability 1/4. An *unaffected* child is a carrier with probability **2/3** (of the three unaffected outcomes AA, Aa, Aa — two are carriers).

### Extending carrier risk with more data (Bayes)

P(carrier | observations) ∝ P(observations | carrier) × P(carrier). Classic setup: a woman's sibling has an autosomal recessive condition (both parents obligate carriers); she's unaffected, so prior P(carrier) = 2/3, P(AA) = 1/3. She marries an unaffected man; they have *k* unaffected children.

Worked (husband is a known obligate carrier, 2 unaffected children): carrier branch = (2/3)(3/4)² = 18/48; AA branch = (1/3)(1) = 16/48. P(carrier | data) = 18/34 = **9/17 ≈ 0.53**.

Worked (one child, husband a carrier): posterior ∝ (2/3)(3/4) : (1/3)(1) = 1/2 : 1/3 → P(carrier) = 3/5, P(AA) = 2/5.

**The whole calculation hinges on whether the second parent is a known carrier.** If he isn't, the children's status carries zero information about her genotype, and the answer stays at the plain 2/3 prior — don't run the Bayesian machinery reflexively without checking this first.

### X-linked coat color worked case (calico cats)

X-linked locus, alleles X^O (orange) and X^+ (black). X^OX^O = orange, X^+X^+ = black, X^OX^+ = calico (patches, from random X-inactivation — each cell expresses one allele, clonal expansion makes a visible patch), X^OY = orange male, X^+Y = black male. A calico **male** is essentially always 47,XXY (Klinefelter) — an ordinary XY male can't carry two different X alleles.

### Autosomal dominant worked case (Nail-Patella Syndrome)

NPS affects nails, knees, elbows, pelvis, sometimes kidneys/eyes. Autosomal dominant, caused by heterozygous loss-of-function in **LMX1B** — mechanism is **haploinsufficiency**: one working copy isn't enough, so a single mutated copy causes disease even with the other copy intact. (This pairing of gene/mechanism matches my own knowledge; I have not independently re-pulled the OMIM entry or the cited 2008 paper during this rewrite, so confirm the citation yourself if it matters.) Reach for this example when a question wants a dominant disorder that *isn't* gain-of-function or dominant-negative.

### Linkage (concept) and gene mapping

Linked genes sit on the same chromosome, inherited together more than independent assortment predicts. **Parental** offspring = same combination as a parent (majority class when linked). **Recombinant** = new combination from crossing over (minority class). **Cis (coupling)**: both dominants on one homolog. **Trans (repulsion)**: dominants on opposite homologs. **Recombination frequency (RF)** = recombinants/total × 100%; ranges 0–50%; 50% = unlinked (or so far apart crossing over always separates them); **1% RF ≈ 1 centimorgan (cM)**.

**Two-point mapping (State — two genes).** Testcross a dihybrid to a double recessive. Two largest classes = parental; two smallest = recombinant. RF = recombinant count / total × 100 = cM distance between the genes.

Worked: AB/ab female testcrossed to ab/ab male, 800 offspring — 285 long-wing/gray (AB, parental), 285 short/black (ab, parental), 115 long/black (Ab, recombinant), 115 short/gray (aB, recombinant). RF = 230/800 = 28.75% = 28.75 cM.

**Three-point mapping (Nationals — three genes).** Extra step: find gene order, not just pairwise distance.

1. Two largest classes = parental (reveals cis/trans arrangement).
2. Two smallest classes = double crossovers (DCO).
3. Compare a parental gamete to a DCO gamete — the **one gene whose allele flipped** is the **middle** gene.
4. RF per interval = (singles in that interval + DCOs) / total. Add DCOs into *both* interval counts — the step most often missed.
5. **Coefficient of coincidence (CoC)** = observed DCO / expected DCO, where expected DCO = RF₁ × RF₂ × total. **Interference** = 1 − CoC.

Worked (corn, genes v/gl/va, 726 offspring): classes were +++  (235), v gl va (270), +gl+ (4), v+va (7), and four single-crossover classes (62, 60, 40, 48). Parental = +++ /v gl va (largest two). DCO = +gl+ /v+va (smallest two, total 11). Comparing parental to DCO, only **gl** differs → gl is the middle gene, order **v–gl–va**.

- RF(v–gl): singles are the classes where only v differs from parental (+gl va = 40, v++ = 48) plus DCOs (11) = 99/726 = **13.6 cM**.
- RF(gl–va): singles where only va differs (++va = 62, v gl+ = 60) plus DCOs (11) = 133/726 = **18.3 cM**.
- Expected DCO = 0.136 × 0.183 × 726 ≈ 18.1. Observed DCO = 11. CoC = 11/18.1 ≈ 0.61. **Interference ≈ 0.39** — moderate positive interference.

The directly-observed outer (v–va) recombinant frequency *underestimates* the true distance, because DCOs restore the parental outer combination — exactly why mapping through a middle marker beats measuring the long distance directly.

### Correcting RF for unseen multiple crossovers: Haldane and Kosambi

A two-point RF underestimates true map distance once markers are far enough apart for *more than one* crossover to happen between them — a double crossover restores the parental combination and is invisible to a simple two-point cross, so raw RF flattens out approaching 50% well before the physical distance does. Two standard corrections, both more advanced than the basic mapping above:

**Haldane mapping function** (assumes *no* interference): *r* = ½(1 − e⁻²ᵅ), inverting to *d* = −½ln(1 − 2*r*), with *d* in Morgans. Tracks raw RF closely below ~15 cM, diverges increasingly above it.

**Kosambi mapping function** (assumes *positive* interference — more realistic for most organisms): *r* = ½tanh(2*d*), inverting to *d* = ¼ln[(1+2*r*)/(1−2*r*)]. Kosambi gives a *shorter* corrected distance than Haldane for the same observed *r*.

Use Haldane only if told explicitly to assume no interference; Kosambi is the more defensible default otherwise. Worked (Haldane): *r* = 0.30 → *d* = −½ln(0.4) ≈ 0.458 M = **45.8 cM** — versus the naive 30 cM, a substantial correction once *r* is this high.

---

## II. Mitosis and Meiosis

### The cell cycle

Interphase = G1 (growth, decision point) → S (DNA replication, 2C→4C, chromosome *number* unchanged) → G2 (further growth, error-checking). M phase = mitosis + cytokinesis. **G1/S checkpoint**: governed by Rb/E2F and p53 (halts cycle or triggers apoptosis on DNA damage). **G2/M checkpoint**: replication complete and repaired? **Spindle assembly checkpoint**: all kinetochores attached? — the main guard against nondisjunction. Drivers: cyclins + CDKs, active only when bound.

Three non-dividing states, easily confused: **G0 (quiescent)** — reversible, can re-enter the cycle. **Senescent** — permanent arrest, but alive and metabolically active (secretes pro-inflammatory SASP signals); not apoptotic. **Apoptotic** — programmed death, fragmented, cleared by phagocytes. Don't call a senescent cell "dead" — it's retired, not deceased.

### Mitosis — stages

Prophase (chromatin condenses, spindle begins forming, nucleolus disappears) → prometaphase (envelope breaks down, kinetochores assemble, microtubules attach) → metaphase (chromosomes align at the metaphase plate; checkpoint verifies attachment) → anaphase (**sister chromatids separate**, centromere splits, cohesin cleaved by separase) → telophase (decondense, envelopes reform) → cytokinesis (animal: actin-myosin cleavage furrow; plant: cell plate from vesicles).

### Meiosis — stages

**Meiosis I (reductional, 2n→n, homologs separate).** Prophase I — longest, most tested (substages Leptotene-Zygotene-Pachytene-Diplotene-Diakinesis). Synapsis via the synaptonemal complex forms a bivalent/tetrad; **crossing over** at chiasmata is the physical basis of gene mapping. Metaphase I — tetrads align; independent assortment happens here (2ⁿ arrangements). Anaphase I — **homologs separate, sisters stay together** (the single most-tested distinction in this chapter). Telophase I — two haploid cells, each chromosome still two chromatids.

**Meiosis II (equational, n→n, mechanically like mitosis).** Anaphase II — **sisters finally separate**. Result: four haploid cells, one chromatid each.

Three sources of variation: independent assortment (2ⁿ combos), crossing over (essentially infinite combos), random fertilization.

| Feature | Mitosis | Meiosis |
|---|---|---|
| Divisions / daughters | 1 / 2 | 2 / 4 |
| Ploidy | 2n→2n | 2n→n |
| Synapsis, crossing over | No | Yes (prophase I) |
| Homologs separate | No | Yes (anaphase I) |
| Sisters separate | Yes (anaphase) | Yes (anaphase II only) |
| Purpose | growth, repair | gamete formation, variation |

### Oogenesis vs. spermatogenesis

Oogenesis is asymmetric: a primary oocyte arrests in prophase I (sometimes decades); resumes at ovulation, dividing unequally into a secondary oocyte (most cytoplasm) plus a first polar body; the secondary oocyte arrests again in metaphase II, completing meiosis II only at fertilization, producing the egg plus a second polar body. **Net: one functional egg, two to three polar bodies.** Spermatogenesis divides equally: **four functional sperm** per primary spermatocyte. The cell a sperm actually fertilizes is, strictly, a *secondary oocyte* — still mid-meiosis.

### Aneuploidy and structural abnormalities

**Nondisjunction in meiosis I**: all four resulting gametes abnormal. **Meiosis II**: two normal, one n+1, one n−1. **Mitotic**: mosaicism (mixed normal/aneuploid cell lines in one individual).

| Category | Definition | Example |
|---|---|---|
| Monosomy (2n−1) | one chromosome missing | Turner (45,X) — only viable human monosomy |
| Trisomy (2n+1) | one extra | Down (21), Edwards (18), Patau (13), Klinefelter (47,XXY) |
| Polyploidy | extra whole sets | lethal in animals, common/useful in plants |

Structural: deletion (Cri-du-chat, 5p), duplication, inversion (paracentric excludes centromere, pericentric includes it), translocation (reciprocal = mutual exchange; Robertsonian = fusion of two acrocentric chromosomes).

### Reading a karyotype

Total chromosome count vs. 46 (extra = trisomy, missing = monosomy) → check the sex pair (XX/XY/XXY/X) → identify which autosome pair has 3 copies → write the ISCN string (total, sex chromosomes, abnormality — e.g. 47,XX,+18). Nondisjunction stage: meiosis I failure → gamete with both non-identical homologs; meiosis II failure → gamete with two identical sister chromatids.

Down syndrome (47,XY,+21 or 47,XX,+21): ~95% maternal meiosis I nondisjunction (risk rises with maternal age, from prolonged prophase-I arrest); ~4% Robertsonian translocation (familial, not age-linked); ~1% mosaic.

### Somatic recombination: V(D)J and class switching

This is the rules' explicit State/Nationals topic — somatic (not germline) recombination generating antibody/TCR diversity.

**V(D)J recombination**: heavy chain built from V, D, J segments; light chain from V, J only. RAG1/RAG2 cuts at flanking recombination signal sequences; non-homologous end joining seals the ends. Diversity comes from (1) combinatorial choice of segments, (2) junctional diversity — imprecise joining plus nucleotide addition by **TdT**, (3) combinatorial heavy/light pairing, (4) **somatic hypermutation** later, in mature B cells.

**Class-switch recombination (CSR)**: changes the antibody's constant region (IgM→IgG/IgA/IgE) without touching the V(D)J region, so antigen specificity is unchanged — only effector function/location changes. Both somatic hypermutation and CSR are driven by **AID** (activation-induced cytidine deaminase), which converts C→U in single-stranded DNA. In V regions, that mismatch gets replicated over or excised and repaired error-prone, scattering point mutations (somatic hypermutation). In switch regions, the same lesion gets processed into double-strand breaks that NHEJ uses to splice in a new constant region (class switching). One enzyme, two outcomes, depending on where it acts.

---

## III. Population & Evolutionary Genetics

### Hardy–Weinberg equilibrium

p + q = 1; p² + 2pq + q² = 1 (p² = AA, 2pq = Aa, q² = aa). Five assumptions, each mapping to a force that breaks it: no mutation, no migration, no drift (infinite population), random mating, no selection — **M**utation, **M**igration, **D**rift, **N**on-random mating, **S**election.

Workflow for a recessive-trait problem: affected frequency = q² → q = √(q²) → p = 1−q → carriers = 2pq → AA = p².

Worked: 1 in 10,000 affected. q² = 0.0001, q = 0.01, p = 0.99, carrier frequency 2pq ≈ 0.0198 ≈ **1 in 50** — far more carriers than affected individuals, a standard teaching point.

Counting alleles directly from genotype counts: allele frequency = (2×homozygotes for that allele + heterozygotes)/(2×total).

**X-linked**: affected **males = q** (hemizygous — affected frequency *is* the allele frequency), affected **females = q²** — why X-linked recessive conditions are far more common in males.

**Three alleles** (ABO): with frequencies p, q, r summing to 1, O = r², A = p²+2pr, B = q²+2qr, AB = 2pq.

### Testing fit with chi-square

χ² = Σ(O−E)²/E. For a cross goodness-of-fit, df = classes−1. For an HWE test, df = genotypes − alleles estimated − 1 (for 2 alleles/3 genotypes: df=1). Critical values at α=0.05: df1=3.84, df2=5.99, df3=7.81, df4=9.49. χ² above critical → reject the hypothesis.

Worked (cross): observed 320 purple, 80 white (N=400) against an expected 3:1 (300:100). χ² = 400/300 + 400/100 = 1.33+4.00 = **5.33** > 3.84 → reject 3:1; something else is going on (incomplete penetrance, miscount, different mechanism).

Worked (HWE): population 1000, observed AA=640, Aa=320, aa=40. p=(2·640+320)/2000=0.8, q=0.2. Expected: AA=640, Aa=320, aa=40 — exact match here, χ²=0, df=1, 0<3.84 → fail to reject; this population is in equilibrium.

The two df rules look similar but aren't identical — a cross test subtracts only 1; an HWE test additionally subtracts 1 per allele frequency estimated from the data. Mixing them up is the most common error here.

### Forces that change allele frequencies

**Drift** — random change from sampling error; strongest in small populations; can fix harmful alleles or lose beneficial ones regardless of fitness. **Founder effect** — new population starts from a few individuals carrying an unrepresentative allele subset (elevated disorder frequencies in Amish, Afrikaner, Ashkenazi populations are the standard examples). **Bottleneck** — population crashes then recovers; survivors carry only a fraction of the original variation (cheetahs, northern elephant seals). **Migration/gene flow** — homogenizes populations, counteracts drift and local adaptation. **Mutation** — the ultimate source of new alleles; slow on its own, but the raw material selection/drift act on.

**Fitness**: relative fitness *w* (best genotype = 1), selection coefficient *s* = 1−w. **Directional** selection shifts the mean (antibiotic resistance); **stabilizing** reduces variance (birth weight); **disruptive** favors both extremes. **Balancing selection**: heterozygote advantage (sickle-cell HbA/HbS heterozygotes resist malaria — both alleles persist) or frequency-dependent selection (rarity itself is favored).

A fully recessive deleterious allele hides in heterozygotes at low q, so selection against it is *inefficient* there — exactly why recessive disease alleles persist despite ongoing selection. That qualitative point becomes quantitative in the next section.

### Mutation-selection balance and heterozygote-advantage equilibrium

| Dominance | Equilibrium frequency q̂ |
|---|---|
| Dominant/partial (h>0) | q̂ ≈ μ/(hs) |
| Fully recessive (h=0) | q̂ = √(μ/s) |

√(μ/s) is much larger than μ/s for the same μ, s — why recessive disease alleles sit at higher equilibrium frequency than dominant ones. Worked: s=0.02, μ=10⁻⁵, recessive → q̂=√(0.0005)≈0.022 (2.2%).

Heterozygote advantage: w₁₁=1−s₁, w₁₂=1 (fittest), w₂₂=1−s₂. **q̂ = s₁/(s₁+s₂)**. Sickle-cell worked: s₁=0.2 (against HbA/HbA, malaria-susceptible), s₂=0.8 (against HbS/HbS, sickle disease) → q̂ = 0.2/1.0 = **0.20**, 20% HbS maintained in a malarial environment.

### Continuous variation and gene number

A **polygenic** trait — many genes, small additive effects each — produces continuous, bell-shaped variation, often also environmentally influenced (multifactorial). For *n* additively-acting loci, F2 phenotypic classes ≈ 2n+1, and the fraction resembling one parental extreme = (1/4)ⁿ. Inverting this is the standard "how many genes" question: if 1/256 of F2 match one parent, (1/4)ⁿ=1/256 → 4ⁿ=256 → **n=4**.

### Speciation and reproductive isolation

Not named explicitly in the rules' topic list — its hook here is thinner than the rest of this section — but the orthologs/paralogs distinction just below leans on "speciation event" without defining it, and it's standard material for this chapter.

The **biological species concept** defines a species as a group that can interbreed and produce fertile offspring, reproductively isolated from other such groups; it breaks down for asexual organisms, fossils, and freely-hybridizing taxa, precisely because reproductive isolation is its whole criterion.

**Reproductive isolation** splits by timing. **Prezygotic** (blocks mating or fertilization before a zygote forms): habitat, temporal, behavioral, mechanical, and gametic isolation. **Postzygotic** (a hybrid forms but fails): reduced hybrid viability, reduced hybrid fertility (the mule is the standard example), and hybrid breakdown (F1 is fine, but F2 or later generations fail).

**Allopatric** speciation happens via geographic separation; **sympatric** speciation happens without it, in the same area — via polyploidy in plants, or a host/niche shift. Related vocabulary: adaptive radiation (rapid diversification into many niches from one ancestor), convergent evolution (unrelated lineages independently evolve similar traits — analogy, not homology), divergent evolution (one lineage splits and its descendants diverge — homology).

### Gene duplication, homology, and genome evolution

Gene duplication creates a spare copy: it can **neofunctionalize** (new function), **subfunctionalize** (split the ancestral function), or become a **pseudogene** (decays into nonfunction). Mechanisms: unequal crossing over, whole-genome duplication, retrotransposition, tandem duplication. Repeated duplication builds gene families (globins, Hox clusters).

| Term | Definition | Memory hook |
|---|---|---|
| Orthologs | homologs in different species, from speciation | **O**rtholog – **O**rganism split |
| Paralogs | homologs in the same genome, from duplication | **P**aralog – du**P**lication |

### Phylogenetics

Tips = taxa; internal nodes = ancestors; root = most recent common ancestor of everything shown. A **clade** = ancestor + all descendants; **paraphyletic** = ancestor + some descendants; **polyphyletic** = grouped by convergence, no recent common ancestor. **Synapomorphy** = shared derived trait, the evidence for a clade; **homoplasy** = similarity not from common ancestry (convergence, parallelism, reversal) — misleading signal. Rotating branches around a node doesn't change relationships.

Building a tree from sequence data: collect homologous sequences → align them (gaps for indels — errors here propagate through everything downstream) → choose a substitution model → build the tree (distance methods like UPGMA/Neighbor-Joining, or character methods like Maximum Parsimony/Likelihood/Bayesian) → assess support (bootstrap, ≥70–95% = well-supported) → root and interpret.

The rules explicitly name three genome compartments for phylogenies: **nuclear** (biparental, recombines — default for species trees), **mitochondrial/organellar** (uniparental, no recombination, higher mutation rate, good for recent divergence and matrilineal history — and it can disagree with the species tree because it traces only one lineage), **extrachromosomal** (plasmids/viruses — can be completely discordant with the host, since they move by horizontal transfer). When a gene tree disagrees with the species tree, that's evidence — hybridization, incomplete lineage sorting, horizontal transfer, or endosymbiosis (mitochondria/chloroplasts branch with bacteria, not with the host nucleus) — not noise to dismiss.

Sequence alignment, the step before any of this, needs a way to score whether substituting one amino acid for another is "cheap" or "costly" — that's what **BLOSUM** matrices do, scoring conservative substitutions (chemically similar, frequently observed) positively and radical ones negatively, derived from observed substitution frequencies in real protein families rather than calculated from chemistry directly.

### Heritability

**Heritability is a property of a population in a specific environment — not a statement that an individual's trait is "X% genetic."** V_P = V_G + V_E; V_G = V_A (additive) + V_D (dominance) + V_I (epistatic interaction).

**Broad-sense H² = V_G/V_P** (all genetic variance). **Narrow-sense h² = V_A/V_P** — the one that predicts response to selection, since only additive effects reliably pass to offspring.

**Breeder's equation: R = h²S** (S = selection differential = selected-parent mean − population mean; R = response = offspring mean − population mean). Worked: population mean 10 cm, selected parents average 14 cm (S=4), offspring average 12 cm (R=2). Realized h² = R/S = 2/4 = **0.5**.

A high h² does **not** mean environment is unimportant, does **not** mean the trait is unchangeable, and says **nothing** about differences between groups or populations — it's specific to the population and environment actually measured.

---

## IV. Molecular Biology of DNA

### Structure, directionality, base pairing

A nucleotide = base + sugar (deoxyribose in DNA) + phosphate(s). DNA's deoxyribose lacks RNA's 2′-OH, making it more chemically stable. **Purines** (two rings): A, G ("Pure As Gold"). **Pyrimidines** (one ring): C, T (and U in RNA) — "**C**, **U**, **T**." Backbone = alternating sugar-phosphate via **phosphodiester bonds**, negatively charged (why DNA runs toward the positive electrode in gel electrophoresis).

Each strand has a 5′ end (free phosphate) and 3′ end (free OH); synthesis always runs **5′→3′**; the two strands are **antiparallel**. **A–T**: 2 H-bonds. **G–C**: 3 H-bonds (stronger, higher melting temp). **Chargaff's rules**: %A=%T, %G=%C, so purines=pyrimidines=50% in double-stranded DNA. Right-handed double helix (B-DNA is the physiological form), ~10.5 bp/turn, major and minor grooves (proteins read sequence mainly via the major groove).

### DNA organization

Prokaryotes: single circular chromosome, supercoiled, in the nucleoid (no membrane); **plasmids** are small circular extrachromosomal DNA replicating independently. Eukaryotes: **histones** (H2A, H2B, H3, H4 core + H1 linker) bind DNA electrostatically; a **nucleosome** = ~147 bp wrapped around a histone octamer ("beads on a string"); H1 coils nucleosomes into the 30-nm fiber, which loops into higher-order structures up to the metaphase chromosome.

| Type | Packing | Transcription |
|---|---|---|
| Euchromatin | loose | active |
| Heterochromatin (constitutive) | dense | permanently silent (centromeres, telomeres) |
| Heterochromatin (facultative) | dense | silent but switchable (Barr body / inactivated X) |

### DNA replication

**Semiconservative**: each daughter duplex has one parental, one new strand (Meselson-Stahl). Initiation: origins of replication (*oriC* in bacteria; many in eukaryotes, licensed in G1 by ORC/Cdc6/Cdt1 loading the MCM2-7 helicase, fired in S phase by CDKs/DDK).

At the fork: **helicase** unwinds; **SSBs** stabilize single strands; **topoisomerase/gyrase** relieves supercoiling ahead of the fork; **primase** lays an RNA primer (DNA pol can't start de novo); **DNA polymerase** extends 5′→3′. **Leading strand**: continuous, one primer. **Lagging strand**: discontinuous Okazaki fragments, each needing its own primer. A **sliding clamp** (PCNA/β-clamp) keeps the polymerase processive. Primers get removed and replaced, **ligase** seals the remaining nicks.

Bacterial Pol III = main replicative enzyme; Pol I removes primers/repairs. Eukaryotic: Pol α (primase-associated), Pol δ (lagging), Pol ε (leading), Pol γ (mitochondrial).

**Fidelity, three layers**: (1) base selection at the active site (~1 error/10⁴–10⁵ alone), (2) **3′→5′ proofreading exonuclease** — reverses and excises a freshly misincorporated base (~100–1000× improvement) — this is the layer the rules name explicitly, (3) mismatch repair post-replication (another ~100–1000×). Why proofreading needs the free 3′ end: synthesis runs 5′→3′ because the energy for each new bond comes from the *incoming* nucleotide's triphosphate; if synthesis ran 3′→5′, removing a bad terminal base would strip the triphosphate needed to keep extending, and proofreading couldn't work at all.

### Telomeres and the end-replication problem

A linear chromosome's end can't be fully replicated on the lagging strand — there's no template left for the final primer's eventual replacement, so chromosomes shorten each division. **Telomeres** (repetitive TTAGGG in humans) are an expendable buffer absorbing that loss, and they also prevent end-to-end fusion (otherwise NHEJ would treat bare ends as double-strand breaks) and block the DNA-damage response via the **shelterin** protein complex capping the end. **Telomerase** — reverse transcriptase plus an RNA template — extends telomeres in germ/stem cells; most somatic cells lack it and shorten toward the **Hayflick limit** (~50 divisions, feeding into senescence). Cancer cells reactivate telomerase or use recombination-based **ALT** to bypass this limit.

### DNA damage and repair

| Pathway | Fixes | Defect → disease |
|---|---|---|
| Base excision repair (BER) | single damaged base | — |
| Nucleotide excision repair (NER) | bulky lesions, thymine dimers | Xeroderma pigmentosum |
| Mismatch repair (MMR) | replication mismatches | Lynch syndrome / HNPCC |
| Non-homologous end joining (NHEJ) | double-strand breaks, fast, error-prone, any cell-cycle phase | — |
| Homologous recombination (HR) | double-strand breaks, accurate, needs sister chromatid, S/G2 only | BRCA mutations → breast/ovarian cancer |

**The HR mechanism, since "mechanisms for DNA repair" covers how it actually works, not just that it exists:** a helicase/nuclease (RecBCD in bacteria) resects the break to a 3′ single-strand tail; RecA (Rad51 in eukaryotes) coats it and drives **strand invasion** into the homologous duplex; this creates a **Holliday junction** — a four-way DNA intermediate where two duplexes have swapped strands; **branch migration** (RuvAB) extends the exchanged region; **resolution** (RuvC) cuts the junction into either a non-crossover or crossover product. NHEJ skips this intermediate entirely — that's the structural reason HR needs a template and achieves accuracy, while NHEJ doesn't and is error-prone.

### Mutation classification and protein impact

**At the DNA level**: chromosomal rearrangements (deletions, duplications, inversions, translocations — see Mitosis/Meiosis section); point substitutions (**transition** = purine↔purine or pyrimidine↔pyrimidine; **transversion** = purine↔pyrimidine); indels.

**At the protein level**:

| Type | Effect |
|---|---|
| Silent | different codon, same amino acid (usually wobble position) |
| Missense | different amino acid — conservative (similar chemistry, often tolerated) or non-conservative (different chemistry, often damaging — sickle-cell, Glu→Val) |
| Nonsense | premature stop, truncated protein |
| Frameshift | indel not a multiple of 3, shifts everything downstream |

Worked sequence example, DNA coding strand 5′-ATG GAG CCT AAG TGA-3′ → mRNA AUG GAG CCU AAG UGA → protein Met-Glu-Pro-Lys-(stop). **Missense** (codon 2 GAG→GUG): Met-**Val**-Pro-Lys — non-conservative (acidic→hydrophobic), the same change as sickle-cell. **Frameshift** (delete the first G of codon 2): entirely different downstream sequence. **Nonsense** (codon 4 AAG→UAG via one substitution): Met-Glu-Pro-(stop). **Silent** (codon 4 AAG→AAA): still Lys, no change.

Method for any such problem: find the start codon, write the mRNA, translate to the first stop, apply the mutation and re-translate *from that point onward*, classify, and if asked for functional impact, reason from amino-acid chemistry or loss of the stop/frame.

---

## V. Prokaryotic Gene Expression and Regulation

### Central dogma and reverse transcription

DNA→RNA→Protein. The dogma's hard rule: information never flows from protein back to nucleic acid. **Reverse transcription** (RNA→DNA, via reverse transcriptase) is the named real exception — retroviruses use it, so does telomerase, so does the RT-PCR technique in the lab. Prokaryote-specific contrast: transcription and translation are coupled (same compartment, simultaneous); mRNA is often polycistronic (one mRNA, multiple genes = an operon); no 5′ cap, poly-A tail, or splicing.

### Transcription

Bacterial RNA polymerase = core enzyme (2α, β, β′, ω) + a **sigma factor** (recognizes the promoter, released once transcription starts) = holoenzyme. Synthesizes 5′→3′, reads template 3′→5′, needs no primer, has **no proofreading** (transcription tolerates more error than replication, since mRNA is transient). Mechanism: the growing RNA's 3′-OH attacks the incoming NTP's α-phosphate, forming a phosphodiester bond and releasing pyrophosphate.

Promoter: **−10 box (TATAAT)** and **−35 box (TTGACA)**, relative to the +1 start site. **Template strand** = what RNA pol reads; **coding strand** = same sequence as mRNA (T for U).

Three stages: initiation (holoenzyme binds promoter, unwinds it into the transcription bubble, σ releases) → elongation (core enzyme moves along, bubble travels with it) → termination, two bacterial mechanisms: **Rho-independent** (GC-rich hairpin + poly-U destabilizes the polymerase) or **Rho-dependent** (Rho helicase chases down and dislodges the polymerase).

### Cis/trans regulation: the *lac* and *trp* operons

**Cis-regulatory elements** sit on the same DNA molecule as the gene (promoters, operators, enhancers, silencers) — binding sites. **Trans-acting factors** are diffusible molecules encoded elsewhere that bind those sites (transcription factors, repressors, sigma factors). **Riboswitch**: a regulatory segment of the mRNA itself (cis, in the 5′ UTR) that binds a metabolite directly, no protein needed.

***lac* operon** (inducible, catabolic — on when lactose is present): lacZYA form one polycistronic mRNA; lacI (separate) makes the repressor. **Negative control**: repressor blocks the operator unless **allolactose** (the real inducer, not lactose itself) binds it and releases it. **Positive control**: low glucose → high cAMP → cAMP-CAP activates transcription by recruiting RNA pol.

| Lactose | Glucose | Result |
|---|---|---|
| − | + | OFF |
| − | − | OFF |
| + | + | very low |
| + | − | **fully ON** |

Mutant analysis: *lacI⁻* (no repressor) → constitutive. *lacI^s* (super-repressor, can't bind inducer) → permanently off. *O^c* (operator mutation) → constitutive, but **only in cis** — affects only the operon physically on that same DNA molecule.

**Partial diploids (merodiploid/F′)**, the classic question type: lacI is **trans**-acting, so an I⁺ copy anywhere represses both operons; the operator is **cis**-acting, affecting only its own operon; I^s is trans and dominant — represses everything, inducer or not.

| Genotype | −inducer | +inducer | Why |
|---|---|---|---|
| I⁺O⁺Z⁺ / (none) | off | on | wild type |
| I⁻O⁺Z⁺ / (none) | **on** | on | no repressor anywhere |
| I⁻Z⁺ / I⁺Z⁻ | off | on | I⁺ on F′ is trans, represses both |
| I⁺O^cZ⁺ / I⁺O⁺Z⁺ | partial | on | O^c is cis, only that copy is constitutive |
| I^sO⁺Z⁺ / I⁺O⁺Z⁺ | off | **off** | I^s is dominant and trans |

***trp* operon** (repressible, anabolic — off when tryptophan is plentiful): the repressor is inactive alone; **tryptophan is the corepressor** — when abundant, it activates the repressor to bind the operator and shut transcription off. **Attenuation**, a finer layer: a leader ORF has two adjacent Trp codons; because transcription/translation are coupled, ribosome speed (limited by Trp-tRNA availability) determines whether the mRNA folds into a terminator or antiterminator hairpin — high Trp → fast translation → terminator forms → transcription stops early; low Trp → ribosome stalls → antiterminator forms → transcription continues.

**Inducible vs. repressible** = default state (off vs. on). **Positive vs. negative control** = which direction the regulator pushes. These are independent axes; don't conflate them.

### Translation

Bacterial ribosome **70S = 30S (16S rRNA) + 50S (23S+5S rRNA)**. Peptidyl transferase is **23S rRNA itself** — a ribozyme. Sites **A (aminoacyl), P (peptidyl), E (exit)**. Genetic code: 64 codons, 61 sense + 3 stop, degenerate, unambiguous, nearly universal, read in non-overlapping triplets. **Start: AUG** (Met, fMet in bacteria). **Stops: UAA, UAG, UGA**. **Wobble** at the third codon position explains most degeneracy and why third-position mutations are often silent.

Three stages: **initiation** — 30S binds the **Shine-Dalgarno** sequence upstream of AUG (pairs with 16S rRNA); fMet-tRNA enters the P site; 50S joins. **IF3** prevents premature 50S joining and helps proofread the start codon match; **IF2** (GTPase) escorts fMet-tRNA to the P site; **IF1** blocks the A site early and stimulates IF2/IF3. **Elongation** — charged tRNA enters A site (EF-Tu, GTP); peptidyl transferase forms the bond; **translocation** (EF-G, GTP) shifts the ribosome one codon, A→P→E. **Termination** — stop codon enters A site, release factors (no tRNA) trigger hydrolysis and release.

### Protein secretion: Sec and Tat

| | Sec (general secretory) | Tat (twin-arginine) |
|---|---|---|
| Cargo folding state | **unfolded** | **folded** |
| Signal motif | N-terminal hydrophobic signal peptide | twin-arginine (S/T-R-R-x-F-L-K) motif |
| Energy source | **SecA ATPase** (+ proton-motive force) | **proton-motive force only** |
| Why | high-throughput default route | cargo that must fold around a cofactor (metal centers, FeS clusters) before export |

Memorize the three-way contrast as one set — questions tend to ask for all three at once.

---

## VI. Technology and Techniques

### PCR

Components: template DNA, two primers (~18–25 nt, flanking the target), **Taq polymerase** (thermostable, from *Thermus aquaticus*), dNTPs, Mg²⁺ buffer.

| Step | Temp | What happens |
|---|---|---|
| Denaturation | ~94–98°C | strands separate |
| Annealing | ~50–65°C, set by primer Tm | primers bind template |
| Extension | ~72°C | Taq extends 5′→3′ |

Copies after *n* cycles ≈ starting copies × 2ⁿ (exponential early, then plateaus as reagents deplete). What PCR actually answers: presence/absence of a sequence, quantity (qPCR — **Ct** is inversely related to starting amount), and identity/genotyping. It does **not** by itself give you the sequence — that needs Sanger or NGS.

### Sanger sequencing — how it differs from plain PCR

Uses **ddNTPs** (no 3′-OH) that terminate the chain wherever incorporated, producing a nested set of fragments of every length, each ending in a known fluorescent base.

| | Standard PCR | Sanger |
|---|---|---|
| Primers | two | **one** |
| Nucleotides | dNTPs only | dNTPs **+ ddNTPs** |
| Amplification | exponential | **linear** |
| Goal | make copies | **determine sequence** |

Readout via capillary electrophoresis; ~500–1000 bp reads, very high per-base accuracy. A **heterozygous** sample shows overlapping signals at one position (both alleles terminating there) — the standard tell for a het call.

### Illumina (NGS) vs. Nanopore (3rd-gen) — direct compare/contrast

| | Illumina | Nanopore |
|---|---|---|
| Mechanism | sequencing-by-synthesis, optical, reversible terminators | single molecule through a protein pore, ionic-current readout |
| Amplification | yes (clonal clusters) | no |
| Read length | short (~50–300 bp) | long (kb–Mb) |
| Accuracy | very high | lower per-read, improving |
| Best for | variant calling, RNA-seq, resequencing at scale | repeats, structural variants, full-length isoforms, direct methylation detection |

### Molecular cloning

Steps: amplify/excise the insert → cut vector and insert (restriction enzymes at palindromic sites, e.g. EcoRI at GAATTC — **sticky ends** anneal directionally, **blunt ends** ligate either way) → ligate with DNA ligase → transform into host cells → select (antibiotic resistance) and screen → express.

Plasmid features: **ori** (replication), **selectable marker** (antibiotic resistance), **MCS** (multiple cloning site), **promoter** (e.g. *lac*, induced by IPTG).

**Gibson assembly**: scarless, sequence-independent, one isothermal reaction — overlapping fragment ends (~20–40 bp), a 5′ exonuclease exposes single-strand overlaps, polymerase fills gaps, ligase seals. No restriction sites needed, joins multiple fragments at once.

**Blue-white screening**: vector carries lacZα; the MCS sits inside it, so an insert disrupts it. **Blue = no insert** (intact lacZα, functional β-gal, cleaves X-gal). **White = insert present** (disrupted lacZα, no β-gal) — pick white colonies.

### Genomic vs. cDNA libraries

Two different starting materials for the cloning workflow above, and the choice matters. A **genomic library** clones an organism's entire genomic DNA — introns, regulatory regions, everything, identical for every cell. A **cDNA library** reverse-transcribes mRNA into DNA, so it contains only expressed, already-spliced (intron-free) sequence, and differs by tissue and condition since it reflects what's actually being transcribed at the time the sample was taken. Need a gene's promoter, enhancers, or introns — to study regulation, or to build a knockout construct with the correct flanking sequence? Genomic; cDNA has already lost that information in splicing. Need a clean, intron-free coding sequence to express a eukaryotic protein in a prokaryotic host that can't splice (recombinant insulin is the standard example)? cDNA. Want to know which genes a tissue is actively expressing at a given moment? Also cDNA — building one is literally the first step of RNA-seq library prep (above), just historically used for cloning instead of sequencing.

### Bacterial gene transfer: transformation, transduction, conjugation

Not its own rules bullet, but transformation is literally step 4 of the cloning workflow above, and all three mechanisms are the classical answer to how a bacterium acquires DNA it wasn't born with.

**Transformation**: uptake of free DNA from the environment (Griffith's original phenomenon, see the Appendix); only "competent" cells take it up efficiently.

**Transduction**: DNA transferred by a bacteriophage, by mistake. **Generalized** transduction packages essentially any host gene at random; **specialized** transduction (from a phage that integrates as a prophage) packages only genes near the phage's integration site. Co-transduction frequency — how often two genes get packaged into the same phage particle together — maps genes that sit close together.

**Conjugation**: direct transfer through a pilus, requiring the F (fertility) plasmid. F⁺ × F⁻ transfers just the plasmid. In **Hfr** strains, the F factor has integrated into the chromosome, so conjugation drags chromosomal genes along with it in a time-ordered sequence — **interrupted mating** experiments exploit this directly: stop conjugation at successive time points, check which donor genes have made it across, and the order and timing genes arrive reconstructs their order on the chromosome (the classic *E. coli* map, calibrated in minutes rather than cM).

### Blotting and other detection/visualization techniques

**Southern, Northern, Western** (mnemonic: SNoW DRoP) share the same logic — separate by gel, transfer ("blot") to a membrane, detect something specific — but differ in what's loaded and what does the detecting. **Southern** = DNA, probed with a labeled complementary nucleic acid (the classic RFLP readout). **Northern** = RNA, same kind of nucleic-acid probe, used to ask whether one specific transcript is present and what size it is — can catch alternative splice variants as separate bands; RNA-seq has mostly replaced it for genome-wide questions, but Northern still answers the one-gene, give-me-a-size question directly. **Western** = protein, detected with a specific antibody rather than a nucleic-acid probe.

**ELISA** detects/quantifies a specific protein or antibody using an enzyme-linked antibody that converts a substrate into a measurable color signal proportional to how much target is present; common formats are direct, indirect, and sandwich (separate capture and detection antibodies).

**FISH** (fluorescence in situ hybridization) hybridizes a fluorescent probe to a specific sequence *in place*, on intact chromosomes or tissue, so you see *where* it is rather than just whether it's present — used to map a gene's chromosomal location, detect copy-number changes or deletions, and flag translocations (e.g. the BCR-ABL1 fusion from the Philadelphia chromosome translocation, the textbook reciprocal-translocation disease link, in chronic myelogenous leukemia).

### Knockouts, knockdowns, and gene-function tools

| | Knockout | Knockdown |
|---|---|---|
| Level | DNA (gene disrupted) | RNA (expression reduced) |
| Extent | complete | partial |
| Permanence | heritable | usually transient |
| If gene is essential | may be lethal — unstudyable | viable hypomorph — studyable |

**Complementation as confirmation**: reintroduce a wild-type copy; phenotype reversal confirms that gene (not an off-target hit) caused the effect — the same logic as the genetic complementation test, used experimentally here.

The four named techniques:

- **RNAi (knockdown)**: dsRNA → Dicer → siRNA → RISC/Argonaute finds and represses complementary mRNA. Transient, some off-target risk.
- **Homologous recombination / gene targeting (knockout)**: donor DNA with homology arms flanking a marker replaces the gene by HR — precise, low-efficiency, classic mouse-ES-cell method.
- **CRISPR-Cas9 (knockout or more)**: see below.
- **TALENs/ZFNs (knockout)**: engineered DNA-binding repeats fused to **FokI** nuclease; a pair brings two FokI domains together to cut, producing a DSB and NHEJ-driven indels. Protein-guided — re-engineer a protein per target.

CRISPR is **RNA**-guided (swap the guide RNA, not the protein) — the single difference that let it scale past ZFN/TALEN.

**CRISPR-Cas9 mechanism**: **crRNA** carries the ~20 nt guide; **tracrRNA** recruits Cas9; **sgRNA** is the engineered crRNA+tracrRNA fusion used in practice. **PAM** (NGG for SpCas9) sits 3′ of the target — required for binding, and the basis of self/non-self discrimination in bacteria. Cas9 is an endonuclease with two domains: **RuvC** (cuts non-target strand), **HNH** (cuts target strand), both Mg²⁺-dependent, producing a blunt DSB ~3 bp upstream of the PAM. A point mutation in *either* domain alone (D10A or H840A) gives a **nickase** (one strand only); *both* mutations give **dCas9** — catalytically dead but still DNA-binding, used for CRISPRa/i without cutting. One domain mutated does not equal fully dead — the usual trap.

**Cas12a contrast**: single RuvC domain (cuts both strands sequentially → staggered/sticky cuts, unlike Cas9's blunt cuts), crRNA only (no tracrRNA needed), T-rich PAM (5′-TTTV-3′) on the 5′ side, plus collateral ssDNA-cleavage activity once activated (the basis of DETECTR diagnostics).

### ChIP-seq, Hi-C, RNA-Seq (Nationals only)

All three couple a biological enrichment step to high-throughput sequencing, turning a molecular question into read-counting — recognizing that shared logic is faster than memorizing three separate procedures.

- **RNA-Seq**: RNA → cDNA → sequence → align → count reads per gene. Read count ∝ expression. Reveals expression levels, novel transcripts/isoforms, alternative splicing.
- **ChIP-seq**: crosslink protein to DNA → fragment → immunoprecipitate with an antibody against a specific protein/histone mark → sequence the bound DNA → map peaks. Reveals where a protein binds the genome.
- **Hi-C**: crosslink → digest → ligate spatially proximal fragments → sequence the chimeric junctions → build a contact map. Reveals 3D genome organization — loops, TADs, compartments.

---

## Appendix: Reference Material

### The genetic code

Read 5′→3′ on the mRNA. AUG = Met = start. UAA/UAG/UGA = stop ("U Are Annoying / U Are Gone / U Go Away"). Third position is often irrelevant (wobble) — most blocks in the C-column (Ser, Pro, Thr, Ala) are fully degenerate there. Leu, Ser, Arg each have 6 codons; Met and Trp have exactly one each.

### Amino acid property categories (for judging missense severity)

Nonpolar/hydrophobic (G, A, V, L, I, P, F, M, W — Pro kinks the backbone, Gly is tiny/flexible); polar uncharged (S, T, C, Y, N, Q — Cys forms disulfide bonds); acidic (D, E); basic (K, R, H). Conservative missense = within a category; non-conservative = across categories (Glu→Val in sickle-cell is the textbook case).

### Classic experiments — name the method, name the conclusion

- **Griffith (1928)** — transformation: heat-killed virulent + live avirulent bacteria → mice died; a "transforming principle" passed between them.
- **Avery-MacLeod-McCarty (1944)** — the transforming principle is DNA (destroying DNA, not protein/RNA, abolished transformation).
- **Hershey-Chase (1952)** — radiolabeled phage (³²P-DNA, ³⁵S-protein); only ³²P entered bacteria → DNA is the genetic material.
- **Meselson-Stahl (1958)** — ¹⁵N→¹⁴N density-gradient shift confirmed **semiconservative** replication.
- **Beadle-Tatum (1941)** — *Neurospora* mutants → "one gene, one enzyme."
- **Nirenberg-Matthaei (1961)** — poly-U mRNA → poly-Phe, cracked the first codon (UUU=Phe).

---

*A note on confidence: the worked numerical examples in this guide (three-point cross, Bayesian carrier risk, Hardy-Weinberg chi-square, the mutation-classification sequence example, the Haldane mapping-function correction) were re-derived from scratch during this rewrite and check out arithmetically. Named gene/disease pairings (LMX1B/Nail-Patella, BCR-ABL1/CML, etc.) match standard genetics knowledge but weren't individually re-verified against a primary source — confirm independently if a specific citation matters to you. A few sections added in this latest pass (maternal effect genes, bacterial gene transfer, blotting techniques, speciation) have a thinner connection to the rules' explicit topic list than the rest of the guide, flagged inline where relevant — they're standard material for this subject, just not individually named the way most of this guide is.*
