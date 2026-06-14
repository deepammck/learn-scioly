# Science Olympiad — Forensics (Division C)

## Master Study Guide — v6 (Complete & Supplemented)

**Audited against 2026 rules | Gap-filled against Allendale, CarSO, CLC, CMU, Fairfax, Haslett, HUSO, LexSO, NUSO, Southview, YJI**

**v6 changes:** Added §16 (Technical Appendix) covering a third gap-analysis pass: paper chromatography/TLC bench-procedure rules, fingerprint documentation/lifting order of operations, evidence collection from unusual surfaces (wet paint, ink sampling), numerical constants (sugar decomposition points, soil bulk densities, monomer molar masses), hair growth phase durations, blowfly egg-window timing, advanced biochemistry (hemoglobin α₂β₂ structure, fibroin amino acids, keratin/disulfide-curl relationship), dissolution thermodynamics (NH₄Cl endothermic, MgSO₄ exothermic), PETE/toluene resistance, EI-MS mass range, additional fingerprint-absence conditions (Naegeli-Franceschetti-Jadassohn), additional reagents (Tollens’/Fehling’s/sodium rhodizonate — note: “Tohling’s reagent” is almost certainly a misrendering of Tollens’), and historical figures (Bertillon, Galton, Marsh, Orfila, Locard). §16 content is **[NEW – general knowledge, unverified against invitational tests]**, same caveat as §15. v5 changes: Added §15 (General-Knowledge Supplement), fixed PS/HDPE/PC chemical-resistance contradiction (§2), added decomposition-stage table (§6, resolves autolysis inconsistency).

-----

## How to Use This Guide

Work top to bottom. Turn each section into Anki cards and test against real past tests from scioly.org Test Exchange. This v4 incorporates all content gaps identified across eleven invitational tests (Allendale, CarSO, CLC, CMU, Fairfax, Haslett, HUSO, LexSO, NUSO, Southview, YJI).

### Confidence Convention

- **Plain text** = conceptual material (mechanisms, vocabulary, test logic).
- **[VERIFIED – source]** = confirmed against a reputable primary source.
- **[⚠ UNVERIFIED]** = not confirmed; do not trust blindly.
- **[NEW – gap-filled]** = content added from invitational test analysis; verify against scioly wiki.

### Scoring Weights (from the rules) — spend time proportionally

- **Analysis of the Crime (3.f)** ≈ **30%** (and the tiebreaker)
- **Qualitative Analysis (3.b)** ≈ **20%**
- **Polymers / Fibers / Hair (3.c)** ≈ **20%**
- **Chromatography / Mass Spec (3.d)** ≈ **15%**
- **Crime-Scene Physical Evidence (3.e)** ≈ **15%**

-----

# §1. Qualitative Analysis — The 15 Substances (≈20%)

No mixtures. All teams get the same solids. Identification only. Treat as a dichotomous-key problem.

## The 15 Substances

Sodium acetate, sodium chloride, sodium hydrogen carbonate (bicarbonate), sodium carbonate, lithium chloride, potassium chloride, calcium nitrate, calcium sulfate, calcium carbonate, cornstarch, glucose, sucrose, magnesium sulfate, boric acid, ammonium chloride.

## Core Discriminating Tests

1. **Flame test** → the cation (metal)
1. **Water solubility**
1. **pH**
1. **Reaction with 1M HCl** → fizzing (CO₂) means carbonate/bicarbonate
1. **Indicator tests** → iodine (starch), Benedict’s (reducing sugar)
1. **Conductivity** → ionic solutions conduct; organics (glucose/sucrose/cornstarch) do not

## Flame Colors — Cation-Based [VERIFIED – RSC, LibreTexts]

|Cation            |Flame Color                                                       |
|------------------|------------------------------------------------------------------|
|Sodium (Na⁺)      |Intense yellow/orange                                             |
|Lithium (Li⁺)     |Red/crimson                                                       |
|Potassium (K⁺)    |Violet/lilac (cobalt-blue glass to filter Na)                     |
|Calcium (Ca²⁺)    |Orange-red / brick-red                                            |
|Boron (boric acid)|Green                                                             |
|Magnesium (Mg²⁺)  |No characteristic color (salt); burning Mg metal = brilliant white|
|Ammonium (NH₄⁺)   |None                                                              |

**⚠ WHY ions produce flame color [NEW – CarSO/NUSO gap]:** Metal ions absorb heat energy, promoting electrons to higher energy levels. As electrons fall back to ground state, photons of specific wavelengths are released. Each element’s electron configuration produces a unique wavelength → unique color. This is atomic emission spectroscopy at a macro scale.

## Indicator + Acid Tests

- **Iodine:** blue-black ONLY with starch → **cornstarch**.
- Specifically, **AMYLOSE** (the linear component of starch) reacts with iodine. Amylopectin (branched) does not. [NEW – YJI gap] The helical amylose structure traps I₃⁻ ions inside, producing the blue-black color.
- **KI (potassium iodide)** is needed because I₂ alone is nearly insoluble in water; KI forms soluble I₃⁻ ions. [NEW – LexSO/YJI gap]
- **Benedict’s (hot water bath):** green→orange→brick-red with reducing sugar → **glucose positive**. **Sucrose is non-reducing** → negative unless hydrolyzed.
- **Acid (HCl):** vigorous CO₂ with carbonates/bicarbonates → Na₂CO₃, NaHCO₃, CaCO₃. Bubble through limewater → milky to confirm CO₂. [VERIFIED]

## Benedict’s Reagent Composition [NEW – CarSO gap]

|Component                 |Role                                                                               |
|--------------------------|-----------------------------------------------------------------------------------|
|Copper(II) sulfate (CuSO₄)|Provides Cu²⁺ ions — the active oxidizing agent                                    |
|Sodium citrate            |Chelating agent — keeps Cu²⁺ in solution, prevents Cu(OH)₂ precipitation at high pH|
|Sodium carbonate          |Creates alkaline environment required for the reaction                             |

The color change: Cu²⁺ (blue) is reduced to Cu⁺ by the reducing sugar → **Cu₂O** (copper(I) oxide) precipitates as **brick-red solid**. [NEW – YJI gap: the product is Cu₂O]

## Confirmatory Anion/Cation Tests [VERIFIED – De Anza; wiredchemist]

- **Sulfate (SO₄²⁻):** acidify (HCl/HNO₃), add BaCl₂ → **white BaSO₄**. Identifies MgSO₄, CaSO₄.
- **Chloride (Cl⁻):** acidify (HNO₃), add AgNO₃ → **white AgCl** (dissolves in NH₃). Identifies NaCl, KCl, LiCl, NH₄Cl.
- **Ammonium (NH₄⁺):** add NaOH and warm → **ammonia gas** (pungent; turns damp red litmus blue). Test for NH₄Cl.

## Splitting the Three Fizzers (all give CO₂)

- **CaCO₃:** insoluble + Ca²⁺ brick-red flame → falls out immediately.
- **Na₂CO₃ vs NaHCO₃** (both Na⁺ flame, both soluble): carbonate is strongly basic (~pH 11–12), phenolphthalein deep pink; bicarbonate is mildly basic (~pH 8–9), phenolphthalein faint. Heating NaHCO₃ decomposes it to Na₂CO₃. [VERIFIED]

## Industrial & Professional Uses of the 15 Substances [NEW – Southview/Fairfax/CLC gap]

|Substance         |Common Uses / Suspect Links                                                                                           |
|------------------|----------------------------------------------------------------------------------------------------------------------|
|Sodium acetate    |Hand warmers (exothermic crystallization of supersaturated solution), food preservative (vinegar smell)               |
|Sodium chloride   |Table salt, de-icing roads, food preservation                                                                         |
|Sodium bicarbonate|Baking soda, antacid, fire extinguishers, cleaning agent                                                              |
|Sodium carbonate  |Glass making, laundry detergent (washing soda), paper manufacturing; produced by Solvay process                       |
|Lithium chloride  |Pottery/ceramics (flux), moisture absorption, lithium battery precursor [NEW]                                         |
|Potassium chloride|Fertilizer, food salt substitute, lethal injection component                                                          |
|Calcium nitrate   |Fertilizer (landscaping), concrete accelerant, water treatment [NEW – Fairfax]                                        |
|Calcium sulfate   |Drywall/plasterboard (gypsum), concrete sealant, pottery/ceramics [NEW – Southview]                                   |
|Calcium carbonate |Antacid (pharmacy link), chalk, glass making, concrete [NEW – CLC/Fairfax]                                            |
|Cornstarch        |Cooking thickener, paper manufacturing, baby powder                                                                   |
|Glucose           |Medical IV fluid, sports drinks, brewing/fermentation                                                                 |
|Sucrose           |Table sugar, food industry, fermentation                                                                              |
|Magnesium sulfate |Epsom salt: muscle recovery/bath salts, gardening (magnesium supplement) [NEW – Southview]                            |
|Boric acid        |Mild antiseptic, pottery/art glaze, insecticide, eyewash [NEW – Southview]                                            |
|Ammonium chloride |Fertilizer, soldering flux, cough medicine; volatile — can cause respiratory irritation in enclosed spaces [NEW – CMU]|

## Sodium Acetate Heat Pack Mechanism [NEW – CarSO gap]

Sodium acetate trihydrate (CH₃COONa·3H₂O) can be held in a supersaturated solution below its melting point. When a metal disc is clicked, it provides a nucleation point, triggering rapid **exothermic crystallization**. The heat released is the latent heat of crystallization. Reusable by boiling the pack (re-dissolves the crystals).

## The Solvay Process [NEW – Allendale gap]

Industrial production of sodium carbonate (Na₂CO₃) from sodium chloride (NaCl) and calcium carbonate (CaCO₃):

**Overall reaction:** `2 NaCl + CaCO₃ → Na₂CO₃ + CaCl₂`

**Steps:**

1. Saturate brine (NaCl) with NH₃
1. Bubble CO₂ through → NaHCO₃ precipitates (less soluble)
1. Heat NaHCO₃ → Na₂CO₃ + CO₂ + H₂O
1. CO₂ recycled; NH₃ recovered from CaCl₂ + Ca(OH)₂

**⚠ This is a supervisor-added chemistry question** that has appeared on the Allendale test. Know the overall reaction equation and the purpose (industrial Na₂CO₃ production).

## Glucose Structural Chemistry [NEW – CarSO gap]

Glucose (C₆H₁₂O₆) is a monosaccharide with an aldehyde group → classifies as an **aldose** and a **reducing sugar**.

- **Linear (open-chain) form:** CHO–(CHOH)₄–CH₂OH
- **Cyclic form (Haworth):** Ring closes between C1 (aldehyde) and C5–OH, producing two anomers:
  - **α-glucose:** C1–OH is **AXIAL** (same side as ring in Haworth); less stable (1,3-diaxial strain) — roughly 36% at equilibrium
  - **β-glucose:** C1–OH is **EQUATORIAL** (opposite side from ring in Haworth); more stable — roughly 64% at equilibrium

**Stability difference:** Equatorial position reduces steric (1,3-diaxial) interactions. β is more stable.

**HDPE monomer structure:** H₂C=CH₂ (ethylene). HDPE is formed by addition polymerization of ethylene with Ziegler-Natta or metallocene catalysts (linear chains, high density due to close molecular packing). [NEW – Allendale/HUSO gap]

## Stoichiometry / Molar Mass [NEW – CarSO gap]

### Atomic Masses You Must Know for the 15 Substances [NEW – Haslett gap]

|Element  |Symbol|Approximate Atomic Mass (g/mol)|
|---------|------|-------------------------------|
|Hydrogen |H     |1                              |
|Boron    |B     |11                             |
|Carbon   |C     |12                             |
|Nitrogen |N     |14                             |
|Oxygen   |O     |16                             |
|Sodium   |Na    |23                             |
|Magnesium|Mg    |24                             |
|Chlorine |Cl    |35.5                           |
|Potassium|K     |39                             |
|Calcium  |Ca    |40                             |

**Worked example:** Boric acid H₃BO₃ = 3(1) + 11 + 3(16) = 62 g/mol → M⁺ = 62 on mass spectrum. [NEW – Haslett gap]

**Moles = mass (g) ÷ molar mass (g/mol).** For ranking by molar count: same mass sample → highest mole count = lowest molar mass substance.

-----

# §2. Polymers (Plastics) — 8 Types (≈part of 20%)

The 8: PETE, HDPE, non-expanded PS, LDPE, PP, PVC, PMMA, PC. Primary ID method = **density (float/sink)**. Burn tests may be supplied.

