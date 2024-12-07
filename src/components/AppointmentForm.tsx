import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerDemo } from "./DatePickerDemo";
import { SelectDemo } from "./Select";
import { Terminal } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import Toastify CSS

const AppointmentForm = () => {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      ...formData,
      service: selectedService,
    };

    console.log("Données soumises :", data);

    setLoading(true); // Set loading to true when submission starts

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycby0MwbM7xaD-11MQgc8ndPWkxNtmXR81BZw94eyhfTVOr_3vbPrWfulWlAIhQFqg2jj/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Show success toast on form submission
      toast.success("Rendez-vous envoyé avec succès!", {
        icon: <Terminal className="h-4 w-4" />,
      });
    } catch (error) {
      console.error("Erreur :", error);
      toast.error("Une erreur s'est produite lors de l'envoi du rendez-vous. Veuillez réessayer.", {
      });
    } finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prendre Rendez-vous</h2>
          <p className="text-xl text-gray-600">
            Remplissez le formulaire ci-dessous pour demander un rendez-vous
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="Entrez votre prénom"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Entrez votre nom"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Entrez votre email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Entrez votre numéro de téléphone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service souhaité
            </label>
            <SelectDemo
              selectedService={selectedService}
              onServiceChange={setSelectedService}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date et heure souhaitées
            </label>
            <DatePickerDemo />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer la demande"}
            </button>
          </div>
        </form>
      </div>

      {/* ToastContainer to display the toasts */}
      <ToastContainer position="top-right"/>
    </section>
  );
};

export default AppointmentForm;
