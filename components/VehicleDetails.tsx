import type { VehicleListing } from '@/types'

interface VehicleDetailsProps {
  vehicle: VehicleListing
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(vehicle.metadata.price)

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        {vehicle.metadata.make?.metadata?.logo && (
          <img
            src={`${vehicle.metadata.make.metadata.logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={vehicle.metadata.make?.metadata?.brand_name}
            className="w-10 h-10"
            width="40"
            height="40"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {vehicle.title}
          </h1>
          <p className="text-lg text-gray-600">
            {vehicle.metadata.make?.metadata?.brand_name} • {vehicle.metadata.category?.metadata?.category_name}
          </p>
        </div>
      </div>

      <div className="bg-primary text-white p-4 rounded-lg mb-6">
        <div className="text-3xl font-bold">{formattedPrice}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Year</div>
          <div className="text-lg font-semibold">{vehicle.metadata.year}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Mileage</div>
          <div className="text-lg font-semibold">{vehicle.metadata.mileage?.toLocaleString('de-DE')} km</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Fuel Type</div>
          <div className="text-lg font-semibold">{vehicle.metadata.fuel_type?.value}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Transmission</div>
          <div className="text-lg font-semibold">{vehicle.metadata.transmission?.value}</div>
        </div>
      </div>

      {(vehicle.metadata.engine_size || vehicle.metadata.power_hp || vehicle.metadata.color) && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {vehicle.metadata.engine_size && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">Engine Size</div>
              <div className="text-lg font-semibold">{vehicle.metadata.engine_size}L</div>
            </div>
          )}
          {vehicle.metadata.power_hp && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">Power</div>
              <div className="text-lg font-semibold">{vehicle.metadata.power_hp} HP</div>
            </div>
          )}
          {vehicle.metadata.color && (
            <div className="bg-gray-50 p-4 rounded-lg col-span-2">
              <div className="text-sm text-gray-600">Color</div>
              <div className="text-lg font-semibold">{vehicle.metadata.color}</div>
            </div>
          )}
        </div>
      )}

      {vehicle.metadata.description && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed">
            {vehicle.metadata.description}
          </p>
        </div>
      )}

      {vehicle.metadata.features && vehicle.metadata.features.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Features</h3>
          <div className="grid grid-cols-2 gap-2">
            {vehicle.metadata.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}