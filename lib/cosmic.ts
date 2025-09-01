import { createBucketClient } from '@cosmicjs/sdk'
import type { VehicleListing, Brand, VehicleCategory, Dealer, VehicleFilters } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all vehicles with connected objects
export async function getVehicles(): Promise<VehicleListing[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'vehicle-listings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const vehicles = response.objects as VehicleListing[];
    
    // Manual sorting by year (newest first)
    return vehicles.sort((a, b) => {
      return (b.metadata.year || 0) - (a.metadata.year || 0);
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch vehicles');
  }
}

// Get single vehicle by slug
export async function getVehicle(slug: string): Promise<VehicleListing | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'vehicle-listings', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as VehicleListing;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch vehicle');
  }
}

// Get all brands
export async function getBrands(): Promise<Brand[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'brands' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Brand[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch brands');
  }
}

// Get all vehicle categories
export async function getVehicleCategories(): Promise<VehicleCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'vehicle-categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as VehicleCategory[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch vehicle categories');
  }
}

// Get all dealers
export async function getDealers(): Promise<Dealer[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'dealers' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Dealer[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch dealers');
  }
}

// Filter vehicles
export async function filterVehicles(filters: VehicleFilters): Promise<VehicleListing[]> {
  try {
    const query: Record<string, any> = { type: 'vehicle-listings' };
    
    // Apply filters
    if (filters.brand) {
      query['metadata.make'] = filters.brand;
    }
    
    if (filters.category) {
      query['metadata.category'] = filters.category;
    }
    
    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    let vehicles = response.objects as VehicleListing[];
    
    // Apply additional filters that require client-side filtering
    if (filters.fuelType) {
      vehicles = vehicles.filter(vehicle => 
        vehicle.metadata.fuel_type?.key === filters.fuelType
      );
    }
    
    if (filters.transmission) {
      vehicles = vehicles.filter(vehicle => 
        vehicle.metadata.transmission?.key === filters.transmission
      );
    }
    
    if (filters.minPrice) {
      vehicles = vehicles.filter(vehicle => 
        vehicle.metadata.price >= filters.minPrice!
      );
    }
    
    if (filters.maxPrice) {
      vehicles = vehicles.filter(vehicle => 
        vehicle.metadata.price <= filters.maxPrice!
      );
    }
    
    if (filters.minYear) {
      vehicles = vehicles.filter(vehicle => 
        vehicle.metadata.year >= filters.minYear!
      );
    }
    
    if (filters.maxYear) {
      vehicles = vehicles.filter(vehicle => 
        vehicle.metadata.year <= filters.maxYear!
      );
    }
    
    return vehicles.sort((a, b) => (b.metadata.year || 0) - (a.metadata.year || 0));
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to filter vehicles');
  }
}