'use client'

import { useState } from 'react'
import type { Brand, VehicleCategory } from '@/types'

interface FilterSectionProps {
  brands: Brand[]
  categories: VehicleCategory[]
}

export default function FilterSection({ brands, categories }: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full bg-gray-50 p-4 rounded-lg mb-4 hover:bg-gray-100 transition-colors"
      >
        <span className="font-medium text-gray-900">Filter Vehicles</span>
        <svg
          className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand
              </label>
              <select className="select">
                <option value="">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.metadata.brand_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select className="select">
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.metadata.category_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fuel Type
              </label>
              <select className="select">
                <option value="">All Fuel Types</option>
                <option value="gasoline">Gasoline</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
                <option value="plug_in_hybrid">Plug-in Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transmission
              </label>
              <select className="select">
                <option value="">All Transmissions</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
                <option value="semi_automatic">Semi-Automatic</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="btn btn-primary">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}