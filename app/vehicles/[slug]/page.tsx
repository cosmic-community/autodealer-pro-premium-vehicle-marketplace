// app/vehicles/[slug]/page.tsx
import { getVehicle } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import VehicleDetails from '@/components/VehicleDetails'
import ImageGallery from '@/components/ImageGallery'
import DealerCard from '@/components/DealerCard'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const vehicle = await getVehicle(slug)

  if (!vehicle) {
    return {
      title: 'Vehicle Not Found',
    }
  }

  return {
    title: `${vehicle.title} - AutoDealer Pro`,
    description: vehicle.metadata.description || `${vehicle.title} for sale. View details, specifications, and dealer information.`,
  }
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params
  const vehicle = await getVehicle(slug)

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <ImageGallery images={vehicle.metadata.images || []} title={vehicle.title} />
        </div>
        <div>
          <VehicleDetails vehicle={vehicle} />
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Dealer Information</h2>
        <DealerCard dealer={vehicle.metadata.dealer} />
      </div>
    </div>
  )
}