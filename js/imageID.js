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
        { id: 'dg-chrom-05', label: 'Karyotype – Monosomy X (Turner)', src: '', description: '45,X; only one sex chromosome; female phenotype; short stature, webbed neck, infertility; result of nondisjunction.' },
        { id: 'dg-chrom-06', label: 'Karyotype – XXY (Klinefelter)', src: '', description: '47,XXY; male phenotype; tall, reduced fertility, breast development; extra X from maternal or paternal nondisjunction.' },
        { id: 'dg-chrom-07', label: 'Karyotype – Trisomy 18 (Edwards)', src: '', description: '47 chromosomes with three copies of chromosome 18; severe developmental defects; fist clenching is a classic clinical sign.' },
      ]
    },
    {
      category: 'Phylogenetic Trees',
      cards: [
        { id: 'dg-phylo-01', label: 'Cladogram – Rooted Tree', src: '', description: 'Root = common ancestor of all taxa shown; branch points (nodes) = divergence events; taxa at tips; reading: two taxa sharing the most recent node are most closely related.' },
        { id: 'dg-phylo-02', label: 'Phylogram – Branch Length Proportional', src: '', description: 'Branch lengths are proportional to amount of evolutionary change; longer branch = more change since divergence; contrast with cladogram where length is not informative.' },
        { id: 'dg-phylo-03', label: 'Identifying Sister Taxa', src: '', description: 'Sister taxa share an immediate common ancestor; they are each other\'s closest relative in the tree. Identify by finding the most recent node two species share — both branches radiating from that node are sisters.' },
        { id: 'dg-phylo-04', label: 'Parsimony – Mapping Characters', src: '', description: 'Derived characters (synapomorphies) shared by a clade are mapped on branches; the most parsimonious tree minimizes total evolutionary changes; outgroup used to determine ancestral vs. derived states.' },
        { id: 'dg-phylo-05', label: 'Molecular Clock / Divergence Time', src: '', description: 'If mutation rate is constant, branch length predicts divergence time; calibrated with fossil record; formula: divergence time = (number of differences) / (2 × mutation rate).' },
        { id: 'dg-phylo-06', label: 'Constructing a Tree from Sequence Data', src: '', description: 'Step 1: align sequences. Step 2: count pairwise differences. Step 3: group most similar pairs. Step 4: build tree by iterative grouping of nearest neighbors (UPGMA or neighbor-joining). Most similar sequences cluster together.' },
      ]
    },
    {
      category: 'Gene & Chromosome Maps',
      cards: [
        { id: 'dg-map-01', label: 'Linkage Map – Two Genes', src: '', description: 'Horizontal line representing a chromosome; genes placed at positions in centimorgans from a reference point; distance = recombination frequency × 100; genes within 50 cM of each other are linked.' },
        { id: 'dg-map-02', label: 'Linkage Map – Three Genes', src: '', description: 'Three loci on one chromosome; order determined by three-point cross; double crossover (rarest class) identifies middle gene; map distances for each interval calculated separately.' },
        { id: 'dg-map-03', label: 'Chromosome Map – Human X Chromosome', src: '', description: 'Classic X-linked loci: color blindness (Xq28), hemophilia A (F8, Xq28), Duchenne muscular dystrophy (DMD, Xp21); used as reference for X-linkage problems.' },
        { id: 'dg-map-04', label: 'Recombination Frequency vs Physical Distance', src: '', description: 'RF underestimates physical distance due to double crossovers and interference; Haldane mapping function corrects for this; beyond 50 cM, RF plateaus at 50% regardless of physical distance.' },
        { id: 'dg-map-05', label: 'Genetic Interference Diagram', src: '', description: 'Coefficient of coincidence (CoC) = observed DCO frequency / expected DCO frequency; Interference = 1 − CoC; Positive interference (CoC < 1) means fewer DCOs than expected — one crossover reduces probability of a nearby second crossover.' },
      ]
    },
    {
      category: 'Gene Expression & Regulation',
      cards: [
        { id: 'dg-reg-01', label: 'Promoter Region Diagram', src: '', description: 'Prokaryote: −10 (Pribnow box, TATAAT) and −35 (TTGACA) elements upstream of transcription start site (+1); spacer length (~17 bp) between −10 and −35 is critical; mutations in either element reduce RNA polymerase binding.' },
        { id: 'dg-reg-02', label: 'Effect of −10 Region Mutation', src: '', description: 'Wild-type −10 (TATAAT): normal transcription. Mutation in −10 box → RNA polymerase binds poorly → reduced mRNA → less protein. Some mutations may increase transcription if they create a better match to the consensus (up-mutations).' },
        { id: 'dg-reg-03', label: 'Lac Operon – Inducible System', src: '', description: 'Genes for lactose metabolism; normally off (repressor bound to operator). Inducer (allolactose) binds repressor → conformational change → repressor leaves operator → RNA pol transcribes. Catabolite repression: also requires low glucose (cAMP-CAP activation).' },
        { id: 'dg-reg-04', label: 'Eukaryotic Promoter – TATA Box', src: '', description: 'Located ~25 bp upstream of transcription start; TATA-binding protein (TBP) recognizes and bends DNA; part of the TFIID complex; initiates assembly of the pre-initiation complex with RNA Pol II.' },
        { id: 'dg-reg-05', label: 'Epigenetic Marks – Methylation & Acetylation', src: '', description: 'DNA methylation (CpG islands): recruits repressors → gene silencing. Histone acetylation (HAT): neutralizes + charge → loosens chromatin → active transcription. Histone deacetylation (HDAC): condenses chromatin → gene repression.' },
        { id: 'dg-reg-06', label: 'Northern Blot – Gene Expression Levels', src: '', description: 'RNA blot showing mRNA bands; band intensity = expression level; multiple bands = alternative splicing; size indicates transcript length; compare lanes (different tissues or conditions) to assess differential expression.' },
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
        { id: 'for-fp-04', label: 'Fingerprint – Plain Whorl', src: '', description: 'Two deltas; central ridges form concentric circles or ellipses; both deltas must be in a direct line to the innermost recurve.' },
        { id: 'for-fp-04b', label: 'Fingerprint – Central Pocket Whorl', src: '', description: 'Two deltas; at least one ridge recurves to form a pocket around the center; inner whorl may be small or off-center.' },
        { id: 'for-fp-04c', label: 'Fingerprint – Double Loop Whorl', src: '', description: 'Two separate loop formations within the pattern; two distinct cores and two deltas; one loop opens left, one right.' },
        { id: 'for-fp-04d', label: 'Fingerprint – Accidental Whorl', src: '', description: 'Does not fit any other classification; has two or more deltas; may combine elements of two different pattern types.' },
        { id: 'for-fp-05', label: 'Fingerprint – Bifurcation', src: '', description: 'Minutiae: one ridge splits into two; used for individuality; Galton detail for comparison.' },
        { id: 'for-fp-05b', label: 'Fingerprint – Ridge Ending', src: '', description: 'Minutiae: a ridge terminates abruptly; position and angle compared in AFIS and manual comparison.' },
        { id: 'for-fp-05c', label: 'Fingerprint – Island (Short Ridge)', src: '', description: 'Minutiae: a very short independent ridge segment; too short to be a ridge but clearly separated from neighbors. Some systems call this a "dot" if it is round.' },
        { id: 'for-fp-05d', label: 'Fingerprint – Enclosure (Lake)', src: '', description: 'Minutiae: a ridge splits and then rejoins, enclosing an oval or lens-shaped space. Also called a lake or eye.' },
        { id: 'for-fp-05e', label: 'Fingerprint – Eye', src: '', description: 'Minutiae: similar to an enclosure; two bifurcations facing each other that reconnect; creates an eye or oval space within the ridge flow.' },
        { id: 'for-fp-05f', label: 'Fingerprint – Spur', src: '', description: 'Minutiae: a short ridge that branches off a longer ridge at approximately 90°; only one side of the branch continues.' },
        { id: 'for-fp-05g', label: 'Fingerprint – Delta', src: '', description: 'Reference point where three ridge systems meet: an innermost pattern area, a recurving or looping system, and a diverging system. Every loop has one delta; every whorl has two.' },
        { id: 'for-fp-05h', label: 'Fingerprint – Trifurcation', src: '', description: 'Minutiae: a single ridge splits simultaneously into three branches; less common than bifurcation.' },
        { id: 'for-fp-05i', label: 'Fingerprint – Double Bifurcation', src: '', description: 'Minutiae: two bifurcations occurring at the same point or in very close succession on one ridge; creates a complex branching pattern.' },
        { id: 'for-fp-06', label: 'Latent Print – Ninhydrin', src: '', description: 'Purple/pink Ruhemann\'s purple color on porous surfaces (paper); reacts with amino acids in fingerprint residue.' },
        { id: 'for-fp-07', label: 'Latent Print – Cyanoacrylate', src: '', description: 'White fumed Superglue deposits on fingerprint ridges on non-porous surfaces; polymerizes on amino acids/lipids.' },
        { id: 'for-fp-07b', label: 'Latent Print – Iodine Fuming', src: '', description: 'Yellow-brown coloration on porous surfaces; iodine vapors absorb into fingerprint oils and fats; temporary (fades); must be fixed or photographed immediately. Least permanent of development methods.' },
        { id: 'for-fp-08', label: 'Latent Print – DFO', src: '', description: 'Fluorescent reagent for porous surfaces; works on older/degraded prints; viewed under laser/alternate light source.' },
        { id: 'for-fp-09', label: 'Latent Print – Powder Dusting', src: '', description: 'Fine aluminum or carbon powder brushed over non-porous surface; adheres to the oils/perspiration of the ridge pattern; recovered by lifting tape. Most common field technique.' },
      ]
    },
    {
      category: 'Hair Analysis',
      cards: [
        { id: 'for-hair-01', label: 'Hair Cross-Section – Cortex', src: '', description: 'Middle layer; contains pigment granules (melanin); primary site of color; spindle-shaped cells.' },
        { id: 'for-hair-02', label: 'Hair Cross-Section – Medulla', src: '', description: 'Central canal; may be absent, fragmented, discontinuous, or continuous; medullary index = medulla diameter / total diameter.' },
        { id: 'for-hair-03', label: 'Hair Cross-Section – Cuticle', src: '', description: 'Outermost layer; overlapping scales pointing toward tip; scale pattern (coronal, spinous, imbricate) used for animal ID.' },
        { id: 'for-hair-04', label: 'Human Hair vs Animal Hair', src: '', description: 'Human: thin cuticle, broad cortex, small/absent medulla, MI <1/3. Animal: thick cuticle, narrow cortex, large medulla MI ≥1/2.' },
        { id: 'for-hair-04b', label: 'Cow (Bovine) Hair – Microscopy', src: '', description: 'Wide, opaque, continuous medulla nearly fills shaft (MI close to 1); cuticle scales are irregular and coarse; cortex is narrow; often used as a comparison reference animal.' },
        { id: 'for-hair-04c', label: 'Horse Hair – Microscopy', src: '', description: 'Very coarse hair; medulla is absent or narrow in body hair but coarse in mane/tail; pigment granules clustered near medulla; ovoid cross-section; wide variation by body region.' },
        { id: 'for-hair-04d', label: 'Squirrel Hair – Microscopy', src: '', description: 'Distinctive banded/agouti coloration (alternating light and dark bands); medulla is wide and cellular with chambers; cuticle scales prominent and petal-shaped.' },
        { id: 'for-hair-04e', label: 'Bat Hair – Microscopy', src: '', description: 'Distinctively small diameter; medulla is multiserial (multiple rows of cells across width); cuticle scales are petal-shaped and relatively large compared to shaft; can appear nearly transparent under low magnification.' },
        { id: 'for-hair-05', label: 'Hair Root – Anagen Phase', src: '', description: 'Actively growing; follicular tag may be present (provides nuclear DNA); wider root.' },
        { id: 'for-hair-06', label: 'Hair Root – Telogen Phase', src: '', description: 'Resting/shed phase; club-shaped root; no follicular tag; only mitochondrial DNA available.' },
        { id: 'for-hair-07', label: 'Hair Cuticle Scales – Coronal', src: '', description: 'Petal-shaped scales encircling the shaft like a crown; characteristic of rodents and bats; the most distinctive scale pattern for animal hair ID.' },
        { id: 'for-hair-08', label: 'Hair Cuticle Scales – Imbricate', src: '', description: 'Flat overlapping scales like roof tiles; characteristic of human hair and many domestic animals; narrowest scale type.' },
        { id: 'for-hair-09', label: 'Hair Cuticle Scales – Spinous', src: '', description: 'Prickle-shaped scales protruding outward; characteristic of cat and mink; intermediate between coronal and imbricate.' },
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
        { id: 'for-blood-05', label: 'ABO Blood Typing – Reaction', src: '', description: 'Agglutination (clumping) with anti-A or anti-B antibody indicates antigen present; Type A: + with anti-A; Type AB: + with both; Type O: − with both.' },
        { id: 'for-blood-05b', label: 'Human Red Blood Cell – Microscopy', src: '', description: 'Biconcave disc, anucleate; 6–8 μm diameter; pale center under Wright\'s stain; no nucleus — key distinguishing feature from all other vertebrate RBCs.' },
        { id: 'for-blood-05c', label: 'Avian Red Blood Cell – Microscopy', src: '', description: 'Oval/elliptical cell with a centrally placed, elongated nucleus; larger than human RBCs; stains darker overall. Presence of nucleus is the defining feature distinguishing bird from mammal blood.' },
        { id: 'for-blood-05d', label: 'Reptilian/Amphibian Red Blood Cell – Microscopy', src: '', description: 'Nucleated, oval, and typically the largest of vertebrate RBCs; nucleus is round to oval; cytoplasm may appear greenish. Distinguish from avian by larger size and rounder nucleus.' },
        { id: 'for-blood-05e', label: 'Mammalian (Non-Human) RBC – Microscopy', src: '', description: 'Anucleate like human; size varies by species (cat RBC ~5μm, dog ~7μm); dogs may show polychromasia. Cannot distinguish from human RBC by microscopy alone — species confirmation requires immunological or DNA testing.' },
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
        { id: 'for-soil-02', label: 'Glass Fracture – Radial & Concentric', src: '', description: 'Radial cracks extend from impact; concentric rings form around; RSVP rule: Radial cracks show Stress on Vent (back) face. Radial cracks start on back/far side; concentric cracks start on near/front side.' },
        { id: 'for-soil-02b', label: 'Glass Fracture – Sequence of Impacts', src: '', description: 'Cracks from a second impact are stopped by (terminate at) cracks from the first impact. Rule: the impact whose cracks are terminated LATER in time — the cracks that stop at others happened second.' },
        { id: 'for-soil-03', label: 'Becke Line – RI Comparison', src: '', description: 'Bright halo moves toward medium with higher RI when focus raised; moves toward glass = glass has higher RI than oil.' },
        { id: 'for-soil-04', label: 'Fiber – Polarized Light Microscopy', src: '', description: 'Natural vs synthetic; birefringence pattern; cross-section shape; dye absorption; twist angle.' },
        { id: 'for-soil-05', label: 'Tire Track – Tread Pattern Cast', src: '', description: 'Three-dimensional impression cast in plaster; compare tread block shape, groove width, and any unique wear patterns or cuts; enables comparison to suspect tire. Photograph before casting.' },
        { id: 'for-soil-06', label: 'Shoe Print – Impression Evidence', src: '', description: 'Shows sole pattern, wear, and cuts unique to individual shoe; size estimate from print length; outsole patterns are manufacturer-specific then individualized through wear; treat like a 2D photograph plus 3D cast.' },
        { id: 'for-soil-07', label: 'Tire Track – Class vs Individual Characteristics', src: '', description: 'Class: tread design, brand; Individual: cuts, nails, wear patterns unique to one tire. Only individual characteristics can positively ID a specific tire to a crime scene.' },
      ]
    },
    {
      category: 'DNA & STR Profiling',
      cards: [
        { id: 'for-dna-01', label: 'STR Electropherogram – Single Contributor', src: '', description: 'Capillary electrophoresis output showing colored peaks at STR loci; each locus shows 1 or 2 peaks (alleles); peak height ∝ amount of DNA. RFU (relative fluorescence units) on Y-axis; fragment size (bp) on X-axis.' },
        { id: 'for-dna-02', label: 'STR Electropherogram – Mixture', src: '', description: 'Two or more contributors; loci may show 3–4 peaks; minor contributor peaks are lower RFU; mixture ratio estimated from peak areas. Complex mixtures with >2 contributors are often uninterpretable.' },
        { id: 'for-dna-03', label: 'STR Allele Ladder', src: '', description: 'Reference standard run alongside samples; contains all known alleles for a given STR locus; used to assign allele calls (numbers) to sample peaks by size comparison.' },
        { id: 'for-dna-04', label: 'DNA Profile Comparison – Match vs Non-Match', src: '', description: 'Side-by-side electropherograms; a match requires concordance at ALL loci simultaneously (CODIS uses 20 core STR loci); a single mismatch at one locus is an exclusion.' },
        { id: 'for-dna-05', label: 'Paternity Gel – Band Matching', src: '', description: 'Mother, child, and alleged father bands; child must inherit one band from mother and one from father at each locus; a band in child that matches neither parent at a locus is an exclusion (must occur at multiple loci to exclude — single-locus mutation rate ~0.1%).' },
        { id: 'for-dna-06', label: 'DNA Quantification – qPCR Curve', src: '', description: 'Amplification curve with Ct (cycle threshold); lower Ct = more starting DNA; used to determine how much human DNA is present before STR amplification; also detects degradation or inhibition.' },
      ]
    },
    {
      category: 'Seeds, Pollen & Botany',
      cards: [
        { id: 'for-plant-01', label: 'Pollen Grain – Light Microscopy', src: '', description: 'Identify by shape (spherical, triangular, elongated), wall texture (smooth, spiny, reticulate), apertures (pores and colpi); species-specific; can link suspect or scene to geographic location or plant source.' },
        { id: 'for-plant-02', label: 'Pollen – Aperture Types', src: '', description: 'Colpus = elongated furrow; pore = rounded opening; monolete/trilete = fern spores. Naming convention: mono/di/tricolporate = number of colpi + pores. Shape is family-/genus-level diagnostic.' },
        { id: 'for-plant-03', label: 'Seed Morphology Comparison', src: '', description: 'Shape, surface texture (smooth, ridged, warty, winged), color, hilum position; seeds can adhere to clothing, shoes, or vehicle; match to regional flora database.' },
        { id: 'for-plant-04', label: 'Diatom Frustule – Microscopy', src: '', description: 'Silica cell wall with species-specific pattern (striae, areolae); found in fresh and salt water; inhaled diatoms in lungs indicate drowning before death vs. postmortem submersion; geographic water source ID from assemblages.' },
        { id: 'for-plant-05', label: 'Plant Fiber – Anatomical Cross-Section', src: '', description: 'Cotton: twisted ribbon, kidney-shaped cross-section; linen (flax): polygonal, thick-walled; hemp: polygonal with central lumen; jute: angular with clear lumen. Natural fibers distinguished from synthetic by these microscopic features.' },
      ]
    },
  ],

  protmod: [
    {
      category: 'Secondary Structure (Ribbon)',
      cards: [
        { id: 'pm-ss-01', label: 'α-Helix — Ribbon', src: '', description: 'Coiled/spiral ribbon; runs N→C; 3.6 residues/turn; 1.5 Å rise/residue; i→i+4 H-bonds; right-handed in all natural proteins.' },
        { id: 'pm-ss-02', label: 'β-Strand — Ribbon Arrow', src: '', description: 'Flat arrow pointing C-terminus direction; edge of a β-sheet; H-bonds to adjacent strands (inter-strand, not i→i+4).' },
        { id: 'pm-ss-03', label: 'Parallel β-Sheet', src: '', description: 'All strand arrows point same direction (all N→C); H-bond geometry slightly offset; less stable than antiparallel.' },
        { id: 'pm-ss-04', label: 'Antiparallel β-Sheet', src: '', description: 'Alternating arrow directions; directly opposed H-bonds; more stable; connected by β-hairpin turns.' },
        { id: 'pm-ss-05', label: 'Loop / Coil', src: '', description: 'Thin tube between secondary structure elements; flexible; no regular H-bond pattern; highest B-factors (mobility) in crystal structures.' },
        { id: 'pm-ss-06', label: 'β-Hairpin', src: '', description: 'Two antiparallel strands connected by a short tight turn (2–5 residues); the connecting loop chirality follows the Koga R/L rule.' },
        { id: 'pm-ss-07', label: 'βαβ Motif (Right-Handed)', src: '', description: 'Two parallel strands with a helix between; always right-handed crossover in natural proteins — the helix bridges from the C-end of strand 1 to the N-end of strand 2 on the right.' },
        { id: 'pm-ss-08', label: 'Helix — N-terminus vs C-terminus', src: '', description: 'Arrow tip or positively charged end = N-terminus of helix (δ+); tail or negatively polarized end = C-terminus (δ−). Helix macrodipole is +N/−C.' },
      ]
    },
    {
      category: 'Amino Acid Side Chains (Ball-and-Stick)',
      cards: [
        { id: 'pm-aa-01', label: 'Glycine (Gly, G)', src: '', description: 'Side chain = H only; no chiral center; smallest AA; broadest Ramachandran coverage including left-handed helix region; no steric constraints.' },
        { id: 'pm-aa-02', label: 'Proline (Pro, P)', src: '', description: 'Cyclic pyrrolidine ring; N is part of ring → no free NH, cannot donate H-bond; rigid backbone; breaks/kinks helices; narrow Ramachandran region; helix-breaker.' },
        { id: 'pm-aa-03', label: 'Cysteine (Cys, C)', src: '', description: 'Thiol (–SH) side chain; forms disulfide bonds (–S–S–) with another Cys under oxidizing conditions; ~2.05 Å S–S bond; JUDE color = yellow.' },
        { id: 'pm-aa-04', label: 'Histidine (His, H)', src: '', description: 'Imidazole ring; pKa ≈ 6.0 (only AA with pKa near physiological pH); protonated = imidazolium (+1); acts as acid/base catalyst; JUDE = blue.' },
        { id: 'pm-aa-05', label: 'Aspartate (Asp, D) vs Asparagine (Asn, N)', src: '', description: 'Asp: –CH₂–COO⁻ (carboxylate, negative charge, JUDE red). Asn: –CH₂–CO–NH₂ (amide, polar, JUDE green). Key visual: Asp has double-bonded O with negative charge; Asn has NH₂.' },
        { id: 'pm-aa-06', label: 'Glutamate (Glu, E) vs Glutamine (Gln, Q)', src: '', description: 'Glu: –CH₂CH₂–COO⁻ (one more CH₂ than Asp; acidic, JUDE red). Gln: –CH₂CH₂–CO–NH₂ (amide; polar, JUDE green). Same acid-vs-amide distinction as Asp/Asn but longer.' },
        { id: 'pm-aa-07', label: 'Lysine (Lys, K)', src: '', description: 'Long aliphatic chain ending in –(CH₂)₄–NH₃⁺; pKa ≈ 10.5; positively charged at physiological pH; JUDE = blue.' },
        { id: 'pm-aa-08', label: 'Arginine (Arg, R)', src: '', description: 'Guanidinium group (pKa ≈ 12.5); always positively charged at physiological pH; planar, can form multiple H-bonds; JUDE = blue.' },
        { id: 'pm-aa-09', label: 'Phenylalanine (Phe, F) vs Tyrosine (Tyr, Y) vs Tryptophan (Trp, W)', src: '', description: 'Phe: benzene ring, nonpolar (JUDE white/grey). Tyr: benzene + –OH, polar (pKa ≈ 10.1, JUDE green). Trp: indole (bicyclic), largest AA, nonpolar (JUDE white). All aromatic; can stack.' },
        { id: 'pm-aa-10', label: 'Valine (Val, V) / Leucine (Leu, L) / Isoleucine (Ile, I)', src: '', description: 'Branched aliphatic hydrocarbons; nonpolar; pack in protein core (JUDE white/grey). Val: isopropyl; Leu: isobutyl; Ile: sec-butyl. Leu and Ile both C₄ but different branching.' },
      ]
    },
    {
      category: 'Color-by-Property (3DMD / JUDE Convention)',
      cards: [
        { id: 'pm-col-01', label: 'Yellow residue in JUDE', src: '', description: 'Yellow = Cysteine (Cys). Always check for proximity of another yellow residue — if ~2.05 Å apart, it is a disulfide bond.' },
        { id: 'pm-col-02', label: 'Red residue in JUDE', src: '', description: 'Red = Acidic side chain (Asp or Glu). Negatively charged at physiological pH. A red residue near a blue one may indicate a salt bridge (≤4 Å between charged atoms).' },
        { id: 'pm-col-03', label: 'Blue residue in JUDE', src: '', description: 'Blue = Basic side chain (Lys, Arg, or His). Positively charged at physiological pH. His only becomes blue when protonated (pH < pKa ≈ 6).' },
        { id: 'pm-col-04', label: 'Green residue in JUDE', src: '', description: 'Green = Polar uncharged side chain (Ser, Thr, Asn, Gln, Tyr). Hydrophilic; expected on protein surface. A green residue buried in the hydrophobic core is a design flaw.' },
        { id: 'pm-col-05', label: 'White/Grey residue in JUDE', src: '', description: 'White/Grey = Nonpolar/hydrophobic side chain (Ala, Val, Leu, Ile, Pro, Phe, Met, Trp, and the glycine backbone). Expected in protein core; surface exposure = unfavorable.' },
        { id: 'pm-col-06', label: 'Design Flaw: Charged Residue in Core', src: '', description: 'A red or blue residue (charged) buried in the protein interior is a design flaw — it is energetically costly to bury a charge without a counterpart. Should flag as "charged residue in hydrophobic core."' },
        { id: 'pm-col-07', label: 'Amphipathic Helix — Color Pattern', src: '', description: 'On one face: white/grey residues (hydrophobic). On the opposite face: green/blue/red (polar/charged). This segregation every ~3–4 residues (100° rotation) is the defining signature of an amphipathic helix.' },
      ]
    },
    {
      category: 'Atomic Distances & Interactions',
      cards: [
        { id: 'pm-dist-01', label: 'Disulfide Bond Distance (~2.05 Å)', src: '', description: 'S–S covalent bond between two Cys; ~2.05 Å between sulfur atoms. In JUDE, measure the Cys–Cys S…S distance. Only covalent bond in standard side-chain interactions.' },
        { id: 'pm-dist-02', label: 'Hydrogen Bond Distance (~2.7–3.2 Å)', src: '', description: 'Donor–acceptor distance ~2.7–3.2 Å (heavy atoms: N–O or O–O). Angle >120°. In α-helix: backbone NH (i) donates to backbone C=O (i−4). In β-sheet: inter-strand NH→C=O.' },
        { id: 'pm-dist-03', label: 'Salt Bridge Distance (≤4 Å)', src: '', description: 'Electrostatic interaction between oppositely charged groups (e.g., Lys/Arg vs Asp/Glu). Distance ≤4 Å between charged heavy atoms. In JUDE: look for blue–red residue pair at short distance.' },
        { id: 'pm-dist-04', label: 'Van der Waals Contact (~3.5–4.5 Å)', src: '', description: 'Non-covalent contact between uncharged atoms in close proximity; packing contacts in protein core. Favorable at optimal distance; repulsive if atoms overlap (clash).' },
        { id: 'pm-dist-05', label: 'Interpreting a JUDE Distance Measurement', src: '', description: 'Step 1: Note which atoms are measured (S–S, N–O, charged atoms). Step 2: Use distances to classify: ~2.05 Å = disulfide; ~2.7–3.2 Å = H-bond; ≤4 Å + opposite charges = salt bridge; 3.5–4.5 Å uncharged = VDW.' },
      ]
    },
    {
      category: 'Ramachandran Plot',
      cards: [
        { id: 'pm-rama-01', label: 'Ramachandran Plot — α-Helix Region', src: '', description: 'φ ≈ −60°, ψ ≈ −40°. Upper-left cluster. Right-handed α-helix; most helical residues fall here. 3₁₀ helix nearby (φ ≈ −50°, ψ ≈ −25°).' },
        { id: 'pm-rama-02', label: 'Ramachandran Plot — β-Sheet Region', src: '', description: 'φ ≈ −120°, ψ ≈ +120°. Lower-left quadrant. Parallel and antiparallel β-strands. Larger allowed area than α-region.' },
        { id: 'pm-rama-03', label: 'Ramachandran Plot — Left-Handed α-Helix', src: '', description: 'φ ≈ +60°, ψ ≈ +40°. Small island in upper-right. Rare; energetically allowed but unusual. Only Gly commonly populates this region in non-Gly residues.' },
        { id: 'pm-rama-04', label: 'Glycine — Broad Ramachandran Scatter', src: '', description: 'Gly has no side chain → no steric clash → can adopt φ/ψ values anywhere, including positive φ. Plotted points scatter widely across all four quadrants. Contrast with other residues confined to two main regions.' },
        { id: 'pm-rama-05', label: 'Proline — Narrow Ramachandran Band', src: '', description: 'Pro side chain is bonded to backbone N; ring constrains φ to ~−60°. ψ can vary more but overall shows a narrow vertical band. Cannot be in the middle of a helix (no NH donor).' },
        { id: 'pm-rama-06', label: 'Ramachandran — Identifying β-Turn Types', src: '', description: 'Type I turn: residue i+1 in α region, i+2 in α region. Type II: residue i+1 in α region, i+2 in β region (often has Gly at i+2). These differ in how the backbone flips.' },
      ]
    },
    {
      category: 'Fold Topology (Koga 5 Folds)',
      cards: [
        { id: 'pm-fold-01', label: 'Fold-I: β-α-β (2-strand sandwich)', src: '', description: 'Simplest Koga fold; 2 parallel strands with 1 helix; βαβ unit; ~76 residues in the worked example (4 strands × 7 + 2 helices × 18 + loops). Topology = two parallel β-strands sandwiching a helix.' },
        { id: 'pm-fold-02', label: 'Fold-II: α-β-α (helix-sandwiched sheet)', src: '', description: 'α-helix → β-sheet → α-helix; helices pack on both faces of the sheet. Alternating helices and strands. Common in TIM-barrel variants.' },
        { id: 'pm-fold-03', label: 'Fold-III: β-barrel or β-sandwich', src: '', description: 'Multiple antiparallel β-strands forming a barrel or layered sandwich. No helices in the core. Topology diagram shows all antiparallel arrows.' },
        { id: 'pm-fold-04', label: 'Topology Diagram: Reading 2D Cartoons', src: '', description: 'Circles/cylinders = helices; triangles/arrows = strands; lines = loops. Arrow direction = N→C. Curved lines above/below indicate connectivity. Same topology → same 2D diagram, regardless of sequence.' },
        { id: 'pm-fold-05', label: 'Parallel vs Antiparallel β-Sheet in Topology', src: '', description: 'Parallel sheet: all arrows point same direction; connected by long ββα crossovers (βαβ units). Antiparallel sheet: alternating directions; connected by short hairpin turns.' },
        { id: 'pm-fold-06', label: 'Helix Dipole Diagram', src: '', description: 'N-terminus of helix is δ+ (positive); C-terminus is δ− (negative). Arises from alignment of backbone C=O dipoles. Negatively charged residues (Asp/Glu) are stabilized at the N-cap; positive (Lys/Arg) at C-cap.' },
      ]
    },
    {
      category: 'Biophysical Assay Readouts',
      cards: [
        { id: 'pm-assay-01', label: 'CD Spectrum — α-rich protein', src: '', description: 'Two negative peaks at ~208 nm and ~222 nm; positive peak near 193 nm. Classic α-helix signature. More negative signal at 222 nm = more helical content.' },
        { id: 'pm-assay-02', label: 'CD Spectrum — β-rich protein', src: '', description: 'Single negative peak near 216 nm; positive near 195 nm. Weaker overall signal than α-helix. Antiparallel β-sheet has additional fine structure.' },
        { id: 'pm-assay-03', label: 'CD Spectrum — Unfolded/Random Coil', src: '', description: 'Single large negative peak near 200 nm; little to no signal at 208/222 nm. A designed protein showing this spectrum has failed to fold.' },
        { id: 'pm-assay-04', label: 'Thermal Melt Curve (Cooperative)', src: '', description: 'Sigmoidal CD signal vs temperature. Reads: baseline (folded), midpoint = Tm (melting temperature), upper baseline (unfolded). Steep sigmoid = cooperative two-state folding (good design). Shallow slope = non-cooperative or heterogeneous.' },
        { id: 'pm-assay-05', label: 'GuHCl / Urea Denaturation Curve', src: '', description: 'CD or fluorescence vs denaturant concentration. Sigmoidal transition. Midpoint [D]₅₀ = stability; steepness = m-value (cooperativity; related to ΔASA). Two-state = single clean sigmoid.' },
        { id: 'pm-assay-06', label: 'SEC-MALS Chromatogram — Monomer Peak', src: '', description: 'Single symmetrical peak eluting at volume consistent with monomer MW. MALS detector confirms exact MW. Broad or double peak = aggregation or oligomers. Early-eluting peak = aggregate.' },
        { id: 'pm-assay-07', label: 'HSQC Spectrum — Well-Folded', src: '', description: '¹H-¹⁵N HSQC: each backbone amide gives one cross-peak. Well-folded protein: peaks are dispersed (wide ¹H chemical shift range, ~6–10 ppm). Unfolded/molten: peaks cluster near 8.0–8.5 ppm.' },
        { id: 'pm-assay-08', label: 'Energy Landscape / Funnel Plot', src: '', description: 'X-axis: RMSD to native; Y-axis: energy. Funnel-shaped: energy decreases monotonically toward native (RMSD = 0). Non-funneled/frustrated: multiple local minima, no clear funnel. Funnel shape = successful Koga design.' },
      ]
    },
    {
      category: 'NMR Ensemble & Structural Analysis',
      cards: [
        { id: 'pm-nmr-01', label: 'NMR Ensemble — Multiple Models', src: '', description: 'PDB NMR entries contain many structural models (e.g., 20 models). Toggling between models: regions where backbone traces overlap closely = rigid/well-ordered; regions that diverge widely = flexible/disordered (often loops).' },
        { id: 'pm-nmr-02', label: 'Rigid Regions in NMR Ensemble', src: '', description: 'Secondary structure elements (helices and strands) show closely superimposed backbone positions across all models. The regular H-bonding network constrains these regions, reducing conformational freedom.' },
        { id: 'pm-nmr-03', label: 'Flexible Loops in NMR Ensemble', src: '', description: 'Loop/coil regions spread into a "frayed" or "broom" appearance — backbone deviates significantly between models. No persistent H-bonds → high conformational entropy → poor restraint count in NOE-based NMR.' },
        { id: 'pm-nmr-04', label: 'PDB ATOM Record Reading', src: '', description: 'Columns: record type, serial, atom name, res name, chain, res seq #, x, y, z, occupancy, B-factor. Multiple MODEL records = NMR ensemble. HETATM = ligand/water. B-factor ∝ local mobility (high B = flexible).' },
        { id: 'pm-nmr-05', label: 'AlphaFold pLDDT Confidence Coloring', src: '', description: 'Blue (pLDDT > 90) = very high confidence; cyan (70–90) = confident; yellow (50–70) = low confidence; orange/red (<50) = very low (likely disordered). pLDDT correlates with local structural ordering, not just sequence similarity.' },
      ]
    },
  ],
};
