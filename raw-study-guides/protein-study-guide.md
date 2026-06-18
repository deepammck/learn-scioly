# Protein Modeling (Division C) — Tryout Study Guide v3 (Supplemented)

**Target: Tryout written exam, general topics only.** This guide excludes anything tied to a specific year's modeled protein (no CRISPR/Cas9 mechanism details, no named PDB structures, no pathway-specific biology). It covers chemistry, structural biology, and process knowledge that recurs across years regardless of which protein is assigned.

**What changed from v1.** The original guide (sections 1-6, 8-10 below) was strong on folding chemistry and largely unchanged here. Six gaps were identified by cross-checking against the actual exam-topic language used across eight years of rules documents (2016, 2019, 2020, 2025, 2026):
- CRISPR-as-adaptive-immune-system was named as a *general mechanism category* in the 2020 rules, not just a protein-specific detail — added as Section 7.
- Other DNA-binding motifs beyond zinc fingers (helix-turn-helix, leucine zipper, helix-loop-helix) — added as Section 11, since zinc fingers were arbitrarily privileged in v1.
- PDB file literacy and Jmol/JSmol display modes — added as Section 12, since the tool is named in every single ruleset.
- Catalytic mechanism vocabulary (general acid/base catalysis, nucleophile/electrophile, transition state) — added as Section 13.
- Post-translational modification and protein maturation — added as Section 14, flagged as lower-confidence.
- Protein-protein interaction interfaces (antibody-antigen as generic example) — added as Section 15, flagged as lower-confidence.

Confidence levels are marked per section. Sections 1-6 are high-confidence (directly and repeatedly named in rules language). Sections 7, 11, 12, 13 are medium-confidence (named in at least one year, or load-bearing for tool literacy). Sections 14-15 are lower-confidence (plausible by event pattern, not directly evidenced in the rules text you provided) — study them, but don't let them crowd out 1-6.

**How to use this guide.** There's no calculation to drill; the skill being tested is conceptual reasoning — given a structural feature or a perturbation, explain *why* it has the effect it has. Read the worked examples, then try to reconstruct the reasoning yourself before checking back.

**A note on what wins this event's written section.** Multiple-choice tends to test vocabulary precision and the ability to identify which force/level/mechanism is being described. Short-answer tends to ask you to explain *why*. Memorizing definitions gets you the multiple choice; chaining "side chain property → interaction → structural consequence → functional consequence" gets you the short answer.

-----

## TABLE OF CONTENTS

1. Chemical Bonds and Forces in Protein Folding
2. Thermodynamics of Folding — including ΔG/ΔH/ΔS Primer *(expanded)*
3. Amino Acid Chemistry
4. Levels of Protein Structure
5. Structure-Function Relationships
6. Nucleic Acid Structure and Stability (comparison case)
7. CRISPR as a General Mechanism Category
8. Zinc Finger Motifs (flagged, medium confidence on testability)
9. Quick-Reference Sheet
10. Common Confusions and Traps
11. DNA-Binding Motifs Beyond Zinc Fingers
12. Catalytic Mechanism Vocabulary
13. Reading PDB Files and Using Jmol/JSmol
14. Post-Translational Modification (lower confidence)
15. Protein-Protein Interaction Interfaces (lower confidence)
16. pH and pKa Numerical Reasoning *(new)*
17. Lipids and Carbohydrates — Biomolecule Categories Beyond Protein/Nucleic Acid *(new)*
18. Fibrous vs. Globular Proteins — A Comparative Case Study *(new)*
19. Glossary / Index *(new)*
20. Worked Reasoning Examples

-----

# 1. CHEMICAL BONDS AND FORCES IN PROTEIN FOLDING

This is the single most-repeated phrase across every year's rules document: "the principles of chemistry that drive protein folding." Treat this section as the foundation everything else sits on.

## 1.1 The Peptide Bond (Primary Structure's Backbone)

The peptide bond is a covalent amide bond formed between the carboxyl group of one amino acid and the amino group of the next, with loss of a water molecule (condensation/dehydration reaction). This is what links amino acids into the polypeptide chain — it is *not* one of the folding forces, but it's worth being precise about it because exam questions sometimes test whether you can distinguish "what holds the chain together" (peptide bonds, covalent, primary structure) from "what makes the chain fold" (the non-covalent forces below, secondary/tertiary structure).

**Key property: the peptide bond is planar and has partial double-bond character** due to resonance between the C=O and the C-N. This restricts rotation around that bond (you can rotate around the bonds on either side of it — the phi/psi angles — but not the peptide bond itself). This planarity is *why* secondary structures like the alpha helix and beta sheet have the regular, repeating geometry they do — the backbone can't twist freely at every point, so it adopts repeating patterns that satisfy the geometric constraint while maximizing hydrogen bonding.

## 1.2 The Non-Covalent Forces (the actual "folding" forces)

These five are the core vocabulary set. For each, know: what it is, what side chains/atoms participate, how strong/directional it is, and what it stabilizes.

**Hydrogen bonds.** Form between a hydrogen attached to an electronegative atom (N or O) and another electronegative atom with a lone pair. In proteins, occur (a) in the backbone — between the carbonyl oxygen of one residue and the amide hydrogen of another, which is what defines alpha helices and beta sheets — and (b) between polar/charged side chains in tertiary structure. Individually weak (~1-5 kcal/mol) but highly directional (work best when geometrically aligned) and numerous, so their cumulative effect is large. Disrupted by heat (increased molecular motion breaks the geometric alignment) and by competing solvent (water can out-compete intramolecular H-bonds, which is part of why denaturants work).

**Ionic bonds / electrostatic interactions (salt bridges).** Form between oppositely charged side chains — e.g., a negatively charged carboxylate (Asp, Glu) and a positively charged amino/guanidinium group (Lys, Arg, His). Stronger than a single hydrogen bond in vacuum, but in water the charges are heavily shielded/solvated, so in practice salt bridges contribute a more modest, context-dependent amount of stability — strongest when buried away from solvent. Sensitive to pH (protonation state of acidic/basic side chains changes with pH, which is why pH extremes denature proteins — at the wrong pH, residues that should be charged become neutral or vice versa, and salt bridges break).

**Van der Waals forces.** Weak, short-range attractions between all atoms in close proximity, arising from transient fluctuations in electron distribution (induced dipoles). Individually almost negligible, but in a tightly packed protein core with thousands of atom-atom contacts, the cumulative van der Waals contribution to stability is substantial. This is part of why a good hydrophobic core isn't just "nonpolar residues avoiding water" — it's also about close, complementary packing that maximizes van der Waals contacts (a poorly packed core, even if hydrophobic, is less stable).

**Hydrophobic interactions (hydrophobic effect).** Not technically a direct attraction between nonpolar groups — it's an entropic effect driven by water. Water forms an ordered hydrogen-bonded cage (clathrate-like) around an exposed nonpolar surface; when nonpolar groups cluster together instead, less total nonpolar surface is exposed to water, so less ordered water is needed, and the *released* water gains entropy. The net effect: clustering nonpolar side chains together is thermodynamically favorable because it increases the entropy of the surrounding water, even though it may decrease the conformational entropy of the protein chain itself. This is widely considered the dominant force driving the initial collapse of a polypeptide into a compact globular shape (the "hydrophobic collapse" model of folding) — secondary structure and the fine details of packing come after this initial collapse.

**Disulfide bonds.** A true covalent bond (S-S) formed by oxidation of two cysteine thiol (-SH) side chains. Distinct from the other four because it's covalent — much stronger and not disrupted by the same mild denaturing conditions (heat, pH) that disrupt non-covalent folding forces. Disulfide bonds form most often in extracellular/secreted proteins (the cytoplasm tends to be a reducing environment that keeps cysteines as free thiols; the extracellular space is oxidizing). They lock together regions that may be far apart in sequence, stabilizing tertiary or quaternary structure. Reducing agents (e.g., DTT, beta-mercaptoethanol) break disulfides specifically without touching other bonds — a classic experimental tool for probing whether a protein's stability depends on disulfides.

## 1.3 Relative Strength and Hierarchy — a way to organize the five

If asked to rank or compare: covalent bonds (peptide, disulfide) >> ionic/electrostatic ≈ a strong, well-positioned hydrogen bond > van der Waals (individually) ≈ weak hydrogen bonds. But strength-per-bond is the wrong way to think about overall stability — the hydrophobic effect and the sheer *number* of van der Waals contacts and hydrogen bonds usually matter more in aggregate than any single strong bond. A protein's stability is best understood as the sum of many small, mostly non-covalent contributions, occasionally locked in place by a few covalent disulfide bonds.

-----

# 2. THERMODYNAMICS OF FOLDING

## 2.0 Primer: ΔG, ΔH, ΔS Defined *(new — added because the rest of this section assumes you already know these terms)*