## Recycling Codes + Density [VERIFIED – U. Akron; Callister]

|Plastic      |Code|Density g/cm³               |In water (1.00)|
|-------------|----|----------------------------|---------------|
|PP           |5   |0.90–0.92                   |Floats         |
|LDPE         |4   |0.91–0.93                   |Floats         |
|HDPE         |2   |0.94–0.96                   |Floats         |
|PS (non-exp.)|6   |1.04–1.07                   |Sinks          |
|PMMA         |(7) |1.17–1.20                   |Sinks          |
|PC           |(7) |1.19–1.22                   |Sinks          |
|PVC          |3   |1.16–1.45 (rigid ~1.30–1.45)|Sinks          |
|PETE         |1   |1.38–1.40                   |Sinks          |

**Mnemonic:** 1–6 = PETE-HDPE-PVC-LDPE-PP-PS (‘Please Have Very Little Petroleum, Please’). Note: **PVC and PETE overlap near 1.38** — do not assume a fixed rank between them.

## Polymerization Types [VERIFIED + NEW – CarSO/LexSO gap]

|Type                          |Mechanism                                                                                               |Plastics                                                                   |
|------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
|**Addition (chain-growth)**   |Monomers add across C=C double bonds. No byproduct lost. Initiated by free radicals, cations, or anions.|PE (HDPE/LDPE), PP, PS, PVC, PMMA                                          |
|**Condensation (step-growth)**|Monomers react, losing a small molecule (H₂O, HCl, etc.). Both ends are functional groups.              |PETE (polyester — loses H₂O), PC (polycarbonate — loses phenol or phosgene)|

### Free Radical Addition Polymerization [NEW – CarSO/LexSO gap]

- **Initiation:** A free radical (R•) is generated by homolytic cleavage of an initiator (e.g., benzoyl peroxide, UV light, heat). One electron stays on each fragment.
- **Propagation:** R• attacks C=C double bond, adding to the monomer and creating a new radical. Chain grows.
- **Termination:** Two radicals combine (coupling) or disproportionate.

**⚠ A free radical** is a species with an unpaired electron. **Homolytic bond cleavage** (each atom gets one electron) produces two radicals.

### Tacticity (Polypropylene, PP) [NEW – CarSO/LexSO gap]

|Configuration  |Description                                     |Properties                                                                              |
|---------------|------------------------------------------------|----------------------------------------------------------------------------------------|
|Isotactic PP   |All methyl groups on same side of backbone      |Highly crystalline, high Tm (~165°C), rigid, strong — commercial grade                  |
|Syndiotactic PP|Methyl groups alternate sides in regular pattern|Partially crystalline, Tm slightly lower than isotactic                                 |
|Atactic PP     |Methyl groups random, no pattern                |Amorphous (not crystalline), lower Tm, tacky, rubbery — not useful as structural plastic|

### LDPE vs. HDPE vs. LLDPE [NEW – CarSO gap]

- **HDPE:** Linear chains (minimal branching). Tight molecular packing → higher crystallinity → higher density (0.94–0.96) → higher tensile strength, more rigid. Used for: bottles, pipes, containers.
- **LDPE:** Extensive branching (short and long chain branches). Cannot pack tightly → lower crystallinity → lower density (0.91–0.93) → flexible, soft. Used for: plastic bags, film wrap.
- **LLDPE (Linear Low-Density PE):** Linear backbone with short, uniform side chains from copolymerized α-olefins (e.g., 1-butene). Higher tensile strength than LDPE despite similar density. Longer-chain alkane co-monomers disrupt crystallinity slightly, reducing density but improving toughness. [NEW – CarSO]

### Thermoplastics vs. Thermosetting Plastics [NEW – NUSO gap]

- **Thermoplastics** (all 8 in this event): Can be melted and reshaped. Polymer chains are NOT cross-linked. Recyclable.
- **Thermosetting plastics:** Curing process creates permanent covalent cross-links between polymer chains. Cannot be re-melted after curing. Examples: epoxy, Bakelite, vulcanized rubber.
- **Vulcanization** (natural rubber + sulfur): Sulfur atoms form cross-links (–S–S–) between polymer chains → increased stiffness, elasticity, heat resistance. [NEW – CMU gap]

### Polymer vs. Metal Material Properties [NEW – CMU gap]

|Property                   |Polymers                                              |Metals                                     |
|---------------------------|------------------------------------------------------|-------------------------------------------|
|Electrical conductivity    |Generally insulators (exceptions: conductive polymers)|High conductors                            |
|Elastic modulus (stiffness)|Low to moderate (exceptions: CFRP composites)         |High                                       |
|Elongation at failure      |Generally high (ductile/flexible)                     |Variable — metals can be ductile or brittle|
|Density                    |Low (0.9–1.4 g/cm³)                                   |High (Al 2.7; Fe 7.9; Cu 8.9 g/cm³)        |

### Chemical Resistance & Mechanical Strength — Clarification [NEW v5 – resolves Q17/146/196 ambiguity]

Two prior answer-key passes disagreed on which plastic is described by “high chemical resistance and high strength.” Resolution based on the §2 data above:

- **HDPE** is the plastic most associated with **high chemical resistance** (resists most acids, bases, and solvents — used for chemical storage containers, fuel tanks) **and high tensile strength relative to its density** (linear, tightly-packed chains; see LDPE/HDPE/LLDPE comparison above).
- **PC (polycarbonate)** has the **highest impact strength/toughness** of the 8 plastics (used for bulletproof glass, eyeglass lenses, helmets) but only **moderate chemical resistance** — it is attacked by many solvents and bases.
- **PS (polystyrene)** has neither property as a defining characteristic — it is brittle and degrades fastest under UV (see UV Degradation below). PS should not be the answer to a “chemical resistance + high strength” question.

**If a question asks which plastic is used for chemical storage / has high chemical resistance → HDPE.** If it asks which plastic has the highest impact resistance / is “shatterproof” → PC.

### Functional Groups in Required Plastics [NEW – HUSO gap]

|Plastic     |Key Functional Group / Bond Type                                                                                                    |
|------------|------------------------------------------------------------------------------------------------------------------------------------|
|PETE        |Ester group (–COO–) → PETE is a polyester. Ester linkage between terephthalic acid and ethylene glycol.                             |
|PC          |Carbonate group (–O–CO–O–)                                                                                                          |
|PVC         |C–Cl bond (aliphatic chloride)                                                                                                      |
|PMMA        |Ester group in side chain (methacrylate)                                                                                            |
|Nylon 6,6   |Amide group (–CO–NH–); condensation polymer. Named for 6 carbons in each monomer (hexamethylenediamine + adipic acid). [NEW – LexSO]|
|PP / PE / PS|No heteroatom functional groups — purely hydrocarbon chains                                                                         |

### PMMA Solubility in Acetone [NEW – CMU gap]

PMMA dissolves readily in acetone because both are polar molecules with similar intermolecular forces (dipole–dipole interactions). **‘Like dissolves like.’** Acetone’s carbonyl group interacts with PMMA’s ester side chains, solvating the polymer chains. This allows PMMA to be cast or shaped using acetone as a solvent.

### UV Degradation [NEW – HUSO/NUSO/YJI gap]

- **Polystyrene (PS):** Degrades fastest in UV light due to the aromatic ring, which absorbs UV energy, leading to chain scission and yellowing.
- **Polycarbonate (PC):** Turns yellow in sunlight via **photo-oxidation** — UV light triggers oxidation of the polymer backbone. [NEW – YJI]

### Oligomers and Plasticizers [NEW – LexSO/YJI gap]

- **Oligomer:** A short-chain polymer (typically 2–20 repeat units) — not yet a full macromolecule. Intermediate between monomer and polymer.
- **Degree of polymerization (n)** = molar mass of polymer ÷ molar mass of monomer. Example: PS at 6968 g/mol, styrene monomer = 104 g/mol → n = 6968 ÷ 104 = 67 repeat units.
- **Plasticizer:** Small molecule added to a polymer to increase flexibility by increasing chain mobility (spacing chains apart, reducing Tg). Common in PVC (e.g., phthalates).

**⚠ Monomer structures to sketch:** Ethylene (H₂C=CH₂) for PE/HDPE/LDPE; Vinyl chloride (H₂C=CHCl) for PVC; Styrene (H₂C=CH-C₆H₅) for PS; Propylene (H₂C=CHCH₃) for PP; Methyl methacrylate for PMMA. [NEW – YJI/Allendale]

-----

# §3. Fibers — 7 Types (≈part of 20%)

The 7: cotton, wool, silk, linen, nylon, spandex, polyester. **Burn tests ARE permitted**. Acetate and rayon are NOT in this set.

## Classification + Burn Behavior

|Fiber    |Family           |Burn                      |Smell             |Residue             |
|---------|-----------------|--------------------------|------------------|--------------------|
|Cotton   |Natural cellulose|Fast, steady              |Burning paper     |Soft gray ash       |
|Linen    |Natural cellulose|Like cotton               |Burning paper     |Soft gray ash       |
|Wool     |Natural protein  |Slow, self-extinguishes   |Burning hair      |Black crushable bead|
|Silk     |Natural protein  |Slow, sputters            |Burning hair      |Black crushable bead|
|Nylon    |Synthetic        |Melts + burns             |Celery/plastic [⚠]|Hard bead           |
|Polyester|Synthetic        |Melts + burns, black smoke|Sweet/chemical    |Hard dark bead      |
|Spandex  |Synthetic        |Melts + burns             |Chemical          |Sticky residue [⚠]  |

**Three-way logic:** cellulose = paper smell + ash; protein = hair smell + crushable bead; synthetic = melts + hard bead.

## Microscopic Morphology [VERIFIED + NEW – HUSO gap]

|Fiber    |Longitudinal View                                                       |Cross-Section                             |
|---------|------------------------------------------------------------------------|------------------------------------------|
|Cotton   |Flattened twisted ribbon (convolutions — reversals in twist direction)  |Kidney-bean / collapsed C-shape           |
|Linen    |Bamboo-like nodes/joints along shaft                                    |Polygonal, multi-sided                    |
|Wool     |Overlapping surface scales (cuticle scales visible at low magnification)|Oval to round                             |
|Silk     |Smooth, triangular filaments (two fibroin filaments in sericin binder)  |Triangular — produces characteristic sheen|
|Nylon    |Smooth, rod-like, sometimes striated from manufacturing                 |Round or trilobal                         |
|Polyester|Smooth, uniform rod-like                                                |Round or hollow                           |
|Spandex  |Smooth, often fused filaments                                           |Irregular/oval                            |

**⚠ Linen vs. cotton:** separated microscopically by nodes (linen) vs. convolutions (cotton). **Wool vs. silk:** separated by scales (wool) vs. smooth triangular cross-section (silk).

### Bleach Test [NEW – NUSO/YJI gap]

- **Protein fibers (wool, silk)** dissolve in bleach (sodium hypochlorite). **Reason:** bleach is a strong oxidizing agent that attacks **disulfide bonds (–S–S–)** in keratin and breaks peptide bonds in all proteins.
- **Cellulose fibers (cotton, linen):** degrade slowly in bleach but do not dissolve rapidly — bleach weakens cellulose chains over time.
- **Synthetics:** mostly bleach-resistant (no protein or disulfide bonds to attack).

### Dye Affinity [NEW – HUSO gap]

- **Wool:** Dyes most easily due to protein structure (amino groups allow ionic bonding with acid dyes) and porous surface from scales.
- **Cotton:** Requires mordants or reactive dyes (cellulose has OH groups but fewer binding sites).
- **Synthetics:** Require disperse dyes (hydrophobic interaction) or carrier agents.

### Mercerization of Cotton [NEW – CarSO/LexSO gap]

- **Process:** Cotton treated with concentrated NaOH under tension, then washed.
- **Effects:** Swells fiber, converting twisted ribbon to rounder cross-section; reduces convolutions.
- **Benefits:** Increased tensile strength, improved luster (less light scattering), improved dye affinity.
- **Drawback:** Loses some natural cotton feel; treated cotton is NOT shinier — it appears more glossy due to increased surface uniformity.

### Wool Felting [NEW – LexSO gap]

Felting is the irreversible matting of wool fibers caused by heat, moisture, and agitation. The directional cuticle scales interlock and ratchet together. Once felted, the process cannot be reversed. This is why wool must be dry-cleaned or cold-washed.

### Spandex (Lycra/Elastane) [NEW – LexSO gap]

