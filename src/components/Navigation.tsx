import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
                alraayida
              </h1>
            </Link>
            <div className="hidden md:flex gap-6">
              <button 
                onClick={() => scrollToSection('categories')} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Browse Gigs
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('join-cta')} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Become a Seller
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Join Now
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    alraayida
                  </h2>
                  
                  <button 
                    onClick={() => scrollToSection('categories')}
                    className="text-left text-lg hover:text-primary transition-colors"
                  >
                    Browse Gigs
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-left text-lg hover:text-primary transition-colors"
                  >
                    How It Works
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('join-cta')}
                    className="text-left text-lg hover:text-primary transition-colors"
                  >
                    Become a Seller
                  </button>
                  
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Join Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
