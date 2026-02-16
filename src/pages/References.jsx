import { BookOpen } from 'lucide-react'

const references = [
  'Pennsylvanians Against Smart Meters (2018). Letter: Requested Hearing on HB 2564 Small Wireless Facilities Act. August 15, 2018.',
  'Pennsylvanians for Safe Technology (2019). Letter to Representative Roae: August 22, 2019.',
  'Pennsylvanians for Safe Technology (2021). Letter to Chairman Marshall and Members of the House Consumer Affairs Committee: November 22, 2021.',
  'Pennsylvanians for Safe Technology (2023). Letter to Jeffery Iseman, re: Comments regarding PASILC\u2019s State Plan for Independent Living. December 30, 2023.',
  'Pennsylvanians for Safe Technology (2023). FDA Comment Pennsylvanians For Safe Technology, Testimony for FDA Docket No. FDA-2021-P-1347 (Revised 12/31/23).',
  'Povacz v. Pa. PUC, 2020 WL 5949866 (Pa. Commw. Ct. Oct. 8, 2020).',
  'Alexia and Lawrence McKnight v. PECO Energy Co, PA PUC Docket No. C-2017-2621057, Initial Decision.',
  'Branagh v. Pennsylvania Pub. Util. Comm\u2019n, 302 A.3d 1261 (Pa. Commw. Ct. 2023).',
  'Salmone, A. (2020). Mandating smart utility meter installation quashed by PA Commonwealth Court. The Morning Call, November 13, 2020.',
  'Brief of Children\u2019s Health Defense, and Building Biology Institute, et al as Amici Curiae in support of Appellees/cross-appellants "customers". Brief of Amicus Curiae Supporting the Appellees/Cross-Appellant "Customers" in the Appeals from the Commonwealth Court\u2019s October 8, 2020 Order at Docket Nos. 492 C.D. 2019, 606 C.D. 2019, and 607 C.D. 2019.',
  'Namkung, P. (2012). Memorandum: Health risks associated with smart meters. County of Santa Cruz Health Services Agency.',
  'Smart meter radiation health effects. Physicians for Safe Technology mdsafetech.org.',
  'Conrad, R. & Friedman, E. (2013). Smart meter health effects survey and report.',
  'Conrad, R. Pre-filed testimony of Richard Conrad, Ph.D. MPUC Docket No. 2011-00262.',
  'Golomb, B. Presented at: Baldwin, H., Davis, D., Goldberg, S., Havas, M., Mattson, K., Mallery-Blythe, E., & Russell, C. (2020, October 23-24 and 2021, January 28-31). Prevention, Diagnosis and Treatment of EMF Associated Illness. Virtual Conference.',
  'Powell, R. (2014). The health argument for replacing wireless smart meters with a safe metering technology in Maryland. A message to the Maryland General Assembly. 1-20.',
  'Powell, R. (2015). Symptoms after exposure to smart meter radiation.',
  'Carpenter, D. Slide Presentation: Adverse health effects from radiofrequency (RF) radiation with a focus on AMI meters. University of Albany, Institute for Health and the Environment.',
  'Carpenter, D. (2020). Letter to WSSC Water. Response to report on potential impacts on human health of advanced metering infrastructure. University of Albany, Institute for Health, and the Environment.',
  'Halteman, E. (2019). EMF Health effects survey 2019. Final Results March 12, 2019. Survey Design and Analysis. EMF Safety Network.',
  'Hensigner, P & Budzinski, B. (2024). Why electrohypersensitivity is a biologically expected reaction to harmful radiation. Gesellschaft; 37,2-2024.',
  'Jamieson, I & Mallory-Blythe, E. (2016). Joint written evidence, SME0004 Parliament.UK Testimony. Evidence on smart meters.',
  'Lamech, F. (2014). Self-reporting of symptom development from exposure to radiofrequency fields of wireless smart meters in Victoria, Australia. Alternative Therapies, 20(6), 28-38. NIH PMID 25478801.',
  'Maisch, D. (2012). Smart meter health concerns: Just a nocebo effect or an emerging public health nightmare? Australian College of Nutritional and Environmental Medicine. 31(2).',
  'Pocket, S. (2018). Public health and the radio frequency radiation emitted by cellphone technology, smart meters, and WiFi. New Zealand Medical Association Journal. 131(1487), ISSN 1175-8716.',
  'Flydal, E. & Nordhagen, E. (2023). Smart meters, dirty electricity, pulses and health. ISBN 978-82-692792-2-1.',
  'Victory against Enedis: The court rules against the forced installation of Linky Meters. French Court Case Ruling.',
  'United States Court of Appeals for the District of Columbia Circuit, USCA Case #20-1025 Document #1869749 filed 11/04/2020 Volumes 1-27.',
  'Cities of Philadelphia and Boston (2013). Reply comments of the Cities of Philadelphia and Boston, Federal Communications Commission, ET Docket No. 13-84, ET Docket No. 03-137.',
  'Advocates for the EMS Disabled, Federal Communications Commission, GN Docket No. 22-69.',
  'Baldwin, H., Davis, D., Goldberg, S., Havas, M., Mattson, K., Mallery-Blythe, E., & Russell, C. (2020, October 23-24 and 2021, January 28-31). Prevention, Diagnosis and Treatment of EMF Associated Illness and Pre-Conference course: Electrosmog and Electrotherapetics 101. Virtual Conference.',
  'Belpomme, D., Campagnac, C., & Irigaray, P. (2015). Reliable disease biomarkers characterizing and identifying electrohypersensitivity and multiple chemical sensitivity as two etiopathogenic aspects of a unique pathological disorder. Reviews on Environmental Health, 30(4), 251\u2013271.',
  'Belpomme, D., & Irigaray, P. (2020). Electrohypersensitivity as a newly identified and characterized neurologic pathological disorder: How to diagnose, treat, and prevent it. International Journal of Molecular Sciences, 21(6), 1915.',
  'Belpomme, D., Carlo, G., Irigaray, P., Carpenter, D., et al. (2021). The critical importance of molecular biomarkers and imaging in the study of electrohypersensitivity. A scientific consensus international report. International Journal of Molecular Science, 22(14):7321.',
  'Belpomme, D. & Irigaray, P. (2023). Electromagnetic hypersensitivity as a worldwide, man-made electromagnetic pathology: A review of the medical evidence. in Panagopoulos, D. (2023). Electromagnetic Fields of Wireless Communications: Biological and Health Effects. CRC Press.',
  'Belyaev, I., Dean, A., Eger, H., et al. (2016). EUROPAEM EMF Guideline 2016 for the prevention, diagnosis and treatment of EMF-related health problems and illnesses. Reviews on Environmental Health, 31(3), 363\u2013397.',
  'Eberle, S. (2014). What\u2019s the diagnosis, doctor? Sonoma Medicine, Fall 2014, 27\u201332.',
  'Genus, S., & Tymchak, M. (2014). Clinical review: Approach to patients with unexplained multimorbidity with sensitivities. Canadian Family Physician, 60(6), 533\u2013537.',
  'Giuliani, L., & Soffritti, M. (2010). National Institute for the Study and Control of Cancer and Environmental Diseases "Bernardino Ramazzini" (Italy). NLM Unique ID 101554011.',
  'Hedendahl L., Carlberg M., & Hardell L. (2015). Electromagnetic hypersensitivity\u2014an increasing challenge to the medical profession. Reviews on Environmental Health, 30(4), 209-15.',
  'Hennies, K., Neitzke, P., Voigt, H. (2000). Mobile telecommunications and health: Review of the current scientific research in view of precautionary health protection. ECOLOG Institute.',
  'Heuser, G. & Heuser, S. (2017). Functional brain MRI in patients complaining of electrohypersensitivity after long term exposure to electromagnetic fields. Rev Environ Health. 32(3):291-299. PMID: 28678737.',
  'Nagy, L., Patrick, L. & Chaloult, P. (2019, September 6-8). Electromagnetic Fields Conference 2019, Diagnosis and Treatment: Effects of Electromagnetic Fields Exposure.',
  'Panagopoulos, D. (2023). Electromagnetic Fields of Wireless Communications: Biological and Health Effects. CRC Press, Taylor Francis Group.',
  'Physicians for Safe Technology (2025).',
  'Regional Medical Association, Austrian Medical Association (2012). Guideline of the Austrian Medical Association for the diagnosis and treatment of EMF related health problems and illnesses (EMF syndrome). Adopted 3rd March 2012 in Vienna.',
  'Stein Y. & Udasin I.G. (2020). Electromagnetic hypersensitivity (EHS, microwave syndrome) \u2013 Review of mechanisms. Environmental Research, 186, 109445. PMID: 32289567.',
  'Balmori, A. (2022). Evidence for a health risk by RF on humans living around mobile phone base stations: From radio frequency sickness to cancer. Environmental Research, 214, 113851.',
  'Hardell, L., Koppel, T. (2022). Electromagnetic hypersensitivity close to mobile phone base stations \u2013 a case study in Stockholm, Sweden. Reviews on Environmental Health.',
  'Bevington, M. (2019). The prevalence of people with restricted access to work in man-made electromagnetic environments. Journal of Environment and Health Science, 5(1), 1\u201312.',
  'Physicians for Safe Technology (2025). Patient Questionnaire Electrohypersensitivity. www.mdsafetech.org.',
  'Bevington M. (2021). Proof of EHS beyond all reasonable doubt. Rev Environ Health, 2(37), 299-301.',
  'Irigaray, P., Caccamo, D., & Belpomme, D. (2018). Oxidative stress in electrohypersensitivity self-reporting patients: Results of a prospective in vivo investigation with comprehensive molecular analysis. International Journal of Molecular Medicine, 42(4):1885-1898.',
  'De Luca, C., Chung Sheun Thai, J., et al. (2014). Metabolic and genetic screening of electromagnetic hypersensitive subjects as a feasible tool for diagnostics and intervention. Mediators of Inflammation, 924184.',
  'Heuser, G., & Heuser, S. (2017). Functional brain MRI in patients complaining of electrohypersensitivity after long term exposure to electromagnetic fields. Reviews on Environmental Health, 32(3), 291-299.',
  'Gibson, P. (2009). Chemical and electromagnetic exposures as disability barriers: Environmental Sensitivity. Disability and Society, 24(2), 187-199.',
  'Gibson P. (2010). Of the world but not in it: barriers to community access and education for persons with environmental sensitivities. Health Care Women International, 31(1), 3-16.',
  'Gibson P., Kovach S., & Lupfer A. (2015). Unmet health care needs for persons with environmental sensitivity. Journal of Multidisciplinary Healthcare, 8, 59-66.',
  'Stein, Y. (2015). Environmental Refugees: Electrohypersensitive individuals (EHS) in the digital world \u2013 a disabled population deprived of home, work, and basic rights. UNESCO Chair in Bioethics 10th World Conference.',
  'Stein, Y. (2021). Preventive measures to reduce harmful effects produced by electromagnetic radiation on health. Health Risk Analysis.',
  'Mallery-Blythe, E. (2014). Electromagnetic Hypersensitivity: A summary. Electromagnetic Radiation and Health for Children.',
  'Regional Medical Association, Austrian Medical Association (2012). Guideline of the Austrian Medical Association for the diagnosis and treatment of EMF related health problems and illnesses (EMF syndrome). Adopted 3rd March 2012 in Vienna.',
  'Nathan, N. (2024). The sensitive patient\u2019s healing guide. Cypress House.',
  'IARC (2002). Non-ionizing radiation. Part 1: Static and extremely low frequency (ELF) Electric and Magnetic Fields (Volume 80). International Agency for Research on Cancer. Lyon, France.',
  'IARC (2013). Non-ionizing radiation. Part 2: Radio frequency electromagnetic fields (Volume 102). International Agency for Research on Cancer. Lyon, France.',
  'Falcioni, L., Bua, L., Tibaldi, E., et al. Report of final results regarding brain and heart tumors in Sprague-Dawley rats exposed from prenatal life until natural death to mobile phone radio frequency field representative of 1.8 GHz GSM base station environmental emission. Environmental Research, 165, 496-503.',
  'Hardell, L., Hardell, L., Nyberg, R. (2020). Appeals that matter or not on a moratorium on the deployment of the fifth generation 5G, for microwave radiation. Molecular and Clinical Oncology.',
  'Miller, A., Morgan, L., Udasin, I., Davis, D. (2018). Cancer epidemiology update following the 2011 IARC evaluation of radio frequency electromagnetic fields (Monograph 102). Environmental Research, 167, 673-683.',
  'Miller, A., Morgan, L., Udasin, I., Davis, D., Hardell, L., et al. (2019). Risks to health and well being from radio frequency radiation emitted by cell phones and other wireless devices. Frontiers in Public Health, 7, 223.',
  'NTP (National Toxicology Program), 2018. Toxicology and carcinogenesis studies in Sprague-Dawley SD rats exposed to whole body radio frequency radiation at a frequency (900 MHz) and modulations (GSM and CDMA) used by cell phones. NTP TR595. Department of Health and Human Services, USA.',
  'Mevissen, M., Ducray, A., Ward, J., et al. (2025). Effects of radiofrequency electromagnetic field exposure on cancer in laboratory animal studies, a systematic review. Environment International, (199)109482.',
  'Beety, N. (2019). Overview: Fires and Electrical Hazards from Smart wireless, PLC and digital Utility Meters. Smart Meter Harm.',
  'Brown, J., Armstrong, R., Babrauskas, V. (2021). The Discovery and Science of Smart Meter Fires Introduction to the discovery of Radio Frequency Radiation (RF Rad) and the related breakdown of electrical wiring insulation leading to fire causation.',
  'The National Call for Safe Technology. Bills that Jeopardize National Security Fact Sheet.',
  'The National Call for Safe Technology. Letter to Senate Commerce Committee et al on National Security Risks of S. 1648 (HR 682), HR 1123, HR 1353, HR 4510, HR 3565, HR 1338. September 19, 2023.',
  'Bell, W. (1931). Effects of super high frequency radio current on health of men exposed under service conditions. US Navy Medical Research Bulletin 29: 525-551.',
  'Glaser, Z. (1972). Bibliography of reported biological phenomena "effects" and clinical manifestations attributed to microwave and radiofrequency radiation. Naval Medical Research Institute, Bethesda, MD.',
  'Lear, R. & Rees, C. (2025). Safety of Wireless Technologies: The Scientific View.',
  'Adams, R. (1976). Biological effects of electromagnetic radiation, radiowaves, and microwaves Eurasian Communist countries. Defense Intelligence Agency Report # DST-18108-074-76.',
  'Raines (1981). Electromagnetic field interactions with the human body observed effects and theories. NASA CR 166661.',
  'Bolen, S. (1994). Biological effects and safety standards of Radio-frequency/Microwave and Safety Standards: A Review. Air Force Material Report #RL-TR-94-53.',
  'Vrachelbnoye (1977). CIA Translations on USSR Science and Technology Biomedical Sciences \u2013 Effects of Non-ionizing Electromagnetic Radiation.',
  'Gordon, V. (1974). Biological effects of radiofrequency and electromagnetic fields. Translation from Russian. Moscow US Joint Publication Research Service.',
  'Brief of Children\u2019s Health Defense, and Building Biology Institute, et al as Amici Curiae. pp. 18-19.',
  'Isotrope Report (2013). Report on examination of selected sources of electromagnetic fields at selected residences in Hastings-on-Hudson. New York Safe Utility Meter Association.',
  'Virginians for Safe Technology (2023). SB 849 Technical Briefing, Supplemental Information.',
  'Protective Safety Devices Cadillac Budget. pasafetech.org/resource-files.',
  'Brief of Children\u2019s Health Defense, and Building Biology Institute, et al as Amici Curiae. p. 201.',
  'Ackerman, D., Ethler, C., Foldes, E., et al. (2011). Electrical conduction block in large nerves: high frequency current delivery in non-human primate. Muscle Nerve, 43(6):897-899.',
  'Fisher, K., Jillani, N., Oluoch, G. & Baker, S. (2014). Blocking central pathways in the primate motor system using high frequency sinusoidal current. Journal of Neurophysiology, 113: 1670-1680.',
  'Liu, H., Roppolo, J., DeGroat, W., & Tai, C. (2009). The role of slow potassium current in nerve conduction block induced by high frequency biphasic electrical current. IEEE Transactions on Biomedical Engineering; 56(1): 137.',
  'Liu, H., Roppolo, J., DeGroat, W., & Tai, C. (2009). Modulation of axonal excitability by high frequency biphasic electrical current. IEEE Transactions on Biomedical Engineering; 56(9): 2167.',
  'Tai, C., DeGroat, W., & Roppolo, J. (2009). Simulation analysis of conduction block in unmyelinated axons induced by high frequency biphasic electrical current. IEEE Transactions on Biomedical Engineering; 52(7): 1323.',
  'Zhang, X., Roppolo, J., DeGroat, W., & Tai, C. (2006). Mechanism of nerve conduction block induced by high frequency biphasic electric current. IEEE Transactions on Biomedical Engineering; 53(12 Pt 1): 2445.',
  'Zhao, S., Yang, G., Wang, J., et al. (2015). Conduction block in myelinated axons induced by high frequency (kHz) non-symmetrical biphasic stimulation. Frontiers in Computational Neuroscience, 9(86).',
  'Federal Register (2017, January 18). Rules and Regulations (Volume 82, No. 11, page 5794-5796).',
  'IEQ Indoor Environmental Quality (2005). Social Security Administration (2003, 2020). Electromagnetic sensitivity found to be a severe impairment.',
  'National Council on Disability (2023). Framework to End Health Disparities of People with Disabilities.',
  'United States Court of Appeals for the District of Columbia Circuit (2021, August 12). 20-1025 \u2013 Environmental Health Trust, et al v. FCC, et al.',
  'Bertuccio, M.P., Acri, G., Ientile, R., Caccamo, D., & Curr\u00f2, M. (2023). The Exposure to 2.45 GHz Electromagnetic Radiation Induced Different Cell Responses in Neuron-like Cells and Peripheral Blood Mononuclear Cells. Biomedicines, 11(12), 3129.',
  'H\u00e9roux, P. (2025). The Collision between Wireless and Biology. HELIYON.',
  'Redmayne, M., & Reddel, S. (2021). Redefining electrosensitivity: A new literature-supported model. Electromagnetic Biology and Medicine, 40(2), 227\u2013235.',
  'Redmayne, M. & Reddel, S. (2021). Supplementary material for Redefining Electrosensitivity: A new literature supported model.',
  'Kim J., Lee J., Kim H., Kim K., & Kim H. (2019). Possible Effects of Radiofrequency Electromagnetic Field Exposure on Central Nerve System. Biomolecules and Therapies, 27(3):265-275. PMID: 30481957.',
  'Eberhardt, J.L., Persson, B.R.R., Brun, A.E., Salford, L.G., & Malmgren, L.O.G. (2008). Blood-Brain Barrier Permeability and Nerve Cell Damage in Rat Brain 14 and 28 Days After Exposure to Microwaves from GSM Mobile Phones. Electromagnetic Biology and Medicine, 27(3), 215\u2013229.',
  'Alster, Norm (2015). Captured Agency: How the Federal Communications Commission Is Dominated by the Industries It Presumably Regulates. Edmond J. Safra Center for Ethics.',
]

export default function References() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-gold-400" />
            <h1 className="text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-gold-400">References</span>
            </h1>
          </div>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Annotated bibliography of 106 sources supporting the case for meter choice legislation
          </p>
        </div>
      </section>

      {/* References List */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0 divide-y divide-navy-100">
            {references.map((ref, i) => (
              <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div className="w-10 text-right shrink-0">
                  <span className="inline-block bg-navy-100 text-navy-600 text-xs font-bold px-2 py-1 rounded">
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm text-navy-700 leading-relaxed">{ref}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
