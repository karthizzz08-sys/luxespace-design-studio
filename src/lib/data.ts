import kitchen from "@/assets/project-kitchen.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import office from "@/assets/project-office.jpg";
import living from "@/assets/project-living.jpg";
import dining from "@/assets/project-dining.jpg";
import closet from "@/assets/project-closet.jpg";

export const WHATSAPP_NUMBER = "917200101470"; // +91 72001 01470
export const PHONE = "+91 72001 01470";
export const EMAIL = "hello@luxespace.design";
export const ADDRESS = "12 Design District, Mumbai, India";

export type Project = {
  id: string;
  title: string;
  category: "Living Room" | "Bedroom" | "Kitchen" | "Office";
  image: string;
  area: string;
  cost: string;
  style: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "skyline-residence",
    title: "Skyline Residence",
    category: "Living Room",
    image: living,
    area: "1,850 sq.ft",
    cost: "₹38 Lakhs",
    style: "Contemporary Luxe",
    description:
      "A serene living room balancing sculptural forms with warm neutrals and brushed brass accents.",
  },
  {
    id: "marble-haven",
    title: "Marble Haven Kitchen",
    category: "Kitchen",
    image: kitchen,
    area: "320 sq.ft",
    cost: "₹14 Lakhs",
    style: "Modern Modular",
    description:
      "A handle-less modular kitchen with veined marble counters and warm walnut cabinetry.",
  },
  {
    id: "ivory-suite",
    title: "Ivory Master Suite",
    category: "Bedroom",
    image: bedroom,
    area: "420 sq.ft",
    cost: "₹9 Lakhs",
    style: "Soft Classic",
    description:
      "A tranquil master suite layered in ivory linens, tufted upholstery and ambient lighting.",
  },
  {
    id: "north-tower",
    title: "North Tower Office",
    category: "Office",
    image: office,
    area: "2,400 sq.ft",
    cost: "₹52 Lakhs",
    style: "Executive Modern",
    description:
      "An executive workspace clad in walnut paneling and a monolithic marble conference table.",
  },
  {
    id: "atelier-dining",
    title: "Atelier Dining",
    category: "Living Room",
    image: dining,
    area: "280 sq.ft",
    cost: "₹11 Lakhs",
    style: "Neoclassical",
    description:
      "A formal dining room with hand-detailed mouldings and a statement crystal chandelier.",
  },
  {
    id: "walnut-wardrobe",
    title: "Walnut Walk-in",
    category: "Bedroom",
    image: closet,
    area: "180 sq.ft",
    cost: "₹7 Lakhs",
    style: "Warm Minimal",
    description:
      "A walk-in wardrobe featuring fluted walnut, brass pulls and integrated cove lighting.",
  },
];

export const services = [
  {
    slug: "home-interior",
    title: "Home Interior Design",
    image: living,
    price: "Starting ₹1,499 / sq.ft",
    description:
      "End-to-end residential design — from spatial planning to bespoke furniture and styling.",
  },
  {
    slug: "office-interior",
    title: "Office Interior Design",
    image: office,
    price: "Starting ₹1,899 / sq.ft",
    description:
      "Workspaces engineered for focus and prestige, blending acoustics, lighting and brand identity.",
  },
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    image: kitchen,
    price: "Starting ₹2,49,000",
    description:
      "Custom modular kitchens with German hardware, stone counters and smart storage systems.",
  },
  {
    slug: "furniture-decor",
    title: "Furniture & Decor",
    image: closet,
    price: "On request",
    description:
      "Bespoke furniture, curated accessories and art curation to complete your space.",
  },
];

export const testimonials = [
  {
    name: "Ananya Kapoor",
    role: "Homeowner, Mumbai",
    quote:
      "LuxeSpace transformed our apartment into something out of a magazine. Every detail felt intentional.",
  },
  {
    name: "Rohan Mehta",
    role: "CEO, Northwave Capital",
    quote:
      "Our office now reflects the calibre of our work. The team's precision was exceptional.",
  },
  {
    name: "Saira Iyer",
    role: "Homeowner, Bengaluru",
    quote:
      "Timelines were honoured, craftsmanship was extraordinary. A genuinely white-glove experience.",
  },
];

export const team = [
  { name: "Aarav Sethi", role: "Principal Designer" },
  { name: "Meera Joshi", role: "Head of Architecture" },
  { name: "Devika Rao", role: "Creative Director" },
  { name: "Karan Malhotra", role: "Project Director" },
];
