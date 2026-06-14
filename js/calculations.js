/* ============================================================
   calculations.js — All interactive calculation modules
   ============================================================ */

'use strict';

/* ── Utility ─────────────────────────────────────────── */
const rnd = (min, max, dp = 0) => {
  const v = Math.random() * (max - min) + min;
  return dp === 0 ? Math.round(v) : parseFloat(v.toFixed(dp));
};
const choice = arr => arr[Math.floor(Math.random() * arr.length)];
const fmt = (n, dp = 4) => parseFloat(n.toFixed(dp));
const pct = n => (n * 100).toFixed(1) + '%';
const approxEq = (a, b, tol = 0.05) => Math.abs(a - b) <= tol;

/* ── Codon table ─────────────────────────────────────── */
const CODON_TABLE = {
  UUU:'Phe', UUC:'Phe', UUA:'Leu', UUG:'Leu',
  CUU:'Leu', CUC:'Leu', CUA:'Leu', CUG:'Leu',
  AUU:'Ile', AUC:'Ile', AUA:'Ile', AUG:'Met',
  GUU:'Val', GUC:'Val', GUA:'Val', GUG:'Val',
  UCU:'Ser', UCC:'Ser', UCA:'Ser', UCG:'Ser',
  CCU:'Pro', CCC:'Pro', CCA:'Pro', CCG:'Pro',
  ACU:'Thr', ACC:'Thr', ACA:'Thr', ACG:'Thr',
  GCU:'Ala', GCC:'Ala', GCA:'Ala', GCG:'Ala',
  UAU:'Tyr', UAC:'Tyr', UAA:'Stop', UAG:'Stop',
  CAU:'His', CAC:'His', CAA:'Gln', CAG:'Gln',
  AAU:'Asn', AAC:'Asn', AAA:'Lys', AAG:'Lys',
  GAU:'Asp', GAC:'Asp', GAA:'Glu', GAG:'Glu',
  UGU:'Cys', UGC:'Cys', UGA:'Stop', UGG:'Trp',
  CGU:'Arg', CGC:'Arg', CGA:'Arg', CGG:'Arg',
  AGU:'Ser', AGC:'Ser', AGA:'Arg', AGG:'Arg',
  GGU:'Gly', GGC:'Gly', GGA:'Gly', GGG:'Gly'
};

function translateMRNA(seq) {
  const codons = seq.match(/.{1,3}/g) || [];
  const aas = [];
  for (const c of codons) {
    const aa = CODON_TABLE[c];
    if (!aa) break;
    if (aa === 'Stop') break;
    aas.push(aa);
  }
  return aas;
}

/* ── Amino acid categories (for missense classification) */
const AA_CATEGORY = {
  Gly:'nonpolar', Ala:'nonpolar', Val:'nonpolar', Leu:'nonpolar',
  Ile:'nonpolar', Pro:'nonpolar', Phe:'nonpolar', Met:'nonpolar', Trp:'nonpolar',
  Ser:'polar', Thr:'polar', Cys:'polar', Tyr:'polar', Asn:'polar', Gln:'polar',
  Asp:'acidic', Glu:'acidic',
  Lys:'basic', Arg:'basic', His:'basic'
};

/* ── Random DNA sequence generator ──────────────────── */
const BASES = ['A','T','G','C'];
const RNA_BASES = ['A','U','G','C'];

function randomCodon(excludeStop = true) {
  const stops = ['TAA','TAG','TGA'];
  let codon;
  do {
    codon = BASES[rnd(0,3)] + BASES[rnd(0,3)] + BASES[rnd(0,3)];
  } while (excludeStop && stops.includes(codon));
  return codon;
}

function randomCodingStrand(numCodons = 4) {
  // Starts with ATG, ends with stop codon
  const codons = ['ATG'];
  for (let i = 0; i < numCodons - 1; i++) codons.push(randomCodon(true));
  codons.push(choice(['TAA','TAG','TGA']));
  return codons.join(' ');
}

function dnaToMRNA(dna) {
  return dna.replace(/T/g, 'U');
}

/* ======================================================
   MODULE DEFINITIONS
   Each module has:
     id, title, event, section, generate()
   generate() returns:
     { params, problem, question, answer, tolerance, steps, refProblem, formula, extras }
   ====================================================== */

