import { getVehicles, getBrands, getVehicleCategories } from '@/lib/cosmic'
import VehicleGrid from '@/components/VehicleGrid'
import Hero from '@/components/Hero'
import FilterSection from '@/components/FilterSection'

export default async function Home() {
  const [vehicles, brands, categories] = await Promise.all([
    getVehicles(),
    getBrands(),
    getVehicleCategories(),
  ])

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <FilterSection brands={brands} categories={categories} />
        <VehicleGrid vehicles={vehicles} />
      </div>
    </div>
  )
}