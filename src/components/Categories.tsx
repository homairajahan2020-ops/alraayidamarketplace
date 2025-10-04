import { Code, Smartphone, Palette, Video, PenTool, Megaphone, FileText, TrendingUp } from "lucide-react";

const categories = [
  { icon: Code, name: "Web Development", count: "2,345 services" },
  { icon: Smartphone, name: "Mobile Apps", count: "1,876 services" },
  { icon: Palette, name: "Graphic Design", count: "3,421 services" },
  { icon: Video, name: "Video Editing", count: "1,234 services" },
  { icon: PenTool, name: "Content Writing", count: "2,987 services" },
  { icon: Megaphone, name: "Digital Marketing", count: "1,654 services" },
  { icon: FileText, name: "Data Entry", count: "2,109 services" },
  { icon: TrendingUp, name: "SEO Services", count: "1,432 services" },
];

const Categories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Browse by Category</h2>
          <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">
            See all →
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group p-6 bg-card rounded-xl border hover:border-primary hover:shadow-lg transition-all cursor-pointer"
              >
                <Icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
