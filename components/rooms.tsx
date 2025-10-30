export function Rooms() {
  const rooms = [
    {
      name: "Simien Suite",
      region: "Named after the majestic Simien Mountains",
      price: "$450",
      amenities: ["King Bed", "Mountain View", "Private Terrace", "Ethiopian Art"],
      image: "/luxury-hotel-suite-inspired-by-ethiopian-design-wi.jpg",
    },
    {
      name: "Rift Valley Retreat",
      region: "Inspired by Ethiopia's geological wonder",
      price: "$380",
      amenities: ["Queen Bed", "Valley View", "Spa Bath", "Geometric Patterns"],
      image: "/hotel-room-with-ethiopian-geometric-patterns-and-w.jpg",
    },
    {
      name: "Addis Sanctuary",
      region: "Heart of the city, soul of Ethiopia",
      price: "$520",
      amenities: ["Suite Layout", "City View", "Lounge Area", "Premium Amenities"],
      image: "/luxury-penthouse-suite-with-panoramic-city-views-a.jpg",
    },
    {
      name: "Heritage Chamber",
      region: "Celebrating Ethiopian artistic traditions",
      price: "$320",
      amenities: ["Double Bed", "Garden View", "Work Desk", "Local Artwork"],
      image: "/boutique-hotel-room-with-ethiopian-traditional-art.jpg",
    },
  ]

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-background to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">Accommodations</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Rooms with Soul</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each room tells a story of Ethiopian heritage, designed with meticulous attention to comfort and cultural
            authenticity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-amber-600 transition-all hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {room.price}/night
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-foreground mb-1">{room.name}</h4>
                <p className="text-sm text-amber-600 font-medium mb-4">{room.region}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-50 text-amber-900 text-xs rounded-full font-medium">
                      {amenity}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                  Reserve Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
