import { Mail, Globe, ExternalLink, BookOpen } from 'lucide-react'

const organizations = [
  { name: 'Americans for Responsible Technology', url: 'https://www.americansforresponsibletech.org' },
  { name: 'The Baby Safe Project', url: 'https://www.babysafeproject.org' },
  { name: 'Environmental Health Trust', url: 'https://www.ehtrust.org' },
  { name: 'Pennsylvanians for Safe Technology', url: 'https://www.pasafetech.com' },
  { name: 'Smart Meter Harm', url: 'https://www.smartmeterharm.org' },
  { name: 'Stop Smart Meters', url: 'https://www.stopsmartmeters.org' },
  { name: 'Who-Knew?', url: 'https://www.Who-Knew.info' },
]

const technicalResources = [
  { name: 'Electromagnetic Radiation Safety', url: 'https://www.saferemr.org' },
  { name: 'International Commission for Electromagnetic Safety', url: 'https://www.icems.eu' },
  { name: 'National Call for Safe Technology', url: 'https://thenationalcall.org' },
  { name: 'Physicians for Safe Technology', url: 'https://www.mdsafetech.org' },
]

export default function TakeAction() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Take <span className="text-gold-400">Action</span> Now
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-10">
            Contact your senator and ask them to support SB 600 &mdash; because no one should be forced to risk their health, privacy, or property.
          </p>
          <a
            href="mailto:abashir@pasen.gov?subject=Support%20SB%20600%20%E2%80%93%20Meter%20Choice&body=I%20am%20writing%20to%20ask%20for%20your%20support%20of%20Senate%20Bill%20600%20%E2%80%93%20Meter%20Choice%20for%20Pennsylvanians."
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-900 rounded-xl font-bold text-lg shadow-lg hover:bg-gold-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
            Support SB 600 &mdash; Meter Choice
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-10">Contact &amp; Connect</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <a
                href="mailto:abashir@pasen.gov?subject=Regarding%20SB%20600%20%E2%80%93%20Meter%20Choice"
                className="bg-white border border-navy-100 rounded-xl p-6 shadow-sm hover:border-gold-300 hover:shadow-md transition-all block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">Aaron Bashir</div>
                    <div className="text-sm text-navy-500">Legislative Director</div>
                  </div>
                </div>
                <p className="text-gold-700 font-medium">abashir@pasen.gov</p>
              </a>

              <a
                href="mailto:dbeishl@pasen.gov?subject=Regarding%20SB%20600%20%E2%80%93%20Meter%20Choice"
                className="bg-white border border-navy-100 rounded-xl p-6 shadow-sm hover:border-gold-300 hover:shadow-md transition-all block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">Donald Beishl</div>
                    <div className="text-sm text-navy-500">Chief of Staff</div>
                  </div>
                </div>
                <p className="text-gold-700 font-medium">dbeishl@pasen.gov</p>
              </a>
            </div>

            <a
              href="https://www.senatormastriano.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-50 border border-navy-100 rounded-xl p-6 text-center block hover:border-gold-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-navy-600" />
                <span className="font-semibold text-navy-900">Connect with Sen. Mastriano</span>
              </div>
              <p className="text-gold-700 font-medium">www.senatormastriano.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="w-7 h-7 text-gold-600" />
                <h2 className="text-3xl font-serif font-bold">Resources</h2>
              </div>
              <p className="text-navy-600 max-w-2xl mx-auto">
                The overwhelming majority of testimonials and studies conducted by the US Military, independent groups, scientific institutions, medical professionals, and regulators have found considerable evidence of harm from the radiation digital "smart" utility meters transmit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Organizations */}
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold-500 rounded-full" />
                  Organizations Promoting Safe Technology
                </h3>
                <div className="space-y-3">
                  {organizations.map(org => (
                    <a
                      key={org.name}
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-navy-100 rounded-lg p-4 flex items-center justify-between gap-3 hover:border-gold-300 hover:shadow-md transition-all block"
                    >
                      <div>
                        <div className="font-medium text-navy-900 text-sm">{org.name}</div>
                        <div className="text-xs text-gold-700 mt-0.5">{org.url.replace('https://', '')}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-navy-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Technical */}
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-navy-500 rounded-full" />
                  Technical Information
                </h3>
                <div className="space-y-3">
                  {technicalResources.map(res => (
                    <a
                      key={res.name}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-navy-100 rounded-lg p-4 flex items-center justify-between gap-3 hover:border-gold-300 hover:shadow-md transition-all block"
                    >
                      <div>
                        <div className="font-medium text-navy-900 text-sm">{res.name}</div>
                        <div className="text-xs text-gold-700 mt-0.5">{res.url.replace('https://', '')}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-navy-400 shrink-0" />
                    </a>
                  ))}
                </div>

                {/* Key Legal Case */}
                <div className="mt-6 bg-white border border-gold-200 rounded-xl p-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Key Legal Precedent</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    <em>EHT et al v. FCC</em> (2021) &mdash; A landmark case where the U.S. Court of Appeals ruled that the FCC failed to adequately explain its decision to retain its 1996 RF exposure guidelines, despite extensive evidence of harm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            SB 600 is the Bipartisan Solution
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed mb-8">
            The "consumer rights" legislation Pennsylvania needs. No one should be forced to risk their health, privacy, or property.
          </p>
          <a
            href="mailto:abashir@pasen.gov?subject=Support%20SB%20600%20%E2%80%93%20Meter%20Choice&body=I%20am%20writing%20to%20ask%20for%20your%20support%20of%20Senate%20Bill%20600%20%E2%80%93%20Meter%20Choice%20for%20Pennsylvanians."
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-900 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
            Contact Your Senator Today
          </a>
        </div>
      </section>
    </div>
  )
}