If you haven't covered Gibbs free energy in chemistry class yet, the entropy/enthalpy reasoning in 2.1 won't fully land without this primer first. If you already have this cold from AP Chem or equivalent, skip to 2.1.

**Gibbs free energy (G)** is a single quantity that combines a system's enthalpy and entropy to predict whether a process will happen on its own (spontaneously) under constant temperature and pressure — which describes a cell's environment well enough that this framework applies directly to protein folding.

**The equation:** ΔG = ΔH − TΔS, where ΔG is the change in free energy, ΔH is the change in enthalpy, T is absolute temperature (Kelvin), and ΔS is the change in entropy. Unless otherwise labeled, these terms refer to the *system* (e.g., the protein) — if you mean the surroundings (e.g., the water around it) or the universe as a whole, that needs to be stated explicitly (ΔS(surroundings), ΔS(universe)), which is exactly the distinction Section 2.1's "entropy trap" below depends on.

**Enthalpy (ΔH):** roughly, the heat content change of the system — in a folding context, driven mainly by the formation (favorable, negative ΔH) or breaking (unfavorable, positive ΔH) of bonds and non-covalent interactions like hydrogen bonds and van der Waals contacts. Forming more/better hydrogen bonds and van der Waals contacts during folding makes ΔH more negative (more favorable).

**Entropy (ΔS):** roughly, a measure of disorder or the number of accessible microscopic arrangements. Higher entropy (more disorder, more possible arrangements) is favored by nature's tendency toward dispersal. Critically, in a folding reaction there are at least two separate entropy terms in play (protein chain entropy and solvent water entropy — see 2.1), and the *sign convention is opposite for the two*: an unfolded chain has high entropy (many possible shapes; folding decreases this), while ordered water around an exposed hydrophobic patch has low entropy (the water is constrained; folding's hydrophobic collapse releases this water and increases its entropy).

**Spontaneity rule:** ΔG < 0 means the process is spontaneous as written (will proceed without continuous energy input) — this is the case for protein folding under physiological conditions, which is why proteins fold on their own once synthesized, without requiring an external energy source for the folding step itself (distinct from the energy required to synthesize the polypeptide in the first place, which is a separate, earlier process). ΔG > 0 means non-spontaneous in that direction (the reverse direction would be spontaneous instead). ΔG = 0 means the system is at equilibrium (folded and unfolded states are equally favorable — this is essentially what's happening at a protein's melting temperature, the temperature at which folded and unfolded populations are equal).

