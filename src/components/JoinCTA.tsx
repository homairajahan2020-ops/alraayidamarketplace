import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import joinImage from "@/assets/join-marketplace.jpg";

const features = [
  "Connect with clients worldwide",
  "Secure escrow payment system",
  "Flexible work schedule",
  "Build your reputation",
  "24/7 support available",
];

const JoinCTA = () => {
  return (
    <section id="join-cta" className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Bangladesh's Leading Freelance Marketplace
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Start earning by offering your services or hire talented freelancers to grow your business.
            </p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Selling
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Find Talent
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={joinImage} 
                alt="Join marketplace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
