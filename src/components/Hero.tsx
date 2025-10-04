import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Freelance marketplace hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find the best{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              freelancers
            </span>{" "}
            for any job, online
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with skilled professionals from Bangladesh and get your work done with excellence
          </p>
          
          <div className="flex gap-2 bg-background rounded-lg p-2 shadow-xl max-w-2xl">
            <Input 
              placeholder="Search for any service..." 
              className="border-0 focus-visible:ring-0 text-lg"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Web Design", "Logo Design", "WordPress", "Video Editing"].map((tag) => (
              <button
                key={tag}
                className="text-sm px-4 py-1 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
