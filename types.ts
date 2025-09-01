// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Brand interface
export interface Brand extends CosmicObject {
  type: 'brands';
  metadata: {
    brand_name: string;
    country?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
  };
}

// Vehicle Category interface
export interface VehicleCategory extends CosmicObject {
  type: 'vehicle-categories';
  metadata: {
    category_name: string;
    description?: string;
  };
}

// Dealer interface
export interface Dealer extends CosmicObject {
  type: 'dealers';
  metadata: {
    business_name: string;
    contact_person?: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    postal_code: string;
    dealer_type: {
      key: string;
      value: string;
    };
    description?: string;
    website?: string;
  };
}

// Vehicle Listing interface
export interface VehicleListing extends CosmicObject {
  type: 'vehicle-listings';
  metadata: {
    make: Brand;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuel_type: {
      key: string;
      value: string;
    };
    transmission: {
      key: string;
      value: string;
    };
    category: VehicleCategory;
    dealer: Dealer;
    description?: string;
    images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    engine_size?: number;
    power_hp?: number;
    color?: string;
    features?: string[];
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isBrand(obj: CosmicObject): obj is Brand {
  return obj.type === 'brands';
}

export function isVehicleCategory(obj: CosmicObject): obj is VehicleCategory {
  return obj.type === 'vehicle-categories';
}

export function isDealer(obj: CosmicObject): obj is Dealer {
  return obj.type === 'dealers';
}

export function isVehicleListing(obj: CosmicObject): obj is VehicleListing {
  return obj.type === 'vehicle-listings';
}

// Utility types
export type FuelType = 'gasoline' | 'diesel' | 'electric' | 'hybrid' | 'plug_in_hybrid';
export type TransmissionType = 'manual' | 'automatic' | 'semi_automatic';
export type DealerType = 'authorized' | 'independent' | 'private';

// Filter types
export interface VehicleFilters {
  brand?: string;
  category?: string;
  fuelType?: string;
  transmission?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
}