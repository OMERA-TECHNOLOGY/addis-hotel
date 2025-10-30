export function Ethos() {
  const values = [
    {
      title: "Debo",
      subtitle: "Ethiopian Hospitality",
      description: "The ancient Ethiopian tradition of genuine, heartfelt welcome. Every guest is family.",
      icon: "🤝",
    },
    {
      title: "Heritage",
      subtitle: "Cultural Celebration",
      description: "Honoring Addis Ababa's rich history as the diplomatic heart of Africa.",
      icon: "🏛️",
    },
    {
      title: "Craftsmanship",
      subtitle: "Local Artistry",
      description: "Collaborating with Ethiopian artisans to showcase authentic local talent.",
      icon: "🎨",
    },
    {
      title: "Serenity",
      subtitle: "Mindful Luxury",
      description: "A sanctuary designed for reflection, connection, and rejuvenation.",
      icon: "🧘",
    },
  ]

  return (
    <section id="ethos" className="py-20 bg-gradient-to-b from-background to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">Our Ethos</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Rooted in Ethiopian Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Addis is more than a hotel—it's a celebration of Ethiopian culture, hospitality, and the timeless beauty
            of Addis Ababa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white rounded-xl border border-border hover:border-amber-600 transition-all hover:shadow-lg"
            >
              {/* Decorative top border with Ethiopian pattern */}
              <div className="h-1 w-12 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mb-6 group-hover:w-full transition-all" />

              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-foreground mb-1">{value.title}</h4>
              <p className="text-sm text-amber-600 font-medium mb-3">{value.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
