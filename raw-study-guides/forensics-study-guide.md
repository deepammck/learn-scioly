# Forensics C — Study Guide

Restructured around the rules' own Part b–f breakdown, with three corrections from the prior version: the cheat-sheet framing is gone entirely (no note sheet allowed at this tryout, so nothing here is written as "put this on your sheet" — it's written to be memorized or re-derived), "core" has been removed from the minutiae list (it's a pattern-classification landmark, not one of the rules-named ridge characteristics), and a calibration note has been added wherever a fact carries unusually specific sourcing, since the volume of "[gap-filled from invitational X]" tags in the prior version outran what could actually be verified in one pass.

**A general calibration note, upfront:** anything tagged below as checked was either standard, settled material, or something actually searched and confirmed during this rewrite. Anything attributed to a specific named invitational test was not independently re-confirmed against that source — treat those as "plausible, worth a second look" rather than settled fact, especially anything you'd build an answer around.

Scoring weights, since they tell you where study time is worth the most: Analysis of the Crime (3.f) ≈ 30% and the tiebreaker → §9. Qualitative Analysis (3.b) ≈ 20% → §1. Polymers/Fibers/Hair (3.c) ≈ 20% → §2–§4. Chromatography/Mass Spec (3.d) ≈ 15% → §7. Crime-Scene Physical Evidence (3.e) ≈ 15%, split here into §5–§6 for clarity.

---

## §1. Qualitative Analysis — The 15 Substances (≈20%)

Same fifteen for every team, no mixtures: sodium acetate, sodium chloride, sodium hydrogen carbonate, sodium carbonate, lithium chloride, potassium chloride, calcium nitrate, calcium sulfate, calcium carbonate, cornstarch, glucose, sucrose, magnesium sulfate, boric acid, ammonium chloride. Treat the whole section as one dichotomous key — no single test identifies a substance alone; each test eliminates a subset until one remains.

### Flame tests — cation ID, usually run first

Heat promotes a metal ion's electrons to higher energy levels; the photon released as each falls back is fixed by that element's configuration, giving each cation a characteristic color.

| Cation | Flame color |
|---|---|
| Na⁺ | intense yellow/orange |
| Li⁺ | red/crimson |
| K⁺ | violet/lilac (viewed through cobalt-blue glass — filters the sodium glare, not the potassium signal) |
| Ca²⁺ | orange-red/brick-red |
| Boron (boric acid) | green |
| Mg²⁺, NH₄⁺ | no characteristic flame color |

Trace sodium contamination overwhelms everything else — that's why K⁺ needs the cobalt filter at all. Don't confuse Mg²⁺ giving no flame color as a *salt* with elemental magnesium *metal* burning brilliant white — different physical process (incandescence from burning metal), not a salt test result.

### The three carbon-based powders: cornstarch, glucose, sucrose

The only non-ionic substances in the set — no conductivity, no flame color, no precipitate with AgNO₃/BaCl₂. Iodine (in KI solution, since iodine alone barely dissolves) reacts with starch's helical amylose component, trapping triiodide ions inside the coil for the blue-black color; amylopectin (starch's branched component) doesn't react, so a weak result reflects starch chemistry, not necessarily "less starch." Benedict's reduces Cu²⁺ (blue) to Cu⁺ via a reducing sugar's free aldehyde/ketone group, precipitating brick-red Cu₂O.

| Reagent | Target | Positive result |
|---|---|---|
| Iodine/KI | starch | blue-black |
| Benedict's (hot bath) | reducing sugar (glucose) | green → orange → brick-red |
| Fehling's | reducing sugar | same chemistry as Benedict's, different complexing agent |
| Tollens' | aldehydes specifically | silver mirror (Ag⁺ reduced to metal) |

Sucrose is a non-reducing disaccharide — glucose and fructose are joined through both anomeric carbons, leaving no free reducing group — so it reads **negative on Benedict's until hydrolyzed**. A negative Benedict's means "non-reducing sugar," not "not a sugar."

### Confirmatory ionic tests

| Target | Method | Positive result | Identifies |
|---|---|---|---|
| Sulfate | acidify, add BaCl₂ | white BaSO₄ | MgSO₄, CaSO₄ |
| Chloride | acidify, add AgNO₃ | white AgCl (dissolves in NH₃) | NaCl, KCl, LiCl, NH₄Cl |
| Ammonium | add NaOH, warm | pungent gas, turns damp red litmus blue | NH₄Cl |
| Carbonate/bicarbonate | add 1M HCl | CO₂ fizzing; bubble through limewater → milky | Na₂CO₃, NaHCO₃, CaCO₃ |

AgCl's solubility in excess ammonia is the detail that separates it from other white precipitates if a question pushes past "white precipitate forms."

### Splitting the three fizzers — worked example

CaCO₃, Na₂CO₃, NaHCO₃ all fizz with HCl, so that test alone never finishes the job. CaCO₃ drops out first: insoluble, brick-red (Ca²⁺) flame, vs. the other two being soluble with a Na⁺ flame. Na₂CO₃ vs. NaHCO₃ then separate on basicity: Na₂CO₃ is strongly basic (~pH 11–12, phenolphthalein deep pink); NaHCO₃ only mildly basic (~pH 8–9, faint pink). Test at room temperature — heating NaHCO₃ decomposes it into Na₂CO₃ and manufactures a false strongly-basic reading.

Worked: unknown conducts (ionic), burns yellow (Na⁺ — narrows to NaCl/NaHCO₃/Na₂CO₃), fizzes with HCl (eliminates NaCl), phenolphthalein gives only faint pink (mildly basic, not strongly) → **NaHCO₃**.