Spandex is a segmented polyurethane-polyurea copolymer. The elasticity comes from alternating ‘hard’ and ‘soft’ segments: soft segments (polyol) provide stretch; hard segments (diisocyanate + diol/diamine) provide recovery. The segments form physical cross-links, not covalent ones — the fiber returns to its original shape after deformation.

-----

# §4. Hair — 5 Species (≈part of 20%)

Species: human, bat, cow, squirrel, horse. Rules require: medulla, cortex, cuticle, root, and scale classification.

## Hair Structure

- **Cuticle:** Outer overlapping keratin scales. Three patterns: **coronal** (stacked crowns — small rodents, bats); **spinous/petal** (triangular, protruding — cats, mink); **imbricate** (flat, overlapping, non-repeating — humans and most large mammals).
- **Cortex:** Pigment granules (color), bulk of hair shaft.
- **Medulla:** Central canal. Types: **amorphous** (human), **uniserial ladder**, **multiserial ladder** (rabbit, some rodents), **vacuolated/cellular**, **lattice** (web-like — deer).
- **Root:** Club-shaped telogen root = shed hair; distorted root = forcibly pulled.

## Hair Growth Phases [NEW – CLC/LexSO gap]

|Phase  |Name                  |Description                                                                                                                                             |Forensic Significance                                                                                               |
|-------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
|Anagen |Growth phase          |Active matrix cell division. Root is onion-shaped, pigmented, and surrounded by root sheath. Hair grows ~1 cm/month. ~85–90% of scalp hairs at any time.|Anagen hair pulled from scalp may retain follicular tag (DNA source). Indicates active growth, not natural shedding.|
|Catagen|Transitional phase    |Brief (~2–3 weeks). Growth stops, root starts transitioning. ~1–2% of hairs.                                                                            |Rarely found at crime scenes due to short duration.                                                                 |
|Telogen|Resting/shedding phase|Root becomes club-shaped (round, hard, unpigmented). Hair is shed naturally. ~10–15% of hairs.                                                          |Telogen root = naturally shed hair (no struggle implied). Club root shape is the key identifier.                    |

## Hair Protein & Pigment [NEW – Fairfax/HUSO gap]

- **Primary structural protein:** **KERATIN** (fibrous protein — alpha-helix structure stabilized by disulfide bonds between cysteine residues). [NEW – Fairfax]
- **Hair pigment** is produced by melanocytes in the follicle bulb.
- **Eumelanin:** brown/black pigment (high melanin content). Found in dark hair. [NEW – HUSO]
- **Pheomelanin:** red/yellow pigment. Found in red/blonde hair.
- **Mixed eumelanin + pheomelanin** = brown hair shades.
- **Gray/white hair:** melanocyte activity declines with age → no pigment produced.

## Medullary Index [VERIFIED – NCBI PMC6088218]

**Medullary Index = medulla diameter ÷ whole-hair diameter**

- **Human:** < 1/3 (medulla absent, fragmented, or amorphous)
- **Animal:** ≥ 1/2 (thick, continuous)

This human-vs-animal split is the **single most-tested hair concept**.

## Species Atlas [VERIFIED unless tagged]

|Species |Cuticle Scale                  |Medulla                                                    |MI       |Key Tells                                                          |
|--------|-------------------------------|-----------------------------------------------------------|---------|-------------------------------------------------------------------|
|Human   |Imbricate (flat, non-repeating)|Fragmented/absent/amorphous                                |< 1/3    |Even pigment toward cuticle; no banding; no continuous medulla     |
|Bat     |Coronal (stacked crowns)       |Narrow when present                                        |~0.33–0.5|Dentate, distant scale margins [VERIFIED – McCrone]                |
|Cow     |Imbricate                      |Continuous                                                 |≥ 1/2    |Coarse, continuous medulla                                         |
|Horse   |Imbricate                      |Continuous                                                 |≥ 1/2    |Coarse, thick shaft                                                |
|Squirrel|Probable coronal [⚠ UNVERIFIED]|Ladder-type multiserial [flying sq. VERIFIED; common sq. ⚠]|≥ 1/2    |Identify by elimination (only small rodent in set). See §10b Gap A.|

### Two More Animal-vs-Human Discriminators [VERIFIED]

- **Pigment** denser, toward the medulla in animals; even, toward the cuticle in humans.
- **Banded color (agouti)** occurs in animals, never in human hair.

-----

# §5. Fingerprints (≈part of 15%)

Rules require: 8 patterns, development techniques, minutiae vocabulary, skin layers, and how prints form.

## The 8 Patterns

- **Arches (~5%):** plain arch, tented arch. No delta, no true core.
- **Loops (~60–65%):** radial loop (opens toward thumb/radius), ulnar loop (opens toward pinky/ulna). One delta. Most loops are ulnar.
- **Whorls (~30–35%):** plain, central pocket, double loop, accidental. Two+ deltas.

## Specialized Vocabulary [NEW – Allendale/CarSO gap]

- **Dactyloscopy:** The scientific study of fingerprints for identification purposes. [NEW – Allendale]
- **Dermatoglyph(ics):** The study of skin patterns (fingerprints, palm prints, footprints). [NEW – CarSO/YJI]
- **Adermatoglyphia:** Rare genetic condition where a person is born without fingerprints. [NEW – LexSO]
- **Henry Classification System:** A numerical system for organizing and indexing fingerprints developed by Edward Henry (1900). Uses pattern type and ridge counts to assign a fraction code. [NEW – YJI]
- **Fun fact:** Koalas have fingerprints virtually indistinguishable from human fingerprints under a microscope — the only non-primate known to have this. [NEW – CarSO]

## Minutiae Vocabulary (exact terms from rules)

|Term              |Description                                                                                                  |
|------------------|-------------------------------------------------------------------------------------------------------------|
|Ridge ending      |A ridge that terminates abruptly                                                                             |
|Bifurcation       |One ridge splits into two                                                                                    |
|Island / dot      |A very short ridge (shorter than two pore spacings)                                                          |
|Enclosure / lake  |A ridge that splits and rejoins, enclosing an oval space                                                     |
|Eye               |Same as enclosure — a single ridge bifurcates and rejoins (used interchangeably with enclosure/lake in rules)|
|Loop              |A ridge that recurves back on itself                                                                         |
|Spur              |A short ridge branching off a bifurcation (like a hook)                                                      |
|Trifurcation      |A ridge that splits into three                                                                               |
|Double bifurcation|Two bifurcations in close succession                                                                         |
|Delta             |Triangular ridge meeting point — the dividing point where three ridge systems meet                           |
|Core              |The approximate center of the pattern                                                                        |

**⚠ Correction from v3:** ‘spe’ was an error. Rules list ‘eye’ and ‘spur’ as two separate terms. [VERIFIED – rules text]

## Three Levels of Detail (ACE-V)

- **Level 1:** Overall pattern (arch, loop, whorl)
- **Level 2:** Minutiae / Galton points (the comparison workhorse)
- **Level 3:** Pores and ridge-edge shapes

## Development Chemistry

|Method                          |Mechanism                                                                   |Best Surface                     |
|--------------------------------|----------------------------------------------------------------------------|---------------------------------|
|Iodine fuming                   |Binds fats/oils → temporary brown; fix with starch (→ blue)                 |Porous + nonporous               |
|Ninhydrin                       |Reacts with amino acids → Ruhemann’s purple. Slow (hours).                  |Porous (paper)                   |
|Cyanoacrylate (superglue) fuming|Polymerizes on moisture + amino/fatty acids → hard white ridges             |Nonporous (glass, metal, plastic)|
|Silver nitrate                  |Reacts with chloride salts → AgCl, darkens under UV. Destructive — use last.|Porous                           |
|Powder dusting                  |Adheres to oily residue via electrostatic/physical adhesion                 |Nonporous                        |

**⚠ Iodine fuming physics:** Iodine physically adheres to sebaceous oils via sublimation rather than forming a permanent chemical bond — so the print fades as iodine re-sublimes. This is why it is temporary. [NEW – NUSO gap]

## Skin Anatomy & Print Formation [NEW – Allendale/CMU gap]

|Layer                       |Details                                                                            |Forensic Relevance                                                                                                                                                                      |
|----------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Epidermis                   |Outer layer; several sublayers including stratum corneum (dead cells on surface)   |Friction ridges are on the surface of the epidermis                                                                                                                                     |
|Papillary layer (dermis)    |Superficial part of dermis containing dermal papillae — finger-like projections    |Dermal papillae determine the ridge pattern. Pattern is set here. [NEW – Allendale: ‘papillary layer’]                                                                                  |
|Reticular layer (dermis)    |Deep dermis with collagen and elastin fibers                                       |Provides structural support to skin                                                                                                                                                     |
|Basal layer (stratum basale)|Deepest layer of epidermis, just above dermis; contains melanocytes and basal cells|Some sources reference this as the skin layer where print patterns originate [Allendale answer: ‘basal layer’ or ‘papillary layer’ — both may be accepted depending on question framing]|

- **Friction ridges** begin forming ~weeks 10–13; pattern type set by ~week 15; primary ridges complete ~week 17; permanently fixed ~weeks 24–26. [VERIFIED]
- **Pattern is unique** (even identical twins differ) and **permanent for life** barring deep dermal scarring.
- **Three scene types:** patent (visible), latent (invisible, needs development), plastic (3D impression).

-----

# §6. Crime-Scene Physical Evidence (≈15%)

## Decomposition Stages Overview [NEW v5 – resolves Q187 inconsistency]

One prior answer key marked “autolysis” as Not Answerable while the other correctly identified it. **Autolysis** is the first stage of decomposition: in the absence of blood circulation, the body’s own digestive enzymes (released from lysosomes) begin breaking down cells and tissues from within. It occurs before bloat and is driven by the body’s own enzymes, not external organisms.

The five classic decomposition stages (for reference, tying entomology arrival times to a timeline):

|Stage                  |Approx. Timing    |Key Features                                                    |Associated Insects (§6 table)                          |
|-----------------------|------------------|----------------------------------------------------------------|-------------------------------------------------------|
|Fresh (incl. autolysis)|0 – ~2-3 days     |No visible decay; internal enzymatic breakdown begins           |Calliphoridae/Sarcophagidae arrive within minutes–hours|
|Bloat                  |~2-3 days onward  |Gases from anaerobic bacterial activity cause abdominal swelling|Silphidae, Histeridae, Staphylinidae arrive            |
|Active decay           |Days to ~2 weeks  |Rapid tissue loss, strong odor, purge fluids                    |Phoridae arrive; maggot mass activity peaks            |
|Advanced decay         |~2 weeks – 1 month|Most soft tissue gone; remaining tissue dries                   |Dermestidae arrive (§6: “advanced decay/dry stage”)    |
|Skeletonization/dry    |1 month+          |Bones, cartilage, dried skin/hair remain                        |Piophilidae (late-stage, protein fermentation)         |

## Entomology — Insect Succession

|Family       |Common Name              |Order     |Stage                                     |Role                                                                            |
|-------------|-------------------------|----------|------------------------------------------|--------------------------------------------------------------------------------|
|Calliphoridae|Blow flies / bottle flies|Diptera   |FIRST — minutes to hours (if blood/wounds)|Oviposit in wounds + orifices; larvae primary PMI tool                          |
|Sarcophagidae|Flesh flies              |Diptera   |Early — fresh/early bloat                 |Larviparous (deposit larvae, not eggs)                                          |
|Piophilidae  |Cheese skippers          |Diptera   |LATE — advanced decay                     |Diagnostic of late-stage; attracted to protein fermentation                     |
|Phoridae     |Humpback flies           |Diptera   |Mid-to-late decay                         |Larvae bore into tissue                                                         |
|Silphidae    |Carrion beetles          |Coleoptera|Bloat / active decay                      |Adults and larvae eat carrion                                                   |
|Dermestidae  |Dermestid/hide beetles   |Coleoptera|ADVANCED DECAY / DRY stage                |Chewing mouthparts — dry flesh, skin, ligaments; arrive when too dry for maggots|
|Staphylinidae|Rove beetles             |Coleoptera|Bloat onward                              |Mostly predators of other insects                                               |
|Histeridae   |Clown beetles            |Coleoptera|Bloat                                     |Predatory; hidden beneath remains                                               |

### Instar Identification [VERIFIED – SAGE PMI review 2025]

**Instar = number of slits per posterior spiracle:** 1 slit → 1st instar; 2 slits → 2nd instar; 3 slits → 3rd instar.

### PMI Calculation — Lucilia sericata [VERIFIED – J. Med. Entomol. 57(5), 2020]

