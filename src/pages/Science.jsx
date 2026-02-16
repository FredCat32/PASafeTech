import { FlaskConical, Radio, Waves, CircuitBoard, DollarSign } from 'lucide-react'

export default function Science() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            The <span className="text-gold-400">Science</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Medical and Technical Evidence of Why SB 600 is Significant for Consumers
          </p>
        </div>
      </section>

      {/* Military Studies */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-navy-700" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold">Long-Standing Evidence of Harm</h2>
              </div>
            </div>

            <div className="bg-navy-50 border border-navy-100 rounded-xl p-6 lg:p-8 mb-12">
              <p className="text-navy-700 leading-relaxed mb-6">
                Abundant, long-standing evidence of harm including biological effects has been documented in military studies spanning decades:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                {[
                  { org: 'US Navy', years: '1931, 1972' },
                  { org: 'DIA', years: '1976' },
                  { org: 'NASA', years: '1981' },
                  { org: 'Air Force', years: '1988' },
                  { org: 'CIA', years: '1977' },
                  { org: 'Gordon', years: '1974' },
                ].map(study => (
                  <div key={study.org} className="bg-white border border-navy-200 rounded-lg p-4 text-center">
                    <div className="font-bold text-navy-900">{study.org}</div>
                    <div className="text-xs text-navy-500 mt-1">{study.years}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-gold-400 pl-4 italic text-navy-700">
                "Experimental evidence has shown that exposure to low intensity radiation can have a <strong>profound effect on biological processes</strong>."
                <footer className="mt-2 text-sm text-navy-500 not-italic">&mdash; U.S. Air Force</footer>
              </blockquote>
            </div>

            {/* Three RF Issues */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center">
                <Radio className="w-6 h-6 text-gold-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold">Three Primary RF Exposure Issues</h2>
            </div>

            <div className="space-y-6 mb-12">
              {/* Issue 1 */}
              <div className="bg-white border border-navy-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 border border-red-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">RF Antenna Transmissions</h3>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      The RF antennas in digital "smart" meters send usage data and communicate with other meters and smart devices, forming a mesh network and transmitting up to <strong>190,000 times per day</strong> using intensely pulsed RF/EMF. The frequency used is often 900 MHz, classified as at least a Group 2B/possible carcinogen, with recent research supporting reclassification as Group 2A/Probable or Group 1 Carcinogen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 2 */}
              <div className="bg-white border border-navy-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 border border-orange-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Conducted RF Emissions Over Home Wiring</h3>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      These antennas' RF emissions also conduct over the home electric wiring, transforming the entire house into a <strong>"repeater" antenna</strong>, exposing all occupants to continuous radiation throughout their living space.
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 3 */}
              <div className="bg-white border border-navy-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-50 border border-yellow-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-yellow-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">"Dirty Electricity" from SMPS</h3>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      The switch mode power supply (SMPS) in digital meters creates RF frequencies as a byproduct of the AC/DC conversion process. Traditional analog meters do <strong>not</strong> have SMPSs and do <strong>not</strong> create these frequencies. Digital meters produce them even without transmitting antennas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dirty Electricity */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Waves className="w-6 h-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold">Dirty Electricity Health Risks</h2>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 lg:p-8 mb-12">
              <p className="text-navy-700 leading-relaxed mb-4">
                Digital smart meters' conducted emissions onto household wiring create undesirable electrical noise typically operating in the range of <strong>2 kHz &ndash; 50 kHz</strong>.
              </p>
              <p className="text-navy-700 leading-relaxed">
                These frequencies are known by both the <strong>FCC</strong> and the <strong>International Commission on Non-ionizing Radiation Protection (ICNIRP)</strong> to cause adverse neural and muscular effects, yet remain unregulated and uncontrolled on building power circuits.
              </p>
            </div>

            {/* EPA & Pollutant */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <CircuitBoard className="w-6 h-6 text-green-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold">RFR: An Unmonitored Pollutant</h2>
            </div>

            <div className="bg-white border border-navy-100 rounded-xl p-6 lg:p-8 shadow-sm mb-12">
              <p className="text-navy-700 leading-relaxed mb-4">
                Despite the range of serious, even life-threatening problems, there is <strong>no government monitoring</strong> of ill effects or levels of radiation from smart meters or any other wireless infrastructure by any U.S. health agency or the EPA.
              </p>
              <p className="text-navy-700 leading-relaxed mb-4">
                People presume safety; however, insurance carriers such as <strong>Lloyds of London</strong> and <strong>Swiss Re</strong> consider RFR to be an <strong>uninsurable pollutant</strong>.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The EPA monitors other known Group 2B possible carcinogens like lead, but was <strong>defunded</strong> for monitoring RFR, leaving those most vulnerable unprotected.
              </p>
            </div>

            {/* Cost to Consumer */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-gold-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold">Cost of Mitigation Falls on Consumers</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-6">
                <div className="text-3xl font-bold text-navy-900 mb-2">$2,600</div>
                <div className="text-sm text-navy-600 font-medium mb-2">Whole-House Dirty Electricity Filter</div>
                <p className="text-navy-500 text-sm">
                  Consumers are expected to install filters at their own expense to make their electric service safer.
                </p>
              </div>
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-6">
                <div className="text-3xl font-bold text-navy-900 mb-2">$1,000</div>
                <div className="text-sm text-navy-600 font-medium mb-2">Bedroom Sleep Switch</div>
                <p className="text-navy-500 text-sm">
                  A switch to turn off power to bedroom circuits at night, installed, for those aware of the health risks.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-navy-800 font-medium text-center">
                It is <strong>impossible for those who rent</strong> to protect themselves from these exposures. There are no ADA housing subsidies granted for EMR shielding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
