import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, XCircle, Zap, Gauge } from 'lucide-react'

export default function Introduction() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-gold-500/15 border border-gold-500/30 rounded-full text-gold-300 text-sm font-medium mb-6">
              PA Senate Bill 600
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Meter Choice for{' '}
              <span className="text-gold-400">Pennsylvanians</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed mb-10">
              Protecting Health, Preserving Rights, Providing Options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/why"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
              >
                Learn Why It Matters
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/action"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-navy-400 text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors"
              >
                Take Action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meter Comparison Visual */}
      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Smart Meter */}
            <div className="bg-white rounded-xl shadow-md border border-navy-100 overflow-hidden">
              <div className="bg-navy-800 text-white px-6 py-4 flex items-center gap-3">
                <Zap className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif font-bold text-lg">Digital "Smart" Meter</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-navy-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2 shrink-0" />
                    Emits RF/EMF radiation continuously
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2 shrink-0" />
                    Contains Switch Mode Power Supply (SMPS)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2 shrink-0" />
                    Transmits up to 190,000 times per day
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2 shrink-0" />
                    Creates "dirty electricity" on home wiring
                  </li>
                </ul>
              </div>
            </div>

            {/* Analog Meter */}
            <div className="bg-white rounded-xl shadow-md border border-gold-200 overflow-hidden">
              <div className="bg-gold-500 text-navy-900 px-6 py-4 flex items-center gap-3">
                <Gauge className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg">Analog Meter</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-navy-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 shrink-0" />
                    No RF radiation emissions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 shrink-0" />
                    No SMPS &mdash; no dirty electricity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 shrink-0" />
                    Proven, reliable electromechanical design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 shrink-0" />
                    No privacy, security, or fire concerns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What SB 600 Would Do */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-4">
              What SB 600 Would Do
            </h2>
            <p className="text-center text-navy-500 mb-12 text-lg">
              A bill introduced by Senator Mastriano to protect Pennsylvania consumers
            </p>

            <div className="space-y-4">
              {[
                'Provide utility meter choice and unbiased information to consumers',
                'Protect public health and consumers\u2019 rights',
                'Regulate harmful Electromagnetic Radiation (EMR) from digital "smart" meters',
                'Give consumers the right to request the removal of installed digital utility meters, without hassle and in a timely manner',
                'Prohibit utilities from charging the consumer for exercising choice',
                'Penalize utilities that do not comply in a timely manner',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-navy-100 shadow-sm"
                >
                  <div className="w-8 h-8 bg-gold-50 border border-gold-200 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold-600" />
                  </div>
                  <p className="text-navy-700 leading-relaxed pt-0.5">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What SB 600 Would NOT Do */}
      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-10">
              SB 600 Would <span className="text-navy-500">Not</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 border border-navy-100 shadow-sm">
                <XCircle className="w-10 h-10 text-navy-400 mx-auto mb-4" />
                <p className="text-navy-700 font-medium">Ban smart meters</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-navy-100 shadow-sm">
                <XCircle className="w-10 h-10 text-navy-400 mx-auto mb-4" />
                <p className="text-navy-700 font-medium">Stop advances in technology</p>
              </div>
            </div>
            <p className="mt-10 text-lg text-navy-600">
              SB 600 simply ensures <strong className="text-navy-900">meter choice</strong> &mdash; giving consumers the option without eliminating existing technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
