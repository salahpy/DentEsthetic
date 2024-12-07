import React from "react"
import { Link } from "react-scroll"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const schedule = [
    { day: "Lundi - Vendredi", hours: "9:00 - 19:00" },
    { day: "Samedi", hours: "9:00 - 15:00" },
  ]
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col gap-12 lg:gap-16 lg:flex-row">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-4">
              DentEsthetic
            </h3>
            <p className="text-gray-400 mb-4 max-w-[510px]">
              Votre spécialiste en dentisterie esthétique à Paris. Notre équipe
              d'experts s'engage à vous offrir des soins dentaires de qualité
              dans un environnement confortable et accueillant.
            </p>
          </div>
          <div className="flex flex-1 justify-between">
            <div className="flex flex-col sm:flex-row md:flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Liens rapides
                </h4>
                <ul className="space-y-2">
                  {[
                    "accueil",
                    "services",
                    "about",
                    "testimonials",
                    "appointment",
                    "contact",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        to={item}
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-white cursor-pointer transition-colors capitalize"
                      >
                        {item === "about" ? "À propos" : item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col justify-between">
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Horaires
                </h4>
                <div className="mt-1 text-gray-600">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {schedule.map(({ day, hours }) => (
                      <React.Fragment key={day}>
                        <span className="font-medium text-right text-gray-400">
                          {day}
                        </span>
                        <span className=" text-gray-400">{hours}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} Cabinet DentEsthetic. Tous droits réservés.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>{" "}
              &middot;{" "}
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
