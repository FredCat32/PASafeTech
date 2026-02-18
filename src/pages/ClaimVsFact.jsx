import { useState } from 'react'
import { ChevronDown, ChevronUp, XOctagon, CheckCircle2 } from 'lucide-react'

const claimsAndFacts = [
  {
    claim: 'People cannot be hurt by a smart meter\'s radiation. It is below the FCC guidelines for Safety.',
    fact: 'The FCC guidelines only look at heating, so they only guarantee you will not be burned by the radiation. Unfortunately, the FCC guidelines do not protect against the biological effects of electromagnetic radiation on humans and animals, proven in many studies, including US military studies. These include oxidative stress leading to inflammation, autoimmune conditions, cell membrane effects, apoptosis/cell death, cancer, mitochondrial effects, neurological problems, and breaching the blood brain barrier.',
    detail: 'Functional MRI scans of 10 people with EMR syndrome all had findings similar to those seen in traumatic brain injuries showing impaired circulation in the brain.',
  },
  {
    claim: 'Smart meters benefit consumers.',
    fact: 'Without proper evidence, smart meters can seem like just another way for utilities to manage their systems \u2014 not to help the user. While utilities benefit from real-time data, the average consumer does not see significant advantages unless they actively monitor and adjust their usage.',
  },
  {
    claim: 'Most of the evidence from these groups is either anecdotal, not peer-reviewed, or lacks rigorous methodology.',
    fact: 'People have, for several years, been providing compelling documentation and medical evidence indicating that smart meters pose a serious risk to their health. These reports are supported by medical records and statements from licensed healthcare professionals.',
    detail: 'There is extensive documentation of harm from the type of electromagnetic radiation used by smart meters from thousands of US military studies. The more recent studies in the voluminous record of scientific evidence in EHT et al v. FCC (2021) confirms clear and convincing evidence of harms. This radiation is classified as a Group 2B possible carcinogen with more recent results calling for reclassification as a probable (Class 2A) or known (Class 1) carcinogen.',
  },
]

function ClaimCard({ item, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white border border-navy-100 rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 lg:p-8 flex items-start gap-4 hover:bg-navy-50/50 transition-colors cursor-pointer"
      >
        <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-navy-600 font-bold text-sm">{index + 1}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-3">
            <XOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Claim</span>
              <p className="text-navy-800 font-medium mt-1">{item.claim}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Fact</span>
              <p className="text-navy-700 mt-1 leading-relaxed">{item.fact}</p>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-1">
          {item.detail && (
            expanded
              ? <ChevronUp className="w-5 h-5 text-navy-400" />
              : <ChevronDown className="w-5 h-5 text-navy-400" />
          )}
        </div>
      </button>

      {expanded && item.detail && (
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
          <div className="ml-12 bg-gold-50 border border-gold-200 rounded-lg p-4">
            <p className="text-navy-700 text-sm leading-relaxed">{item.detail}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ClaimVsFact() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Claim vs. <span className="text-gold-400">Fact</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Addressing common misconceptions about smart meters and consumer safety
          </p>
        </div>
      </section>

      {/* Claims */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {claimsAndFacts.map((item, i) => (
              <ClaimCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Independent Studies Note */}
      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold mb-6">Independent Research Matters</h2>
            <p className="text-navy-700 leading-relaxed mb-6">
              The actual personal testimonies, studies from independent groups, and medical documentation by treating physicians are more reliable and genuine than biased funded studies pushed by certain agencies and corporations.
            </p>
            <p className="text-navy-700 leading-relaxed">
              Many major health organizations are politically and fundamentally biased due to their funding sources and conflicting stakes with corporate influence. The independent studies conducted without any financial and political stakes prove that the radiation produced by smart meters can have dire effects on people's health, whether they are aware of the harm or not.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