- **T_base** ≈ 9.1°C, **K** ≈ **6023 degree-hours** (egg→adult)
- **Time to development = K ÷ (T_ambient − T_base)**
- **At 25°C:** 6023 ÷ (25−9.1) = 379 h ≈ 15.8 days
- **At 22°C:** 6023 ÷ 12.9 = 467 h ≈ 19 days minimum
- **Note:** **mPMI = minimum PMI** (time since colonization, not exact death time).

## Blood — ABO Typing [VERIFIED]

|Type|Antigens (RBC)|Antibodies (plasma)|Frequency (US)           |
|----|--------------|-------------------|-------------------------|
|A   |A             |Anti-B             |~40%                     |
|B   |B             |Anti-A             |~11%                     |
|AB  |A & B         |None               |~4% — universal recipient|
|O   |None          |Anti-A & anti-B    |~45% — universal donor   |

**Agglutination (clumping) = reaction.** Anti-A serum clumps → A antigen present; anti-B clumps → B antigen present.

- **Kastle-Meyer (phenolphthalein)** → pink = presumptive positive for blood. [VERIFIED]
- **Kastle-Meyer mechanism:** Hemoglobin acts as a **peroxidase catalyst**, oxidizing colorless reduced phenolphthalein to pink in the presence of H₂O₂. [NEW – NUSO gap]
- **Luminol** → chemiluminescence; finds trace/cleaned blood.
- **Takayama/Teichmann crystal tests** → confirmatory.
- **Precipitin (anti-human antiserum)** → species of origin.
- **Mammalian RBCs:** NO nucleus (biconcave disc). **Avian/reptilian/amphibian RBCs:** nucleated and oval. [VERIFIED]

## Glass [VERIFIED – AAFS 2006; SWGMAT; WVU]

|Glass Type                  |RI Range  |Notes                              |
|----------------------------|----------|-----------------------------------|
|Soda-lime (window/container)|~1.51–1.52|Most common forensic glass         |
|Borosilicate (Pyrex)        |~1.47–1.48|Lab glass, baking dishes           |
|Lead/crystal                |~1.5–1.7  |Higher RI due to lead oxide content|

### Becke Line Method [VERIFIED]

- **As the objective is RAISED,** the bright **Becke line moves toward the HIGHER-RI medium**.
- **When glass RI = oil RI** → fragment disappears.
- **Worked:** In oil n=1.515, line moves into glass (glass higher); in n=1.525, into oil; in n=1.520, fragment disappears → glass RI ≈ 1.520 (soda-lime).

### Snell’s Law [NEW – CMU/LexSO/YJI gap]

**n₁ sin θ₁ = n₂ sin θ₂**

Where n = refractive index, θ = angle from the normal (perpendicular to surface).

- **Light slows down** when entering a denser medium (higher n) and bends toward the normal.
- **Speed of light in medium** = c ÷ n, where c = 3.0 × 10⁸ m/s.
- **Total internal reflection** occurs when θ₁ ≥ critical angle θ_c = arcsin(n₂/n₁) — only occurs when light travels from high-n to low-n medium. [NEW – LexSO]
- **Glycerin (n ≈ 1.47)** makes glass shards (n ≈ 1.47–1.52) nearly invisible because the RI values match closely — Becke line disappears. [NEW – LexSO]

### 3R Rule [VERIFIED – AAFS 2006]

- **Radial cracks** make a **Right angle on the Reverse side** of the force (tension side — forms first).
- **Concentric cracks** make their **right angle on the same side** as impact (forms second).
- **Fracture sequence:** A fracture terminates at a pre-existing one. If radial cracks from hole B stop at cracks from hole A → **A was broken FIRST**.
- **Entry vs. exit:** Hole is **wider on the exit side** (cone/spalling). Entry is cleaner and smaller.

### Heat Fractures [NEW – YJI gap]

**Heat fractures** (from fire): Wave-shaped or curved cracks with no defined impact point. No radial/concentric pattern. No exit/entry cone. The absence of Wallner lines distinguishes thermal from impact fractures.

## DNA [VERIFIED + NEW gap fills]

### DNA Structure [NEW – CarSO gap]

|Feature         |Details                                                                                                                         |
|----------------|--------------------------------------------------------------------------------------------------------------------------------|
|Purines         |Two-ring nitrogenous bases: Adenine (A) and Guanine (G)                                                                         |
|Pyrimidines     |One-ring nitrogenous bases: Cytosine (C), Thymine (T), and Uracil (U — RNA only)                                                |
|Chargaff’s Rules|A always pairs with T (2 hydrogen bonds); G always pairs with C (3 hydrogen bonds). [VERIFIED] A:T ratio = 1:1; G:C ratio = 1:1.|
|Base pair bonds |Hydrogen bonds link complementary base pairs — NOT covalent bonds. This allows easy strand separation during denaturation.      |
|Backbone        |Alternating sugar (deoxyribose) and phosphate groups, linked by phosphodiester bonds.                                           |

### PCR — Three Steps [NEW – Allendale gap]

|Step|Name                  |Temperature    |What Happens                                                                                                                                 |
|----|----------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------|
|1   |Denaturation          |94–98°C (~95°C)|Heat breaks hydrogen bonds between base pairs → double-stranded DNA separates into two single strands. [VERIFIED – Pearson; PMC]             |
|2   |Annealing             |50–65°C (~55°C)|Temperature lowered → short synthetic primers bind (anneal) to complementary sequences on each single strand.                                |
|3   |Extension / Elongation|72°C           |Taq polymerase synthesizes new DNA strand from 5’→3’, adding dNTPs complementary to the template. [NEW – Allendale: ‘Elongation’ is the name]|

**DNA molecules after n cycles = 2ⁿ** (doubling each cycle). [NEW – Allendale: the 2ⁿ formula]

### Restriction Enzymes [NEW – Allendale gap]

**Restriction endonucleases** (restriction enzymes) are proteins that cut DNA at specific recognition sequences (4–8 base pairs). They produce DNA fragments of defined sizes. In electrophoresis, these fragments are separated by size. [NEW – Allendale: ‘what specifically cuts DNA into fragments for electrophoresis’]

PCR amplifies a specific region; restriction enzymes create fragments from that amplified DNA for RFLP analysis.

### CODIS Levels [NEW – CarSO gap]

**CODIS** (Combined DNA Index System) operates at three levels: **Local DNA Index System (LDIS)** → **State DNA Index System (SDIS)** → **National DNA Index System (NDIS)**. Profiles flow upward. CODIS uses **20 core STR loci** (expanded from 13 in 2017). [VERIFIED – Taylor & Francis]

### DNA Profiling History [NEW – Fairfax gap]

- **First forensic use of DNA profiling:** 1986–1988. Alec Jeffreys developed DNA fingerprinting in the UK in 1984. First criminal conviction using DNA evidence in the US: 1988. [NEW – Fairfax: ‘the 1980s’]
- **Buccal swab** collects cheek epithelial cells (buccal cells), which contain nucleated cells suitable for DNA extraction. [NEW – Fairfax]

### STR Electropherogram Reading [VERIFIED – NIJ]

Each locus shows 1 or 2 peaks. **Homozygous = 1 peak (taller). Heterozygous = 2 peaks.** Allele number = repeat count at that locus. **Match requires identical allele calls at every locus examined. Single mismatch = exclusion.**

|Locus  |Scene |Suspect A|Suspect B|Result                               |
|-------|------|---------|---------|-------------------------------------|
|D3S1358|15, 17|15, 17   |14, 16   |A matches; B excluded (14,16 ≠ 15,17)|
|vWA    |16, 19|16, 19   |16, 19   |Both consistent at this locus        |
|D16S539|11, 12|11, 12   |11, 13   |A matches; B excluded (13 ≠ 12)      |

## Blood Spatter [VERIFIED]

- **Angle:** θ = arcsin(width ÷ length)
- **Worked:** W=6, L=12 → sinθ=0.5 → θ=30°. Round stain (W≈L) → ~90° (fell vertically).
- **Directionality:** pointed/tail end points direction of travel.
- **Convergence (2D):** extend long axes backward to convergence point. **Height (3D):** H = d × tanθ.

|Category              |Velocity   |Droplet Size      |Mechanism                  |
|----------------------|-----------|------------------|---------------------------|
|Low velocity / passive|≤ ~5 ft/s  |≥ ~4 mm           |Dripping, pooling, transfer|
|Medium velocity       |~5–25 ft/s |~1–4 mm           |Blunt force, stabbing      |
|High velocity         |≥ ~100 ft/s|< 1 mm (fine mist)|Gunshot, high-energy impact|

**⚠ Velocity terminology** is deprecated/contested (2009 NAS report). Modern practice uses mechanism-based taxonomy. Still tested on SciOly — learn it, but note the limitation.

## Bullet Striations & Firearms [VERIFIED + NEW – LexSO gap]

### Class vs. Individual Characteristics

|Type      |Examples                                                                                                |What It Determines                                |
|----------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------|
|Class     |Caliber; number of lands and grooves; direction of twist (L or R); width/depth of lands                 |Narrows to a group of weapons (manufacturer/model)|
|Individual|Striations — microscopic scratches from manufacturing imperfections, wear, fouling unique to that barrel|Can link to one specific barrel                   |

### Ballistics Math [NEW – LexSO gap]

- **Caliber conversion:** metric diameter (mm) ÷ 25.4 = caliber in inches. Example: 9.65mm ÷ 25.4 = 0.38 caliber.
- **Gauge (shotgun):** determined by the number of lead balls of the barrel’s diameter that make 1 pound. 12-gauge = 12 balls = 1 lb. Smaller gauge number = larger bore.
- **Polygonal rifling:** Instead of traditional land-and-groove rifling, uses a smoothly twisted polygon bore. Produces fewer striation marks on bullets, making striation comparison harder. [NEW – LexSO]

### GSR [VERIFIED]

**Primer residue:** lead (Pb), barium (Ba), antimony (Sb) — characteristic triad. Detected by SEM-EDX.

### Gonzalez Test for Residue [NEW – LexSO gap]

The **Gonzalez test** (or paraffin/dermal nitrate test) was a historical test for GSR using heated paraffin wax cast on the hand, then treated with diphenylamine. A blue/purple color indicated nitrates. Now largely abandoned as it gave false positives from fertilizers and other nitrate sources. Modern GSR analysis uses **SEM-EDX for Pb/Ba/Sb triad**. [NEW – LexSO]

### Serial Number Recovery [NEW – LexSO gap]

When a serial number is filed off, the metal beneath remains stressed from the original stamping. **Acid etching** (e.g., Fry’s reagent on steel) dissolves the stressed metal at different rates than the surrounding metal, making the original number temporarily visible. The stressed crystal structure persists below the stamped surface. [NEW – LexSO]

### Fingerprint History [NEW – LexSO gap]

- **IAFIS** (Integrated Automated Fingerprint Identification System): FBI’s database, operational from 1999.
- **NGI** (Next Generation Identification): Replaced IAFIS in 2014. Adds palm prints, iris scans, facial recognition, latent print searching.

-----

# §7. Chromatography & Mass Spectrometry (≈15%)

## Chromatography

- **Rf = (origin → spot center) ÷ (origin → solvent front). Always 0–1.**
- **Worked:** solvent front 6.0 cm. Spot at 1.8 cm → Rf 0.30; spot at 4.8 cm → Rf 0.80.

### Chromatography Types [NEW – YJI gap]

|Type                     |Stationary Phase                             |Mechanism                                                     |Example                                                                                              |
|-------------------------|---------------------------------------------|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
|Adsorption chromatography|Solid (silica gel, alumina)                  |Analyte adsorbs (sticks) to surface of solid                  |TLC (thin-layer chromatography)                                                                      |
|Partition chromatography |Liquid held in solid support                 |Analyte partitions between mobile and stationary liquid phases|Paper chromatography (water in cellulose), HPLC (liquid stationary phase)                            |
|Reverse-phase HPLC       |Nonpolar stationary phase; polar mobile phase|Nonpolar analytes are retained longer                         |Common in pharmaceutical analysis. Mobile and stationary phases have opposite polarities. [NEW – YJI]|

**HPLC = High-Performance Liquid Chromatography.** Uses high-pressure pump to force liquid mobile phase through packed column. [NEW – CarSO]

### Polarity Logic

On a polar stationary phase with less-polar solvent: **polar analytes adsorb strongly → low Rf**. **Nonpolar analytes → high Rf**. **‘Like dissolves like.’**

### Scenario Problems

