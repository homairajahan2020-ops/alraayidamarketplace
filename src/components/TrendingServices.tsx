import { Star, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import serviceWeb from "@/assets/service-web.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceVideo from "@/assets/service-video.jpg";

const services = [
  {
    id: 1,
    title: "I will create a modern responsive website",
    image: serviceWeb,
    seller: "Ahmed R.",
    rating: 4.9,
    reviews: 234,
    price: "৳5,000",
    badge: "Top Rated",
  },
  {
    id: 2,
    title: "I will develop a mobile app for iOS and Android",
    image: serviceMobile,
    seller: "Fatima K.",
    rating: 5.0,
    reviews: 189,
    price: "৳15,000",
    badge: "Best Seller",
  },
  {
    id: 3,
    title: "I will design stunning logo and brand identity",
    image: serviceDesign,
    seller: "Rahim M.",
    rating: 4.8,
    reviews: 456,
    price: "৳3,000",
    badge: "Top Rated",
  },
  {
    id: 4,
    title: "I will edit professional quality videos",
    image: serviceVideo,
    seller: "Nadia S.",
    rating: 4.9,
    reviews: 321,
    price: "৳4,500",
    badge: "Rising Star",
  },
];

const TrendingServices = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Trending Services</h2>
          <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">
            View all →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-xl overflow-hidden border hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
                {service.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent">
                    {service.badge}
                  </Badge>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                    {service.seller[0]}
                  </div>
                  <span className="text-sm font-medium">{service.seller}</span>
                </div>
                
                <h3 className="font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold">{service.rating}</span>
                    <span className="text-sm text-muted-foreground">({service.reviews})</span>
                  </div>
                  <span className="font-bold text-lg">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
