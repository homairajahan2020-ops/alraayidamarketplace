import { Quote, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "E-commerce Owner",
    image: testimonial1,
    rating: 5,
    text: "alraayida connected me with amazing developers who built my online store. The quality exceeded my expectations and the price was very reasonable. Highly recommended!",
  },
  {
    id: 2,
    name: "Kamal Hassan",
    role: "Digital Agency Owner",
    image: testimonial2,
    rating: 5,
    text: "As a business owner, I needed reliable freelancers for various projects. This platform made it easy to find talented professionals from Bangladesh. The escrow payment system gives me peace of mind.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground text-lg">
            Trusted by thousands of freelancers and clients across Bangladesh
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-lg mb-6 relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
