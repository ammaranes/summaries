export const ch37 = {
  id: "miller_ch37",
  chapterNumber: 37,
  title: "Respiratory Monitoring",
  bookId: "miller",
  readTimeMinutes: 24,
  sections: [
    {
      title: `<mark>1. American Society of Anesthesiologists (ASA) Mandatory Standards</mark>`,
      content: `Intraoperative respiratory monitoring is a fundamental component of basic anesthetic monitoring. The ASA Standards for Basic Anesthetic Monitoring delineate two primary structural directives: 

##### **STANDARD I: PERSONNEL PRESENCE** 

Qualified anesthesia personnel shall be present in the room throughout the conduct of all general anesthetics, regional anesthetics, and monitored anesthesia care (MAC). This emphasizes that clinical expertise and continuous diagnostic interpretation supersede instrumentation. 

##### **STANDARD II: ROUTINE EVALUATION** 

During all anesthetics, the patient's oxygenation, ventilation, circulation, and temperature shall be continually evaluated. 

- **Oxygenation Objective:** To ensure adequate oxygen concentration in the inspired gas and the blood. Methods include inspired gas monitoring (oxygen analyzer with a low concentration limit alarm) and blood oxygenation assessment via quantitative pulse oximetry featuring an audible variable-pitch pulse tone and threshold alarms. Adequate illumination/exposure of the patient is mandatory to evaluate color. 

- **Ventilation Objective:** To ensure adequate ventilation. Every patient receiving general anesthesia must undergo continual evaluation. Qualitative signs include chest excursion, reservoir bag observation, and auscultation of breath sounds. Continual end-tidal carbon dioxide analysis (via capnography, capnometry, or mass spectroscopy) is mandatory from endotracheal tube (ETT) or laryngeal mask airway (LMA) insertion until extubation/removal or initiation of transfer. Quantitative volume monitoring of expired gas is strongly encouraged. When ventilation is mechanically controlled, a device capable of detecting breathing system disconnection with an audible signal must be in continuous use.`
    },
    {
      title: `<mark>2. Physical Examination Fundamentals</mark>`,
      content: `Physical diagnosis remains the primary safety mechanism for timely detection of respiratory derangements: 

- **Inspection:** Assessment of respiratory rate (correlated with disease severity in sepsis) and breathing patterns. Anatomic signs include deformities of the chest wall/spine, goiter, tracheostomy scars, and tracheal deviation. Functional indicators include diaphragmatic versus thoracic balance, difficulty/duration of inspiration and expiration, paradoxical chest wall motion, accessory muscle use, central/peripheral cyanosis, pallor, wheezing, stridor, cough, aphonia, splinting, and clubbed fingers. Inspect neck vein distention for cardiovascular contributions to respiratory distress. Pay explicit attention to painful respiration, flail chest, pericardial tamponade, hemothorax, pneumothorax, and tension pneumothorax in trauma settings. 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 1 

- **Auscultation:** Vital for isolating distinctive breath sounds, including vesicular sounds, rhonchi, wheezes, fine/ coarse crackles, inspiratory stridor, and pleural friction rubs. Clinical interpretation can be significantly influenced by ambient noise and stethoscope acoustics.`
    },
    {
      title: `<mark>3. Pulse Oximetry ($S_pO_2$)</mark>`,
      content: `#### **Physiologic Fundamentals** 

Oxygen delivery ($\\dot{D}O_2$) is quantified as the product of arterial oxygen content ($C_aO_2$) and cardiac output ($\\dot{Q}_T$). Arterial oxygen content ($C_aO_2$, in mL of $O_2$ per 100 mL of blood) is calculated using the following equation: 

#### **_C_aO_2 = (1.34 imes S_aO_2 imes Hb) + 0.0031 imes P_aO_2_** 

Where **_1.34 ext{ mL/g}_** represents the Hüfner constant ($O_2$ binding capacity of hemoglobin, with an experimental range of 1.31 to 1.37 due to other Hb species), **_S_aO_2_** is the oxygen saturation of Hb, **_Hb_** is the hemoglobin concentration ($g/dL$), and **_0.0031_** is the solubility coefficient of $O_2$ in blood ($ ext{mL/100 mL/mm Hg}$). 

Five species of hemoglobin are present in adult blood: oxygenated hemoglobin ($O_2Hb$), deoxygenated hemoglobin ($deO_2Hb$), carboxyhemoglobin ($COHb$), methemoglobin ($MetHb$), and sulfhemoglobin ($SHb$). Normal baseline concentrations of dyshemoglobins are small ($1\\% ext{ to } 3\\%$ for $COHb$, $<1\\%$ for $MetHb$ and $SHb$). 

#### **_ext{Functional } S_aO_2 = rac{[O_2Hb]}{[O_2Hb] + [deO_2Hb]} imes 100_** 

#### **_ext{Fractional } S_aO_2 = rac{[O_2Hb]}{[O_2Hb] + [deO_2Hb] + [COHb] + [MetHb] + [SHb]} imes 100_** 

The relationship between $S_aO_2$ and $P_aO_2$ is characterized by the nonlinear oxyhemoglobin dissociation curve. At the flat upper portion ($ ext{above approximately } 70 ext{ mm Hg}$), numeric changes in $P_aO_2$ produce minimal consequences in saturation and blood oxygen content, meaning high $S_pO_2$ cannot discriminate between normoxia and hyperoxia. Shifts in the curve alter the $PO_2$ gradient driving tissue diffusion: right shifts (reduced affinity) are driven by acidosis, hypercarbia, hyperthermia, and increased 2,3diphosphoglycerate (2,3-DPG); left shifts (increased affinity) are driven by alkalosis, hypocarbia, hypothermia, decreased 2,3-DPG, carboxyhemoglobin, and fetal Hb. 

#### **Measurement Principles** 

Oximetry applies the Beer-Lambert law, which relates light transmission through a solution to solute concentration: 

#### **_I_{trans} = I_{in}e^{-D imes C imes \\epsilon}_** 

Where **_I_{trans}_** is transmitted light intensity, **_I_{in}_** is incident light intensity, **_D_** is distance, **_C_** is solute concentration, and **_\\epsilon_** is the extinction coefficient. Co-oximeters measure light absorption at a minimum of five distinct wavelengths to resolve all five Hb species, acting as the clinical gold standard. Standard pulse oximeters dualwavelength light-emitting diodes emit at **_660 ext{ nm}_** (red light, where deO2Hb exhibits greater absorption) and **_940 ext{ nm}_** (infrared light, where O2Hb exhibits greater absorption). It capitalizes on arterial pulsatility to isolate the 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 2 

time-varying alternating current (AC) component from the steady state direct current (DC) component representing tissue, bone, and venous blood: 

#### **_R = rac{AC_{660} / DC_{660}}{AC_{940} / DC_{940}}_** 

The internal calibration curves empirically map the ratio $R$ to $S_pO_2$. FDA criteria recommend root mean square differences $\\le 3.0\\%$ for transmission sensors and $\\le 3.5\\%$ for reflection/ear sensors across the 70% to 100% range. Ambient light interference is eliminated by sequentially pulsing the LEDs on, off, and subtracting background ambient values. 

#### **Photoplethysmography** 

Changes in intravascular blood volume are continuously captured as a plethysmographic trace. Variation in the trace amplitude ($\\Delta POP$) or the automated Pleth Variability Index (PVI) quantifies the percent variance between maximal and minimal amplitudes across a single respiratory cycle, acting as a reliable predictor of fluid responsiveness in mechanically ventilated patients. Its accuracy is compromised by cardiac arrhythmias and spontaneous breathing cycles, showing optimal predictive validity for fluid challenges of 500 mL versus 250 mL. 

#### **Limitations and Artifacts** 

} 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 3 

|**Source of Error**|**Effect on $S_pO_2$**<br>**Reading**|**Pathophysiologic Mechanism & Clinical Guidance**|
|---|---|---|
|Hypotension &|Falsely low or|Significant errors manifest when systolic blood pressure|
|Hypoperfusion|completely absent<br>signal|falls below 80 mm Hg due to loss of the pulsatile AC<br>component.|
|Anemia|Underestimates<br>$S_aO_2$ only during<br>hypoxia|Negligible effect under normoxic conditions. When true<br>hypoxemia occurs, severe anemia exacerbates low<br>readings.|
|Methemoglobinemia|Falsely fixed at 80% –<br>85%|MetHb absorbs light equally at 660 nm and 940 nm; the<br>ratio R approaches unity (1.0), forcing the internal monitor<br>to default to 85%.|
|Carboxyhemoglobinemia|Falsely elevated|COHb absorption properties mimic O2Hb at 660 nm while<br>absorbing zero light at 940 nm, causing profound occult<br>hypoxemia.|
|Intravenous Dyes|Transient marked<br>decrease ($ \\downarrow$)|Methylene blue drops readings to 65% due to peak<br>absorption at 668 nm (matching HHb). Indigo carmine,<br>indocyanine green, and isosulfan blue cause lesser drops.|
|Nail Polish|Artifactual decrease ($ \\downarrow$)|Black, purple, and dark blue introduce the greatest<br>reduction, though typically bounded within a 2% margin.|
|Skin Pigmentation|Overestimates true<br>saturation|Can obscure significant hypoxemia by reporting higher<br>values when true arterial saturation drops below 80%.|
|Venous Pulsation|Artifactual decrease ($ \\downarrow$)|Engorged, pulsating venous structures introduce<br>alternating signals that are erroneously integrated into the<br>AC calculation.|
|Optical Shunt /<br>Misplacement|Falsely fixed at 85%|Misalignment allows light to bypass intravascular pathways<br>and strike the photodetector directly.|`
    },
    {
      title: `4. Mixed Venous Oxygen Saturation ($S\\overline{v}O_2$) & Tissue Oximetry`,
      content: `Mixed venous oxygen saturation ($S\\overline{v}O_2$) monitored via a pulmonary artery catheter directly evaluates the global balance between oxygen delivery ($\\dot{D}O_2$) and global oxygen consumption ($\\dot{V}O_2$). It is mathematically governed by the derived Fick equation: 

**_S\\overline{v}O_2 = S_aO_2 - rac{\\dot{V}O_2}{1.34 imes Hb imes \\dot{Q}_T}_** 

The normal reference range is 65% to 80%. Measurement values provide integrated continuous tracking of gas exchange efficiency, total cardiac output ($\\dot{Q}_T$), hemoglobin levels, and metabolic demand. Pathologic declines are driven by decreased supply (hypoxemia, anemia, low cardiac output) or elevated tissue demand (shivering, fever, seizures, hypermetabolic states like malignant hyperthermia or thyrotoxicosis). Central venous 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 4 

oxygen saturation ($S_{cv}O_2$) sampled from the right atrium or superior vena cava acts as a clinical surrogate, though values may diverge depending on regional upper-body versus lower-body drainage patterns. 

Near-Infrared Spectroscopy (NIRS) relies on light wavelengths between 700 and 1100 nm to penetrate deep tissues (centimeters) noninvasively to evaluate regional tissue oxygenation ($rSO_2$), most notably within the frontal cortical boundaries of the brain. Because tissue blood volume is partitioned, the displayed $rSO_2$ represents an integrated, primarily venous-weighted value ($\\sim 75\\%$ venous contribution). Normal values range from 51% to 82% with a mean baseline of 66%. Clinical intervention thresholds are established when $rSO_2$ drops more than 20% to 25% below the patient's individual pre-induction baseline, or falls below an absolute floor value of 50%.`
    },
    {
      title: `<mark>5. Capnography & Capnometry</mark>`,
      content: `#### **Nomenclature and Technical Modalities** 

- **Capnometry:** The absolute quantitative measurement and digital numerical display of carbon dioxide concentration at the airway opening. 

- **Capnography:** The graphic visual display of continuous $CO_2$ partial pressure plotted as a function of time or exhaled volume. 

- **Sidestream (Diverting) Analyzers:** The sensor is located at a distance inside the console; a sampling pump continuously aspirates airway gas through flexible tubing at rates of 30 to 500 mL/min. This features an inherent transport delay time and a defined rise time (the time interval required to transition from 10% to 70% of final signal value, typically 10 to 400 ms). Tubing length, water traps, and gas aspiration rates affect performance. The lost volume must be accounted for in closed-circuit designs or neonatal pathways. 

- **Mainstream (Nondiverting) Analyzers:** The sample cuvette is integrated directly within the patient breathing circuit, projecting the light path straight through airway flow. This delivers an immediate response with zero transport delay time and rapid rise times. Disadvantages include added mechanical dead space and a risk of patient facial thermal burns, as the optical window must be actively heated to **_40^\\circ ext{C}_** to prevent moisture condensation. 

#### **The Time Capnogram** 

##### **MORPHOLOGICAL PHASE ANALYSIS** 

- **Phase I (Anatomic Dead Space):** The initial portion of expiration containing gas from conducting airways devoid of metabolic carbon dioxide ( **_PCO_2 \\sim 0_** ). 

- **Phase II (Transitional Phase):** A sharp, steep upstroke reflecting a mixture of dead space gas and early alveolar gas. 

- **Phase III (Alveolar Plateau):** Represents true alveolar air. In normal lungs, it is relatively flat. Homogeneous matching minimizes the slope, whereas ventilation-perfusion ($\\dot{V}/\\dot{Q}$) heterogeneity steepens the slope (e.g., bronchospasm, asthma, COPD). Interventions that improve homogeneity (PEEP, bronchodilators) flatten this region. 

- **Phase IV / Phase 0:** The rapid, steep terminal downstroke caused by the onset of fresh inspired gas washing away remaining carbon dioxide. Alternatively, a terminal terminal upstroke (Phase IV') can manifest just before inspiration due to late closure of lung units with low $PCO_2$, leaving higher $PCO_2$ units to empty preferentially. 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 5 

**BOX 37.2: CAUSES OF INCREASED ARTERIAL-TO-END-TIDAL CARBON DIOXIDE PRESSURE GRADIENT ($P_{(A-ET)}CO_2$)** 

In normal states, end-tidal carbon dioxide ($P_{ET}CO_2$) closely correlates with arterial carbon dioxide tension ($P_aCO_2$), with a normal difference less than 5 mm Hg. Pathologic inflation of this gradient occurs via: 

- Increased ventilation-perfusion ($\\dot{V}/\\dot{Q}$) heterogeneity, specifically high $\\dot{V}/\\dot{Q}$ regions 

- Pulmonary hypoperfusion states 

- Pulmonary embolism 

- Cardiac arrest (abrupt loss of pulmonary blood flow) 

- Positive pressure ventilation (especially with high PEEP induction) 

- High-rate, low-tidal-volume ventilation patterns 

|**Clinical**<br>**Direction**|**Pathophysiologic & Equipment Etiologies**|
|---|---|
|**Elevated**<br>**$P_{ET}CO_2$**|**Increased Production/Delivery:**Hypermetabolic states, fever, sepsis, seizures, malignant<br>hyperthermia, thyrotoxicosis, therapeutic bicarbonate administration, elevated cardiac output<br>(e.g., successful CPR resuscitation).<br>**Hypoventilation:**Reduced alveolar minute ventilation.<br>**Equipment Rebreathing:**Faulty expiratory valve operation, exhausted carbon dioxide soda-<br>lime absorber granules (manifests as baseline elevation above zero during Phase I).<br>•<br>•<br>•|
|**Decreased**<br>**$P_{ET}CO_2$**|**Decreased Production/Delivery:**Hypothermia, profound pulmonary hypoperfusion, severe<br>hemorrhage, systemic shock, acute hypotension.<br>**Hyperventilation:**Excessive increase in alveolar ventilation.<br>**Equipment/Airway Failure:**Complete ventilator circuit disconnection, esophageal intubation<br>(transient early waveforms decaying rapidly to zero), partial or complete airway/ETT<br>obstruction, loose sample lines, leaky ETT cuffs (truncation of Phase III).<br>•<br>•<br>•|



#### **The Volume Capnogram & Dead Space Estimation** 

Plotting $CO_2$ partial pressure against cumulative expired volume creates a volume capnogram. The area under the curve maps exact carbon dioxide clearance per breath (Area X), while distinct geometric partitions resolve anatomic versus alveolar dead space (Areas Y and Z). In combination with true blood gas sampling, it permits calculation of the physiologic dead space fraction ($V_D/V_T$) utilizing the Bohr equation: 

#### **_rac{V_D}{V_T} = rac{P_aCO_2 - P_ECO_2}{P_aCO_2}_** 

Where **_P_ECO_2_** represents the mixed expired carbon dioxide tension across the full cycle. 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 6`
    },
    {
      title: `<mark>6. Pulmonary Mechanics: Flows, Volumes, & Pressures</mark>`,
      content: `Convective gas transport is governed by the structural creation of pressure gradients designed to overcome resistive, elastic, and inertial forces within the respiratory matrix. This is modeled by the clinical Equation of Motion: 

**_P = R\\dot{V} + EV + I\\ddot{V} + P_0_** 

Where **_P_** is the driving pressure, **_R_** is resistance, **_\\dot{V}_** is gas flow, **_E_** is elastance, **_V_** is tidal volume, **_I_** is inertia, **_\\ddot{V}_** is volume acceleration, and **_P_0_** is end-expiratory distending pressure. Airway pressure relative to atmosphere defines transrespiratory pressure; airway pressure relative to pleural pressure defines transpulmonary pressure (the true distending force across the lungs alone). Pleural pressure can be noninvasively estimated via a 100-cm esophageal balloon catheter positioned in the middle-to-distal third of the esophagus, containing a small volume of air to ensure its walls remain flaccid. 

#### **Resistance & Elastance Calculation (Volume-Cycled Ventilation)** 

During volume-cycled mechanical ventilation featuring a constant inspiratory flow and a defined end-inspiratory pause, mechanical parameters can be extracted through visual pressure waveform inspection: 

- **Airway Resistance ($R$):** Calculated from the pressure drop from peak inspiratory pressure ($P_{peak}$) to the static plateau pressure ($P_{plat}$): 

**_R = rac{P_{peak} - P_{plat}}{\\dot{V}_I}_** 

Where **_\\dot{V}_I_** is the constant inspiratory flow rate. Acute elevations reflect bronchospasm, mucous plugging, or physical obstruction within the ETT/breathing circuit. Viscoelastic tissue deformation contributes approximately 60% of subglottal resistance. 

- **Static Respiratory System Elastance ($E_{rs}$) & Compliance ($C_{rs}$):** Measured during zero-flow states where resistive forces dissipate: 

**_E_{rs} = rac{P_{plat} - PEEP}{V_T} \\quad ext{and} \\quad C_{rs} = rac{1}{E_{rs}} = rac{V_T} {P_{plat} - PEEP}_** 

Normal compliance ranges between 50 and 100 $mL/cmH_2O$. Factors elevating elastance (reducing compliance) include consolidation, edema, pneumothorax, atelectasis, mainstem intubation, or surgical chest wall restriction. 

- **Driving Pressure ($\\Delta P$):** Quantified as tidal volume normalized to static respiratory compliance, acting as a powerful stratifier of mortality risk during ARDS and predictor of postoperative pulmonary injury: 

**_\\Delta P = rac{V_T}{C_{rs}} = P_{plat} - PEEP_** 

#### **Nonlinear Compliance Indicators: $\\%E_2$ and Stress Index** 

When elastic pressure follows a quadratic volume relationship ( **_P_E = E_1V + E_2V^2_** ), the volume-dependent component ($\\%E_2$) can be calculated to track structural deviation from linearity: 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 7 

**_\\%E_2 = rac{E_2V_T}{E_1 + E_2V_T} imes 100_** 

Positive values ($>30\\%$) indicate a convex curve marking parenchymal overdistention; negative values mark a concave curve reflecting progressive intratidal alveolar recruitment. Under constant inspiratory flow conditions, this can be tracked via the mathematical power-law expression ( **_P = at^b + c_** ). The exponent **_b_** is the **Stress Index** : 

- **_b < 1.0_** : A convex pressure-time waveform, indicating progressive intratidal recruitment. Higher PEEP may be indicated. 

- **_b \\sim 1.0_** : Perfectly linear profile, signifying optimal structural balance with minimal cyclic collapse or overdistention. 

- **_b > 1.0_** : A concave pressure-time waveform, indicating overdistention of parenchymal boundaries. Lowering tidal volumes or peak pressures is indicated. 

#### **Auto-PEEP Monitoring** 

Auto-PEEP (intrinsic PEEP) represents the positive pressure remaining inside alveoli at end-expiration. It is triggered by incomplete lung emptying due to narrowed airway diameters (COPD, bronchospasm, asthma) or short expiratory times. Clinically, it presents as a non-zero expiratory flow at the immediate start of the subsequent mechanical breath. It is quantified under static conditions by activating an end-expiratory pause/occlusion maneuver for up to 4 seconds, watching the rise to a stable pressure plateau. Static auto-PEEP equals the difference between end-occlusion pressure and preocclusion circuit pressure.`
    },
    {
      title: `<mark>7. Advanced Respiratory Modalities & Bedside Imaging</mark>`,
      content: `#### **High-Frequency Oscillatory Ventilation (HFOV)** 

HFOV employs small tidal volumes (frequently smaller than anatomic dead space) combined with high respiratory frequencies (3 to 20 Hz, or 180 to 1200 breaths/min), with active inspiration and active expiration driven by a piston or diaphragm arrangement. Gas clearance properties diverge from standard models, follows the derived relationship: 

#### **_\\dot{V}CO_2 \\propto f imes V_T^2_** 

This is in contrast to standard mechanical ventilation where **_\\dot{V}CO_2 \\propto f imes (V_T - V_D)_** . Oscillatory amplitude drops due to gas column inertia through the circuit branches; circuit pressures cannot act as surrogates for true lung distention. Precision tracking of flow waves and delivered $V_T$ is accomplished via hot wire anemometers. 

#### **Bedside Ultrasound & The BLUE Protocol** 

Lung ultrasonography targets characteristic acoustic artifacts generated by interfaces between bone, air, and fluid. Diagnostic evaluation is structured around the validated **BLUE Protocol** (Acute Respiratory Failure diagnostic accuracy: 90.5%): 

- **A-Lines:** Equidistant, horizontal hyperechoic reverberation lines beneath the bright pleural line. Represents intact air preservation within the normal matrix. 

- **B-Lines:** Vertical, discrete, laser-like hyperechoic reverberation lines (comet-tails) originating directly from the pleural boundary, extending to the screen edge without fading while erasing local A-lines. Solitary lines are 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 8 

normal; three or more in a single longitudinal window define a positive region marking fluid or interstitial syndrome. 

- **Lung Sliding:** Visible dynamic translation of visceral on parietal pleura synchronized with respiratory cycles. Its absence occurs in pneumothorax, severe pleuritis, or mainstem intubation. 

- **Lung Point:** Pathognomonic focal point marking the precise physical boundary where lung sliding/B-lines vanish and are replaced by a parallel-line M-mode artifact during expiration. Diagnoses pneumothorax with sensitivity mirroring computed tomography. 

- **Pleural Effusion & Consolidation:** Effusions present as anechoic, dark fluid zones between pleural edges displaying respiratory lung movement (sinusoid sign). Consolidations appear as dense, tissue-like echo textures (hepatization) containing echogenic air or fluid bronchograms. 

#### **Electrical Impedance Tomography (EIT)** 

EIT uses a circumferential array of 16 to 32 surface electrodes (typically at the fifth intercostal boundary) to measure local bioimpedance changes in real-time. High electrolyte concentrations (blood, active muscle) lower impedance; air, bone, and adipose tissue present high impedance. It delivers continuous functional cross-sectional imaging of regional ventilation, allowing bedside tracking of dorsal versus ventral recruitment, quantification of regional collapse/hyperdistention, and optimization of individual PEEP settings without radiation exposure.`
    },
    {
      title: `<mark>8. Specialized Monitoring Concepts</mark>`,
      content: `#### **Arterial Blood Gas Analysis & Temperature Strategies** 

Gas solubility in blood changes inversely with temperature. As a hypothermic sample is warmed to **_37^\\circ ext{C}_** inside an analyzer, dissolved gases come out of solution, artifactually raising the measured partial pressures ( **_P_aO_2_** and **_P_aCO_2_** ) and lowering the pH relative to the patient's true lower temperature. Management under deep hypothermic circulatory arrest (DHCA) or hypothermic bypass applies one of two explicit strategies: 

- **Alpha-Stat Strategy:** Blood gas samples are analyzed at **_37^\\circ ext{C}_** without temperature correction. Acidbase targets are managed to normothermic values at the analyzer's temperature. This preserves cellular enzyme performance, protein structure, and internal cerebral autoregulation pathways. It is widely supported for adult cardiopulmonary bypass. 

- **pH-Stat Strategy:** Blood gas values are mathematically corrected to the patient's actual low core temperature. Because cooling naturally lowers partial pressure, $CO_2$ gas is actively added to the oxygenator circuit to drive temperature-corrected parameters back to a normal pH of 7.4. This induces profound cerebral vasodilation, promoting faster, uniform brain cooling. It is supported for pediatric cardiac surgical protocols. 

Sample processing delays beyond 20 minutes at room temperature provoke artifactual declines in measured $P_aO_2$ due to leukocyte metabolic activity (leukocyte larceny), prevented by immediate storage on ice. Bubbles inside the syringe shift values toward ambient atmospheric parameters ($PO_2 \\sim 150 ext{ mm Hg}$, $PCO_2 \\sim 0 ext{ mm Hg}$). Pseudohypoxemia occurs when extreme leukocytosis or thrombocytosis dramatically depletes sample oxygen content inside the container prior to extraction, a confounder resolved by immediate pointof-care testing (POCT). 

#### **Transcutaneous Gas Monitoring** 

Continuous noninvasive mapping of tissue oxygenation ($P_{tc}O_2$) and carbon dioxide ($P_{tc}CO_2$) utilizes local heating elements (typically heated to **_42^\\circ ext{C} ext{ to } 45^\\circ ext{C}_** ) to alter stratum corneum lipophilic alignment and induce regional dermal hyperemia (arterialization of capillary beds). $P_{tc}O_2$ incorporates a polarographic Clark electrode; $P_{tc}CO_2$ utilizes a specialized Stow-Severinghaus pH electrode. Thin skin 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 9 

barriers yield close correlation in neonatal settings, capable of tracking hyperoxia risks which pulse oximetry cannot resolve. Thicker adult skin layers limit accuracy, though it maintains utility during prolonged laparoscopic procedures or deep sedation for tracking trends. 

#### **Extravascular Lung Water (EVLW) & Indicator Dilution** 

Bedside chest radiographs display diagnostic latency, failing to identify pulmonary edema until total lung water content expands by at least 30%, and are confounded by high interobserver variability. Transpulmonary thermodilution offers automated quantification by injecting a central cold saline indicator and measuring temperature decay downstream in a peripheral artery. It relies on the assumption that the thermal tracer thoroughly equilibrates across all pulmonary tissue compartments. This assumption fails during severe regional injury where perfusion redistribution shifts flow away from damaged zones, meaning true tissue water content can be underestimated. 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 10`
    },
    {
      title: `SELF-ASSESSMENT EXAMINATION`,
      content: `[source: 3603] 

*** ### Question 1 A 36-year-old female presents to the intensive care unit one week following an aneurysmal subarachnoid hemorrhage (SAH). She demonstrates an acute onset of lethargy, mild confusion, and new-onset right leg weakness. A transcranial Doppler study reveals a mean blood flow velocity (mBFV) of $145 ext{ cm/s}$ within the left middle cerebral artery. Which of the following represents the most appropriate initial management strategy for this patient's condition? A. Initiate a continuous intravenous infusion of magnesium sulfate to target a serum concentration of $3.0 ext{ mmol/L}$ B. Administer a continuous infusion of an antifibrinolytic agent such as tranexamic acid C. Establish hypervolemic hemodilution via rapid administration of 5% albumin solution D. Maintain normovolemia, induce controlled systemic hypertension, and continue oral nimodipine 

##### **Correct Answer: D** 

**Rationale:** The clinical presentation is highly consistent with delayed cerebral ischemia (DCI) secondary to cerebral vasospasm, which characteristically peaks 3 to 14 days following aneurysmal SAH. Oral nimodipine is a level 1A recommendation demonstrated to improve neurological outcomes. Current guidelines advocate for the maintenance of normovolemia (euvolemia) paired with induced systemic hypertension to optimize cerebral perfusion pressure across the spastic, autoregulation-impaired vascular beds. Traditional aggressive "Triple-H" therapy featuring hypervolemia and hemodilution is no longer recommended. Hypervolemia significantly increases risks of pulmonary edema, volume overload, and cardiac events without improving neurological outcomes, while hemodilution impairs global oxygen delivery. Antifibrinolytics and magnesium have not demonstrated clear efficacy in improving neurological outcomes during active vasospasm. 

*** ### Question 2 A 50-year-old male is undergoing an emergency craniotomy in the sitting position for the resection of a large posterior fossa mass. Intraoperatively, the anesthesia provider notes an abrupt, precipitous drop in the end-tidal carbon dioxide ($P_{ET}CO_2$) from $36 ext{ mm Hg}$ to $14 ext{ mm Hg}$, accompanied by sudden systemic hypotension and a variable pitch change on the precordial Doppler monitor. Which of the following therapeutic actions is explicitly CONTRAINDICATED in the immediate management of this event? A. Discontinuing nitrous oxide if in use and administering 100% inspired oxygen B. Instructing the surgical team to flood the operative field with sterile normal saline C. Applying $10 ext{ cmH}_2 ext{O}$ of positive end-expiratory pressure (PEEP) to the ventilator circuit D. Placing the patient in a relative Trendelenburg or left lateral decubitus position 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 11 

##### **Correct Answer: C** 

**Rationale:** The clinical triad of sudden hypotension, a profound drop in $P_{ET}CO_2$, and precordial Doppler pitch alterations during a sitting craniotomy indicates a severe venous air embolism (VAE), caused by the negative pressure gradient between the elevated surgical site and the right atrium. The application of positive end-expiratory pressure (PEEP) is strictly contraindicated in this scenario because it elevates right-sided cardiac and venous pressures. In the presence of a patent foramen ovale (PFO)—which occurs in approximately 20-25% of the population—this increase in right atrial pressure can reverse the normal transatrial gradient, provoking a paradoxical air embolism into the systemic arterial circulation, leading to acute stroke or myocardial infarction. Immediate appropriate steps include delivering 100% $O_2$, flooding the surgical field with saline to halt air entrainment, applying bone wax, and repositioning the patient to lower the surgical site relative to the heart. 

*** ### Question 3 An anesthesia provider is preparing a preoperative plan for a 68-year-old male with a history of severe chronic obstructive pulmonary disease (COPD) scheduled for a lengthy L1–L5 posterior spinal fusion in the prone position. When discussing strategies to optimize the patient for post-procedure extubation and prevent postoperative airway compromise, which of the following statements is true based on current evidence? A. Prophylactic administration of intravenous methylprednisolone is highly effective in reducing glottic and laryngeal edema associated with prolonged prone positioning. B. Postoperative airway compromise within the first 12 hours following cervical or upper spinal surgery is most frequently caused by progressive prevertebral and pharyngeal edema. C. Diuresis with intravenous furosemide should be considered intraoperatively or postoperatively if volume overload is suspected to mitigate interstitial fluid accumulation in a patient with poor lung compliance. D. Sizing of a nasopharyngeal airway adjunct to bypass soft tissue obstruction is determined primarily by matching the internal diameter of the patient's nares. 

##### **Correct Answer: C** 

**Rationale:** Prone spinal fusion procedures often require substantial crystalloid administration over extended operative times. Patients with underlying pulmonary disease or COPD are sensitive to interstitial fluid accumulation and volume overload. Targeted diuresis with furosemide can reduce fluid burden and improve compliance to facilitate extubation. Intravenous steroids have not demonstrated consistent clinical efficacy in mitigating glottic edema secondary to prone positioning. Airway compromise manifesting within the immediate postoperative window (<12 hours) is most commonly driven by wound hematoma formation, whereas pharyngeal and prevertebral edema characteristically peaks in the early postoperative phase (12 to 72 hours). When selecting a nasopharyngeal airway, length (measured from the nose to the tip of the earlobe) is the most critical factor to effectively bypass soft tissue obstruction, rather than diameter. 

*** ### Question 4 During a routine general anesthetic under volume-controlled ventilation with a constant inspiratory flow and an activated end-inspiratory pause, the ventilator display demonstrates a sudden increase in Peak Inspiratory Pressure ($P_{peak}$), while the Plateau Pressure ($P_{plat}$) remains completely unchanged at its baseline value of $16 ext{ cmH}_2 ext{O}$. Which of the following conditions is the most likely cause of this specific mechanical waveform alteration? A. Development of acute tension pneumothorax B. Kinking, biting, or mucous plugging within the endotracheal tube lumen C. Mainstem bronchial intubation due to intraoperative patient repositioning D. Acute expansion of extravascular lung water secondary to aggressive fluid resuscitation 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 12 

##### **Correct Answer: B** 

**Rationale:** Airway resistance is calculated as the difference between peak inspiratory pressure ($P_{peak}$) and plateau pressure ($P_{plat}$) divided by inspiratory flow. An isolated increase in $P_{peak}$ with a completely stable $P_{plat}$ reflects an increase in airway resistance ($P_{R}$). This is caused by mechanical factors narrowing the internal diameter of the conducting system, such as tube kinking, a patient biting the tube, or intraluminal mucous accumulation. Conversely, conditions affecting lung tissue compliance or elastance—such as tension pneumothorax, mainstem intubation, or pulmonary edema—characteristically elevate both $P_{peak}$ and $P_{plat}$ simultaneously, reducing static compliance and increasing the elastic pressure component ($P_E$). 

*** ### Question 5 A 42-year-old male is scheduled for a craniotomy and placement of a subdural grid for seizure focus mapping. The neurosurgeon requests an anesthetic regimen that minimizes interference with intraoperative electrocorticography (ECOG) and electroencephalographic (EEG) monitoring while providing an anticonvulsant baseline. Which of the following techniques represents the most appropriate induction and maintenance strategy? A. Induction with ketamine followed by maintenance with high-dose volatile sevoflurane at 2.0 MAC B. Induction with etomidate followed by a continuous infusion of remifentanil and intermittent boluses of propofol C. Induction with propofol followed by total intravenous anesthesia (TIVA) using a continuous infusion of propofol kept below $50\\mu ext{g/kg/min}$, paired with remifentanil and dexmedetomidine D. Induction with thiopental followed by maintenance using nitrous oxide combined with deep neuromuscular blockade 

##### **Correct Answer: C** 

**Rationale:** For mapping of an epileptogenic focus via ECOG, maintaining a stable baseline without suppressing cortical electrical activity is critical. Total intravenous anesthesia (TIVA) combining propofol, remifentanil, and dexmedetomidine is a standard technique. Propofol infusions must be kept below $50\\mu ext{g/kg/min}$ to avoid complete EEG burst suppression. Intermittent boluses must be avoided to ensure a steady state. Dexmedetomidine and remifentanil have minimal impact on ECOG monitoring signals. High concentrations of volatile agents like sevoflurane ($>1.5 ext{ MAC}$) can be epileptogenic in the presence of hypocapnia or suppress signals at higher doses, rendering mapping unreliable. Etomidate has proconvulsant features that enhance high-quality spikes on EEG, making it a common choice for electroconvulsive therapy (ECT) but less ideal for steady-state intraoperative focus localization. Deep neuromuscular blockade must be avoided if motor mapping or electromyography (EMG) is concurrently planned. 

Anesthesia Board Review Guide: Respiratory Monitoring 

Page 13`
    }
  ]
};
