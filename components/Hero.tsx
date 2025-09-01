export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Perfect Vehicle
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Premium vehicles from trusted dealers across Germany
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Premium Vehicles</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-gray-300">Trusted Dealers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm text-gray-300">Top Brands</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}