import { Mail, Globe, ExternalLink, BookOpen, Phone, FileText, Search } from 'lucide-react'

const committeeMembers = [
  { name: 'Senator Patrick Stefano', role: 'Chair, Senate Consumer Protection', phone: '(717) 787-7175' },
  { name: 'Senator Lisa Boscola', role: 'Minority Chair', phone: '(717) 787-4236' },
  { name: 'Senator Frank Farry', role: 'Majority Member, Vice Chair', phone: '(717) 787-5072' },
  { name: 'Senator Kim Ward', role: 'Ex-Officio', phone: '(717) 787-6063' },
]

const organizations = [
  { name: 'Americans for Responsible Technology', url: 'https://www.americansforresponsibletech.org' },
  { name: 'The Baby Safe Project', url: 'https://www.babysafeproject.org' },
  { name: 'EMR Syndrome Alliance', url: 'https://www.EMRSyndrome.org' },
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
            Take <span className="text-gold-400">Action</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Please contact the Senate Consumer Affairs Committee and tell them to support Meter Choice. Use the talking points from this website.
          </p>
        </div>
      </section>

      {/* Senate Consumer Affairs Committee */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-7 h-7 text-gold-600" />
              <h2 className="text-3xl font-serif font-bold">Senate Consumer Affairs Committee</h2>
            </div>
            <p className="text-navy-500 mb-8">
              Call these members and ask them to support Meter Choice
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {committeeMembers.map((member, i) => (
                <a
                  key={member.name}
                  href={`tel:${member.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-white border border-navy-100 rounded-xl p-5 shadow-sm hover:border-gold-300 hover:shadow-md transition-all block"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-navy-900">{member.name}</div>
                      <div className="text-sm text-navy-500 mt-0.5">{member.role}</div>
                    </div>
                    <div className="w-8 h-8 bg-gold-50 border border-gold-200 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-gold-700 font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-gold-700 font-medium">
                    <Phone className="w-4 h-4" />
                    {member.phone}
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Your Legislator */}
            <div className="bg-navy-50 border border-navy-100 rounded-xl p-6 lg:p-8 mb-12">
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">Contact Your State Legislators</h3>
              <p className="text-navy-700 leading-relaxed mb-6">
                Please contact your PA State Senator and PA House Representative and ask them to support and co-sponsor <strong>SB 600</strong> and <strong>HB 1112</strong>, respectively.
              </p>
              <a
                href="https://www.palegis.us/find-my-legislator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
              >
                <Search className="w-5 h-5" />
                Find My Legislator
              </a>
            </div>

            {/* Bills */}
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-7 h-7 text-gold-600" />
              <h2 className="text-3xl font-serif font-bold">Meter Choice Bills</h2>
            </div>
            <p className="text-navy-500 mb-8">
              Senate and House legislation for meter choice in Pennsylvania
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="https://www.palegis.us/legislation/bills/2025/sb600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-navy-100 rounded-xl p-6 shadow-sm hover:border-gold-300 hover:shadow-md transition-all block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-lg">Senate Bill 600</div>
                    <div className="text-sm text-navy-500">PA State Senate</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gold-700 text-sm font-medium">
                  Read the bill <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="https://www.palegis.us/legislation/bills/2025/hb1112"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-navy-100 rounded-xl p-6 shadow-sm hover:border-gold-300 hover:shadow-md transition-all block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-lg">House Bill 1112</div>
                    <div className="text-sm text-navy-500">PA House of Representatives</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gold-700 text-sm font-medium">
                  Read the bill <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
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
            href="https://www.palegis.us/find-my-legislator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-900 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors"
          >
            <Search className="w-6 h-6" />
            Find &amp; Contact Your Legislator
          </a>
        </div>
      </section>
    </div>
  )
}