**Scenario A — Ink match:** Compare Rf at each dye position. Exact match = consistent. One mismatch = excluded.

**Scenario B — Unknown identification:** Same Rf as caffeine (0.42) on same plate = consistent with caffeine.

**Scenario C — Partial overlap:** Suspect ink shows subset of scene spots. Cannot exclude — but also not a match. State ‘inconclusive.’

## Mass Spectrometry [VERIFIED – U. Richmond; CIE; Premier MCAT]

### MS Instrument Stages [NEW – Fairfax gap]

|Stage|Name                   |What Happens                                                                                     |
|-----|-----------------------|-------------------------------------------------------------------------------------------------|
|1    |Ionization             |Sample molecules are ionized (electron bombardment, ESI, MALDI, etc.)                            |
|2    |Acceleration           |Ions are accelerated through an electric field to give them kinetic energy proportional to charge|
|3    |Deflection / Separation|Magnetic/electric field separates ions by mass-to-charge ratio (m/z)                             |
|4    |Detection              |Ion detector records signal at each m/z value → produces spectrum                                |

**⚠ Fairfax test asks specifically for the SECOND stage: Acceleration.** [NEW – Fairfax]

### Key MS Concepts

- **Molecular ion (M⁺):** highest m/z peak = molecular mass.
- **Base peak:** tallest peak (100% relative abundance) = most stable fragment.
- **Isotope patterns [VERIFIED]:** one Cl → M:M+2 ≈ 3:1; one Br → M:M+2 ≈ 1:1; two Cl → 9:6:1; two Br → 1:2:1.
- **M+1 peak from ¹³C (~1.1% per carbon):** M+1% ÷ 1.1 ≈ number of carbons.
- **Nitrogen rule [VERIFIED]:** odd M⁺ mass → odd number of N atoms.
- **Neutral losses:** −15 CH₃; −17 OH; −18 H₂O; −29 CHO/C₂H₅; −31 OCH₃; −45 COOH.

### Problem Set

|Problem|Data                          |Answer & Reasoning                                                               |
|-------|------------------------------|---------------------------------------------------------------------------------|
|1      |M⁺=64, M+2=66, 3:1 ratio      |One Cl; chloroethane C₂H₅Cl = 64                                                 |
|2      |M⁺=108, M+2=110, 1:1 ratio    |One Br; bromoethane C₂H₅Br = 108                                                 |
|3      |M⁺=156, M+2=158 (1:1), base 77|Bromobenzene C₆H₅Br=156; 156−77=79=loss of Br (phenyl cation at 77)              |
|4      |M⁺=59 (odd)                   |Odd # of N; trimethylamine C₃H₉N=59                                              |
|5      |M⁺=46, peak at 31 (gap=15)    |Loss of CH₃; ethanol — CH₂=OH⁺ at 31                                             |
|6      |M+1 ≈ 3.3% of M⁺              |≈3 carbons (3×1.1%)                                                              |
|7      |M⁺, M+2, M+4 ≈ 9:6:1          |Two Cl (two Br would be 1:2:1)                                                   |
|8      |M⁺=62, formula H₃BO₃          |Boric acid: H=1×3, B=11, O=16×3 → 3+11+48=62 [NEW – Haslett]                     |
|9      |M⁺=44, simple organic         |Propane C₃H₈: 3(12)+8(1)=44; or CO₂=44 (distinguish by fragmentation) [NEW – CLC]|

-----

# §8. Advanced Chemistry Topics [NEW — CMU/CarSO/LexSO gap]

These topics appear at highly technical invitationals. CMU specifically tests MO theory and coordination chemistry.

## Molecular Orbital (MO) Theory [NEW – CMU gap]

- **MO theory:** molecular orbitals are formed by linear combination of atomic orbitals (LCAO).
- **Bond order = (bonding electrons − antibonding electrons) ÷ 2.**
- **Higher bond order** = stronger, shorter bond.
- **Diamagnetic:** all electrons paired. **Paramagnetic:** has unpaired electrons.

**Example:** CN⁻ (cyanide ion, isoelectronic with N₂). Total electrons = 6+7+1 = 14. MO filling: σ1s², σ*1s², σ2s², σ*2s², π2p⁴, σ2p². Bonding electrons = 10; antibonding = 4. **Bond order = (10−4)÷2 = 3** (triple bond). All electrons paired → **diamagnetic**.

## Coordination Chemistry [NEW – CMU gap]

- **Oxidation state:** the charge an atom would have if all bonds were ionic.
- **Ferricyanide [Fe(CN)₆]³⁻:** CN⁻ is −1 each × 6 = −6. Complex charge = −3. Fe oxidation state: x + (−6) = −3 → **Fe = +3**.
- **d-electrons for Fe³⁺:** Iron ground state = [Ar]3d⁶4s². Fe²⁺ removes 4s² (6d electrons). Fe³⁺ removes one more d electron → **5 d-electrons**.
- **Prussian Blue reaction:** Fe³⁺ + Fe²⁺ + CN⁻ → Fe₄[Fe(CN)₆]₃ (Prussian Blue), a deep blue precipitate. Used to detect iron in blood (hemoglobin contains Fe) and historically in GSR testing. [NEW – CMU]

## Crystal Structures [NEW – CMU/YJI gap]

|Crystal System         |Axes                                     |Example                                        |
|-----------------------|-----------------------------------------|-----------------------------------------------|
|Cubic                  |All three axes equal length, all 90°     |NaCl, iron, diamond                            |
|Orthorhombic           |All three axes different lengths, all 90°|Sulfur, calcium carbonate (aragonite polymorph)|
|Trigonal / Rhombohedral|Three equal axes, angles ≠ 90°           |Calcium carbonate (calcite), quartz            |
|Hexagonal              |Two equal axes at 120°, one perpendicular|Ice, graphite                                  |

**NaCl crystal structure:** Face-centered cubic. Na⁺ and Cl⁻ ions alternate in a 3D checkerboard pattern. Each Na⁺ is surrounded by 6 Cl⁻ and vice versa (coordination number = 6). [NEW – CMU]

**Calcium carbonate (CaCO₃)** has a **trigonal crystal system** — NOT cubic or orthorhombic. [NEW – YJI]

## Boric Acid Acidity [NEW – NUSO gap]

**Boric acid (H₃BO₃)** is a **Lewis acid**, NOT a Brønsted-Lowry acid. It does NOT donate a proton (H⁺) directly. Instead, it accepts a hydroxide ion (OH⁻) from water, forming the tetrahedral borate anion [B(OH)₄]⁻ and releasing H⁺:

**B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺   (pKa ≈ 9.2)**

The equilibrium lies left (weak acid). **pH of boric acid solution is mildly acidic (~5–6).**

-----

# §9. The 30% Analysis Write-Up (the part that wins ties)

The rules: explain which evidence implicates which suspect **AND** why each other suspect was eliminated. The ‘why excluded’ reasoning is the **explicit tiebreaker**.

## Class vs. Individual Evidence

|Individualizing (one source)         |Class Only (a group)                 |
|-------------------------------------|-------------------------------------|
|Fingerprint minutiae (Level 2+ match)|ABO blood type                       |
|DNA/STR profile                      |Fiber type (cotton, polyester, etc.) |
|Bullet striation match               |Hair microscopy (no DNA)             |
|Physical fracture (jigsaw) fit       |Glass RI                             |
|Unique toolmark                      |Soil type; polymer type; pollen type |
|                                     |Tread pattern (pre-wear); powder type|

**⚠ Overclaiming a class item as if it individualized is the #1 point-loser and costs the tiebreaker.**

### Forensic Value of Fingerprint Context [NEW – Southview gap]

A fingerprint’s forensic value is determined not only by its quality and level of detail, but by its **CONTEXT**. A fingerprint on a murder weapon has higher forensic value than the same fingerprint on a kitchen counter the suspect could have legitimately touched. When asked ‘which print has more forensic value,’ consider: location, access (was it expected?), number of minutiae, and whether it can be excluded on innocent grounds.

## Structure (CER)

1. **Claim:** name the culprit(s)
1. **Evidence:** each item, the test, the result, the suspect link
1. **Reasoning:** why it links AND why each other suspect is excluded — cited, by name
1. **Address contradictions/limits**

## Worked Case A — Clean single-culprit

**Evidence:** safe print (ulnar loop, bifurcation+island) matches Suspect 2; type-B carpet blood; suspects typed O/B/O.

**Culprit: Suspect 2.** The print individualizes (minutiae match Suspect 2’s right index). The type-B blood is **CLASS** evidence matching Suspect 2 and excluding Suspects 1 and 3 (type O). Print individualizes; blood (type B, ~11% frequency) corroborates but only narrows to a group.

## Worked Case B — Class evidence only

**Evidence:** blue polyester on victim matches Suspect 1’s jacket; scene soil on Suspect 3’s boots. No prints/DNA.

**No suspect can be individualized.** Both items are class-level. State the limitation: a fingerprint, DNA, or physical fiber-end match would be needed to individualize.

## Worked Case C — Multi-suspect with contradiction

**Evidence:** glass RI 1.52 in Suspect 2’s cuff; worn-heel shoeprint matching Suspect 3; type-AB entry blood; suspects typed O/AB/A.

**Culprit: Suspect 2; Suspect 3 present but not the assailant.** AB blood (~4%, comparatively rare) matches only Suspect 2 — excluding Suspect 1 (O) and Suspect 3 (A). Cuff glass is **CLASS** evidence corroborating presence. Worn-heel shoeprint **INDIVIDUALIZES** Suspect 3 as also present — surface the contradiction, don’t bury it.

## Self-Grading Rubric

- Led with the conclusion?
- Tagged each item class vs individual?
- Excluded **EVERY** other suspect **BY NAME** with cited evidence?
- Refused to let class evidence masquerade as individual?
- Surfaced contradictions?
- Mentioned motive if supplied in scenario? [NEW – Allendale: motive = separate point category]

**⚠ Missing #3 or #4 costs the tiebreaker.**

-----

# §10. DNA Sequencing Technologies [NEW – LexSO gap]

## Next-Generation Sequencing Methods

|Method           |Principle                                                                                                                         |Read Length               |Forensic Use                                                                    |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------|--------------------------------------------------------------------------------|
|Sanger sequencing|Chain-termination: ddNTPs stop extension at each base type. Gel/capillary separation of fragments. ‘Gold standard’ for accuracy.  |~1000 bp                  |Traditional DNA sequencing; used in capillary electrophoresis for STRs          |
|Illumina (NGS)   |Sequencing by synthesis: fluorescently labeled reversible terminator dNTPs. Massively parallel — millions of reads simultaneously.|~150–300 bp               |High throughput; whole genome or targeted panels; increasingly used in forensics|
|Nanopore (Oxford)|Single-molecule sequencing: DNA passes through a protein nanopore; current changes identify each base in real time.               |Very long reads (10kb–1Mb)|Rapid field deployment; real-time results; can sequence degraded DNA            |

## PCR Reaction Ingredients [NEW – LexSO gap]

|Component     |Role                                                                                                                    |
|--------------|------------------------------------------------------------------------------------------------------------------------|
|Template DNA  |The DNA to be amplified — contains the target sequence                                                                  |
|Primers (×2)  |Short synthetic oligonucleotides (~18–25 bp) complementary to sequences flanking the target; define the amplified region|
|Taq polymerase|Heat-stable DNA polymerase (from Thermus aquaticus); synthesizes new strands at 72°C                                    |
|dNTPs (×4)    |Deoxynucleotide triphosphates (dATP, dCTP, dGTP, dTTP) — the building blocks added to the new strand                    |
|MgCl₂         |Cofactor for Taq polymerase — required for enzyme activity; concentration affects specificity                           |
|Buffer        |Maintains optimal pH for polymerase activity                                                                            |

## Inheritance / Parentage Genetics [NEW – LexSO gap]

**ABO blood type inheritance** uses codominance (A and B) and recessive (O): IA (A allele), IB (B allele), i (O allele).

|Parent 1 Phenotype|Parent 2 Phenotype       |Can produce type O child?                              |
|------------------|-------------------------|-------------------------------------------------------|
|A (genotype AO)   |B (genotype BO)          |Yes — A×O and B×O cross → OO possible (25% chance)     |
|A (genotype AA)   |B (genotype BB)          |No — all children receive at least one A or B allele   |
|A (Rh−)           |B (Rh+, genotype Rh+/Rh−)|Child can be O−: inherits OO for ABO and Rh−/Rh− for Rh|

-----

# §11. Seeds/Pollen, Soil, Tracks