### Stoichiometry

| Element | H | B | C | N | O | Na | Mg | Cl | K | Ca |
|---|---|---|---|---|---|---|---|---|---|---|
| Mass (g/mol) | 1 | 11 | 12 | 14 | 16 | 23 | 24 | 35.5 | 39 | 40 |

Moles = mass ÷ molar mass. Boric acid H₃BO₃: 3(1)+11+3(16) = **62 g/mol** (this number also matters for its mass spectrum, §7). For two equal-mass samples, the *lower* molar mass has the *higher* mole count — a frequently reversed error under time pressure.

### Glucose and sucrose structure

Glucose (C₆H₁₂O₆) is an aldose and a reducing sugar; in solution its open chain ring-closes between C1 and the C5-OH, giving two anomers — α (C1-OH axial, less stable, ~36%) and β (equatorial, more stable, ~64%, despite α usually being the form drawn first in textbooks). Sucrose is non-reducing because both anomeric carbons are tied up in the glycosidic bond.

| Substance | Form | Temperature |
|---|---|---|
| Sucrose | — | decomposes/caramelizes ~160–186°C |
| Glucose | anhydrous | ~146°C (α) / ~150°C (β) |
| Glucose | **monohydrate** ("dextrose," the form most kits actually contain) | ~83°C |

A melting point near 145–150°C means anhydrous glucose; near 83–86°C means the monohydrate — the commercial powder is usually the monohydrate, so don't default to the higher number.

### Thermodynamics and real-world context

Dissolution direction depends on lattice energy vs. hydration enthalpy. **Ammonium chloride dissolving is endothermic** (cold packs); **magnesium sulfate dissolving is exothermic** (small, highly-charged Mg²⁺ releases more hydration energy than the lattice costs). Sodium acetate trihydrate runs a different mechanism entirely: it sits supersaturated below its melting point, and a nucleation trigger (the metal disc in a hand warmer) sets off rapid **exothermic crystallization** — boiling re-dissolves it for reuse. Heat pack (sodium acetate, crystallization) and cold pack (ammonium chloride, dissolution) are opposite mechanisms producing opposite effects — easy to swap under time pressure.

**Solvay process** (industrial Na₂CO₃ from NaCl + CaCO₃): saturate brine with NH₃ → bubble in CO₂ → NaHCO₃ precipitates → heat to Na₂CO₃ + CO₂ + H₂O → CO₂ recycled, NH₃ recovered.

| Substance | Common uses |
|---|---|
| Sodium acetate | hand warmers, food preservative |
| Sodium chloride | table salt, de-icing, preservation |
| Sodium bicarbonate | baking soda, antacid, fire extinguisher |
| Sodium carbonate | glass, detergent, paper |
| Lithium chloride | ceramics flux, moisture absorption, battery precursor |
| Potassium chloride | fertilizer, salt substitute |
| Calcium nitrate | fertilizer, concrete accelerant |
| Calcium sulfate | drywall (gypsum), concrete sealant |
| Calcium carbonate | antacid, chalk, glass, concrete |
| Cornstarch | thickener, paper, baby powder |
| Glucose | IV fluid, sports drinks, brewing |
| Sucrose | table sugar, fermentation |
| Magnesium sulfate | Epsom salt, gardening |
| Boric acid | antiseptic, glaze, insecticide |
| Ammonium chloride | fertilizer, soldering flux, cough medicine |

---

## §2. Polymers — 8 Plastics (≈part of 20%)

PETE, HDPE, non-expanded PS, LDPE, PP, PVC, PMMA, PC. Participants don't burn-test plastics themselves (supervisor may supply burn data); density float/sink is the primary hands-on tool.

### Density and codes

| Plastic | Code | Density (g/cm³) | In water |
|---|---|---|---|
| PP | 5 | 0.90–0.92 | floats |
| LDPE | 4 | 0.91–0.93 | floats |
| HDPE | 2 | 0.94–0.96 | floats |
| PS | 6 | 1.04–1.07 | sinks |
| PMMA | 7 | 1.17–1.20 | sinks |
| PC | 7 | 1.19–1.22 | sinks |
| PVC | 3 | 1.16–1.45 | sinks |
| PETE | 1 | 1.38–1.40 | sinks |

Mnemonic for codes 1–6: "Please Have Very Little Petroleum, Please" (PETE-HDPE-PVC-LDPE-PP-PS). **PVC and PETE overlap near 1.38** — a float/sink test alone won't separate this pair; you need a second cue (supplied burn data, or functional-group ID).

### Polymerization

| Type | Mechanism | Plastics |
|---|---|---|
| Addition (chain-growth) | monomers add across C=C bonds, no byproduct, radical/cation/anion-initiated | PE, PP, PS, PVC, PMMA |
| Condensation (step-growth) | monomers react, losing a small molecule | PETE (loses H₂O); PC (loses phenol via transesterification, or HCl via the phosgene route) |

Free-radical addition: initiation (a radical forms from homolytic cleavage of an initiator) → propagation (radical attacks a C=C, growing the chain) → termination (two radicals combine or disproportionate).

### Tacticity and branching

| PP form | Methyl group arrangement | Properties |
|---|---|---|
| Isotactic | all same side | crystalline, high Tm (~165°C), rigid — commercial grade |
| Syndiotactic | regular alternation | partially crystalline, lower Tm |
| Atactic | random | amorphous, tacky, rubbery — not structurally useful |

