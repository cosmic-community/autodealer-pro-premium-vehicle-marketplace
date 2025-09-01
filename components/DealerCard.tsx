import type { Dealer } from '@/types'

interface DealerCardProps {
  dealer: Dealer
}

export default function DealerCard({ dealer }: DealerCardProps) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {dealer.metadata.business_name}
          </h3>
          <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
            {dealer.metadata.dealer_type?.value}
          </span>
        </div>
      </div>

      {dealer.metadata.description && (
        <p className="text-gray-600 mb-4">
          {dealer.metadata.description}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
          <div className="space-y-2 text-sm">
            {dealer.metadata.contact_person && (
              <div>
                <span className="font-medium">Contact:</span> {dealer.metadata.contact_person}
              </div>
            )}
            <div>
              <span className="font-medium">Phone:</span>{' '}
              <a href={`tel:${dealer.metadata.phone}`} className="text-primary hover:underline">
                {dealer.metadata.phone}
              </a>
            </div>
            <div>
              <span className="font-medium">Email:</span>{' '}
              <a href={`mailto:${dealer.metadata.email}`} className="text-primary hover:underline">
                {dealer.metadata.email}
              </a>
            </div>
            {dealer.metadata.website && (
              <div>
                <span className="font-medium">Website:</span>{' '}
                <a
                  href={`https://${dealer.metadata.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {dealer.metadata.website}
                </a>
              </div>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
          <div className="text-sm text-gray-600">
            <div>{dealer.metadata.address}</div>
            <div>
              {dealer.metadata.postal_code} {dealer.metadata.city}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}