import { Heart, Flame, ShieldAlert, Eye, DollarSign, AlertTriangle } from 'lucide-react'

const healthSymptoms = [
  'Headaches', 'Fatigue', 'Insomnia', 'Nausea', 'Tinnitus',
  'Nosebleeds', 'Dizziness', 'Difficulty thinking',
  'Chest pain', 'Heart rhythm problems',
]

const concerns = [
  {
    icon: Flame,
    title: 'Electrical & Fire Hazards',
    description: 'These meters are poorly designed, and surges and overvoltage can destroy appliances and electronics as well as result in fires.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: ShieldAlert,
    title: 'Security Vulnerabilities',
    description: 'IoT devices can be easily hacked due to very low layers of encryption, creating physical safety issues. 5G+ was passed over for cybersecurity review in federal bill HR 1163.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: Eye,
    title: 'Privacy Concerns',
    description: 'Smart meters continuously gather detailed energy usage data, which could reveal personal habits or routines and be used to track behavior and surveil homes and businesses.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: DollarSign,
    title: 'Billing Inaccuracies',
    description: 'Reports of inaccurate readings from problems related to the Switch Mode Power Supply (SMPS) in smart meters can lead to unexpectedly high energy bills.',
    color: 'text-navy-600',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
  },
]

export default function WhyMeterChoice() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Why Pennsylvania Needs <span className="text-gold-400">Meter Choice</span>
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Residents throughout Pennsylvania and worldwide report adverse reactions to digital smart meters
          </p>
        </div>
      </section>

      {/* Health Effects */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-7 h-7 text-red-500" />
              <h2 className="text-3xl font-serif font-bold">Health Effects</h2>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6 lg:p-8 mb-8">
              <p className="text-navy-800 leading-relaxed mb-6">
                A voluminous data set of thousands of scientific research summaries was submitted to a federal court in the case of{' '}
                <em>EHT et al v. FCC</em> (2021) to establish the compelling evidence of the harms of electromagnetic radiation.
              </p>
              <blockquote className="border-l-4 border-red-300 pl-4 italic text-navy-700">
                "The dockets here have been updated with massive additional evidence of the <strong>crippling</strong> effects of RF radiation on an admitted minority, <strong>but a suffering minority</strong> of U.S. citizens."
                <footer className="mt-2 text-sm text-navy-500 not-italic">
                  &mdash; Cities of Philadelphia and Boston, 2013 FCC Comment
                </footer>
              </blockquote>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-navy-800">
              Reported Symptoms Following Smart Meter Installation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
              {healthSymptoms.map(symptom => (
                <div
                  key={symptom}
                  className="bg-white border border-navy-100 rounded-lg px-4 py-3 text-center text-sm font-medium text-navy-700 shadow-sm"
                >
                  {symptom}
                </div>
              ))}
            </div>

            <div className="bg-navy-50 border border-navy-100 rounded-xl p-6">
              <p className="text-navy-700 leading-relaxed">
                Continued exposure can result in <strong>arrhythmias</strong>, <strong>hearing loss</strong>,{' '}
                <strong>neurological problems</strong>, <strong>electromagnetic radiation syndrome</strong>,
                and <strong>cancer</strong> in some cases. RFR is classified as a possible carcinogen (Group 2B),
                with newer research supporting reclassification as probable (Group 2A) or known (Group 1).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns Grid */}
      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-7 h-7 text-gold-600" />
              <h2 className="text-3xl font-serif font-bold">Additional Concerns</h2>
            </div>
            <p className="text-navy-500 mb-10">
              Beyond health effects, digital smart meters pose multiple risks to consumers
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {concerns.map(concern => (
                <div
                  key={concern.title}
                  className={`${concern.bg} border ${concern.border} rounded-xl p-6`}
                >
                  <concern.icon className={`w-8 h-8 ${concern.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{concern.title}</h3>
                  <p className="text-navy-700 text-sm leading-relaxed">{concern.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              The Solution: <span className="text-gold-600">"Meter Choice"</span>
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed mb-6">
              Legislation providing utility meter choice to give Pennsylvanians the choice of a digital or analog utility meter.
            </p>
            <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 inline-block">
              <p className="text-navy-800 font-medium">
                This proposal is <strong>NOT</strong> a ban on smart meters. It gives an option to consumers who desire choice or are having severe health effects to use analog meters on their homes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