HDPE: minimal branching → tight packing → higher density/crystallinity → strong, rigid. LDPE: extensive branching → loose packing → lower density → flexible. LLDPE: linear with short uniform side chains — higher tensile strength than LDPE at similar density.

### Thermoplastic vs. thermoset

All 8 tested plastics are thermoplastics (re-meltable, chains not cross-linked). Thermosets (epoxy, Bakelite, vulcanized rubber) cure into permanent cross-links and can't be re-melted — if a description says "can't be re-melted," it's not one of the 8.

### Mechanical/chemical properties

HDPE: best combination of chemical resistance and tensile strength relative to density (chemical storage, fuel tanks). PC: highest impact strength of the 8 (bulletproof glass, lenses) but only moderate chemical resistance. PS: brittle, the fastest UV-degrader — not the answer to either "most resistant" question.

### Functional groups and solvents

| Plastic | Key group |
|---|---|
| PETE | ester (–COO–) |
| PC | carbonate (–O–CO–O–) |
| PVC | C–Cl bond |
| PMMA | ester (methacrylate side chain) |
| PP/PE/PS | none — pure hydrocarbon |

PMMA dissolves in acetone (like dissolves like — both polar, acetone's carbonyl solvates the ester side chains). PETE resists toluene (toluene nonpolar, PETE's ester linkages polar) — though strong bases can hydrolyze PETE's esters over time. Don't generalize "organic solvent dissolves plastic" — it depends on matching polarity.

### Degradation and burn behavior

PS degrades fastest in UV (aromatic ring absorbs energy, chain scission, yellowing). PC yellows via photo-oxidation.

| Plastic | Burn behavior |
|---|---|
| PVC | hard to ignite, self-extinguishes, green/yellow tint (Cl), acrid HCl smell |
| PE/PP | blue base/yellow tip, drips like wax, paraffin smell |
| PS | yellow sooty flame, black smoke, sweet/floral smell |
| PETE | yellow flame, black smoke, sweet smell, self-extinguishes more readily than PE/PP |

This is a separate burn table from fibers (§3) — don't cross the two.

### Oligomers, plasticizers, and monomers to know

An oligomer = 2–20 repeat units. Degree of polymerization *n* = polymer molar mass ÷ monomer molar mass. A plasticizer (e.g. phthalates in PVC) spaces chains apart, increasing flexibility.

Worked: polystyrene at 6968 g/mol, styrene = 104 g/mol → n = 6968/104 = **67 units**.

| Monomer | Structure | Molar mass | Plastic |
|---|---|---|---|
| Ethylene | H₂C=CH₂ | 28 | HDPE, LDPE |
| Propylene | H₂C=CHCH₃ | 42 | PP |
| Vinyl chloride | H₂C=CHCl | 62.5 | PVC |
| Styrene | H₂C=CH–C₆H₅ | 104 | PS |
| Methyl methacrylate | H₂C=C(CH₃)COOCH₃ | 100 | PMMA |
| Terephthalic acid | HOOC–C₆H₄–COOH | 166 | PETE |
| Ethylene glycol | HOCH₂CH₂OH | 62 | PETE |

PMMA's and PVC's monomers are easy to confuse — both are a single substituent on a vinyl carbon, but PMMA's is a methacrylate ester, PVC's is just chlorine.

---

## §3. Fibers — 7 Types (≈part of 20%)

Cotton, wool, silk, linen, nylon, spandex, polyester. Unlike plastics, burn tests on fibers ARE part of the competition. Acetate and rayon are not in this set.

### Classification and burn ID

| Fiber | Family | Burn | Smell | Residue |
|---|---|---|---|---|
| Cotton, linen | natural cellulose | fast, steady | burning paper | soft gray ash |
| Wool, silk | natural protein | slow, self-extinguishes/sputters | burning hair | black crushable bead |
| Nylon, polyester, spandex | synthetic | melts + burns | chemical/sweet | hard bead |

Learn the three-family split first; individual fiber details second.

### Microscopic morphology

| Fiber | Longitudinal | Cross-section |
|---|---|---|
| Cotton | flattened twisted ribbon (convolutions) | kidney-bean/collapsed C |
| Linen | bamboo-like nodes | polygonal |
| Wool | overlapping scales | oval to round |
| Silk | smooth, triangular filaments | triangular sheen |
| Nylon | smooth, rod-like | round or trilobal |
| Polyester | smooth, uniform | round or hollow |
| Spandex | smooth, often fused | irregular/oval |

Linen vs. cotton: nodes vs. convolutions. Wool vs. silk: scales vs. smooth-triangular sheen.

### Bleach and acid behavior

Bleach (oxidizer) attacks disulfide bonds and peptide bonds in protein fibers — dissolves wool/silk, leaves cellulose largely intact, doesn't touch bleach-resistant synthetics. Concentrated sulfuric acid is more aggressive and dissolves *both* protein and cellulose, so it can't make the same distinction bleach can.