## Palynology

- **Pollen** is durable, species-specific, and places a person in a region/environment.
- Compare scene pollen to suspects or regional flora for class-level association.

## Soil Science [NEW – CLC gap]

|Soil Type|Particle Size         |Impression Quality                                                              |Notes                                |
|---------|----------------------|--------------------------------------------------------------------------------|-------------------------------------|
|Clay     |Smallest (<0.002 mm)  |BEST for preserving footwear impressions — fine texture holds moisture and shape|[NEW – CLC: ‘smallest particle size’]|
|Silt     |Medium (0.002–0.05 mm)|Good, but less precise than clay                                                |                                     |
|Sand     |Largest (0.05–2 mm)   |WORST — large, non-cohesive particles fall off tracks; unreliable for transfer  |[NEW – YJI: ‘large and non-cohesive’]|

- **Density-gradient column:** particles settle at matching density levels → comparison profile.
- **Color (Munsell), texture, and mineralogy** are compared for soil class evidence.

## Tracks — Class vs. Individual

- **Class:** tread pattern, size (pre-wear).
- **Individual:** specific wear, cuts, embedded debris, manufacturing defects.

-----

# §12. Event Logistics & Strategy

- **Note sheet:** one 8.5”×11” sheet, both sides, any content, laminated. Put: verified densities, flame colors, dichotomous key, flat substance table, RI values, ABO frequencies, worked formulas, atomic masses, Snell’s law, Solvay equation.
- **Calculator:** Class III (for spatter angles, Rf, ADD, RI math, moles).
- **Lab Equipment advantage:** you may bring your own microscope, magnifier, density-gradient setup.
- **Supervisor provides:** iodine, 1M HCl, 1M NaOH, Benedict’s, hot water bath, heat source, waste container, chromatography materials, distilled water.
- **Penalties:** −10% no clean-up; up to −10% prohibited equipment. Tiebreaker = analysis write-up. Full safety gear required.

-----

# §13. Image-Only Gaps — Build These Anki Cards

## Gap A — Hair Micrographs

Drill: identify cuticle scale type, medulla type, human vs. animal, species.

**Sources:**

- FBI Microscopy of Hair Parts I–II (Deedrick & Koch, 2004)
- MicroLabNW Photomicrograph Gallery
- scioly.org Test Exchange

## Gap B — Fingerprint Pattern Recognition

Drill: name the pattern (8 types), count deltas, locate core.

**Sources:**

- NIST fingerprint image databases
- scioly.org Test Exchange

## Gap C — Seed/Pollen Identification

Drill: monosulcate, tricolporate, round, elliptical, spiky, smooth.

**Sources:**

- PalDat database
- The Pollen Library
- Past scioly Forensics tests

## Gap D — STR Electropherograms & Bullet Striations

**Electropherograms:** NIJ STR Data Analysis course (nij.ojp.gov).

- Card format: front = electropherogram → back = match/exclude + reasoning per locus.

**Bullet striations:** NIST NBIS bullet image database; scioly.org Test Exchange.

- Card format: front = side-by-side comparison → back = match/inconclusive/exclusion.

## Gap E — Molecular Structure Sketches [NEW]

**Must be able to sketch:**

- Glucose open-chain (aldohexose with CHO and 4 CHOH and CH₂OH)
- Glucose Haworth projection (α vs β)
- Ethylene monomer (H₂C=CH₂ for HDPE)
- Vinyl chloride (H₂C=CHCl for PVC)
- Styrene (H₂C=CH-C₆H₅ for PS)

Practice drawing from memory — paper test may require hand-drawn structures.

-----

# §14. Resources

- **scioly.org wiki** → Forensics (Division C). Canonical community guide.
- **scioly.org Test Exchange** → free past tests with answer keys. Single best practice resource.
- **soinc.org** → official event page + Division C Chemistry Events Lab Equipment List.
- **Nobel Prize PCR game** (educationalgames.nobelprize.org) — cited in the rules for DNA.
- **Deedrick & Koch,** *Microscopy of Hair Parts I–II* (Forensic Science Communications — free PDF).
- **NIJ STR Data Analysis course** (nij.ojp.gov — free, includes sample electropherograms).
- **Debelica & Thies (2009),** *Atlas and Key to the Hair of Terrestrial Texas Mammals* (Texas Tech Special Pub. 55) — squirrel resolution.
- **ENFSI** *Best Practice Manual for the Microscopic Examination and Comparison of Human and Animal Hair* (2015).
- **Saferstein,** *Criminalistics* — standard text; overkill for tryout prep but useful for theory gaps.

-----

## Summary of v4 Additions

**What’s new (gap-filled by test source):**

- **Allendale:** Solvay process equation, dactyloscopy definition, papillary/basal layer anatomy, PCR step names (Denaturation/Annealing/Elongation), 2ⁿ formula, restriction enzymes, glucose Haworth projections with α/β anomers
- **CarSO:** Benedict’s exact composition (CuSO₄ + sodium citrate + sodium carbonate) and Cu₂O product, glucose alpha/beta stability (1,3-diaxial interactions), flame test physics (electron excitation), tacticity (isotactic/syndiotactic/atactic PP), LLDPE branching theory, CODIS hierarchy, dermatoglyph, koala fingerprints, HPLC definition
- **CLC:** Soil particle size ranking (clay smallest → best impressions; sand largest → worst), hair growth phases (Anagen/Catagen/Telogen) with forensic significance
- **CMU:** MO theory + bond order worked example (CN⁻), coordination chemistry (Fe oxidation state, d-electron count), Prussian Blue reaction, NaCl crystal structure, Snell’s law with formula, PMMA/acetone solubility mechanism, vulcanization
- **Fairfax:** MS instrument stages (Ionization → Acceleration → Deflection → Detection), DNA profiling history (1980s), buccal swab cells, keratin as hair structural protein
- **Haslett:** Full atomic mass table (including Boron = 11), boric acid MW calculation (62)
- **HUSO:** Ester group in PETE, HDPE branching theory, PS UV degradation, fiber microscopic morphology, dye affinity (wool dyes easiest)
- **LexSO:** Free-radical polymerization mechanism, oligomers, degree of polymerization calculation, Nylon 6,6 naming, all three DNA sequencing methods (Sanger/Illumina/Nanopore), PCR reaction ingredients with roles, parentage genetics, caliber conversion math, polygonal rifling, Gonzalez test, serial number recovery, IAFIS vs. NGI history, Adermatoglyphia
- **NUSO:** Flame test physics mechanism, bleach test mechanism (protein disulfide bonds), iodine fuming physics (sublimation), Kastle-Meyer mechanism, boric acid Lewis acid mechanism, thermosetting vs. thermoplastic
- **Southview:** Industrial uses table for all 15 substances, fingerprint forensic value (context matters)
- **YJI:** Amylose (not amylopectin) + I₃⁻ ion, Cu₂O as Benedict’s product, crystal systems (cubic/orthorhombic/trigonal), Henry Classification System, heat fractures, reverse-phase chromatography, oligomers/plasticizers, PC photo-oxidation

**One honest gap remaining:** CMU MO diagrams and molecular structure sketches (glucose Haworth, monomers) are flagged as requiring hand-drawn practice — no text fully substitutes for drawing from memory under time pressure.

**v5 additions:** mtDNA maternal inheritance + class-evidence reasoning, DNA backbone charge/electrophoresis direction, full DNA replication enzyme order (helicase→ligase), rigor/livor/algor mortis definitions and timelines, decomposition stage table, satellite spatter + wipe/swipe + direct/indirect transfer terminology, dactylogram vs. dactyloscopy, fingerprint point-count standards (US sufficiency vs. historical European), sulfuric acid vs. bleach on fibers, PETE/toluene resistance, litmus source (lichens), plastic burn flame colors, MS as confirmatory (not presumptive), humus as the “decaying organic matter” soil component, and a PS/HDPE/PC chemical-resistance disambiguation. All flagged **[NEW – general knowledge, unverified against invitational tests]** — see §15 for the small remaining list of items that stay genuinely unanswerable.

-----

# §15. General-Knowledge Supplement [NEW v5 — closes remaining gaps]

This section addresses items marked “Not Answerable” across two full 200-question practice passes (400 questions total) that fall **outside the v4 guide’s sourced/gap-filled scope** — mostly standard intro biology/chemistry/forensics facts that the invitational-test gap analysis didn’t happen to surface, plus a few genuinely-missing forensic vocabulary terms. Everything below is **[NEW – general knowledge, unverified against invitational tests]** unless otherwise marked. Cross-check against scioly.org wiki before committing to a note sheet.

## 15.1 Mitochondrial DNA & Genetics

- **Mitochondrial DNA (mtDNA) is inherited maternally** — passed from mother to all offspring (both sons and daughters) essentially unchanged, because mitochondria in the fertilized egg come almost exclusively from the egg cell (sperm mitochondria are typically destroyed after fertilization). This makes mtDNA useful for tracing maternal lineages and for identifying remains via comparison to maternal relatives, even many generations removed.
- **Why mtDNA is class evidence, not individual:** because all maternal-line relatives (siblings, mother, maternal aunts/uncles, maternal grandmother, etc.) share identical mtDNA sequences (barring rare mutation), a match narrows to a maternal lineage/family group rather than a single individual — consistent with §9’s class-vs-individual framework.
- **DNA’s electrical charge:** The DNA backbone is **negatively charged**, because each phosphate group in the sugar-phosphate backbone carries a negative charge (phosphate = PO₄³⁻ contributes net negative charge at physiological pH). This is why DNA migrates toward the positive electrode (anode) during **gel electrophoresis** — the negatively charged molecules are pulled through the gel matrix toward the positive pole, with smaller fragments moving faster/farther than larger ones.
- **DNA replication enzymes (general order, for “which enzyme acts first” style questions):**
1. **Helicase** — unwinds and separates the double helix by breaking hydrogen bonds between base pairs (acts first).
1. **Topoisomerase** — relieves torsional strain ahead of the helicase.
1. **Primase** — synthesizes a short RNA primer to give DNA polymerase a starting point.
1. **DNA polymerase** — synthesizes the new strand 5’→3’, adding complementary nucleotides.
1. **Ligase** — seals nicks/gaps between newly synthesized fragments (e.g., joining Okazaki fragments on the lagging strand) — acts last.
  - Note: in **PCR** (§10), this entire enzymatic cascade is replaced functionally by **Taq polymerase** plus heat-driven denaturation (no helicase needed — heat does that job) and synthetic primers (no primase needed).

## 15.2 Decomposition / Time of Death

- **Rigor mortis:** Stiffening of muscles after death due to depletion of ATP, which is required for muscle fibers to relax. Without ATP, actin and myosin filaments remain cross-linked (locked in contraction).
  - **Onset:** typically begins ~2–6 hours after death.
  - **Full rigidity:** reached at approximately ~12 hours.
  - **Resolution/passing:** rigor begins to fade after ~24–36 hours as tissue decomposition breaks down the muscle proteins, restoring flexibility (“secondary flaccidity”).
  - **Temperature dependence:** warmer environments accelerate onset and resolution; cold environments (including refrigeration) slow or can pause the process.
- **Livor mortis (lividity):** Purple-red discoloration caused by gravitational settling of blood in capillaries after circulation stops. Appears in the lowest-lying body areas (relative to position after death). Begins ~20 minutes to 3 hours after death, becomes fixed (non-blanching) after ~8–12 hours — fixed lividity inconsistent with the body’s found position can indicate the body was moved after death.
- **Algor mortis:** Cooling of the body to ambient temperature; commonly estimated at roughly 1.5°F (0.8°C) per hour for the first several hours, though this varies considerably with body mass, clothing, and environment — used cautiously as a PMI estimator, generally only reliable for the first ~24 hours.

## 15.3 Blood Spatter — Additional Terminology

- **Satellite spatter (satellite droplets):** Small droplets that separate from a larger blood drop upon impact and land around the main stain, radiating outward. Their presence/pattern can help confirm the direction and angle of impact alongside the main stain’s directionality.
- **Contact/transfer stain (wipe vs. swipe):**
  - **Wipe pattern:** Created when an object moves through an existing wet bloodstain, removing/altering it (e.g., a hand dragged through a pool of blood).
  - **Swipe pattern:** Created when a bloody object contacts a clean surface, transferring blood onto it (e.g., a bloody hand touching a wall).
