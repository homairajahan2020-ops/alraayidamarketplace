const stats = [
  { value: "50K+", label: "Active Freelancers" },
  { value: "25K+", label: "Happy Clients" },
  { value: "100K+", label: "Projects Completed" },
  { value: "150K+", label: "Total Services" },
];

const Stats = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
