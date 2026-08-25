export const ch16 = {
  id: "miller_ch16",
  chapterNumber: 16,
  title: "Basic Principles of Pharmacology",
  bookId: "miller",
  readTimeMinutes: 17,
  sections: [
    {
      title: `ANESTHESIA BOARD REVIEW MANUAL`,
      content: `Complete Summary of Chapter 16: Basic Principles of Pharmacology & High-Yield Exam Blueprint`
    },
    {
      title: `CORE CHAPTER KEY POINTS`,
      content: `Pharmacokinetics (PK): Quantifies the temporal relationship between drug dose and plasma or effect-site
concentration. This process is entirely governed by distribution and elimination (metabolism and excretion).
Pharmacodynamics (PD): Characterizes the functional relationship between drug concentration and the resultant
physiological or pharmacologic effect.
Volume of Distribution (Vd) & Clearance (CL): Central empirical constants derived from mathematical formulas
fitted to measured plasma concentration profiles over time.
Front-End vs. Back-End Kinetics: Front-end parameters describe immediate onset dynamics, heavily influenced by
cardiac output shifts. Back-end kinetics focus on post-infusion decay, characterized accurately by context-sensitive
decrement times rather than simple terminal half-lives.
Hysteresis: The measurable temporal lag between changes in plasma drug concentration and observed clinical effect,
reflecting the time required for biophase tissue diffusion and receptor activation.
Section 1: Fundamental Pharmacokinetic Concepts
Pharmacokinetics details how the human body acts upon an administered therapeutic agent over time. For intravenously
delivered drugs, the physical barrier of absorption is bypassed, meaning that the immediate post-injection behavior is entirely a
function of vascular mixing, systemic distribution into peripheral tissue spaces, and irreversible organ-driven elimination.
Volume of Distribution (Vd)
The volume of distribution is an empirical mathematical concept representing the apparent volume of a virtual container into
which a known drug dose dissolves to yield a measured plasma concentration. In the simplest single-tank model, assuming
instantaneous mixing and zero initial elimination, it is represented as:
Vd = Amount of Dose / Concentration      (Eq. 16.1) 
Because the human body continually metabolizes and eliminates drug via metabolic pathways from the moment of injection,
this simple model must be mathematically refined to account for a specific time point (t):
Vd = Amount(t) / Concentration(t)      (Eq. 16.2) 
Highly lipid-soluble anesthetic agents bind tightly to structural peripheral tissue matrices, thereby rapidly depressing the
remaining measurable mass within the central plasma pool. This tissue binding results in calculated apparent volumes of
distribution that massively exceed physical anatomical fluid spaces. For example, fentanyl possesses an apparent volume of
distribution of approximately 4 L/kg, which dwarf an individual's actual vascular volume ( 0.07 L/kg) and extracellular fluid
volume (0.2 L/kg).
Systemic Clearance (CL)
Clearance defines the fixed volume of plasma completely cleared of drug per unit of time (expressed in flow units, e.g., L/
min). Unlike the absolute elimination rate (which changes dynamically with plasma concentration under first-order processes),
• 
• 
• 
• 
• 
Anesthesia Board Certification Study Guide
Chapter 16:
Basic
Principles of
Pharmacology
Page 1

clearance is concentration-independent. Systemic clearance represents the net irreversible extraction of a drug via hepatic
biotransformation, renal excretion, or alternate extrahepatic tissue mechanisms.
Clearance  is  calculated  from  the  total  intravenous  dose  and  the  total  integrated  Area  Under  the  Curve  (AUC)  of  a
concentration-time plot:
Clearance = Dose / AUC      (Eq. 16.5) 
Under  a  continuous  steady-state  infusion,  the  rate  of  drug  administration  perfectly  equilibrates  with  the  rate  of  drug
elimination, meaning that clearance can be expressed as a function of the steady-state plasma concentration (Css):
Clearance = Infusion Rate / Css      (Eq. 16.6) 
The definitive link between clearance, volume of distribution, and the first-order elimination rate constant (k) is established as:
CL = Vd × k      or      k = CL / Vd      (Eq. 16.8) 
Physiologic Model of Organ Clearance
Organ-specific clearance is defined by total organ blood flow ( Q) and the Extraction Ratio (ER). The extraction ratio is the
proportion of drug permanently removed from the blood during a single passage through the organ: ER = (C_in - C_out) /
C_in. Total organ clearance is modeled as:
Clearance = Q × ER      (Eq. 16.10) 
Flow-Limited Clearance (High ER ≈ 1.0): Exemplified by propofol. The liver possesses an immense, unsaturated
intrinsic metabolic capacity for the drug. Consequently, clearance is highly sensitive to variations in hepatic blood flow
(Q). Reductions in cardiac output or perioperative blood loss directly reduce propofol clearance, whereas moderate
changes in intrinsic enzymatic function have negligible impacts.
Capacity-Limited Clearance (Low ER ≪ 1.0): Exemplified by alfentanil. The liver removes only a small fraction of
the drug presenting in the incoming blood. Clearance is entirely dictated by the intrinsic metabolic enzyme activity and
is highly vulnerable to hepatic tissue disease or CYP450 enzyme induction/inhibition, remaining completely
independent of fluctuations in organ blood flow.
BOARD ALERT: NON-HEPATIC CLEARANCE PATHWAYS
While the vast majority of anesthetics undergo hepatic clearance via oxidation, reduction, hydrolysis, or conjugation,
critical exceptions must be memorized for the boards: remifentanil, succinylcholine, and esmolol are cleared in plasma
and tissue matrices via rapid ester hydrolysis. Conversely, pancuronium is primarily eliminated via renal excretion.
Section 2: Compartmental Modeling & Elimination Kinetics
Compartmental Frameworks
To predict plasma drug levels over time, clinical pharmacology relies heavily on empirical compartmental mammillary models.
A classic  three-compartment model incorporates a central compartment ( V_1, representing the blood and highly perfused
vascular organs) connected to a rapidly equilibrating peripheral tissue compartment ( V_2) and a slowly equilibrating tissue
compartment (V_3). First-order micro rate constants ( k_ij) describe the directional transfer kinetics between compartments,
with k_10 dictating irreversible systemic clearance from the central core.
• 
• 
Anesthesia Board Certification Study Guide
Chapter 16:
Basic
Principles of
Pharmacology
Page 2

Following an immediate intravenous bolus, plasma drug concentration decline demonstrates three distinct multi-exponential
phases:
Rapid Distribution Phase (α): Dominates immediately post-injection, driven by massive drug movement out of the
vascular space into rapidly equilibrating organs.
Slow Distribution Phase (β): Characterized by continued drug transfer into slowly equilibrating structural tissue
reservoirs alongside the concurrent back-redistribution of drug from the rapid compartments back into the plasma pool.
Terminal Elimination Phase (γ): Appears as a linear slope on a semilogarithmic plot. At this stage, plasma
concentration has fallen below tissue concentrations, a constant relative proportion is maintained across all fluid
compartments, and concentration decay is driven solely by definitive metabolic elimination or excretion.
This multi-exponential curve is mathematically defined via the sum of negative exponentials:
C(t) = Ae^{-αt} + Be^{-βt} + Ce^{-γt}      (Eq. 16.19) 
Zero-Order vs. First-Order Kinetics
Under zero-order kinetics, drug is eliminated at an absolute constant rate per unit time ( dA(t)/dt = -k_0), typically occurring
when metabolic enzymatic pathways become fully saturated. Under standard therapeutic ranges, most anesthetics follow first-
order kinetics, where the rate of drug elimination is directly proportional to the total drug amount present in the body at that
time (dA(t)/dt = -k_1 × A(t) ). The absolute time required for a first-order central concentration to decline by 50% is constant
and is called the elimination half-life:
t_1/2 = 0.693 / k      (Eq. 16.18) 
Section 3: Front-End, Back-End Kinetics & Hysteresis
Front-End Kinetics & Hysteresis Loops
Front-end kinetics focus on drug distribution patterns in the immediate minutes following a bolus. Traditional compartmental
models assume instantaneous mixing within V_1, predicting peak concentration at time zero. Clinically, an arterial sampling
lag of 30–40 seconds occurs due to circulatory transit times through the venous network, heart, and lungs. Furthermore, a
pronounced delay exists between peak plasma concentration and peak pharmacologic effect (e.g., EEG/Bispectral Index
suppression). This delay is defined as hysteresis.
To mathematically collapse this hysteresis loop and align a single concentration value with a single clinical effect, an effect-
site compartment is linked to the central pool via first-order rate constants ( k_1e and k_eo). The effect-site volume ( V_e) is
assumed to be completely negligible. The change in effect-site concentration ( Ce) relative to plasma concentration ( Cp) is
dictated by:
dCe/dt = k_eo × (Cp - Ce)      (Eq. 16.20) 
A  smaller  k_eo value  correlates  with  a  prolonged  time-to-peak  effect.  For  propofol,  the  time-to-peak  clinical  effect  is
approximately 1.5 minutes post-bolus injection, independent of the dose mass administered.
Back-End Kinetics & Context-Sensitive Half-Time
The standard terminal elimination half-life ( t_1/2γ) is clinically highly misleading when predicting recovery times following
continuous infusions, as it fails to account for structural drug accumulation within peripheral tissue compartments. Anesthesia
relies on context-sensitive decrement times —the time required for plasma or effect-site drug concentration to decline by a
target percentage (e.g., 50% or 80%) after terminating a steady-state infusion of a specific duration ("context").
With prolonged infusions, peripheral compartments fully saturate. Upon infusion termination, continuous back-redistribution
from these fat and muscle reservoirs into the plasma pool severely retards concentration decay. While remifentanil exhibits a
1. 
2.`
    },
    {
      title: `3.`,
      content: `Anesthesia Board Certification Study Guide
Chapter 16:
Basic
Principles of
Pharmacology
Page 3

completely flat, context-insensitive 50% decrement profile of 3–4 minutes due to localized vascular esterase clearance, agents
like  fentanyl and thiopental  show massive, exponential context-sensitive half-time inflation, rendering them unsuited for
long-term maintenance maintenance.
Section 4: Pharmacodynamics & Multi-Drug Interactions
The Sigmoid Emax Relationship
The relationship between effect-site concentration and clinical response is non-linear and sigmoidal, described accurately by
the Hill Equation:
Effect = E_0 + (E_max - E_0) × [ C^γ / (C_50^γ + C^γ) ]      (Eq. 16.21) 
Where C_50 represents the exact drug concentration evoking a 50% probability of a given effect (defining drug potency), and
γ (the Hill coefficient) defines the steepness of the curve within its dynamic range. A single drug possesses entirely separate
C_50 thresholds for different clinical endpoints. For instance, fentanyl demonstrates a C_50 of 2 ng/mL for basic analgesia, 4
ng/mL for respiratory depression, 15 ng/mL for loss of response to laryngoscopy, and 20 ng/mL for formal EEG changes.
Anesthetic Drug Interactions & Isoboles
Anesthesia is the practical application of non-linear drug interactions. These interactions are mapped utilizing 2D  isoboles
(lines of identical clinical probability of effect across various dose pairs) or 3D response surface models. 
Potent Inhalational Volatiles: Combined volatile agents (e.g., sevoflurane + desflurane) are strictly additive,
reflecting a shared cellular mechanism. Exception: Nitrous oxide (N_2O) displays an infra-additive interaction when
mixed with volatile agents.
Sedative-Hypnotics + Opioids: Intravenous combinations (e.g., propofol + remifentanil) exhibit profound, non-linear 
synergy for analgesic endpoints and moderate synergy for loss of responsiveness. This allows substantial dose
reductions of both drugs when used concurrently.
Intravenous Sedative-Hypnotics: Combining different hypnotics (e.g., propofol + midazolam) results in a primarily 
additive profile.
Section 5: Impact of Body Habitus & Age Covariates
Obesity Weight Scalars & Kinetic Alterations
Dosing lipophilic anesthetic agents strictly on Total Body Weight (TBW) in morbidly obese individuals results in dangerous
central  drug  over-concentration,  whereas  dosing  on  Ideal  Body  Weight  (IBW)  risks  sub-therapeutic  levels  due  to
underestimation of metabolic clearance. Specific weight scalars must be rigidly applied per drug class:
• 
• 
• 
Anesthesia Board Certification Study Guide
Chapter 16:
Basic
Principles of
Pharmacology
Page 4

Table 16.1: Mathematical Definitions of Core Weight Scalars
WEIGHT SCALAR SEX MATHEMATICAL FORMULA / STRUCTURAL EQUATION
Ideal Body Weight (IBW) Male 50 kg + 2.3 kg for each 2.54 cm (1 inch) over 152 cm (5 feet)
Female 45.5 kg + 2.3 kg for each 2.54 cm (1 inch) over 152 cm (5 feet)
Corrected Body Weight (CBW) Both IBW + 0.4 × (TBW - IBW)
Lean Body Mass (LBM) Male 1.10 × TBW - 128 × (TBW / Height_cm)^2
Female 1.07 × TBW - 148 × (TBW / Height_cm)^2
Fat-Free Mass (FFM) Male (9.27 × 10^3 × TBW) / (6.68 × 10^3 + 216 × BMI)
Female (9.27 × 10^3 × TBW) / (8.78 × 10^3 + 244 × BMI)
Modified Fat-Free Mass (MFFM) Both FFM + 0.4 × (TBW - FFM)
High-Yield Clinical Dosing Guidelines in Obesity
Propofol Bolus (Induction): Dose to Lean Body Mass (LBM). This avoids excessive initial central vascular
concentrations and secondary profound myocardial depression.
Propofol Continuous Infusions: Dose to Total Body Weight (TBW) or Corrected Body Weight (CBW). Obesity
expands total liver tissue volume and hepatic blood flow parallel to cardiac output, increasing absolute propofol
metabolic clearance. Dosing strictly to Servin's CBW risks significant underdosing.
Remifentanil Infusions: Dose strictly to Fat-Free Mass (FFM) or Ideal Body Weight (IBW). Remifentanil
distribution volume and clearance are nearly identical between lean and obese individuals due to rapid extrahepatic
metabolism by blood and tissue esterases, which do not scale with adipose tissue expansion. Dosing on TBW results in
severe toxicity.
Dexmedetomidine: Dose based on Lean Body Mass (LBM). Dosing on TBW causes severe systemic overdosing,
precipitating severe bradycardia, profound hypertension (via peripheral α_1 agonism), and acute upper airway
obstruction.
Remimazolam: Dosing on TBW in obese patients yields an arterial concentration approximately 150% higher than that
observed in lean patients.
Morphine: Parent drug pharmacokinetics are comparable between lean and obese cohorts, requiring no weight-based
initial scaling. However, the clearance of its active metabolite is significantly reduced, risking accumulation during
prolonged use.
Volatile Agents: Contrary to clinical myth, volatile agents do not show accelerated accumulation or delayed emergence
in obese cohorts during routine cases. Adipose tissue blood flow drops progressively with expanding obesity, and the
time to reach a 63% tissue equilibrium is exceptionally long (exceeding 22 hours for desflurane and 35 hours for
isoflurane).
Pharmacological Alterations in Geriatric Cohorts
Elderly patients demonstrate significantly increased clinical sensitivity to both hypnotics and opioids, necessitating mandatory
pre-emptive dose reductions. This is driven by concurrent changes in both pharmacology branches:
Pharmacokinetic Changes: Age-dependent reductions in resting cardiac output slow circulatory transit times,
resulting in initially elevated peak arterial concentrations following a rapid bolus. Furthermore, structural shrinkage of
liver volume, reduced splanchnic blood flow, and diminished renal glomerular filtration rates significantly depress
systemic clearance, expanding the terminal half-lives of hydrophilic and lipophilic agents alike.
• 
• 
• 
• 
• 
• 
• 
• 
Anesthesia Board Certification Study Guide
Chapter 16:
Basic
Principles of
Pharmacology
Page 5

Pharmacodynamic Changes: Geriatric brains display an independent, intrinsic structural hypersensitivity to anesthetic
agents; the absolute effect-site concentration required to elicit specific EEG or hypnotic endpoints is lower. To achieve
an identical equipotent endpoint compared to a 20-year-old patient, an 80-year-old patient requires a 65% reduction in
propofol dosing and a 55% reduction in remifentanil dosing.
BOARD-STYLE EXAMINATION BLUEPRINT
High-Yield Multiple Choice Questions & Rationales Grouped from Core Content & Clinical Attachments
Question 1 (Pharmacology Core)
A 44-year-old morbidly obese male weighing 165 kg (Height: 176 cm, BMI: 53.3 kg/m²) is scheduled for a total
intravenous anesthetic (TIV A) for an urgent procedure. Based on the pharmacokinetic models and recommendations
outlined in text, which of the following represents the most appropriate weight scalar selections to avoid intraoperative
toxicity or underdosing?
A. Propofol bolus on Lean Body Mass (LBM); Remifentanil infusion on Fat-Free Mass (FFM).
B. Propofol bolus on Total Body Weight (TBW); Remifentanil infusion on Corrected Body Weight (CBW).
C. Propofol bolus on Ideal Body Weight (IBW); Remifentanil infusion on Total Body Weight (TBW).
D. Propofol bolus on Corrected Body Weight (CBW); Remifentanil infusion on Lean Body Mass (LBM).
Correct Answer: A
Rationale: According to the text, a propofol bolus should be calculated based on Lean Body Mass (LBM) to prevent an
excessive initial central vascular concentration and secondary severe myocardial depression. Conversely, continuous infusions of
propofol can utilize Total Body Weight (TBW) or Corrected Body Weight (CBW) because propofol's absolute metabolic
clearance increases in obesity due to expanded liver volume and cardiac output. For remifentanil, however, both distribution
volume and clearance are nearly identical between lean and obese cohorts due to rapid extrahepatic metabolism by blood and
tissue nonspecific esterases, which do not scale with adipose tissue expansion. Therefore, dosing remifentanil based on Fat-Free
Mass (FFM) or Ideal Body Weight (IBW) yields optimal concentrations, while dosing on TBW or CBW leads to toxic plasma
concentrations. 
• 
Anesthesia Board Certification Study Guide
Chapter 16:
Basic
Principles of
Pharmacology
Page 6

Question 2 (Neuro-Anesthesia Attachment Cross-Reference)
A 36-year-old female is one week out from an aneurysmal subarachnoid hemorrhage (SAH) and demonstrates acute
onset of slurred speech and right-sided upper extremity weakness. Transcranial Doppler (TCD) confirms severe cerebral
vasospasm.  Which  of  the  following  represents  the  most  appropriate  and  effective  clinical  management  strategy  to
minimize delayed cerebral ischemia (DCI)?
A. Aggressive hypervolemic fluid resuscitation, hyperventilation to a PaCO² of 25 mmHg, and intravenous nitroprusside.
B. Maintenance of normovolemia, induced systemic hypertension, mild hemodilution, and oral nimodipine.
C. Strict fluid restriction to induce hypovolemia, administration of high-dose corticosteroids, and intravenous magnesium
infusions.
D. Profound hypothermia induction (core temperature 32°C), barbiturate coma, and immediate antifibrinolytic therapy.
Correct Answer: B
Rationale: Based on the Neuro-Anesthesia clinical guidelines, the current mainstay of therapy for cerebral vasospasm post-SAH
is the maintenance of normovolemia, induced hypertension, mild hemodilution, and oral nimodipine (calcium channel blockade).
Aggressive hypervolemic therapy ("triple-H") has been abandoned because of severe complications associated with systemic
fluid overload without any improvement in neurological deficits. Antifibrinolytics and magnesium do not improve neurologic
outcomes. Vasodilators like nitroprusside or nitroglycerin are contraindicated as they cause cerebral venodilation, which
increases intracranial pressure (ICP) and worsens cerebral hypoperfusion. Corticosteroids are not indicated and increase
mortality in acute brain injuries. 
Question 3 (Ambulatory Anesthesia & Airway Attachment Cross-Reference)
A 55-year-old male with a history of severe obstructive sleep apnea (OSA), non-compliant with CPAP, and a history of
severe postoperative nausea and vomiting (PONV) presents to an ambulatory surgical center for an open reduction and
internal fixation of an ankle fracture. The planned incision extends over the medial malleolus. Which of the following
represents the most appropriate anesthetic plan to optimize fast-tracking and airway safety?
A. Standard general anesthesia with a laryngeal mask airway (LMA), maintained with sevoflurane and high-dose
intravenous fentanyl boluses.
B. Spinal anesthesia with a continuous intravenous propofol sedation and postoperative IV morphine patient-controlled
analgesia (PCA).
C. Combined popliteal sciatic nerve block and saphenous nerve block, supplemented with minimal target-controlled
sedation.
D. Intravenous regional anesthesia (Bier Block) utilizing a double-cuff tourniquet inflated to 300 mmHg.
Correct Answer: C
Rationale: The innervation of the ankle stems from both the sciatic nerve (providing the sural, tibial, deep peroneal, and
superficial peroneal nerves) and the femoral nerve (providing the saphenous nerve). The saphenous nerve specifically supplies
sensory coverage to the medial ankle over the medial malleolus. Therefore, a popliteal block alone is insufficient and must be
combined with a saphenous block. In patients with severe, untreated OSA, general anesthesia or spinal techniques utilizing
heavy systemic opioid regimens carry a high risk of postoperative apneic episodes and airway obstruction. Opioid-minimizing
regional techniques are heavily preferred in ambulatory centers. A Bier block is contraindicated for complex lower extremity
structural reductions because it does not provide postoperative analgesia and has strict duration limits (<2 hours). 
Anesthesia Board Certification Study Guide
Chapter 16:
Basic
Principles of
Pharmacology
Page 7

Question 4 (Airway Management Attachment Cross-Reference)
During direct laryngoscopy with a Macintosh curved blade, what is the anatomically correct placement of the blade tip
and the subsequent mechanical action required to achieve optimal visualization of the glottic opening?
A. The blade tip is placed directly underneath the laryngeal surface of the epiglottis, followed by a backward-upward
leverage against the upper incisors.
B. The blade tip is advanced into the esophagus to compress the cricoid cartilage from behind, exposing the arytenoids.
C. The blade tip is advanced into the vallecula, tensioning the hyoepiglottic ligament to indirectly elevate the epiglottis.
D. The blade tip is placed lateral to the palatopharyngeal arch within the pyriform fossa to displace the cuneiform
cartilages.
Correct Answer: C
Rationale: The Macintosh curved blade is explicitly engineered to be advanced into the vallecula (the anatomical recess located
immediately anterior to the epiglottis). Once correctly seated, forward and upward lifting forces tension the hyoepiglottic
ligament, which indirectly elevates the epiglottis to reveal the vocal cords and arytenoid structures. Conversely, a straight Miller
blade is designed to pass directly beneath the laryngeal surface of the epiglottis to lift it directly. Leveraging the laryngoscope
against the upper teeth causes severe dental trauma and is incorrect technique. Placing the blade tip in the esophagus or pyriform
fossa causes severe tissue laceration, bleeding, and complete visual obstruction. 
Question 5 (Chronic Pain Attachment Cross-Reference)
A 66-year-old male with a history of chronic atrial fibrillation is scheduled to undergo an interlaminar lumbar epidural
steroid injection for severe radicular pain. He is currently taking apixaban (Eliquis) 5 mg orally twice daily. According to
the American Society of Regional Anesthesia (ASRA) practice advisories for a high-risk neuraxial procedure, how long
must this medication be discontinued prior to the intervention?
A. 12 hours.
B. 24 hours.
C. 3 days.
D. 5 days.
Correct Answer: C
Rationale: The ASRA practice advisories and guidelines for regional anesthesia and pain medicine recommend that the factor
Xa inhibitor apixaban (Eliquis) must be discontinued for a minimum of 3 days (72 hours) before performing a high-risk
neuraxial procedure, such as a lumbar epidural steroid injection, to eliminate the risk of an epidural hematoma. For low-risk
superficial procedures, a shorter window might be considered, but 3 days is standard for high-risk neuraxial block.
Discontinuation for 5 days is typically required for warfarin or clopidogrel, not apixaban. 
Anesthesia Board Certification Study Guide
Chapter 16:
Basic
Principles of
Pharmacology
Page 8`
    }
  ]
};
