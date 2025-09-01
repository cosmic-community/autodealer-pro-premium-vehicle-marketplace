import type { VehicleListing } from '@/types'
import VehicleCard from '@/components/VehicleCard'

interface VehicleGridProps {
  vehicles: VehicleListing[]
}

export default function VehicleGrid({ vehicles }: VehicleGridProps) {
  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No vehicles found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  )
}