Dye affinity: wool dyes most easily (amino groups, ionic bonding, porous scaled surface). Cotton needs mordants/reactive dyes (cellulose's –OH offers fewer sites). Synthetics need disperse dyes/carriers. Silk fibroin is dominated by glycine/alanine/serine — small residues pack tightly into beta-sheets, the basis of its strength and sheen.

### Fiber-specific processes

**Mercerization** (cotton + concentrated NaOH under tension): swells the fiber, rounds the cross-section, reduces convolutions, increases strength/luster/dye affinity — the shine comes from reduced light scattering off a more uniform surface, not a coating. **Felting** (wool): heat/moisture/agitation interlocks directional cuticle scales irreversibly. **Spandex**: segmented polyurethane-polyurea; soft segments give stretch, hard segments give recovery via physical (not covalent) cross-links.

---

## §4. Hair — 5 Species (≈part of 20%)

Human, bat, cow, squirrel, horse. Requires medulla, cortex, cuticle, root, and scale classification.

### The three layers

| Layer | Description |
|---|---|
| Cuticle | overlapping scales — coronal (crown-like, small rodents/bats), spinous (petal-like, cats/mink), imbricate (flattened, humans/most large mammals) |
| Cortex | bulk of the shaft; melanin granules and keratin — determines color, most mechanical properties |
| Medulla | central core; absent/fragmented/continuous depending on species |
| Root | club-shaped/round = telogen/shed; distorted/torn = forcibly pulled or actively growing |

### Medullary index — the highest-yield single fact in this section

MI = medulla diameter ÷ shaft diameter. **Human: <1/3.** **Animal: ≥1/2.** Pigment distribution: denser toward the medulla in animal hair, more even/cuticle-concentrated in human hair. **Banded (agouti) coloring occurs in animal hair, never human.**

### Species atlas

| Species | Cuticle | Medulla | MI | Tells |
|---|---|---|---|---|
| Human | imbricate, fine | absent/fragmented | <1/3 | even pigment, no banding |
| Bat | coronal | uniserial ladder | ≥1/2 | very fine diameter |
| Cow | imbricate, coarse | lattice/cellular | ≥1/2 | coarse, often banded |
| Horse | imbricate | multiserial ladder | ≥1/2 | coarse, pigment streaking |
| Squirrel | varies, less standardized in available references | varies, less standardized | ≥1/2 | often agouti-banded; identify largely by elimination among the 5 if cuticle/medulla detail is ambiguous on a given image |

A specific lead worth checking if squirrel detail matters for you: Debelica & Thies (2009), *Atlas and Key to the Hair of Terrestrial Texas Mammals*, Texas Tech University Special Publication 55, is cited elsewhere as resolving squirrel-specific cuticle/medulla detail. I haven't pulled the source myself to confirm it actually covers this, so treat it as a lead, not a verified fact, until you check it directly.

### Hair growth cycle

| Phase | % scalp hairs | Duration | Root shape | Note |
|---|---|---|---|---|
| Anagen (growth) | ~85–90% | 2–7 yr | onion-shaped, pigmented, sheathed | pulled anagen hair may carry a follicular tag — usable DNA source |
| Catagen (transition) | ~1–2% | 2–3 wk | transitioning | rarely found at scenes |
| Telogen (resting) | ~10–15% | ~2–4 mo | club-shaped, round, unpigmented | natural shedding, no struggle implied |

Root shape is the actual forensic tell most questions test — don't rely on duration alone. Body hair has a much shorter anagen phase than scalp hair, which is why it never grows as long.

### Protein and pigment chemistry

Keratin: fibrous, alpha-helical, cross-linked by cysteine disulfide bonds. Eumelanin → brown/black; pheomelanin → red/yellow; melanocyte decline with age → gray/white. **Curl pattern depends on both** disulfide cross-link density (more = tighter coil) **and** follicle shape (oval/asymmetric = curlier) — not either factor alone.

---

## §5. Fingerprints (≈part of 15%)

### The 8 patterns and three levels of detail

| Family | Types | Frequency | Deltas |
|---|---|---|---|
| Arch | plain, tented | ~5% | 0 |
| Loop | radial, ulnar (most common) | ~60–65% | 1 |
| Whorl | plain, central pocket, double loop, accidental | ~30–35% | 2+ |

Delta count is the fastest family discriminator: 0 = arch, 1 = loop, 2+ = whorl.

**ACE-V levels**: Level 1 — overall pattern (initial sorting only). Level 2 — minutiae/Galton points (the primary comparison workhorse). Level 3 — pores and fine ridge-edge shape (strengthens or resolves a borderline match).

### Vocabulary

Minutiae the rules actually name: ridge ending, bifurcation, island/dot, enclosure/lake, eye, loop, spur, trifurcation, double bifurcation, delta. (**Core is a pattern-classification landmark — used to read whorls and loops — not one of these ridge-characteristic minutiae; don't list it alongside them on a vocabulary question.**)

Specialized terms: **dactyloscopy** = the science of fingerprint ID. **Dermatoglyphics** = the broader study of all friction-ridge patterns (finger, palm, foot), not fingerprints alone. **Dactylogram** = the print/record itself. **Henry Classification System** (Edward Henry, 1900) = numerical classification by pattern type and ridge-count fractions, the pre-computer filing basis. **IAFIS → NGI**: the FBI's fingerprint database (1999) was succeeded by Next Generation Identification (2014), adding palm prints, iris, facial recognition. There's no single fixed US legal minimum point count — courts apply a sufficiency test on Level 2 detail; if a question references a specific number, it's most likely the historical (and now largely abandoned) 8–12 point European standard.

### Development chemistry

| Method | Mechanism | Best surface |
|---|---|---|
| Iodine fuming | physical adsorption via sublimation (fades over time — no permanent bond) | porous (paper) |
| Ninhydrin | reacts with amino acids → Ruhemann's purple (permanent, true chemical bond) | porous (paper) |
| Cyanoacrylate fuming | vapor polymerizes onto residue | non-porous (plastic, metal, glass) |
| Silver nitrate | reacts with chloride salts → AgCl, darkens in light | porous, but destructive — use last |
| Powder dusting | physically adheres to oils/moisture | smooth, non-porous |

Silver nitrate reacts with chloride, not oils or amino acids like the others, and it's destructive — sequence it last.

### Skin anatomy, formation, permanence

| Layer | Relevance |
|---|---|
| Epidermis | the visible ridge pattern's surface expression |
| Papillary dermis | dermal papillae template the ridge pattern (often cited as where pattern is set) |
| Reticular dermis | deeper support layer; scarring here can permanently alter the pattern |
| Basal layer | deepest epidermal layer, sometimes also cited as where pattern is fixed — sources vary on papillary vs. basal framing, so know both |

Friction ridges begin forming weeks 10–13 gestation, pattern type set by week 15, fixed permanently by weeks 24–26 — unique even between identical twins. Three scene types: **patent** (visible, e.g. in blood), **latent** (invisible, needs development), **plastic** (3D impression in soft material — see §6 for collection on unusual surfaces).

### Documentation and absence of prints

Order: locate → **photograph in place with a scale, before any lifting** (lifting can damage the original — the photo is the only permanent record if it does) → document location/surface/orientation/case info → develop further if needed → lift → label, chain of custody.

Conditions causing absent prints: adermatoglyphia (SMARCAD1 mutations, genetic, otherwise normal skin); Naegeli-Franceschetti-Jadassohn syndrome (KRT14 mutations, with pigmentation/sweating/dental abnormalities); acquired causes (severe eczema, scarring, some chemotherapy drugs).

### Pioneers

Bertillon (anthropometry — body measurements, pre-fingerprint ID standard). Galton ("Galton points" = Level 2 minutiae; established permanence/individuality). Marsh (1836 arsenic test, forensic toxicology landmark). Orfila (early systematic poison detection). Locard (Locard's Exchange Principle — "every contact leaves a trace" — and an early dedicated forensic lab in Lyon).

---

## §6. Crime-Scene Physical Evidence (≈15%, continued in §7)

### Decomposition and time-of-death

**Autolysis** — the body's own lysosomal enzymes breaking down tissue from within — is the first stage, before bloat, before any external organism.

| Stage | Timing | Features |
|---|---|---|
| Fresh (incl. autolysis) | 0–~2-3 days | no visible decay |
| Bloat | ~2-3 days on | anaerobic gas, abdominal swelling |
| Active decay | days–~2 wk | rapid tissue loss, odor, purge fluids |
| Advanced decay | ~2 wk–1 mo | most soft tissue gone |
| Skeletonization | 1 mo+ | bone, dried tissue |

**Rigor mortis**: ATP depletion locks actin-myosin; onset ~2–6h, full ~12h, resolves ~24–36h as decomposition breaks down muscle protein; heat speeds both onset and resolution, cold slows both. **Livor mortis**: gravitational blood settling, lowest body areas; begins ~20min–3h, fixed ~8–12h. **Fixed lividity inconsistent with the body's found position indicates the body was moved.** **Algor mortis**: cooling toward ambient, roughly 1.5°F/hr for the first several hours, reliable mainly within ~24h.

### Entomology and PMI

| Family | Common name | Arrival | Role |
|---|---|---|---|
| Calliphoridae | blow flies | minutes–hours | first colonizers |
| Sarcophagidae | flesh flies | hours–~1 day | early colonizers |
| Piophilidae | cheese skippers | ~weeks | favor drier, advanced decay |
| Silphidae | carrion beetles | days–weeks | predators/scavengers |
| Dermestidae | skin/hide beetles | weeks–months | late-stage, keratin feeders |

Instar = number of slits in the posterior spiracle (1/2/3 slits = 1st/2nd/3rd instar).

**PMI via thermal summation**: time to development = K ÷ (T_ambient − T_base). For *Lucilia sericata*, one well-cited study (Wang et al. 2020, *J. Med. Entomol.* 57(5)) reports **T_base = 9.19°C, K = 6023.2 degree-hours** (egg→adult) — I checked this specific citation directly and it's accurate. **Caveat worth knowing**: this constant is specific to that study's population. Other published work on the same species reports a different base temperature (~9.07°C, with a different thermal constant in degree-days rather than degree-hours), and the broader literature gives a developmental-minimum range of roughly 7.5–10°C depending on population. If a problem supplies its own base-temperature data, use what's given rather than a memorized number — and if you do memorize one constant, know it's "a" published value, not "the" universal one.

Worked, using Wang et al.'s values: at 25°C, 6023.2 ÷ (25−9.19) = 6023.2/15.81 ≈ 381 hours ≈ **15.9 days**. At 22°C: 6023.2 ÷ 12.81 ≈ 470 hours ≈ **19.6 days**. This gives **minimum PMI** — time since colonization, not exact time of death. Eggs alone (no larvae) present suggests death within roughly the last 24 hours, given immediate fly access.

### Blood

| Type | Antigens | Antibodies | Frequency |
|---|---|---|---|
| A | A | anti-B | ~40% |
| B | B | anti-A | ~11% |
| AB | A&B | none | ~4% — universal recipient |
| O | none | anti-A & anti-B | ~45% — universal donor |

**Kastle-Meyer** (phenolphthalein): hemoglobin acts as a peroxidase, oxidizing colorless reduced phenolphthalein to pink with H₂O₂ — presumptive. **Luminol**: chemiluminescence, finds trace/cleaned blood. **Takayama/Teichmann**: confirmatory crystal tests. **Precipitin test**: species of origin, via anti-human antiserum. Mammalian RBCs lack a nucleus (biconcave disc); avian/reptilian/amphibian RBCs are nucleated and oval.

Hemoglobin = α₂β₂ tetramer, each subunit binding one heme (Fe²⁺, reversibly binds one O₂) — the same iron chemistry underlying the Kastle-Meyer peroxidase reaction.

ABO inheritance: codominant I^A/I^B, recessive i. A(AO)×B(BO) → can produce type O (25% chance, AO×BO→OO). A(AA)×B(BB) → cannot, every child gets at least one A or B allele. **ABO type is class evidence, not individualizing** — narrows to a population fraction, doesn't identify a person. A genetic *exclusion* is exact even though *inclusion* is only probabilistic.

### Glass analysis

| Glass type | RI |
|---|---|
| Soda-lime (window/container) | ~1.51–1.52 |
| Borosilicate (Pyrex) | ~1.47–1.48 |
| Lead/crystal | ~1.5–1.7 |

**Becke line**: raising the objective moves the bright line toward the higher-RI medium; when glass RI matches the surrounding oil exactly, the fragment nearly vanishes. Pure glycerin's RI sits tightly around 1.473–1.475 — close to borosilicate (so it can hide a borosilicate fragment) but a real 0.04–0.05 below soda-lime, so it won't hide the more common forensic glass type.

**Snell's law**: n₁sinθ₁ = n₂sinθ₂; speed in a medium = c÷n; total internal reflection only going from high-n to low-n, at θ ≥ critical angle θc = arcsin(n₂/n₁).

**3R fracture rule**: radial cracks form a right angle on the *reverse* (tension) side and form first; concentric cracks form their right angle on the *impact* side and form second. A crack that stops at a pre-existing crack came later. Entry hole is cleaner/smaller; exit is wider (cone/spalling effect). Heat fractures are wave-shaped, with no defined impact point and no radial/concentric crack pattern — that absence of pattern, not any single marking, is the tell that distinguishes thermal from impact damage. (Some sources also cite an absence of Wallner lines here; I couldn't confirm that specific detail with confidence, so don't lean on it.)

### Blood spatter

θ = arcsin(width÷length). Tail/point of a stain shows direction of travel. Convergence (2D): extend long axes backward to their intersection. Height (3D): H = d·tanθ. Worked: width=6, length=12 → sinθ=0.5 → θ=30°; a round stain (width≈length) implies θ≈90°, near-vertical fall.

| Category | Velocity | Droplet size | Mechanism |
|---|---|---|---|
| Low | ≤~5 ft/s | ≥~4mm | dripping, pooling |
| Medium | ~5–25 ft/s | ~1–4mm | blunt force, stabbing |
| High | ≥~100 ft/s | <1mm | gunshot |

This velocity terminology is contested since a 2009 NAS report (mechanism-based description is now often preferred), but it's still what's tested here. Satellite spatter = small droplets radiating from a larger drop's impact. Wipe = an object moves through existing wet blood; swipe = a bloody object contacts a clean surface. Easy to swap under time pressure.

### Firearms and ballistics

| Type | Examples | Determines |
|---|---|---|
| Class | caliber, lands/grooves count, twist direction, land width/depth | group (make/model) |
| Individual | striations — manufacturing/wear marks unique to one barrel | one specific firearm |

Caliber: mm ÷ 25.4 = inches (9.65mm ≈ 0.38 cal). Gauge: number of bore-diameter lead balls totaling 1 lb — smaller gauge number means larger bore. Polygonal rifling (smoothly twisted, no distinct lands/grooves) produces fainter striations, harder barrel-to-bullet matching.

GSR primer-residue triad: lead, barium, antimony (Pb/Ba/Sb), detected by SEM-EDX. Sodium rhodizonate is a presumptive spot test specifically for lead (pink/red), used alongside SEM-EDX to help estimate firing distance. The Gonzalez/paraffin test (heated wax cast + diphenylamine, blue/purple for nitrates) is now abandoned for frequent false positives from fertilizers; don't confuse its blue-purple color with an actual Prussian Blue reaction (§8) — different chemistries, similar color, easy to lose a point on a close-reading question. Serial-number recovery: metal beneath a filed stamp stays mechanically stressed, so acid etching (Fry's reagent on steel) dissolves it at a different rate than surrounding metal, temporarily revealing the original number.

### Pollen, soil, tracks

Pollen/palynology: durable, species-specific, places someone in a region as class-level association. Morphology: monosulcate (one groove), tricolporate (three pores), round/elliptical, spiky/smooth.

| Soil type | Particle size | Impression quality |
|---|---|---|
| Clay | <0.002mm | best — holds shape |
| Silt | 0.002–0.05mm | good |
| Sand | 0.05–2mm | worst — falls apart |

Density-gradient columns separate soil by density layer for comparison; color (Munsell), texture, mineralogy, and humus content are class evidence. Tracks/footwear: class characteristics (tread pattern, pre-wear size) narrow to make/model; individual characteristics (wear, cuts, embedded debris) link to one shoe.

### Evidence on unusual surfaces

A print in wet paint is a **plastic** print (3D impression) — photograph extensively with a scale and oblique/raking light to capture relief, then cast; don't apply dry-surface chemical development reagents, which can smear or destroy it. To sample ink from a document non-destructively, punch a tiny plug from within a letter's stroke and run TLC against reference inks (§7), or use IR/UV photography/reflectance spectroscopy.

---

## §7. DNA, Chromatography, and Mass Spectrometry (≈30% combined)

### DNA structure and replication

| Feature | Detail |
|---|---|
| Purines | A, G (two rings) |
| Pyrimidines | C, T (U in RNA) |
| Chargaff | A:T ≈1:1, G:C ≈1:1; A–T 2 H-bonds, G–C 3 H-bonds |
| Backbone | alternating deoxyribose-phosphate, negatively charged — drives migration toward the anode in electrophoresis |

Natural replication enzyme order: helicase (unwinds) → topoisomerase (relieves strain ahead of helicase) → primase (RNA primer) → DNA polymerase (5′→3′ synthesis) → ligase (seals nicks, acts last).

### PCR

| Step | Temp | What happens |
|---|---|---|
| Denaturation | ~94–98°C | H-bonds break, strands separate |
| Annealing | ~50–65°C | primers bind |
| Extension | ~72°C | Taq synthesizes 5′→3′ |

Molecules after *n* cycles ≈ 2ⁿ. Ingredients: template, two primers (~18–25 nt), Taq polymerase, four dNTPs, MgCl₂ cofactor, buffer. PCR substitutes for two of the five natural replication steps — heat replaces helicase, synthetic primers replace primase — it doesn't use helicase at all, a common wrong answer.

### Restriction enzymes, RFLP, CODIS, STR

Restriction endonucleases cut at specific 4–8 bp recognition sequences, producing fragments separated by size on a gel — typically run on PCR-amplified DNA (PCR first, restriction enzymes second; sequential steps, not alternatives).

**CODIS**: Local (LDIS) → State (SDIS) → National (NDIS), matches flow upward; 20 core STR loci as of 2017 (expanded from the original 13).

Reading an electropherogram: one peak per locus = homozygous; two peaks = heterozygous; the allele number is the repeat count. A match requires identical calls at *every* locus — one mismatch anywhere is an exclusion, even if every other locus is "consistent."

| Locus | Scene | Suspect A | Suspect B | Result |
|---|---|---|---|---|
| D3S1358 | 15,17 | 15,17 | 14,16 | A matches; B excluded |
| vWA | 16,19 | 16,19 | 16,19 | both consistent here only |
| D16S539 | 11,12 | 11,12 | 11,13 | A matches; B excluded |

"Consistent at this locus" ≠ "matches overall" — B is still fully excluded once any single locus mismatches.

### History and collection

Alec Jeffreys developed DNA fingerprinting (UK, 1984; first criminal use, the Pitchfork case, 1986–87). **First US criminal conviction using DNA evidence: 1987, Tommie Lee Andrews, Florida** — easy to misround to 1988, since they're adjacent years. Buccal swabs collect nucleated cheek epithelial cells for extraction.

mtDNA is maternally inherited (sperm mitochondria are destroyed post-fertilization) — useful for tracing maternal lineage across generations, but it's **class evidence**: every maternal-line relative shares an identical sequence.

### Sequencing technologies

| Method | Principle | Read length | Use |
|---|---|---|---|
| Sanger | chain-termination, ddNTPs | ~1000bp | gold standard for per-base accuracy, capillary STR typing |
| Illumina (NGS) | sequencing-by-synthesis, massively parallel | ~150–300bp | high-throughput panels |
| Nanopore | single-molecule, ionic current | 10kb–1Mb | rapid field deployment, degraded DNA |

### Chromatography

Rf = (origin→spot) ÷ (origin→solvent front), always 0–1.

| Type | Stationary phase | Mechanism | Example |
|---|---|---|---|
| Adsorption | solid (silica, alumina) | surface adsorption | TLC |
| Partition | liquid in a solid support | partitions between phases | paper chromatography, HPLC |
| Reverse-phase HPLC | nonpolar stationary, polar mobile | nonpolar analytes retained longer | pharma analysis |

Worked: solvent front at 6.0cm, spot at 1.8cm → Rf=0.30; spot at 4.8cm → Rf=0.80. A suspect ink matching every spot on a scene sample → consistent. A *partial* match (only some spots shared) → **inconclusive**, not a forced match or exclusion — a real, distinct third answer.

Bench rules: spotting line in pencil (ink would itself migrate); small concentrated spots, not one wet blob; keep paper off chamber walls; cover the chamber to saturate the atmosphere. TLC: pull the plate before the solvent front reaches the top edge and mark the front immediately (it evaporates within seconds); UV visualization only works on fluorescent-indicator (F254) plates.

### Mass spectrometry

| Stage | Name | What happens |
|---|---|---|
| 1 | Ionization | sample ionized |
| 2 | Acceleration | ions gain KE proportional to charge |
| 3 | Deflection/separation | field separates by m/z |
| 4 | Detection | spectrum recorded |

Molecular ion (M⁺) = molecular mass. Base peak = tallest peak, most stable fragment. Isotope patterns: 1 Cl → M:M+2 ≈ 3:1; 1 Br → 1:1; 2 Cl → 9:6:1; 2 Br → 1:2:1. M+1% ÷ 1.1 ≈ number of carbons (¹³C natural abundance). Nitrogen rule: odd M⁺ → odd number of N atoms. Common losses: −15 (CH₃), −17 (OH), −18 (H₂O), −29 (CHO/C₂H₅), −31 (OCH₃), −45 (COOH).

Worked set: M⁺=64/M+2=66 (3:1) → one Cl, chloroethane. M⁺=108/M+2=110 (1:1) → one Br, bromoethane. M⁺=156/M+2=158 (1:1), base peak 77 → bromobenzene, 156−77=79=Br lost, 77=phenyl cation. M⁺=59 odd → odd N count, trimethylamine. M⁺=62, H₃BO₃ → boric acid (matches §1's molar mass). M⁺=44 → propane or CO₂, same mass — needs the fragmentation pattern to tell apart.

**Presumptive vs. confirmatory**: color-change spot tests (Kastle-Meyer, Marquis, Duquenois-Levine) are quick but can false-positive; MS, GC-MS, and DNA/STR profiling are confirmatory, generally required before evidence counts as conclusively identified. Electron ionization works best under roughly 600–1000 amu (a commonly-cited, approximate threshold, not a hard constant) — heavier or polar molecules need softer ionization (ESI, MALDI).

---

## §8. Advanced Chemistry

Tested mainly at the more technical invitationals, not guaranteed at every tryout level — but it's real chemistry connected to the qualitative-analysis and blood sections above, not invented material.

**Molecular orbital theory**: bond order = (bonding e⁻ − antibonding e⁻)/2; diamagnetic = all paired, paramagnetic = unpaired present. Worked: CN⁻ (14 electrons, isoelectronic with N₂) fills to bond order 3 (triple bond), all paired → diamagnetic.

**Coordination chemistry**: oxidation state = charge if every bond were fully ionic. Worked: [Fe(CN)₆]³⁻, CN⁻ contributes −1 ×6 = −6, complex charge −3, so Fe = +3; ground-state Fe is [Ar]3d⁶4s², Fe³⁺ removes the two 4s electrons plus one d electron → 5 d-electrons. Prussian Blue (Fe₄[Fe(CN)₆]₃) detects iron in blood (heme) — I've now checked its use as a historical GSR test twice and found no support either time; a 2023 chronological review of GSR color/spot-test history lists the dermal nitrate/paraffin test, Walker's test, the Marshall and Tiwari test, the modified Griess test, the Harrison and Gilroy test, the dithiooxamide test, and sodium rhodizonate, with no mention of Prussian Blue anywhere in that lineage. If you see the claim elsewhere (including in your own materials), I'd treat it as a likely mix-up with the diphenylamine-based Gonzalez/paraffin test, which also lands on blue/purple via unrelated chemistry.

**Crystal structures**: cubic (NaCl, diamond, all axes equal/90°), orthorhombic (sulfur, aragonite), trigonal (calcite, quartz), hexagonal (ice, graphite). NaCl: face-centered cubic, coordination number 6. CaCO₃'s common natural form, calcite, is trigonal — aragonite (orthorhombic) is a different polymorph of the same compound; default to calcite if a question just says "calcium carbonate."

**Boric acid as a Lewis acid**: doesn't donate a proton directly — accepts OH⁻ from water instead: B(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺, pKa ≈ 9.2. The equilibrium favors the left (weak acid); solution pH is only mildly acidic, ~5–6.

---

## §9. The Analysis Write-Up — 30% and the Tiebreaker

The rules require explaining which evidence implicates which suspect *and* explicitly why every other suspect was eliminated — the second half is the actual tiebreaker.

### Class vs. individual evidence

| Individualizing (one source) | Class only (a group) |
|---|---|
| Fingerprint minutiae match | ABO blood type |
| DNA/STR profile | fiber type |
| Bullet striation match | hair microscopy alone (no DNA) |
| Physical fracture (jigsaw) fit | glass RI, soil type, polymer type, pollen type, pre-wear tread pattern |

Overclaiming a class item as individualizing is the single biggest point-loser here, and it costs the tiebreaker specifically. Treat every class-evidence claim as "narrows to a group," no exceptions for how compelling it feels.

### Forensic value and context

A print's value depends on more than quality — location and access matter. A print on a murder weapon outweighs the same print on a counter the suspect could innocently have touched. Weigh: location, innocent-access plausibility, minutiae count, and whether the print can be excluded on innocent grounds.

### Structure (CER) and worked cases

**Claim** (name the culprit) → **Evidence** (each item, test, result, suspect linked) → **Reasoning** (why it links, why every other suspect is excluded by name) → address contradictions openly.

Worked: glass with RI 1.52 in Suspect 2's cuff; a worn-heel shoeprint matches Suspect 3; entry-wound blood types AB; suspects type O/AB/A. **Culprit: Suspect 2** — the entry-wound blood is AB, which only Suspect 2 matches; that excludes Suspect 1 (O) and Suspect 3 (A) outright on simple type mismatch, not because AB happens to be rare (~4% of the population) — rarity makes the match more *compelling*, but the exclusion itself is exact either way. The cuff glass is class evidence corroborating presence. But the worn-heel print **independently individualizes Suspect 3 as also present** — surfacing that second finding, rather than burying it once the main culprit is identified, is the actual point of a case like this.

### Self-check before submitting

Led with the conclusion? Tagged each item class vs. individual? Excluded every other suspect by name with cited evidence? Refused to let class evidence masquerade as individual? Surfaced contradictions rather than ignored them? Addressed motive if the scenario supplied one?

---

## §10. Image-Based Practice (no text substitute for these)

Hair micrographs (cuticle/medulla/species ID) — FBI *Microscopy of Hair Parts I–II* (Deedrick & Koch, 2004), scioly.org Test Exchange. Fingerprint patterns and delta counts — NIST databases, Test Exchange. Pollen morphology — PalDat, The Pollen Library. STR electropherograms and bullet striations — NIJ STR course materials, NIST bullet image databases. Glucose/monomer structures to sketch from memory — covered in §1 and §2 above; practice drawing them by hand, since the actual test may require it.

---

*A note on sourcing: the prior version of this guide attributed roughly a hundred specific facts to eleven named invitational tests. I verified exactly one of those claims directly during this rewrite — the PMI thermal-summation constants in §6, which checked out exactly against the cited paper. I have no way to confirm the rest. Treat any fact you see attributed to a specific past test as a lead worth checking against the actual scioly.org Test Exchange archive, not as settled provenance.*
