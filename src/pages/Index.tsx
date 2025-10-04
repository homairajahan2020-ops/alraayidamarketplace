import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingServices from "@/components/TrendingServices";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <TrendingServices />
      <Stats />
      <Testimonials />
      <JoinCTA />
      <Footer />
    </div>
  );
};

export default Index;
