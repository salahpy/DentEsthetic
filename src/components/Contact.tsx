import React from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const ContactInfo = ({
  icon: Icon,
  title,
  content,
}: {
  icon: any
  title: string
  content: React.ReactNode
}) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <div className="mt-1 text-gray-600">{content}</div>
    </div>
  </div>
)

const Contact = () => {
  const schedule = [
    { day: "Lundi - Vendredi", hours: "9:00 - 19:00" },
    { day: "Samedi", hours: "9:00 - 15:00" },
  ]

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">
            Notre équipe est à votre disposition pour répondre à vos questions
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-8 justify-center">
            <ContactInfo
              icon={MapPin}
              title="Adresse"
              content={
                <p>
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris, France
                </p>
              }
            />

            <ContactInfo
              icon={Phone}
              title="Téléphone"
              content={
                <a
                  href="tel:+33123456789"
                  className="hover:text-blue-600 transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              }
            />

            <ContactInfo
              icon={Mail}
              title="Email"
              content={
                <a
                  href="mailto:contact@dentesthetic.fr"
                  className="hover:text-blue-600 transition-colors"
                >
                  contact@dentesthetic.fr
                </a>
              }
            />

            <ContactInfo
              icon={Clock}
              title="Horaires d'ouverture"
              content={
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {schedule.map(({ day, hours }) => (
                    <React.Fragment key={day}>
                      <span className="font-medium text-right">{day}</span>
                      <span>{hours}</span>
                    </React.Fragment>
                  ))}
                </div>
              }
            />
          </div>

          <div className="h-[400px] lg:h-full min-h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2159245650784!2d2.2945144!3d48.8693558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0x5c5a7cd0a713a4e4!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