**Why both ΔH and ΔS matter together, not separately:** a process can have an unfavorable entropy change (ΔS < 0, like folding's loss of chain conformational freedom) and still be spontaneous overall, as long as the enthalpy term and/or other entropy contributions (like the solvent entropy gain from the hydrophobic effect) are favorable enough to outweigh it once you do the full ΔH − TΔS calculation. This is precisely the reasoning Section 2.1 below walks through for folding specifically — read this primer first if any part of that reasoning was unclear before.

## 2.1 Folding Is Spontaneous Under Physiological Conditions

The native (folded) state of a protein sits at a free energy minimum relative to the unfolded state, under the cell's normal conditions — meaning ΔG of folding is negative. This is a *net* statement: it doesn't mean every individual contribution favors folding. Folding *decreases* the conformational entropy of the polypeptide chain itself (an unfolded chain can adopt vastly more conformations than the single folded structure — this is entropically unfavorable, ΔS(chain) < 0). What makes folding still spontaneous overall is that the favorable enthalpy (from hydrogen bonds, van der Waals packing, ionic interactions) and especially the *favorable entropy change in the surrounding water* (from the hydrophobic effect, releasing ordered water) outweigh the unfavorable loss of chain conformational entropy.

**This is a frequently tested conceptual trap:** "folding decreases entropy, so why is it spontaneous?" The answer requires separating the entropy of the *protein chain* (decreases) from the entropy of the *solvent water* (increases, and increases by more). Always specify which entropy you mean.

## 2.2 The Folding Funnel / Native State as Energy Minimum

Modern folding theory describes the energy landscape as a funnel: many possible unfolded conformations at the top (high energy, high conformational entropy), narrowing down toward the single native fold at the bottom (low energy, low entropy, but globally most stable). Proteins don't sample every possible conformation randomly (that would take longer than the age of the universe for any real protein — this is "Levinthal's paradox," worth knowing by name) — instead, the funnel shape means many partial folding pathways converge toward the same native structure, allowing folding to happen on a biologically reasonable timescale (microseconds to seconds).

## 2.3 Denaturation

Denaturation = loss of the native folded structure, without breaking the primary sequence (peptide bonds stay intact unless you specifically use conditions that hydrolyze them, which denaturation conditions don't). Denaturation disrupts the *non-covalent* forces (and sometimes disulfides, if a reducing agent is also present) holding secondary/tertiary/quaternary structure together.

Common denaturing agents/conditions and *why* they work (this "why" is exam-relevant):
- **Heat:** increases molecular motion/kinetic energy, which disrupts the precise geometric alignment hydrogen bonds need and overcomes the weak van der Waals/hydrophobic interactions.
- **pH extremes:** change the protonation state of acidic/basic side chains, disrupting salt bridges and altering the charge distribution that the folded structure depends on.
- **Chaotropic agents (urea, guanidinium):** disrupt the hydrogen-bonding network of water itself and directly compete for H-bonds with the protein, weakening the hydrophobic effect and backbone/side-chain hydrogen bonds.
- **Detergents (e.g., SDS):** amphipathic molecules that insert into and disrupt hydrophobic cores by providing an alternative nonpolar environment.
- **Reducing agents (DTT, BME):** specifically break disulfide bonds, leaving non-covalent structure untouched unless combined with another denaturant.

Denaturation is sometimes reversible (renaturation) if conditions are restored gently and the protein can refold correctly — this was the basis of classic experiments showing that the amino acid sequence alone contains the information needed to specify the fold (i.e., folding doesn't require an external template — relevant if a question asks "what determines a protein's 3D structure," the core answer is "the primary sequence, via the chemistry of the side chains and backbone").

-----

# 3. AMINO ACID CHEMISTRY

## 3.1 General Structure

Every standard amino acid shares: a central (alpha) carbon, an amino group (-NH2), a carboxyl group (-COOH), a hydrogen, and a variable side chain (R group). At physiological pH, the amino and carboxyl groups are typically ionized (-NH3+ and -COO-), making free amino acids zwitterions. It's the R group that gives each amino acid its distinct chemistry and is almost entirely what exam questions about side chains are probing.

## 3.2 Classification by Side Chain Chemistry

You should be able to sort any of the 20 standard amino acids into these categories and explain the structural consequence of that category.

**Nonpolar/hydrophobic:** glycine, alanine, valine, leucine, isoleucine, proline, methionine, phenylalanine, tryptophan (and tyrosine is sometimes classified borderline — it has a polar -OH but a large nonpolar ring; know that ambiguity exists rather than memorizing a single rigid list). These tend to be buried in the hydrophobic core, away from water, in a folded globular protein. Glycine is a special case (see 3.3). Proline is a special case (see 3.3). Phenylalanine and tryptophan are also "aromatic" (see below) — categories aren't mutually exclusive.

**Polar, uncharged:** serine, threonine, cysteine, tyrosine, asparagine, glutamine. These have -OH, -SH, or amide groups capable of hydrogen bonding but no full charge at physiological pH. Tend to sit at the protein surface, interacting with water, or form hydrogen bonds within the structure.

**Acidic (negatively charged at physiological pH):** aspartate (Asp/D), glutamate (Glu/E). Carry a carboxylate side chain, deprotonated/negative at neutral pH. Surface-exposed, participate in salt bridges, often involved in catalytic active sites (e.g., as general acids/bases) and in binding positively charged ligands or metals.

**Basic (positively charged at physiological pH):** lysine (Lys/K), arginine (Arg/R), histidine (His/H). Lysine and arginine are essentially always protonated/positive at physiological pH; histidine is the special case (see below) because its pKa is close to physiological pH, so it can be protonated or not depending on local environment — this makes histidine especially useful in enzyme active sites where a residue needs to switch between protonation states during catalysis.

**Aromatic:** phenylalanine, tyrosine, tryptophan (and histidine has an aromatic-ish ring but is usually grouped with the basic residues). Bulky ring systems; phenylalanine is purely nonpolar, tyrosine has a polar hydroxyl on its ring, tryptophan has a large indole ring. Aromatic side chains can participate in special stacking interactions (pi-stacking) and are often found at protein-protein or protein-ligand interfaces.

## 3.3 Special-Case Residues (high-yield for exam questions)

**Glycine.** Smallest side chain (just a hydrogen). Because it has essentially no bulky R group, it allows much greater backbone flexibility than any other residue — useful at tight turns or in regions that need to pack closely, but destabilizing to regular secondary structure if overrepresented (too flexible to hold a rigid helix/sheet geometry well).

**Proline.** The R group cyclizes back onto the backbone nitrogen, forming a rigid ring that locks the phi backbone angle and removes the amide N-H needed for normal backbone hydrogen bonding. Consequence: proline is a "helix breaker"/"turn inducer" — it cannot fit into the regular hydrogen-bonding pattern of an alpha helix or beta sheet and is disproportionately found at turns and the start of helices (where the kink is less disruptive) rather than in the middle of regular secondary structure.

**Cysteine.** Has a thiol (-SH) side chain capable of forming a covalent disulfide bond with another cysteine upon oxidation. This is the only side chain capable of forming a *covalent* cross-link, making it structurally distinct from every other residue discussed.

**Histidine.** pKa of its imidazole side chain (~6) is close to physiological pH (~7.4), meaning it exists in an equilibrium between protonated and deprotonated forms under physiological conditions — uniquely tunable among the standard amino acids. Frequently found in enzyme active sites as a proton donor/acceptor in catalysis.

## 3.4 Why Side Chain Chemistry Predicts Structural Location

The general predictive rule examiners want you to apply: **hydrophobic residues bury in the core (away from water); polar/charged residues sit on the surface (in contact with water) or pair specifically with a complementary charge/polar partner in the core if buried.** If you're given a hypothetical mutation (e.g., "a surface lysine is mutated to leucine") you should be able to reason: lysine is charged/surface-favoring, leucine is nonpolar/core-favoring — putting a nonpolar residue on the surface either gets compensated (if it's a small, tolerable surface patch) or destabilizes the protein/promotes aggregation (because an exposed hydrophobic patch is energetically unfavorable in water and may drive non-specific association with other hydrophobic surfaces).

-----

# 4. LEVELS OF PROTEIN STRUCTURE

## 4.1 Primary Structure

The linear sequence of amino acids, held together by covalent peptide bonds. Encodes, in principle, all the information needed to determine higher-order structure (per the sequence hypothesis — see denaturation/renaturation note above). No folding yet at this level; it's the "instructions."

## 4.2 Secondary Structure

Local, regular folding patterns stabilized by **backbone hydrogen bonds** (between the carbonyl oxygen of one residue and the amide hydrogen of another) — side chain identity influences which secondary structure is favored, but the defining stabilizing force is backbone-to-backbone hydrogen bonding, not side chain interactions.

- **Alpha helix:** a right-handed coiled structure where each backbone N-H hydrogen-bonds to the backbone C=O four residues earlier (i, i+4 pattern), producing a regular helical rise. Side chains point outward from the helix axis. Proline disrupts it; glycine destabilizes it (too flexible); residues with charged/bulky side chains arranged periodically can stabilize or destabilize depending on packing.
- **Beta sheet:** formed from extended beta strands connected by hydrogen bonds *between* strands (rather than within a single local stretch), either parallel (strands run the same direction) or antiparallel (opposite directions — generally with a more direct, slightly stronger hydrogen-bonding geometry). Side chains alternate pointing above and below the sheet plane.
- **Turns and loops:** connect helices/strands, often at the protein surface, frequently enriched in glycine and proline for the flexibility/kink reasons described above.

## 4.3 Tertiary Structure

The overall 3D fold of a single polypeptide chain, stabilized by the full set of non-covalent forces *between side chains* (and sometimes covalent disulfides) — hydrophobic core packing, salt bridges, side-chain hydrogen bonds, van der Waals contacts. This is where distant parts of the sequence (far apart in primary structure) can be brought into close 3D proximity. Tertiary structure is what typically determines a protein's overall shape and is the level most directly responsible for functional features like binding pockets/active sites, since those require atoms from potentially distant parts of the sequence to be positioned together in 3D space.

## 4.4 Quaternary Structure

The assembly of multiple, separate polypeptide chains (subunits) into a functional complex, stabilized by the same categories of non-covalent (and occasionally covalent) interactions as tertiary structure, just occurring *between* chains rather than within one. Not all proteins have quaternary structure (a single-chain/monomeric protein has none); when present, subunits can be identical (homo-oligomer) or different (hetero-oligomer). Classic example used in many textbooks: hemoglobin, four subunits (two alpha, two beta).

## 4.5 Why This Hierarchy Matters for the Exam

A typical structure-based question gives you a perturbation (mutation, denaturant, pH shift) and asks which level of structure is most directly affected and why. The reasoning chain: identify what kind of bond/interaction is disrupted → match that interaction to the level of structure it stabilizes → state the consequence. E.g.: "heat denaturation primarily disrupts hydrogen bonds and weak hydrophobic/van der Waals interactions → these stabilize secondary, tertiary, and quaternary structure → so heat denaturation unfolds these levels while leaving primary structure (covalent peptide bonds) intact."

-----

# 5. STRUCTURE-FUNCTION RELATIONSHIPS

## 5.1 The General Principle

A protein's function depends on the precise 3D arrangement of specific atoms/side chains in space — shape (geometric complementarity to a binding partner) and chemistry (the right distribution of charge, polarity, hydrophobicity to interact favorably with that partner) together determine what a protein can bind and what it can do. This is the conceptual core of "structure-function relationship" as a phrase, and it's worth being able to state it in your own words because short-answer questions often ask you to apply it to a specific scenario rather than just define it.

## 5.2 Binding Sites / Active Sites

A binding or active site is typically a pocket or cleft formed by tertiary structure, bringing together side chains from non-adjacent parts of the sequence so their combined chemistry (some hydrophobic, some charged, some capable of hydrogen bonding) creates a microenvironment specific to a target molecule. Specificity comes from this combination — both the geometric fit (size/shape of the pocket matching the target) and the chemical fit (correct distribution of polar/charged/hydrophobic character lining the pocket).

## 5.3 Induced Fit and Conformational Change

Many proteins are not rigid; binding of a ligand/substrate can trigger a conformational shift (induced fit) that completes or optimizes the binding site, or that propagates a structural change elsewhere in the protein (relevant to allostery, below). This is part of why "structure" should be thought of as somewhat dynamic rather than a single fixed snapshot, even though models/diagrams necessarily show one static structure.

## 5.4 Allostery (general concept)

Binding at one site on a protein can influence (enhance or inhibit) activity at a different, distinct site, via a conformational change that propagates through the protein's tertiary/quaternary structure. This is a general mechanism worth knowing by name and concept even without a specific named example, since "explain how binding at one location affects function elsewhere" is a structure-function reasoning pattern that could appear in different specific dressings.

## 5.5 Mutation Effects — A General Reasoning Framework

Given a hypothetical mutation, work through:
1. What is the wild-type side chain's chemical character (polar/nonpolar/charged/size/special-case)?
2. What is the mutant side chain's character?
3. Where is this residue located (buried core, surface, active site, structural turn)?
4. What changes as a result (loss of a key interaction, introduction of an unfavorable interaction, altered flexibility, altered size/sterics)?
5. What is the structural/functional consequence (destabilization, loss of binding, altered specificity, no significant effect if the change is conservative)?

A "conservative" substitution (similar chemical character, e.g., leucine to isoleucine) is more likely to be tolerated; a "non-conservative" substitution (e.g., a buried hydrophobic residue to a charged one) is more likely to be destabilizing. This reasoning framework is broadly transferable and doesn't require knowing the specific protein in question.

-----

# 6. NUCLEIC ACID STRUCTURE AND STABILITY (comparison case)

Some years' rules language extends "stability and interactions in biological macromolecules" explicitly to nucleic acids, so the same conceptual toolkit should transfer.

## 6.1 DNA Structure

Double helix, two antiparallel strands (running in opposite 5'→3' directions), held together by **base pairing hydrogen bonds between complementary bases** (Adenine-Thymine, two hydrogen bonds; Guanine-Cytosine, three hydrogen bonds — GC pairs are therefore more thermally stable than AT pairs, a frequently tested fact) and by **base stacking interactions** (a form of van der Waals/hydrophobic-like stacking between adjacent base pairs along the helix axis, which contributes significantly to overall helix stability). The sugar-phosphate backbone is covalent and carries the negative charge (phosphate groups), which is why DNA structure/extraction protocols often involve counterions or specific salt conditions.

*A caveat worth knowing if pushed on this:* the textbook "3 H-bonds = stronger" explanation for GC stability is the standard teaching model and fine for exam purposes, but the actual physical contribution of sequence-context-dependent base stacking to that stability difference is more debated in the primary literature than the simple H-bond count suggests. Don't volunteer this nuance unprompted on a multiple-choice exam — but if a short answer asks you to *explain* GC stability beyond "more H-bonds," mentioning stacking as a contributing factor is a stronger answer than H-bonds alone.

## 6.2 RNA Structure

Single-stranded (generally), using ribose instead of deoxyribose and uracil instead of thymine. Despite being single-stranded, RNA molecules fold back on themselves to form local double-helical regions and complex secondary/tertiary structures (hairpins, loops, pseudoknots), stabilized by the same base-pairing and stacking logic as DNA — this is directly analogous to how a protein's single polypeptide chain folds back on itself using side chain interactions.

## 6.3 The Direct Analogy to Protein Folding (useful for short-answer synthesis questions)

If asked to compare/contrast stability principles between proteins and nucleic acids: both rely heavily on **hydrogen bonding** (backbone-to-backbone in proteins vs. base-to-base in nucleic acids) and a **stacking/packing phenomenon driven by minimizing unfavorable exposure to water** (hydrophobic core packing in proteins vs. base stacking shielding the hydrophobic faces of bases in nucleic acids). Both also denature under heat/pH/chaotropic conditions for analogous reasons (disruption of non-covalent interactions while the covalent backbone remains intact). This is a strong general answer if a question asks you to draw a parallel between the two macromolecule types.

-----

# 7. CRISPR AS A GENERAL MECHANISM CATEGORY *(new section — medium-high confidence)*

**Why this is here despite the no-named-protein rule:** the 2020 ruleset's written exam topic list explicitly names "the mechanism whereby CRISPR functions as an adaptive immune system in bacteria" as a topic category, separate from "ways the Cas9 protein has been engineered" (which *is* protein-specific and correctly excluded). The general bacterial-immunity mechanism is conceptually closer to "a structure-function/molecular-recognition system" than to "facts about one named protein," so it's reasonable testable territory even under a no-specifics rule, depending on how your coach is drawing that line. Flag this for your coach if you want a definitive call on whether it's in scope.

**The general mechanism (without engineered/biotech specifics):**
1. Bacteria and archaea acquire short fragments of invading viral (phage) DNA and integrate them into their own genome at a CRISPR locus (Clustered Regularly Interspaced Short Palindromic Repeats) — these become "spacers" between repeat sequences.
2. The CRISPR locus is transcribed into RNA and processed into short guide RNAs (crRNAs), each corresponding to a previously encountered invader sequence.
3. A guide RNA pairs with an effector nuclease protein (in the most commonly taught system, Cas9, but the general class includes many Cas variants) via base complementarity.
4. This RNA-protein complex scans the cell for matching DNA sequences (complementary to the guide RNA) in incoming genetic material.
5. Upon finding a match (recognition requires both sequence complementarity *and* a short adjacent motif called a PAM — protospacer adjacent motif — which helps distinguish self from invader DNA), the nuclease cleaves the foreign DNA, neutralizing the invader.
6. This constitutes "adaptive" immunity (as opposed to innate) because it is sequence-specific, acquired through prior exposure, and can be "remembered" across generations via the heritable CRISPR locus — directly analogous in *logic* (not mechanism) to how adaptive immune systems in vertebrates retain memory of prior pathogen exposure.

**Structure-function tie-in:** this is a clean example of RNA-guided sequence recognition — the specificity of the system comes from base-pairing complementarity (a nucleic acid recognition principle, Section 6) coupled to a protein effector domain that performs the catalytic cleavage (a protein structure-function principle, Section 5). If a question asks "how does this system achieve sequence specificity," the correct reasoning chain is "complementary base pairing between guide RNA and target DNA," not "the protein recognizes the sequence directly."

-----

# 8. ZINC FINGER MOTIFS [flagged — medium confidence on testability]

A zinc finger is a small structural motif in which a zinc ion is coordinated (typically) by a combination of cysteine and histidine side chains (commonly described as a "Cys2His2" arrangement, though variants exist), which stabilizes a compact fold too small to be stable through hydrophobic packing alone. This is a good illustration of a more general principle worth knowing: **metal ions can serve a purely structural role**, stabilizing a fold via direct coordination bonds to specific side chains, distinct from the five "intrinsic" folding forces in Section 1. Zinc fingers are commonly found in DNA-binding proteins, where the rigid, well-defined fold allows precise positioning of side chains into the DNA major groove for sequence-specific recognition — a clean example of the structure-function principle in Section 5 (a small, metal-stabilized structural module whose rigidity *is* its function).

-----

# 9. QUICK-REFERENCE SHEET

**The five non-covalent/covalent folding forces:**

| Force | Participants | Relative strength | Stabilizes |
|---|---|---|---|
| Hydrogen bond | N-H/O-H donor + N/O acceptor | Weak individually, directional | Secondary (backbone), tertiary (side chain) |
| Ionic/salt bridge | Oppositely charged side chains | Moderate, pH-sensitive | Tertiary, quaternary |
| Van der Waals | Any close atoms (induced dipole) | Very weak individually, additive | Tertiary (core packing) |
| Hydrophobic effect | Nonpolar side chains + water entropy | Dominant net driver of collapse | Tertiary (core formation) |
| Disulfide bond | Two cysteine thiols, oxidized | Strong, covalent | Tertiary, quaternary (locks structure) |

**Amino acid categories — quick sort:**
- Nonpolar: Gly, Ala, Val, Leu, Ile, Pro, Met, Phe, Trp
- Polar uncharged: Ser, Thr, Cys, Tyr, Asn, Gln
- Acidic (–): Asp, Glu
- Basic (+): Lys, Arg, His
- Aromatic: Phe, Tyr, Trp (His sometimes included)
- Special cases: Gly (flexible, no R group), Pro (rigid, breaks helices), Cys (disulfides), His (pKa near physiological pH)

**Four levels of structure:**
1. Primary — sequence, peptide bonds (covalent)
2. Secondary — local folds (helix/sheet/turn), backbone H-bonds
3. Tertiary — full single-chain 3D fold, side chain interactions
4. Quaternary — multi-chain assembly, same forces between chains

**Denaturants and what they target:**
- Heat → disrupts H-bonds, weak forces (kinetic energy)
- pH extremes → disrupts ionic/salt bridges (changes protonation)
- Chaotropes (urea, guanidinium) → disrupt H-bonding network, weaken hydrophobic effect
- Detergents (SDS) → disrupt hydrophobic core
- Reducing agents (DTT, BME) → break disulfides specifically

**DNA base pairing:** A-T (2 H-bonds), G-C (3 H-bonds, more stable)

**DNA-binding motifs (see Section 11):** helix-turn-helix, zinc finger, leucine zipper, helix-loop-helix

**Catalysis quick terms (see Section 13):** general acid/base catalysis, nucleophile, electrophile, transition state stabilization, cofactor vs. coenzyme

-----

# 10. COMMON CONFUSIONS AND TRAPS

**"Folding decreases entropy, so it can't be spontaneous."** Wrong scope — the protein chain's conformational entropy decreases, but the surrounding water's entropy increases by more (hydrophobic effect), making the *net* ΔG favorable. Always specify which entropy.

**"Hydrophobic interactions are a direct attractive force between nonpolar groups, like a bond."** Not quite — it's primarily an entropic effect mediated by water behavior, not a direct attraction comparable to a hydrogen bond or van der Waals force, even though it's often colloquially described alongside them.

**"All charged residues are on the surface."** Generally true but not absolute — a buried charged residue is possible and usually functionally significant (e.g., participating in catalysis or a buried salt bridge), so don't treat it as a rigid rule when reasoning through a specific scenario.

**"Secondary structure is stabilized by side chain interactions."** No — secondary structure (helix, sheet) is defined and stabilized by *backbone* hydrogen bonds. Side chain interactions are what stabilize tertiary structure. This distinction is a common multiple-choice trap.

**"Denaturation breaks peptide bonds."** No — standard denaturation (heat, pH, chaotropes) disrupts non-covalent interactions (and disulfides, if a reducing agent is present); the primary sequence/peptide bond backbone stays intact. This is why denaturation can sometimes be reversed (renaturation) — you haven't destroyed the chain, just unfolded it.

**Confusing penetrance/expressivity-style genetics vocabulary with protein structure vocabulary.** This guide is structural/chemical, not genetic — if a question uses genetics terms in a Protein Modeling context, it's more likely asking about something like gene-to-protein translation in a structure-function sense, not classical Mendelian inheritance.

**"All DNA-binding proteins use zinc fingers."** No — zinc fingers are one of several common motifs (see Section 11). Don't over-fit to one example just because it appeared in a recent year's modeled protein.

**"A cofactor and a coenzyme are the same thing."** Related but not identical — see Section 13.4 for the distinction.

-----

# 11. DNA-BINDING MOTIFS BEYOND ZINC FINGERS *(new section — medium confidence)*

Two of your eight sample years feature DNA-binding proteins (zinc finger in 2025/2026, and CRISPR/Cas9 is also fundamentally a DNA-targeting system). Since the rules consistently frame these as generic structural motifs whose function is sequence-specific DNA recognition, it's reasonable to know the broader motif family rather than just the one your most recent ruleset happened to name.

**Helix-turn-helix (HTH).** Two short alpha helices connected by a short turn; one helix (the "recognition helix") sits in the DNA major groove and makes specific contacts with bases via its side chains, while the other helix stabilizes the positioning. Common in bacterial transcription factors and repressors. The key general principle: the *turn* is rigid enough to fix the geometric relationship between the two helices, which is what positions the recognition helix correctly in the groove — a direct illustration of structure (rigid geometry) enabling function (correct spatial positioning for sequence reading).

**Leucine zipper.** Two alpha helices, each from a separate polypeptide chain (or separate region of a dimeric protein), associate via a "zipper" of leucine residues spaced every seventh residue, which line up along one face of each helix and interdigitate through hydrophobic interactions (Section 1's hydrophobic effect, applied at a dimerization interface rather than within a single core) to hold the two helices together in a coiled-coil. This dimerization positions adjacent basic (DNA-binding) regions to grip the DNA on either side, like a clothespin. Good example for "how does quaternary-structure-like dimerization enable function" reasoning.

**Helix-loop-helix (HLH).** Similar dimerization logic to the leucine zipper (two helices from two chains coming together), but the connecting element is a loop rather than a zipper, and dimerization is often driven by hydrophobic packing between the helices directly rather than a regularly spaced leucine ladder. Frequently found in transcription factors that also need to bind DNA after dimerizing, similar functional logic to the leucine zipper.

**Zinc finger (cross-reference to Section 8).** Differs from the above in that it doesn't rely on chain dimerization for stability — a single zinc finger domain is stabilized intramolecularly by metal coordination, making it compact enough that multiple zinc fingers can be strung in tandem along one chain, each reading a few base pairs, to build up longer-sequence specificity.

**General testable principle across all four:** DNA-binding specificity in each case comes from a *rigid structural element* (whether stabilized by a turn, a hydrophobic zipper, a loop, or a metal ion) correctly positioning specific side chains into the DNA major groove (sometimes minor groove) where they can make sequence-specific contacts with the exposed edges of the bases. This is the same "structure enables precise spatial positioning, which enables function" logic from Section 5, just applied to a nucleic-acid-binding context instead of a small-molecule active site.

-----

# 12. CATALYTIC MECHANISM VOCABULARY *(new section — medium confidence)*

At least three of your eight sample years feature an enzyme as the modeled protein (sepiapterin reductase, cytidine deaminase, and Cas9's nuclease activity). "Principles of chemistry that drive protein folding" doesn't explicitly include catalytic mechanism, but "structure/function relationship" plausibly does, and this vocabulary is standard enough in any biochemistry-adjacent exam that it's worth knowing generically.

**General acid/base catalysis.** A side chain (commonly His, Asp, Glu, or sometimes Lys/Cys depending on the enzyme) donates or accepts a proton at a key step in the reaction, stabilizing a charged intermediate or facilitating bond breaking/forming. This is exactly why histidine's near-physiological pKa (Section 3.3) makes it so useful in active sites — it can readily switch between protonated and deprotonated states as the reaction proceeds.

**Nucleophile and electrophile.** A nucleophile is an electron-rich species that attacks an electron-poor center (electrophile) to form a new bond. In enzymes, a deprotonated serine, cysteine, or sometimes a water molecule activated by a nearby base, often serves as the nucleophile attacking a substrate's electrophilic center (e.g., a carbonyl carbon). Worth knowing the vocabulary even without a specific named mechanism, since multiple-choice questions sometimes just test "which term describes an electron-rich attacking species."

**Transition state stabilization.** The core modern explanation for *why* enzymes speed up reactions: rather than just "lowering activation energy" in the abstract, enzymes work by binding and stabilizing the high-energy transition state of the reaction more effectively than they bind the substrate or product, which lowers the energy barrier the reaction needs to cross. This connects directly to Section 5's binding-site logic — the active site's geometric and chemical complementarity is often better matched to the transition state's shape/charge distribution than to the resting substrate's.

**Cofactor vs. coenzyme.** A cofactor is any non-protein chemical component required for an enzyme's activity — this includes metal ions (e.g., zinc, iron, magnesium) as well as organic molecules. A coenzyme is specifically an organic cofactor (often derived from a vitamin, e.g., NAD+, FAD, coenzyme A). So "coenzyme" is a subset of "cofactor," not a synonym — a common multiple-choice trap. Metal-coordinating active sites (distinct from the purely structural zinc-finger use of zinc in Section 8) are a clean example of a cofactor enabling catalysis directly, rather than just stabilizing a fold.

**Catalytic vs. structural role of a bound metal/cofactor — a reasoning distinction worth having ready:** if a question describes a metal ion in an active site, ask whether it's positioned to directly participate in chemistry (polarizing a substrate bond, stabilizing a developing negative charge, acting as a Lewis acid) versus simply holding a fold together (as in Section 8's zinc finger). Same atom, different functional role depending on structural context — this is a good example of applying the "structure dictates function, but you have to look at the specific local environment" principle rather than assuming all zinc does the same job.

-----

# 13. READING PDB FILES AND USING JMOL/JSMOL *(new section — medium confidence)*

Every single ruleset across all eight years names Jmol/JSmol (or its JUDE wrapper) as the required visualization tool and the PDB as the data source. Even on a written exam, conceptual/vocabulary questions about the tool and file format are plausible, since they're effectively part of the event's core literacy.

## 13.1 What's Actually in a PDB File

A Protein Data Bank (PDB) file contains, at minimum: a header section with metadata (what the structure is, how it was determined — e.g., X-ray crystallography, NMR, cryo-EM — and the resolution if applicable), and an ATOM section listing every atom's 3D coordinates (x, y, z), which residue it belongs to, which chain it's part of (proteins with multiple subunits or DNA/RNA strands present as separate "chains," labeled A, B, C, etc.), and the residue's sequence position number. HETATM records list non-standard residues or bound molecules (ligands, cofactors, water molecules, ions) that aren't part of the standard amino acid chain.

**Resolution, briefly:** for X-ray structures, resolution (in Angstroms) describes how precisely atom positions are determined — lower numbers (e.g., 1.5 Å) mean higher precision than higher numbers (e.g., 3.0 Å). Not usually central to Protein Modeling questions, but "what does resolution tell you about a structure" is a plausible vocabulary question given how central the PDB is to this event.

## 13.2 Chains and Residue Numbering

Multiple rulesets specify a residue range and chain explicitly (e.g., "chain A, residues 214-310") — understanding that a single PDB file can contain multiple chains (different proteins, different copies of the same protein, or nucleic acid strands bound to a protein), and that residue numbering refers to position within that specific chain's sequence (not a universal atom count), is the kind of literacy question that could appear divorced from any specific protein's identity.

## 13.3 Jmol/JSmol Display Modes (conceptual, not button-by-button)

Even without hands-on access, you should be able to describe what each common display mode shows and why you'd pick one over another:
- **Spacefill (van der Waals spheres):** shows atoms as solid spheres at their van der Waals radius — good for visualizing how tightly packed a region is or how a ligand fills a pocket, bad for seeing backbone topology.
- **Ball-and-stick:** shows atoms as smaller spheres connected by lines/sticks for bonds — good for seeing precise bond geometry and individual side chain orientation, often used for active site close-ups.
- **Cartoon/ribbon:** abstracts the backbone into a simplified ribbon, with helices shown as coils/cylinders and sheets as flat arrows — the standard way to visualize overall secondary and tertiary structure at a glance, since atomic detail would be visually overwhelming at the whole-protein scale.
- **Alpha-carbon backbone trace (most relevant to this event specifically):** connects only the alpha carbons in sequence, producing a simplified wire trace of the backbone path — this is explicitly the basis for the physical Toober/Kwik-Twist models built in this event, since the 2 cm-per-amino-acid scale models the alpha-carbon-to-alpha-carbon path, not full atomic detail.

**Why this matters conceptually for the event specifically:** the entire physical modeling exercise (Part I and Part II of the actual competition) is built on translating an alpha-carbon backbone trace from Jmol into a physical bent-wire model — so understanding *why* alpha-carbon-only is the chosen simplification (it captures the fold's overall path without requiring full atomic detail that would be physically unbuildable at this scale) is a reasonable conceptual question even on a written exam.

## 13.4 Functionally Relevant Features, Generically

Across every ruleset, "functionally relevant features" added to a model (side chains, DNA, associated molecules) must "highlight the significance of structure to function." On a written exam, expect this to translate into: given a generic feature (a bound ligand, a particular side chain, a piece of DNA), explain what about its structure makes it functionally significant — which is really just Section 5's structure-function framework applied to whatever's described in the question.

-----

# 14. POST-TRANSLATIONAL MODIFICATION *(new section — lower confidence)*

**Confidence caveat:** this isn't named explicitly in any of the eight rulesets you provided. I'm including it because it's a standard generic structure-function topic that recurs across many SciOly Protein Modeling exams by general event reputation, but I don't have direct evidence it's tested in *your* specific tryout or current-year event. Treat this as a lower-priority addition — review it after you're solid on Sections 1-6, not before.

**Phosphorylation.** Addition of a phosphate group (commonly to serine, threonine, or tyrosine side chains) by a kinase enzyme, removed by a phosphatase. Adds significant negative charge to the modified residue, which can directly alter local electrostatics (e.g., disrupting or creating a salt bridge), trigger a conformational change, or create/destroy a binding site for other proteins that specifically recognize phosphorylated residues. A clean example of how a small chemical modification (not a change in sequence) can have a large structural/functional effect — useful if a question asks you to explain regulation without changing primary structure.

**Glycosylation.** Addition of sugar chains, commonly to asparagine (N-linked) or serine/threonine (O-linked) side chains, mostly in secreted or membrane proteins. Can affect protein folding/stability, protect against degradation, and mediate recognition by other molecules (e.g., cell-surface receptors).

**Proteolytic cleavage / zymogen activation.** Many proteins (especially digestive enzymes and proteins in blood clotting cascades) are synthesized as inactive precursors (zymogens) and activated by specific, irreversible cleavage of one or more peptide bonds, which triggers a conformational change exposing or completing the active site. This is a good illustration that primary structure changes (an irreversible covalent cleavage, unlike the other non-covalent topics in this guide) can also be a regulatory/functional mechanism, distinct from folding/denaturation.

-----

# 15. PROTEIN-PROTEIN INTERACTION INTERFACES *(new section — lower confidence)*

**Confidence caveat:** similarly not directly evidenced in your eight rulesets. Included because antibody-antigen recognition is an extremely common generic example in Science Olympiad biology events broadly, and the underlying principle (specificity via combined geometric and chemical complementarity at an interface) is identical to Section 5's binding-site logic, just applied between two proteins rather than a protein and a small molecule. Lower priority than Sections 1-6 and 7/11/12/13.

**General principle.** Protein-protein interfaces achieve specificity the same way active sites do: geometric complementarity (the two surfaces' shapes fit together) plus chemical complementarity (hydrogen bonds, salt bridges, hydrophobic patches on one surface matching with compatible chemistry on the other). Often, a relatively small number of "hotspot" residues at the interface contribute most of the binding energy, while many other contact residues contribute comparatively little — a useful fact if a question asks about why a single point mutation at an interface can have an outsized effect on binding (it likely hit a hotspot residue).

**Antibody-antigen as the generic textbook example.** Antibodies use hypervariable loop regions (complementarity-determining regions, CDRs) positioned at the tip of each variable domain to form a binding surface whose shape and chemistry are complementary to a specific antigen epitope. This is frequently used as the generic illustration of how a protein achieves essentially unlimited binding specificity using the same five non-covalent forces from Section 1, just arranged combinatorially across a huge number of possible sequence variants — useful as a "why can proteins recognize almost anything" synthesis answer.

-----

# 16. pH AND pKa NUMERICAL REASONING *(new section — medium confidence)*

The original guide mentioned histidine's pKa being "close to physiological pH" but didn't give you a scaffold for reasoning numerically about protonation state given a pKa and a pH. If a short-answer question gives you a pKa value and a pH and asks you to determine the dominant protonation state (or vice versa), here's the reasoning tool.

## 16.1 The Henderson-Hasselbalch Relationship (conceptual, not just formula recall)

The formal equation is pH = pKa + log([A⁻]/[HA]), where [A⁻] is the deprotonated (basic) form and [HA] is the protonated (acidic) form. You almost certainly won't need to do a precise logarithm calculation on a Protein Modeling exam, but the *conceptual* content is high-yield:

**The core rule of thumb:** when pH = pKa, the side chain is exactly 50% protonated and 50% deprotonated (this is the definition of pKa — the pH at which the two forms are equal). When pH is *above* the pKa, the deprotonated (often neutral or negatively charged, depending on the group) form dominates. When pH is *below* the pKa, the protonated (often positively charged or neutral, depending on the group) form dominates. A useful memory aid: pH high → proton leaves (deprotonated dominates); pH low → proton stays/attaches (protonated dominates).

**Applying this to histidine specifically:** histidine's imidazole side chain has a pKa around 6 (commonly cited as approximately 6.0, though it varies by protein environment, reported anywhere from roughly 5.4 to 7.6 depending on local burial and neighboring charges — don't treat 6.0 as a rigid universal constant, treat it as a representative value). At physiological pH (~7.4), since pH > pKa, histidine is predominantly deprotonated/neutral, though a meaningful fraction remains protonated because the pH and pKa are close together — this is exactly *why* histidine is uniquely useful in active sites: unlike lysine or aspartate, where pH and pKa are far apart and the protonation state is essentially fixed under physiological conditions, histidine sits in the regime where both forms coexist in significant amounts, letting it act as a switch.

**Applying this to acidic/basic side chains generally:** aspartate and glutamate (carboxylic acid side chains) have pKa values around 3.5-4.5, far below physiological pH (~7.4) — so pH > pKa by a wide margin, meaning they're almost entirely deprotonated (negatively charged) under normal cellular conditions. Lysine and arginine have pKa values around 10-12, far above physiological pH — so pH < pKa, meaning they're almost entirely protonated (positively charged) under normal cellular conditions. This is *why* Section 3.2's classification of Asp/Glu as "acidic, negative at physiological pH" and Lys/Arg as "basic, positive at physiological pH" holds so reliably, while histidine is flagged as the exception — the numbers explain the categorical rule.

## 16.2 Why a pH Shift Disrupts Structure — Connecting Back to Section 1 and 2.3

If a question asks you to explain *why* a pH change denatures a protein or disrupts a specific interaction, the reasoning chain should explicitly invoke the pKa/pH relationship: changing the pH shifts which protonation state dominates for residues whose pKa is near that new pH; if a salt bridge depended on, say, an aspartate being negatively charged and a lysine being positively charged, lowering the pH enough to protonate the aspartate (making it neutral instead of negative) removes the opposite charges the salt bridge needed, breaking that specific interaction even though most of the rest of the protein's pKa values may be far enough from the new pH to be unaffected. A strong answer specifies *which* residues' protonation states are close enough to the changed pH to actually shift, rather than treating "pH changes everything's charge" as a blanket statement.

-----

# 17. LIPIDS AND CARBOHYDRATES — BIOMOLECULE CATEGORIES BEYOND PROTEIN/NUCLEIC ACID *(new section — lower-medium confidence)*

**Confidence caveat:** not directly evidenced in your eight rulesets, but "principles of chemistry" as a stated exam category is broad, and several modeled proteins across SciOly's history are membrane-associated or interact with lipids/sugars, so basic literacy here is a reasonable hedge. Lower priority than Sections 1-6.

## 17.1 Lipids — General Chemistry and Relevance to Protein Modeling

Lipids are a chemically diverse category unified by being mostly nonpolar/hydrophobic (poorly soluble in water), rather than by a single shared structure the way amino acids or nucleotides share a backbone. The most relevant lipid category for this event is the **phospholipid**, the primary building block of cell membranes.

**Phospholipid structure:** a phospholipid has a hydrophilic "head" (a phosphate group, often with an additional charged or polar alcohol attached) and two hydrophobic "tails" (fatty acid chains). This dual nature — polar head, nonpolar tail — makes phospholipids **amphipathic**, the same term used for molecules with both hydrophilic and hydrophobic regions in a single structure. Amphipathic phospholipids spontaneously self-assemble into a **bilayer** in water: tails facing inward (away from water, satisfying the hydrophobic effect from Section 1), heads facing outward on both surfaces (in contact with water on either side). This self-assembly is driven by the exact same hydrophobic-effect entropy logic from Section 1.2 that drives a protein's hydrophobic core to bury itself — worth recognizing as the same underlying chemistry showing up in a different biomolecule context.

**Why this matters for Protein Modeling specifically:** any membrane-embedded or membrane-associated protein has to solve the structural problem of presenting a hydrophobic surface to the lipid bilayer's interior (instead of burying hydrophobic residues in a core, the way a typical soluble globular protein does) while keeping the rest of the protein's chemistry compatible with the aqueous environment on either side of the membrane. A transmembrane alpha helix, for instance, typically has hydrophobic residues facing outward toward the lipid tails, which is essentially an "inside-out" version of the normal globular hydrophobic-core rule, driven by the identical chemistry just applied to a different geometry. If a question describes a protein segment that's unusually rich in hydrophobic residues and asks you to predict its location, "spanning a membrane" is a reasonable hypothesis alongside "buried in a soluble core," depending on context clues in the question.

## 17.2 Carbohydrates — General Chemistry and Relevance

Carbohydrates (sugars) are built from monosaccharide units (e.g., glucose) linked by glycosidic bonds (a specific type of covalent bond formed via a condensation/dehydration reaction, conceptually parallel to how a peptide bond links amino acids via the same dehydration logic). Monosaccharides are generally polar/hydrophilic, due to multiple hydroxyl (-OH) groups capable of hydrogen bonding.

**Relevance to protein modeling:** the most likely place carbohydrates intersect this event is **glycosylation** (covered in more detail in Section 14.2) — sugar chains covalently attached to specific side chains (commonly asparagine for N-linked, or serine/threonine for O-linked glycosylation). Functionally, glycosylation can protect a protein from degradation, mediate cell-surface recognition events, or assist in proper folding within the cell's secretory pathway. If a model or question references a "glycoprotein" or sugar groups attached to a protein, the structure-function reasoning is the same general framework from Section 5: the added chemical group's hydrophilic, hydrogen-bonding-rich character changes the local surface chemistry, which can alter solubility, recognition, or stability without altering the underlying amino acid sequence.

## 17.3 Why Lipids and Carbohydrates Are Worth Knowing Even Briefly

The unifying theme worth taking away, useful if a synthesis question draws a comparison across biomolecule classes: every major biomolecule category (protein, nucleic acid, lipid, carbohydrate) achieves its specific structural behavior through the same small toolkit of chemistry — hydrophobic/hydrophilic partitioning, hydrogen bonding, and (for the larger polymers) a backbone built via repeated condensation/dehydration reactions linking monomer units. Recognizing this shared toolkit is a strong way to answer a "compare and contrast" style question without needing deep expertise in lipid or carbohydrate biochemistry specifically.

-----

# 18. FIBROUS VS. GLOBULAR PROTEINS — A COMPARATIVE CASE STUDY *(new section — medium confidence)*

**Why this is worth adding:** this is one of the most classic generic structure-function contrasts in introductory biochemistry, and it directly exercises the Section 5 reasoning framework (structure dictates function) using two contrasting protein categories rather than one specific named protein — which fits your "no specifics" constraint well, since neither category requires knowing a particular PDB entry.

## 18.1 Fibrous Proteins

Fibrous proteins are typically elongated, rod- or strand-like, composed of long stretches of a single, repetitive secondary structure, often with extensive crosslinking (covalent or otherwise) between separate molecules or chains, and are generally insoluble in water. Function: typically structural/mechanical (providing tensile strength, support, or shape) rather than catalytic or binding-based.

**Collagen** (most commonly cited example): a triple helix of three polypeptide chains, each individually a relatively simple repeating secondary structure (distinct from the alpha helix — collagen's helix is a separate, more extended conformation stabilized by a high glycine content, since glycine's small size is required to allow the tight packing of three intertwined chains, and a steady proportion of proline/hydroxyproline, whose ring rigidity helps stabilize this particular helical conformation despite normally being a helix-breaker in the *alpha*-helix context — illustrating that "proline breaks helices" from Section 3.3 specifically meant the alpha helix, not helices generally, a useful nuance if asked to reconcile the two facts). Multiple collagen triple helices further assemble and crosslink into larger fibrils, contributing to tensile strength in connective tissue, tendons, and skin.

**Keratin** (another commonly cited example): rich in cysteine, forming extensive disulfide crosslinks (Section 1.2) between chains, which is part of why hair and nails are mechanically tough and resistant to denaturation by mild conditions — the covalent disulfide network survives treatments that would unfold a typical globular protein's non-covalent tertiary structure.

## 18.2 Globular Proteins

Globular proteins are compact, roughly spherical, with a mix of different secondary structure elements (helices, sheets, turns) folded into a complex tertiary structure with a defined hydrophobic core and a water-exposed, often irregular surface — typically water-soluble. Function: usually dynamic/catalytic/binding-based (enzymes, transport proteins, receptors, antibodies) rather than purely structural. Every protein modeled across your eight sample rulesets (sepiapterin reductase, Cas9, cytidine deaminase, zinc fingers, de novo designed proteins) falls into this globular category, which is part of why the bulk of Sections 1-6 emphasizes hydrophobic core formation, binding pockets, and tertiary-structure-driven function — that's the globular protein's defining logic.

## 18.3 The Comparative Reasoning Pattern (exam-relevant)

If asked to explain *why* a fibrous protein is built the way it is rather than folding into a compact globular shape, or why a globular protein wouldn't work as a structural material, the core answer should invoke structure-function directly: fibrous proteins need long-range mechanical continuity (tensile strength along a fiber axis), which favors an elongated, repetitive, often crosslinked architecture; globular proteins need a precisely shaped 3D pocket or surface for binding/catalysis, which favors a compact fold that brings distant sequence positions into specific 3D proximity (Section 4.3). Each architecture is the structural solution that's well-matched to its respective functional demand — a clean, transferable application of the same "structure serves function" principle from Section 5, just illustrated at the level of overall protein architecture rather than a single binding site.

-----

# 19. GLOSSARY / INDEX *(new — for flashcard-making)*

Alphabetical, single-sentence definitions, each with its primary section reference so you can look up more context. Built specifically so this can drive flashcard creation without you needing to re-read full sections to extract a clean definition.

**Active site** — a pocket or cleft in a protein's tertiary structure, formed by spatially clustered side chains, where catalysis or binding occurs. (5.2)

**Allostery** — binding at one site on a protein altering activity at a distinct site via a propagated conformational change. (5.4)

**Alpha helix** — a right-handed coiled secondary structure stabilized by i, i+4 backbone hydrogen bonds. (4.2)

**Amphipathic** — having both a hydrophilic and a hydrophobic region within the same molecule. (17.1)

**Antiparallel** — strands or chains running in opposite directions (used for both beta sheets and DNA strands). (4.2, 6.1)

**Beta sheet** — secondary structure formed from hydrogen-bonded extended strands, parallel or antiparallel. (4.2)

**Cofactor** — any non-protein chemical component (metal ion or organic molecule) required for an enzyme's activity. (12)

**Coenzyme** — an organic cofactor, often vitamin-derived (e.g., NAD+, FAD); a subset of cofactor, not a synonym. (12)

**Conservative substitution** — a mutation replacing one residue with another of similar chemical character; more likely tolerated. (5.5)

**Denaturation** — loss of native folded structure without breaking peptide bonds/primary sequence. (2.3)

**Disulfide bond** — a covalent S-S bond between two cysteine thiols, formed by oxidation. (1.2)

**Electrophile** — an electron-poor species that accepts electrons/is attacked by a nucleophile. (12)

**Folding funnel** — the energy-landscape model describing many unfolded states converging toward one native fold. (2.2)

**General acid/base catalysis** — a side chain donating or accepting a protron at a key catalytic step. (12)

**Glycosidic bond** — the covalent bond linking monosaccharide units, formed by condensation/dehydration. (17.2)

**Glycosylation** — covalent attachment of sugar chains to specific side chains (commonly Asn, Ser, or Thr). (14, 17.2)

**Helix-loop-helix** — a DNA-binding dimerization motif: two helices (one per chain) joined by a loop. (11)

**Helix-turn-helix** — a DNA-binding motif: two short helices joined by a turn, one helix reading the major groove. (11)

**Henderson-Hasselbalch equation** — pH = pKa + log([A⁻]/[HA]); relates pH, pKa, and protonation state. (16.1)

**Hetero-oligomer** — a quaternary structure assembly of non-identical subunits. (4.4)

**HETATM** — a PDB file record type for non-standard residues/bound molecules (ligands, ions, water). (13.1)

**Homo-oligomer** — a quaternary structure assembly of identical subunits. (4.4)

**Hydrogen bond** — an attraction between a hydrogen on an electronegative atom and another electronegative atom's lone pair. (1.2)

**Hydrophobic effect** — the entropically-driven clustering of nonpolar groups away from water. (1.2)

**Induced fit** — a conformational change triggered by ligand binding that completes/optimizes a binding site. (5.3)

**Ionic bond / salt bridge** — an attraction between oppositely charged side chains. (1.2)

**Leucine zipper** — a DNA-binding dimerization motif using leucine residues spaced every 7th position for hydrophobic interlocking. (11)

**Levinthal's paradox** — the observation that proteins fold far faster than random conformational search would allow. (2.2)

**Non-conservative substitution** — a mutation replacing a residue with one of very different chemical character; more likely destabilizing. (5.5)

**Nucleophile** — an electron-rich species that attacks an electrophile to form a new bond. (12)

**pKa** — the pH at which a given ionizable group is 50% protonated and 50% deprotonated. (16.1)

**Primary structure** — the linear amino acid sequence, held by covalent peptide bonds. (4.1)

**Proteolytic cleavage / zymogen activation** — irreversible peptide bond cleavage activating an inactive protein precursor. (14)

**Quaternary structure** — assembly of multiple polypeptide chains into one functional complex. (4.4)

**Renaturation** — the (sometimes possible) refolding of a denatured protein back to its native structure. (2.3)

**Secondary structure** — local, regular folding (helix/sheet/turn) stabilized by backbone hydrogen bonds. (4.2)

**Tertiary structure** — the full 3D fold of a single chain, stabilized by side chain interactions. (4.3)

**Transition state stabilization** — an enzyme's preferential binding to a reaction's high-energy transition state, lowering the activation barrier. (12)

**Van der Waals forces** — weak, short-range attractions from transient induced dipoles between any close atoms. (1.2)

**Zinc finger** — a small DNA-binding motif stabilized by a zinc ion coordinated by Cys/His side chains. (8)

**Zwitterion** — a molecule (like a free amino acid) carrying both a positive and negative charge simultaneously. (3.1)

-----

# 20. WORKED REASONING EXAMPLES

**Example 1.** *A protein is heated past its melting temperature and loses activity, but mass spectrometry shows the polypeptide's molecular weight and sequence are unchanged. Explain.*

Reasoning chain: unchanged sequence/molecular weight means peptide bonds (covalent, primary structure) are intact. Loss of activity with no covalent change points to loss of higher-order structure — heat disrupts hydrogen bonds and weak hydrophobic/van der Waals interactions, denaturing secondary/tertiary/quaternary structure. Since function (activity) depends on the precise 3D structure (structure-function relationship), denaturing that structure without breaking the chain destroys function while leaving the chain itself measurably the same.

**Example 2.** *A mutation replaces a buried leucine (in the hydrophobic core) with a glutamate. Predict the effect.*

Reasoning chain: leucine is nonpolar, favors burial in the hydrophobic core; glutamate is acidic/negatively charged, strongly favors a surface, water-exposed position. Forcing a charged residue into a buried, water-excluded environment is energetically costly (the charge has no water to interact with and no good way to be neutralized in a nonpolar environment) — this is a non-conservative substitution. Predicted effect: significant destabilization of tertiary structure, likely misfolding or reduced stability, since the change disrupts core packing and introduces an unfavorable buried charge.

**Example 3.** *Two cysteines, distant in primary sequence, are found close together in the folded 3D structure and form a disulfide bond. The protein is then treated with a reducing agent and unfolds slightly but doesn't fully denature. Explain why partial unfolding occurs without full denaturation.*

Reasoning chain: a reducing agent specifically breaks the covalent disulfide bond, removing a structural cross-link between distant parts of the chain (tertiary structure stabilization). Since reducing agents don't disrupt hydrogen bonds, van der Waals contacts, or hydrophobic packing, the rest of the non-covalent stabilizing network is still intact — so the protein loses the specific rigidity/constraint the disulfide provided (partial unfolding/loosening near that region) without losing all the other forces holding the overall fold together (hence not full denaturation).

**Example 4.** *Why does an enzyme's activity often depend strongly on pH, with a peak at a specific optimal pH?*

Reasoning chain: enzyme active sites frequently rely on specific protonation states of acidic/basic side chains (e.g., a histidine acting as a proton donor/acceptor, or a salt bridge stabilizing the active site geometry) to carry out catalysis or maintain the correct binding-site shape. At the optimal pH, these residues are in the protonation state required for proper structure/function. Moving away from that pH shifts protonation states, disrupting salt bridges and/or removing the specific charge character the active site chemistry depends on — reducing activity. At extreme pH, enough of the structure's stabilizing ionic interactions are disrupted that the protein denatures outright.

**Example 5 (new).** *A DNA-binding protein loses its ability to bind its target sequence after a single point mutation. The mutated residue is not in direct contact with the DNA bases. Propose an explanation.*

Reasoning chain: direct base contact isn't the only way a mutation can disrupt binding. The mutated residue could be part of a structural element (a turn, a dimerization interface, a metal-coordinating position) that's required to correctly position the actual DNA-contacting residues in space — i.e., it has a structural role rather than a direct chemical role in recognition. This is the same logic as Section 11's "rigid structural element positions the reading residues" principle: disrupting the rigid scaffold disrupts function even without touching the residues that do the actual reading.

**Example 6 (new).** *Explain, in general terms, how a single bacterial cell line can become resistant to a specific bacteriophage after surviving an infection, without invoking any specific engineered system.*

Reasoning chain: this describes the general logic of CRISPR-based adaptive immunity (Section 7) — a fragment of the phage's DNA is captured and stored in the bacterial genome as a spacer; this becomes a template for guide RNAs that direct a nuclease to recognize and cleave that same sequence on future infection by sequence complementarity. The "resistance" is heritable because the spacer is now part of the bacterial genome, passed to daughter cells.

**Example 7 (new).** *An aspartate side chain in an enzyme's active site has an unusually high pKa (around 6.5) compared to a typical aspartate in free solution (around 3.9). At physiological pH (7.4), predict whether this aspartate is more or less likely to be protonated than a typical surface aspartate, and suggest why its pKa might be shifted.*

Reasoning chain: at pH 7.4, both the typical aspartate (pKa ~3.9) and this shifted one (pKa ~6.5) have pH above their pKa, so both are still predominantly deprotonated/negative — but the shifted aspartate is *closer* to its pKa, meaning a meaningfully larger fraction remains protonated compared to the typical case (Section 16.1's "pH and pKa close together means both forms coexist" logic). A shifted pKa like this is commonly explained by local environment: if this aspartate is partially buried or near other negative charges, the local environment would disfavor an additional negative charge (electrostatic repulsion or reduced solvent access to stabilize the charge), favoring the neutral (protonated) form more than it would be favored in free solution — raising the effective pKa. This is the same kind of context-dependence flagged for histidine's pKa in Section 16.1, generalized to another residue.

**Example 8 (new).** *A scientist is engineering a synthetic biomaterial and wants a peptide that's mechanically tough and resistant to mild denaturing conditions, but is willing to sacrifice the ability to bind a specific target molecule. Should they design a fibrous-protein-like or globular-protein-like structure, and why?*

Reasoning chain: the stated functional requirement (mechanical toughness, denaturant resistance) without a binding requirement matches the fibrous protein architecture from Section 18 — an elongated, repetitive secondary structure, ideally with covalent crosslinks (e.g., disulfides, as in keratin) that survive non-covalent-disrupting conditions like heat or pH shifts. A globular fold would be the wrong choice here, since its main structural payoff (a precisely shaped tertiary-structure binding pocket) isn't needed, and globular folds are generally more vulnerable to mild denaturation than crosslinked fibrous architectures, since they rely more heavily on the non-covalent forces from Section 1 rather than the covalent crosslinking emphasized in fibrous examples.

-----

# OPEN QUESTIONS FOR YOUR COACH

Worth clarifying before the tryout, since I can't resolve these from the rules documents alone:

1. Is Section 7 (CRISPR-as-general-mechanism) actually in scope for your no-specifics rule, or does your coach intend an even stricter exclusion than the 2020 ruleset's own topic list suggests?
2. Are Sections 14, 15, 17 (post-translational modification, protein-protein interfaces, lipids/carbohydrates) things your coach has tested before, or am I over-extending past what this event actually covers? These remain flagged as lower-confidence for a reason — they're plausible by general event pattern, not directly evidenced in your provided rules documents.
3. Does the tryout test Jmol/JSmol conceptual literacy (Section 13) at all, or is it purely the folding-chemistry content?
4. Does your tryout expect numerical pH/pKa calculation (Section 16), or only the conceptual "which form dominates" reasoning? If your coach wants you doing actual Henderson-Hasselbalch math, that would need a heavier practice-problem supplement than what's here.

-----

# REVISION LOG

**v1 (original):** Sections covering bonds/forces, thermodynamics, amino acid chemistry, four structural levels, structure-function, nucleic acids, zinc fingers, quick reference, common confusions, and four worked examples.

**v2:** Added CRISPR-as-mechanism (Section 7), DNA-binding motifs beyond zinc fingers (Section 11), catalytic mechanism vocabulary (Section 12), PDB/Jmol literacy (Section 13), post-translational modification (Section 14, flagged low-confidence), protein-protein interfaces (Section 15, flagged low-confidence), and two new worked examples.

**v3 (this version):** Added a ΔG/ΔH/ΔS primer (Section 2.0) for anyone without prior Gibbs free energy exposure, numerical pH/pKa reasoning (Section 16), lipids and carbohydrates as biomolecule categories (Section 17, flagged lower-confidence), a fibrous-vs-globular protein comparative case study (Section 18, medium confidence), a full alphabetical glossary built for flashcard extraction (Section 19), and two new worked examples (7-8) exercising the new content. Verified the highest-risk specific factual claims (alpha helix i,i+4 hydrogen bonding, histidine pKa value and its context-dependent range, AT/GC hydrogen bond counts, the relative contribution debate between base-pairing and base-stacking to DNA stability, and the ΔG=ΔH−TΔS sign convention) against current web sources — all confirmed accurate as stated. Did not exhaustively fact-check every sentence in the document line by line; the verification effort was concentrated on claims with specific numbers or claims most likely to be misremembered rather than on well-established mechanistic descriptions (hydrophobic effect, disulfide chemistry, denaturant mechanisms) that are standard, uncontested biochemistry.
