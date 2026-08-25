export const ch32 = {
  id: "miller_ch32",
  chapterNumber: 32,
  title: "Cardiovascular Monitoring",
  bookId: "miller",
  readTimeMinutes: 16,
  sections: [
    {
      title: `CARDIOVASCULAR MONITORING`,
      content: `ANESTHESIA BOARD CERTIFICATION STUDY GUIDE & HIGH-YIELD SUMMARY`
    },
    {
      title: `KEY LEARNING OBJECTIVES`,
      content: `Understand  the  distinct  physical  and  clinical  mechanisms  separating  electrical  heart  rate  from
mechanical peripheral pulse rates.
Analyze the clinical impact of ECG bandpass filters on baseline artifact mitigation and paradoxical ST-
segment distortion.
Evaluate direct vs. indirect arterial blood pressure measurement criteria, physical system mechanics
(resonance, damping), and positioning artifacts.
Deconstruct the central venous and pulmonary artery wedge pressure waveforms to identify specific
electrical-mechanical pathologies.
Appreciate the criteria, physiological prerequisites, and clinical limitations of dynamic indices used for
volume responsiveness estimation.`
    },
    {
      title: `1. Electrocardiographic (ECG) Monitoring`,
      content: `Continuous  intraoperative  ECG  monitoring  provides  immediate  tracking  of  chronotropic  status,
identification of arrhythmias/conduction defects, and sensitive recognition of myocardial ischemia. The
American Society of Anesthesiologists (ASA) explicitly mandates that every patient receiving anesthesia
must have an ECG continuously displayed from initial induction until preparing to exit the anesthetizing
location. 
ECG Lead Placement and Configuration
Modern operating room systems apply standard 5-lead configurations, enabling the concurrent calculation
of limb leads (I, II, III), augmented limb leads (aVR, aVL, aVF), and a chosen precordial chest lead (V 1–
V6). Torso positioning based on the  Mason-Likar modification  places limb leads subclavicularly and
supra-iliacally on the chest wall. While this minimizes patient motion artifacts during surgical repositioning,
it alters the electrical axis and QRS amplitude slightly from standard wrist/ankle diagnostic attachments.
Crucially, the right leg lead serves purely as a ground electrode and can be safely shifted anywhere
without modifying standard trace displays. 
To ensure reliable limb lead tracking, electrodes must sit cleanly outside the cardiac borders, spanning the
transverse plane above and below the heart, and the sagittal plane to its left and right sides. Inappropriate
precordial positioning of leg electrodes changes the configurations of leads II and III, though lead I stays
unchanged as it derives strictly from the difference between left and right arm inputs. 
• 
• 
• 
• 
• 
Anesthesia Board Review Series • Cardiovascular Monitoring Page 1 of 15

Myocardial Ischemia Detection Criteria
The  ST  segment  is  the  gold  standard  indicator  of  acute  intraoperative  changes  in  myocardial
repolarization. Ischemia manifests in two distinct patterns based on direct vascular perfusion dynamics: 
Demand-Mediated Subendocardial Ischemia: The most prevalent perioperative pattern, triggered by
increases in heart rate or afterload. It induces a horizontal or downsloping ST-segment depression ≥ 1
mm (0.1 mV) evaluated precisely 60 or 80 ms after the J-point. Precordial leads (V 3, V4, or V 5) offer
optimal diagnostic sensitivity, with lead V 5 alone yielding a 75% sensitivity and V 4 providing 61%.
Pairings of II and V 5 achieve 80% sensitivity, combinations of V 4 and V 5 yield 90%, and three-lead
arrays (II, V 4, V5) increase detection sensitivity to 98%. Importantly, ST depression pattern changes
are non-localizing across specific coronary arterial distributions.
Supply-Mediated Transmural Ischemia: Typically rare intraoperatively except during acute coronary
thrombosis  or  vasospastic  events.  It  manifests  as  distinct  ST-segment  elevation,  which  is  highly
localizing to the underlying injured myocardial segment and responsible epicardial vessel (e.g., ST
elevation in leads II, III, and aVF localizes to the right or posterior descending coronary bed).
Specialized Lead Arrays: Lead V4R (positioned in the 4th intercostal space at the right mid-clavicular
line) acts as a unique diagnostic marker for right ventricular (RV) ischemia and infarction, typically
deployed when tracking patients prone to inferior left ventricular ischemic injury. 
Filter Selection and Visual Distortion Mechanics
Bedside monitors use narrow-band analog or digital bandpass filters to limit raw signal artifacts. However,
restricted frequencies directly alter waveform fidelity: 
ECG FILTER PROFILES & WAVEFORM IMPACT
Filter Mode Bandpass
Range Clinical Advantages Inherent Pitfalls & Artifacts
Diagnostic
Mode
0.05 Hz to
150 Hz
Preserves accurate ST segments,
repolarization features, and narrow
pacing spikes.
Prone to respiratory baseline wander
and low-frequency motion artifacts.
Monitoring
Mode
0.5 Hz to 40
Hz
Eliminates low-frequency drift and
high-frequency baseline noise.
Phase nonlinearities artifactually
distort/exaggerate ST segments,
causing false J-point depression.
Filter Mode 0.5 Hz to 20
Hz
Suppresses advanced 60-Hz wall-
power electromagnetic noise entirely
via notch filters.
Completely obliterates short, high-
frequency pacemaker spikes; severely
skews ST resolution.
• 
• 
Anesthesia Board Review Series • Cardiovascular Monitoring Page 2 of 15

Gain Modulation Risk: Adjusting display gain alters all features uniformly. Reducing gain below standard
(10 mm/mV) can critically mask acute ST depressions, whereas inflating gain expands baseline
deviations proportionally, leading to erroneous diagnoses of ischemic shifts.`
    },
    {
      title: `2. Systemic Arterial Blood Pressure Tracking`,
      content: `Indirect Noninvasive Techniques (NIBP)
Standard automated systems utilize the oscillometric technique, measuring minor pressure oscillations
within a deflating upper-arm cuff. Proprietary software recognizes the point of peak oscillation to directly
establish  the  Mean  Arterial  Pressure  (MAP).  Conversely,  systolic  and  diastolic  targets  are  strictly
*calculated via algorithmic patterns* rather than evaluated. This contrasts with traditional auscultation,
which physically measures systolic and diastolic bounds via Korotkoff sounds but fails to evaluate MAP. 
Cuff geometry severely dictates precision: an ideal cuff bladder width must span 40% of the target limb
circumference, with length covering 80%. Oversized cuffs drop readings erroneously low; undersized cuffs
yield falsely elevated targets. In morbidly obese cohorts, conicity of the upper arm prompts significant
overestimations, making forearm or wrist application far more reliable. 
Direct Invasive Pressure Waveform Analysis
Invasive fluid-coupled tracking involves a percutaneous catheter attached to a secondary-order dynamic
transducer system exhibiting simple harmonic motion. The structural validity of the registered pressure
waveform relies entirely on matching physical dynamics: 
Natural Frequency: The inherent speed at which the fluid column oscillates when jarred. Systems
require a high natural frequency to record pressures reliably across diverse damping environments
without  creating  resonance  distortions.  Short  lengths  of  rigid  tubing  with  minimized  connections
optimize this frequency threshold.
Damping Coefficient:  The systemic friction dictating the speed at which fluid oscillations naturally
decay. 
Underdamped Systems: Characterized by overly stiff tubing or transducer issues. They create a
dramatic systolic pressure overshoot accompanied by non-physiologic ringing waves, making it
difficult to identify the dicrotic notch.
Overdamped Systems: Triggered by air bubbles, blood clots, loose connections, or line kinking.
They blunt the systolic upstroke, erase detail, and falsely narrow the recorded pulse pressure,
although the calculated MAP remains accurate.
The Air Bubble Paradox: Adding a 0.1 mL air bubble to a rigid line can lower the natural frequency while
expanding systemic compliance. This can trigger sharp resonance artifacts that paradoxically
*exaggerate* systolic overshoot before transitioning into complete dampening as bubble volume grows. 
• 
• 
◦ 
◦ 
Anesthesia Board Review Series • Cardiovascular Monitoring Page 3 of 15

Transducer Alignment: Zeroing versus Leveling
Zeroing opens the transducer element directly to ambient atmospheric pressure to set a baseline. Leveling
physically positions the zero locus relative to the patient's anatomy to eliminate confounding hydrostatic
artifacts. The standard reference location for hemodynamic tracking (CVP, arterial, and PA values) is the
mid-thoracic level (representing the mid-left atrium), defined halfway between the anterior sternum and
the bed surface in a supine patient. Alternatively, a site 5 cm posterior to the sternomanubrial junction can
be used. For neurosurgical cases in a beach-chair position where cerebral perfusion pressure is critical,
leveling should align with the external auditory meatus to reflect the circle of Willis. 
Distal Pulse Amplification Mechanics
As an antegrade arterial pressure wave travels peripherally away from the central aortic root, it encounters
vascular branching networks and compliance drop-offs, producing retrograde reflected sine waves. The
summation  of  these  wave  vectors  generates  distal  pulse  amplification.  Consequently,  peripheral
tracking lines (e.g., radial artery lines) demonstrate a significantly steeper systolic upstroke, an elevated
systolic peak, a delayed dicrotic notch, and a reduced end-diastolic dip compared to central aortic tracings.
The recorded pulse pressure widens substantially, whereas the actual down-stream MAP drops only
minimally due to low conduit resistance. 
TABLE 32.1: PATHOLOGIC ARTERIAL WAVEFORM PROFILES
Condition Morphologic Characteristics Underlying Mechanical Cause
Aortic Stenosis
Pulsus parvus (narrowed pulse pressure) and
pulsus tardus (slurred, delayed systolic
upstroke); distinct anacrotic notch on
upstroke.
Fixed mechanical obstruction to left
ventricular ejection resulting in a
reduced and prolonged stroke volume.
Aortic
Regurgitation
Wide pulse pressure, sharp vertical upstroke,
rapid diastolic runoff; frequently displays a
bisferiens (double) systolic peak.
Massive stroke volume combined with
retrograde runoff back into the left
ventricular chamber during diastole.
Hypertrophic
Cardiomyopathy
Spike-and-dome profile (bifid shape with an
early sharp spike followed by an abrupt mid-
systolic drop and a late dome).
Dynamic mid-systolic left ventricular
outflow tract obstruction interrupting
mid-ejection blood flow vectors.
Systolic LV Failure Pulsus alternans (alternating regular rhythm
of high and low systolic pressure amplitudes).
Severe, alternating beat-to-beat
variations in myocardial contractile
force and stroke volume output.
Cardiac
Tamponade
Pulsus paradoxus (exaggerated decrease in
systolic pressure > 10–12 mm Hg during
quiet spontaneous inspiration).
Mechanical constraints on ventricular
filling, driving exaggerated inspiratory
drop-offs in left ventricular stroke
volume.
Anesthesia Board Review Series • Cardiovascular Monitoring Page 4 of 15

Dynamic Indicators of Intravascular Volume Responsiveness
Static  fill  pressures  (CVP,  PAWP)  correlate  poorly  with  total  blood  volume  and  fail  to  predict  fluid
responsiveness. Modern fluid resuscitation relies on  dynamic indicators  that track respiratory-induced
changes in stroke volume. During positive-pressure mechanical inspiration, elevated intrathoracic pressure
transiently forces pulmonary venous blood into the left heart, increasing left ventricular preload and stroke
volume. Conversely, it simultaneously restricts systemic venous return. During the subsequent expiratory
phase, this reduced right-heart output passes through the lungs and reaches the left ventricle, causing a
fall in systemic stroke volume and pulse pressure. This cyclic variation is evaluated as Systolic Pressure
Variation (SPV) or Pulse Pressure Variation (PPV): 
PPV = ΔPP / PPavg = [PPmax - PPmin] / [(PPmax + PPmin) / 2] × 100%
An automated PPV or Stroke Volume Variation (SVV) score exceeding 10% to 13%  strongly identifies a
patient who will demonstrate a significant increase in cardiac output following volume expansion. 
The clinical interpretation of these values requires an explicit understanding of the Resuscitation Gray
Zone (9% to 13%). Values > 13% clearly warrant fluid administration, while values < 9% do not. Inside the
9%–13% window, decision-making based on these values is unreliable and requires alternative clinical
metrics. 
Mandatory Prerequisites for PPV/SVV Validity: Dynamic parameters are valid only under strict
mechanical criteria: controlled positive-pressure ventilation with tidal volumes ≥ 8–10 mL/kg, an
uncompromised closed chest cavity, and a regular sinus rhythm. Dynamic metrics are invalidated by
cardiac arrhythmias, spontaneous breathing effort, low lung compliance, or right heart failure.`
    },
    {
      title: `3. Central Venous Pressure (CVP) Tracking`,
      content: `Central  venous  access  provides  a  pathway  for  concentrated  vasoactive  infusions,  hyperalimentation,
temporary  hemodialysis,  transvenous  pacing,  or  aspiration  of  entrained  air  emboli  during  high-risk
procedures. 
Mechanical, Thromboembolic, and Infectious Complications
Mechanical: Accidental arterial puncture is the most frequent acute hazard, occurring in 1.9% to 15%
of cases. Perforation of the intrapericardial superior vena cava (SVC) or right atrium can lead to fatal
cardiac tamponade, often associated with a steep tip insertion angle.
Thromboembolic: Catheter-related thrombosis risks vary by anatomy, tracking at 21.5% for femoral
lines compared to 1.9% for subclavian insertions.
Infectious: Central line-associated bloodstream infections (CLABSIs) represent a major hazard. While
rates fell by nearly 50% between 2008 and 2016 through standardized safety checklists, they rose
sharply by up to 91% during the COVID-19 pandemic. Subclavian access demonstrates the lowest risk
of  infectious  transmission  and  deep  vein  thrombosis  but  carries  the  highest  risk  of  mechanical
placement failure.
• 
• 
• 
Anesthesia Board Review Series • Cardiovascular Monitoring Page 5 of 15

Physiological Waveform Deconstruction
The normal CVP tracing consists of three distinct pressure peaks (a, c, v) and two descents (x, y) linked
directly to the mechanical cardiac cycle: 
TABLE 32.3: CENTRAL VENOUS WAVEFORM MECHANICS
Component Cardiac Cycle
Phase Mechanical Genesis & Origin
a wave End-Diastole Active right atrial contraction; provides the "atrial kick" just after the ECG P-
wave.
c wave Early Systole Isovolumic right ventricular contraction forcing the tricuspid valve to bulge
back into the atrium. Always follows the ECG R-wave.
x descent Mid-Systole Systolic collapse driven by active atrial relaxation and downward displacement
of the tricuspid annulus toward the apex during ventricular ejection.
v wave Late Systole Passive venous filling of the right atrium from the vena cava while the tricuspid
valve remains closed. Peaks near the end of the ECG T-wave.
y descent Early Diastole Diastolic collapse as the tricuspid valve opens, allowing pooled atrial blood to
rapidly fill the right ventricle.
Pathologic CVP Alterations
Specific arrhythmias and structural valvular lesions alter these wave patterns in highly predictable ways: 
Atrial Fibrillation: Triggers a complete loss of the  a wave alongside an exaggerated, prominent  c
wave due to a larger end-diastolic blood volume in the uncoordinated atrium.
Atrioventricular Dissociation / Ventricular Pacing:  Generates massive, recurrent cannon a waves
as the right atrium contracts against a closed tricuspid valve during active ventricular systole.
Tricuspid  Regurgitation: Produces  a  tall,  broad  systolic  c–v  regurgitant  wave that  completely
obliterates the normal x descent. This pattern is termed ventricularization of the atrial trace. To estimate
right ventricular end-diastolic pressure in this setting, the clinician must ignore the automated mean
CVP display and manually evaluate the CVP value exactly at the time of the ECG R-wave, just prior to
the regurgitant spike.
Tricuspid Stenosis: Manifests as a prominent, tall  a wave  combined with a prolonged, blunted  y
descent, caused by a fixed mechanical obstruction to diastolic atrial emptying.
Pericardial Constriction / RV Infarction:  Displays a distinct M or W configuration  characterized by
elevated filling pressures, sharp a and v peaks, and deep, rapid x and y descents. A steep y descent
followed by a mid-diastolic plateau plateau wave (the h wave) creates the classic diagnostic "dip-and-
plateau" or "square root" configuration.
Cardiac Tamponade: Features a strictly monophasic CVP profile  dominated by a deep x descent,
while the y descent is attenuated or entirely absent because external fluid compression prevents early
diastolic filling.
• 
• 
• 
• 
• 
• 
Anesthesia Board Review Series • Cardiovascular Monitoring Page 6 of 15`
    },
    {
      title: `4. Pulmonary Artery Catheter (PAC) & Cardiac Output Metrics`,
      content: `PAC Flotation Waveforms
Advancing a standard 110-cm PAC from the central venous system into the wedge position displays
characteristic pressure shifts: Right Atrium (resembles CVP; low mean pressure) → Right Ventricle (abrupt
systolic upstroke to ~25 mm Hg; down-stroke drops back to a low baseline near 0 mm Hg) → Pulmonary
Artery (diastolic pressure steps up due to pulmonary runoff resistance, showing a clear dicrotic notch) →
Wedge Position (balloon isolates upstream flow, establishing a delayed and damped reflection of left atrial
pressure). 
PAC Migration Risks: If a right ventricular trace fails to appear within 40 cm of insertion, or a pulmonary
artery trace is absent by 50 cm, the catheter is likely coiling within the right heart. The balloon must be
deflated, the line withdrawn to 20 cm, and advanced again. 
LVEDP Discrepancies (Wedge vs. Preload)
The pulmonary artery wedge pressure (PAWP) serves as an indirect surrogate for Left Ventricular End-
Diastolic Pressure (LVEDP), which estimates true left ventricular preload volume under normal baseline
compliance. However, pathodynamic states can induce significant discrepancies: 
TABLE 32.5 & 32.6: LVEDP DISCREPANCY MATRIX
Clinical Phenomenon Site of Variance Underlying Pathophysiologic Mechanism
Severe Diastolic
Dysfunction
PAWP < LVEDP
(Underestimation)
A massive, localized end-diastolic atrial kick creates an
elevated LVEDP that does not transmit backward past the
mitral valve in time.
Acute Aortic
Regurgitation
PAWP < LVEDP
(Underestimation)
Retrograde aortic runoff forces premature mitral valve
closure well before end-diastole, trapping isolated
pressure in the LV.
Positive End-
Expiratory Pressure
(PEEP)
PAWP > LVEDP
(Overestimation)
Elevated alveolar pressures convert the local capillary
bed into non-vascular West Zone 1 or 2 segments,
compressing the line tip.
Mitral Stenosis / LAP
Myxoma
PAWP > LVEDP
(Overestimation)
A fixed mechanical diastolic pressure gradient persists
across the obstructed mitral valve junction.
Mitral Regurgitation PAWP > LVEDP
(Overestimation)
A retrograde systolic v wave elevates the overall mean
atrial pressure trace without changing true end-diastolic
fill volume.
Vascular Resistance Derivations
Hemodynamic  profiling  models  the  systemic  and  pulmonary  vascular  beds  as  basic  electric  circuits
utilizing fluid analogues of Ohm's Law: 
Anesthesia Board Review Series • Cardiovascular Monitoring Page 7 of 15

SVR = [(MAP - CVP) / CO] × 80
PVR = [(MPAP - PAWP) / CO] × 80
Omitting the standard conversion multiplier (80) transforms these measurements into Wood Units (mm Hg/
L/min). This classic formula treats the vascular network as a series of rigid, non-reactive pipes. In vivo
systems follow the vascular waterfall model, which accounts for collapsible vessels with intrinsic critical
closing pressures that limit flow independent of downstream right atrial pressure inputs. 
Thermodilution Methodology & Sources of Error
The classic intermittent thermodilution technique injects a known volume of cold fluid into the proximal
right atrial port, tracking the temperature change over time at the downstream pulmonary artery tip.
Automated Continuous Cardiac Output (CCO)  systems utilize a 10-cm thermal filament located 15–25
cm from the tip. This filament cycles on and off in a pseudorandom binary sequence, updating a rolling
average over the previous 3 to 6 minutes. This approach provides excellent stability but introduces an
inherent 5 to 15 minute delay  in tracking acute hemodynamic shifts compared to direct arterial tracking
lines. 
Intracardiac Shunts: Invalidate measurements because right-sided and left-sided stroke volumes are
no longer equal.
Tricuspid  /  Pulmonic  Regurgitation: Causes  indicator  recirculation  back  and  forth  across  the
incompetent valve, leading to an underestimation of cardiac output.
Post-Cardiopulmonary Bypass Drift:  Rapid redistribution of heat from vascular organs to the cold
peripheral tissues creates an unstable thermal baseline, leading to severe underestimations of cardiac
output.
Alternative Cardiac Output Modalities
Transpulmonary Thermodilution: Injects cold indicator into a central vein and tracks temperature
changes via an arterial thermistor (femoral/axillary). It averages measurements over several respiratory
cycles,  providing  advanced  volumetric  markers  like  Global  End-Diastolic  Volume  (GEDV)  and
Extravascular Lung Water (EVLW).
Pulse Contour Analysis:  Estimates stroke volume by dividing the systolic area under the arterial
pressure curve by the total calculated aortic impedance, but requires an optimal waveform signal with a
distinct dicrotic notch.
Esophageal Doppler: Measures continuous blood velocity within the descending thoracic aorta via a
flexible probe inserted 35 cm into the esophagus. It requires scaling by a correction factor (1.4) to
estimate total cardiac output, assuming a constant aortic diameter throughout the cardiac cycle.
Partial  CO2 Rebreathing:  Applies  a  differential  version  of  the  Fick  equation  to  carbon  dioxide
clearance (Q = VCO2 / ΔCvCO2). It requires an endotracheal tube and is contraindicated in patients with
pulmonary hypertension or elevated intracranial pressure due to mandatory rises in PaCO2.
• 
• 
• 
• 
• 
• 
• 
Anesthesia Board Review Series • Cardiovascular Monitoring Page 8 of 15

Estimated Continuous CO (esCCO):  Calculates pulse wave transit time (PWTT) from the ECG R-
wave peak to the onset of the pulse oximeter plethysmograph upstroke, converting this transit speed
into a near-real-time cardiac output estimate.`
    },
    {
      title: `Section 7`,
      content: `5. High-Yield Anesthesia Board Review Questions`
    }
  ]
};
