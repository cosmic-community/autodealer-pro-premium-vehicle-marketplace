import Link from 'next/link'
import type { VehicleListing } from '@/types'

interface VehicleCardProps {
  vehicle: VehicleListing
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const primaryImage = vehicle.metadata.images?.[0]
  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(vehicle.metadata.price)

  return (
    <Link href={`/vehicles/${vehicle.slug}`}>
      <div className="card hover:shadow-lg transition-shadow duration-300">
        {primaryImage && (
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img
              src={`${primaryImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={vehicle.title}
              className="w-full h-full object-cover"
              width="300"
              height="200"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {vehicle.title}
            </h3>
            <span className="text-sm text-gray-500">
              {vehicle.metadata.year}
            </span>
          </div>
          
          <p className="text-2xl font-bold text-primary mb-4">
            {formattedPrice}
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Mileage:</span><br />
              {vehicle.metadata.mileage?.toLocaleString('de-DE')} km
            </div>
            <div>
              <span className="font-medium">Fuel:</span><br />
              {vehicle.metadata.fuel_type?.value}
            </div>
            <div>
              <span className="font-medium">Transmission:</span><br />
              {vehicle.metadata.transmission?.value}
            </div>
            <div>
              <span className="font-medium">Category:</span><br />
              {vehicle.metadata.category?.metadata?.category_name}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center">
              {vehicle.metadata.make?.metadata?.logo && (
                <img
                  src={`${vehicle.metadata.make.metadata.logo.imgix_url}?w=60&h=60&fit=crop&auto=format,compress`}
                  alt={vehicle.metadata.make?.metadata?.brand_name}
                  className="w-6 h-6 mr-2"
                  width="24"
                  height="24"
                />
              )}
              <span className="text-sm font-medium text-gray-700">
                {vehicle.metadata.make?.metadata?.brand_name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}