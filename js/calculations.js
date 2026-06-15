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
    formula: '$$p + q = 1 \\qquad p^2 + 2pq + q^2 = 1$$\n$$q = \\sqrt{q^2_{\\text{affected}}} \\qquad \\text{carriers} = 2pq$$',
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
          label: 'Identify q² (affected frequency)',
          calc: `$q^2 = ${q2}$`,
          result: `$q^2 = ${q2}$`
        },
        {
          label: 'Solve for q (recessive allele frequency)',
          calc: `$q = \\sqrt{q^2} = \\sqrt{${q2}} = ${fmt(q, 4)}$`,
          result: `$q = ${fmt(q, 4)}$`
        },
        {
          label: 'Solve for p (dominant allele frequency)',
          calc: `$p = 1 - q = 1 - ${fmt(q, 4)} = ${fmt(p, 4)}$`,
          result: `$p = ${fmt(p, 4)}$`
        },
        {
          label: 'Carrier frequency (2pq)',
          calc: `$2pq = 2 \\times ${fmt(p, 4)} \\times ${fmt(q, 4)} = ${fmt(carriers2pq, 4)}$`,
          result: `Carriers = ${pct(carriers2pq)} of the population`
        },
        {
          label: 'Homozygous dominant (p²)',
          calc: `$p^2 = (${fmt(p, 4)})^2 = ${fmt(p * p, 4)}$`,
          result: `AA frequency = ${pct(p * p)}`
        },
        {
          label: 'Expected carriers in population',
          calc: `$${fmt(carriers2pq, 4)} \\times ${N.toLocaleString()} = ${carrierN.toLocaleString()}$ individuals`,
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
    formula: '$$\\chi^2 = \\sum \\frac{(O - E)^2}{E} \\qquad \\text{df} = \\text{classes} - 1$$\nCritical $\\chi^2$ (α = 0.05): df 1 → 3.84 · df 2 → 5.99 · df 3 → 7.81',
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
          calc: `$\\dfrac{(${o} - ${expected[i].toFixed(1)})^2}{${expected[i].toFixed(1)}} = ${expected[i] > 0 ? (((o - expected[i]) ** 2) / expected[i]).toFixed(3) : 0}$`,
          result: ''
        })),
        {
          label: 'Sum all (O−E)²/E values',
          calc: `$\\chi^2 = ${fmt(chiSq, 3)}$`,
          result: `$\\chi^2 = ${fmt(chiSq, 3)}$`
        },
        {
          label: 'Compare to critical value',
          calc: `df $= ${ratio.classes} - 1 = ${df}$\nCritical value (α = 0.05, df = ${df}) $= ${critical}$\n$\\chi^2 = ${fmt(chiSq, 3)} ${reject ? '>' : '\\le'} ${critical}$`,
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
    formula: '$$Aa \\times Aa \\rightarrow 1\\,AA : 2\\,Aa : 1\\,aa \\;\\;(3{:}1)$$\n$$AaBb \\times AaBb \\rightarrow 9{:}3{:}3{:}1$$\n$$P(A \\text{ and } B) = P(A) \\times P(B)$$',
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
    formula: '$$R = h^2 S \\qquad h^2 = \\frac{R}{S}$$\n$$S = \\bar{x}_{\\text{parents}} - \\bar{x}_{\\text{pop}} \\qquad R = \\bar{x}_{\\text{offspring}} - \\bar{x}_{\\text{pop}}$$\n$$\\text{narrow } h^2 = \\frac{V_A}{V_P} \\qquad \\text{broad } H^2 = \\frac{V_G}{V_P}$$',
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
          { label: 'Calculate S (selection differential)', calc: `$S = \\bar{x}_{\\text{selected}} - \\bar{x}_{\\text{pop}} = ${selectedMean} - ${popMean} = ${S}$ ${unit}`, result: `$S = ${S}$ ${unit}` },
          { label: 'Calculate R (response to selection)', calc: `$R = \\bar{x}_{\\text{offspring}} - \\bar{x}_{\\text{pop}} = ${offMean} - ${popMean} = ${R}$ ${unit}`, result: `$R = ${R}$ ${unit}` },
          { label: 'Calculate realized h²', calc: `$h^2 = \\dfrac{R}{S} = \\dfrac{${R}}{${S}} = ${fmt(h2, 2)}$`, result: `$h^2 = ${fmt(h2, 2)}$` }
        ];
      } else if (askType === 'find_R') {
        problem = `A population has a mean ${trait} of ${popMean} ${unit}. Narrow-sense heritability h² = ${h2}. Breeders select individuals with a mean ${trait} of ${selectedMean} ${unit}.`;
        question = `Predict the response to selection (R) — how much will the offspring mean change?`;
        answer = fmt(R, 2);
        tolerance = 0.1;
        steps = [
          { label: 'Calculate S', calc: `$S = ${selectedMean} - ${popMean} = ${S}$ ${unit}`, result: `$S = ${S}$ ${unit}` },
          { label: 'Apply breeder\'s equation: R = h²S', calc: `$R = h^2 S = ${h2} \\times ${S} = ${fmt(R, 2)}$ ${unit}`, result: `$R = ${fmt(R, 2)}$ ${unit}` },
          { label: 'Offspring mean', calc: `$\\bar{x}_{\\text{offspring}} = ${popMean} + ${fmt(R, 2)} = ${offMean}$ ${unit}`, result: `Expected offspring mean = ${offMean} ${unit}` }
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
          { label: 'Narrow-sense h² definition', calc: '$h^2 = \\dfrac{V_A}{V_P}$', result: '' },
          { label: 'Substitute values', calc: `$h^2 = \\dfrac{${VA}}{${VP}} = ${fmt(VA / VP, 3)}$`, result: `$h^2 = ${fmt(VA / VP, 2)}$` }
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
    formula: '$$\\text{RF} = \\frac{\\text{recombinants}}{\\text{total}} \\times 100\\%$$\n$$1\\%\\ \\text{RF} = 1\\ \\text{cM} = 1\\ \\text{map unit} \\qquad \\text{RF} = 50\\% \\Rightarrow \\text{unlinked}$$',
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
          { label: 'Identify recombinant offspring', calc: `Recombinants $= ${obsRec}$`, result: '' },
          { label: 'Calculate RF', calc: `$\\text{RF} = \\dfrac{${obsRec}}{${obsTotal}} \\times 100 = ${fmt(obsRF, 2)}\\%$`, result: `$\\text{RF} = ${fmt(obsRF, 1)}\\%$` },
          { label: 'Convert to map distance', calc: `$1\\%\\ \\text{RF} = 1\\ \\text{cM}$ → map distance $= ${fmt(obsRF, 1)}$ cM`, result: `Map distance = ${fmt(obsRF, 1)} cM` },
          { label: 'Assess linkage', calc: obsRF < 50 ? `RF < 50% → genes are LINKED on the same chromosome` : `RF ≈ 50% → genes assort independently (unlinked)`, result: '' }
        ];
      } else {
        problem = `Two genes in corn are ${trueRF} cM apart. A dihybrid plant (AB/ab, cis configuration) is test-crossed to a double recessive (ab/ab). 500 offspring are produced.`;
        question = `How many recombinant offspring are expected?`;
        const expected = Math.round((trueRF / 100) * 500);
        answer = expected;
        tolerance = 15;
        steps = [
          { label: 'Recombination frequency', calc: `$\\text{RF} = ${trueRF}\\ \\text{cM} / 100 = ${trueRF / 100}$`, result: `$\\text{RF} = ${trueRF / 100}$` },
          { label: 'Expected recombinants', calc: `$${trueRF / 100} \\times 500 = ${expected}$`, result: `Expected recombinants ≈ ${expected}` }
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
    formula: 'Prior (unaffected child of $Aa \\times Aa$): $P(AA)=\\tfrac{1}{3},\\ P(Aa)=\\tfrac{2}{3}$\n$$P(\\text{carrier}\\mid\\text{data}) \\propto P(\\text{prior}) \\times P(\\text{data}\\mid H)$$\nCarrier husband ($Aa \\times Aa$): $P(\\text{unaffected child}) = \\tfrac{3}{4}$',
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
    formula: '$$\\text{recessive lethal:}\\quad \\hat{q} = \\sqrt{\\mu/s} \\qquad \\text{dominant:}\\quad \\hat{q} \\approx \\frac{\\mu}{hs}$$\n$$\\text{heterozygote advantage:}\\quad \\hat{q} = \\frac{s_1}{s_1+s_2},\\ \\ \\hat{p} = \\frac{s_2}{s_1+s_2}$$',
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
          { label: 'Identify selection coefficients', calc: `$s_1$ (against HbA/HbA) $= ${s1}$\n$s_2$ (against HbS/HbS) $= ${s2}$`, result: '' },
          { label: 'Apply heterozygote advantage equilibrium formula', calc: `$\\hat{q} = \\dfrac{s_1}{s_1 + s_2} = \\dfrac{${s1}}{${s1} + ${s2}} = \\dfrac{${s1}}{${fmt(s1 + s2, 2)}}$`, result: `$\\hat{q} = ${fmt(qHat, 3)}$` },
          { label: 'Verify p̂', calc: `$\\hat{p} = \\dfrac{s_2}{s_1 + s_2} = \\dfrac{${s2}}{${fmt(s1 + s2, 2)}} = ${fmt(pHat, 3)}$\n$\\hat{p} + \\hat{q} = ${fmt(pHat, 3)} + ${fmt(qHat, 3)} = ${fmt(pHat + qHat, 3)}$ ✓`, result: '' }
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
          { label: 'Formula for completely recessive allele at mutation-selection balance', calc: '$\\hat{q} = \\sqrt{\\mu/s}$', result: '' },
          { label: 'Substitute values', calc: `$\\hat{q} = \\sqrt{${mu} / ${s}} = \\sqrt{${fmt(mu / s, 8)}} = ${fmt(qHat, 5)}$`, result: `$\\hat{q} = ${fmt(qHat, 5)}$` },
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
    formula: '$$\\textit{Lucilia sericata:}\\quad K \\approx 6023\\ \\text{degree-hours}\\ \\ (\\text{egg}\\rightarrow\\text{adult})$$\n$$T_{\\text{base}} \\approx 9.1\\,^{\\circ}\\mathrm{C} \\qquad \\text{dev. time} = \\frac{K}{T_{\\text{ambient}} - T_{\\text{base}}}$$',
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
          { label: 'Calculate degree-hours above base temperature', calc: `$T - T_{\\text{base}} = ${T} - 9.1 = ${fmt(DD, 1)}\\,^{\\circ}\\mathrm{C}$ above base`, result: `Effective temperature = ${fmt(DD, 1)}°C` },
          { label: 'Calculate development time in hours', calc: `$\\text{time} = \\dfrac{K}{T - T_{\\text{base}}} = \\dfrac{6023}{${fmt(DD, 1)}} = ${fmt(hours, 1)}$ hours`, result: `Development time = ${fmt(hours, 1)} hours` },
          { label: 'Convert to days', calc: `$${fmt(hours, 1)} \\div 24 = ${fmt(days, 1)}$ days`, result: `mPMI ≈ ${fmt(days, 1)} days` },
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
          { label: 'Effective temperature', calc: `$T - T_{\\text{base}} = ${T} - 9.1 = ${fmt(DD, 1)}\\,^{\\circ}\\mathrm{C}$`, result: '' },
          { label: 'Calculate development time', calc: `$\\dfrac{K}{T - T_{\\text{base}}} = \\dfrac{6023}{${fmt(DD, 1)}} = ${fmt(hours, 1)}$ hours`, result: `≈ ${fmt(hours, 0)} hours` }
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
    formula: '$$R_f = \\frac{\\text{distance to spot center}}{\\text{distance to solvent front}}$$\n$$0 \\le R_f \\le 1 \\qquad \\text{higher } R_f \\Rightarrow \\text{less polar}$$',
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
        { label: 'Rf formula', calc: '$R_f = \\dfrac{\\text{spot distance}}{\\text{solvent front distance}}$', result: '' },
        { label: `Apply to ${names[askIdx]}`, calc: `$R_f = \\dfrac{${askDist}\\ \\text{cm}}{${front}\\ \\text{cm}} = ${fmt(askDist / front, 3)}$`, result: `$R_f = ${askRf}$` },
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
    formula: '$$\\text{MI} = \\frac{\\text{medulla diameter}}{\\text{whole hair diameter}}$$\n$$\\text{Human: MI} < \\tfrac{1}{3}\\ (0.333) \\qquad \\text{Animal: MI} \\ge \\tfrac{1}{2}\\ (0.500)$$',
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
          { label: 'MI formula', calc: '$\\text{MI} = \\dfrac{\\text{medulla diameter}}{\\text{total hair diameter}}$', result: '' },
          { label: 'Substitute values', calc: `$\\text{MI} = \\dfrac{${s.medulla}}{${s.hair}} = ${mi}$`, result: `$\\text{MI} = ${mi}$` },
          { label: 'Classify', calc: mi < 0.333 ? `MI = ${mi} < 1/3 (0.333) → Human origin (or absent)` : `MI = ${mi} ≥ 1/2 (0.500) → Animal origin`, result: `Classification: ${classification}` }
        ];
      } else {
        problem = `A hair specimen has a total diameter of ${s.hair} μm and a medullary diameter of ${s.medulla} μm.`;
        question = `Is this hair most likely of human or animal origin?`;
        answer = s.species === 'human' ? 'human' : 'animal';
        tolerance = 0;
        steps = [
          { label: 'Calculate MI', calc: `$\\text{MI} = \\dfrac{${s.medulla}}{${s.hair}} = ${mi}$`, result: `$\\text{MI} = ${mi}$` },
          { label: 'Apply thresholds', calc: `Human: $\\text{MI} < \\tfrac{1}{3}\\ (0.333)$\nAnimal: $\\text{MI} \\ge \\tfrac{1}{2}\\ (0.500)$`, result: '' },
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
    formula: '$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\qquad v = \\frac{c}{n}\\ \\ (c = 3\\times10^{8}\\ \\text{m/s})$$\nBecke line moves toward the HIGHER-RI medium as the objective is raised\nSoda-lime glass RI ≈ 1.51–1.52',
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
          { label: 'Snell\'s Law', calc: `$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$`, result: '' },
          { label: 'Rearrange for θ₂', calc: `$\\sin\\theta_2 = \\dfrac{n_1 \\sin\\theta_1}{n_2}$`, result: '' },
          { label: 'Substitute', calc: `$\\sin\\theta_2 = \\dfrac{${n1} \\times \\sin ${theta1}^{\\circ}}{${n2}} = \\dfrac{${n1} \\times ${fmt(Math.sin(theta1 * Math.PI / 180), 4)}}{${n2}} = ${fmt(sinTheta2, 4)}$`, result: '' },
          { label: 'Solve for θ₂', calc: `$\\theta_2 = \\arcsin(${fmt(sinTheta2, 4)}) = ${fmt(theta2, 1)}^{\\circ}$`, result: `$\\theta_2 = ${fmt(theta2, 1)}^{\\circ}$` },
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
        { label: 'Speed in medium formula', calc: '$v = \\dfrac{c}{n}$', result: '' },
        { label: 'Substitute', calc: `$v = \\dfrac{3.00 \\times 10^{8}}{${n}} = ${fmt(v / 1e8, 3)} \\times 10^{8}\\ \\text{m/s}$`, result: `$v = ${fmt(v / 1e8, 2)} \\times 10^{8}\\ \\text{m/s}$` }
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
    formula: '$$\\text{molar mass} = \\textstyle\\sum \\text{atomic masses} \\qquad \\text{moles} = \\frac{\\text{mass (g)}}{\\text{molar mass (g/mol)}}$$\nAtomic masses: H=1, B=11, C=12, N=14, O=16, Na=23, Mg=24, Cl=35.5, K=39, Ca=40',
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
          { label: 'Moles formula', calc: '$\\text{moles} = \\dfrac{\\text{mass}}{\\text{molar mass}}$', result: '' },
          { label: 'Substitute', calc: `$\\text{moles} = \\dfrac{${mass}\\ \\text{g}}{${s.mw}\\ \\text{g/mol}} = ${moles}\\ \\text{mol}$`, result: `$n = ${moles}\\ \\text{mol}$` }
        ];
      } else {
        const moles = choice([0.1, 0.25, 0.5, 1.0, 2.0]);
        const mass = fmt(moles * s.mw, 2);
        problem = `What mass of ${s.name} (${s.formula}, M = ${s.mw} g/mol) is needed to prepare ${moles} mol?`;
        question = `Calculate the mass in grams.`;
        answer = mass;
        tolerance = 1;
        steps = [
          { label: 'Mass formula', calc: '$\\text{mass} = \\text{moles} \\times \\text{molar mass}$', result: '' },
          { label: 'Substitute', calc: `$\\text{mass} = ${moles}\\ \\text{mol} \\times ${s.mw}\\ \\text{g/mol} = ${mass}\\ \\text{g}$`, result: `mass = ${mass} g` }
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
    formula: '$$\\theta = \\arcsin\\!\\left(\\frac{\\text{width}}{\\text{length}}\\right)$$\nRound stain → ≈ 90° (fell vertically) · Elongated → lower angle\nDirectionality: the pointed end = direction of travel',
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
        { label: 'Angle formula', calc: '$\\theta = \\arcsin\\!\\left(\\dfrac{\\text{width}}{\\text{length}}\\right)$', result: '' },
        { label: 'Calculate sin ratio', calc: `$\\sin\\theta = \\dfrac{${width}}{${fmt(length, 1)}} = ${fmt(width / length, 4)}$`, result: '' },
        { label: 'Take arcsin', calc: `$\\theta = \\arcsin(${fmt(width / length, 4)}) = ${fmt(actualAngle, 1)}^{\\circ}$`, result: `$\\theta = ${fmt(actualAngle, 1)}^{\\circ}$` },
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
    formula: 'Molecular ion $M^{+}$ = highest $m/z$ peak = molecular mass\nBase peak = tallest peak (most stable fragment)\nNeutral losses: −15 (CH₃), −17 (OH), −18 (H₂O), −29 (CHO/C₂H₅), −45 (COOH)\nOne Cl: M:M+2 ≈ 3:1 · One Br: M:M+2 ≈ 1:1\nCarbons ≈ (M+1 %) ÷ 1.1',
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
    formula: '$$\\text{caliber (in)} = \\frac{\\text{diameter (mm)}}{25.4}$$\nGauge = number of bore-diameter lead balls that weigh 1 lb\nSmaller gauge ⇒ larger bore',
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
          { label: 'Caliber conversion formula', calc: '$\\text{caliber (in)} = \\dfrac{\\text{diameter (mm)}}{25.4}$', result: '' },
          { label: 'Substitute', calc: `$\\text{caliber} = \\dfrac{${d.mm}}{25.4} = ${fmt(calcCal, 3)}$`, result: `≈ ${fmt(calcCal, 2)} caliber` }
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
  },

  // 17. Plastic Density Identification
  {
    id: 'plastic-density',
    title: 'Plastic Density Identification',
    event: 'forensics',
    section: '§6',
    formula: '$$\\rho = \\frac{m}{V} \\qquad V = m_{\\text{displaced water}} \\div \\rho_{\\text{water}}$$\nReference densities (g/cm³): PE 0.94, PP 0.91, PVC 1.37, PS 1.05, PET 1.37, Nylon 1.13, PMMA 1.19',
    refProblem: 'From §6: Mass = 4.82 g, displaced water = 3.68 mL → ρ = 4.82/3.68 = 1.31 g/cm³ → compare to reference table → closest match PVC (1.37) or Nylon (1.13). ρ = 1.31 → likely Nylon with air voids, or run density gradient column.',
    generate() {
      const plastics = [
        { name: 'Polyethylene (PE)', rho: 0.94, floatsIn: ['water'], sinksIn: ['ethanol', 'salt water'] },
        { name: 'Polypropylene (PP)', rho: 0.91, floatsIn: ['water', 'ethanol'], sinksIn: [] },
        { name: 'Polystyrene (PS)', rho: 1.05, floatsIn: [], sinksIn: ['water'] },
        { name: 'Nylon (PA)', rho: 1.13, floatsIn: [], sinksIn: ['water'] },
        { name: 'PMMA (acrylic)', rho: 1.19, floatsIn: [], sinksIn: ['water'] },
        { name: 'PVC', rho: 1.37, floatsIn: [], sinksIn: ['water'] },
        { name: 'PET', rho: 1.37, floatsIn: [], sinksIn: ['water'] },
      ];
      const p = choice(plastics);
      const askType = choice(['calc_density', 'identify_float', 'volume_from_mass']);

      let problem, question, answer, tolerance, steps;

      if (askType === 'calc_density') {
        const noise = (rnd(-3, 3) / 100);
        const trueRho = p.rho + noise;
        const mass = parseFloat((rnd(3, 12) + rnd(0, 99) / 100).toFixed(2));
        const volume = fmt(mass / trueRho, 2);
        problem = `A plastic sample has a mass of ${mass} g. When submerged in water it displaces ${volume} mL of water.`;
        question = `Calculate the density (g/cm³). Then identify the most likely polymer from the reference table.`;
        answer = fmt(mass / volume, 2);
        tolerance = 0.04;
        steps = [
          { label: 'Density formula', calc: '$\\rho = m / V$', result: '' },
          { label: 'Substitute', calc: `$\\rho = ${mass}\\ \\text{g} \\div ${volume}\\ \\text{cm}^3 = ${fmt(mass / volume, 3)}\\ \\text{g/cm}^3$`, result: `$\\rho \\approx ${fmt(mass / volume, 2)}\\ \\text{g/cm}^3$` },
          { label: 'Compare to reference', calc: 'PE 0.94 | PP 0.91 | PS 1.05 | Nylon 1.13 | PMMA 1.19 | PVC/PET 1.37', result: `Closest match: ${p.name} (${p.rho} g/cm³)` },
        ];
      } else if (askType === 'identify_float') {
        const solutions = [
          { name: 'isopropanol (0.785 g/cm³)', rho: 0.785 },
          { name: 'water (1.00 g/cm³)', rho: 1.00 },
          { name: '10% NaCl solution (1.07 g/cm³)', rho: 1.07 },
          { name: '20% NaCl solution (1.15 g/cm³)', rho: 1.15 },
          { name: 'saturated NaCl solution (1.20 g/cm³)', rho: 1.20 },
          { name: 'chloroform (1.49 g/cm³)', rho: 1.49 },
        ];
        const floatSolutions = solutions.filter(s => p.rho < s.rho);
        const sinkSolutions = solutions.filter(s => p.rho >= s.rho);
        if (floatSolutions.length === 0 || sinkSolutions.length === 0) {
          // fallback to calc_density
          const mass2 = parseFloat((rnd(3, 12) + rnd(0, 99) / 100).toFixed(2));
          const volume2 = fmt(mass2 / p.rho, 2);
          problem = `A ${p.name} sample (mass ${mass2} g) displaces ${volume2} mL of water.`;
          question = `What is its density in g/cm³?`;
          answer = p.rho;
          tolerance = 0.04;
          steps = [
            { label: 'Density', calc: `$${mass2} \\div ${volume2} = ${p.rho}\\ \\text{g/cm}^3$`, result: `${p.name}: ${p.rho} g/cm³` },
          ];
        } else {
          const floatEx = floatSolutions[floatSolutions.length - 1];
          const sinkEx = sinkSolutions[0];
          problem = `A plastic fragment floats in ${floatEx.name} but sinks in ${sinkEx.name}. The reference density table is: PE 0.94 | PP 0.91 | PS 1.05 | Nylon 1.13 | PMMA 1.19 | PVC 1.37 | PET 1.37 g/cm³.`;
          question = `What is the density range of this plastic, and which polymer(s) match?`;
          answer = p.name.split(' ')[0];
          tolerance = 0;
          steps = [
            { label: 'Float rule', calc: 'Object floats if ρ_object < ρ_solution; sinks if ρ_object > ρ_solution', result: '' },
            { label: 'Bound from float', calc: `Floats in ${floatEx.name} (${floatEx.rho} g/cm³) → ρ_plastic < ${floatEx.rho}`, result: '' },
            { label: 'Bound from sink', calc: `Sinks in ${sinkEx.name} (${sinkEx.rho} g/cm³) → ρ_plastic > ${sinkEx.rho}`, result: '' },
            { label: 'Range', calc: `${sinkEx.rho} < ρ < ${floatEx.rho}`, result: `Best match: ${p.name} (${p.rho} g/cm³)` },
          ];
        }
      } else {
        const mass = parseFloat((rnd(2, 15) + rnd(0, 99) / 100).toFixed(2));
        const volume = fmt(mass / p.rho, 2);
        problem = `A sample of ${p.name} (density ${p.rho} g/cm³) has a mass of ${mass} g.`;
        question = `What volume (cm³) does it occupy?`;
        answer = parseFloat(volume);
        tolerance = 0.1;
        steps = [
          { label: 'Rearrange density formula', calc: '$V = m / \\rho$', result: '' },
          { label: 'Substitute', calc: `$V = ${mass} \\div ${p.rho} = ${volume}\\ \\text{cm}^3$`, result: `$V = ${volume}\\ \\text{cm}^3$` },
        ];
      }

      return { problem, question, answer, tolerance, steps };
    },
  },

  // 18. Gel Electrophoresis — Fragment Size from Ladder
  {
    id: 'gel-fragment-size',
    title: 'Gel Electrophoresis — Fragment Size from Ladder',
    event: 'forensics',
    section: '§7',
    formula: '$$\\log(\\text{bp}) = m \\times d + b \\qquad (\\text{semi-log linear plot})$$\nSmaller fragments migrate farther; size proportional to log of migration distance\nLadder (bp): 100, 200, 500, 1000, 1500, 2000, 3000, 5000',
    refProblem: 'From §7: Ladder bands at 100bp → 45mm, 500bp → 32mm, 1000bp → 25mm. Unknown at 28mm → interpolate: between 500bp and 1000bp, log(bp) = 3.0 − (28−25)/(32−25) × (3.0−2.7) ≈ 2.87 → ~740 bp.',
    generate() {
      // Two-point interpolation using ladder standards
      const ladderBands = [
        { bp: 100, d: 45 }, { bp: 200, d: 40 }, { bp: 500, d: 32 },
        { bp: 1000, d: 25 }, { bp: 1500, d: 21 }, { bp: 2000, d: 18 },
        { bp: 3000, d: 14 }, { bp: 5000, d: 9 },
      ];

      // Pick two adjacent ladder points to bracket the unknown
      const idx = rnd(1, ladderBands.length - 2);
      const low = ladderBands[idx];
      const high = ladderBands[idx - 1]; // high bp = less migration

      // Unknown distance falls between these two
      const unknownD = rnd(
        Math.ceil(low.d + 1),
        Math.floor(high.d - 1)
      );

      // Linear interpolation on log scale
      const logBpLow = Math.log10(low.bp);
      const logBpHigh = Math.log10(high.bp);
      const fraction = (unknownD - low.d) / (high.d - low.d);
      const logBpUnknown = logBpLow + fraction * (logBpHigh - logBpLow);
      const bpUnknown = Math.round(Math.pow(10, logBpUnknown));

      const problem = `A gel electrophoresis experiment uses a ladder with the following bands:\n100 bp at 45 mm · 200 bp at 40 mm · 500 bp at 32 mm · 1000 bp at 25 mm · 1500 bp at 21 mm · 2000 bp at 18 mm.\n\nAn unknown band migrates to ${unknownD} mm from the well.`;
      const question = `Estimate the size of the unknown fragment in base pairs using log-linear interpolation between the two bracketing ladder bands.`;
      const answer = bpUnknown;
      const tolerance = bpUnknown * 0.12;

      const steps = [
        { label: 'Identify bracketing ladder bands', calc: `Unknown at ${unknownD} mm falls between ${high.bp} bp (${high.d} mm) and ${low.bp} bp (${low.d} mm)`, result: '' },
        { label: 'Log-linear interpolation formula', calc: `$\\log(\\text{bp}) = \\log(${low.bp}) + \\dfrac{${unknownD} - ${low.d}}{${high.d} - ${low.d}} \\times (\\log(${high.bp}) - \\log(${low.bp}))$`, result: '' },
        { label: 'Substitute', calc: `$= ${logBpLow.toFixed(3)} + \\dfrac{${unknownD - low.d}}{${high.d - low.d}} \\times (${logBpHigh.toFixed(3)} - ${logBpLow.toFixed(3)}) = ${logBpUnknown.toFixed(3)}$`, result: '' },
        { label: 'Anti-log', calc: `$\\text{bp} = 10^{${logBpUnknown.toFixed(3)}} \\approx ${bpUnknown}\\ \\text{bp}$`, result: `Unknown ≈ ${bpUnknown} bp` },
        { label: 'Key concept', calc: 'Smaller fragments travel FARTHER in the gel. Always use the two nearest ladder bands for interpolation.', result: '' },
      ];

      return { problem, question, answer, tolerance, steps };
    },
  },

  // 19. Three-Point Cross (Gene Mapping — 3 genes)
  {
    id: 'three-point-cross',
    title: 'Three-Point Cross — 3-Gene Mapping',
    event: 'desgen',
    section: '§3.7',
    formula: '$$\\text{RF}_{AB} = \\frac{\\text{single crossovers in A-B interval} + \\text{double crossovers}}{\\text{total}} \\times 100$$\n$$\\text{map distance} = \\text{RF}\\ (\\text{cM}) \\qquad \\text{double crossovers must be counted in BOTH intervals}$$\nGene order determined by comparing parental vs double-crossover classes',
    refProblem: 'From §9.1: Parental (most frequent): v gl va and v+ gl+ va+. DCO (least frequent): v gl+ va and v+ gl va+. Comparing parental and DCO, middle gene is gl. v–gl: (40+48+11)/726 = 13.6 cM; gl–va: (62+60+11)/726 = 18.3 cM.',
    generate() {
      // Gene names and distances
      const geneSets = [
        { genes: ['v', 'gl', 'va'], d1: rnd(8, 20), d2: rnd(10, 25) },
        { genes: ['a', 'b', 'c'], d1: rnd(5, 18), d2: rnd(12, 28) },
        { genes: ['cn', 'b', 'vg'], d1: rnd(6, 15), d2: rnd(15, 25) },
        { genes: ['y', 'w', 'ec'], d1: rnd(4, 12), d2: rnd(8, 20) },
      ];
      const gs = choice(geneSets);
      const [g1, g2, g3] = gs.genes;
      const d1 = gs.d1; // cM between g1-g2
      const d2 = gs.d2; // cM between g2-g3
      const dco = d1 * d2 / 100; // expected DCO frequency (%)

      const total = rnd(800, 2000);
      // Calculate class sizes
      const n_dco = Math.round((dco / 100) * total);
      const n_sco1 = Math.round(((d1 / 100) - (dco / 100)) * total);
      const n_sco2 = Math.round(((d2 / 100) - (dco / 100)) * total);
      const n_par = total - n_dco * 2 - n_sco1 * 2 - n_sco2 * 2;
      const n_par_each = Math.round(n_par / 2);

      // Gene symbols (lowercase = mutant, + = wild-type)
      const parental1 = `${g1} ${g2} ${g3}`;
      const parental2 = `${g1}+ ${g2}+ ${g3}+`;
      const sco1a = `${g1} ${g2}+ ${g3}+`;
      const sco1b = `${g1}+ ${g2} ${g3}`;
      const sco2a = `${g1}+ ${g2} ${g3}+`;  // Wait, this is wrong for the middle gene.
      // Actually the convention: parental = g1 g2 g3 / g1+ g2+ g3+
      // SCO in interval 1 (between g1 and g2): g1 g2+ g3+ / g1+ g2 g3
      // SCO in interval 2 (between g2 and g3): g1+ g2 g3+ is wrong. Let me redo:
      // If parental gametes are [g1 g2 g3] and [g1+ g2+ g3+]:
      // SCO1 (cross between g1 and g2): [g1 g2+ g3+] and [g1+ g2 g3]
      // SCO2 (cross between g2 and g3): [g1 g2 g3+] and [g1+ g2+ g3]
      // DCO: [g1 g2+ g3] and [g1+ g2 g3+]

      const askType = choice(['calc_d1', 'calc_d2', 'identify_order']);

      let problem, question, answer, tolerance, steps;

      const classStr = `Parentals: ${n_par_each} each (${parental1} and ${parental2})\nSCO interval 1: ${n_sco1} each (${g1} ${g2}+ ${g3}+ and ${g1}+ ${g2} ${g3})\nSCO interval 2: ${n_sco2} each (${g1} ${g2} ${g3}+ and ${g1}+ ${g2}+ ${g3})\nDCO: ${n_dco} each (${g1} ${g2}+ ${g3} and ${g1}+ ${g2} ${g3}+)\nTotal offspring: ${total}`;

      if (askType === 'calc_d1') {
        problem = `A three-point test cross of ${g1} ${g2} ${g3} / ${g1}+ ${g2}+ ${g3}+ × triple recessive produces the following offspring classes:\n${classStr}`;
        question = `Calculate the map distance between ${g1} and ${g2} (interval 1) in centimorgans.`;
        const obsD1 = fmt(((n_sco1 + n_dco) / total) * 100, 1);
        answer = obsD1;
        tolerance = 2.0;
        steps = [
          { label: 'Identify recombinants in interval 1', calc: `SCO₁ + DCO = ${n_sco1} + ${n_dco} = ${n_sco1 + n_dco}\n(DCO counts as a crossover in BOTH intervals)`, result: '' },
          { label: 'Calculate RF₁', calc: `$\\dfrac{${n_sco1 + n_dco}}{${total}} \\times 100 = ${obsD1}\\%$`, result: `RF between ${g1}−${g2} = ${obsD1} cM` },
        ];
      } else if (askType === 'calc_d2') {
        problem = `A three-point test cross of ${g1} ${g2} ${g3} / ${g1}+ ${g2}+ ${g3}+ × triple recessive produces the following offspring classes:\n${classStr}`;
        question = `Calculate the map distance between ${g2} and ${g3} (interval 2) in centimorgans.`;
        const obsD2 = fmt(((n_sco2 + n_dco) / total) * 100, 1);
        answer = obsD2;
        tolerance = 2.0;
        steps = [
          { label: 'Identify recombinants in interval 2', calc: `SCO₂ + DCO = ${n_sco2} + ${n_dco} = ${n_sco2 + n_dco}`, result: '' },
          { label: 'Calculate RF₂', calc: `$\\dfrac{${n_sco2 + n_dco}}{${total}} \\times 100 = ${obsD2}\\%$`, result: `RF between ${g2}−${g3} = ${obsD2} cM` },
        ];
      } else {
        // Identify gene order from parental vs DCO classes
        problem = `In a three-point cross, the parental classes are: ${parental1} and ${parental2}.\nThe double-crossover (least frequent) classes are: ${g1} ${g2}+ ${g3} and ${g1}+ ${g2} ${g3}+.`;
        question = `Determine the correct gene order. Which gene is in the middle?`;
        answer = g2;
        tolerance = 0;
        steps = [
          { label: 'Compare parental to DCO', calc: `Parental: ${g1} ${g2} ${g3} vs DCO: ${g1} ${g2}+ ${g3}\nOnly the ${g2} allele changed position relative to ${g1} and ${g3}`, result: '' },
          { label: 'Middle gene rule', calc: 'The gene whose allele combination flips between parental and DCO class is the MIDDLE gene', result: `Middle gene = ${g2}` },
          { label: 'Correct gene order', calc: `${g1} — ${g2} — ${g3}`, result: `${g2} is in the middle` },
        ];
      }

      return { problem, question, answer, tolerance, steps };
    },
  },

  // 20. Polygenic Trait — Number of Genes
  {
    id: 'polygenic-genes',
    title: 'Polygenic Trait — Estimating Number of Genes',
    event: 'desgen',
    section: '§3.5',
    formula: '$$\\text{phenotypic classes} = 2n + 1 \\qquad P(\\text{extreme}) = \\left(\\tfrac{1}{4}\\right)^n$$\n$$n = \\frac{\\log(P_{\\text{extreme}})}{\\log(0.25)}$$\n(n = number of independently assorting gene pairs)',
    refProblem: 'From §3.5: Two extreme classes each at 1/64 of F2 → (1/4)^n = 1/64 → n = log(1/64)/log(1/4) = 3 genes. Phenotypic classes = 2(3)+1 = 7.',
    generate() {
      const nGenes = rnd(2, 5);
      const nClasses = 2 * nGenes + 1;
      const pExtreme = Math.pow(1 / 4, nGenes);
      const denominator = Math.pow(4, nGenes);

      const askType = choice(['find_n_from_classes', 'find_n_from_extreme', 'find_classes', 'find_extreme']);

      let problem, question, answer, tolerance, steps;

      if (askType === 'find_n_from_classes') {
        problem = `An F2 population produced from a cross between two pure-breeding strains shows ${nClasses} distinct phenotypic classes for a quantitative trait. Assume all gene pairs assort independently.`;
        question = `How many independently assorting gene pairs (n) control this trait?`;
        answer = nGenes;
        tolerance = 0;
        steps = [
          { label: 'Classes formula', calc: '$\\text{classes} = 2n + 1$', result: '' },
          { label: 'Solve for n', calc: `$n = (${nClasses} - 1) \\div 2 = ${nGenes}$`, result: `n = ${nGenes} gene pairs` },
        ];
      } else if (askType === 'find_n_from_extreme') {
        problem = `In an F2 cross, the most extreme phenotypic class (identical to one parental extreme) appears at a frequency of 1/${denominator}.`;
        question = `How many independently assorting gene pairs control this trait?`;
        answer = nGenes;
        tolerance = 0;
        steps = [
          { label: 'Extreme class formula', calc: `$P(\\text{extreme}) = (1/4)^n = 1/${denominator}$`, result: '' },
          { label: 'Solve for n', calc: `$n = \\dfrac{\\log(1/${denominator})}{\\log(1/4)} = \\dfrac{${Math.log10(1 / denominator).toFixed(3)}}{${Math.log10(0.25).toFixed(3)}}$`, result: `$n = ${nGenes}$` },
          { label: 'Verify', calc: `$(1/4)^{${nGenes}} = 1/${denominator}$ ✓`, result: `n = ${nGenes} gene pairs` },
        ];
      } else if (askType === 'find_classes') {
        problem = `A polygenic trait is controlled by ${nGenes} independently assorting gene pairs (AaBbCc... type F1 crossed). Each gene contributes additively.`;
        question = `How many distinct phenotypic classes will appear in the F2 generation?`;
        answer = nClasses;
        tolerance = 0;
        steps = [
          { label: 'Classes formula', calc: '$\\text{phenotypic classes} = 2n + 1$', result: '' },
          { label: 'Substitute', calc: `$2(${nGenes}) + 1 = ${nClasses}$`, result: `${nClasses} phenotypic classes` },
        ];
      } else {
        problem = `A quantitative trait is controlled by ${nGenes} independently assorting gene pairs. An F1 dihybrid (all heterozygous) is self-crossed.`;
        question = `What fraction of F2 offspring will show the most extreme parental phenotype (all additive alleles dominant or all recessive)?`;
        answer = `1/${denominator}`;
        tolerance = 0;
        steps = [
          { label: 'Extreme frequency formula', calc: `$P(\\text{extreme}) = (1/4)^n = (1/4)^{${nGenes}}$`, result: '' },
          { label: 'Calculate', calc: `$(1/4)^{${nGenes}} = 1/${denominator}$`, result: `P(extreme) = 1/${denominator}` },
          { label: 'Interpretation', calc: `Both parental extremes (all-dominant and all-recessive) each appear at 1/${denominator}`, result: '' },
        ];
      }

      return { problem, question, answer, tolerance, steps };
    },
  },

  /* ── Protein Modeling ── */

  // PM-1. Henderson–Hasselbalch — fraction protonated/deprotonated
  {
    id: 'pm-hh',
    title: 'Henderson–Hasselbalch',
    event: 'protmod',
    section: 'Module 1 — Amino Acids',
    formula: '$$\\text{pH} = \\text{pK}_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$$',
    refProblem: 'At pH 7.0, what % of Histidine (pKa 6.0) is protonated? Ratio [A⁻]/[HA] = 10^(7-6) = 10 → fraction protonated = 1/(1+10) ≈ 9.1%.',
    generate() {
      const residues = [
        { name: 'Histidine (His)', pKa: 6.0, protonated: 'imidazolium (+1)', deprotonated: 'imidazole (0)' },
        { name: 'Aspartate (Asp)', pKa: 3.65, protonated: '–COOH (0)', deprotonated: 'carboxylate –COO⁻ (−1)' },
        { name: 'Glutamate (Glu)', pKa: 4.25, protonated: '–COOH (0)', deprotonated: 'carboxylate –COO⁻ (−1)' },
        { name: 'Lysine (Lys)', pKa: 10.5, protonated: '–NH₃⁺ (+1)', deprotonated: '–NH₂ (0)' },
        { name: 'N-terminus', pKa: 8.0, protonated: '–NH₃⁺ (+1)', deprotonated: '–NH₂ (0)' },
        { name: 'C-terminus', pKa: 3.1, protonated: '–COOH (0)', deprotonated: '–COO⁻ (−1)' },
      ];
      const r = choice(residues);
      const pHDelta = (rnd(-20, 20)) / 10;
      const pH = fmt(r.pKa + pHDelta, 1);
      const ratio = Math.pow(10, pH - r.pKa);
      const fracProtonated = 1 / (1 + ratio);
      const pctProt = fmt(fracProtonated * 100, 1);
      return {
        problem: `The pKa of ${r.name} is ${r.pKa}. The solution pH is ${pH}.`,
        question: `What percentage of this residue is in the protonated form (${r.protonated})? Round to one decimal place.`,
        answer: pctProt,
        tolerance: 0.6,
        steps: [
          { label: 'Henderson–Hasselbalch', calc: 'pH = pKa + log([A⁻]/[HA])', result: `${pH} = ${r.pKa} + log([A⁻]/[HA])` },
          { label: 'Solve for ratio', calc: `[A⁻]/[HA] = 10^(${fmt(pH - r.pKa, 1)})`, result: `Ratio = ${fmt(ratio, 3)}` },
          { label: 'Fraction protonated', calc: `1 / (1 + ${fmt(ratio, 3)}) × 100`, result: `${pctProt}% protonated` },
          { label: 'Check', calc: pH > r.pKa ? 'pH > pKa → majority deprotonated (makes sense)' : 'pH < pKa → majority protonated (makes sense)', result: '' },
        ],
      };
    },
  },

  // PM-2. Isoelectric Point (pI)
  {
    id: 'pm-pi',
    title: 'Isoelectric Point (pI)',
    event: 'protmod',
    section: 'Module 1 — Amino Acids',
    formula: '$$\\text{pI} \\approx \\frac{\\text{pK}_{a1} + \\text{pK}_{a2}}{2}$$',
    refProblem: 'Gly: pKa(α-COOH) = 2.34, pKa(α-NH₃⁺) = 9.60 → pI = (2.34 + 9.60)/2 = 5.97.',
    generate() {
      const scenarios = [
        { name: 'Gly (no ionizable side chain)', pKa1: 2.34, pKa2: 9.60 },
        { name: 'Asp (two acidic pKas bracket the neutral form)', pKa1: 2.09, pKa2: 3.86 },
        { name: 'Glu (two acidic pKas bracket the neutral form)', pKa1: 2.19, pKa2: 4.07 },
        { name: 'Lys (two basic pKas bracket the neutral form)', pKa1: 9.18, pKa2: 10.53 },
        { name: 'His', pKa1: 6.00, pKa2: 9.17 },
        { name: 'Ala', pKa1: 2.34, pKa2: 9.69 },
        { name: 'Val', pKa1: 2.32, pKa2: 9.62 },
      ];
      const s = choice(scenarios);
      const pI = fmt((s.pKa1 + s.pKa2) / 2, 2);
      return {
        problem: `For ${s.name}, the two pKa values flanking the neutral species are ${s.pKa1} and ${s.pKa2}.`,
        question: 'Estimate the isoelectric point (pI) to two decimal places.',
        answer: pI,
        tolerance: 0.05,
        steps: [
          { label: 'pI formula', calc: 'pI ≈ (pKa1 + pKa2) / 2', result: '' },
          { label: 'Substitute', calc: `(${s.pKa1} + ${s.pKa2}) / 2`, result: `pI ≈ ${pI}` },
        ],
      };
    },
  },

  // PM-3. Net peptide charge
  {
    id: 'pm-charge',
    title: 'Net Peptide Charge at Given pH',
    event: 'protmod',
    section: 'Module 1 — Amino Acids',
    formula: 'Each group: +1 if basic and pH < pKa (protonated), −1 if acidic and pH > pKa (deprotonated)',
    refProblem: 'Peptide with N-term, C-term, one Asp, one Lys at pH 7: N-term(+1) + C-term(−1) + Asp(−1) + Lys(+1) = 0.',
    generate() {
      const pH = choice([5, 6, 7, 7.4, 8, 9]);
      const sideChains = [
        { name: 'Asp', pKa: 3.65, isAcid: true },
        { name: 'Glu', pKa: 4.25, isAcid: true },
        { name: 'His', pKa: 6.0,  isAcid: false },
        { name: 'Lys', pKa: 10.5, isAcid: false },
        { name: 'Arg', pKa: 12.5, isAcid: false },
        { name: 'Tyr', pKa: 10.1, isAcid: true },
      ];
      const numSC = rnd(1, 3);
      const chosen = [...sideChains].sort(() => Math.random() - 0.5).slice(0, numSC);

      const nTermCharge = pH < 8.0 ? 1 : 0;
      const cTermCharge = pH > 3.1 ? -1 : 0;
      const contributions = [
        { name: 'N-terminus (pKa 8.0)', charge: nTermCharge, note: pH < 8.0 ? 'pH < 8.0 → protonated → +1' : 'pH > 8.0 → deprotonated → 0' },
        { name: 'C-terminus (pKa 3.1)', charge: cTermCharge, note: pH > 3.1 ? 'pH > 3.1 → deprotonated → −1' : 'pH < 3.1 → protonated → 0' },
      ];
      let netCharge = nTermCharge + cTermCharge;
      for (const sc of chosen) {
        const charge = sc.isAcid ? (pH > sc.pKa ? -1 : 0) : (pH < sc.pKa ? 1 : 0);
        netCharge += charge;
        contributions.push({
          name: `${sc.name} side chain (pKa ${sc.pKa})`,
          charge,
          note: sc.isAcid
            ? (pH > sc.pKa ? `pH ${pH} > pKa ${sc.pKa} → deprotonated → −1` : `pH ${pH} < pKa ${sc.pKa} → protonated → 0`)
            : (pH < sc.pKa ? `pH ${pH} < pKa ${sc.pKa} → protonated → +1` : `pH ${pH} > pKa ${sc.pKa} → deprotonated → 0`),
        });
      }
      const scList = chosen.map(s => s.name).join(', ');
      return {
        problem: `A peptide has one N-terminus (pKa 8.0), one C-terminus (pKa 3.1), and these ionizable side chains: ${scList}. pH = ${pH}.`,
        question: `What is the net charge on this peptide at pH ${pH}?`,
        answer: netCharge,
        tolerance: 0,
        steps: [
          ...contributions.map(c => ({ label: c.name, calc: c.note, result: `Charge: ${c.charge >= 0 ? '+' : ''}${c.charge}` })),
          { label: 'Net charge', calc: contributions.map(c => (c.charge >= 0 ? `+${c.charge}` : `${c.charge}`)).join(' + ').replace(/\+ -/g, '+ −'), result: `Net = ${netCharge >= 0 ? '+' : ''}${netCharge}` },
        ],
      };
    },
  },

  // PM-4. Codon combinatorics
  {
    id: 'pm-codons',
    title: 'Codon Combinatorics',
    event: 'protmod',
    section: 'Module 1 — Amino Acids',
    formula: '4³ = 64 total  |  3 stop (UAA, UAG, UGA)  |  61 sense  |  1 start (AUG = Met)',
    generate() {
      const qType = choice(['total', 'stop-count', 'sense-count', 'bases-per-position', 'degeneracy-term']);
      if (qType === 'total') {
        return {
          problem: 'Codons are 3-nucleotide sequences. There are 4 possible bases (A, U, G, C) at each position.',
          question: 'How many total possible codons exist?',
          answer: 64,
          tolerance: 0,
          steps: [{ label: 'Combinatorics', calc: '4 × 4 × 4 = 4³', result: '64 possible codons' }],
        };
      } else if (qType === 'stop-count') {
        return {
          problem: 'The standard genetic code has 64 codons. Three are stop codons (UAA, UAG, UGA).',
          question: 'How many sense codons encode amino acids?',
          answer: 61,
          tolerance: 0,
          steps: [
            { label: 'Stop codons', calc: 'UAA (Ochre), UAG (Amber), UGA (Opal)', result: '3 stop codons' },
            { label: 'Sense codons', calc: '64 − 3', result: '61 sense codons → 20 amino acids' },
          ],
        };
      } else if (qType === 'sense-count') {
        return {
          problem: 'There are 64 total codons and 61 sense codons in the standard genetic code.',
          question: 'How many stop codons are there?',
          answer: 3,
          tolerance: 0,
          steps: [{ label: 'Stop codons', calc: '64 − 61 = 3', result: 'UAA, UAG, UGA' }],
        };
      } else if (qType === 'bases-per-position') {
        return {
          problem: 'The genetic code has 64 total codons, each 3 nucleotides long.',
          question: 'How many different bases are possible at each codon position?',
          answer: 4,
          tolerance: 0,
          steps: [
            { label: 'Work backwards', calc: '4^3 = 64 → base = ⁴√64... or: the 4 RNA bases are A, U, G, C', result: '4 bases per position' },
          ],
        };
      } else {
        return {
          problem: '61 sense codons encode only 20 amino acids (e.g., Leu is encoded by 6 codons; Trp by only 1).',
          question: 'What property of the genetic code does multiple codons per amino acid demonstrate? (one word)',
          answer: 'degeneracy',
          tolerance: 0,
          steps: [{ label: 'Definition', calc: 'Multiple codons → same amino acid', result: 'Degeneracy (also called redundancy)' }],
        };
      }
    },
  },

  // PM-5. α-Helix geometry
  {
    id: 'pm-helix',
    title: 'α-Helix Geometry',
    event: 'protmod',
    section: 'Module 2 — Structure',
    formula: 'Length = n × 1.5 Å   |   Turns = n ÷ 3.6   |   Pitch = 5.4 Å/turn   |   Angular spacing = 100°/residue',
    refProblem: 'An 18-residue helix: length = 18 × 1.5 = 27 Å; turns = 18 ÷ 3.6 = 5.0; angular spacing = 360 ÷ 3.6 = 100°/residue.',
    generate() {
      const qType = choice(['length', 'turns', 'from-length', 'from-turns', 'angular', 'pitch']);
      const n = rnd(7, 35);
      if (qType === 'length') {
        const ans = fmt(n * 1.5, 1);
        return {
          problem: `An α-helix contains ${n} residues.`,
          question: 'What is the length of this helix in Å? (rise per residue = 1.5 Å)',
          answer: ans,
          tolerance: 0.2,
          steps: [
            { label: 'Formula', calc: 'Length = residues × 1.5 Å/residue', result: '' },
            { label: 'Calculate', calc: `${n} × 1.5`, result: `${ans} Å` },
          ],
        };
      } else if (qType === 'turns') {
        const ans = fmt(n / 3.6, 2);
        return {
          problem: `An α-helix contains ${n} residues.`,
          question: 'How many complete turns does it make? (3.6 residues/turn; answer to 2 decimal places)',
          answer: ans,
          tolerance: 0.1,
          steps: [
            { label: 'Formula', calc: 'Turns = residues ÷ 3.6', result: '' },
            { label: 'Calculate', calc: `${n} ÷ 3.6`, result: `${ans} turns` },
          ],
        };
      } else if (qType === 'from-length') {
        const lenTarget = rnd(8, 50);
        const ans = Math.round(lenTarget / 1.5);
        return {
          problem: `An α-helix is ${lenTarget} Å long.`,
          question: 'Approximately how many residues does it contain?',
          answer: ans,
          tolerance: 1,
          steps: [
            { label: 'Rearrange', calc: 'Residues = Length ÷ 1.5', result: '' },
            { label: 'Calculate', calc: `${lenTarget} ÷ 1.5 ≈ ${ans}`, result: `${ans} residues` },
          ],
        };
      } else if (qType === 'from-turns') {
        const turns = rnd(2, 9);
        const ans = Math.round(turns * 3.6);
        return {
          problem: `An α-helix makes ${turns} complete turns.`,
          question: 'How many residues does it contain? (3.6 residues/turn)',
          answer: ans,
          tolerance: 1,
          steps: [
            { label: 'Formula', calc: 'Residues = turns × 3.6', result: '' },
            { label: 'Calculate', calc: `${turns} × 3.6 ≈ ${ans}`, result: `${ans} residues` },
          ],
        };
      } else if (qType === 'angular') {
        return {
          problem: 'An α-helix has 3.6 residues per full 360° turn.',
          question: 'How many degrees does the helix rotate per residue? (This determines which residues face the same side.)',
          answer: fmt(360 / 3.6, 1),
          tolerance: 0.5,
          steps: [
            { label: 'Formula', calc: '360° ÷ 3.6 residues/turn', result: '100° per residue' },
            { label: 'Implication', calc: 'i and i+3 differ by 300°, i+4 by 400° (= 40°)', result: 'i/i+3/i+4/i+7 cluster on the same helical face → amphipathic pattern' },
          ],
        };
      } else {
        return {
          problem: 'An α-helix has 3.6 residues per turn, with a rise of 1.5 Å per residue.',
          question: 'What is the pitch (axial distance per complete turn) in Å?',
          answer: 5.4,
          tolerance: 0.1,
          steps: [
            { label: 'Pitch formula', calc: 'Pitch = residues/turn × rise/residue', result: '' },
            { label: 'Calculate', calc: '3.6 × 1.5', result: '5.4 Å per turn' },
          ],
        };
      }
    },
  },

  // PM-6. Folding thermodynamics (ΔG = ΔH − TΔS)
  {
    id: 'pm-deltag',
    title: 'Folding Thermodynamics — ΔG = ΔH − TΔS',
    event: 'protmod',
    section: 'Module 3 — Thermodynamics',
    formula: '$$\\Delta G = \\Delta H - T\\Delta S \\qquad T(\\text{K}) = T(°\\text{C}) + 273.15$$',
    refProblem: 'ΔH = −40 kJ/mol, ΔS = −0.1 kJ/(mol·K), T = 37°C = 310.15 K → ΔG = −40 − 310.15×(−0.1) = −40 + 31.0 = −9.0 kJ/mol.',
    generate() {
      const qType = choice(['calc-dg', 'sign-flip', 'unit-convert-kcal', 'unit-convert-kj', 'calc-dh']);
      const TC = choice([25, 37, 4, 60]);
      const TK = TC + 273.15;

      if (qType === 'calc-dg') {
        const dH = rnd(-400, 400) * 0.1;
        const dS_J = rnd(-3, 3) * 50;   // J/(mol·K)
        const dS_kJ = dS_J / 1000;
        const dG = fmt(dH - TK * dS_kJ, 2);
        return {
          problem: `ΔH = ${fmt(dH, 1)} kJ/mol, ΔS = ${dS_J} J/(mol·K), T = ${TC}°C.`,
          question: 'Calculate ΔG in kJ/mol. (Watch units: convert ΔS to kJ and T to Kelvin)',
          answer: dG,
          tolerance: 0.5,
          steps: [
            { label: 'Convert T', calc: `${TC} + 273.15`, result: `T = ${TK} K` },
            { label: 'Convert ΔS', calc: `${dS_J} J/(mol·K) ÷ 1000`, result: `ΔS = ${dS_kJ} kJ/(mol·K)` },
            { label: 'Apply ΔG = ΔH − TΔS', calc: `${fmt(dH, 1)} − (${TK} × ${dS_kJ})`, result: `ΔG = ${dG} kJ/mol` },
            { label: 'Interpret', calc: dG < 0 ? 'ΔG < 0 → folding is spontaneous' : 'ΔG > 0 → unfolding is favored', result: '' },
          ],
        };
      } else if (qType === 'sign-flip') {
        const dGFold = rnd(-300, -20) * 0.1;
        return {
          problem: `The free energy of folding is ΔG(folding) = ${fmt(dGFold, 1)} kJ/mol.`,
          question: 'What is ΔG(unfolding) in kJ/mol?',
          answer: fmt(-dGFold, 1),
          tolerance: 0.1,
          steps: [
            { label: 'Relationship', calc: 'Unfolding is the reverse of folding', result: 'ΔG(unfolding) = −ΔG(folding)' },
            { label: 'Calculate', calc: `−(${fmt(dGFold, 1)})`, result: `ΔG(unfolding) = +${fmt(-dGFold, 1)} kJ/mol` },
          ],
        };
      } else if (qType === 'unit-convert-kcal') {
        const kcal = rnd(5, 200) * 0.1;
        const kJ = fmt(kcal * 4.184, 2);
        return {
          problem: `A protein's ΔG(folding) = −${fmt(kcal, 1)} kcal/mol.`,
          question: 'Convert to kJ/mol. (1 kcal = 4.184 kJ)',
          answer: -parseFloat(kJ),
          tolerance: 0.1,
          steps: [
            { label: 'Conversion', calc: '1 kcal = 4.184 kJ', result: '' },
            { label: 'Calculate', calc: `−${fmt(kcal, 1)} × 4.184`, result: `−${kJ} kJ/mol` },
          ],
        };
      } else if (qType === 'unit-convert-kj') {
        const kJ = rnd(5, 200) * 0.1;
        const kcal = fmt(kJ / 4.184, 2);
        return {
          problem: `A protein's ΔG(folding) = −${fmt(kJ, 1)} kJ/mol.`,
          question: 'Convert to kcal/mol. (1 kcal = 4.184 kJ)',
          answer: -parseFloat(kcal),
          tolerance: 0.05,
          steps: [
            { label: 'Conversion', calc: '1 kcal = 4.184 kJ  →  kJ ÷ 4.184 = kcal', result: '' },
            { label: 'Calculate', calc: `−${fmt(kJ, 1)} ÷ 4.184`, result: `−${kcal} kcal/mol` },
          ],
        };
      } else {
        const dS_J = rnd(-3, 3) * 50;
        const dS_kJ = dS_J / 1000;
        const dG = rnd(-200, 200) * 0.1;
        const dH = fmt(dG + TK * dS_kJ, 2);
        return {
          problem: `At ${TC}°C, ΔG = ${fmt(dG, 1)} kJ/mol and ΔS = ${dS_J} J/(mol·K).`,
          question: 'Calculate ΔH in kJ/mol.',
          answer: parseFloat(dH),
          tolerance: 0.5,
          steps: [
            { label: 'Rearrange', calc: 'ΔH = ΔG + TΔS', result: '' },
            { label: 'Convert', calc: `T = ${TK} K; ΔS = ${dS_kJ} kJ/(mol·K)`, result: '' },
            { label: 'Calculate', calc: `${fmt(dG, 1)} + (${TK} × ${dS_kJ})`, result: `ΔH = ${dH} kJ/mol` },
          ],
        };
      }
    },
  },

  // PM-7. Koga topology arithmetic + success rates
  {
    id: 'pm-topology',
    title: 'Koga Topology Arithmetic',
    event: 'protmod',
    section: 'Module 4 — Koga Design',
    formula: 'Total residues = Σ strands + Σ helices + Σ loops  |  Success rate = successes ÷ total × 100%',
    refProblem: 'Fold-I example: 4 strands × 7 + 2 helices × 18 + loops (3+2+2+3+2) = 28 + 36 + 12 = 76 residues.',
    generate() {
      const qType = choice(['total-residues', 'success-rate', 'funnel-rate', 'invert-topology']);
      if (qType === 'total-residues') {
        const ns = rnd(2, 4), nh = rnd(1, 3);
        const sl = rnd(5, 10), hl = rnd(10, 25);
        const nLoops = ns + nh - 1;
        const loops = Array.from({ length: nLoops }, () => rnd(2, 5));
        const total = ns * sl + nh * hl + loops.reduce((a, b) => a + b, 0);
        return {
          problem: `A topology has ${ns} β-strands (${sl} residues each), ${nh} α-helices (${hl} residues each), and ${nLoops} loops (lengths: ${loops.join(', ')}).`,
          question: 'What is the total number of residues?',
          answer: total,
          tolerance: 0,
          steps: [
            { label: 'Strands', calc: `${ns} × ${sl}`, result: `${ns * sl} residues` },
            { label: 'Helices', calc: `${nh} × ${hl}`, result: `${nh * hl} residues` },
            { label: 'Loops', calc: loops.join(' + '), result: `${loops.reduce((a, b) => a + b, 0)} residues` },
            { label: 'Total', calc: `${ns * sl} + ${nh * hl} + ${loops.reduce((a, b) => a + b, 0)}`, result: `${total} residues` },
          ],
        };
      } else if (qType === 'success-rate') {
        const total = rnd(5, 25);
        const succ = rnd(1, Math.floor(total * 0.65));
        const rate = fmt((succ / total) * 100, 1);
        return {
          problem: `In a design campaign, ${succ} of ${total} proteins showed cooperative two-state thermal denaturation.`,
          question: 'What is the experimental success rate (%)? Round to one decimal place.',
          answer: parseFloat(rate),
          tolerance: 0.2,
          steps: [
            { label: 'Formula', calc: '(successes / total) × 100', result: '' },
            { label: 'Calculate', calc: `(${succ} / ${total}) × 100`, result: `${rate}%` },
          ],
        };
      } else if (qType === 'funnel-rate') {
        const startN = rnd(50, 500);
        const expected = Math.round(startN * 0.10);
        return {
          problem: `Koga et al. found that ~10% of designed proteins have a funnel-shaped energy landscape. A lab generates ${startN} designs.`,
          question: 'How many are expected to be funnel-shaped?',
          answer: expected,
          tolerance: 3,
          steps: [
            { label: 'Apply rate', calc: `${startN} × 0.10`, result: `≈ ${expected} designs` },
          ],
        };
      } else {
        const total = rnd(50, 120);
        const ns = rnd(2, 4), nh = rnd(1, 3);
        const sl = rnd(5, 9), hl = rnd(12, 22);
        const nLoops = ns + nh - 1;
        const loopTotal = total - ns * sl - nh * hl;
        if (loopTotal < nLoops || loopTotal > nLoops * 6) {
          // fallback to success-rate variant
          const total2 = rnd(5, 20), succ2 = rnd(1, Math.floor(total2 * 0.5));
          const rate2 = fmt((succ2 / total2) * 100, 1);
          return {
            problem: `${succ2} of ${total2} designed proteins fold cooperatively.`,
            question: 'What is the success rate (%)?',
            answer: parseFloat(rate2),
            tolerance: 0.2,
            steps: [{ label: 'Calculate', calc: `(${succ2}/${total2}) × 100`, result: `${rate2}%` }],
          };
        }
        return {
          problem: `A ${total}-residue protein has ${ns} strands (${sl} residues each), ${nh} helices (${hl} residues each), and ${nLoops} loops sharing ${loopTotal} residues total.`,
          question: 'What is the average loop length (residues per loop)?',
          answer: fmt(loopTotal / nLoops, 1),
          tolerance: 0.2,
          steps: [
            { label: 'Total residues check', calc: `${ns * sl} (strands) + ${nh * hl} (helices) + ${loopTotal} (loops) = ${total}`, result: '✓' },
            { label: 'Average loop', calc: `${loopTotal} ÷ ${nLoops}`, result: `${fmt(loopTotal / nLoops, 1)} residues per loop` },
          ],
        };
      }
    },
  },

  // PM-8. Residue range / element length
  {
    id: 'pm-range',
    title: 'Residue Range Counting (JUDE)',
    event: 'protmod',
    section: 'Module 2 — Structure',
    formula: 'Length = end − start + 1',
    refProblem: 'If a helix spans residues 23–35: length = 35 − 23 + 1 = 13 residues.',
    generate() {
      const start = rnd(1, 90);
      const len = rnd(4, 30);
      const end = start + len - 1;
      const qType = choice(['find-length', 'find-end', 'find-start']);
      if (qType === 'find-length') {
        return {
          problem: `In the JUDE view of 2LV8, a secondary structure element spans residues ${start}–${end}.`,
          question: 'How many residues does this element contain?',
          answer: len,
          tolerance: 0,
          steps: [
            { label: 'Formula', calc: 'Length = end − start + 1', result: '' },
            { label: 'Calculate', calc: `${end} − ${start} + 1`, result: `${len} residues` },
          ],
        };
      } else if (qType === 'find-end') {
        return {
          problem: `A helix begins at residue ${start} and contains ${len} residues.`,
          question: 'What is the last (C-terminal) residue number of this helix?',
          answer: end,
          tolerance: 0,
          steps: [{ label: 'Formula', calc: `end = start + length − 1 = ${start} + ${len} − 1`, result: `Residue ${end}` }],
        };
      } else {
        return {
          problem: `A β-strand ends at residue ${end} and contains ${len} residues.`,
          question: 'What is the first (N-terminal) residue number of this strand?',
          answer: start,
          tolerance: 0,
          steps: [{ label: 'Formula', calc: `start = end − length + 1 = ${end} − ${len} + 1`, result: `Residue ${start}` }],
        };
      }
    },
  },

];

/* ── Export for app.js ───────────────────────────────── */
window.CALC_MODULES = CALC_MODULES;
window.CODON_TABLE = CODON_TABLE;
