export const ch23 = {
  id: "miller_ch23",
  chapterNumber: 23,
  title: "Intravenous Drug Delivery Systems",
  bookId: "miller",
  readTimeMinutes: 35,
  sections: [
    {
      title: `INTRAVENOUS DRUG DELIVERY SYSTEMS`,
      content: `Comprehensive Board Review & Study Guide | Reference: Miller's Anesthesia Chapter 23`
    },
    {
      title: `1. Core Pharmacokinetic Principles in IV Anesthesia`,
      content: `The core objective of optimal intravenous drug dosing is to achieve and maintain a precise, predictable time
course of therapeutic effect (rapid onset, smooth maintenance, and fast recovery) while minimizing dose-
dependent adverse outcomes. Unlike inhaled anesthetics, where inspired and end-tidal concentrations are
measured  in  real  time  ("online"),  the  actual  plasma  or  effect-site  concentrations  of  IV  drugs  are  not
immediately measurable in clinical practice.
Multicompartment Mammillary Models
The  pharmacokinetics  of  intravenous  anesthetic  agents  are  mathematically  described  by  mammillary
multicompartment models. Standard teaching assumes that an IV drug injected as a bolus mixes instantly in
the plasma central compartment, resulting in an immediate peak plasma concentration. This relationship
relates  drug  input  over  time,  I(t),  to  plasma  concentration  over  time,  C(t),  via  a  sum  of  exponentials
(polyexponential curve):
C(t) = I(t) * ∑i=1
n Aie-λit
Where:
The asterisk (*) denotes the mathematical process of  convolution—breaking an infusion into discrete
temporal bits and summing their individual disposition profiles up to time point t.
The integer n represents the number of compartments (typically 2 or 3).
The coefficients (Ai) depict the relative contribution of each half-life component to overall disposition.
The exponents (λi) are inversely proportional to compartment half-lives ( half-life = ln 2 / λ = 0.693 / λ ). The
smallest λ governs the longest (terminal) half-life.
BOARD EXAM PEARL: Clinical Significance of Coefficients vs. Half-Lives
If an anesthetic agent possesses a very prolonged terminal elimination half-life but its corresponding
coefficient (Ai) is exceptionally small relative to other coefficients, that long half-life is clinically meaningless
after brief administration. Conversely, if a long half-life is linked to a large coefficient, the drug's effects will
persist extensively even after a brief dose or short infusion. 
Linearity and Superposition
Multicompartment models assume mathematical  linearity. This implies the system obeys the  principle of
superposition:  the  body  processes  each  individual  bit  of  drug  via  polyexponential  decay  completely
independently, meaning the disposition of one bit of drug does not alter or influence the disposition of any
other bit. Doubling the dose (I) directly doubles the resulting concentrations (C).
• 
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 1

Anatomical and Physiological Compartment Correlates
While the models are purely mathematical transformations of observed plasma concentration-time data, they
are conceptually visualized as interconnected volumes:
Central Compartment (V 1): Represents the initial distribution volume, encompassing the rapidly mixing
fraction of the blood volume and first-pass pulmonary uptake.
Rapidly Equilibrating Peripheral Compartment (V 2): Corresponds physiologically to highly vascular,
lean tissues and visceral organs (e.g., splanchnic bed, muscle).
Slowly Equilibrating Peripheral Compartment (V 3): Corresponds to poorly vascularized tissues with
high lipid solubility and storage capacity (e.g., fat stores).
Clearances: Systemic clearance ( Cl1 or removal from the central compartment via biotransformation/
elimination, governed by k10) and intercompartmental clearances ( Cl2, Cl3, representing bidirectional drug
movement governed by rate constants such as k12, k21, k13, k31).
Steady-State Volume of Distribution (Vd ss): The algebraic sum of all individual compartment volumes
(V1 + V 2 + V 3). It represents the proportionality constant relating total drug amount in the body to plasma
concentration at complete equilibrium.
Front-End Kinetic Modifications
Standard polyexponential models assume complete, instantaneous mixing in V1 at exactly t = 0 . In reality, it
takes approximately 30 to 45 seconds  for an intravenously injected drug to travel from the venous injection
site through the right heart and pulmonary circulation into the arterial circulation. This model misspecification
can distort the predicted concentration-effect relationship immediately following a bolus. Advanced models
address this via front-end kinetic modifications:
Masui Propofol Model with LAG & Transit Compartments: Incorporates a time shift (LAG time, which is
age-dependent) and a series of 6 presystemic  TRANSIT compartments  to accurately reflect the early
phase of propofol delivery across a broad infusion range (10 to 160 mg/kg/h).
Henthorn Recirculatory Ketamine Model:  Utilizes simultaneous arterial and venous sampling data to
demonstrate that arterial concentrations during active infusion consist of two distinct kinetic components:
partially mixed (lung-mixed) drug  and  fully mixed-recirculated drug . The partially mixed component is
proportional to the ratio of infusion rate to total pharmacokinetic flow.`
    },
    {
      title: `2. Pharmacodynamic Considerations & The Biophase`,
      content: `The biological target organ of an anesthetic drug is rarely the plasma. Achieving optimal titration requires
understanding the biophase (the virtual effect site).
Hysteresis and the Effect Compartment
Even after a drug enters the arterial circulation, a distinct temporal delay occurs before its clinical effect
becomes manifest. This delay is driven by the time required for the drug to be delivered to the target organ,
penetrate  tissues,  bind  to  specific  receptors,  and  activate  intercellular  effectuation  pathways.  This
phenomenon is termed  hysteresis. When plotting plasma concentration against clinical effect over time, a
distinct counterclockwise loop is formed.
• 
• 
• 
• 
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 2

To eliminate this loop mathematically and reveal a static, synchronized concentration-response relationship,
Hull  and  Sheiner  introduced  the  concept  of  the  virtual  effect  compartment.  This  compartment  is  a
theoretical space without mass or physical volume, which receives negligible drug quantities from the central
compartment  (thereby  exerting  zero  influence  on  plasma  pharmacokinetics).  Bidirectional  equilibration  is
governed by a single parameter:
ke0 (Effect-Site Equilibration Rate Constant): Reflects the rate of drug flow out of the effect site into the
environment. The time required for the biophase concentration to reach 50% of a constantly maintained
plasma concentration is the equilibration half-life: t1/2ke0 = 0.693 / ke0.
Measures of Drug Effect
Titration relies on quantifying effects via continuous or categorical measures:
Direct Pharmacodynamic Measures:  Ideal for neuromuscular blocking drugs, where electromyography
or  acceleromyography  measures  the  percentage  change  of  the  twitch  response  (T1%)  following
supramaximal stimulation (e.g., rocuronium, cisatracurium).
Surrogate/Processed Measures:  Necessary for hypnotics and opioids where clinical states (amnesia,
antinociception)  are  unmeasurable.  Continuous  processed  electroencephalographic  (pEEG)  metrics
include the Bispectral Index (BIS) or Patient State Index (PSI). Categorical clinical scoring systems include
the Observer's Assessment of Alertness/Sedation (OAA/S) and the Modified OAA/S (MOAA/S).
Neural Inertia and Asymmetry
Standard effect-site modeling assumes that anesthesia induction and recovery are entirely symmetric, fluid,
state-independent  processes  solely  delayed  by  drug  equilibration  kinetics.  However,  growing  evidence
introduces the concept of neural inertia: a fundamental bi-stability where the neural pathways and network
state transitions required to induce unconsciousness differ fundamentally from those required to emerge from
it. Animal and human data show that this asymmetric aggregate propensity for state transitions appears
uniquely prominent with propofol (and absent with sevoflurane) and is highly dependent on the specific
pharmacodynamic endpoint monitored.
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 3

Table 23.1: High-Yield Pharmacodynamic and Equilibration Constants
The following table outlines the exact time to peak effect and equilibration half-lives for major intravenous
anesthetic agents as measured by electroencephalography (EEG) or Modified OAA/S scores:
Drug Time to Peak Drug
Effect (min)*
t1/2ke0
(min)
Clinical High-Yield Board Context
Morphine 19.0 264.0 Prolonged latency to peak effect; extreme risk of
stacking doses.
Fentanyl 3.6 4.7 Slower onset than alfentanil; requires careful timing
before intense stimuli.
Alfentanil 1.4 0.9 Rapidly equilibrates; effect-site concentration mirrors
plasma closely.
Sufentanil 5.6 3.0 Longer time to peak effect than fentanyl; highly potent.
Remifentanil 1.8 1.3 Ultra-rapid onset and offset due to structural esterase
metabolism.
Ketamine — 3.5 NMDA antagonist with complex recirculatory front-end
kinetics.
Propofol 1.6 1.7 Gold standard for induction and maintenance TIVA.
Thiopental 1.6 1.5 Rapid induction but accumulates in tissues, leading to
delayed recovery.
Midazolam 2.8 4.0 Requires spacing doses at least 3 to 5 minutes apart to
avoid overdose.
Etomidate 2.0 1.5 Hemodynamically stable but induces profound adrenal
suppression.
Remimazolam 3.0+ 2.7† Novel short-acting esterase-metabolized
benzodiazepine.
*Measured by EEG except where noted; +Measured by Modified OAA/S score; †Derived independently via specified PK model.
Indirect-Effect Models
Certain drug effects do not manifest instantly upon receptor binding in the biophase but reflect the alteration of
complex physiological feedback loops. A classic example is opioid-induced ventilatory depression. Opioids
directly depress central ventilatory drive; however, the subsequent gradual accumulation of arterial carbon
dioxide ( PaCO2) acts as a powerful physiological stimulant that counteracts this depression. Modeling this
phenomenon requires integrating both direct and indirect components via a differential equation (Bouillon et
al. model):
Chapter 23: IV Drug Delivery Systems - Review Guide Page 4

d/dt(PaCO2) = ke1 • [1 - (Ce
γ / (C50
γ + Ce
γ))] • [PbiophaseCO2(t) / PbiophaseCO2(0)]Γ
Where  ke1 represents  the  elimination  rate  constant  for  CO2,  C50 is  the  effect-site  opioid  concentration
provoking a 50% reduction in baseline ventilatory drive, and Γ reflects the physiological gain or steepness of
the CO2 effect on ventilation.`
    },
    {
      title: `3. Drug Potency and Response Surfaces`,
      content: `The C50 Concept
Analogous to the Minimum Alveolar Concentration (MAC) for volatile anesthetics, intravenous drug potency is
quantified by the C50: the steady-state drug concentration associated with a 50% probability of suppressing a
specific response to a defined stimulus in a population. When the target is based on modeled effect-site
values, it is designated as Ce50 to distinguish it from plasma-based Cp50.
Binary  (Quantal)  vs.  Continuous  Effects: Binary  effects  represent  dichotomous  outcomes  (e.g.,
movement vs. no movement, or presence vs. absence of hypertension upon skin incision or endotracheal
intubation). Each unique stimulus-response pairing has its own distinct  C50. Continuous metrics track
graded physiologic transitions (e.g., a specific percentage depression of maximal EEG amplitude).
Ceiling Effects: Certain drugs exhibit an absolute pharmacodynamic ceiling. For instance, opioids reach a
plateau in their capacity to suppress autonomic or somatic reactivity to noxious surgical stimulation. In
these cases, C50 is defined as the concentration associated with the drug effect in one-half of the specific
fraction of patients capable of demonstrating a response.
High-Yield Potency Values (Kuizenga et al. Study)
A landmark head-to-head evaluation of healthy volunteers mapped the steady-state population C50 values for
propofol versus sevoflurane across graded stimuli:
No Response to Calling Name (NRCN): Propofol = 1.62 mcg/mL | Sevoflurane = 0.64 vol%
Tolerance to Shake and Shout (TOSS): Propofol = 1.85 mcg/mL | Sevoflurane = 0.90 vol%
Tolerance to Tetanic Stimulation (TOTS): Propofol = 2.82 mcg/mL | Sevoflurane = 0.91 vol%
Post  hoc  analysis  demonstrated  that  individual  C50 values  for  propofol  and  sevoflurane  were  perfectly
correlated (correlation coefficient = 1) for sedation thresholds (NRCN and TOSS), confirming a shared macro-
anatomical  or  functional  target  pathway.  However,  individual  thresholds  for  the  intense  noxious  stimulus
(TOTS) were completely uncorrelated (correlation coefficient = 0), reflecting distinct mechanistic pathways for
suppressing motor reactions. Critically, sevoflurane demonstrated a far superior intrinsic capacity to block
sensory inputs compared to propofol single-drug regimens.
• 
• 
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 5

CLINICAL CAVEAT: Biological and Covariate Variability
Even sophisticated population pharmacokinetic-pharmacodynamic models fail to fully capture broad biological
variability across individuals. For example, the minimum effective analgesic concentration of fentanyl is 0.6
ng/mL on average, but it varies between individual patients from 0.2 to 2.0 ng/mL (a 10-fold range). Similar 5-
to 10-fold variations exist for alfentanil and sufentanil, mandating that IV drugs always be titrated dynamically
to clinical endpoints. 
Allometric Scaling Theory
To adjust for body size variations across the age spectrum, models employ allometric scaling derived from
fractal geometry and space-filling hierarchical metabolic theories (West-Brown-Enquist theory). According to
pure theory:
Compartmental Volumes scale linearly with body size (exponent of 1.0).
Clearances scale fractionally to the ¾ power of body size (exponent of 0.75).
This explains why pediatric patients require significantly larger doses per kilogram of body weight compared to
adults. However, for neonates and infants, immature hepatic/renal metabolic machinery requires incorporating
a dedicated maturation factor (based on postmenstrual age) that suppresses clearance values below what
allometric theory alone would predict.
Pharmacodynamic Drug Interactions & Response Surfaces
When multiple anesthetic agents are co-administered, their combined potency shifts, creating an interaction
that can be classified into three distinct categories:
Additive: Occurs when drugs sharing identical mechanisms are combined. The cumulative effect equals
the simple sum of their individual doses.
Supra-additive (Synergistic): Occurs when drugs acting via distinct physiological mechanisms interact to
produce a clinical effect far exceeding simple mathematical summation.
Infra-additive  (Antagonistic): The  combined  effect  is  less  than  mathematically  expected  (e.g.,  the
combination of propofol and ketamine for the endpoint of immobility in humans).
Conventional isobolographic analysis only charts interaction behavior at a single, fixed effect level (e.g., the
50% probability line). Because drug interactions often change across different depths of anesthesia (e.g.,
additive  at  50%  effect  but  highly  synergistic  at  95%  effect),  modern  clinical  pharmacology  utilizes  3D
Response Surface Modeling . These high-dimensional structures map the full continuum of concentration
combinations against the entire spectrum of clinical response probabilities.
• 
• 
1. 
2.`
    },
    {
      title: `3.`,
      content: `Chapter 23: IV Drug Delivery Systems - Review Guide Page 6

High-Yield Anesthetic Interaction Profiles:
Volatile Anesthetics and Opioids: Profoundly synergistic. Low concentrations of an opioid produce
a steep, dramatic reduction in the MAC of a volatile agent. This reduction eventually plateaus; further
escalation of the opioid dose yields zero clinical benefit and prolongs recovery.
Sevoflurane + Alfentanil: Highly synergistic for heart rate and respiratory depression endpoints, but
completely independent for processed EEG (BIS) metrics.
Sevoflurane + Remifentanil: Strictly additive on the resting cortical activity (BIS, state entropy, and
response entropy), but highly supra-additive for preventing purposeful movement following intense
pain.  Adding  nitrous  oxide  (N2O)  imparts  a  predictable  additive  effect  equivalent  to  0.54  vol%
sevoflurane and 0.27 ng/mL fentanyl.
Propofol + Fentanyl: Strongly synergistic in suppressing autonomic and somatic responses to skin
incision, peritoneal incision, and abdominal wall retraction. Fentanyl does not alter systolic blood
pressure  pre-stimulation,  but  propofol  does.  The  two  drugs  demonstrate  powerful  synergism  in
blunting post-stimulation blood pressure spikes.
Propofol + Sufentanil:  Demonstrates a more additive profile for the specific endpoint of Loss of
Consciousness (LOC). A targeted combination of propofol 1.2 mcg/mL and sufentanil 0.456 ng/mL
provides  excellent  analgo-sedation  for  burn  wound  dressing  changes  with  minimal  respiratory
depression.
Propofol  +  Remifentanil: Strongly  synergistic  for  noxious  surgical  stimuli  and  clinical  hypnotic
scores. Apnea and muscle rigidity show complex interaction profiles (apnea is synergistic, whereas
remifentanil-induced muscle rigidity is infra-additively blunted by propofol). The population  C50 for
apnea occurs at a remifentanil concentration of 8.99 ng/mL and propofol concentration of 6.26 mcg/
mL. The population C50 for loss of consciousness occurs at a remifentanil concentration of 13.9 ng/
mL and propofol concentration of 3.04 mcg/mL.
Propofol  +  Dexmedetomidine: The  concentration  of  propofol  required  to  achieve  adequate
anesthesia  (EC50)  in  pediatric  patients  undergoing  esophagogastroduodenoscopy  is  completely
unaffected by a concomitant infusion of dexmedetomidine (1 mcg/kg given over 10 minutes).`
    },
    {
      title: `4. Designing Dosing Regimens & Clinical Contexts`,
      content: `The Loading Bolus and Vdpe
Calculating an initial loading bolus based on the central compartment volume ( Loading  dose  =  CT ×  V1)
ensures that the desired concentration is achieved only for a transient instant; plasma concentrations rapidly
fall below the target as the drug distributes into peripheral tissues. Conversely, using the steady-state volume
(CT × Vd ss) creates a massive, dangerously prolonged plasma overshoot resulting in severe cardiovascular
instability.
To resolve this, modern pharmacology utilizes the Volume of Distribution at the Time of Peak Effect
(Vdpe). This parameter represents the apparent volume into which the drug has diluted at the exact moment
when the plasma and effect-site concentrations achieve pseudo-equilibration following a bolus injection:
• 
• 
• 
• 
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 7

Vdpe = Bolus amount / Cpe
To accurately achieve a desired therapeutic biophase target without risking a toxic overshoot, the loading
bolus must be calculated as follows:
Loading dose = CT × Vdpe
Table 23.4: Comparative Volumetric Constants for Loading Dose Calculations
Drug
Central
Compartment
Volume (V1, L)
Volume at
Peak Effect
(Vdpe, L)
Clinical Board-Style Dosing Example
Fentanyl 12.7 75.0
To achieve a target of 3.0 ng/mL, an accurate loading
dose is 225 mcg (3.0 × 75). Conventional V1 dosing
suggests an ineffective 39 mcg, while Vdss suggests a
toxic 1080 mcg overshoot.
Alfentanil 2.19 5.9 Small Vdpe reflects its exceptionally rapid equilibration
and high diffusibility.
Sufentanil 17.8 89.0 Large peripheral distribution phase requires a substantial
volumetric consideration.
Remifentanil 5.0 17.0 Rapidly metabolized, but requires initial volumetric
saturation to establish target biophase levels.
Propofol 6.7 37.0 Standard adult induction profiles directly correlate with
this apparent volume.
Thiopental 5.6 14.6 Relatively small peak volume; extensive subsequent
redistribution into lipid stores occurs later.
Midazolam 3.4 31.0 Substantial peripheral tissue uptake accounts for its
prolonged sedative trail.
Maintenance Infusion Dynamics
The standard rate at which an active drug exits the central compartment is defined as systemic clearance
multiplied by plasma concentration. However, calculating maintenance infusions purely as Maintenance rate =
CT × ClS is accurate only at complete equilibrium  after many hours. At all earlier time points, this equation
severely underestimates the required infusion rate because it completely fails to account for active drug
distribution into peripheral tissue compartments.
Because net drug flow into peripheral tissues exponentially declines as tissues achieve saturation, the infusion
rate required to maintain a perfectly stable, constant plasma target concentration must stepwise decrease
over time according to the formal disposition equation:
Maintenance infusion rate = CT × V1 × (k10 + k12e-k21t + k13e-k31t)
Chapter 23: IV Drug Delivery Systems - Review Guide Page 8

This forms the pharmacological foundation of the  Nomograms for Maintenance Infusions . For example,
maintaining a stable sufentanil target of 0.16 ng/mL requires a structured, downward-titrated scheme: 0.6
mcg/kg/h at 5 minutes, 0.5 mcg/kg/h at 10 minutes, 0.4 mcg/kg/h at 20 minutes, and 0.3 mcg/kg/h at 40
minutes.
Recovery and Context-Sensitive Decrement Times
The terminal elimination half-life is entirely incapable of predicting the clinical time course of drug decay or the
speed of awakening following a continuous infusion. Instead, recovery kinetics are governed by  Context-
Sensitive Decrement Times . This parameter represents the time required for a drug concentration in a
specific compartment (plasma or effect-site) to decrease by a defined percentage once the maintenance
infusion is discontinued, expressed as a direct function of the total infusion duration (the context).
The Context-Sensitive Half-Time (50% decrement) is highly dependent on duration. For short infusions,
redistribution  from  the  central  compartment  into  unfilled  peripheral  compartments  acts  as  a  primary
mechanism driving a rapid fall in plasma levels. For prolonged infusions, peripheral compartments become
saturated, eliminating the concentration gradient. The context-sensitive half-time for fentanyl escalates
dramatically over time, rendering it unsuitable for maintenance infusions. Conversely, propofol maintains a
flat  context-sensitive  half-time  curve  for  several  hours  due  to  rapid  metabolic  clearance  and  a  large
peripheral capacity, facilitating rapid emergence. Remifentanil displays a completely flat, context-insensitive
half-time profile (~3 to 4 minutes) due to exclusive metabolism via non-specific tissue and blood esterases.
Small increases in the required percentage decrement can result in disproportionately large, unexpected
extensions in the time required for recovery. For example, the time required to achieve a 60% effect-site
decrement can be more than double the time needed for a 50% decrement.
Optimizing Emerging Profiles (Vuyk Simulation Surfaces)
Awakening depends on the rate of concentration decay for both the hypnotic and opioid agents and their
relative synergy for loss of consciousness versus suppression of intense surgical pain. Response surfaces
map the specific drug ratios that optimize emergence:
Propofol-Fentanyl Infusions: Maintaining a fentanyl target within the 1.0 to 1.5 ng/mL range paired with a
propofol concentration of 3.0 to 3.5 mcg/mL ensures adequate surgical anesthesia and minimizes the total
time required to emerge. For example, following a 15-minute infusion, a combination of 1.8 mcg/mL
propofol and 6 ng/mL fentanyl requires 12 minutes to awaken; optimizing the ratio to 3.5 mcg/mL propofol
and 1.5 ng/mL fentanyl reduces emergence time to exactly 8 minutes. Escalating opioid concentrations
beyond  the  established  therapeutic  analgesic  range  (e.g.,  >80  ng/mL  for  alfentanil,  >0.15  ng/mL  for
sufentanil) provides zero additional surgical block and delays emergence. If a patient displays signs of
inadequate anesthesia intraoperatively, clinicians should increase the hypnotic target rather than extending
the opioid target beyond the analgesic range.
Propofol-Remifentanil  Infusions: Remifentanil's  ultra-rapid  esterase  clearance  alters  this  paradigm.
Utilizing high remifentanil concentrations (5 to 7 ng/mL) permits a significant downward adjustment of the
propofol maintenance target to 2.0 to 2.5 mcg/mL. Upon termination of the infusions, the rapid clearance of
remifentanil ensures the patient awakens within 6 minutes, even after an infusion of 600 minutes' duration.
Because a propofol target of 2.0 mcg/mL falls below the standalone population threshold for wakefulness,
this technique should ideally be paired with processed EEG monitoring to ensure depth of anesthesia is
adequate and prevent accidental awareness.
• 
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 9`
    },
    {
      title: `5. Target-Controlled Infusion (TCI) Model Selection`,
      content: `Target-Controlled  Infusion  (TCI)  devices  utilize  pre-programmed  multi-compartment  pharmacokinetic-
pharmacodynamic models to automatically calculate and adjust the step-down infusion rates required to
achieve a user-specified target concentration in either the plasma or the effect compartment. The foundational
algorithm  is  the  Bolus-Elimination-Transfer  (BET)  scheme,  which  delivers  an  initial  loading  bolus  to
instantly achieve the target volume, a constant infusion component to match the fixed elimination rate constant
(k10),  and  an  exponentially  declining  infusion  component  to  perfectly  offset  drug  transfer  to  peripheral
volumes.
Adult Propofol Models
Marsh Model:  Incorporated into early commercial TCI systems (Diprifusor). It utilizes a fixed central
volume scale where body weight is the sole significant demographic covariate. It exhibits acceptable long-
infusion precision but lacks an integrated effect-compartment model and significantly underpredicts plasma
concentrations in morbidly obese patients if total body weight is entered without modification.
Schnider Model: A highly sophisticated model incorporating age, height, total body weight, and lean body
mass (LBM) as covariates. It defines an explicit, fixed time-to-peak effect ( tpeak = 1.6 minutes) to derive its
internal ke0 parameter. A critical mathematical limitation is its reliance on the James Equation to compute
lean body mass. The James equation exhibits quadratic behavior, causing its mathematical output to fold
backward and generate impossible, negative LBM values when applied to severely obese individuals.
Eleveld General Purpose Model:  A modern, universally validated model developed by combining data
across 30 distinct clinical trials (encompassing 15,433 plasma concentration measurements and 28,639
individual pEEG data points). It spans an immense age range (27 weeks postmenstrual age to 88 years)
and weight range (680 g to 160 kg). Key features include: 
Replacement of the flawed James equation with the Al-Sallami Formula for computing fat-free mass
(FFM), ensuring realistic, mathematically stable predictions in the morbidly obese.
Clearances are scaled to body size via a fixed ¾ allometric exponent.
Incorporation of a dedicated postmenstrual age maturation factor for neonates.
Identification  of  concomitant  opioid  co-administration  as  a  significant  covariate  that  alters  propofol
parameters (specifically reducing V3 and Cl1).
Incorporation of an age-dependent effect-site equilibration constant ( ke0) scaled to body weight via a
-0.25 allometric power function, matching an average population Ce50 for BIS of 47.
Pediatric Propofol Models
Kataria Model:  Validated for children aged 3 to 11 years. It utilizes a three-compartment model where
body weight is the sole covariate used to adjust volumes and clearances.
Paedfusor Model: Developed by the Glasgow research group, incorporating a baseline Schüttler model
structure.  It  demonstrates  superior  accuracy  metrics  compared  to  the  Kataria  model  in  pediatric
populations.
Short Pediatric Model:  Demonstrated to have superior predictive precision and the lowest performance
error metrics when applied to pediatric patients undergoing long-duration surgical procedures.
• 
• 
• 
◦ 
◦ 
◦ 
◦ 
◦ 
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 10

Opioid and Benzodiazepine TCI Models
Fentanyl (Shafer Model):  A standard three-compartment model devoid of demographic covariates. It
requires  manual  mathematical  adjustment  when  applied  to  obese  cohorts.  Bae  Allometric  Model:
Developed using adult open abdominal surgery data, defining a Minimum Effective Concentration (MEC)
for postoperative analgesia at 0.72 ng/mL and a Minimum Effective Analgesic Concentration (MEAC) at
0.99 ng/mL.
Sufentanil  (Gepts  Model): A  highly  precise  covariate  model  demonstrating  an  acceptable  Median
Absolute Performance Error (MDAPE) between 18.5% and 29% across both lean and obese adult patient
populations. It utilizes a calculated tpeak of 5.6 minutes to derive its effect-site targeting parameters.
Alfentanil (Maitre Model): Incorporates weight and biological sex as significant covariates scale-linked to
V1, alongside age-dependent limitations on clearance rates. It utilizes a rapid  tpeak of 1.4 minutes. It
significantly outperforms older Scott model configurations.
Remifentanil (Minto Model): The historical standard for remifentanil TCI. It is an age-adjusted model that
relies on the James equation to compute lean body mass, making it vulnerable to the same mathematical
errors as the Schnider model when applied to morbidly obese individuals. It defines an age-dependent
equilibration rate constant: ke0 = 0.595 - 0.007 × (Age - 40).
Remifentanil (Eleveld Model): A universal model that merges pediatric and adult datasets. It uses the Al-
Sallami formula to compute fat-free mass and applies standard allometric power scaling across clearances
and volumes to eliminate size-dependent tracking bias.
Remifentanil (Kim / Kim-Obara-Egan Model):  Developed using a database heavily populated by obese
and morbidly obese surgical cohorts. It utilizes the Janmahasatian Equation to calculate fat-free mass as
the primary pharmacologically active metric for body size. Unlike the Eleveld model, it uses data-extracted,
empirical exponents rather than a fixed ¾ mathematical allometric power constraint.
Dexmedetomidine (Hannivoort-Colin Model): Validated in adult volunteers using elevated infusion rates.
It maps multiple independent effect-site equilibration metrics: ke0 for BIS = 0.120 min -1; ke0 for MOAA/S =
0.04 min-1; ke0 for heart rate = 0.396 min -1; and separate values for blood pressure depending on phase
(hypo-  vs.  hyper-tension).  Due  to  the  slow  plasma-to-effect-site  equilibration  speed,  only  plasma-
controlled TCI mode is clinically available.`
    },
    {
      title: `6. Advanced Drug Delivery: Automated and Closed-Loop Systems`,
      content: `Total Intravenous Anesthesia Safe Practice Guidelines (Box 23.1)
According to the consensus safe practice guidelines published by the Association of Anaesthetists and the
Society for Intravenous Anaesthesia (Nimmo et al., 2019):
All anesthesia providers must be formally trained and competent in the practical delivery of TIVA.
When maintenance of general anesthesia is achieved via a propofol infusion,  the use of a Target-
Controlled Infusion (TCI) pump is explicitly recommended.
Older, frail, or medically compromised patients must start at low initial target propofol concentrations with
small, repeated incremental increases.
To mitigate severe drug calculation errors, an anesthesia department should stock  only one standard
concentration of propofol and dilute remifentanil to a single standard concentration.
• 
• 
• 
• 
• 
• 
• 
1. 
2. 
3.`
    },
    {
      title: `4.`,
      content: `Chapter 23: IV Drug Delivery Systems - Review Guide Page 11

The dedicated TIVA administration set must feature a Luer-lock connector at each end, an anti-syphon
valve on the drug delivery line, and an anti-reflux valve on any co-administered fluid line. Fluid and drug
lines must merge as close to the patient's venous cannula hub as possible to minimize dead space.
Syringe pumps must be programmed  only after  the drug-filled syringe is physically secured inside the
pump mechanism. The IV cannula site must remain completely visible throughout the entire case.
The routine use of a processed EEG monitor is mandatory whenever a neuromuscular blocking drug
is co-administered with TIVA to prevent accidental awareness.
Patient-Controlled & Patient-Maintained Systems
Standard Patient-Controlled Analgesia (PCA) and Sedation (PCS) systems deliver simple, fixed boluses that
frequently fail to match the time course of painful stimuli. This limitation led to the development of Patient-
Maintained Analgesia (PMA) and Patient-Maintained Sedation (PMS) systems. These devices merge TCI
technology with patient control handset interaction:
PMA (Alfentanil/Remifentanil):  Employs progressive algorithmic scaling. For example, a remifentanil
PMA system increments the target concentration by exactly 0.2 ng/mL upon a single handset press; if no
further  inputs  occur  within  a  specific  lockout  period,  the  system  automatically  steps  down  the  target
concentration.
PMS (Propofol - Glaswegian System):  Utilizes the Marsh model. To prevent accidental triggers, the
patient  must  press  the  handset  button  twice  within  exactly  one  second to  command  a  target
concentration increase. If no further validated presses occur within a rolling 6-minute window, the system
automatically reduces the propofol target concentration by the incremental amount. Clinician-set lockouts
are matched to the plasma-effect site equilibration time.
Closed-Loop Controlled Intravenous Delivery
Closed-Loop systems completely automate drug titration by feeding a near-continuous physiological signal of
drug effect directly back to a control algorithm, adjusting drug delivery rates in real time. This minimizes
performance error without requiring manual intervention. A complete system requires a control variable (e.g.,
BIS,  WAVCNS),  a  target  set-point,  a  mechanical  actuator  (infusion  pump),  and  a  stable  mathematical
algorithm:
Proportional-Integral-Derivative (PID) Controllers: Adjust the drug infusion rate based on three distinct
error metrics: the *magnitude* of the error between the current state and the set-point (proportional), the
*integral of the error over time* to track cumulative deviation (integral), and the *speed/rate of change* of
the error to predict future deviation (derivative). Fine-tuning standalone PID controllers can be difficult due
to  vast  interindividual  pharmacodynamic  variability  and  the  physiological  impossibility  of  delivering  a
"negative infusion" to remove drug from the body. To resolve this, modern systems link a PID controller
directly to an effect-site TCI pump. Advanced versions co-administer propofol and remifentanil concurrently
via a rule-based target-selection algorithm.
Model-Based Adaptive Control: Features an optimized, internal mathematical PK/PD model that relates
drug dose to concentration and effect. The algorithm dynamically updates its parameters in real time
based on the patient's actual physiological responses. Struys and colleagues demonstrated that model-
based adaptive control significantly outperforms standard PID configurations under extreme conditions
(e.g., abrupt changes or exceptionally low baseline BIS targets), achieving a faster recovery and fewer
blood pressure drops.
5. 
6. 
7. 
• 
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 12

Bayesian  Optimization: Utilized  by  De  Smet  and  Struys,  this  system  integrates  a  priori  population
reference models with real-time patient data to dynamically update the patient's individual concentration-
response  curve  (Sigmoid  EMAX model),  maximizing  stability  and  minimizing  target  overshoot  during
induction.
Multi-Input Multi-Output (MIMO) Systems (McSleepy):  Automatically titrates three distinct categories of
medications simultaneously: propofol infusions (guided by a PID algorithm targeting the BIS), remifentanil
infusions (guided by a rule-based algorithm targeting a specialized hemodynamic nociception index called
the AnalgoScore or NociMAP), and rocuronium boluses (automatically delivered to maintain a target train-
of-four count < 25%).
Neural Networks and Deep Learning:  Represent the cutting edge of automated delivery. These systems
use artificial intelligence to predict clinical metrics (e.g., BIS values) directly from multi-drug concentration
trajectories without relying on traditional compartmental mathematical assumptions. Trained on vast patient
datasets, deep learning algorithms predict depth of anesthesia significantly more accurately than traditional
PK/PD models.
• 
• 
• 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 13`
    },
    {
      title: `7. Comprehensive Board-Style Exam Questions`,
      content: `The  following  high-yield,  multiple-choice  questions  replicate  the  format  and  clinical  complexity  of  the
Anesthesia Board Examination. All questions are derived strictly from the reference text.
Question 1: Comparative Pharmacokinetics and Model Selection
A 45-year-old female with a body mass index (BMI) of 52 kg/m² is scheduled for an elective laparoscopic
cholecystectomy under Total Intravenous Anesthesia (TIVA). The anesthesia provider utilizes a Target-
Controlled Infusion (TCI) system. Which of the following statements accurately characterizes model
selection and demographic covariate handling for this patient?
A. The Schnider propofol model should be selected because it incorporates lean body mass (LBM) using
the James equation, ensuring perfect clearance predictions across all extremes of body weight.
B. The Marsh propofol model scales its parameters exclusively using body weight, meaning it will
accurately  predict  plasma  concentrations  in  this  patient  if  total  body  weight  is  entered  without
modification.
C. The Eleveld general purpose model utilizes the Al-Sallami formula to calculate fat-free mass (FFM),
avoiding the mathematical limitations of the James equation which can yield negative values in morbidly
obese patients.
D. The Minto remifentanil model utilizes allometric scaling based on total body weight with a fixed ¾
power exponent, making it mathematically stable for this patient.
Correct Answer: C
Rationale: The reference text states that the James equation (used in the Schnider propofol and Minto remifentanil
models) exhibits a distinct quadratic behavior that makes it invalid for the morbidly obese, as it can yield impossible,
negative lean body mass values. The Eleveld model replaces the James equation with the Al-Sallami formula for fat-
free mass (FFM), which is widely applicable and produces stable, realistic predictions in the morbidly obese. Option
A is incorrect because the James equation fails in this cohort. Option B is incorrect because the Marsh model
significantly underestimates plasma concentrations if total body weight is entered without modification in obese
patients; an adjusted weight is mandatory. Option D is incorrect because the Minto model utilizes the flawed James
equation, not allometric scaling of total body weight. 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 14

Question 2: Mathematical Dosing Regimen Calculations
An anesthesia provider seeks to establish an explicit effect-site target concentration of 3.0 ng/mL of
fentanyl to attenuate hemodynamic reactivity prior to a difficult endotracheal intubation. Based on the
compartmental volumes provided in the text ( V1 = 12.7 L , Vdpe = 75 L , and Vdss = 360 L ), which of the
following statements represents the most accurate dosing strategy and outcome?
A. Administering  an  initial  loading  bolus  of  39  mcg  based  on  CT ×  V 1 will  maintain  the  target
concentration at the effect site for at least 15 minutes.
B. Administering an initial loading bolus of 225 mcg based on CT × Vd pe will achieve a peak effect-site
concentration of 3.0 ng/mL in approximately 3.6 minutes without creating a dangerous plasma overshoot.
C. Administering an initial loading bolus of 1080 mcg based on  CT × Vd ss is the preferred method to
saturate all peripheral tissues instantly, ensuring a rapid onset.
D. The maintenance infusion rate must be held constant at the exact product of CT × Cl S immediately
following the loading bolus to prevent a rapid decline in biophase concentration.
Correct Answer: B
Rationale: The text explains that the apparent volume of distribution at the time of peak effect (Vdpe) must be used
to calculate a loading dose (Loading dose = CT × Vdpe) to achieve a desired biophase target without risking a toxic
overshoot. For fentanyl, 3.0 ng/mL × 75 L = 225 mcg, which reaches peak effect site concentration at 3.6 minutes
(matching Table 23.1). Option A is incorrect because a 39 mcg bolus achieves the target in plasma for only a
transient instant, and effect-site levels will never approach 3.0 ng/mL due to rapid distribution. Option C is incorrect
because a 1080 mcg bolus creates a massive, toxic plasma overshoot that persists for hours. Option D is incorrect
because a simple maintenance infusion based on clearance severely underestimates the required rate initially; the
infusion must initially be high to replace drug distributing into peripheral tissues and step-down over time. 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 15

Question 3: Pharmacodynamic Drug Interactions and Recovery Surfaces
A patient is undergoing an extensive abdominal procedure under total intravenous anesthesia. The
clinician wants to design an infusion regimen that optimizes the speed of emergence at the conclusion of
a 10-hour surgery. Based on the Vuyk simulation surfaces and interaction models detailed in the text,
which strategy ensures the most rapid return of consciousness?
A. For a propofol-fentanyl technique, maintain a high fentanyl target (>6 ng/mL) to allow the propofol
target to be reduced below 1.5 mcg/mL, as fentanyl clearance accelerates over time.
B. For a propofol-fentanyl technique, target a fentanyl concentration of 1.0 to 1.5 ng/mL paired with a
propofol concentration of 3.0 to 3.5 mcg/mL.
C. For a propofol-remifentanil technique, limit the remifentanil concentration to <1.0 ng/mL and maximize
the propofol concentration to ensure that the context-sensitive half-time of propofol is minimized.
D. Escalate the intraoperative sufentanil concentration well above 0.15 ng/mL, as high opioid targets
actively accelerate hypnotic emergence via synergistic receptor cross-activation.
Correct Answer: B
Rationale: According to the text and accompanying simulations by Vuyk and colleagues, the optimal drug
combination for the most rapid recovery following a propofol-fentanyl anesthetic is a propofol concentration of 3.0 to
3.5 mcg/mL combined with a fentanyl target of 1.0 to 1.5 ng/mL. Option A is incorrect because high fentanyl
concentrations shift the recovery trajectory to areas of the surface where emergence times are significantly
prolonged. Option C is incorrect because for remifentanil, higher targets (5 to 7 ng/mL) are preferred because they
allow the propofol concentration to be reduced to 2.0 to 2.5 mcg/mL, accelerating emergence to under 6 minutes.
Option D is incorrect because maintaining sufentanil targets above the analgesic range (>0.15 ng/mL) or alfentanil
targets above 80 ng/mL provides no additional clinical benefit and delays recovery. 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 16

Question 4: Front-End Kinetics and Recirculatory Modeling
During  a  board  examination  review  session  on  intravenous  drug  delivery  hardware  and  front-end
pharmacology,  a  candidate  is  asked  to  explain  why  standard  polyexponential  compartment  models
exhibit inaccuracies during the first 60 seconds following a rapid IV bolus injection. Which of the following
options represents the correct scientific explanation provided in the text?
A. Standard models fail because they assume an immediate, instantaneous mixing of the drug in the
central compartment at t = 0, ignoring the 30- to 45-second transit time required to travel from the venous
injection site to the arterial circulation.
B. Standard models overpredict initial clearances because they assume that first-pass pulmonary uptake
occurs exclusively via the slowly equilibrating peripheral compartment (V3).
C. According to Henthorn's recirculatory model, arterial concentrations are purely composed of fully
mixed-recirculated drug from the moment of injection, rendering venous sampling irrelevant.
D. Masui  and  colleagues  demonstrated  that  the  early  pharmacologic  phase  of  propofol  is  entirely
independent of the infusion rate, meaning transit compartments are static.
Correct Answer: A
Rationale: The text explicitly notes that the standard standard pharmacokinetic model assumes complete mixing
within the central compartment such that the peak concentration occurs precisely at time zero. However, it takes 30
to 45 seconds for a drug to transit from the venous injection site to the arterial circulation. This model
misspecification creates inaccuracies immediately post-bolus. Option B is incorrect because first-pass pulmonary
uptake is included in the central compartment (V1). Option C is incorrect because Henthorn's model showed that
arterial concentrations have two distinct components: partially (lung-mixed) drug and fully mixed-recirculated drug.
Option D is incorrect because Masui demonstrated that early phase propofol kinetics *are* influenced by the
infusion rate, requiring 6 transit compartments and an age-dependent LAG term to model accurately. 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 17

Question 5: Target-Controlled Infusion of Dexmedetomidine
A clinical investigator is setting up an institutional protocol for the administration of dexmedetomidine via
a  Target-Controlled  Infusion  (TCI)  pump.  Which  of  the  following  technical  details  regarding  the
Hannivoort-Colin dexmedetomidine model must be correctly integrated to ensure safe practice?
A. Due to an exceptionally fast plasma-to-effect-site equilibration profile, effect-site targeting is the only
commercially available mode for dexmedetomidine.
B. The model maps an identical, single equilibration rate constant ( ke0) for all physiological endpoints,
including BIS, heart rate, and blood pressure.
C. Because  of  very  slow  plasma-effect  site  equilibration,  only  plasma-controlled  TCI  for
dexmedetomidine is clinically available at this moment.
D. Concomitant administration of dexmedetomidine at a dose of 1 mcg/kg over 10 minutes in children
profoundly alters and escalates the propofol EC50 requirement.
Correct Answer: C
Rationale: The text states that "Due to the very slow plasma–effect-site equilibration, only plasma-controlled TCI for
dexmedetomidine is clinically available at this moment." Option A is incorrect because the equilibration is very slow,
not fast, ruling out commercial effect-site targeting. Option B is incorrect because the Colin expansion identified
highly distinct, independent ke0 values for different endpoints (BIS = 0.120 min-1, MOAA/S = 0.04 min-1, HR =
0.396 min-1). Option D is incorrect because Hammer and colleagues concluded that the pediatric propofol EC50
was completely unaffected by a concomitant dexmedetomidine infusion of 1 mcg/kg over 10 minutes. 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 18

Question 6: Advanced Closed-Loop Controllers and Artificial Intelligence
An anesthesia department is conducting a clinical trial evaluating advanced computer-controlled drug
delivery systems. A researcher compares a Proportional-Integral-Derivative (PID) closed-loop controller,
a model-based adaptive controller, and a deep learning neural network system. Which of the following
findings is consistent with the pharmacological data and text?
A. Standalone PID controllers are highly stable when tracking sedation because delivering a "negative
drug infusion" allows them to instantly reverse an overshoot.
B. Struys and colleagues demonstrated that under extreme control conditions, such as low BIS levels or
abrupt target adjustments, a model-based adaptive controller significantly outperforms a traditional PID
controller.
C. A  deep  learning  neural  network  approach  requires  complex  a  priori  assumptions  regarding
compartmental volumes and clearances to successfully predict BIS outputs.
D. The addition of automated closed-loop control of remifentanil in a multi-input single-output system was
shown by Canadian investigators to degrade the overall safety and quality of propofol titration.
Correct Answer: B
Rationale: The text notes that using simulations, Struys and colleagues compared their model-based adaptive
controller with a previously published PID controller and found that the model-based controller outperformed it
under extreme control conditions, such as low and high BIS levels and abrupt changes. Option A is incorrect
because directly counteracting the administration of excessive drug is not possible (negative infusions are
impossible), making standalone PID tuning highly difficult due to pharmacologic variability. Option C is incorrect
because the "deep learning" neural network approach operates "without the need to start with models based on
current knowledge" or traditional compartmental parameters, yet remarkably learns to predict BIS values more
accurately than traditional PK/PD model-based approaches. Option D is incorrect because the addition of automatic
control of remifentanil significantly *improved* the quality of control. 
Chapter 23: IV Drug Delivery Systems - Review Guide Page 19`
    }
  ]
};
