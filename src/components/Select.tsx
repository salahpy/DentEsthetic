import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const services = [
  "Blanchiment Dentaire",
  "Implants Dentaires",
  "Facettes Esthétiques",
  "Orthodontie Invisible",
  "Soins Dentaires Généraux",
  "Détartrage Professionnel",
]

interface SelectDemoProps {
  selectedService: string | undefined // Le service sélectionné
  onServiceChange: (service: string) => void // Le callback pour changer le service
}

export function SelectDemo({
  selectedService,
  onServiceChange,
}: SelectDemoProps) {
  return (
    <Select value={selectedService} onValueChange={onServiceChange}>
      <SelectTrigger
        className={`w-full px-4 py-2 ${
          !selectedService ? "text-gray-500" : "text-black"
        }`}
      >
        <SelectValue placeholder="Sélectionner un service" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Services</SelectLabel>
          {services.map((service) => (
            <SelectItem key={service} value={service}>
              {service}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