- **Direct vs. indirect transfer:**
  - **Direct transfer:** Blood travels directly from its source (wound, weapon) onto a surface — e.g., a weapon dripping blood directly onto the floor.
  - **Indirect transfer:** Blood is deposited via an intermediate object — e.g., a shoe steps in a blood pool, then tracks blood onto a different surface.

## 15.4 Fingerprint / Print Vocabulary

- **Dactylogram:** A general term for a fingerprint impression itself (the recorded/printed image of the friction ridge pattern) — related to but distinct from **dactyloscopy** (§5, the *study/practice* of fingerprint identification). If a question distinguishes the two: dactyloscopy = the science/method; dactylogram = the print/record produced.
- **Minimum area/ridge count for legal identification:** There is no single universal legal minimum number of matching points required for identification in the US (unlike some countries that historically required 12 points, e.g., parts of Europe under older standards). US courts generally apply a **“sufficiency” standard** — the examiner testifies that, in their opinion, there is sufficient agreement in Level 2 (minutiae) detail with no unexplainable differences. Science Olympiad questions referencing a fixed point count are likely referring to historically-cited European standards (commonly **8–12 points**) rather than current US practice — verify against the specific question’s framing.

## 15.5 Fiber/Chemistry Odds and Ends

- **Sulfuric acid and protein fibers:** Concentrated sulfuric acid dissolves both cellulose (cotton, linen) and protein (wool, silk) fibers — it is a strong dehydrating/oxidizing acid that breaks down both cellulose’s glycosidic bonds and protein’s peptide bonds. This contrasts with **bleach**, which dissolves protein fibers (via disulfide bond attack, §3) but not cellulose. If a question is testing the *bleach* distinction (protein dissolves, cellulose doesn’t), use §3’s bleach logic; if it’s specifically about sulfuric acid, both fiber families are affected and the distinguishing test would be something else (e.g., burn test, microscopy).
- **PETE and toluene:** PETE (polyester) has good resistance to many organic solvents at room temperature, including toluene, due to its semi-crystalline structure and aromatic ring content — it does not dissolve readily in toluene under normal conditions (contrast with PMMA, which readily dissolves in acetone, §2).
- **Litmus — botanical source:** Litmus is a natural dye extracted from certain **lichens** (most notably species in the genera *Roccella* and *Lecanora*). It is not synthetic — it’s a mixture of pigments (azolitmin and others) that change color with pH.
- **Plastic burn flame colors (general reference, not in §2’s burn-test data but commonly tested):**
  - **PVC:** burns with difficulty, tends to **self-extinguish**; flame often shows **green/yellow tints** due to chlorine content, and produces **HCl gas** (acrid, irritating smell) — the green flame is analogous to the copper-chloride “Beilstein test” effect when chlorinated organics burn near a copper surface, though PVC alone burning typically shows yellow with green edges.
  - **PE (HDPE/LDPE) and PP:** burn readily with a **blue base and yellow tip**, drip like candle wax, and smell of paraffin/candle wax.
  - **PS:** burns with a **yellow, sooty flame** producing dense black smoke, and a sweet/floral odor characteristic of styrene.
  - **PETE:** burns with a **yellow flame**, black smoke, and a sweet odor; tends to self-extinguish in air more readily than PE/PP.
- **Plasticizer-related items (cream-colored residue, PETE applications beyond bottles):** PETE is also widely used for **textile fibers (polyester clothing)** and **food packaging films**, in addition to bottles/containers (§2). A “cream-colored residue” descriptor doesn’t correspond cleanly to any of the 8 plastics’ burn behaviors in §2 and may originate from a specific test’s burn-sample set not represented in this guide — flag for verification against the original test’s answer key if possible.

## 15.6 Mass Spectrometry — Presumptive vs. Confirmatory

- **Mass spectrometry (MS) is a confirmatory test**, not presumptive. Presumptive tests (e.g., color-change spot tests, Kastle-Meyer for blood, Marquis/Duquenois-Levine for drugs) give a quick indication that a substance *might* be present but can produce false positives. Confirmatory tests (MS, GC-MS, DNA profiling/STR) provide definitive identification based on a specific molecular signature and are required before evidence is treated as conclusively identified in court. GC-MS specifically is considered a **gold-standard confirmatory test** for drug and chemical identification.

## 15.7 Soil — “Decaying Organic Matter” Classification

- If a question describes a soil component as primarily **decaying organic matter**, the term it’s likely looking for is **humus** (or “organic matter/humus content”) — distinct from the mineral particle-size categories (clay/silt/sand, §11). Humus is not a particle-size class; it’s a compositional component that affects soil color (dark coloration), water retention, and nutrient content, and can be compared between scene and suspect soil samples as an additional class characteristic alongside particle size, color (Munsell), and mineralogy (§11).

-----

## Items That Remain Genuinely Unanswerable

The following could not be supplemented even with general knowledge, because they depend on specific scenario text, images, or named case studies that this guide does not contain. These require either the original test’s scenario/image or outside case-study research:

- Specific crime-scene scenario questions referencing a particular test’s narrative (e.g., “the items in my Notion-style scenario,” Set 2 Q55).
- Named historical case studies (e.g., Ted Bundy, Set 2 Q92) — case-specific forensic details are not part of this content-area guide and would need separate research (see §14 resources for general DNA-profiling history, which covers the 1980s era generally).
- Hair/fingerprint/pollen **image-identification** drills (§13 Gaps A–C) — these require the actual micrographs/images from the test, which cannot be reconstructed from text.
- A small number of items referencing exact numeric mappings not established anywhere in forensic pedagogy at the SciOly level (e.g., precise Benedict’s color-to-concentration percentage curves, Q5/Q195) — these would require a specific calibration source from the test’s supervisor, which varies by competition and is not standardized.

-----

-----

# §16. Technical Appendix [NEW v6 — lab procedures, constants, reagents, history]

This section addresses a third gap-analysis pass covering laboratory procedural nuances, numerical constants, advanced biochemistry, additional reagents, and historical forensic figures. As with §15, all content here is **[NEW – general knowledge, unverified against invitational tests]** unless marked otherwise. Several items below include an honest “this number/term varies by source” caveat — do not commit unverified specific numbers to a note sheet without cross-checking.

## 16.1 Laboratory Procedure — Chromatography Cheat Sheet

### Paper Chromatography — Bench Rules

- **Spotting line must be drawn in pencil, not pen/ink.** Ink contains its own dyes/pigments that will dissolve in the mobile phase and travel up the paper, contaminating the chromatogram and making it impossible to distinguish the sample spots from the baseline marking. Pencil (graphite) is insoluble in the solvents used and will not migrate.
- **Spots should be applied small and concentrated** (multiple short applications, allowing each to dry, rather than one large wet application). Large/diffuse spots spread further during development, causing overlapping bands, poor resolution, and inaccurate Rf measurements (the “spot center” becomes ambiguous, §7).
- **The paper must not touch the sides of the developing chamber/beaker.** If the paper contacts the glass, the solvent can wick up that contact point unevenly (capillary action against the glass vs. through the paper), causing uneven solvent fronts, distorted/curved bands, and inaccurate Rf values. The paper should hang freely, suspended from the top.
- **The spotting line/origin must remain above the level of the solvent in the chamber** before development begins. If the original spots are submerged in the solvent reservoir, the sample dissolves directly into the bulk solvent rather than being carried up the paper by capillary action — the experiment fails entirely.
- **The chamber should be covered/sealed during development.** This keeps the atmosphere inside saturated with solvent vapor, preventing uneven evaporation from the paper surface, which would distort the solvent front and Rf values.

### TLC — Additional Technicalities

- **Removing the plate before the solvent front reaches the top:** The plate must be removed from the developing chamber **before the solvent front reaches the top edge of the plate**. If development continues until the solvent runs off the top edge, the solvent front position becomes undefined/lost, making it impossible to calculate Rf (which requires measuring origin-to-front distance, §7). Practically, plates are removed when the front is within a few mm of the top, then the front position is immediately marked with a pencil line before the plate dries.
- **The plate must be marked immediately upon removal** — once removed, the solvent continues to evaporate and the visible “front” can become unclear within seconds to minutes, especially with volatile solvents.
- **Substances that cannot be used as TLC stains/visualizing agents:** A stain must react with or adhere to the analyte without destroying the silica/alumina stationary phase or obscuring the spots. General categories that are **unsuitable**:
  - Stains that are themselves highly colored across the visible spectrum in a way that masks all spot colors (e.g., using a reagent that turns the entire plate uniformly the same color as the target spots).
  - Strong oxidizers/corrosives that would damage the silica gel layer itself if not used under controlled conditions (e.g., concentrated sulfuric acid is sometimes used as a “char” stain but requires heating and char-development — it cannot be used casually as a simple dip-and-view stain).
  - Reagents that only react with one specific functional group when the analyte set is chemically diverse (e.g., ninhydrin works for amino acids but would show nothing for a plate of pure hydrocarbons/lipids — “unsuitable” in the sense of producing a blank result, not in the sense of damaging the plate).
  - **UV light (254 nm/365 nm) is not a “stain” but is commonly used as a visualization method** for plates containing a fluorescent indicator (F254 plates) — compounds that absorb UV appear as dark spots on a fluorescent background. This is sometimes confused with “staining” in question wording.

## 16.2 Fingerprint Documentation & Lifting — Standard Order of Operations

The generally accepted forensic workflow for processing a latent print at a scene, in order:

1. **Locate** the print (visual inspection, oblique lighting, or after development with a technique appropriate to the surface, §5).
1. **Photograph in place** — photograph the print *before* any lifting or further processing, including a **scale/ruler placed in the same plane as the print** in the photograph, to preserve original size, orientation, and context (location on the object/scene).
1. **Document** — record the location, surface type, orientation, and any case-identifying information (case number, date, examiner) in notes/a evidence log.
1. **Develop further if needed** — apply the appropriate chemical/physical development method (§5 table) if the print is not already visible enough to lift directly.
1. **Lift the print** — typically using clear adhesive tape (for powder-developed prints) pressed over the print and then placed on a contrasting backing card, or using a specialized lifting film for other development methods.
1. **Label and package** — label the lift card/backing with case information, and package as evidence with proper chain-of-custody documentation.

**Key point for written-response questions:** photographing **with a scale BEFORE lifting** is the step most often tested, because lifting can damage or destroy the original print — the photograph is the only permanent record of the print’s original size and context if the lift fails or distorts the pattern.

## 16.3 Evidence Collection From Unusual Surfaces

- **Prints in wet/undried paint:** A latent print impressed into wet paint is a **plastic print** (a 3D impression in a soft material, §5’s “three scene types”). Because the surface itself retains the ridge detail as a physical impression (not just an oily residue deposit), the standard approach is to **photograph extensively (with scale, raking/oblique light to emphasize the 3D ridge relief) and, if necessary, make a cast** (similar to a tool-mark or footwear impression cast) rather than attempting to “develop” it chemically — chemical development reagents (powders, fuming) are designed for residue-based latent prints on dry surfaces and can damage or smear a print left in a still-soft medium.
- **Sampling ink from a document/letter:** To analyze ink without destroying the document, a small sample is typically taken by **punching out a tiny plug/core** from within a letter’s stroke (using a micro-punch) at a location that minimally affects legibility/content, rather than scraping broadly. The sample is then analyzed via **TLC** (§7) — comparing the ink’s dye components’ Rf values against reference ink standards — because TLC requires only a microgram-scale sample. Non-destructive alternatives (when the question allows them) include infrared/UV photography or spectroscopy to compare ink composition without removing any material at all.

## 16.4 Numerical Constants

**Honest framing:** several of the numbers below vary meaningfully by source, by the specific substance/material in question, or by the exact test conditions — these are presented as commonly-cited reference values, not guaranteed exam answers. Where a range exists across sources, the range is given.

- **Sucrose boiling/decomposition:** Sucrose does not have a clean “boiling point” in the way a simple liquid does — it **decomposes/caramelizes** starting around **160–186°C**, well before any true boiling would occur, breaking down into glucose and fructose and then further decomposition products. If a question asks for a numeric value, **~186°C (melting/decomposition point)** is the most commonly cited figure, but this is a decomposition temperature, not a boiling point in the traditional sense.
- **Glucose melting/decomposition:** commonly cited around **~146°C** (α-D-glucose monohydrate) with decomposition occurring near the melting point.
- **Density values for soil components (commonly cited reference ranges — verify against the specific test’s source):**
  - Gravel: roughly **1.5–2.0 g/cm³** (bulk density, dry, loose).
  - Loam: roughly **1.1–1.4 g/cm³** (bulk density).
  - Silt: roughly **1.0–1.3 g/cm³** (bulk density, loose).
  - These bulk-density figures are highly dependent on compaction, moisture content, and particle composition — they are NOT the same as the particle-size classification in §11, which uses particle diameter, not density, as the sorting criterion. A density-gradient column (§11) separates soil particles by **particle density** (mineral composition), which is a different property from the *bulk* densities listed here.
