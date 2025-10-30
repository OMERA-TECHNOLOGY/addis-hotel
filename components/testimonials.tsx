export function Testimonials() {
  const testimonials = [
    {
      name: "Amara Kebede",
      role: "Travel Journalist",
      text: "The Addis transcends the typical luxury hotel experience. It's a cultural immersion that honors Ethiopian heritage while delivering world-class comfort.",
      avatar: "/professional-headshot-woman-ethiopian.jpg",
    },
    {
      name: "David Chen",
      role: "Business Executive",
      text: "Every detail reflects thoughtfulness—from the Ethiopian coffee ceremony to the artisan collaborations. This is luxury with purpose.",
      avatar: "/professional-headshot-man-asian.jpg",
    },
    {
      name: "Sophie Laurent",
      role: "Luxury Travel Blogger",
      text: "The Addis is a masterclass in authentic hospitality. You don't just stay here; you become part of the story of Addis Ababa.",
      avatar: "/professional-headshot-woman-european.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">Guest Stories</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Voices of Experience</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border border-border hover:border-amber-600 transition-all hover:shadow-lg"
            >
              {/* Decorative top accent */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-600">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
