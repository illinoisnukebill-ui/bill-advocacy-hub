import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            Nuclear Operationalization Act
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <NavLink
              to="/"
              className="hover:text-accent transition-colors"
              activeClassName="text-accent font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/bill"
              className="hover:text-accent transition-colors"
              activeClassName="text-accent font-semibold"
            >
              Read the Bill
            </NavLink>
            <NavLink to="/support">
              <Button variant="secondary" size="sm">
                Support Now
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <NavLink
              to="/"
              className="block hover:text-accent transition-colors py-2"
              activeClassName="text-accent font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/bill"
              className="block hover:text-accent transition-colors py-2"
              activeClassName="text-accent font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Read the Bill
            </NavLink>
            <NavLink to="/support" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" size="sm" className="w-full">
                Support Now
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