- **Molar masses for monomers referenced in §2/§8:**
  - Ethylene (C₂H₄): **28 g/mol**
  - Vinyl chloride (C₂H₃Cl): **62.5 g/mol**
  - Styrene (C₈H₈): **104 g/mol** (already given in §2’s degree-of-polymerization example)
  - Propylene (C₃H₆): **42 g/mol**
  - Methyl methacrylate (MMA, C₅H₈O₂): **100 g/mol**
  - Terephthalic acid (for PETE) (C₈H₆O₄): **166 g/mol**; ethylene glycol (C₂H₆O₂): **62 g/mol**

## 16.5 Hair Growth Phase Durations — Specific Numbers

§4 (v4) gives the three phases (Anagen/Catagen/Telogen) with approximate percentages of scalp hairs in each phase at any time, but not phase *durations*. Commonly cited durations (scalp hair, human):

- **Anagen (growth):** **2–7 years** (highly variable; determines maximum hair length).
- **Catagen (transition):** approximately **2–3 weeks** (already noted in v4’s table as “brief”).
- **Telogen (resting/shedding):** approximately **2–4 months** (often cited as ~100 days), after which the hair is shed and a new anagen cycle begins in that follicle.

**Note:** these durations apply specifically to **scalp** hair; body hair (eyebrows, arms, legs) has a much shorter anagen phase (weeks to months), which is why body hair doesn’t grow as long as scalp hair regardless of how long it’s left uncut.

## 16.6 Blowfly Egg-Only Window

- Adult blowflies (Calliphoridae) typically arrive and begin **oviposition (egg-laying) within minutes to a few hours** of death (§6, v4). The eggs themselves are commonly cited as remaining in the **“egg” stage (before hatching into first-instar larvae) for approximately 24 hours** under favorable (warm) conditions — this is the basis for a “24-hour egg-only window” sometimes referenced in PMI estimation: if only eggs (no larvae) are found, death likely occurred within roughly the last 24 hours, assuming flies had immediate access to the remains. Hatching time is temperature-dependent and can extend to ~3 days in cooler conditions.

## 16.7 Advanced Biochemistry

- **Hemoglobin structure:** Hemoglobin is a **tetramer** composed of **two alpha (α) globin chains and two beta (β) globin chains** (α₂β₂), each chain non-covalently associated and each binding one **heme group** (containing one Fe²⁺ ion, which reversibly binds one O₂ molecule). This α₂β₂ tetrameric structure is the basis for cooperative oxygen binding (binding of O₂ to one subunit increases the affinity of the remaining subunits — positive cooperativity). This connects to §6’s Kastle-Meyer mechanism (hemoglobin’s heme-bound Fe acts as a peroxidase catalyst) and §8’s coordination chemistry (Fe oxidation state in heme).
- **Fibroin amino acid composition (silk):** Silk fibroin is dominated by a small set of small amino acids, primarily **glycine, alanine, and serine**, which together make up the majority of the protein and allow the tight, repetitive beta-sheet packing responsible for silk’s strength and characteristic triangular cross-section/sheen (§3).
- **Keratin sulfur content and hair “kink”/curl:** Keratin’s mechanical properties (including curl/kink pattern) are governed substantially by **cysteine content and the resulting disulfide (–S–S–) cross-link density** (§3’s bleach-test mechanism already references disulfide bonds). Higher disulfide cross-link density is generally associated with curlier/coarser hair, because the cross-links lock the keratin chains into a more tightly coiled conformation. A specific universal “percentage of sulfur-bearing amino acids” figure that determines curl is not a single fixed constant — cysteine content varies by hair type, and curl pattern is also influenced by the *shape of the hair follicle* (oval/asymmetric follicles produce curlier hair independent of disulfide content). Be cautious treating this as a single-number fact.

## 16.8 Thermodynamics of Dissolution

- **Ammonium chloride (NH₄Cl) dissolving in water is an ENDOTHERMIC process** — the solution becomes noticeably colder. This is because the energy required to break apart the ionic lattice (lattice energy) exceeds the energy released when the ions are hydrated (hydration enthalpy); the net energy deficit is drawn from the surrounding water as heat, lowering the temperature. (This is the basis for some “instant cold pack” products, which use ammonium nitrate or similarly endothermic salts — contrast with §1’s sodium acetate heat packs, which are exothermic via crystallization, not simple dissolution.)
- **Magnesium sulfate (MgSO₄, Epsom salt) dissolving in water is an EXOTHERMIC process** — the solution becomes noticeably warmer. The hydration enthalpy of the small, highly-charged Mg²⁺ ion (and SO₄²⁻) releases more energy than is needed to break the lattice, producing a net energy release as heat.
- **General rule of thumb (not absolute):** dissolution is endothermic when lattice energy > hydration enthalpy, and exothermic when hydration enthalpy > lattice energy. Highly charged, small ions (like Mg²⁺) tend to have large hydration enthalpies, favoring exothermic dissolution; larger or less-charged ion pairs more often favor endothermic dissolution. This is a useful heuristic, not a guarantee for every salt.

## 16.9 PETE and Toluene — Additional Detail

(Builds on §15.5’s note that PETE resists toluene at room temperature.) Toluene is an aromatic, relatively nonpolar solvent. PETE’s semi-crystalline structure and the polarity of its ester linkages (§2) make it resistant to **swelling/dissolution by nonpolar aromatic solvents like toluene** under normal conditions — toluene is, in fact, sometimes used industrially as a relatively “safe” solvent to use around PETE containers/components precisely because it does not significantly attack PETE, in contrast to solvents that do (e.g., strong bases can hydrolyze PETE’s ester groups over time — base-catalyzed hydrolysis, not simple solvation).

## 16.10 Electron Ionization (EI) Mass Spec — Mass Range

EI sources typically work best for relatively small, volatile molecules. A commonly cited **practical upper mass limit for EI is roughly in the 600–1000 amu range**, beyond which molecules tend to fragment too extensively (or fail to vaporize without decomposing) for EI to produce a useful, interpretable spectrum — heavier/less volatile/more polar molecules typically require “softer” ionization methods (ESI, MALDI, mentioned in §7’s general MS framework) that produce less fragmentation. **The specific “600 amu” figure should be treated as an approximate, commonly-cited threshold rather than a hard physical constant** — sources vary, and the practical limit depends heavily on the specific instrument and compound. If a test specifies “600 amu” as *the* EI limit, that’s likely the number that specific test’s source material used, but it isn’t a universally fixed value the way, say, an atomic mass is.

## 16.11 Additional Conditions Causing Absence of Fingerprints

§5 (v4) covers **Adermatoglyphia** (general term for congenital absence of fingerprints). Additional named conditions associated with absent/diminished dermatoglyphs:

- **Naegeli-Franceschetti-Jadassohn syndrome (NFJS):** A rare genetic ectodermal dysplasia (caused by mutations in the *KRT14* gene) that causes absent fingerprints along with skin pigmentation abnormalities (reticulated/net-like skin discoloration), reduced sweating, and dental/nail abnormalities. NFJS and a related condition (dermatopathia pigmentosa reticularis) are the conditions most specifically associated, in medical literature, with congenital absence of fingerprint ridges.
- **Adermatoglyphia (isolated form):** caused by mutations in the *SMARCAD1* gene, presents with absent fingerprints but otherwise normal skin — this is the “pure” form most commonly referenced in forensic-trivia contexts (§5).
- General note: severe **eczema, scarring, or certain chemotherapy drugs** (e.g., capecitabine) can cause *acquired* (non-genetic) temporary or permanent loss of fingerprint ridges later in life, distinct from the congenital genetic conditions above.

## 16.12 Additional Identification Reagents

Beyond the “15 substances” core qualitative-analysis set (§1) and the fingerprint-development reagents (§5), the following reagents appear in forensic/chemistry trivia contexts:

- **Tollens’ reagent** (commonly mis-rendered as “Tohling’s reagent” in some question banks — almost certainly the same thing): An ammoniacal silver nitrate solution ([Ag(NH₃)₂]⁺). Reducing sugars (and aldehydes generally) reduce the silver ion to metallic silver, depositing a **characteristic “silver mirror”** on the inside of the test tube. Like Benedict’s (§1), a positive result indicates a reducing sugar/aldehyde — but Tollens’ is specifically an aldehyde test (distinguishes aldehydes from ketones, since ketones generally do not react), whereas Benedict’s is more broadly used for reducing sugars in a basic copper-sulfate system.
- **Fehling’s reagent:** Similar purpose to Benedict’s — a copper(II) sulfate-based test for reducing sugars/aldehydes, producing a brick-red Cu₂O precipitate on a positive result (same underlying chemistry as Benedict’s, §1, but Fehling’s uses a different complexing agent — sodium potassium tartrate/Rochelle salt — instead of sodium citrate). Fehling’s and Benedict’s are often used interchangeably in textbooks; the practical difference is in their exact composition/stability rather than the chemistry being tested.
- **Sodium rhodizonate:** A reagent used in **gunshot residue (GSR) testing**, specifically for detecting **lead (Pb)** on skin or clothing around a wound — used to help establish the **distance** between the firearm and the target by examining the size and density of the lead-particle pattern it reveals (a pink/red color develops where lead is present, often confirmed/intensified with an acid spray). This connects to §6’s GSR section (lead/barium/antimony triad, detected primarily by SEM-EDX for elemental composition) — sodium rhodizonate is a complementary, simpler chemical spot-test specifically for the lead component and for visualizing the spatial pattern of residue, rather than a replacement for SEM-EDX.

## 16.13 Historical Figures in Forensic Science

§5 (v4) already covers **Sir Edward Henry** (Henry Classification System, 1900) and §10/§6 cover Alec Jeffreys (DNA fingerprinting, 1984). Additional commonly-tested historical figures:

- **Alphonse Bertillon** (French, late 1800s): Developed **Bertillonage** (anthropometry) — a system of identifying individuals via precise body measurements (height, arm span, head dimensions, etc.), used by law enforcement before fingerprinting became standard. Considered a foundational figure in the systematization of criminal identification, though Bertillonage was eventually superseded by fingerprinting (which Bertillon himself was initially resistant to incorporating).
- **Sir Francis Galton:** Pioneered statistical study of **fingerprint classification and individuality** in the late 1800s (the term “Galton points” for fingerprint minutiae, referenced implicitly in §5’s “Level 2 / Galton points,” derives from his work) — established that fingerprints are permanent and individually unique, laying groundwork that Henry built on for the classification system (§5).
- **James Marsh:** Developed the **Marsh test** (1836) — a chemical test for detecting **arsenic**, historically significant as one of the first reliable forensic toxicology tests, used to detect arsenic poisoning by converting arsenic compounds to arsine gas (AsH₃), which decomposes to deposit metallic arsenic visible as a dark deposit (“Marsh test mirror” — conceptually similar in spirit to Tollens’ silver mirror, §16.12, though a different chemical mechanism).
- **Mathieu Orfila:** Often called the “father of forensic toxicology” — pioneered systematic methods for detecting poisons in body tissues in the early-to-mid 1800s, predating and informing the context in which the Marsh test became useful.
- **Edmond Locard:** Developed **Locard’s Exchange Principle** (“every contact leaves a trace”) — referenced in passing in v4 (§9’s “transfer” framing) but the principle’s namesake/originator is Locard, a French criminologist who founded one of the first forensic laboratories (Lyon, early 1900s).

-----

## Items Still Not Covered (Category 3 — genuinely scenario/case-dependent)

Consistent with §15’s closing list, the following remain outside what any general study guide can supply:

- **Named historical case forensic details** (e.g., the Thames torso case, Ted Bundy bite-mark evidence) — these require dedicated case-study research; §14’s resources don’t include case-study databases. If your event’s tests reference specific named cases, build a separate “case studies” Anki deck from forensic history sources (e.g., Saferstein’s *Criminalistics* includes case examples).
- **Scenario-specific evidence locations** (“fiber on the door jamb,” “hole in the wall”) — entirely dependent on the specific test’s narrative/diagram, provided only at competition time.
- **Shoe/tread brand identification** — requires access to footwear tread databases (e.g., SoleMate, TreadMate) not included in this guide and generally not freely available outside law-enforcement subscriptions.