const CALC_MODULES = [

  /* ── Designer Genes ── */

  // 1. Hardy–Weinberg Equilibrium
  {
    id: 'hwe',
    title: 'Hardy–Weinberg Equilibrium',
    event: 'desgen',
    section: '§3.1',
    formula: 'p + q = 1\np² + 2pq + q² = 1\nq = √(affected freq)\ncarriers = 2pq',
    refProblem: 'From §3.1: 1 in 10,000 people has a recessive disorder. q² = 0.0001 → q = 0.01, p = 0.99, carriers = 2pq = 0.0198 ≈ 1 in 50.',
    generate() {
      // Random q² (affected frequency)
      const templates = [
        { q2: 0.01, pop: 10000 },
        { q2: 0.04, pop: 5000 },
        { q2: 0.0025, pop: 40000 },
        { q2: 0.0064, pop: 25000 },
        { q2: 0.0016, pop: 50000 },
        { q2: 0.09, pop: 2000 },
      ];
      const t = choice(templates);
      const q2 = t.q2;
      const N = t.pop;
      const q = Math.sqrt(q2);
      const p = 1 - q;
      const carriers2pq = 2 * p * q;
      const carrierN = Math.round(carriers2pq * N);

      const askType = choice(['carrier_freq', 'p_freq', 'expected_carriers', 'aa_freq']);
      let question, answer, tolerance;

      if (askType === 'carrier_freq') {
        question = `What is the carrier (heterozygote) frequency in this population?`;
        answer = fmt(carriers2pq, 4);
        tolerance = 0.003;
      } else if (askType === 'p_freq') {
        question = `What is the frequency of the dominant allele (p)?`;
        answer = fmt(p, 4);
        tolerance = 0.002;
      } else if (askType === 'expected_carriers') {
        question = `How many individuals in the population are expected to be carriers?`;
        answer = carrierN;
        tolerance = N * 0.01;
      } else {
        question = `What fraction of the population is homozygous dominant (AA)?`;
        answer = fmt(p * p, 4);
        tolerance = 0.003;
      }

      const problem = `In a population of ${N.toLocaleString()} individuals, the frequency of a recessive autosomal disorder is ${q2} (${q2 * 100}%). Assume the population is in Hardy–Weinberg equilibrium.`;

      const steps = [
        {
          label: 'Identify q²',
          calc: `q² = ${q2} (affected frequency)`,
          result: `q² = ${q2}`
        },
        {
          label: 'Solve for q (recessive allele frequency)',
          calc: `q = √${q2} = √(${q2}) = ${fmt(q, 4)}`,
          result: `q = ${fmt(q, 4)}`
        },
        {
          label: 'Solve for p (dominant allele frequency)',
          calc: `p = 1 − q = 1 − ${fmt(q, 4)} = ${fmt(p, 4)}`,
          result: `p = ${fmt(p, 4)}`
        },
        {
          label: 'Carrier frequency (2pq)',
          calc: `2pq = 2 × ${fmt(p, 4)} × ${fmt(q, 4)} = ${fmt(carriers2pq, 4)}`,
          result: `Carriers = ${pct(carriers2pq)} of the population`
        },
        {
          label: 'Homozygous dominant (p²)',
          calc: `p² = (${fmt(p, 4)})² = ${fmt(p * p, 4)}`,
          result: `AA frequency = ${pct(p * p)}`
        },
        {
          label: 'Expected carriers in population',
          calc: `${fmt(carriers2pq, 4)} × ${N.toLocaleString()} = ${carrierN.toLocaleString()} individuals`,
          result: `≈ ${carrierN.toLocaleString()} carriers`
        }
      ];

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 2. Chi-Square Goodness-of-Fit
  {
    id: 'chi-square',
    title: 'Chi-Square Test',
    event: 'desgen',
    section: '§3.2',
    formula: 'χ² = Σ [(O − E)² / E]\ndf = classes − 1 (for crosses)\ndf = 1 (for HWE test)\nCritical values (α=0.05): df1=3.84, df2=5.99, df3=7.81',
    refProblem: 'From §3.2: Observed 320 purple, 80 white (N=400), expected 3:1. χ² = (320−300)²/300 + (80−100)²/100 = 1.33 + 4.00 = 5.33. df=1, critical=3.84 → REJECT the 3:1 hypothesis.',
    generate() {
      const ratios = [
        { name: '3:1 (monohybrid)', parts: [3, 1], classes: 2 },
        { name: '9:3:3:1 (dihybrid)', parts: [9, 3, 3, 1], classes: 4 },
        { name: '1:2:1 (incomplete dominance)', parts: [1, 2, 1], classes: 3 },
        { name: '1:1 (test cross)', parts: [1, 1], classes: 2 },
      ];
      const ratio = choice(ratios);
      const N = rnd(200, 800);
      const total_parts = ratio.parts.reduce((a, b) => a + b, 0);
      const expected = ratio.parts.map(p => (p / total_parts) * N);

      // Decide: significantly deviate or not?
      const deviate = Math.random() < 0.5;
      const observed = expected.map(e => {
        if (deviate) {
          // Add a systematic bias
          const bias = choice([-1, 1]) * rnd(5, 20);
          return Math.max(0, Math.round(e + bias));
        }
        return Math.round(e + rnd(-8, 8));
      });

      // Recalculate total and normalize
      const obsTotal = observed.reduce((a, b) => a + b, 0);

      const chiSq = observed.reduce((sum, o, i) => {
        const e = expected[i];
        return sum + (e > 0 ? (o - e) * (o - e) / e : 0);
      }, 0);

      const df = ratio.classes - 1;
      const criticals = { 1: 3.84, 2: 5.99, 3: 7.81, 4: 9.49 };
      const critical = criticals[df];
      const reject = chiSq > critical;

      const answer = fmt(chiSq, 2);
      const tolerance = 0.5;

      const labels = ['Phenotype 1', 'Phenotype 2', 'Phenotype 3', 'Phenotype 4'];
      const obsStr = observed.map((o, i) => `${labels[i]}: ${o}`).join(', ');
      const expStr = expected.map((e, i) => `${labels[i]}: ${e.toFixed(1)}`).join(', ');

      const problem = `A cross is expected to produce offspring in a ${ratio.name} ratio. You observe the following in ${obsTotal} total offspring: ${obsStr}. Test the hypothesis that these data fit the expected ratio (α = 0.05).`;
      const question = `Calculate χ² and determine if you reject the null hypothesis. (Enter just the χ² value)`;

      const steps = [
        {
          label: 'State the hypotheses',
          calc: `H₀: Observed data fit the ${ratio.name} ratio\nH₁: Observed data do NOT fit`,
          result: ''
        },
        {
          label: 'Calculate expected counts',
          calc: expStr,
          result: `Total N = ${obsTotal}`
        },
        ...observed.map((o, i) => ({
          label: `Calculate (O−E)²/E for class ${i + 1}`,
          calc: `(${o} − ${expected[i].toFixed(1)})² / ${expected[i].toFixed(1)} = ${expected[i] > 0 ? (((o - expected[i]) ** 2) / expected[i]).toFixed(3) : 0}`,
          result: ''
        })),
        {
          label: 'Sum all (O−E)²/E values',
          calc: `χ² = ${fmt(chiSq, 3)}`,
          result: `χ² = ${fmt(chiSq, 3)}`
        },
        {
          label: 'Compare to critical value',
          calc: `df = ${ratio.classes} − 1 = ${df}\nCritical value (α=0.05, df=${df}) = ${critical}\nχ² = ${fmt(chiSq, 3)} ${reject ? '>' : '≤'} ${critical}`,
          result: reject
            ? `REJECT H₀ — data do NOT fit the ${ratio.name} ratio (p < 0.05)`
            : `FAIL TO REJECT H₀ — data are consistent with the ${ratio.name} ratio (p > 0.05)`
        }
      ];

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 3. Monohybrid / Dihybrid Punnett Square
  {
    id: 'punnett',
    title: 'Punnett Square & Probability',
    event: 'desgen',
    section: '§1.4',
    formula: 'Monohybrid Aa×Aa: 1AA:2Aa:1aa → 3:1 phenotype\nDihybrid AaBb×AaBb: 9:3:3:1\nProduct rule: P(A and B) = P(A) × P(B)\nTest cross (×aa): 1:1; (×aabb): 1:1:1:1',
    refProblem: 'From §1.4: AaBb × AaBb → 9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb. P(A_B_) = (3/4)(3/4) = 9/16.',
    generate() {
      const crossTypes = [
        {
          name: 'Aa × Aa (monohybrid)',
          ask: choice(['P(AA)', 'P(Aa)', 'P(aa)', 'P(dominant phenotype)']),
          calc(ask) {
            const answers = { 'P(AA)': '0.25', 'P(Aa)': '0.50', 'P(aa)': '0.25', 'P(dominant phenotype)': '0.75' };
            const steps = {
              'P(AA)': [
                { label: 'Gametes from Aa parent', calc: 'A (½) and a (½)', result: '' },
                { label: 'Probability of AA', calc: 'P(A from parent 1) × P(A from parent 2) = ½ × ½ = ¼', result: 'P(AA) = 0.25' }
              ],
              'P(Aa)': [
                { label: 'Gametes from Aa parent', calc: 'A (½) and a (½)', result: '' },
                { label: 'Two ways to be heterozygous', calc: 'P(Aa) = P(Aa from cross 1) + P(aA from cross 2) = ½×½ + ½×½ = ½', result: 'P(Aa) = 0.50' }
              ],
              'P(aa)': [
                { label: 'Gametes from Aa parent', calc: 'A (½) and a (½)', result: '' },
                { label: 'Probability of aa', calc: 'P(a from parent 1) × P(a from parent 2) = ½ × ½ = ¼', result: 'P(aa) = 0.25' }
              ],
              'P(dominant phenotype)': [
                { label: 'All non-aa genotypes show dominant phenotype', calc: 'P(AA) + P(Aa) = ¼ + ½ = ¾', result: 'P(dominant) = 0.75 = 3/4' }
              ]
            };
            return { answer: answers[ask], steps: steps[ask] };
          }
        },
        {
          name: 'AaBb × AaBb (dihybrid)',
          ask: choice(['P(A_B_)', 'P(aabb)', 'P(A_bb)', 'P(aaB_)']),
          calc(ask) {
            const answers = { 'P(A_B_)': '0.5625', 'P(aabb)': '0.0625', 'P(A_bb)': '0.1875', 'P(aaB_)': '0.1875' };
            const steps = {
              'P(A_B_)': [
                { label: 'Use product rule: genes assort independently', calc: 'P(A_) = 3/4; P(B_) = 3/4', result: '' },
                { label: 'Multiply', calc: 'P(A_B_) = 3/4 × 3/4 = 9/16 = 0.5625', result: 'P(A_B_) = 9/16 = 0.5625' }
              ],
              'P(aabb)': [
                { label: 'Product rule', calc: 'P(aa) = 1/4; P(bb) = 1/4', result: '' },
                { label: 'Multiply', calc: 'P(aabb) = 1/4 × 1/4 = 1/16 = 0.0625', result: 'P(aabb) = 1/16 = 0.0625' }
              ],
              'P(A_bb)': [
                { label: 'Product rule', calc: 'P(A_) = 3/4; P(bb) = 1/4', result: '' },
                { label: 'Multiply', calc: 'P(A_bb) = 3/4 × 1/4 = 3/16 = 0.1875', result: 'P(A_bb) = 3/16 = 0.1875' }
              ],
              'P(aaB_)': [
                { label: 'Product rule', calc: 'P(aa) = 1/4; P(B_) = 3/4', result: '' },
                { label: 'Multiply', calc: 'P(aaB_) = 1/4 × 3/4 = 3/16 = 0.1875', result: 'P(aaB_) = 3/16 = 0.1875' }
              ]
            };
            return { answer: answers[ask], steps: steps[ask] };
          }
        },
        {
          name: 'Aa × aa (test cross)',
          ask: choice(['P(Aa)', 'P(aa)']),
          calc(ask) {
            const answers = { 'P(Aa)': '0.5', 'P(aa)': '0.5' };
            const steps = {
              'P(Aa)': [
                { label: 'Gametes from Aa parent', calc: 'A (½) and a (½); aa parent gives only a', result: '' },
                { label: 'Only A × a = Aa', calc: 'P(Aa) = ½', result: 'P(Aa) = 0.5 (1:1 ratio in test cross)' }
              ],
              'P(aa)': [
                { label: 'Gametes from Aa parent', calc: 'A (½) and a (½)', result: '' },
                { label: 'Only a × a = aa', calc: 'P(aa) = ½', result: 'P(aa) = 0.5 (1:1 ratio in test cross)' }
              ]
            };
            return { answer: answers[ask], steps: steps[ask] };
          }
        }
      ];

      const cross = choice(crossTypes);
      const result = cross.calc(cross.ask);
      const problem = `Cross: ${cross.name}`;
      const question = `What is ${cross.ask}? (Enter a decimal, e.g. 0.75)`;

      return {
        problem,
        question,
        answer: result.answer,
        tolerance: 0.01,
        steps: result.steps
      };
    }
  },

  // 4. Heritability / Breeder's Equation
  {
    id: 'heritability',
    title: 'Heritability & Breeder\'s Equation',
    event: 'desgen',
    section: '§3.6',
    formula: 'R = h²S\nS = mean(selected parents) − pop mean\nR = mean(offspring) − original pop mean\nRealized h² = R / S\nBroad-sense H² = V_G / V_P\nNarrow-sense h² = V_A / V_P',
    refProblem: 'From §3.6: Pop mean tail length = 10 cm. Selected parents average 14 cm (S = 4). Offspring mean = 12 cm (R = 2). h² = R/S = 2/4 = 0.50.',
    generate() {
      const traits = ['tail length', 'wing span', 'beak depth', 'body weight', 'flower height', 'grain yield'];
      const units = ['cm', 'mm', 'mm', 'g', 'cm', 'g/plant'];
      const idx = rnd(0, traits.length - 1);
      const trait = traits[idx];
      const unit = units[idx];

      const popMean = rnd(10, 50);
      const h2 = parseFloat((rnd(20, 80) / 100).toFixed(2));  // 0.20 to 0.80
      const S = rnd(3, 12);
      const R = parseFloat((h2 * S).toFixed(2));
      const offMean = popMean + R;
      const selectedMean = popMean + S;

      const askType = choice(['find_h2', 'find_R', 'find_S', 'predict_R']);

      let problem, question, answer, tolerance, steps;

      if (askType === 'find_h2') {
        problem = `In a population of birds, the mean ${trait} is ${popMean} ${unit}. Breeders select only individuals with a mean ${trait} of ${selectedMean} ${unit} to reproduce. Their offspring have a mean ${trait} of ${offMean} ${unit}.`;
        question = `Calculate the realized narrow-sense heritability (h²) for ${trait}.`;
        answer = fmt(h2, 2);
        tolerance = 0.03;
        steps = [
          { label: 'Calculate S (selection differential)', calc: `S = selected mean − pop mean = ${selectedMean} − ${popMean} = ${S} ${unit}`, result: `S = ${S} ${unit}` },
          { label: 'Calculate R (response to selection)', calc: `R = offspring mean − original pop mean = ${offMean} − ${popMean} = ${R} ${unit}`, result: `R = ${R} ${unit}` },
          { label: 'Calculate realized h²', calc: `h² = R / S = ${R} / ${S} = ${fmt(h2, 2)}`, result: `h² = ${fmt(h2, 2)}` }
        ];
      } else if (askType === 'find_R') {
        problem = `A population has a mean ${trait} of ${popMean} ${unit}. Narrow-sense heritability h² = ${h2}. Breeders select individuals with a mean ${trait} of ${selectedMean} ${unit}.`;
        question = `Predict the response to selection (R) — how much will the offspring mean change?`;
        answer = fmt(R, 2);
        tolerance = 0.1;
        steps = [
          { label: 'Calculate S', calc: `S = ${selectedMean} − ${popMean} = ${S} ${unit}`, result: `S = ${S} ${unit}` },
          { label: 'Apply breeder\'s equation: R = h²S', calc: `R = ${h2} × ${S} = ${fmt(R, 2)} ${unit}`, result: `R = ${fmt(R, 2)} ${unit}` },
          { label: 'Offspring mean', calc: `Offspring mean = ${popMean} + ${fmt(R, 2)} = ${offMean} ${unit}`, result: `Expected offspring mean = ${offMean} ${unit}` }
        ];
      } else {
        // find h2 but with V_P and V_G given
        const VP = rnd(10, 40);
        const VA = parseFloat((h2 * VP).toFixed(1));
        const VG = parseFloat((VA + rnd(1, 5)).toFixed(1));
        problem = `For a polygenic trait, the following variance components have been estimated:\nTotal phenotypic variance (V_P) = ${VP}\nAdditive genetic variance (V_A) = ${VA}\nTotal genetic variance (V_G) = ${VG}`;
        question = `What is the narrow-sense heritability (h²)?`;
        answer = fmt(VA / VP, 2);
        tolerance = 0.03;
        steps = [
          { label: 'Narrow-sense h² definition', calc: 'h² = V_A / V_P', result: '' },
          { label: 'Substitute values', calc: `h² = ${VA} / ${VP} = ${fmt(VA / VP, 3)}`, result: `h² = ${fmt(VA / VP, 2)}` }
        ];
      }

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 5. Gene Mapping (2-gene RF)
  {
    id: 'gene-mapping',
    title: 'Gene Mapping — Recombination Frequency',
    event: 'desgen',
    section: '§3.7',
    formula: 'RF = recombinants / total × 100%\n1% RF = 1 centimorgan (cM) = 1 map unit\nRF = 50% → independent assortment',
    refProblem: 'From §9.1 (three-point cross): v–gl interval: (40+48+11)/726 × 100 = 13.6 cM. gl–va interval: (62+60+11)/726 × 100 = 18.3 cM.',
    generate() {
      const geneNames = [
        ['A', 'B'], ['b', 'pr'], ['vg', 'b'], ['cn', 'vg'], ['w', 'rb'],
        ['v', 'gl'], ['y', 'w'], ['m', 'r']
      ];
      const genes = choice(geneNames);
      const [g1, g2] = genes;

      const trueRF = rnd(5, 45);  // map distance in cM
      const totalN = rnd(400, 1200);
      const recombinants = Math.round((trueRF / 100) * totalN);
      const parentals = totalN - recombinants;

      // Add small noise to look like real data
      const obsRec = recombinants + rnd(-10, 10);
      const obsTotal = totalN;
      const obsRF = (obsRec / obsTotal) * 100;

      const askType = choice(['calc_RF', 'interpret_linked']);

      let problem, question, answer, tolerance, steps;

      if (askType === 'calc_RF') {
        problem = `A test cross of a dihybrid (${g1}${g2} / ${g1.toLowerCase()}${g2.toLowerCase()}) × (${g1.toLowerCase()}${g2.toLowerCase()} / ${g1.toLowerCase()}${g2.toLowerCase()}) produced ${obsTotal} offspring: ${parentals} parental-type offspring and ${obsRec} recombinant-type offspring.`;
        question = `Calculate the recombination frequency (RF) and the map distance between the two genes.`;
        answer = fmt(obsRF, 1);
        tolerance = 1.5;
        steps = [
          { label: 'Identify recombinant offspring', calc: `Recombinants = ${obsRec}`, result: '' },
          { label: 'Calculate RF', calc: `RF = ${obsRec} / ${obsTotal} × 100 = ${fmt(obsRF, 2)}%`, result: `RF = ${fmt(obsRF, 1)}%` },
          { label: 'Convert to map distance', calc: `1% RF = 1 cM → map distance = ${fmt(obsRF, 1)} cM`, result: `Map distance = ${fmt(obsRF, 1)} cM` },
          { label: 'Assess linkage', calc: obsRF < 50 ? `RF < 50% → genes are LINKED on the same chromosome` : `RF ≈ 50% → genes assort independently (unlinked)`, result: '' }
        ];
      } else {
        problem = `Two genes in corn are ${trueRF} cM apart. A dihybrid plant (AB/ab, cis configuration) is test-crossed to a double recessive (ab/ab). 500 offspring are produced.`;
        question = `How many recombinant offspring are expected?`;
        const expected = Math.round((trueRF / 100) * 500);
        answer = expected;
        tolerance = 15;
        steps = [
          { label: 'Recombination frequency', calc: `RF = ${trueRF} cM / 100 = ${trueRF / 100}`, result: `RF = ${trueRF / 100}` },
          { label: 'Expected recombinants', calc: `${trueRF / 100} × 500 = ${expected}`, result: `Expected recombinants ≈ ${expected}` }
        ];
      }

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 6. Sequence → Protein Translation
  {
    id: 'translation',
    title: 'Sequence → Protein Translation',
    event: 'desgen',
    section: '§8.3',
    formula: 'DNA coding strand → mRNA (T→U)\nTranslate codons 5\'→3\'\nStart: AUG (Met); Stop: UAA, UAG, UGA\nSilent = same aa; Missense = diff aa\nNonsense = premature stop; Frameshift = indel not ×3',
    refProblem: 'From §8.3: 5\'-ATG GAG CCT AAG TGA-3\' → mRNA: AUG GAG CCU AAG UGA → Met–Glu–Pro–Lys (stop). If GAG→GUG (codon 2): Val instead of Glu → missense, non-conservative (sickle-cell mutation).',
    generate() {
      const tasks = [
        // Task: translate a given sequence
        {
          type: 'translate',
          gen() {
            const nCodons = rnd(3, 5);
            const dnaForward = randomCodingStrand(nCodons);
            const mrna = dnaToMRNA(dnaForward.replace(/\s/g, ''));
            const codons = mrna.match(/.{1,3}/g) || [];
            const protein = translateMRNA(mrna);
            const answer = protein.join('–');
            const problem = `Given the DNA coding (sense) strand:\n5\'–${dnaForward}–3\'\n\nFirst, write the mRNA sequence, then translate to protein using the codon table.`;
            const question = `What is the amino acid sequence? (Enter as e.g. Met–Glu–Pro or just the amino acid names separated by dashes, no stop codon)`;
            const steps = [
              { label: 'Write the mRNA sequence', calc: `mRNA = ${dnaToMRNA(dnaForward)} (T→U)`, result: '' },
              { label: 'Split into codons', calc: codons.join(' | '), result: '' },
              { label: 'Translate each codon', calc: codons.map(c => `${c} = ${CODON_TABLE[c] || '?'}`).join('; '), result: '' },
              { label: 'Full protein (until stop)', calc: protein.join('–') + ' [stop]', result: `Protein: ${answer}` }
            ];
            return { problem, question, answer, tolerance: 0, steps };
          }
        },
        // Task: identify mutation type
        {
          type: 'mutation',
          gen() {
            const wtDNA = 'ATG GAG CCT AAG'; // Met-Glu-Pro-Lys (classic example)
            const mutations = [
              { desc: 'Change codon 2 from GAG → GTG', mutDNA: 'ATG GTG CCT AAG', type: 'missense, non-conservative', why: 'Glu (acidic) → Val (nonpolar) — different chemical class. This is the sickle-cell mutation.' },
              { desc: 'Change codon 3 from CCT → CCA', mutDNA: 'ATG GAG CCA AAG', type: 'silent (synonymous)', why: 'CCT = Pro, CCA = Pro — same amino acid due to wobble.' },
              { desc: 'Change codon 4 from AAG → UAG', mutDNA: 'ATG GAG CCT UAG', type: 'nonsense', why: 'UAG is a stop codon → premature termination after Pro.' },
              { desc: 'Delete the first nucleotide of codon 2', mutDNA: 'ATG AGC CTA AGT', type: 'frameshift', why: 'Deleting 1 nucleotide (not a multiple of 3) shifts the reading frame downstream.' },
            ];
            const mut = choice(mutations);
            const mrnaWT = dnaToMRNA(wtDNA.replace(/\s/g, ''));
            const mrnaMut = dnaToMRNA(mut.mutDNA.replace(/\s/g, ''));
            const problem = `Wild-type DNA coding strand: 5\'–${wtDNA}–3\'\n\nMutation: ${mut.desc}\nMutant DNA coding strand: 5\'–${mut.mutDNA}–3\'`;
            const question = `Classify this mutation (silent/missense/nonsense/frameshift) and explain its impact.`;
            const answer = mut.type;
            const steps = [
              { label: 'Wild-type mRNA', calc: mrnaWT.match(/.{1,3}/g).join(' '), result: '' },
              { label: 'Mutant mRNA', calc: mrnaMut.match(/.{1,3}/g).join(' '), result: '' },
              { label: 'Compare translations', calc: `WT: ${translateMRNA(mrnaWT).join('–')}\nMut: ${translateMRNA(mrnaMut).join('–')}`, result: '' },
              { label: 'Classify', calc: mut.why, result: `Classification: ${mut.type}` }
            ];
            return { problem, question, answer: mut.type.split(',')[0].split(' ')[0], tolerance: 0, steps };
          }
        }
      ];

      const task = choice(tasks);
      const result = task.gen();
      return result;
    }
  },

  // 7. Bayesian Carrier Risk (§10.3)
  {
    id: 'bayesian-carrier',
    title: 'Bayesian Carrier Risk',
    event: 'desgen',
    section: '§10.3',
    formula: 'Prior: unaffected child of Aa×Aa parents → P(AA)=1/3, P(Aa)=2/3\nBayes: P(carrier|data) ∝ P(prior) × P(data|hypothesis)\nIf husband is also a carrier (Aa×Aa):\nP(unaffected child|both Aa) = 3/4',
    refProblem: 'From §10.3: Prior P(carrier)=2/3. One unaffected child; husband is a known carrier. P(carrier|1 unaffected child) = (2/3)(3/4) : (1/3)(1) = 1/2 : 1/3 → 3/5 carrier; 2/5 AA.',
    generate() {
      // Number of unaffected children with carrier husband
      const nChildren = rnd(1, 3);
      const priorCarrier = 2 / 3;
      const priorAA = 1 / 3;

      // With carrier husband: P(unaffected | Aa×Aa) = 3/4 each
      const likelihoodCarrier = Math.pow(3 / 4, nChildren);
      const likelihoodAA = 1; // AA × carrier → all unaffected

      const rawCarrier = priorCarrier * likelihoodCarrier;
      const rawAA = priorAA * likelihoodAA;
      const total = rawCarrier + rawAA;
      const posteriorCarrier = rawCarrier / total;

      const answer = fmt(posteriorCarrier, 3);
      const tolerance = 0.03;

      const problem = `An unaffected woman's parents are both carriers (Aa × Aa) of an autosomal recessive disease. She is unaffected. She has ${nChildren} unaffected child${nChildren > 1 ? 'ren' : ''} with a man who is a known carrier (Aa).`;
      const question = `Using Bayesian reasoning, what is the probability the woman is a carrier (Aa)?`;

      const steps = [
        {
          label: 'Establish prior probabilities',
          calc: `The woman is unaffected, with carrier parents.\nOf unaffected offspring from Aa×Aa: P(AA) = 1/3, P(Aa) = 2/3`,
          result: `Prior: P(carrier) = 2/3, P(AA) = 1/3`
        },
        {
          label: `Likelihood of ${nChildren} unaffected child${nChildren > 1 ? 'ren' : ''} given each hypothesis`,
          calc: `If she is Aa (×Aa husband): P(each child unaffected) = 3/4\nP(${nChildren} unaffected | Aa) = (3/4)^${nChildren} = ${fmt(likelihoodCarrier, 4)}\nIf she is AA (×Aa husband): P(each child unaffected) = 1\nP(${nChildren} unaffected | AA) = 1`,
          result: ''
        },
        {
          label: 'Compute unnormalized posteriors',
          calc: `Carrier: (2/3) × ${fmt(likelihoodCarrier, 4)} = ${fmt(rawCarrier, 4)}\nAA: (1/3) × 1 = ${fmt(rawAA, 4)}`,
          result: ''
        },
        {
          label: 'Normalize to get posterior probabilities',
          calc: `Total = ${fmt(rawCarrier, 4)} + ${fmt(rawAA, 4)} = ${fmt(total, 4)}\nP(carrier | data) = ${fmt(rawCarrier, 4)} / ${fmt(total, 4)} = ${fmt(posteriorCarrier, 3)}`,
          result: `P(carrier) = ${fmt(posteriorCarrier, 3)} ≈ ${(posteriorCarrier * 100).toFixed(1)}%`
        }
      ];

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 8. Mutation-Selection Balance / Heterozygote Advantage
  {
    id: 'mutation-selection',
    title: 'Mutation-Selection Balance & Heterozygote Advantage',
    event: 'desgen',
    section: '§10.11',
    formula: 'Recessive lethal: q̂ = √(μ/s)\nDominant: q̂ ≈ μ/(hs)\nHeterozygote advantage equilibrium:\nq̂ = s₁/(s₁+s₂), p̂ = s₂/(s₁+s₂)',
    refProblem: 'From §10.11: s₁=0.2 (against HbAA), s₂=0.8 (against HbSS). Equilibrium q̂ = 0.2/(0.2+0.8) = 0.20 → 20% HbS allele.',
    generate() {
      const type = choice(['het_advantage', 'mut_sel_recessive']);

      if (type === 'het_advantage') {
        const s1 = parseFloat((rnd(10, 40) / 100).toFixed(2));
        const s2 = parseFloat((rnd(40, 90) / 100).toFixed(2));
        const qHat = s1 / (s1 + s2);
        const pHat = s2 / (s1 + s2);

        const problem = `In a malarial region, three genotypes have the following relative fitnesses:\n- HbA/HbA: fitness = ${fmt(1 - s1, 2)} (s₁ = ${s1}, susceptible to malaria)\n- HbA/HbS: fitness = 1.00 (heterozygote advantage — resistant to malaria, no sickle-cell disease)\n- HbS/HbS: fitness = ${fmt(1 - s2, 2)} (s₂ = ${s2}, sickle-cell disease)`;
        const question = `What is the equilibrium frequency of the HbS allele (q̂)?`;
        const answer = fmt(qHat, 3);
        const tolerance = 0.02;

        const steps = [
          { label: 'Identify selection coefficients', calc: `s₁ (against HbA/HbA) = ${s1}\ns₂ (against HbS/HbS) = ${s2}`, result: '' },
          { label: 'Apply heterozygote advantage equilibrium formula', calc: `q̂ = s₁ / (s₁ + s₂) = ${s1} / (${s1} + ${s2}) = ${s1} / ${fmt(s1 + s2, 2)}`, result: `q̂ = ${fmt(qHat, 3)}` },
          { label: 'Verify p̂', calc: `p̂ = s₂ / (s₁ + s₂) = ${s2} / ${fmt(s1 + s2, 2)} = ${fmt(pHat, 3)}\np̂ + q̂ = ${fmt(pHat, 3)} + ${fmt(qHat, 3)} = ${fmt(pHat + qHat, 3)} ✓`, result: '' }
        ];

        return { problem, question, answer, tolerance, steps };
      } else {
        // Mutation-selection balance for a recessive allele
        const mu = parseFloat((rnd(1, 10) * 1e-5).toExponential(2));
        const s = parseFloat((rnd(20, 100) / 100).toFixed(2));
        const qHat = Math.sqrt(mu / s);

        const problem = `A recessive lethal allele (s = ${s}) is maintained at mutation-selection balance. The mutation rate μ = ${mu} per gene per generation.`;
        const question = `What is the expected equilibrium frequency of the deleterious allele (q̂)?`;
        const answer = fmt(qHat, 5);
        const tolerance = qHat * 0.1;

        const steps = [
          { label: 'Formula for completely recessive allele at mutation-selection balance', calc: 'q̂ = √(μ/s)', result: '' },
          { label: 'Substitute values', calc: `q̂ = √(${mu} / ${s}) = √${fmt(mu / s, 8)} = ${fmt(qHat, 5)}`, result: `q̂ = ${fmt(qHat, 5)}` },
          { label: 'Interpretation', calc: `Even under strong selection (s=${s}), the recessive allele persists at q̂ ≈ ${fmt(qHat * 100, 2)}% because it hides in heterozygotes where selection cannot act on it.`, result: '' }
        ];

        return { problem, question, answer, tolerance, steps };
      }
    }
  },

  /* ── Forensics ── */

  // 9. PMI Calculation (Entomology)
  {
    id: 'pmi-entomology',
    title: 'PMI Calculation — Entomology',
    event: 'forensics',
    section: '§6',
    formula: 'Lucilia sericata:\nK ≈ 6023 degree-hours (egg→adult)\nT_base ≈ 9.1°C\nDevelopment time = K ÷ (T_ambient − T_base)\nmPMI = minimum post-mortem interval',
    refProblem: 'From §6: At 25°C: 6023 ÷ (25−9.1) = 6023 ÷ 15.9 = 379 hours ≈ 15.8 days. At 22°C: 6023 ÷ 12.9 = 467 hours ≈ 19 days.',
    generate() {
      const K = 6023;
      const T_base = 9.1;
      const temps = [20, 21, 22, 23, 24, 25, 26, 27, 28, 30];
      const T = choice(temps);
      const DD = T - T_base;
      const hours = K / DD;
      const days = hours / 24;

      const askType = choice(['time_to_adult', 'temp_from_time', 'days_to_adult']);

      let problem, question, answer, tolerance, steps;

      if (askType === 'days_to_adult') {
        problem = `A forensic entomologist finds blow fly eggs (Lucilia sericata) on a body. The ambient temperature is ${T}°C and remains approximately constant. (K = 6023 degree-hours; T_base = 9.1°C)`;
        question = `How many days will egg-to-adult development take at this temperature?`;
        answer = fmt(days, 1);
        tolerance = 0.5;
        steps = [
          { label: 'Calculate degree-hours above base temperature', calc: `T − T_base = ${T} − 9.1 = ${fmt(DD, 1)}°C above base`, result: `Effective temperature = ${fmt(DD, 1)}°C` },
          { label: 'Calculate development time in hours', calc: `Time = K / (T − T_base) = 6023 / ${fmt(DD, 1)} = ${fmt(hours, 1)} hours`, result: `Development time = ${fmt(hours, 1)} hours` },
          { label: 'Convert to days', calc: `${fmt(hours, 1)} hours ÷ 24 = ${fmt(days, 1)} days`, result: `mPMI ≈ ${fmt(days, 1)} days` },
          { label: 'Interpret', calc: `If eggs are found and are still at egg stage, the mPMI (minimum PMI) is less than ${fmt(hours, 0)} hours.`, result: '' }
        ];
      } else if (askType === 'temp_from_time') {
        const targetDays = rnd(10, 25);
        const targetHours = targetDays * 24;
        const reqTemp = (K / targetHours) + T_base;
        problem = `Third-instar larvae of Lucilia sericata are recovered from a body. Laboratory rearing establishes that egg-to-3rd-instar takes approximately ${fmt(K * 0.65 / (reqTemp - T_base), 0)} hours at the known constant ambient temperature. The mPMI is estimated as ${fmt(K * 0.65 / (reqTemp - T_base) / 24, 1)} days. Use K = 6023 degree-hours, T_base = 9.1°C.`;
        question = `What was the approximate ambient temperature at the scene?`;
        answer = fmt(reqTemp, 1);
        tolerance = 1.0;
        steps = [
          { label: 'Convert mPMI to hours', calc: `${fmt(K * 0.65 / (reqTemp - T_base) / 24, 1)} days × 24 = ${fmt(K * 0.65 / (reqTemp - T_base), 0)} hours`, result: '' },
          { label: 'Rearrange K formula', calc: 'T − T_base = K / time\nT = (K / time) + T_base', result: '' },
          { label: 'Substitute', calc: `T = (6023 / ${fmt(K * 0.65 / (reqTemp - T_base), 0)}) + 9.1 = ${fmt(K / (K * 0.65 / (reqTemp - T_base)), 2) + 9.1}`, result: `T ≈ ${fmt(reqTemp, 1)}°C` }
        ];
      } else {
        problem = `A blow fly (Lucilia sericata) specimen is found on a body at an average temperature of ${T}°C. (K = 6023 degree-hours; T_base = 9.1°C)`;
        question = `How many hours does egg-to-adult development require?`;
        answer = fmt(hours, 0);
        tolerance = 20;
        steps = [
          { label: 'Effective temperature', calc: `T − T_base = ${T} − 9.1 = ${fmt(DD, 1)}°C`, result: '' },
          { label: 'Calculate development time', calc: `K / (T − T_base) = 6023 / ${fmt(DD, 1)} = ${fmt(hours, 1)} hours`, result: `≈ ${fmt(hours, 0)} hours` }
        ];
      }

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 10. Rf Value Calculation
  {
    id: 'rf-value',
    title: 'Chromatography Rf Values',
    event: 'forensics',
    section: '§7',
    formula: 'Rf = distance from origin to spot center ÷ distance from origin to solvent front\nRf always 0–1\nHigher Rf = less polar analyte (on polar stationary phase)',
    refProblem: 'From §7: Solvent front = 6.0 cm. Spot at 1.8 cm → Rf = 1.8/6.0 = 0.30. Spot at 4.8 cm → Rf = 4.8/6.0 = 0.80.',
    generate() {
      const front = parseFloat((rnd(50, 95) / 10).toFixed(1)); // 5.0–9.5 cm
      const nSpots = rnd(2, 4);
      const spotDists = [];
      for (let i = 0; i < nSpots; i++) {
        let d;
        do { d = parseFloat((rnd(5, Math.round(front * 10) - 3) / 10).toFixed(1)); }
        while (spotDists.includes(d));
        spotDists.push(d);
      }
      spotDists.sort((a, b) => a - b);
      const rfs = spotDists.map(d => fmt(d / front, 2));

      const askIdx = rnd(0, nSpots - 1);
      const askDist = spotDists[askIdx];
      const askRf = rfs[askIdx];

      const compoundNames = ['caffeine', 'aspirin', 'acetaminophen', 'ibuprofen', 'codeine', 'morphine', 'unknown X'];
      const names = [];
      for (let i = 0; i < nSpots; i++) names.push(compoundNames[i % compoundNames.length]);

      const problem = `A thin-layer chromatography plate is developed with the solvent front at ${front} cm from the origin.\nSpots are found at: ${spotDists.map((d, i) => `${names[i]} at ${d} cm`).join('; ')}.`;
      const question = `What is the Rf value of ${names[askIdx]}?`;
      const answer = askRf;
      const tolerance = 0.03;

      const steps = [
        { label: 'Rf formula', calc: 'Rf = spot distance / solvent front distance', result: '' },
        { label: `Apply to ${names[askIdx]}`, calc: `Rf = ${askDist} cm / ${front} cm = ${fmt(askDist / front, 3)}`, result: `Rf = ${askRf}` },
        { label: 'All Rf values', calc: names.map((n, i) => `${n}: Rf = ${rfs[i]}`).join('\n'), result: '' },
        { label: 'Polarity interpretation', calc: `Higher Rf = less polar (moves further from origin with polar stationary phase)\nLowest Rf (${rfs[0]}) = most polar compound`, result: '' }
      ];

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 11. Medullary Index (Hair)
  {
    id: 'medullary-index',
    title: 'Medullary Index — Hair',
    event: 'forensics',
    section: '§4',
    formula: 'Medullary Index = medulla diameter / whole hair diameter\nHuman: MI < 1/3 (< 0.333)\nAnimal: MI ≥ 1/2 (≥ 0.500)',
    refProblem: 'From §4: Human MI < 1/3; Animal MI ≥ 1/2. These thresholds are the single most-tested hair concept.',
    generate() {
      const scenarios = [
        { species: 'human', medulla: rnd(8, 18), hair: rnd(65, 90) },
        { species: 'human', medulla: 0, hair: rnd(60, 80) },  // absent medulla
        { species: 'animal', medulla: rnd(35, 65), hair: rnd(70, 100) },
        { species: 'animal', medulla: rnd(30, 55), hair: rnd(60, 80) },
      ];
      const s = choice(scenarios);

      const mi = s.medulla === 0 ? 0 : fmt(s.medulla / s.hair, 3);
      const classification = typeof mi === 'number' && mi < 0.333 ? 'Human (MI < 1/3)' : 'Animal (MI ≥ 1/2)';

      const askType = choice(['calc_mi', 'classify']);

      let problem, question, answer, tolerance, steps;

      if (askType === 'calc_mi') {
        problem = `A hair specimen examined under the microscope shows:\n- Medulla diameter: ${s.medulla} μm\n- Total hair shaft diameter: ${s.hair} μm`;
        question = `Calculate the Medullary Index (MI).`;
        answer = mi;
        tolerance = 0.02;
        steps = [
          { label: 'MI formula', calc: 'MI = medulla diameter / total hair diameter', result: '' },
          { label: 'Substitute values', calc: `MI = ${s.medulla} / ${s.hair} = ${mi}`, result: `MI = ${mi}` },
          { label: 'Classify', calc: mi < 0.333 ? `MI = ${mi} < 1/3 (0.333) → Human origin (or absent)` : `MI = ${mi} ≥ 1/2 (0.500) → Animal origin`, result: `Classification: ${classification}` }
        ];
      } else {
        problem = `A hair specimen has a total diameter of ${s.hair} μm and a medullary diameter of ${s.medulla} μm.`;
        question = `Is this hair most likely of human or animal origin?`;
        answer = s.species === 'human' ? 'human' : 'animal';
        tolerance = 0;
        steps = [
          { label: 'Calculate MI', calc: `MI = ${s.medulla} / ${s.hair} = ${mi}`, result: `MI = ${mi}` },
          { label: 'Apply thresholds', calc: `Human: MI < 1/3 (0.333)\nAnimal: MI ≥ 1/2 (0.500)`, result: '' },
          { label: 'Classify', calc: mi < 0.333 ? `${mi} < 0.333 → Human (medulla absent/fragmented/amorphous)` : `${mi} ≥ 0.5 → Animal (thick, continuous medulla)`, result: `Classification: ${s.species.toUpperCase()}` }
        ];
      }

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 12. Snell's Law / Becke Line
  {
    id: 'snells-law',
    title: 'Becke Line & Snell\'s Law (Glass)',
    event: 'forensics',
    section: '§6',
    formula: 'Snell\'s Law: n₁ sin θ₁ = n₂ sin θ₂\nSpeed of light in medium: v = c / n (c = 3×10⁸ m/s)\nBecke line moves toward HIGHER-RI medium as objective is raised\nSoda-lime glass RI ≈ 1.51–1.52',
    refProblem: 'From §6: In oil n=1.515, Becke line moves into glass → glass RI > 1.515. In n=1.525, line moves into oil → glass RI < 1.525. At n=1.520, fragment disappears → glass RI ≈ 1.520 (soda-lime).',
    generate() {
      const type = choice(['becke', 'snells', 'speed']);

      if (type === 'becke') {
        const glassRI = parseFloat((1.51 + rnd(0, 15) / 100).toFixed(3));
        const oilRIs = [glassRI - 0.01, glassRI, glassRI + 0.01].map(n => parseFloat(n.toFixed(3)));

        const problem = `A glass fragment is placed in three immersion oils with refractive indices ${oilRIs[0]}, ${oilRIs[1]}, and ${oilRIs[2]}.\n\nIn oil n=${oilRIs[0]}: Becke line moves INTO THE GLASS as objective is raised.\nIn oil n=${oilRIs[2]}: Becke line moves INTO THE OIL as objective is raised.\nIn oil n=${oilRIs[1]}: Fragment nearly disappears.`;
        const question = `What is the approximate refractive index of the glass?`;
        const answer = glassRI;
        const tolerance = 0.005;
        const steps = [
          { label: 'Becke line rule', calc: 'As objective is RAISED, Becke line moves toward the HIGHER-RI medium.', result: '' },
          { label: `Oil n=${oilRIs[0]}: Becke line moves into glass`, calc: `→ glass RI > ${oilRIs[0]}`, result: '' },
          { label: `Oil n=${oilRIs[2]}: Becke line moves into oil`, calc: `→ glass RI < ${oilRIs[2]}`, result: '' },
          { label: `Oil n=${oilRIs[1]}: Fragment disappears`, calc: `→ glass RI ≈ oil RI = ${oilRIs[1]}`, result: `Glass RI ≈ ${glassRI}` },
          { label: 'Classification', calc: glassRI >= 1.51 && glassRI <= 1.52 ? `RI ${glassRI} → soda-lime glass (window/container type)` : `RI ${glassRI} → check against glass type reference table`, result: '' }
        ];
        return { problem, question, answer, tolerance, steps };
      }

      if (type === 'snells') {
        const n1 = parseFloat((1.00 + rnd(0, 30) / 100).toFixed(2));
        const n2 = parseFloat((1.40 + rnd(0, 20) / 100).toFixed(2));
        const theta1 = rnd(20, 60); // degrees
        const sinTheta2 = (n1 * Math.sin(theta1 * Math.PI / 180)) / n2;
        const theta2 = Math.asin(sinTheta2) * 180 / Math.PI;

        const problem = `A ray of light travels from a medium with n₁ = ${n1} and strikes a glass surface (n₂ = ${n2}) at an angle of incidence of ${theta1}° from the normal.`;
        const question = `Calculate the angle of refraction (θ₂) in degrees.`;
        const answer = fmt(theta2, 1);
        const tolerance = 1.5;
        const steps = [
          { label: 'Snell\'s Law', calc: `n₁ sin θ₁ = n₂ sin θ₂`, result: '' },
          { label: 'Rearrange for θ₂', calc: `sin θ₂ = (n₁ sin θ₁) / n₂`, result: '' },
          { label: 'Substitute', calc: `sin θ₂ = (${n1} × sin ${theta1}°) / ${n2} = (${n1} × ${fmt(Math.sin(theta1 * Math.PI / 180), 4)}) / ${n2} = ${fmt(sinTheta2, 4)}`, result: '' },
          { label: 'Solve for θ₂', calc: `θ₂ = arcsin(${fmt(sinTheta2, 4)}) = ${fmt(theta2, 1)}°`, result: `θ₂ = ${fmt(theta2, 1)}°` },
          { label: 'Interpretation', calc: n2 > n1 ? `Light travels from less dense (n=${n1}) to more dense (n=${n2}) medium → bends TOWARD the normal → θ₂ < θ₁` : `Light travels from more dense to less dense medium → bends AWAY from normal → θ₂ > θ₁`, result: '' }
        ];
        return { problem, question, answer, tolerance, steps };
      }

      // Speed of light in medium
      const n = parseFloat((1.0 + rnd(0, 80) / 100).toFixed(2));
      const c = 3e8;
      const v = c / n;

      const problem = `Light travels through a glass with refractive index n = ${n}.\n(Speed of light in vacuum: c = 3.00 × 10⁸ m/s)`;
      const question = `What is the speed of light in this glass?`;
      const answer = fmt(v / 1e8, 2) + ' × 10⁸';
      const tolerance = 0.1;
      const steps = [
        { label: 'Speed in medium formula', calc: 'v = c / n', result: '' },
        { label: 'Substitute', calc: `v = 3.00 × 10⁸ / ${n} = ${fmt(v / 1e8, 3)} × 10⁸ m/s`, result: `v = ${fmt(v / 1e8, 2)} × 10⁸ m/s` }
      ];
      return { problem, question: `What is the speed of light in this glass? (Express as x × 10⁸ m/s, give x)`, answer: fmt(v / 1e8, 2), tolerance: 0.05, steps };
    }
  },

  // 13. Molar Mass / Stoichiometry (15 Substances)
  {
    id: 'molar-mass',
    title: 'Molar Mass & Stoichiometry',
    event: 'forensics',
    section: '§1',
    formula: 'Molar mass = sum of atomic masses\nMoles = mass (g) ÷ molar mass (g/mol)\nAtomic masses: H=1, B=11, C=12, N=14, O=16, Na=23, Mg=24, Cl=35.5, K=39, Ca=40',
    refProblem: 'From §1: Boric acid H₃BO₃ = 3(1) + 11 + 3(16) = 3+11+48 = 62 g/mol.',
    generate() {
      const substances = [
        { name: 'sodium acetate', formula: 'CH₃COONa', mw: 82 },
        { name: 'sodium chloride', formula: 'NaCl', mw: 58.5 },
        { name: 'sodium hydrogen carbonate', formula: 'NaHCO₃', mw: 84 },
        { name: 'sodium carbonate', formula: 'Na₂CO₃', mw: 106 },
        { name: 'lithium chloride', formula: 'LiCl', mw: 42.5 },
        { name: 'potassium chloride', formula: 'KCl', mw: 74.5 },
        { name: 'calcium carbonate', formula: 'CaCO₃', mw: 100 },
        { name: 'magnesium sulfate', formula: 'MgSO₄', mw: 120 },
        { name: 'boric acid', formula: 'H₃BO₃', mw: 62 },
        { name: 'ammonium chloride', formula: 'NH₄Cl', mw: 53.5 },
        { name: 'glucose', formula: 'C₆H₁₂O₆', mw: 180 },
      ];

      const s = choice(substances);
      const askType = choice(['calc_molar_mass', 'calc_moles', 'calc_mass']);

      let problem, question, answer, tolerance, steps;

      if (askType === 'calc_molar_mass') {
        problem = `Calculate the molar mass of ${s.name} (${s.formula}).`;
        question = `What is the molar mass in g/mol?`;
        answer = s.mw;
        tolerance = 2;
        steps = [
          { label: 'Formula', calc: s.formula, result: '' },
          { label: 'Atomic masses', calc: 'H=1, B=11, C=12, N=14, O=16, Na=23, Mg=24, Cl=35.5, K=39, Ca=40', result: '' },
          { label: 'Add up', calc: `Molar mass of ${s.formula} = ${s.mw} g/mol`, result: `M = ${s.mw} g/mol` }
        ];
      } else if (askType === 'calc_moles') {
        const mass = choice([5, 10, 15, 20, 25, 50]);
        const moles = fmt(mass / s.mw, 4);
        problem = `How many moles are in ${mass} g of ${s.name} (${s.formula}, M = ${s.mw} g/mol)?`;
        question = `Calculate the number of moles.`;
        answer = moles;
        tolerance = 0.005;
        steps = [
          { label: 'Moles formula', calc: 'moles = mass / molar mass', result: '' },
          { label: 'Substitute', calc: `moles = ${mass} g / ${s.mw} g/mol = ${moles} mol`, result: `n = ${moles} mol` }
        ];
      } else {
        const moles = choice([0.1, 0.25, 0.5, 1.0, 2.0]);
        const mass = fmt(moles * s.mw, 2);
        problem = `What mass of ${s.name} (${s.formula}, M = ${s.mw} g/mol) is needed to prepare ${moles} mol?`;
        question = `Calculate the mass in grams.`;
        answer = mass;
        tolerance = 1;
        steps = [
          { label: 'Mass formula', calc: 'mass = moles × molar mass', result: '' },
          { label: 'Substitute', calc: `mass = ${moles} mol × ${s.mw} g/mol = ${mass} g`, result: `mass = ${mass} g` }
        ];
      }

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 14. Blood Spatter Angle
  {
    id: 'blood-spatter',
    title: 'Blood Spatter Angle & Convergence',
    event: 'forensics',
    section: '§6',
    formula: 'Angle θ = arcsin(width / length)\nRound stain → ≈90° (fell vertically)\nElongated → lower angle (greater distance/velocity)\nDirectionality: pointed end = direction of travel',
    refProblem: 'From §6: W=6mm, L=12mm → sin θ = 6/12 = 0.5 → θ = arcsin(0.5) = 30°.',
    generate() {
      const width = rnd(3, 12);
      const targetAngle = rnd(20, 75);
      const length = fmt(width / Math.sin(targetAngle * Math.PI / 180), 1);
      const actualAngle = Math.asin(width / length) * 180 / Math.PI;

      const problem = `A blood droplet stain at a crime scene measures:\n- Width: ${width} mm\n- Length: ${fmt(length, 1)} mm`;
      const question = `Calculate the approximate angle of impact (θ) in degrees.`;
      const answer = fmt(actualAngle, 1);
      const tolerance = 3;

      const steps = [
        { label: 'Angle formula', calc: 'θ = arcsin(width / length)', result: '' },
        { label: 'Calculate sin ratio', calc: `sin θ = ${width} / ${fmt(length, 1)} = ${fmt(width / length, 4)}`, result: '' },
        { label: 'Take arcsin', calc: `θ = arcsin(${fmt(width / length, 4)}) = ${fmt(actualAngle, 1)}°`, result: `θ = ${fmt(actualAngle, 1)}°` },
        { label: 'Interpretation', calc: actualAngle < 30 ? `${fmt(actualAngle, 1)}° → low angle impact, elongated stain, blood traveled far horizontally` : actualAngle > 70 ? `${fmt(actualAngle, 1)}° → steep angle, nearly circular stain` : `${fmt(actualAngle, 1)}° → medium-angle impact`, result: '' }
      ];

      return { problem, question, answer, tolerance, steps };
    }
  },

  // 15. Mass Spectrometry m/z
  {
    id: 'mass-spec',
    title: 'Mass Spectrometry — m/z Problems',
    event: 'forensics',
    section: '§7',
    formula: 'Molecular ion M⁺ = highest m/z peak = molecular mass\nBase peak = tallest peak (most stable fragment)\nNeutral losses: −15 (CH₃), −17 (OH), −18 (H₂O), −29 (CHO/C₂H₅), −45 (COOH)\nOne Cl: M:M+2 ≈ 3:1; One Br: M:M+2 ≈ 1:1\nM+1 peak: % of M+1 / 1.1 ≈ number of carbons',
    refProblem: 'From §7: M⁺=156, M+2=158, 1:1 ratio → one Br. Base peak at 77 → phenyl cation C₆H₅⁺=77. Loss of Br (79): 156−79=77.',
    generate() {
      const problems = [
        {
          problem: `A mass spectrum shows peaks at m/z = 64 and m/z = 66 in approximately 3:1 ratio.`,
          question: `How many chlorine atoms does this molecule contain?`,
          answer: '1',
          steps: [
            { label: 'Chlorine isotope pattern', calc: 'One Cl: M:M+2 ≈ 3:1 (³⁵Cl:³⁷Cl = 3:1)\nTwo Cl: M:M+2:M+4 ≈ 9:6:1', result: '' },
            { label: 'Observed', calc: 'M and M+2 in 3:1 ratio', result: '→ ONE chlorine atom' },
            { label: 'Molecular formula hint', calc: `M⁺ = 64. If one Cl (35): C₂H₄Cl = 64? C₂H₃Cl = 63. C₂H₅Cl = 64 ✓ (chloroethane)`, result: '' }
          ]
        },
        {
          problem: `A mass spectrum shows M⁺ at m/z = 108 with an M+2 peak also at m/z = 110 in approximately 1:1 ratio.`,
          question: `How many bromine atoms are present? And what is the molecular mass?`,
          answer: '1 bromine; 108',
          steps: [
            { label: 'Bromine isotope pattern', calc: 'One Br: M:M+2 ≈ 1:1 (⁷⁹Br:⁸¹Br ≈ 1:1)', result: '' },
            { label: 'Conclusion', calc: 'M:M+2 in 1:1 ratio → ONE bromine atom', result: 'One Br; M = 108' },
            { label: 'Possible formula', calc: 'If M=108 with one Br: C₂H₅Br = 109 ✗. CH₂Br₂=174 ✗. Bromoethane C₂H₅⁷⁹Br = 108 ✓', result: '' }
          ]
        },
        {
          problem: `A mass spectrum of an unknown compound shows M⁺ at m/z = 46 and a base peak at m/z = 31 (loss of 15 mass units from M⁺).`,
          question: `What is the neutral loss from M⁺ to the base peak, and which fragment is lost?`,
          answer: 'loss of CH₃ (methyl group, -15)',
          steps: [
            { label: 'Calculate neutral loss', calc: '46 − 31 = 15 mass units lost', result: 'Δm = 15' },
            { label: 'Match neutral loss', calc: '−15 = loss of CH₃ (methyl group, mass 15)', result: 'Fragment lost: CH₃' },
            { label: 'Interpretation', calc: 'Compound with M=46, loses CH₃. Ethanol (C₂H₅OH, MW=46): loses CH₃ → CHO⁺ or CH₂OH⁺ at m/z=31. Base peak at 31 is CH₂=OH⁺ (typical for primary alcohols).', result: 'Compound is likely ethanol' }
          ]
        },
        {
          problem: `A compound has an M+1 peak that is approximately 4.4% of the M⁺ peak height.`,
          question: `Estimate the number of carbon atoms in this molecule.`,
          answer: '4',
          steps: [
            { label: 'M+1 rule', calc: 'M+1 % ÷ 1.1 ≈ number of carbons\n(Each ¹³C contributes ~1.1% to M+1)', result: '' },
            { label: 'Calculate', calc: '4.4 / 1.1 = 4 carbon atoms', result: '≈ 4 carbons' }
          ]
        },
        {
          problem: `The mass spectrum of boric acid (H₃BO₃) shows a molecular ion peak.`,
          question: `At what m/z value would you expect the molecular ion of boric acid?`,
          answer: '62',
          steps: [
            { label: 'Molar mass of H₃BO₃', calc: '3(H) + B + 3(O) = 3(1) + 11 + 3(16) = 3 + 11 + 48 = 62', result: 'M = 62 g/mol' },
            { label: 'Molecular ion', calc: 'M⁺ appears at m/z = molecular mass (for singly charged ion)', result: 'm/z = 62' }
          ]
        }
      ];

      const p = choice(problems);
      return {
        problem: p.problem,
        question: p.question,
        answer: p.answer,
        tolerance: 0,
        steps: p.steps
      };
    }
  },

  // 16. Ballistics Math
  {
    id: 'ballistics',
    title: 'Ballistics & Caliber Math',
    event: 'forensics',
    section: '§6',
    formula: 'Caliber (inches) = diameter (mm) ÷ 25.4\nGauge: number of lead balls of barrel diameter that make 1 lb\nSmaller gauge = larger bore',
    refProblem: 'From §6: 9.65 mm ÷ 25.4 = 0.38 caliber. 12-gauge shotgun = 12 lead balls of bore diameter = 1 lb.',
    generate() {
      const type = choice(['caliber_conversion', 'gauge_logic']);

      if (type === 'caliber_conversion') {
        const mmDiameters = [
          { mm: 9.0, cal: 0.355 },
          { mm: 9.65, cal: 0.380 },
          { mm: 7.62, cal: 0.300 },
          { mm: 11.43, cal: 0.45 },
          { mm: 5.56, cal: 0.219 },
        ];
        const d = choice(mmDiameters);
        const calcCal = d.mm / 25.4;

        const problem = `A bullet measures ${d.mm} mm in diameter.`;
        const question = `Convert this diameter to caliber (inches). Round to 2 decimal places.`;
        const answer = fmt(calcCal, 2);
        const tolerance = 0.01;

        const steps = [
          { label: 'Caliber conversion formula', calc: 'Caliber (inches) = diameter (mm) ÷ 25.4', result: '' },
          { label: 'Substitute', calc: `Caliber = ${d.mm} ÷ 25.4 = ${fmt(calcCal, 3)}`, result: `≈ ${fmt(calcCal, 2)} caliber` }
        ];

        return { problem, question, answer, tolerance, steps };
      }

      // Gauge logic
      const problem = `A shotgun is labeled as a "20-gauge" firearm. Another shotgun is labeled as "12-gauge."`;
      const question = `Which shotgun has the LARGER bore diameter, and why?`;
      const answer = '12-gauge';
      const steps = [
        { label: 'Gauge definition', calc: 'Gauge = number of lead balls of the barrel diameter that together weigh 1 pound', result: '' },
        { label: 'Interpret', calc: '12-gauge: 12 balls of this diameter = 1 lb → each ball is heavier → larger diameter\n20-gauge: 20 balls = 1 lb → each ball is lighter → smaller diameter', result: '' },
        { label: 'Conclusion', calc: 'SMALLER gauge number = LARGER bore diameter', result: '12-gauge has the larger bore' }
      ];

      return { problem, question, answer, tolerance: 0, steps };
    }
  }
];

/* ── Export for app.js ───────────────────────────────── */
window.CALC_MODULES = CALC_MODULES;
window.CODON_TABLE = CODON_TABLE;
