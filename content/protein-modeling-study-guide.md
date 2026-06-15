# Protein Modeling C — Part II (Written Exam) Study Guide
## DI-II_10 (PDB 2LV8) — Theory Reference, 2026 Season

> **Scope:** This guide covers ONLY the written-exam (Part II) theory content for Science Olympiad
> Protein Modeling C, built around DI-II_10 (Koga et al., *Nature* 2012, "Principles for designing
> ideal protein structures," PMC3705962). It does **not** cover the Part I physical-model build,
> and it does **not** contain practice questions/flashcards — it is written so that atomic facts,
> definitions, and tables can be pulled directly into your own Anki deck.
>
> **How to use this guide:** read Modules 1→4 in order (each builds on the last — especially
> Module 3's energy-landscape framing, which Module 4 depends on). Module 5 (JUDE/visualization)
> can be read alongside Modules 2–4 or on its own. Module 6 is **State/Nationals only**. Module 7
> and the Appendices are quick-reference/peripheral material.

### Table of Contents

- **Module 1 — Amino Acids: The Building Blocks** *(rules b.i, b.ii)*
- **Module 2 — Protein Structure Hierarchy** *(rule c.i)*
- **Module 3 — Forces, Interactions, and Folding Thermodynamics** *(rules b.i, b.ii, c.ii)*
- **Module 4 — ★ The Design Principles of DI-II_10 (Koga et al. 2012)** *(rule b.iii — every level)*
- **Module 5 — Molecular Visualization (JUDE/Jmol)** *(rules c.i, c.ii)*
- **Module 6 — Current State of De Novo Protein Design** *(rule b.iv — State/Nationals only)*
- **Module 7 — Supporting/Peripheral Topics**
- **Appendix A** — The 20 Amino Acids, One-Page Reference
- **Appendix B** — pKa and Charge Quick Table
- **Appendix C** — Secondary Structure Cheat Sheet
- **Appendix D** — The Koga Rules Card
- **Appendix E** — Layer/Design Scheme Card
- **Appendix F** — Methods Glossary
- **Appendix G** — De Novo Timeline + 2024 Nobel Card (State/Nationals)
- **Appendix H** — Glossary of Must-Know Terms

---

# MODULE 1 — AMINO ACIDS: THE BUILDING BLOCKS

> Covers rules b.i (chemistry of folding/stability) and b.ii (chemical properties of side chains).
> This is the single highest-yield module for raw factual recall. Everything downstream — secondary
> structure, folding forces, the Koga design rules, and the JUDE visualization tasks — is built on
> fluency with these twenty molecules. Master this module cold before moving on.

---

## 1.1 General Amino Acid Architecture

Every standard amino acid is built around a central **α-carbon (Cα)** bonded to four groups:

- An **amino group** (–NH₂)
- A **carboxyl group** (–COOH)
- A **hydrogen atom** (–H)
- A **variable side chain (R group)** — this is the only part that differs between the 20 amino acids, and it is what gives each amino acid its unique chemistry.

**Chirality.** The α-carbon is a stereocenter (four different groups attached) in every standard amino acid **except glycine**, whose R group is just a second hydrogen. Proteins are built almost exclusively from **L-amino acids** (the L/D designation refers to the spatial arrangement around the α-carbon, by analogy to L-glyceraldehyde). This single fact — that the backbone is built from one-handed (chiral) building blocks — is the ultimate physical origin of the **ββ, βα, and αβ design rules** covered in Module 4. Remember that link; it is a favorite "why" question.

**Zwitterion.** At physiological pH (~7.4), the amino group is protonated (–NH₃⁺) and the carboxyl group is deprotonated (–COO⁻), so a free amino acid carries both a positive and a negative charge simultaneously — a **zwitterion** — giving a net charge of zero (for amino acids with no ionizable side chain).

**Residue.** Once amino acids are joined into a chain, each unit is called a **residue**. The residue retains its side chain but has lost a water molecule's worth of atoms from its backbone (see 1.2).

---

## 1.2 The Peptide Bond

Amino acids are joined by **peptide bonds**, formed between the carboxyl carbon of one residue and the amino nitrogen of the next.

- **Formation:** condensation / **dehydration synthesis** — one water molecule is released per bond formed.
- **Breaking:** hydrolysis — one water molecule is consumed to break a peptide bond (this is how digestive proteases work).
- **Resonance / planarity:** the C–N peptide bond has significant **partial double-bond character** due to resonance with the adjacent carbonyl. This makes the peptide bond **planar and rigid** — there is essentially no rotation around it.
- **Trans vs. cis:** because of this planarity, the peptide bond exists in either a **trans** or **cis** configuration. **Trans is strongly favored** (>99.9% of peptide bonds) because it minimizes steric clash between adjacent side chains. The major exception is bonds **preceding proline (X-Pro)**, where cis occurs far more often (~5–30% depending on context) because proline's ring geometry reduces the energetic penalty of cis.
- **Directionality:** every polypeptide has a defined direction. The **N-terminus** (free α-amino group) is conventionally the start, and the **C-terminus** (free α-carboxyl group) is the end. Sequences are always written and read **N → C**.

**Backbone dihedral angles** (expanded fully in Module 2.2.4, but defined here as core vocabulary):

| Angle | Bond it rotates about | Typical value |
|---|---|---|
| **φ (phi)** | N–Cα bond | varies by secondary structure |
| **ψ (psi)** | Cα–C bond | varies by secondary structure |
| **ω (omega)** | C–N peptide bond itself | ≈ 180° (trans) |

Only φ and ψ are free to vary substantially residue-to-residue; ω is essentially locked near 180° (or near 0° for the rarer cis form). The (φ, ψ) pair for each residue is the single most important descriptor of local backbone conformation — this is the basis of the Ramachandran plot (Module 2.2.4).

---

## 1.3 ★★ The 20 Standard Amino Acids — Master Reference Table

This is the most important table in the entire guide. Every row below should become multiple flashcards: name↔3-letter code, name↔1-letter code, name↔side-chain class, name↔charge at pH 7, name↔3DMD color, name↔"special role."

**A note on the trickiest codes first**, because these are the ones competitors lose points on:

- **W** = Tryptophan, **Y** = Tyrosine, **F** = Phenylalanine — the three aromatics don't share their first letter (W and Y especially look arbitrary; W is used because "Trp" looks like a "W" shape in some mnemonics, and Y was already free).
- **R** = Arginine (Arg starts with A, which is taken by Alanine, so Arg uses **R** for "aRginine").
- **K** = Lysine ("K" is the letter right before L, used because L is taken by Leucine).
- **Q** = Glutamine, **E** = Glutamate, **N** = Asparagine, **D** = Aspartate — these four are the two **acid/amide pairs** and are the single most commonly confused set on any biochem exam:
  - **D (Asp, aspartate)** = acidic, carboxylic acid side chain.
  - **N (Asn, asparagine)** = the **amide** of aspartate — same backbone shape, –COOH replaced by –C(=O)NH₂. Polar, uncharged.
  - **E (Glu, glutamate)** = acidic, one carbon longer than Asp.
  - **Q (Gln, glutamine)** = the **amide** of glutamate. Polar, uncharged.
  - Mnemonic: think "**D**eath and **N**ews are different but related" / "as**N** vs as**D**, glutami**N**e vs glutamat**E**" — the amides (N, Q) end in vowel sounds suggesting "neutral."
- **H** = Histidine — uses its own first letter (no conflict).
- All others (A, C, G, I, L, M, P, S, T, V) use their own first letter: Alanine, Cysteine, Glycine, Isoleucine, Leucine, Methionine, Proline, Serine, Threonine, Valine.

### Master Table (organized by chemical class for learnability)

**NONPOLAR / ALIPHATIC**

| Name | 3-letter | 1-letter | Side chain (brief) | Charge @ pH 7 | 3DMD/JUDE color | Special notes |
|---|---|---|---|---|---|---|
| Glycine | Gly | G | –H (no real side chain) | neutral | white (hydrophilic, by 3DMD's grouping — see 1.5) | **Only achiral standard AA**; smallest; maximal backbone flexibility; abundant in turns/loops |
| Alanine | Ala | A | –CH₃ | neutral | yellow | Small, simple methyl group; strong helix-former among small residues |
| Valine | Val | V | –CH(CH₃)₂ | neutral | yellow | β-branched; common in β-strands and hydrophobic cores |
| Leucine | Leu | L | –CH₂CH(CH₃)₂ | neutral | yellow | **Most abundant AA in proteins**; favored in cores |
| Isoleucine | Ile | I | –CH(CH₃)CH₂CH₃ | neutral | yellow | β-branched like Val; favored in cores |
| Proline | Pro | P | Ring bonds back to backbone N (pyrrolidine) | neutral | yellow | Secondary amine ("imino acid"); rigid; helix/strand breaker; see 1.7 |

**AROMATIC**

| Name | 3-letter | 1-letter | Side chain (brief) | Charge @ pH 7 | 3DMD/JUDE color | Special notes |
|---|---|---|---|---|---|---|
| Phenylalanine | Phe | F | Benzyl group (–CH₂–C₆H₅) | neutral | yellow | Large, purely hydrophobic aromatic; favored in cores |
| Tyrosine | Tyr | Y | Phenol (–CH₂–C₆H₄–OH) | neutral (pKa ≈ 10.1) | **gradient between yellow & white** — 3DMD notes it sits on the boundary | Aromatic + H-bonding –OH; contributes to UV absorbance at 280 nm; common phosphorylation site |
| Tryptophan | Trp | W | Indole ring | neutral | yellow | **Largest standard AA**; biggest single contributor to 280 nm UV absorbance |
| Histidine | His | H | Imidazole ring | mostly neutral (pKa ≈ 6.0, partially protonated near physiological pH) | **white** (3DMD classifies His as hydrophilic/polar, *not* "basic" — see 1.7) | Aromatic + ionizable near physiological pH; classic catalytic and metal-binding residue |

**POLAR, UNCHARGED (HYDROXYL & AMIDE)**

| Name | 3-letter | 1-letter | Side chain (brief) | Charge @ pH 7 | 3DMD/JUDE color | Special notes |
|---|---|---|---|---|---|---|
| Serine | Ser | S | –CH₂–OH | neutral | white | Small hydroxyl; common helix N-cap residue; nucleophile in many enzyme active sites |
| Threonine | Thr | T | –CH(OH)–CH₃ | neutral | white | β-branched hydroxyl; helix N-cap residue |
| Asparagine | Asn | N | –CH₂–C(=O)NH₂ | neutral | white | Amide of Asp; common in turns; N-cap residue |
| Glutamine | Gln | Q | –CH₂CH₂–C(=O)NH₂ | neutral | white | Amide of Glu |

**SULFUR-CONTAINING**

| Name | 3-letter | 1-letter | Side chain (brief) | Charge @ pH 7 | 3DMD/JUDE color | Special notes |
|---|---|---|---|---|---|---|
| Cysteine | Cys | C | –CH₂–SH (thiol) | neutral (pKa ≈ 8.3, mostly protonated) | **green** (its own category — see 1.5 & 1.7) | Only standard AA that forms **disulfide bonds**; redox-sensitive |
| Methionine | Met | M | –CH₂CH₂–S–CH₃ (thioether) | neutral | yellow | The **start codon (AUG)** amino acid; hydrophobic; cannot form disulfides |

**ACIDIC (NEGATIVELY CHARGED)**

| Name | 3-letter | 1-letter | Side chain (brief) | Charge @ pH 7 | 3DMD/JUDE color | Special notes |
|---|---|---|---|---|---|---|
| Aspartate (aspartic acid) | Asp | D | –CH₂–COOH | **negative (–1)** (pKa ≈ 3.9) | red | Common in salt bridges, metal coordination, catalysis |
| Glutamate (glutamic acid) | Glu | E | –CH₂CH₂–COOH | **negative (–1)** (pKa ≈ 4.1) | red | One carbon longer than Asp; also a neurotransmitter outside of proteins |

**BASIC (POSITIVELY CHARGED)**

| Name | 3-letter | 1-letter | Side chain (brief) | Charge @ pH 7 | 3DMD/JUDE color | Special notes |
|---|---|---|---|---|---|---|
| Lysine | Lys | K | –(CH₂)₄–NH₂ | **positive (+1)** (pKa ≈ 10.5) | blue | Long flexible chain ending in primary amine; common surface residue, salt bridges |
| Arginine | Arg | R | –(CH₂)₃–NH–C(=NH)–NH₂ (guanidinium) | **positive (+1)** (pKa ≈ 12.5) | blue | **Most basic standard amino acid**; guanidinium group can form multiple H-bonds/salt bridges at once |

**Tally check:** 6 nonpolar/aliphatic + 4 aromatic + 4 polar-uncharged + 2 sulfur + 2 acidic + 2 basic = **20**. ✓

---

## 1.4 Classification Schemes — Learn All of Them

The exam may phrase a question using *any* of several overlapping classification systems. Know how to sort the 20 amino acids under each lens:

- **Nonpolar / hydrophobic:** Ala, Val, Leu, Ile, Pro, Phe, Met, Trp (Gly and Tyr sit on borderlines depending on the source — see 1.5).
- **Polar, uncharged:** Ser, Thr, Cys, Tyr, Asn, Gln, Gly, His (again, scheme-dependent placement of Gly/Tyr/His).
- **Acidic (negatively charged at pH 7):** Asp, Glu.
- **Basic (positively charged at pH 7, in the *general biochemistry* sense):** Lys, Arg, His. **Caution:** the 3DMD/JUDE color scheme used by this event puts **His in the "hydrophilic/white" bucket**, not "basic/blue" — see 1.5. Know both conventions and which one a question is using.
- **Aromatic:** Phe, Tyr, Trp, (His — has an aromatic imidazole ring, sometimes included).
- **Aliphatic:** Ala, Val, Leu, Ile (Gly and Pro are sometimes included).
- **Hydroxyl-bearing:** Ser, Thr, Tyr.
- **Sulfur-bearing:** Cys, Met.
- **Amide-bearing:** Asn, Gln.
- **Branched-chain (β-branched at Cβ):** Val, Leu, Ile (technically Leu is γ-branched, but it's grouped with the "branched-chain amino acids" / BCAAs along with Val and Ile in nutrition contexts).

**Key takeaway for flashcards:** don't memorize *one* list — memorize the 20 amino acids themselves cold, then be able to *sort* them on demand into whichever bucket a question asks for.

---

## 1.5 ★★ The 3DMD / JUDE Side-Chain Color Convention

This is **direct testable chemistry pulled from the event's own rules** (Event Parameters 3.e of the Part I rules), and it is the color scheme used both in the physical model and in JUDE's residue-property displays. The rules state it exactly as:

- **Hydrophobic side chains → yellow**
- **Hydrophilic side chains → white**
- **Acidic side chains → red**
- **Basic side chains → blue**
- **Cysteine → green** (its own category, called out separately because of its disulfide-forming role)

This is the **same five-category scheme used in 3D Molecular Designs' "Amino Acid Starter Kit"** (the kit this event's sponsor produces), which explicitly groups all 20 amino acids into exactly these five buckets: hydrophobic (nonpolar), hydrophilic (polar), negatively charged, positively charged, and cysteine.

**Two facts in this scheme that diverge from "default" biochemistry classifications — both are excellent, high-value flashcards precisely *because* they're counterintuitive:**

1. **Histidine is colored WHITE (hydrophilic/polar), not blue (basic)**, in this scheme — even though many general biochemistry texts group His with the "basic" amino acids. The 3DMD materials explicitly describe His as "normally hydrophilic and uncharged" with the caveat that **at pH ≈ 6 it becomes positively charged like Lys/Arg**. So: *default state → white/hydrophilic; protonated state → behaves like a basic residue.*
2. **Tyrosine sits on the yellow/white gradient** — 3DMD explicitly notes there isn't a sharp boundary, and Tyr is the amino acid positioned right on it. If asked to pick one color, lean toward recognizing that Tyr's aromatic ring is hydrophobic but its phenolic –OH is polar, so it is **legitimately borderline** — don't be surprised by either color on an exam key, but be ready to *justify* either answer with the ring-vs-hydroxyl reasoning.

**Full color assignment (20 amino acids → 5 colors), consistent with the rules' wording:**

| Color | Category | Amino acids |
|---|---|---|
| **Yellow** | Hydrophobic | Ala, Val, Leu, Ile, Met, Phe, Trp, Pro |
| **White** | Hydrophilic (polar, uncharged) | Gly, Ser, Thr, Asn, Gln, His, (Tyr — borderline) |
| **Red** | Acidic | Asp, Glu |
| **Blue** | Basic | Lys, Arg |
| **Green** | Cysteine | Cys |

Why this matters beyond Part I: JUDE can color-code a structure by residue property, and the written exam's molecular-visualization questions (Module 5) may ask you to predict or interpret that coloring, or to reason about *where* a colored residue should sit (core vs. surface — see 1.8 and Module 4.7).

---

## 1.6 ★★ Ionizable Side Chains and pKa

A **pKa** is the pH at which a given ionizable group is 50% protonated and 50% deprotonated. Below the pKa, the group is predominantly in its **protonated** form; above the pKa, predominantly **deprotonated**. This single rule lets you predict the charge state of any group at any pH (Henderson–Hasselbalch reasoning).

**Approximate standard pKa values** (these vary slightly with local environment in a real protein — that variability is *exactly* what Module 5.4's "chemical environment" questions probe):

| Group | Approx. pKa | Protonated form charge | Deprotonated form charge |
|---|---|---|---|
| C-terminal α-carboxyl (–COOH) | ≈ 3.1 | neutral (–COOH) | **negative** (–COO⁻) |
| Aspartate side chain | ≈ 3.9 | neutral (–COOH) | **negative** (–COO⁻) |
| Glutamate side chain | ≈ 4.1 | neutral (–COOH) | **negative** (–COO⁻) |
| Histidine side chain (imidazole) | ≈ 6.0 | **positive** (imidazolium) | neutral (imidazole) |
| Cysteine side chain (thiol) | ≈ 8.3 | neutral (–SH) | negative (–S⁻) |
| N-terminal α-amino (–NH₃⁺) | ≈ 9.0 | **positive** (–NH₃⁺) | neutral (–NH₂) |
| Tyrosine side chain (phenol) | ≈ 10.1 | neutral (–OH) | negative (–O⁻) |
| Lysine side chain (amine) | ≈ 10.5 | **positive** (–NH₃⁺) | neutral (–NH₂) |
| Arginine side chain (guanidinium) | ≈ 12.5 | **positive** (guanidinium⁺) | neutral |

**Reading the table at pH 7 (the value used for "charge @ pH 7" in Table 1.3):**
- Asp, Glu (pKa ~4) → pH 7 is *above* their pKa → predominantly **deprotonated → negative**.
- His (pKa ~6) → pH 7 is *slightly above* its pKa → predominantly neutral, but a non-trivial fraction (~10%) remains protonated/positive — this is why His is uniquely useful as a "pH-sensitive switch" in enzymes.
- Cys (pKa ~8.3), Tyr (pKa ~10.1), Lys (pKa ~10.5), Arg (pKa ~12.5) → pH 7 is *below* all of these → Cys and Tyr stay neutral; Lys and Arg stay **protonated → positive**.

**The isoelectric point (pI)** is the pH at which a molecule's *net* charge is zero. For a protein, pI depends on the balance of all its acidic and basic residues; proteins are least soluble near their pI (relevant to purification, e.g., the protein purification methods in Module 3.6).

---

## 1.7 ★★ The "Special Four" — Deep Dives

These four amino acids account for a disproportionate share of short-answer questions because each breaks a "normal" rule in a distinctive, testable way.

### Glycine (Gly, G)
- The **only standard amino acid with no stereocenter** — its side chain is a single H, so the α-carbon has two identical substituents (H and H) and is **achiral**.
- This gives Gly **far more conformational freedom** than any other residue — it can adopt backbone (φ, ψ) angles that would cause steric clashes for any other amino acid, including some that are otherwise only accessible to **left-handed (D-like) conformations**.
- Consequence: Gly is enriched in **tight turns and loops**, especially the tightest turns (e.g., positions where the chain must reverse direction sharply).
- **Design tie-in (Module 4.7):** in the Koga layer-design scheme, **Gly is allowed only in loops** (in any layer — core, boundary, or surface) — precisely *because* of this special flexibility, not because of its chemistry (it has essentially no chemistry to speak of).

### Proline (Pro, P)
- Technically a **secondary amine** (sometimes called an "imino acid") rather than a primary amine — its side chain loops back and bonds to the backbone nitrogen, forming a five-membered ring.
- Consequences of the ring:
  - **The φ angle is locked** at approximately –60°, drastically restricting backbone conformations.
  - **The backbone nitrogen has no hydrogen to donate** for an N–H···O=C hydrogen bond — proline can accept but cannot donate a backbone H-bond.
  - Because of the ring's rigidity, proline is more tolerant of the **cis** peptide-bond configuration than any other residue (see 1.2).
- Net effect: proline is a **helix and strand "breaker"** — it disrupts the regular H-bonding pattern of both α-helices and β-strands and is therefore concentrated in **turns and loops**, and very commonly at the **N-terminal cap of helices** (where its lack of a donor H-bond is "free," since that position's backbone N–H wouldn't be satisfied by the helix's i→i+4 pattern anyway).
- **Design tie-in (Module 4.7):** Pro is allowed **in loops and at the start of helices/strands** in the Koga design scheme — directly reflecting this chemistry.

### Cysteine (Cys, C)
- Side chain is a **thiol (–SH)**, the only side-chain functional group capable of forming a **covalent crosslink** with another copy of itself: a **disulfide bond (–S–S–)**, via oxidation of two thiols.
- Disulfide bonds are the **only common covalent (as opposed to non-covalent) contributor to tertiary/quaternary structure** — contrast this with all the *non*-covalent forces in Module 3.
- **Redox-sensitive:** disulfide formation/breakage depends on the local redox environment (oxidizing extracellular space vs. reducing cytoplasm — disulfides are far more common in secreted/extracellular proteins).
- Cysteine's thiol also makes it an excellent **metal ligand** (e.g., zinc fingers, iron-sulfur clusters).
- Given its own color (green) precisely because its role — covalent crosslinking — is categorically different from "just hydrophobic" or "just polar."

### Histidine (His, H)
- Side chain is an **imidazole ring** — simultaneously **aromatic** and **ionizable near physiological pH** (pKa ≈ 6.0, see 1.6).
- This dual nature makes His the most chemically versatile of the 20: it can act as a **general acid or general base** in the same active site depending on its local environment, which is why it appears so often in **enzyme catalytic mechanisms** (e.g., catalytic triads).
- Also an excellent **metal-coordinating residue** (e.g., many zinc- and iron-binding sites use 2–3 His side chains).
- Per the 3DMD/JUDE convention (1.5), His's *default* color is **white (hydrophilic/uncharged)**; its conditional positive charge below pH ~6 is the "asterisk" that makes it special.

---

## 1.8 Hydrophobicity and the Core/Surface Logic — Bridge to Modules 3 & 4

The single organizing principle that connects amino-acid chemistry to 3D structure is simple to state and endlessly testable in its applications:

> **Hydrophobic (nonpolar) side chains tend to bury themselves away from water, in the interior ("core") of a folded protein. Polar and charged side chains tend to remain in contact with water, on the protein's surface.**

This is not an absolute rule (proteins have hydrophobic surface patches for binding, and polar residues *do* exist buried when they're doing catalytic or structural work), but it is the dominant statistical tendency, and it is the physical basis for:

- The **hydrophobic effect** as the dominant driving force of folding (Module 3.1).
- The **core / boundary / surface "layer" scheme** used to design DI-II_10's sequence (Module 4.7) — where each position in the designed protein is assigned to a layer based on how buried it is, and only certain amino acids (by class) are permitted in each layer.
- **JUDE visualization tasks** (Module 5.4) — when asked whether a given residue is buried or exposed, your first heuristic should be "what class of amino acid is it, and does its position match the expectation?"

A formal **hydrophobicity scale** (e.g., the Kyte–Doolittle scale) ranks all 20 amino acids on a continuous numeric axis of "how much does this side chain prefer a nonpolar environment over water" — useful to know *exists* even if you don't memorize the numbers, because it's the rigorous version of the yellow/white/red/blue/green color buckets in 1.5.

---

## MODULE 1 — QUICK-REFERENCE SUMMARY (for flashcard mining)

- 20 standard amino acids, each with a unique R group attached to a common α-carbon/amino/carboxyl backbone.
- All chiral except **Gly**; all **L-configuration**.
- Peptide bonds: condensation (lose H₂O) to form, hydrolysis to break; **planar, rigid, trans-preferred** (except X-Pro).
- φ/ψ/ω dihedral angles describe backbone conformation; ω ≈ 180° (trans).
- **D/N and E/Q** are the acid/amide pairs — the most commonly confused codes.
- 3DMD/JUDE color code: **yellow = hydrophobic, white = hydrophilic, red = acidic, blue = basic, green = Cys**; note **His = white** and **Tyr = borderline** as the two "gotcha" assignments.
- pKa values define charge state at a given pH; **Asp/Glu negative**, **Lys/Arg positive**, **His ~10% positive at pH 7**, Cys/Tyr neutral at pH 7.
- **Gly** = only achiral AA, max flexibility, loops only.
- **Pro** = rigid ring, no backbone N–H donor, helix/strand breaker, loops & helix N-caps.
- **Cys** = only disulfide-former, redox-sensitive, green.
- **His** = aromatic + near-physiological pKa, catalytic/metal-binding workhorse, white by JUDE convention.
- Hydrophobic-in / polar-out is the master heuristic linking chemistry to 3D structure.
# MODULE 2 — PROTEIN STRUCTURE HIERARCHY

> Covers rule c.i (identify secondary-structure elements and the specific amino acids found in
> them) and supports b.i. This module is the geometric vocabulary that Module 4's design rules
> are written in — every term defined here (ββ-unit, βα-unit, hairpin, parallel/antiparallel,
> chirality) reappears as load-bearing vocabulary in the Koga rules. Learn the geometry numbers
> cold; they are easy, discrete, and frequently tested.

---

## 2.1 The Four Levels of Structure

| Level | Definition | Primary stabilizing interaction(s) |
|---|---|---|
| **Primary** | The linear sequence of amino acids, joined by peptide bonds | Covalent peptide bonds |
| **Secondary** | Local, regular, repeating backbone conformations (α-helices, β-sheets, turns) | Backbone hydrogen bonds (regular N–H···O=C patterns) |
| **Tertiary** | The overall 3D fold of a single polypeptide chain | Side-chain interactions: hydrophobic packing, H-bonds, salt bridges, disulfides, van der Waals |
| **Quaternary** | The arrangement of multiple polypeptide chains (subunits) into a complex | Same non-covalent forces as tertiary, but *between* chains |

**Anfinsen's thermodynamic hypothesis:** the amino-acid sequence (primary structure) contains all the information needed to specify the protein's native 3D structure — i.e., **the native fold is the global free-energy minimum accessible to that sequence** under physiological conditions. This is the conceptual foundation for *everything* in Module 4: if you can write down rules that make a sequence's local and non-local interactions consistently point toward one structure, you can design that structure from scratch.

**The experiment behind the hypothesis (high-value historical anchor):** Christian Anfinsen's classic experiments (early 1960s) used the enzyme **ribonuclease A (RNase A)**. He **fully unfolded (denatured) RNase A** using a chemical denaturant plus a reducing agent (which breaks its disulfide bonds), destroying all enzymatic activity — and then showed that simply **removing the denaturant and reducing agent allowed the protein to spontaneously refold (renature)** back into its correct 3D structure, **re-forming the correct disulfide bonds** and **fully regaining enzymatic activity**, with **no additional cellular machinery required**. This demonstrated that the *sequence alone* was sufficient to specify the fold — **renaturation is the experimental proof of the Anfinsen hypothesis**. Anfinsen was awarded a share of the **1972 Nobel Prize in Chemistry** for this work (shared with Stanford Moore and William Stein, who were recognized for related work on ribonuclease's structure-function relationship). Note the nice contrast/parallel for Module 6: **1972 Nobel → folding is sequence-determined; 2024 Nobel → we can now predict (AlphaFold) and design (Rosetta/Baker) that sequence↔structure relationship computationally.**

**DI-II_10 is monomeric** — it has *no* quaternary structure. The Koga design protocol specifically includes **negative design against oligomerization** (Module 4.8), so "this protein has no quaternary structure, by design" is itself a testable, exam-relevant fact, not just an omission.

---

## 2.2 ★★ Secondary Structure In Depth

Secondary structure arises because the **peptide backbone's repeating N–H and C=O groups can hydrogen-bond to each other** in regular, periodic patterns. The two dominant patterns — the α-helix and the β-sheet — were both predicted by Linus Pauling and Robert Corey before they were observed experimentally, based purely on geometric reasoning about the planar peptide bond. Know that this is fundamentally a **backbone phenomenon**: secondary structure is determined by the φ/ψ angles and H-bonding pattern, largely independent of which specific side chains are present (this independence is *exactly* what makes the Koga rules sequence-independent — Module 4.3).

### 2.2.1 The α-Helix

| Property | Value |
|---|---|
| Residues per turn | **3.6** |
| Rise per residue (translation along axis) | **≈ 1.5 Å** |
| Pitch (rise per full turn) | **≈ 5.4 Å** (= 3.6 × 1.5) |
| Handedness | **Right-handed** (in natural proteins) |
| H-bond pattern | Backbone **C=O of residue *i*** hydrogen-bonds to backbone **N–H of residue *i+4*** |
| Side-chain orientation | Point **outward**, radiating away from the helix axis |

**Why "i to i+4":** the carbonyl oxygen of one residue and the amide hydrogen four residues down the chain end up positioned almost directly above/below each other once the chain coils with ~3.6 residues/turn — each H-bond closes a ring of 13 atoms (hence α-helices are sometimes called "3.6₁₃ helices").

**Helix dipole.** Because every backbone C=O and N–H points roughly along the helix axis and all the H-bonds run the same direction, the helix as a whole behaves like it has a **partial positive charge concentrated at the N-terminus** and a **partial negative charge at the C-terminus**. Consequences:
- Negatively charged residues (Asp, Glu) are statistically favored near the **N-terminus** of helices; positively charged residues (Lys, Arg) near the **C-terminus** — they stabilize the dipole.
- The first few and last few residues of a helix have **"dangling" backbone H-bond donors/acceptors** that aren't satisfied by the i→i+4 pattern (because there's no i−4 or i+4 partner near the ends). These are satisfied by **capping interactions** — e.g., a side-chain hydroxyl or amide from a residue just before the helix (the **N-cap**) hydrogen-bonds to the first turn's backbone. This is precisely why the Koga design rules require the **loop residue immediately before a helix to be Asp, Asn, Ser, or Thr (Module 4.7)** — all four have side-chain groups that can make this capping H-bond.

**Helix variants (name + contrast — easy MC fodder):**
- **3₁₀-helix:** H-bond pattern is **i → i+3** (tighter, narrower helix than the α-helix). Often appears as a short cap at the end of α-helices.
- **π-helix:** H-bond pattern is **i → i+5** (wider, looser than the α-helix). Rare; often appears as a brief local distortion within a longer α-helix.
- The α-helix (i→i+4) is the overwhelmingly dominant form; 3₁₀ and π helices are usually short, local features rather than entire elements.

### 2.2.1a ★ Helix Packing Periodicity (Amphipathic Helices) — Bridge to c.ii

In an α/β protein like DI-II_10, helices typically pack against **one face** of the β-sheet, leaving their opposite face exposed to solvent. Because the helix has **~3.6 residues per turn**, side chains roughly **3–4 residues apart** (i.e., i, i+3, i+4, i+7...) end up pointing toward **the same face** of the helix. The practical consequence:

> A helix packing against a hydrophobic core will tend to show a **periodic pattern of hydrophobic residues spaced ~3–4 apart** (the core-facing face) **alternating with more polar/charged residues** on the solvent-facing side — an **amphipathic helix**. Plotted around a circle in projection (a "helical wheel"), this pattern segregates into a hydrophobic arc and a polar arc.

This is a directly useful tool for **Module 5.4 (c.ii)**: if you're asked *why* a particular residue on one of DI-II_10's helices is buried (or exposed), one good first move is to check the residues ~3–4 positions away in sequence — if *they* are also hydrophobic (or also polar), that's consistent with this helix being amphipathic and packing against the sheet along that periodic pattern, directly tying the **core/boundary/surface layer scheme (Module 4.7)** to a visible sequence-level pattern you can spot in JUDE.

### 2.2.2 The β-Strand and β-Sheet

A single **β-strand** is a nearly fully **extended** backbone conformation (as extended as the geometry of the peptide bond allows). Unlike the α-helix, a lone β-strand has **no internal H-bonds** — its backbone H-bond donors/acceptors are all "unsatisfied" until the strand pairs side-by-side with another strand to form a **β-sheet**.

- **H-bonds in a β-sheet form *between* adjacent strands**, not within a single strand — this is the single most commonly tested contrast with the α-helix.
- **Pleating:** because the backbone is extended but not flat, successive side chains alternate pointing to **opposite faces** of the sheet (up, down, up, down...) — this alternation is called **pleating**, and its handedness (which residues point "up" vs "down") is exactly what the Koga **ββ-rule chirality (L vs R)** is describing (Module 4.4).
- **Sheet twist:** real β-sheets are not flat — they have a slight **right-handed twist**.

**Parallel vs. antiparallel** (high-yield distinction):

| | Parallel β-sheet | Antiparallel β-sheet |
|---|---|---|
| Strand directions | All strands run the **same** N→C direction | Adjacent strands run in **opposite** N→C directions |
| H-bond geometry | H-bonds are **angled** (not perpendicular to the strands) — slightly less linear/optimal | H-bonds are **straighter** (closer to perpendicular) — generally considered the geometrically "cleaner," somewhat more stable arrangement |
| Typical loop length between strands | Often longer (the chain has to travel further to come back the same direction) | Can be very short (a tight **β-hairpin**, see below) |

**Edge strands vs. central strands.** In a multi-stranded sheet, the strands on the outer edges have one face exposed to solvent on *both* sides in a sense (they H-bond to only one neighbor instead of two). Edge strands are a common site of **aggregation** in natural proteins (one unsatisfied edge can recruit another protein's edge strand). This is exactly why the Koga **negative design** strategy places **inward-pointing polar/charged residues on edge strands** (Module 4.8) — to make that edge "unattractive" to a potential aggregation partner.

### 2.2.3 Turns and Loops

- **β-turn (β-hairpin turn):** a tight reversal of chain direction, typically spanning about **4 residues**, that connects two antiparallel strands into a **β-hairpin**.
  - **Type I turn** and **Type II turn** are the two most common classifications, differing in the backbone (φ, ψ) angles at the central two residues. A defining feature commonly cited for the **Type II turn** is a **glycine at the third position** (the residue often needs Gly's extra flexibility to accommodate the required backbone angles).
- **Gly and Pro are statistically enriched in turns** — Gly for its flexibility (1.7), Pro for its rigidity that "pre-organizes" part of the turn and because its lack of a backbone N–H donor is less costly outside of regular secondary structure.
- **A β-hairpin = two antiparallel β-strands connected directly by a short turn/loop.** This is the simplest possible **ββ-unit**, and is the structural object the Koga **ββ-rule** governs directly (Module 4.4) — the loop length between the two strands determines whether the hairpin is **left-handed (L)** or **right-handed (R)**.
- **Loops** (as distinct from "turns") is the more general term for any non-repetitive connecting segment; the Koga design philosophy explicitly favors **"minimal loops"** as part of what makes a structure "ideal" (Module 4.1) — shorter, simpler connections reduce the number of competing conformations the chain could explore.

### 2.2.4 ★★ The Ramachandran Plot

The **Ramachandran plot** graphs every residue's backbone conformation as a point at coordinates **(φ, ψ)** — φ on the x-axis, ψ on the y-axis (both ranging from –180° to +180°). Because most (φ, ψ) combinations would cause the backbone or side chains to physically collide with each other, only certain regions are "allowed," and those allowed regions correspond directly to secondary structure types:

| Region | Approximate (φ, ψ) | Corresponds to |
|---|---|---|
| **Lower-left ("α" region)** | roughly φ ≈ –60°, ψ ≈ –45° | **Right-handed α-helix** (the dominant, most heavily populated region for non-Gly, non-Pro residues) |
| **Upper-left ("β" region)** | roughly φ ≈ –120°, ψ ≈ +120° | **β-strand / extended conformation** |
| **Upper-right (small island, "left-handed α")** | roughly φ ≈ +60°, ψ ≈ +45° | **Left-handed α-helix** — a real but rare conformation, accessible mainly to **glycine** because other residues' side chains would clash here |

**Special cases:**
- **Glycine** has no side chain to clash with anything, so it can populate **much broader regions** of the plot than any other residue, including the left-handed-helix island and other "forbidden" zones — this is the structural manifestation of the achirality/flexibility discussed in 1.7.
- **Proline's** ring locks **φ ≈ –60°** regardless of everything else, so proline only ever appears in a narrow vertical band of the plot.
- The plot assumes **ω ≈ 180° (trans)** — a separate, third dihedral not shown on the standard 2D Ramachandran plot.

A typical exam item: given a (φ, ψ) coordinate or a labeled region of a Ramachandran plot, identify the secondary structure (or vice versa); or, given that a residue is Gly/Pro, predict where it's likely to fall.

---

## 2.3 Tertiary Structure and Supersecondary (Motif) Vocabulary

**Tertiary structure** is the full 3D arrangement of one polypeptide chain — how its helices, strands, and loops pack together in space. The driving organizational principle is the **hydrophobic core / polar surface** pattern (Module 1.8), refined by all the specific non-covalent forces in Module 3.

Between "secondary structure element" and "whole tertiary fold" sits a crucial intermediate scale: **supersecondary structure**, also called **motifs**. These are small, recurring combinations of 2–3 secondary-structure elements that pack together in characteristic, recognizable ways. **This is the exact scale at which the Koga design rules operate** — define these terms here so Module 4 reads fluently:

- **β-hairpin (a "ββ-unit"):** two adjacent antiparallel β-strands connected by a short turn (2.2.3). The simplest motif.
- **βα-unit / αβ-unit:** a β-strand adjacent in sequence to an α-helix (in that order = βα; in the reverse order = αβ), where the helix packs against the face of the strand/sheet. The relative orientation is described as **parallel (P)** or **antiparallel (A)** (defined precisely in Module 4.4).
- **βαβ-unit (a "Rossmann-like" or "Rossmann fold" motif):** a strand–helix–strand sandwich, in which both strands are typically part of the same sheet and the helix packs against one face of that sheet, often connecting two **parallel** strands with a **right-handed crossover**. This is the motif family relevant to **Fold-II / Rossmann2×2 / DI-II_10** (Module 4.9).
- **ββα-unit / αββ-unit:** three consecutive elements where two strands and one helix combine; governed by the Koga **emergent rules** (Module 4.5), which build on the fundamental ββ/βα/αβ rules.
- **Helix-turn-helix:** two helices connected by a short loop, common in DNA-binding proteins (peripheral / functional context, Module 7).
- **Greek key** and **β-meander:** classic all-β supersecondary patterns describing how consecutive antiparallel strands connect to each other (Greek key = a specific non-sequential connectivity pattern resembling the Greek key ornament; β-meander = strands connect in simple sequential back-and-forth hairpins). Useful vocabulary for fold-classification questions even though DI-II_10 itself is an **αβ** protein, not pure β.

---

## 2.4 Fold Classification

**Globular vs. fibrous (the broadest split):** **globular proteins** fold into compact, roughly spherical 3D shapes with a defined hydrophobic core (DI-II_10 and essentially everything else discussed in this guide is globular); **fibrous proteins** form long, extended, often repetitive structures suited to mechanical/structural roles (e.g., **collagen**, **keratin** — Module 7.2). Fibrous proteins are largely outside this event's scope, but "globular vs. fibrous" is a common first-pass classification question.

Within globular proteins, the broadest split is by secondary-structure composition:

- **All-α:** dominated by α-helices (e.g., helix bundles).
- **All-β:** dominated by β-sheets (e.g., immunoglobulin folds, β-barrels).
- **α+β:** contains both α-helices and β-sheets, but they are largely **segregated** into separate regions of the structure.
- **α/β (alpha-beta, alternating):** contains both, but **interspersed/alternating** along the sequence, typically forming a central β-sheet sandwiched between layers of α-helices (the classic **Rossmann fold** topology). **DI-II_10 is this type** — an **αβ-protein** with alternating secondary structure.

**Two common α/β architectures — sandwich vs. barrel (useful contrast):**
- **α/β sandwich:** a (typically twisted, mostly parallel) β-sheet lies flat, with **layers of α-helices packed against one or both of its faces** — a "helix-sheet-helix" or "sheet-helix" sandwich. **This is the Rossmann-fold architecture, and describes DI-II_10/Fold-II ("Rossmann2×2").**
- **α/β barrel:** the β-strands curl around into a **closed, cylindrical β-barrel** (rather than a flat sheet), typically with helices packed around the *outside* of the barrel (the classic example, for recognition purposes, is the **TIM barrel** — an 8-stranded parallel β-barrel surrounded by 8 helices, found in triose phosphate isomerase and many other enzymes). **DI-II_10 is a sandwich-type architecture, not a barrel** — if a question contrasts the two, DI-II_10 belongs with the sandwiches.

Large-scale fold classification databases exist to catalog and compare these patterns:
- **SCOP** (Structural Classification of Proteins) and **CATH** (Class, Architecture, Topology, Homology) are the two major hierarchical fold-classification databases — know their names and general purpose (organizing the universe of known protein folds by structural similarity) at a recognition level.

**The five Koga "ideal" folds, by name** (full design detail in Module 4, but the names/identities belong here as structure-classification facts):

| Fold | Common name | Relation to DI-II_10 |
|---|---|---|
| Fold-I | Ferredoxin-like fold | — |
| **Fold-II** | **Rossmann2×2 fold** | **← This is DI-II_10's fold** |
| Fold-III | IF3-like fold | — |
| Fold-IV | P-loop2×2 fold | — |
| Fold-V | Rossmann3×1 fold | — |

---

## MODULE 2 — QUICK-REFERENCE SUMMARY (for flashcard mining)

- Four structure levels: primary (covalent sequence) → secondary (local H-bonded backbone patterns) → tertiary (whole-chain 3D fold) → quaternary (multi-chain assembly; **DI-II_10 has none — it's monomeric**).
- **Anfinsen hypothesis:** sequence determines structure; native state = global free-energy minimum. **Proven experimentally** by Anfinsen's **RNase A unfold/refold (renaturation)** experiments — sequence alone is sufficient, no extra machinery needed. **1972 Nobel Prize in Chemistry** (Anfinsen, shared with Moore & Stein) — contrast with the **2024 Nobel** (Module 6).
- **α-helix:** 3.6 residues/turn, 1.5 Å rise/residue, 5.4 Å pitch, right-handed, **i→i+4** backbone H-bonds, side chains point outward, has an N-to-C **dipole** requiring **capping**.
- **Amphipathic helices:** ~3.6 residues/turn → residues ~3–4 apart cluster on the same face; a helix packing against a sheet often shows a periodic hydrophobic (core-facing) vs. polar (solvent-facing) pattern — a direct tool for c.ii reasoning.
- **3₁₀-helix = i→i+3** (tighter); **π-helix = i→i+5** (wider).
- **β-sheet:** H-bonds *between* strands; **parallel** (same direction, angled H-bonds) vs **antiparallel** (opposite direction, straighter H-bonds, can form tight hairpins); sheets have a right-handed **twist**; **edge strands** are aggregation-prone → targeted by negative design.
- **β-hairpin** = two antiparallel strands + a turn; **Type II turns** often feature **Gly** at position 3.
- **Ramachandran plot:** φ (x) vs ψ (y); α-helix region lower-left, β region upper-left, left-handed-helix island upper-right (mostly Gly); Pro restricted to φ≈–60°.
- **Supersecondary motifs:** ββ (hairpin), βα/αβ (strand-helix packing, P/A orientation), βαβ (Rossmann-like), ββα/αββ (three-element units) — this is the Koga rules' vocabulary.
- **Fold types:** **globular** (compact, DI-II_10's category) vs. **fibrous** (collagen, keratin — structural); within globular: all-α, all-β, α+β (segregated), α/β (alternating, e.g., Rossmann folds — **DI-II_10's category**). **α/β sandwich** (flat sheet + helix layers — DI-II_10's architecture) vs. **α/β barrel** (closed cylindrical sheet, e.g. TIM barrel) — DI-II_10 is a sandwich, not a barrel.
- The five Koga folds: I = ferredoxin-like, **II = Rossmann2×2 (DI-II_10)**, III = IF3-like, IV = P-loop2×2, V = Rossmann3×1.
# MODULE 3 — FORCES, INTERACTIONS, AND FOLDING THERMODYNAMICS

> Covers rule b.i ("the principles of chemistry that drive protein folding and stability") most
> directly, plus b.ii and c.ii (the chemical environment around side chains). This module supplies
> the *mechanistic "why"* behind both natural protein folding and the entire Koga design strategy —
> Module 4 cannot be fully understood without the **energy landscape / funnel** concept and the
> **positive vs. negative design** vocabulary defined here. Read this module before Module 4.

---

## 3.1 ★★ The Non-Covalent Forces — Ranked and Explained

Five categories of non-covalent interaction stabilize folded proteins. The exam frequently asks "which force is most important for X" — know not just the list, but the *reasoning* behind the ranking.

### The Hydrophobic Effect — the dominant driving force of folding

This is the single most important, and most commonly *mis-explained*, concept in the entire event.

- **What it is NOT:** it is a common misconception that hydrophobic side chains "attract" each other directly, the way two magnets attract. That is not the primary mechanism.
- **What it actually is:** when a nonpolar surface is exposed to water, the surrounding water molecules are forced into an unusually **ordered "cage" (clathrate-like) arrangement** to maintain their hydrogen-bonding network around the nonpolar surface. This ordering **decreases the entropy of the water**. When nonpolar side chains instead bury themselves together in a protein core (away from water), that ordered water is released back into the bulk solvent, where it can move and hydrogen-bond more freely — **increasing the entropy of the water**.
- **Bottom line: the hydrophobic effect is primarily an ENTROPY-DRIVEN phenomenon — specifically, an increase in the entropy of the SOLVENT (water), not the protein.** This is the #1 fact to get right in this module. A question that asks "is the hydrophobic effect enthalpy- or entropy-driven, and whose entropy?" has one correct answer: **entropy, of the water**.
- Consequence: burying hydrophobic surface area is thermodynamically favorable largely *because of what it does to water*, which is why the **hydrophobic core / polar surface** organization (Module 1.8) is the dominant architectural principle of globular proteins.

### Hydrogen Bonds

- Occur both in the **backbone** (defining secondary structure — the i→i+4 pattern of α-helices, inter-strand pattern of β-sheets, Module 2.2) and between **side chains**, or between side chains and the backbone.
- **Individually modest in strength**, but there are **very many of them** in a folded protein — their cumulative contribution is large, and critically, **forming the "right" H-bonds (with the native partners) vs. "wrong" ones is a major part of what makes one structure favored over alternatives**.
- A useful framing: H-bonds contribute more to the **specificity** of the fold (which exact structure forms) than to the overall *driving force* (the hydrophobic effect is more responsible for *that* a compact fold forms at all).

### Van der Waals Interactions (including London dispersion)

- **Weak individually** — among the weakest of all the listed forces on a per-contact basis.
- **Decisive in aggregate within a tightly packed core**, because a well-designed hydrophobic core has *so many* atoms in close, complementary contact that the sum of many small van der Waals interactions becomes substantial.
- This is the chemical basis for the Koga design goal of a core with **"packing density approaching that of close-packed crystals"** (Module 4.6/4.7) — maximizing van der Waals contacts by eliminating internal voids.

### Electrostatic Interactions (Salt Bridges)

- Form between **oppositely charged side chains** in close proximity — classically **Asp/Glu (negative) with Lys/Arg (positive)**.
- **Strength is highly context-dependent**: a salt bridge buried in a low-dielectric (nonpolar) core environment can be quite strong, while one on a solvent-exposed surface (high dielectric, screened by water and ions) is much weaker — sometimes contributing little net stability at all, because the unfolded state's charged groups are *also* stabilized by water.
- Important nuance for c.ii-style questions: don't assume "two oppositely charged residues near each other = automatically a major stabilizing interaction" — context (burial, geometry, distance) determines whether it matters.

### Dipole Interactions, Including the Helix Macrodipole

- Beyond simple H-bonds, the **cumulative alignment of backbone dipoles** along an α-helix creates a **macroscopic dipole** for the whole helix (N-terminus partial +, C-terminus partial –; Module 2.2.1).
- This macrodipole influences which charged residues are favored near each end of a helix and contributes to interactions between a helix and nearby charged groups or other helices.

### Aromatic Interactions

- **π-stacking:** two aromatic rings (Phe, Tyr, Trp, or His's imidazole) stack face-to-face or edge-to-face, an interaction with both van der Waals and electronic character.
- **Cation-π interactions:** a positively charged group (e.g., the side chain of Lys or Arg) interacts favorably with the electron-rich face of an aromatic ring.
- **Amino-π / other ring interactions:** broadly, aromatic side chains participate in extra stabilizing contacts beyond simple hydrophobic packing because of their delocalized π-electron systems.

---

## 3.2 The One Common Covalent Contributor: Disulfide Bonds

- **Disulfide bonds (Cys–Cys, –S–S–)** are the only *covalent* crosslink commonly found stabilizing tertiary/quaternary structure (Module 1.7).
- Note for this event specifically: the "ideal protein" designs of Koga et al. (Module 4) achieve their exceptional stability **primarily through optimized packing and the rule-based backbone design**, not through engineered disulfide bonds — i.e., **you do not need disulfides to make an extremely stable protein** if the hydrophobic core and backbone geometry are sufficiently well-designed. This is a useful contrast point: natural proteins (especially small, secreted ones) often lean on disulfides for extra stability; DI-II_10's stability comes from a different strategy.

---

## 3.3 ★★ Thermodynamics of Folding

- The fundamental relationship: **ΔG = ΔH – TΔS**. A process (here, folding) is **spontaneous/favorable when ΔG < 0**.
- For folding: **ΔG(folding) = G(folded) – G(unfolded)**. A stable native structure has **ΔG(folding) < 0** (folded state is lower in free energy than unfolded).
- Equivalently, people often discuss **ΔG of *unfolding*** (the reverse process) — a **larger, more positive ΔG(unfolding)** means a **more stable** protein (more energy required to unfold it).
- **Proteins are only marginally stable** under physiological conditions — typical native-state stabilization is on the order of only **5–15 kcal/mol**, which is small compared to the very large number of individual favorable interactions being made and broken. This marginal stability is *functionally important* (proteins need to be stable enough to fold but not so rigid that they can't undergo the conformational changes needed for function) — but the **Koga designs are exceptions, with ΔG(unfolding) > 5 kcal/mol and melting temperatures Tm ≥ 95 °C** for the most successful designs, reflecting how thoroughly optimized (and functionally "unconstrained") these designed proteins are compared to natural ones.
- **The entropy–enthalpy tradeoff in folding:**
  - **Unfavorable for folding:** the polypeptide chain loses an enormous amount of **conformational entropy** when it collapses from a floppy, disordered unfolded state into one specific folded structure.
  - **Favorable for folding:** burial of hydrophobic surface (entropy gain for *water*, 3.1) plus the **enthalpic** payoff of forming many favorable interactions (H-bonds, van der Waals, electrostatics) in the folded state that weren't present (or were satisfied by water) in the unfolded state.
  - Net folding is favorable only because the favorable terms *narrowly* outweigh the unfavorable chain-entropy cost — hence "marginal stability."

---

## 3.4 ★★★ The Folding Problem and Energy Landscapes — THE Conceptual Bridge to Module 4

This section is the single most important conceptual link in the entire guide. The Koga paper's title concept ("ideal protein structures") and its entire design philosophy are a direct, explicit attempt to engineer the picture described below.

### Levinthal's Paradox

If a protein folded by **randomly sampling** every possible backbone conformation until it stumbled onto the native one, the search would take **longer than the age of the universe** even for a small protein — because the number of possible conformations is astronomically large, while real proteins fold in milliseconds to seconds. **Levinthal's paradox** is the observation that random search cannot be how folding works — therefore, folding must be a **guided process** along preferred pathways, not a random walk through all of conformational space.

### The Folding Funnel / Energy Landscape

The resolution to Levinthal's paradox is the **energy landscape (folding funnel)** picture:

- Imagine a multidimensional surface where each point represents one possible conformation of the chain, its height representing that conformation's free energy.
- The **unfolded ensemble** occupies a wide, high-energy region at the "rim" of the funnel — many different conformations, all relatively high in energy, easily interconverting.
- As the chain begins to make native-like contacts, the accessible conformations **narrow** and the energy **decreases** — the landscape "funnels" downhill and inward.
- The **native state sits at the bottom** of the funnel — the **global free-energy minimum** (Anfinsen, Module 2.1) — and is also the point of **narrowest conformational breadth**.
- A **strongly funneled** landscape has a smooth, monotonic decrease in energy toward the native state with few or no competing low-energy alternatives — folding is fast and robust.
- A **frustrated** landscape has local minima, "traps," or competing folds at comparable energy to the native state — folding is slow, can get stuck in misfolded intermediates, or may not reliably reach the native state at all.

### ★★★ The Central Thesis of the Koga Paper (memorize this sentence — it is the intellectual core of the entire event)

> **A strongly funneled energy landscape requires that the *local* interactions between residues close together in sequence (which determine secondary structure) and the *non-local* interactions between residues far apart in sequence (which determine tertiary structure) CONSISTENTLY favor the SAME folded conformation.**

If local preferences (e.g., "this stretch of sequence wants to be a left-handed β-hairpin") and non-local preferences (e.g., "but the overall fold packs better if this hairpin were right-handed") **conflict**, the landscape becomes frustrated — there are competing structures of similar energy, and folding is slow/unreliable/ambiguous. If local and non-local preferences **agree**, every part of the chain is "pulling in the same direction," and the landscape funnels cleanly to one structure.

The entire point of the **fundamental and emergent rules (Module 4.4–4.5)** is that they let a designer **choose secondary-structure element lengths such that the local backbone preferences they encode automatically agree with (and disfavor alternatives to) the desired tertiary fold** — engineering consistency, and therefore a funnel, by design.

### Molten Globule

A **molten globule** is a compact, partially folded intermediate state — it has much of the native protein's overall secondary structure and compactness, but lacks the fully specific tertiary packing (side chains are not yet locked into their unique native positions). It's a useful term for describing landscapes/folding pathways that pass through intermediates rather than folding in a single cooperative step (contrast with the "two-state" folding discussed in 3.6).

### Classic Folding-Pathway Models (How Does the Chain Actually Get There?)

The funnel/energy-landscape picture (above) describes the *shape* of the problem in general terms, but doesn't by itself specify the *order* in which different kinds of structure form during folding. Three classic, named models — developed before the funnel framework became dominant — describe different hypothesized **sequences of events**, and are still useful vocabulary:

- **Framework (diffusion-collision) model:** **secondary structure elements form first** and largely independently (each as a small, local "framework" piece), and then these pre-formed pieces **diffuse and collide**, assembling into the tertiary fold. In this view, secondary structure is essentially "decided" before tertiary structure.
- **Hydrophobic collapse model:** the chain **collapses rapidly around its hydrophobic residues first** (driven by the hydrophobic effect, 3.1), forming a compact but not-yet-specific globule — and secondary structure then forms/refines **within** this already-collapsed state. In this view, compactness comes first, specific structure second.
- **Nucleation-condensation model:** secondary and tertiary structure form **concomitantly**, around a small set of key residues that come together early to form a **folding nucleus** — the rest of the structure then "condenses" around this nucleus. This model is often viewed as a middle ground between the other two, and is the model most consistent with the idea (central to Module 3.4's funnel thesis and the Koga rules) that **local and non-local interactions are not independent, sequential events, but are coupled from early in folding.**

**How this connects back to the "ideal protein" design philosophy (Module 4):** the Koga design strategy's emphasis on **minimal loops** and **fully consistent local/non-local interactions** is most naturally compatible with something like the nucleation-condensation picture — every part of the chain is "pulling toward" the same native structure essentially from the start, rather than folding in two separable stages that could each go to a "locally correct, globally wrong" place.

---

## 3.5 ★★ Positive vs. Negative Design

These two terms are used constantly in Module 4 and are excellent, crisp, two-sided flashcards.

- **Positive design:** designing/selecting sequences and structures that **stabilize the desired (target) folded state**. Example: choosing core residues that pack together with minimal voids and maximal favorable contacts (optimizing the *target's* energy).
- **Negative design:** designing/selecting sequences and structures that **destabilize competing, non-native states** — i.e., making sure that *other* possible folds (or oligomeric states) are made *less* favorable, so they don't compete with the target. Example: placing inward-pointing charged residues on edge β-strands so that an alternative, aggregated arrangement is disfavored (Module 2.2.2, Module 4.8).

**Why negative design is hard in general:** there is essentially **one** target structure to optimize *for* (positive design has a single, well-defined goal), but there are an **enormous number of possible competing non-native structures** to optimize *against* — you can't exhaustively check all of them. 

**Why the Koga rules are a breakthrough for negative design specifically:** because the fundamental/emergent rules operate **at the level of the backbone, independent of side-chain sequence**, they let a designer disfavor whole classes of alternative *topologies* — directly, systematically, and *before* any sequence is even chosen — rather than having to enumerate and check individual competing sequences/structures one at a time. This reframes negative design from "an unsolved, intractable enumeration problem" into "a set of backbone-geometry rules to apply up front."

---

## 3.6 ★ Stability, Denaturation, and the Measurement Toolkit

The methods below are drawn directly from the Koga et al. paper's experimental characterization of DI-II_10 and its sibling designs — they are fair game for "what does this method measure / what does this readout tell you" questions.

| Method | What it measures | Key readout(s) |
|---|---|---|
| **Circular dichroism (CD), far-UV** | Secondary-structure content/type | αβ-proteins (like DI-II_10) give a CD spectrum **characteristic of mixed α/β content**; running CD at a series of increasing temperatures and tracking the spectrum's loss of signal gives the **melting temperature (Tm)** — the temperature at which half the protein population is unfolded |
| **Chemical denaturation (e.g., with guanidinium hydrochloride, GuHCl)** | Conformational stability | Unfolding is monitored (e.g., via CD signal) across a range of denaturant concentrations; fitting the resulting curve to a **two-state model** (folded ⇌ unfolded, no stable intermediates) yields **ΔG of unfolding** (the stability) and the **m-value** (how sharply/cooperatively the transition occurs — a **higher m-value indicates a more cooperative, more "all-or-nothing" unfolding transition**, generally associated with a well-packed, single-domain fold) |
| **Size-exclusion chromatography with multi-angle light scattering (SEC-MALS)** | Oligomeric state / absolute molecular weight | Confirms whether a protein is **monomeric** (a single peak corresponding to the expected molecular weight of one chain) vs. forming dimers/oligomers — this is how DI-II_10 and its siblings were confirmed to be **monomeric** |
| **NMR spectroscopy (e.g., 2D ¹H–¹⁵N HSQC, NOESY)** | Solution structure; fold quality | A **well-resolved spectrum with many sharp, well-dispersed peaks** indicates a protein that is **well-folded and well-packed** (a floppy or molten protein gives broad, overlapping, poorly dispersed peaks); NOESY-type experiments detect through-space proximities between atoms and are the basis for actually **determining the 3D structure** in solution |

**Two-state unfolding** = a model in which the protein exists essentially only as fully folded or fully unfolded, with **no significantly populated intermediate** — this is the simplifying assumption used to extract ΔG and the m-value from a chemical denaturation curve, and it's a hallmark of small, cooperatively-folding, single-domain proteins (consistent with the "ideal" design philosophy of minimizing non-ideal, partially-structured states).

**Structure-determination methods, broadly (recognition-level):**
- **NMR spectroscopy** — used for DI-II_10; well-suited to smaller proteins in solution; directly yields information about dynamics as well as structure.
- **X-ray crystallography** — requires a crystallized sample; historically the dominant method for larger proteins; yields a single static structure (or a few alternate conformers) at high resolution.
- **Cryo-EM (cryo-electron microscopy)** — increasingly important for very large complexes/assemblies that are hard to crystallize.

---

## MODULE 3 — QUICK-REFERENCE SUMMARY (for flashcard mining)

- **Hydrophobic effect = dominant driving force of folding; entropy-driven; the entropy increase is in the SOLVENT (water), not the protein** — the single most important sentence in this module.
- **H-bonds:** define secondary structure (backbone) and add specificity; individually modest, numerous.
- **Van der Waals:** weak individually, decisive in aggregate in a tightly packed core (target: crystal-like packing density).
- **Salt bridges:** Asp/Glu ↔ Lys/Arg; strength is context-dependent (burial matters).
- **Aromatic interactions:** π-stacking, cation-π.
- **Disulfide bonds (Cys-Cys):** the one covalent crosslink; not required for DI-II_10's stability.
- **ΔG = ΔH – TΔS**; folding favorable when ΔG(folding) < 0; proteins are normally only marginally stable (5–15 kcal/mol), but **Koga designs exceed 5 kcal/mol ΔG(unfold) with Tm ≥ 95°C**.
- **Levinthal's paradox** → folding must be guided, not random.
- **Folding funnel:** unfolded ensemble (wide, high-energy) → narrows and drops in energy → **native state = global free-energy minimum** at the bottom.
- **★ THE central thesis:** a strongly funneled landscape requires **local interactions (→ secondary structure) and non-local interactions (→ tertiary structure) to consistently favor the same fold.**
- **Positive design** = stabilize the target. **Negative design** = destabilize competitors. The Koga rules enable systematic negative design **at the backbone level**, before sequence design even begins.
- **Molten globule** = compact but not fully packed intermediate.
- **Classic folding-pathway models:** **framework/diffusion-collision** (secondary structure first, then pieces collide), **hydrophobic collapse** (compact globule first, structure refines within it), **nucleation-condensation** (secondary + tertiary form together around a folding nucleus — best fits the Koga "consistent local/non-local" philosophy).
- **Methods:** CD/Tm (secondary structure & thermal stability), GuHCl + two-state fit (ΔG, m-value, cooperativity), SEC-MALS (oligomeric state — DI-II_10 = monomeric), NMR/HSQC (fold quality & structure determination).
# MODULE 4 — ★★★ THE DESIGN PRINCIPLES OF DI-II_10 ★★★
## (Koga, Tatsumi-Koga, Liu, Xiao, Acton, Montelione & Baker, *Nature* 2012)

> Covers rule b.iii: **"The basic design principles used to create the DI-II_10 protein"** —
> explicitly named in the rules, at **every competition level**. This is the centerpiece module of
> the entire event. Primary source: Koga et al., "Principles for designing ideal protein
> structures," *Nature* 491, 222–227 (2012), doi:10.1038/nature11600 — freely available at
> PMC3705962. (Note: the rules sheet prints the DOI truncated as "10.1038/nature1"; the correct,
> resolvable DOI is **nature11600**.)
>
> This module assumes Modules 1–3. In particular, re-read Module 3.4 (the folding-funnel /
> local-vs-non-local consistency thesis) before continuing — everything below is that idea, made
> operational.

---

## 4.1 ★ Framing: What "Ideal" Protein Design Means

Natural proteins, despite folding reliably, are full of what the paper calls **non-ideal features** — quirks that exist not because they're structurally optimal, but because evolution selected for *function*, or because of neutral drift. The paper names these explicitly:

> Natural proteins carry **kinked α-helices, bulged β-strands, strained loops, and buried polar groups** — all energetically unfavorable features that nonetheless persist because of evolutionary history.

The Koga approach asks: what if you design a protein **with no functional constraints at all**, optimized *purely* for a clean, stable fold? The result is an **"ideal" protein** — built from:

- **α-helices**
- **β-strands**
- **Minimal loops** (as short/simple as possible)

...assembled so that the protein has **"completely consistent local and non-local interactions"** — i.e., a **strongly funneled folding energy landscape** (Module 3.4) with no kinks, bulges, strain, or buried polar groups, because every one of those features would represent a *local* inconsistency working against the *global* fold.

**Key infrastructure used (know these names — they recur throughout):**
- **Rosetta** — the Baker-lab software suite for structure prediction and design; used for both the folding simulations and the sequence design steps.
- **Rosetta@home** — a distributed/crowdsourced computing project (volunteers' home computers) used to run the very large number of folding simulations needed to map out energy landscapes.
- **Foldit** — a crowdsourced, game-based interface (also from the Baker lab) used in the **final manual cleanup step**, where designed structures were visually inspected and **buried polar / exposed hydrophobic residues were manually mutated**.

**Headline result:** **five different topologies** were designed using this approach. For all five, most designs were **expressed and soluble**, and many were **extremely stable**. The single most successful, well-resolved design for each fold (one per fold) was solved by **solution NMR**, and in each case the **experimental structure closely matched the computational design model** — for both the overall backbone topology and the detailed packing of core side chains.

---

## 4.2 ★★ Naming Convention and the Five Folds

**Decoding "DI-II_10":**

> **"Di" = Designed Ideal protein. The Roman numeral = the fold type (topology). The number after the underscore = the design identifier (which specific sequence/design, among potentially many tried for that fold).**

So: **DI-II_10 = the 10th design attempt for Fold-II ("Rossmann2×2"), and it was the one selected as the best-characterized representative of that fold.**

### The Five "Di" Designs — Master Table

| Design | Fold # | Fold name | PDB ID | BMRB ID | Designed by |
|---|---|---|---|---|---|
| Di-I_5 | Fold I | Ferredoxin-like fold | 2KL8 | 16387 | N. Koga |
| **Di-II_10** | **Fold II** | **Rossmann2×2 fold** | **2LV8** | **18558** | **R. Tatsumi-Koga** |
| Di-III_14 | Fold III | IF3-like fold | 2LN3 | 18145 | R. Tatsumi-Koga |
| Di-IV_5 | Fold IV | P-loop2×2 fold | 2LVB | 18561 | N. Koga |
| Di-V_7 | Fold V | Rossmann3×1 fold | 2LTA | 18465 | R. Tatsumi-Koga |

**For this event, DI-II_10 (PDB 2LV8) is the protein.** The JUDE environment loads **residues 1–100 of the 2LV8 file** (a **solution-NMR structure**, meaning the PDB file actually contains an *ensemble* of multiple conformer "models," not a single static structure — relevant to Module 5).

### Experimental success rates by fold (from the paper's summary table)

This table is useful both as raw recall ("how many Fold-II designs were tested?") and as a way to internalize that **DI-II_10's fold (Fold II) had the *highest success rate of the five* (33%)** — a fact you can use to argue *why* Fold II might have been chosen as this event's focus (more robust, better-characterized designs to draw from).

| Fold | Designs tested | Expressed | Soluble | αβ CD spectrum | Stable (Tm ≥ 95°C) | Monomeric | Well-resolved NMR | "Success" (met all criteria) |
|---|---|---|---|---|---|---|---|---|
| Fold-I | 11 | 9 | 8 | 6 | 3 | 2 | 3 | 1 (9%) |
| **Fold-II** | **12** | **12** | **12** | **10** | **10** | **4** | **4** | **4 (33%) ← highest** |
| Fold-III | 14 | 13 | 11 | 9 | 7 | 6 | 5 | 3 (21%) |
| Fold-IV | 5 | 4 | 4 | 4 | 2 | 4 | 3 | 2 (40%) |
| Fold-V | 12 | 11 | 10 | 3 | 3 | 1 | 1 | 1 (8%) |

(Note Fold-IV's 40% is technically the single highest *rate*, but off a much smaller sample of 5; Fold-II's 33% success off 12 attempts, with **all 12 expressed, soluble, and 10/12 stable to Tm≥95°C**, is the most robust overall performance — useful nuance if a question probes "which fold performed best.")

---

## 4.3 ★★ The Core Idea: Mapping Local Secondary-Structure Patterns to Tertiary Motifs

The whole method rests on one mapping: **given a short pattern of secondary structure (e.g., "strand, short loop, strand"), is there one specific 3D arrangement (tertiary motif) that this pattern strongly prefers — to the exclusion of other arrangements?**

- The analysis focuses on a **basis set of tertiary motifs consisting of two or three consecutive secondary-structure elements** that pack closely together and make extensive direct contacts ("intramotif interactions").
- The mapping was worked out two ways, which **agreed with each other**:
  1. **Rosetta folding simulations** on a **sequence-independent backbone model** (i.e., a generic chain with no real side chains — just the backbone + a placeholder for the side chain) — testing how a peptide with a given secondary-structure pattern actually folds.
  2. **Statistical analysis of real protein structures in the PDB** — checking whether the same length-dependent preferences show up in nature.
- There are **three distinct junction classes** in αβ-proteins, each governed by one **fundamental rule**: **ββ** (strand-to-strand), **βα** (strand-to-helix), and **αβ** (helix-to-strand).

### ★★★ Why "sequence-independent" matters

The headline finding is that these preferences are **largely independent of the amino-acid sequence** of the secondary-structure elements or connecting loops. They instead arise from:

> **the intrinsic chirality (handedness) of the polypeptide backbone — i.e., the fact that it's built from L-amino acids — and the backbone's local conformational ("bendability") preferences.**

This is the direct payoff of **Module 1.1's chirality discussion**: because the backbone itself (independent of which side chains decorate it) has an intrinsic handedness, certain combinations of secondary-structure-element lengths and connecting-loop lengths are simply **geometrically preferred**, full stop — before you've even chosen a single amino acid. This is what makes the rules so powerful: they let you do **negative design at the backbone level** (Module 3.5), ruling out whole classes of alternative folds *before* sequence design begins.

---

## 4.4 ★★★ THE THREE FUNDAMENTAL RULES — Memorize These Cold

First, the two geometric descriptors the rules are written in terms of (conceptual definitions — the paper defines them precisely via the Cα-to-Cβ vector and cross/dot products, but you do not need the vector algebra to apply the rules):

- **Chirality of a ββ-unit: Left-handed (L) vs. Right-handed (R).** This describes the "handedness" of how a β-hairpin's two strands and connecting loop are arranged in 3D — i.e., the direction of the **pleat twist** connecting the two strands (Module 2.2.2's "pleating," made directional).
- **Orientation of a βα-unit or αβ-unit: Parallel (P) vs. Antiparallel (A).** This describes **which side of the β-sheet the packed α-helix sits on**, relative to the direction the connected strand's side chains point.

### THE THREE RULES — REFERENCE TABLE

| Rule | Governs | The rule, stated precisely | Where it comes from |
|---|---|---|---|
| **ββ-rule** | Chirality (L vs. R) of a **β-hairpin** | **2- or 3-residue loop → strongly favors L (left-handed)** hairpin. **5-residue loop → favors R (right-handed)** hairpin. | Confirmed in *both* Rosetta sequence-independent folding simulations *and* statistical analysis of native PDB structures — the chirality correlates with loop length in essentially the same way in both. Torsional-strain calculations show 2–3 residue loops are lower-energy for L-hairpins, and 5-residue loops are lower-energy for R-hairpins — i.e., it's a strain/energetics effect of the loop geometry itself. |
| **βα-rule** | Orientation (P vs. A) of a **β-strand-to-α-helix** unit — i.e., **which face of the sheet the helix packs onto** | **2-residue loop → favors P (parallel)** orientation. **3-residue loop → favors A (antiparallel)** orientation. | Also seen in both simulations and native structures; arises in part from the inherent **bendability of the protein backbone** — different loop lengths impose different geometric constraints on how the chain can re-route from the strand into the helix. |
| **αβ-rule** | Orientation (P vs. A) of an **α-helix-to-β-strand** unit | **Strongly favors P (parallel)** overall — most strongly for **2-residue loops**, but **longer loops can also support P** *if* the loop forms a **hydrogen-bonded capping interaction that stabilizes the helix** (Module 2.2.1's N-capping!) **and does not extend the strand**. | Same dual confirmation (simulation + native structures). |

**Memory aids:**
- **ββ-rule:** *short loops (2–3) → L; long loop (5) → R.* (Think: "Short and Left, Five and Right" — and note 2–3 are adjacent small numbers giving the same answer, while 5 flips it.)
- **βα-rule:** *2 → Parallel; 3 → Antiparallel* — note this is the **opposite numeric trend** from the αβ-rule's emphasis on 2-residue loops favoring P; don't mix up which "2 vs 3" applies to which rule.
- **αβ-rule:** *defaults to Parallel*, and the "escape clause" for longer loops is specifically about **helix N-capping without extending the strand** — tying directly back to Module 2.2.1.

**A subtlety worth internalizing for short-answer credit:** all three rules describe *strong statistical preferences/tendencies under the stated loop-length conditions*, not absolute, exceptionless laws — the paper frames them as the *dominant* outcome of many independent folding trajectories and as *trends* in the PDB, not 100%-deterministic rules. If a question asks "does a 2-residue ββ-loop *always* give an L-hairpin," the technically correct answer is "*it strongly/preferentially favors* an L-hairpin," reflecting the statistical/simulation-based nature of the finding.

---

## 4.5 Emergent Rules — One Level Up (Three-Element Units)

The "fundamental rules" (4.4) describe **two consecutive secondary-structure elements** (one junction). The next level of complexity is **three consecutive elements** — and three new combination-types appear:

- **ββα-units** and **αββ-units** — their **chirality** depends on the lengths of the connecting loops *and* the secondary-structure elements themselves.
- **βαβ-units** — their overall **foldability** (whether they fold into a coherent unit at all, in a particular arrangement) depends similarly on these lengths.

These dependencies are called **emergent rules** because, as the paper states, **they follow from / are derivable from the fundamental rules** — they're not a fourth independent principle, but rather what happens when you apply the fundamental ββ/βα/αβ logic to a three-element unit where two junctions now interact with each other. **Practically: the emergent rules tell a designer how to choose the lengths of secondary-structure elements *and* their connecting loops to favor one specific desired conformation of a three-element unit** (e.g., a specific βαβ arrangement needed for a Rossmann-type fold).

---

## 4.6 ★★ The Rule-Based Design Workflow — Step by Step

This is the **end-to-end pipeline** used to go from "I want this topology" to "here is a real, stable, expressed protein." A question may ask you to **order these steps**, or to identify **what tool/method is used at each step**.

**Step 1 — Choose the target topology and assign secondary-structure-element lengths using the rules.**
Write the desired fold as a string of secondary-structure elements (e.g., for Fold-I: **β1α1β2β3α2β4**). Then, for *every junction* between adjacent elements, classify it as ββ, βα, or αβ, determine the desired chirality/orientation for *that* junction in the target fold, and use the fundamental + emergent rules (in reverse) to pick the **loop length** (and, for helices, the **helix length**) that will favor that outcome.

> **Worked example from the paper (Fold-I):** the junction sequence is notated **(β1α1)A (α1β2)P (α1β2β3)L (β2β3α2)R (β3α2)A (α2β4)P** — i.e., alternating αβ/βα and ββα/αββ junctions each assigned a target P/A or L/R. Reading this off the rules (Fig. 1 and the emergent-rules figure), for a **strand length of 7**, the ideal successive **loop lengths** (N-to-C) come out to **3, 2, 2, 3, 2**, and the optimal **helix length** is **18**.

> **For Folds II, IV, and V (the "αβα-containing" folds, including DI-II_10's Fold-II):** the paper notes that an **(αβα) unit is treated as (αβ)P followed by (βα)P or A** — i.e., you decompose the three-element αβα unit into its two constituent two-element junctions (an αβ-junction and a βα-junction) and apply the **αβ-rule** and **βα-rule** to each separately.

> **Handling ambiguity:** for some folds (the paper specifically calls out **Folds-II and -IV**), the length-based rules alone **don't uniquely distinguish** the target fold from alternatives. In these cases, the designers **varied the secondary-structure lengths and ran additional folding simulations** to empirically select lengths that strongly favored the intended fold over the alternative(s). (Take-home: the rules narrow things down enormously, but for some topologies — including DI-II_10's — extra simulation-based tuning was still needed to fully resolve the ambiguity.)

**Step 2 — Build backbone ensembles via Rosetta fragment-assembly folding simulations.**
Using the chosen secondary-structure string (as a constraint), run many independent Rosetta folding trajectories (Monte Carlo, fragment-assembly — the same general simulation method used to derive the rules in the first place). For topologies where the lengths were chosen specifically to encode them (the paper notes this worked well for **Folds I, III, and V**), a significant fraction of trajectories land on the intended topology. This produces an **ensemble of candidate backbones** — all roughly the right topology, but varying in the fine details (distances/angles between elements, loop conformations, sheet twist).

**Step 3 — Design a sequence onto each backbone with RosettaDesign.**
For each backbone in the ensemble, use **RosettaDesign** with **Monte Carlo simulated annealing** to choose amino-acid identities and side-chain conformations (rotamers) that minimize energy — applying the **core/boundary/surface layer scheme** (Module 4.7) to constrain which amino acids are even *allowed* at each position.

**Step 4 — Iterate design and structure relaxation.**
Alternate between (re-)designing the sequence and **relaxing** the backbone + side chains in Rosetta's all-atom energy function, repeating this cycle to converge on a low-energy sequence-structure pair.

**Step 5 — Filter candidates.**
Rank/filter the resulting designs by:
- **Rosetta all-atom energy** (lower = better),
- **Packing quality**, assessed by **RosettaHoles** (penalizes internal voids/cavities — rewards the "close-packed crystal" density goal),
- **Local sequence-structure compatibility** — checking that short local windows of the designed sequence are well-represented among fragments from real, known protein structures with similar local geometry (a proxy for "does this local sequence actually want to be in this local conformation, based on what nature does").
- A final **manual visual-inspection pass in Foldit** is used to catch and fix any remaining **buried polar or exposed hydrophobic** residues that slipped through (4.1).

**Step 6 — Map the folding energy landscape with large-scale *ab initio* simulations.**
For each sequence that passes the filters, run **hundreds of thousands (200,000–400,000) of independent Rosetta *ab initio* structure-prediction simulations**, each starting from a fully **extended chain** (i.e., starting from "scratch," with no topology assumed), distributed via **Rosetta@home**. Plot the resulting energy landscape (energy vs. RMSD-from-design-model for each trajectory's lowest-energy structure).
- **Roughly 10% of designs** produce a landscape that is genuinely **funnel-shaped** — i.e., independent simulations starting from random extended chains *and* simulations starting near the design model both converge toward the same low-energy, low-RMSD region. **Only these ~10% are selected for experimental testing.** This is the single biggest "filter" in the whole pipeline, and a great fact for a "what fraction..." question.

**Step 7 — Experimental characterization.**
The selected designs are expressed, purified, and characterized using the **Module 3.6 toolkit**: CD (secondary structure + Tm), GuHCl denaturation (ΔG, m-value), SEC-MALS (oligomeric state), and NMR (fold quality + structure determination for the single best design per fold).

---

## 4.7 ★★★ The Core / Boundary / Surface Layer Scheme — Directly Testable

This is **how Module 1's amino-acid chemistry becomes Module 4's actual sequence design**, applied to **Folds II–V** (i.e., including DI-II_10). Every residue position in the designed backbone is first classified into one of **three layers** based on how buried it is (quantified by **solvent-accessible surface area, SASA**, of the main-chain + Cβ atoms), and *only certain amino acids are allowed to be designed at positions in each layer*.

### Layer definitions (by SASA)

| Layer | SASA threshold for helix/strand positions | SASA threshold for loop positions |
|---|---|---|
| **Core** (most buried) | SASA ≤ 15 Å² | SASA ≤ 25 Å² |
| **Boundary** (intermediate) | 15 Å² < SASA < 60 Å² | 25 Å² < SASA < 40 Å² |
| **Surface** (most exposed) | SASA ≥ 60 Å² | SASA ≥ 40 Å² |

### Allowed amino acids per layer

| Layer | Allowed amino acids | Rationale |
|---|---|---|
| **Core** | **V, I, L, M, F, Y, W** | Purely hydrophobic / large hydrophobic — direct application of Module 1.8's "hydrophobic-in" principle |
| **Boundary** | **V, I, L, Y, W, D, E, N, Q, K, R, S, T** | A mix — partially buried positions can tolerate both hydrophobic and polar/charged residues depending on exact exposure |
| **Surface** | **D, E, N, Q, K, R, S, T, H** | Polar / charged — "polar-out" |

### Special-case residues (apply *on top of* the layer rules — high-yield specifics)

- **Alanine (Ala):** allowed **only** in **helices and loops**, and **only in the core or boundary layers** (never on the surface, never in strands).
- **Glycine (Gly):** allowed **only in loops** — but in loops, it's allowed in **any** layer (core, boundary, or surface). Directly reflects Gly's unique backbone flexibility (Module 1.7) — its role is purely about backbone geometry, not side-chain chemistry, so the usual hydrophobic/polar layer logic doesn't constrain it.
- **Proline (Pro):** allowed in **loops** and **at the beginning of helices or strands** — directly reflects Pro's rigidity and lack of a backbone N–H donor (Module 1.7/2.2.1).
- **Helix N-capping rule:** the **loop residue immediately preceding a helix** must be one of **D, N, S, or T** — chosen because all four have side-chain functional groups capable of making the **N-cap hydrogen bond** that substitutes for the "missing" i→i+4 backbone H-bond at the helix's N-terminal end (Module 2.2.1).
- **Favoring large hydrophobics in the core:** the **reference energy** for each amino acid was modified specifically to **favor Ile, Leu, and Phe** in the core, over and above just being "in the V/I/L/M/F/Y/W allowed set" — these three are large enough to drive especially tight, low-void packing.
- **Negative design on edge strands:** a **resfile** (a Rosetta input specifying allowed residues at specific positions) was used to force **inward-pointing polar/charged residues** (often in the middle of **edge β-strands**) — this is the molecular implementation of the negative-design strategy described in Modules 2.2.2 and 3.5/4.8.
- **Aromatic χ2 restriction:** for **Phe, Tyr, and His**, the side-chain **χ2 dihedral angle** was restricted to the **70°–110° range** (the range most frequently observed in nature) — applied to the design of **Folds III–V** specifically.

---

## 4.8 ★★ Positive and Negative Design — As Concretely Applied to DI-II_10

Building directly on Module 3.5's definitions, here is exactly how positive and negative design show up in this protocol:

**Positive design (stabilize the target):**
- Choosing **core residues** (V, I, L, M, F, Y, W, with extra weight on I/L/F) that pack together with **minimal voids**, approaching **crystal-like packing density** (assessed via RosettaHoles).
- This step is **"purely positive"** in the paper's own framing — it optimizes the energy of the *target* structure without any reference to competing states.

**Negative design (disfavor competitors):**
- **At the backbone level:** the fundamental + emergent rules themselves are a negative-design tool — choosing secondary-structure-element and loop lengths that make the *desired* topology's local preferences win out over alternatives, **before any sequence exists**.
- **At the sequence level:**
  - **Inward-pointing polar/charged residues on edge β-strands** — disfavors edge-to-edge **aggregation/oligomerization** with other copies of the protein (or with itself in an alternative arrangement).
  - **Removing hydrophobic patches from the surface** — reduces the chance that two molecules stick together via an exposed hydrophobic surface (another anti-oligomerization measure).
- The combination of backbone-level and sequence-level negative design is why **DI-II_10 (and its siblings) are monomeric** (Module 2.1) — oligomerization is a "non-native state" that has been actively designed against.

**A retrospective validation — Top7:** the paper notes that **Top7** (Kuhlman, Dantas, Ireton, Varani, Stoddard & Baker, *Science* 2003) — historically **the first de novo-designed protein with a completely novel fold** (i.e., a fold not found in nature) — **also satisfies these same fundamental/emergent rules**, even though it was designed years earlier without them being formally articulated. This is presented as evidence that the rules describe something **real and general** about protein architecture, not an artifact of the specific design protocol used for the five "Di" proteins. (Top7 is also independently useful as a Module 6 timeline fact.)

---

## 4.9 ★★ DI-II_10 — Putting It All Together

**Identity & provenance:**
- **DI-II_10** = Fold-II ("**Rossmann2×2**"), design #10, designed by **R. Tatsumi-Koga**.
- Solution structure: **PDB 2LV8**; chemical-shift/NMR data: **BMRB 18558**.
- **No significant homology to any known natural protein** — BLAST E-value < 0.02 against the non-redundant NCBI protein database. It is genuinely *de novo*: not a redesign or repurposing of an existing natural fold.

**Topology — Fold II / "Rossmann2×2":**
- DI-II_10 is an **α/β (alternating) protein** (Module 2.4): its secondary-structure elements alternate between α-helices and β-strands along the sequence.
- The "Rossmann" family name signals the classic **β-α-β (βαβ) supersecondary motif** (Module 2.3): **parallel β-strands** connected by **α-helices that pack against the faces of the resulting sheet**, typically via **right-handed crossover connections** between strands.
- "**2×2**" indicates the design combines **two such βαβ-type units** — i.e., the overall sheet is built from two pairs of strand-helix-strand elements, with the rule-based design specifically using the **"(αβα) = (αβ)P + (βα)P/A"** decomposition (Module 4.6) to assign each unit's loop lengths.
- **Practical note:** for *exact* residue-range boundaries of each helix/strand in 2LV8 (e.g., "which residues form β1 vs. β2"), use **JUDE itself** (Module 5) — this is precisely the kind of element-identification task the molecular-visualization portion of the exam tests, and it's more reliable to read directly off the loaded structure than to memorize a number that could be mis-transcribed.

**Experimental properties (apply the Module 3.6 toolkit to this specific protein):**
- **Monomeric** (confirmed by SEC-MALS).
- **αβ-type far-UV CD spectrum**, consistent with its mixed α/β secondary-structure content.
- **Tm ≥ 95°C** — extraordinarily thermostable for a small protein.
- **ΔG of unfolding > 5 kcal/mol** from GuHCl denaturation (two-state fit).
- **Soluble at high concentration** (the paper reports the five best designs, including DI-II_10, are soluble in the **0.9–1.6 mM** range).
- **Well-resolved 2D ¹H–¹⁵N HSQC NMR spectrum** — sharp, well-dispersed peaks indicating a well-folded, well-packed structure; this is also *why* DI-II_10 was selected as Fold-II's representative for full NMR structure determination (it was the **best-resolved** of the 12 Fold-II designs).
- **NMR structure closely matches the computational design model** — both the overall backbone topology *and* the detailed arrangement of core side chains (low Cα RMSD between model and experiment).

---

## MODULE 4 — QUICK-REFERENCE SUMMARY (for flashcard mining)

- **"Ideal protein"** = designed with **no functional constraints**, built from **α-helices + β-strands + minimal loops**, with **completely consistent local and non-local interactions** → strongly funneled landscape; avoids natural proteins' non-ideal features (kinked helices, bulged strands, strained loops, buried polar groups).
- Tools: **Rosetta** (design/simulation), **Rosetta@home** (crowdsourced *ab initio* simulation), **Foldit** (manual visual cleanup).
- **"Di-II_10"** = **D**esigned **i**deal protein, **Fold II** (Rossmann2×2), design **#10**; PDB **2LV8**, BMRB **18558**; designed by **R. Tatsumi-Koga**.
- Five folds: I = ferredoxin-like (2KL8), **II = Rossmann2×2 (2LV8, ★this event★)**, III = IF3-like (2LN3), IV = P-loop2×2 (2LVB), V = Rossmann3×1 (2LTA). **Fold II had the highest success rate (33%, 4/12).**
- **Three junction classes / fundamental rules:**
  - **ββ-rule:** loop 2–3 → **L** hairpin; loop 5 → **R** hairpin.
  - **βα-rule:** loop 2 → **P**; loop 3 → **A**.
  - **αβ-rule:** generally **P**; strongly for loop 2; longer loops OK if they N-cap the helix without extending the strand.
  - All three are **sequence-independent** — they come from the **L-chirality and conformational preferences of the backbone itself**, confirmed in both simulations and native PDB structures.
- **Emergent rules** = same logic extended to **three-element units** (ββα, αββ chirality; βαβ foldability); depend on element *and* loop lengths; **follow from** the fundamental rules.
- **Design workflow (order!):** (1) choose topology & assign lengths via the rules → (2) Rosetta fragment-assembly folding sims → backbone ensemble → (3) RosettaDesign sequence (layer scheme) → (4) iterate design/relax → (5) filter by energy/RosettaHoles/local-compatibility (+ Foldit cleanup) → (6) Rosetta@home *ab initio* landscape mapping (**~10% are funnel-shaped → selected**) → (7) experimental characterization.
- **Folds II–V layer scheme:** Core = **V,I,L,M,F,Y,W** (favor I/L/F); Boundary = **V,I,L,Y,W,D,E,N,Q,K,R,S,T**; Surface = **D,E,N,Q,K,R,S,T,H**. **Ala** → core/boundary helices & loops only. **Gly** → loops only (any layer). **Pro** → loops & helix/strand starts. **Helix N-cap residue** → D/N/S/T. **Edge strands** get inward polar/charged residues (negative design). **F/Y/H** χ2 restricted to 70–110° (Folds III–V).
- **Positive design** = optimize the target (core packing). **Negative design** = backbone-level (the rules themselves) + sequence-level (edge-strand polar residues, no surface hydrophobic patches) → result: **monomeric**, no oligomerization.
- **Top7** (2003, Kuhlman/Baker) = first de novo novel-fold protein; retroactively satisfies these same rules.
- **DI-II_10 facts:** α/β alternating, Rossmann2×2 (two βαβ-type units), no natural homolog (BLAST E < 0.02), monomeric, αβ CD spectrum, **Tm ≥ 95°C**, **ΔG(unfold) > 5 kcal/mol**, soluble 0.9–1.6 mM, well-resolved HSQC, NMR structure ≈ design model.
# MODULE 5 — MOLECULAR VISUALIZATION (JUDE / Jmol)

> Covers rules c.i (identify secondary-structure elements and the specific amino acids found in
> them) and c.ii (the chemical environment around specific amino-acid side chains that stabilizes
> structure). The rules state the written exam assesses "their ability to explore protein
> structures in the molecular visualization environment, JUDE" — meaning some exam content is
> designed to be answered *using* JUDE during the test itself, working with the live 2LV8
> structure. This module builds the **transferable skills and offline knowledge** so that, when
> you're sitting in front of JUDE with DI-II_10 loaded, you already know exactly what to look for
> and how to reason about it. c.ii is explicitly the **deeper, State/Nationals-weighted skill** —
> "explaining" rather than just "identifying."

---

## 5.1 What JUDE Is

- **JUDE = Jmol User Design Environment** — a browser-based molecular visualization tool built on top of **Jmol** (an open-source molecular viewer), provided by **3D Molecular Designs** (the event's sponsor) at `learn.3dmoleculardesigns.com/digital-modeling-hub/jude_online_jmol`.
- For this event, JUDE is loaded with **DI-II_10's structure (residues 1–100 of PDB 2LV8)**.
- **Rules reminder (testable as a procedural fact, not just logistics):** participants **may not visit websites outside of the JUDE environment** during the competition — JUDE is a self-contained sandbox for this purpose.
- 2LV8 is a **solution NMR structure** — meaning the PDB file contains **multiple "models"** (an ensemble of conformers consistent with the NMR data), not one single rigid structure. Be ready for the idea that "the structure" you're looking at might be one member of an ensemble, and that flexible regions (often loops) may differ more between models than rigid regions (often the core).

---

## 5.2 Reading Structure Representations

Different visualization "styles" emphasize different information. Know what each is good for, because exam questions may describe a representation in words ("the image shows arrows and coils...") and expect you to interpret it.

| Representation | What it shows | Best for... |
|---|---|---|
| **Cartoon / ribbon** | Simplified shapes: helices as **coils or cylinders**, strands as **flat arrows**, loops as **thin tubes/strings** | **Fastest way to identify secondary structure** (c.i) — this is almost certainly the default/primary view for "what kind of element is residue X in?" questions |
| **Backbone / Cα trace** | Just the path of the α-carbons, connected | Seeing the overall fold/topology without clutter |
| **Wireframe / line** | All bonds as thin lines, no atom "size" | Seeing exact connectivity, useful for measuring distances/angles |
| **Ball-and-stick** | Atoms as small spheres, bonds as sticks | **Reading individual side-chain identity** — you can see exactly which atoms (and how many) make up an R group |
| **Spacefill (van der Waals spheres)** | Atoms as space-filling spheres at their van der Waals radii | Visualizing **packing** — how tightly the core is packed, whether there are voids (ties to RosettaHoles/Module 4.7) |

**Cartoon arrows — direction matters.** A β-strand's **arrowhead points toward the C-terminus** of that strand. This is how you read **parallel vs. antiparallel** (Module 2.2.2) directly off a cartoon: if all the arrows in a sheet point the same way, it's parallel; if adjacent arrows point opposite ways, it's antiparallel.

**Recognizing side chains by shape (ball-and-stick), linking back to Module 1:**
- **Rings:** Phe (plain 6-membered ring), Tyr (6-membered ring + terminal –OH), Trp (fused bicyclic indole — the biggest), His (5-membered imidazole ring with two N's).
- **Carboxylates:** Asp (short chain ending in –COO⁻), Glu (one carbon longer).
- **Amides:** Asn, Gln — look like Asp/Glu but with the terminal O replaced/supplemented by N (–C(=O)NH₂).
- **Long basic chains:** Lys (straight chain ending in –NH₃⁺), Arg (chain ending in the branched guanidinium group — look for three N's clustered at the tip).
- **Sulfur-containing:** Cys (short chain ending in –SH — look for a single yellow/sulfur atom at the tip), Met (longer chain with an internal sulfur — thioether).
- **Branched aliphatics:** Val (short, branches at Cβ), Leu/Ile (one carbon longer, branch position differs between them).
- **Tiny/absent:** Gly (essentially nothing beyond the α-carbon's H), Ala (single methyl "stub").
- **The ring that bonds back to the backbone:** Pro — unmistakable once you know to look for the backbone nitrogen being part of a ring.

---

## 5.3 ★★ Identifying Secondary-Structure Elements and Their Residues (c.i)

This is the most literal reading of c.i: **"Ability to identify different secondary structural elements of a protein and specific amino acids found in these structures."**

Practice mapping in both directions:
1. **Given a residue number → identify its element.** Look at the cartoon: is residue *N* part of a coiled/cylindrical helix segment, a flat arrow (strand), or a thin connector (loop/turn)?
2. **Given an element → identify which residues compose it, and what's in it.** For a given helix or strand, be able to read off its approximate residue range, and identify which amino acids occupy notable positions within it (e.g., "is there a Pro at the start of this helix? a D/N/S/T just before it, consistent with N-capping?").

**Useful sub-skills that combine Modules 2 and 4 with live visualization:**
- **Counting strands in the sheet** and determining **parallel vs. antiparallel** by arrow direction (5.2) — then cross-checking against the **Rossmann2×2** expectation (mostly parallel strands, Module 4.9).
- **Identifying edge strands vs. central strands** — an edge strand has fewer neighboring strands (H-bonds to only one other strand instead of two); look for which strand is at the "outside" of the sheet in the cartoon.
- **Identifying helix N- and C-termini** and checking the residue *just before* a helix for the **D/N/S/T N-cap** pattern predicted by Module 4.7.
- **Finding turns/loops** and checking them for **Gly/Pro enrichment** (Modules 1.7, 2.2.3).
- **Locating the Cys residue(s)** (DI-II_10's design philosophy doesn't rely on disulfides for stability — Module 3.2 — so don't assume any Cys present must be disulfide-bonded; check distances if asked).

---

## 5.4 ★★★ Chemical Environment Around a Side Chain (c.ii — the deeper skill)

This is the literal reading of c.ii: **"Chemical environment around specific amino acid side chains that stabilize structure."** This is explicitly called out as a **State/National-weighted skill** (per the scoring rubric's emphasis on sidechains explaining structure at higher levels) — it's not enough to *name* a residue; you must be able to **explain its role**.

### A reasoning checklist — apply this to any queried residue

1. **Buried (core) or exposed (surface)?**
   - Visually: is the residue surrounded by other side chains on most sides (buried), or does it have a clear path to open space/solvent (exposed)?
   - Chemically: does its identity *match* its environment, per the Module 4.7 layer scheme? A **Leu, Ile, Phe, or Val** sitting in a tightly packed interior position is "as expected" (core). An **Asp, Glu, Lys, Arg, or Gln** sitting on the outside, with nothing packed against much of its surface, is "as expected" (surface). A mismatch (e.g., a charged residue buried with no obvious partner) is the kind of thing worth flagging/explaining.

2. **What is it interacting with?** For each plausible interaction type (Module 3.1), ask whether the geometry supports it:
   - **Hydrogen bonds** — is there a polar donor (N–H, O–H) near a polar acceptor (O, N) at roughly **2.7–3.2 Å** (donor-to-acceptor heavy-atom distance)? Could be backbone-backbone (defines secondary structure), backbone-sidechain (e.g., an N-cap), or sidechain-sidechain.
   - **Salt bridges** — is there an oppositely-charged pair (Asp/Glu ↔ Lys/Arg/His) with their charged groups close together, roughly **within 4 Å**? Is the pair buried (likely more impactful) or surface-exposed (likely less impactful) — Module 3.1's context-dependence point.
   - **Hydrophobic packing** — is the residue surrounded by other nonpolar side chains (Leu, Ile, Val, Phe, Met, etc.) with close van der Waals contact (no large gaps)?
   - **Aromatic stacking / cation-π** — are there two aromatic rings (Phe/Tyr/Trp/His) near each other in a stacked or T-shaped arrangement? Is a Lys/Arg side chain positioned near the face of an aromatic ring?
   - **Disulfide** — if the residue is Cys, is there a second Cys with its sulfur atom within **~2.05 Å** (the S–S covalent bond length)? If not, this Cys is simply a (green-coded) free thiol, not a crosslink.

3. **Connect back to the design logic.** Articulate *why* this environment makes sense in terms of Module 4: e.g., "this Ile is in the core, consistent with the core layer's allowed-residue set and the goal of close-packed, void-free packing" or "this Glu sits on an edge strand pointing inward, consistent with the negative-design strategy against edge-to-edge aggregation."

### Using distance measurements in Jmol

JUDE/Jmol allows selecting two atoms and measuring the **distance between them** (and similarly, angles between three atoms, or dihedrals between four). Use this to **quantitatively justify** a claimed interaction rather than relying on appearance alone:

- **Hydrogen bond:** donor-heavy-atom-to-acceptor-heavy-atom distance roughly **2.7–3.2 Å**, with reasonable donor-H...acceptor geometry (close to linear).
- **Salt bridge:** charged-group-to-charged-group distance roughly **≤ 4 Å**.
- **Disulfide bond:** S–S distance roughly **2.05 Å** (a true covalent bond — much shorter than any non-covalent contact).
- **General van der Waals contact:** atoms roughly at the sum of their van der Waals radii apart (a few Å, varies by element) — "touching but not overlapping."

If a question gives you a measured distance and asks you to interpret it, match it against this list: a ~2.0 Å S–S distance screams disulfide; a ~2.9 Å O···N distance screams hydrogen bond; a ~3.5 Å distance between two carboxylate/amine groups is consistent with a salt bridge.

---

## 5.5 Practical Jmol / PDB-File Literacy

### PDB file anatomy (recognition-level)

- **ATOM records** — one line per atom, specifying (among other fields) the **atom name**, the **residue name** (3-letter amino acid code — tying directly to Module 1.3's table), the **residue number**, the **chain identifier**, and **x/y/z coordinates**.
- **Multiple MODEL records** — for an NMR ensemble like 2LV8, the file contains several complete sets of coordinates (one per "model"/conformer), each representing one structure consistent with the experimental NMR restraints.
- The **RCSB Protein Data Bank (PDB)** is the public, central repository for experimentally determined macromolecular structures — DI-II_10's structure (2LV8) and the other four "Di" designs (Module 4.2) are all deposited there, freely accessible.

### Common JUDE/Jmol operations you may need to describe or perform

- **Selecting a residue** (by number, by name, or by clicking) to highlight/inspect it in isolation.
- **Changing representation/style** (cartoon, ball-and-stick, spacefill, etc. — Module 5.2).
- **Coloring by property** — e.g., applying the **hydrophobic=yellow / hydrophilic=white / acidic=red / basic=blue / Cys=green** scheme from Module 1.5 to visualize the distribution of residue types across the structure (a great way to *see* the core/boundary/surface layering of Module 4.7 — the core should look predominantly yellow).
- **Measuring distances/angles** between selected atoms (5.4).
- **Toggling between NMR models** (if the interface allows stepping through the ensemble) to assess which regions are rigid (similar across models) vs. flexible (variable across models — often loops).

---

## MODULE 5 — QUICK-REFERENCE SUMMARY (for flashcard mining)

- **JUDE = Jmol User Design Environment**, browser-based, built on **Jmol**, by **3D Molecular Designs**; loads **DI-II_10 / 2LV8, residues 1–100**; participants may not browse outside JUDE during the event.
- **2LV8 = solution NMR structure = an ensemble of multiple models**, not one rigid structure.
- Representations: **cartoon/ribbon** (best for secondary structure — helices=coils/cylinders, strands=arrows pointing toward C-terminus, loops=tubes), **backbone/Cα trace**, **wireframe**, **ball-and-stick** (best for reading side-chain identity), **spacefill** (best for packing/voids).
- Arrow direction in cartoons reveals **parallel vs. antiparallel** sheets directly.
- Side-chain recognition cheat sheet: rings = Phe/Tyr/Trp/His; carboxylates = Asp/Glu; amides = Asn/Gln; long basic chains = Lys/Arg; sulfur = Cys (terminal –SH)/Met (internal thioether); branched = Val/Leu/Ile; minimal = Gly/Ala; ring-to-backbone = Pro.
- **c.i skill:** map residue↔element in both directions; check for N-cap (D/N/S/T before helices), Gly/Pro in turns, edge vs. central strands, parallel vs. antiparallel.
- **c.ii skill (deeper, State/Nats-weighted):** for any residue, determine buried-vs-exposed, identify its specific stabilizing interaction(s) (H-bond, salt bridge, hydrophobic packing, aromatic stacking, disulfide), and **explain why** in terms of Module 4's design logic.
- **Distance benchmarks:** H-bond ≈ 2.7–3.2 Å; salt bridge ≈ ≤4 Å; disulfide S–S ≈ 2.05 Å.
- PDB files: ATOM records (atom name, residue name/number, chain, xyz); NMR files have multiple MODEL blocks; **RCSB PDB** = the public structure repository.
# MODULE 6 — CURRENT STATE OF DE NOVO PROTEIN DESIGN
## ★ STATE & NATIONAL TOURNAMENTS ONLY ★

> Covers rule b.iv: **"At State and National Tournaments, students will be asked questions about
> the current state of the field of de novo protein design."** This module is explicitly *not*
> part of the Regional exam — Regional competitors can treat Modules 1–5 as the complete syllabus.
> State/Nationals competitors should treat this module as required.
>
> **A currency note:** this field moves fast (new papers monthly). Everything below is anchored to
> sources from 2022–2026, but if you're studying close to a State/National competition, it's worth
> doing a quick search for "de novo protein design [current year]" to catch anything that's
> happened since this guide was written — especially any *new* Nobel-adjacent or headline result.

---

## 6.1 Vocabulary You Must Get Right

Two distinctions show up constantly, in both directions, on this material:

- **De novo design** vs. **redesign/engineering**: *de novo* design means creating a protein with **no natural template** — the sequence and/or structure is generated essentially "from scratch," as opposed to taking an existing natural protein and modifying it for a new purpose (redesign/engineering). **The five "Di" proteins from Module 4 are de novo** — none has a natural homolog.
- **Structure prediction** vs. **design** (these are *opposite directions* of the same underlying relationship between sequence and structure):
  - **Structure prediction:** given a **sequence**, predict its **3D structure**. (e.g., AlphaFold.)
  - **Design (including "inverse folding"):** given a desired **3D structure (backbone)**, generate a **sequence** predicted to fold into it. (e.g., ProteinMPNN.) "**Inverse folding**" is the more technical synonym for this direction — it's literally folding-prediction run "in reverse."
  - A full modern design pipeline (6.4) typically uses tools from **both** directions together.

---

## 6.2 ★★ Timeline of Milestones

| Year | Advance | Key people/lab | Significance |
|---|---|---|---|
| **2003** | **Top7** — first de novo protein with a **completely novel fold** (a fold not seen in nature) | Kuhlman, Dantas, Ireton, Varani, Stoddard, Baker (Rosetta/Baker lab) | Proof-of-concept that *novel folds*, not just redesigns of natural ones, are designable. (Also independently relevant: Module 4.8 notes Top7 retroactively satisfies the Koga rules.) |
| **2010** | **Foldit** | Cooper et al., Baker lab | Crowdsourced, game-based protein-folding/design platform; used in the Koga workflow's manual cleanup step (Module 4.1, 4.6). |
| **2012** | **"Principles for designing ideal protein structures"** (this event's core paper) | Koga, Tatsumi-Koga, et al., Baker lab | Rule-based, rational design of funneled landscapes — produced the five "Di" proteins including DI-II_10. |
| **2020–2021** | **AlphaFold2** | Demis Hassabis & John Jumper, Google DeepMind (with RoseTTAFold as a contemporaneous Baker-lab approach) | Near-experimental-accuracy **structure prediction** from sequence alone; subsequently used to predict the structures of essentially all ~200 million proteins in major sequence databases. |
| **2022** | **ProteinMPNN** | Dauparas et al., Baker lab | Fast, robust, deep-learning **sequence design / inverse folding** — given a backbone, predict a sequence likely to fold into it; dramatically improved success rates for designs generated by other backbone-generation methods. |
| **2023** | **RFdiffusion** (+ RFdiffusion All-Atom, LigandMPNN) | Watson et al., Baker lab | A **generative diffusion model** (borrowed from image-generation AI) that creates **novel protein backbones** to specification — including binders to specific targets and symmetric multi-chain assemblies. RFdiffusion All-Atom and LigandMPNN extend this to designs involving small-molecule ligands. |
| **2024** | **AlphaFold3** | Google DeepMind | Extends structure prediction beyond single proteins to **complexes** — proteins with ligands, nucleic acids, and other biomolecules. |
| **2024** | **2024 Nobel Prize in Chemistry** (see 6.3) | Baker / Hassabis & Jumper | Formal recognition of the design + prediction breakthroughs above. |

---

## 6.3 ★★★ The 2024 Nobel Prize in Chemistry — High-Probability Exam Item

This is about as close to a "guaranteed" State/Nationals question as exists in this module. Get every detail right.

- **Announced:** October 9, 2024.
- **The prize was split into two halves:**
  - **One half → David Baker** (University of Washington, Institute for Protein Design) — **"for computational protein design."** Baker's contribution is specifically about the **design** direction (sequence/structure → new proteins) — this is the same Baker lab responsible for Rosetta, the Koga "ideal protein" paper, Top7, ProteinMPNN, and RFdiffusion.
  - **The other half → Demis Hassabis and John M. Jumper** (Google DeepMind), **shared jointly** — **"for protein structure prediction."** Their contribution is the **prediction** direction — **AlphaFold / AlphaFold2**.
- **Why this matters / the framing the Nobel committee used:** the prize recognizes that scientists can now (a) **predict** the 3D structure of essentially any natural protein from its sequence, and (b) **design** entirely new proteins/sequences that fold into a desired structure — the two complementary halves of the sequence↔structure relationship. This was widely noted as the **first Nobel Prize for a scientific advance substantially enabled by artificial intelligence/deep learning**.
- **Common mix-ups to avoid:**
  - Do **not** say Baker won for AlphaFold, or that Hassabis/Jumper won for protein *design* — the halves are **design (Baker)** vs. **prediction (Hassabis & Jumper)**, and these are different (if related) problems.
  - Hassabis and Jumper share **one half jointly** (i.e., it's a 1/4 + 1/4 split between them on that side, vs. Baker's full 1/2) — but conceptually it's most useful to remember it as "**one whole half to Baker, the other whole half split between Hassabis and Jumper**."

---

## 6.4 ★★ The Modern De Novo Design Pipeline

A common contemporary workflow (post-2023) for designing a new protein (e.g., a binder to a specific target) chains together tools from both "directions" (6.1), often iterated:

> **RFdiffusion (generate a candidate backbone) → ProteinMPNN (design a sequence for that backbone) → AlphaFold2 (predict the structure of the designed sequence, and check whether the prediction matches the intended backbone — i.e., validate/filter)**

- **RFdiffusion** generates the **backbone** — the overall shape/topology — often without any specific sequence in mind yet, sometimes "hallucinating" novel shapes or "diffusing" toward a shape compatible with binding a specified target.
- **ProteinMPNN** (and related tools like **LigandMPNN** for ligand-containing contexts) then performs **inverse folding** — finding a sequence likely to actually adopt that backbone.
- **AlphaFold2** (or similar structure predictors) is used as a **filter/validation step** — predict the structure of the proposed sequence and check its agreement (e.g., via predicted confidence metrics like **pLDDT**, and structural agreement metrics like **RMSD** to the intended backbone) with what was intended. Designs that don't pass this filter are discarded before any lab work.
- **Rosetta-based metrics** (energy scores, ddG, packing — the same families of metrics from Module 4.6) remain in use as additional screens even in these AI-centric pipelines.
- **"Hallucination"** is an alternative/complementary backbone-generation strategy (predating or alongside diffusion-based methods like RFdiffusion) — broadly, using a structure-prediction network "in reverse" by optimizing an input sequence (or backbone) to make the predictor confidently predict a desired (often novel) structure.

**The throughline back to Module 4:** notice that even in this AI-heavy, 2020s pipeline, the same conceptual roles persist — generate/constrain a **backbone** (the modern analog of Module 4's "choose secondary-structure lengths via the rules" step), then **design a sequence onto it** (the modern analog of RosettaDesign + the layer scheme), then **filter/validate** (the modern analog of the energy/packing/landscape filters). The *tools* changed; the *workflow logic* — backbone, then sequence, then filter — did not.

---

## 6.5 Applications and Frontiers

**Application areas for de novo-designed proteins** (good for "name an application" short answers):
- **Enzymes** — designing novel catalysts for reactions with no natural enzyme.
- **Therapeutics and binders** — proteins designed to bind a specific disease-relevant target (e.g., a viral surface protein, a cell-surface receptor).
- **Vaccines** — designed scaffolds that present a specific antigenic epitope in an immunogenic way.
- **Nanomaterials and self-assembling structures** — designed proteins that assemble into larger symmetric structures (cages, fibers, 2D arrays).
- **Biosensors** — proteins designed to change conformation or signal in response to a specific molecule.

**Where the field stands (as of recent reviews, ~2025–2026):**
- For **designing novel structures, symmetric assemblies, and binders**, the field has reached the point where the central open questions are shifting from **"how do we design this?"** (largely solved in broad strokes, thanks to RFdiffusion/ProteinMPNN/AlphaFold-class tools) to **"what should we design?"** — i.e., identifying valuable targets/applications, rather than overcoming fundamental design-method limitations.
- **Harder, still-open frontiers** include: **de novo design of enzymes** (catalysis is much harder to design for than structure/binding alone, because it requires precise transition-state stabilization, not just a stable fold), **small-molecule binder design** (binding pockets for non-protein, often flexible, small molecules), and **multistate / dynamic proteins** (proteins that need to adopt *more than one* functional conformation — e.g., molecular switches/machines — which is in some tension with the "single funneled minimum" ideal-protein philosophy of Module 4).

---

## 6.6 Conceptual Through-Lines Back to the Koga Paper

Even as the *methods* have become overwhelmingly AI/deep-learning-driven, the **physical concepts from Modules 3–4 remain the foundation**:

- **Funnel-shaped energy landscapes** and the requirement for **consistent local + non-local interactions** (Module 3.4) are still the underlying *physical* description of what "a well-designed protein" means — modern AI tools are, in effect, much faster and more general ways of finding sequences/structures that satisfy this same underlying physical criterion.
- **Positive vs. negative design** (Module 3.5) remains standard vocabulary — e.g., a binder design needs positive design for the binding interface and negative design against binding unintended targets or self-aggregating.
- The **core/boundary/surface, hydrophobic-in/polar-out logic** (Modules 1.8, 4.7) is implicitly learned and reproduced by tools like ProteinMPNN, which were trained on large databases of real (and designed) protein structures that obey exactly these patterns.

---

## MODULE 6 — QUICK-REFERENCE SUMMARY (for flashcard mining)

- **De novo** = from scratch, no natural template (the five "Di" proteins qualify). **Structure prediction** (sequence→structure, e.g., AlphaFold) vs. **design/inverse folding** (structure→sequence, e.g., ProteinMPNN) are opposite directions.
- Timeline: **2003 Top7** (first novel-fold de novo protein, Baker lab) → **2010 Foldit** → **2012 Koga ideal-protein rules** → **2020–21 AlphaFold2** (Hassabis & Jumper, structure prediction) → **2022 ProteinMPNN** (Dauparas/Baker, inverse folding) → **2023 RFdiffusion** (Baker lab, generative backbone design) → **2024 AlphaFold3** (complexes) → **2024 Nobel Prize**.
- **2024 Nobel Prize in Chemistry:** announced Oct 9, 2024. **Half to David Baker** for **computational protein design**; **other half jointly to Demis Hassabis & John Jumper** (Google DeepMind) for **protein structure prediction (AlphaFold)**. First Nobel substantially built on AI/deep learning. Do NOT swap design↔prediction between the laureates.
- **Modern pipeline:** **RFdiffusion (backbone) → ProteinMPNN (sequence) → AlphaFold2 (predict/filter, e.g., pLDDT, RMSD)**, often iterated, with Rosetta-style energy/packing metrics still used as screens. "Hallucination" = an alternative backbone-generation approach.
- Applications: enzymes, therapeutic binders, vaccines, self-assembling nanomaterials, biosensors.
- Field status: structure/assembly/binder design is largely "solved in principle" — focus shifting to **"what to design"**; **enzymes, small-molecule binders, and multistate/dynamic proteins** remain hard, open frontiers.
- The physical core — **funneled landscapes, local/non-local consistency, positive/negative design, hydrophobic-in/polar-out** — is unchanged; AI tools are faster/more general ways of satisfying the same physics.
# MODULE 7 — SUPPORTING / PERIPHERAL TOPICS

> General "protein structure and function knowledge" backdrop. These topics are unlikely to be the
> focus of the exam but show up as occasional one-off multiple-choice items, or as context for a
> question that's really testing Modules 1–5. Keep this module light — don't let it crowd out
> study time for Modules 1–5, which are the actual core.

---

## 7.1 From Gene to Protein (Central Dogma, Briefly)

- **Central dogma:** DNA → (transcription) → RNA → (translation) → Protein.
- **Translation** occurs at the **ribosome**, reading **messenger RNA (mRNA)** in triplet units called **codons**, each specifying one amino acid (or a "stop" signal).
- **AUG is the start codon**, and it codes for **methionine (Met)** — this is why, in newly synthesized proteins, **Met is (initially) the N-terminal residue** (it may be enzymatically removed afterward in many proteins). Ties back to Module 1.3's note on Met.
- **The genetic code is the mapping from the 64 possible codons to the 20 amino acids (+ stop signals)** — multiple codons can encode the same amino acid ("degeneracy"/"redundancy"), but each codon specifies only one amino acid (the code is unambiguous). You don't need to memorize the codon table for this event, but understand that this mapping is what a "genetic codon chart" (like the 3DMD poster referenced in Module 1.5) visually connects to the amino-acid color scheme.

---

## 7.2 Protein Function Classes (Recognition-Level)

DI-II_10 itself is **not** a natural, functional protein — it's a designed scaffold with **no specified biological function**, which is part of the point (Module 4.1's "no functional constraints"). Still, general knowledge of *what proteins do* may appear as background context:

- **Enzymes** — catalyze biochemical reactions; often feature an **active site** with precisely positioned residues (frequently including **His, Asp/Glu, Ser, Cys** — note how many of these are the "special" or ionizable residues from Module 1.6–1.7) that bind a **substrate** and stabilize the transition state.
- **Structural proteins** — provide mechanical support (e.g., collagen, keratin — typically *not* globular α/β proteins like DI-II_10, but extended/fibrous).
- **Transport proteins** — carry molecules (e.g., hemoglobin carries O₂; membrane transporters move ions/molecules across membranes).
- **Signaling proteins / receptors** — receive and relay chemical signals (e.g., cell-surface receptors, often featuring **helix-turn-helix** or other motifs from Module 2.3 in their binding domains).
- **Antibodies (immunoglobulins)** — recognize and bind specific antigens; classic **all-β** fold family (contrast with DI-II_10's α/β fold).
- **Motor proteins** — convert chemical energy (ATP hydrolysis) into mechanical motion (e.g., myosin, kinesin).

---

## 7.3 The Protein Data Bank and Structure Determination — Consolidated Reference

(This consolidates points first introduced in Modules 3.6 and 5.5 into one quick reference.)

- **RCSB Protein Data Bank (PDB)** — the central, public repository of experimentally determined 3D macromolecular structures. Every "Di" design (Module 4.2), including DI-II_10 (**2LV8**), is deposited here and freely downloadable.
- **Three major experimental structure-determination methods:**
  - **X-ray crystallography** — requires growing a crystal of the protein; historically the most common method, especially for larger proteins; produces a single (or few) high-resolution static structure(s).
  - **NMR (nuclear magnetic resonance) spectroscopy** — performed in solution (no crystal needed); well-suited to smaller proteins; naturally produces an **ensemble of models** and can report on dynamics; **this is the method used for DI-II_10/2LV8**.
  - **Cryo-electron microscopy (cryo-EM)** — increasingly important for large complexes/assemblies that resist crystallization; images many individual particles and computationally averages/reconstructs a 3D structure.

---

## 7.4 Real-World Motivation: Misfolding and Aggregation

A brief but useful context point that motivates *why* negative design against aggregation (Modules 2.2.2, 3.5, 4.8) matters beyond this one designed protein: when proteins **fail** to reach (or fail to stay in) their native fold, the regions that would normally be buried (often hydrophobic patches or edge strands) can mediate **aggregation** — proteins sticking together into large, often insoluble assemblies. **Amyloid diseases** (e.g., the protein aggregates implicated in Alzheimer's and Parkinson's disease) and **prion diseases** (where a misfolded conformation can convert correctly folded copies into the misfolded form) are real-world examples of what happens when the "funneled landscape, no competing states" picture (Module 3.4) breaks down. This is *background context*, not a design detail of DI-II_10 itself — but it illustrates concretely why "is this edge strand designed to avoid aggregation?" (Module 4.8) is a meaningful, real-world-motivated question, not just an abstract optimization detail.

## 7.5 Molecular Chaperones (Brief)

In cells, **not all proteins fold entirely "on their own"** the way Anfinsen's RNase A experiment (Module 2.1) demonstrated *can* happen in principle. **Molecular chaperones** are helper proteins that assist folding — primarily by **preventing premature aggregation** of partially-folded chains (e.g., by transiently shielding exposed hydrophobic surfaces), rather than by directly "instructing" the correct fold. Two classic, name-recognition-level examples:

- **Hsp70 (heat-shock protein 70) family:** bind exposed hydrophobic stretches on nascent or stress-unfolded chains, using ATP-driven cycles of binding/release to give the chain repeated chances to fold correctly without aggregating.
- **Chaperonins (e.g., GroEL/GroES in bacteria; Hsp60 family more broadly):** large barrel-shaped complexes that **enclose a single unfolded/misfolded protein in an isolated chamber**, giving it an aggregation-free environment in which to fold, again often using ATP cycling.

**Connection back to the "ideal protein" philosophy (Module 4.1):** DI-II_10 is **small, single-domain, and "ideal"** — exactly the category of protein most likely to fold efficiently **without** chaperone assistance, much like Anfinsen's RNase A could refold spontaneously in a test tube. Chaperone dependence tends to scale with size, multi-domain complexity, and the presence of long-lived partially-folded intermediates — all things the "ideal protein" design philosophy specifically minimizes. Chaperones are general cell-biology background, not a feature of DI-II_10's design.

## 7.6 Intrinsically Disordered Proteins (IDPs) — Contrast Case

An **intrinsically disordered protein (or region), IDP/IDR**, does **not** adopt a single, stable 3D structure on its own under physiological conditions — instead, it samples a broad ensemble of conformations, and may only fold into a defined structure **upon binding** a specific partner (a phenomenon sometimes called **"folding upon binding"**). IDPs are common in signaling and regulatory proteins, where the *flexibility itself* is functionally useful (e.g., allowing one disordered region to bind many different partners).

**Why this belongs in this guide:** IDPs are the **conceptual opposite** of an "ideal protein" (Module 4.1) — instead of a single, deep, funneled energy minimum, an IDP's landscape is **broad and relatively flat**, with many comparably-populated conformations. This is directly relevant to **Module 6.5's "open frontiers"**: designing **multistate or dynamic proteins** (proteins that need more than one functional conformation) is hard precisely *because* it requires engineering landscapes with **more than one** funnel/minimum — in tension with the single-funnel "ideal protein" philosophy that the Koga rules were built around. If a question asks you to contrast DI-II_10's design philosophy with a "hard, unsolved" modern design target, IDPs/multistate proteins are a strong, concrete answer.

---

## MODULE 7 — QUICK-REFERENCE SUMMARY (for flashcard mining)

- Central dogma: DNA→RNA→protein; **AUG = start codon = Met** (Module 1.3 tie-in).
- Genetic code: 64 codons → 20 amino acids + stop signals; degenerate (multiple codons per AA) but unambiguous (each codon → one AA).
- Protein function classes: enzymes (active site, catalysis — often His/Asp/Glu/Ser/Cys), structural (fibrous, e.g. collagen/keratin), transport (e.g. hemoglobin), signaling/receptors, antibodies (all-β), motor proteins (ATP-powered).
- **RCSB PDB** = public structure repository; DI-II_10 = **2LV8**.
- Structure determination: **X-ray crystallography** (crystal, static, high-res), **NMR** (solution, ensemble, dynamics — used for DI-II_10), **cryo-EM** (large complexes).
- **Amyloid/prion diseases** = real-world consequences of misfolding/aggregation — motivates negative design against aggregation (Module 4.8).
- **Molecular chaperones** (Hsp70, GroEL/GroES chaperonins) assist folding mainly by preventing aggregation, not by dictating structure; small "ideal" single-domain proteins like DI-II_10 are the category least dependent on them.
- **Intrinsically disordered proteins (IDPs)** = no single stable fold; broad/flat landscape; "folding upon binding"; conceptual opposite of "ideal protein"; relevant to Module 6's multistate/dynamic-protein frontier.

---

# APPENDICES — QUICK-REFERENCE CARDS

> The appendices are dense, single-purpose reference cards meant for last-minute review and for
> quickly cross-checking facts while making flashcards. They intentionally repeat information from
> the modules in compressed form — that repetition is a feature for spaced-repetition study.

---

## APPENDIX A — The 20 Amino Acids, One-Page Reference

| # | Name | 3-letter | 1-letter | Class | Charge @ pH7 | 3DMD/JUDE color | One key fact |
|---|---|---|---|---|---|---|---|
| 1 | Glycine | Gly | G | Nonpolar (minimal) | neutral | white | Only achiral AA; loops only in design |
| 2 | Alanine | Ala | A | Nonpolar/aliphatic | neutral | yellow | Small methyl group |
| 3 | Valine | Val | V | Nonpolar/aliphatic, branched | neutral | yellow | β-branched |
| 4 | Leucine | Leu | L | Nonpolar/aliphatic, branched | neutral | yellow | Most abundant AA in proteins |
| 5 | Isoleucine | Ile | I | Nonpolar/aliphatic, branched | neutral | yellow | β-branched; favored in core |
| 6 | Proline | Pro | P | Nonpolar (cyclic) | neutral | yellow | Rigid ring; helix/strand breaker |
| 7 | Phenylalanine | Phe | F | Aromatic | neutral | yellow | Benzyl ring; favored in core |
| 8 | Tyrosine | Tyr | Y | Aromatic + hydroxyl | neutral (pKa≈10.1) | yellow/white border | UV absorbance; phosphorylation site |
| 9 | Tryptophan | Trp | W | Aromatic | neutral | yellow | Largest AA; biggest UV absorber |
| 10 | Histidine | His | H | Aromatic + ionizable | ~neutral (pKa≈6.0) | white | Catalytic/metal-binding workhorse |
| 11 | Serine | Ser | S | Polar, hydroxyl | neutral | white | Helix N-cap; enzyme nucleophile |
| 12 | Threonine | Thr | T | Polar, hydroxyl, branched | neutral | white | β-branched; helix N-cap |
| 13 | Asparagine | Asn | N | Polar, amide | neutral | white | Amide of Asp; helix N-cap |
| 14 | Glutamine | Gln | Q | Polar, amide | neutral | white | Amide of Glu |
| 15 | Cysteine | Cys | C | Sulfur, thiol | neutral (pKa≈8.3) | green | Only disulfide-former |
| 16 | Methionine | Met | M | Sulfur, thioether | neutral | yellow | Start codon (AUG) residue |
| 17 | Aspartate | Asp | D | Acidic | **–1** (pKa≈3.9) | red | Salt bridges, catalysis |
| 18 | Glutamate | Glu | E | Acidic | **–1** (pKa≈4.1) | red | One carbon longer than Asp |
| 19 | Lysine | Lys | K | Basic | **+1** (pKa≈10.5) | blue | Long chain, primary amine |
| 20 | Arginine | Arg | R | Basic | **+1** (pKa≈12.5) | blue | Most basic AA; guanidinium |

**The two acid/amide pairs (most-missed codes):** D (Asp, acid) / N (Asn, amide); E (Glu, acid) / Q (Gln, amide).
**Non-self-explanatory codes:** R=Arg, K=Lys, W=Trp, Y=Tyr, F=Phe, plus the D/N/E/Q set above.

---

## APPENDIX B — pKa and Charge Quick Table

| Group | pKa | Below pKa | Above pKa | Charge @ pH 7 |
|---|---|---|---|---|
| C-terminal –COOH | ≈3.1 | neutral | negative | negative |
| Asp side chain | ≈3.9 | neutral | negative | negative |
| Glu side chain | ≈4.1 | neutral | negative | negative |
| His side chain | ≈6.0 | positive | neutral | mostly neutral (~10% positive) |
| Cys side chain | ≈8.3 | neutral | negative | neutral |
| N-terminal –NH₃⁺ | ≈9.0 | positive | neutral | positive |
| Tyr side chain | ≈10.1 | neutral | negative | neutral |
| Lys side chain | ≈10.5 | positive | neutral | positive |
| Arg side chain | ≈12.5 | positive | neutral | positive |

**pI** = pH at which net charge = 0. Below pKa → protonated form dominates; above pKa → deprotonated form dominates.

---

## APPENDIX C — Secondary Structure Cheat Sheet

| Feature | α-helix | β-sheet/strand | 3₁₀-helix | π-helix |
|---|---|---|---|---|
| H-bond pattern | i → i+4 | between strands (not within) | i → i+3 | i → i+5 |
| Residues/turn | 3.6 | — | tighter than α | wider than α |
| Rise/residue | ~1.5 Å | — | — | — |
| Pitch | ~5.4 Å | — | — | — |
| Side-chain direction | outward | alternate above/below plane (pleating) | outward | outward |
| Handedness | right-handed | sheet has right-handed twist | — | — |

- **Parallel sheet:** strands same N→C direction; angled H-bonds.
- **Antiparallel sheet:** strands alternate direction; straighter H-bonds; can form tight **β-hairpins**.
- **Edge strands:** aggregation-prone → targeted by negative design (inward polar/charged residues).
- **Helix dipole:** N-term partial +, C-term partial –; **N-cap residue = D/N/S/T** (provides side-chain H-bond to satisfy the unpaired N-terminal backbone NH/CO).
- **Ramachandran plot:** φ (x-axis) vs ψ (y-axis). α-region ≈ (–60°, –45°); β-region ≈ (–120°, +120°); left-handed-helix island ≈ (+60°, +45°), mostly Gly. Pro locked at φ≈–60°. ω≈180° (trans) assumed.
- **β-hairpin** = 2 antiparallel strands + tight turn (often Type I or II; Type II often has Gly at position 3).
- **Supersecondary motifs:** ββ (hairpin), βα/αβ (P or A orientation), βαβ (Rossmann-like), ββα/αββ (3-element units), helix-turn-helix, Greek key, β-meander.
- **Fold classes:** all-α, all-β, α+β (segregated), α/β (alternating — **DI-II_10's class**, classic Rossmann-type).

---

## APPENDIX D — The Koga Rules Card

**Naming:** "Di" = Designed ideal protein; Roman numeral = fold type; number = design ID. **DI-II_10 = Fold II ("Rossmann2×2"), design #10, PDB 2LV8, BMRB 18558, by R. Tatsumi-Koga.**

| Design | Fold | Name | PDB | BMRB |
|---|---|---|---|---|
| Di-I_5 | I | Ferredoxin-like | 2KL8 | 16387 |
| **Di-II_10** | **II** | **Rossmann2×2** | **2LV8** | **18558** |
| Di-III_14 | III | IF3-like | 2LN3 | 18145 |
| Di-IV_5 | IV | P-loop2×2 | 2LVB | 18561 |
| Di-V_7 | V | Rossmann3×1 | 2LTA | 18465 |

**Three fundamental rules** (sequence-independent; arise from backbone L-chirality & bendability; confirmed in both Rosetta sims and native PDB statistics):

| Rule | Junction type | Loop length → outcome |
|---|---|---|
| **ββ-rule** | strand→strand (hairpin) | 2–3 residue loop → **L** (left-handed); 5-residue loop → **R** (right-handed) |
| **βα-rule** | strand→helix | 2-residue loop → **P** (parallel); 3-residue loop → **A** (antiparallel) |
| **αβ-rule** | helix→strand | generally **P**; strongly for 2-residue loops; longer loops OK if they N-cap the helix without extending the strand |

**Emergent rules:** for 3-element units (ββα/αββ chirality, βαβ foldability), the favored conformation depends on **lengths of elements + loops**; these *follow from* the fundamental rules. For Folds II/IV/V, treat **(αβα) = (αβ)P + (βα)P/A**.

**Design workflow (order):** (1) choose topology + assign lengths via rules → (2) Rosetta fragment-assembly folding sims → backbone ensemble → (3) RosettaDesign sequence (layer scheme) → (4) iterate design/relax → (5) filter (energy, RosettaHoles, local compatibility) + Foldit cleanup → (6) Rosetta@home *ab initio* landscape mapping, **~10% funnel-shaped → selected** → (7) experimental characterization (CD/GuHCl/SEC-MALS/NMR).

**Success rates:** Fold-II = 4/12 (33%, highest overall robust performance); Fold-IV = 2/5 (40%, highest rate but smaller n); Fold-III = 3/14 (21%); Fold-I = 1/11 (9%); Fold-V = 1/12 (8%).

**Top7 (2003, Kuhlman/Baker):** first de novo novel-fold protein; retroactively satisfies these rules.

---

## APPENDIX E — Layer / Design Scheme Card

| Layer | SASA (helix/strand) | SASA (loop) | Allowed amino acids |
|---|---|---|---|
| Core | ≤15 Å² | ≤25 Å² | V, I, L, M, F, Y, W (I/L/F extra-favored) |
| Boundary | 15–60 Å² | 25–40 Å² | V, I, L, Y, W, D, E, N, Q, K, R, S, T |
| Surface | ≥60 Å² | ≥40 Å² | D, E, N, Q, K, R, S, T, H |

**Special placements:**
- **Ala** → core/boundary, helices & loops only (never surface, never strands).
- **Gly** → loops only (any layer).
- **Pro** → loops, and starts of helices/strands.
- **Helix N-cap residue** (loop position immediately before a helix) → **D, N, S, or T**.
- **Edge β-strands** → inward-pointing polar/charged residues (negative design vs. aggregation).
- **F/Y/H χ2** restricted to **70°–110°** (Folds III–V).

**Positive design** = optimize the target (e.g., core packing, minimal voids, near-crystalline density via RosettaHoles).
**Negative design** = disfavor competitors — backbone-level (the rules themselves, before sequence exists) + sequence-level (edge-strand polar residues, no surface hydrophobic patches) → **DI-II_10 is monomeric**.

---

## APPENDIX F — Methods Glossary

| Term | What it is / measures |
|---|---|
| **CD (circular dichroism)** | Far-UV CD spectrum → secondary-structure content/type (αβ pattern for DI-II_10); temperature series → **Tm** |
| **Tm (melting temperature)** | Temperature at which ~half the protein population is unfolded; DI-II_10 ≥95°C |
| **GuHCl denaturation** | Chemical unfolding curve fit to **two-state model** → **ΔG(unfold)** and **m-value** (cooperativity); DI-II_10 ΔG > 5 kcal/mol |
| **SEC-MALS** | Size-exclusion chromatography + light scattering → oligomeric state/MW; confirms DI-II_10 is **monomeric** |
| **NMR / HSQC / NOESY** | Solution structure determination; sharp/dispersed HSQC peaks → well-folded; NOESY → distance restraints for structure |
| **Rosetta** | Baker-lab software for structure prediction & design (folding sims, RosettaDesign, energy scoring) |
| **Rosetta@home** | Distributed computing for large-scale *ab initio* folding simulations (landscape mapping) |
| **RosettaHoles** | Metric penalizing internal voids/cavities — assesses packing quality |
| **Foldit** | Crowdsourced/game-based manual structure cleanup tool |
| **RFdiffusion** | (2023, Baker lab) Generative diffusion model for novel protein **backbones** |
| **ProteinMPNN** | (2022, Baker lab) Deep-learning **sequence design / inverse folding** given a backbone |
| **AlphaFold (2/3)** | (DeepMind) Deep-learning **structure prediction** from sequence; AF3 extends to complexes |
| **pLDDT** | AlphaFold's per-residue confidence metric, used to filter designs |
| **RMSD** | Root-mean-square deviation — measures structural similarity between two structures/models |

---

## APPENDIX G — De Novo Timeline + 2024 Nobel Card (★ State/Nationals)

| Year | Event |
|---|---|
| 2003 | **Top7** — first de novo novel-fold protein (Kuhlman/Baker) |
| 2010 | **Foldit** launched |
| 2012 | **Koga "ideal protein" rules** (this event's paper) |
| 2020–21 | **AlphaFold2** (Hassabis & Jumper) — structure prediction |
| 2022 | **ProteinMPNN** (Dauparas/Baker) — inverse folding |
| 2023 | **RFdiffusion** (Watson/Baker) — generative backbone design |
| 2024 | **AlphaFold3** — complexes |
| **2024** | **Nobel Prize in Chemistry**: ½ to **David Baker** (computational protein **design**); ½ jointly to **Demis Hassabis & John Jumper** (protein structure **prediction**, AlphaFold). First AI-enabled-breakthrough Chemistry Nobel. |

**Modern pipeline:** RFdiffusion (backbone) → ProteinMPNN (sequence) → AlphaFold2 (predict/filter via pLDDT, RMSD). "Hallucination" = alternative backbone-generation approach.

**Field status:** structure/assembly/binder design largely "solved in principle"; focus shifting to **"what to design"**; open frontiers = **enzymes, small-molecule binders, multistate/dynamic proteins**.

---

## APPENDIX H — Glossary of Must-Know Terms

| Term | Definition |
|---|---|
| **Zwitterion** | A molecule with both a positive and negative charge, net neutral (free amino acid at physiological pH) |
| **Residue** | An amino acid as part of a polypeptide chain (post peptide-bond formation) |
| **Chirality (L/D)** | Handedness of a stereocenter; proteins use **L**-amino acids |
| **Anfinsen hypothesis** | Sequence determines structure; native state = global free-energy minimum |
| **Hydrophobic effect** | Entropy-driven (water entropy) tendency of nonpolar groups to bury away from water — dominant folding force |
| **Salt bridge** | Electrostatic attraction between oppositely charged side chains (e.g., Asp/Glu↔Lys/Arg) |
| **Disulfide bond** | Covalent S–S crosslink between two Cys residues |
| **Levinthal's paradox** | Random conformational search can't explain fast folding → folding must be guided |
| **Folding funnel** | Energy landscape that narrows toward the native state (global minimum) |
| **Frustration** | Presence of competing low-energy (non-native) states on the landscape |
| **Molten globule** | Compact, partially folded intermediate lacking full tertiary packing |
| **Positive design** | Optimizing/stabilizing the target structure |
| **Negative design** | Destabilizing competing (non-native) structures/states |
| **Supersecondary structure / motif** | Small recurring combination of 2–3 secondary-structure elements (ββ, βα, αβ, βαβ, etc.) |
| **Chirality of a ββ-unit (L/R)** | Handedness of a β-hairpin's pleat/twist |
| **Orientation of βα/αβ-units (P/A)** | Which face of the sheet a packed helix sits on, relative to strand direction |
| **N-capping** | Side-chain H-bond from the loop residue before a helix that satisfies the helix's "dangling" N-terminal backbone H-bond donor/acceptor |
| **Layer (core/boundary/surface)** | SASA-based classification of each position in a designed structure, constraining allowed amino acids |
| **Monomeric** | Existing as a single polypeptide chain (no quaternary structure) — true of DI-II_10 |
| **De novo design** | Designing a protein with no natural template |
| **Inverse folding** | Given a structure, design a sequence to fold into it (opposite of structure prediction) |
| **Ideal protein** | A designed protein with no functional constraints, built from helices/strands/minimal loops with fully consistent local & non-local interactions |
