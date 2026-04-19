import { Link } from "@tanstack/react-router";
import { EMAIL, PHONE, ADDRESS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container-luxe py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="text-2xl font-display">
            Luxe<span className="text-gold">Space</span>
          </div>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">
            Designing dream spaces with quiet luxury, considered detail and timeless craft.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-gold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>{PHONE}</li>
            <li>{EMAIL}</li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-gold">Studio</h4>
          <p className="mt-4 text-sm text-background/80">
            Mon – Sat, 10:00 – 19:00<br />By appointment only
          </p>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-luxe py-6 text-xs text-background/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} LuxeSpace Interiors. All rights reserved.</span>
          <span>Designing Your Dream Spaces</span>
        </div>
      </div>
    </footer>
  );
}
