'use client'

import { useState } from 'react'

interface ImageGalleryProps {
  images?: Array<{
    url: string
    imgix_url: string
  }>
  title: string
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Early return if no images are provided
  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  // Safe access to selected image with undefined check
  const selectedImage = images[selectedImageIndex]
  
  // Additional safety check for the selected image
  if (!selectedImage) {
    return (
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Image not found</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main image display */}
      <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-100">
        <img
          src={`${selectedImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={`${title} - Image ${selectedImageIndex + 1}`}
          className="w-full h-full object-cover"
          width="800"
          height="600"
        />
      </div>

      {/* Thumbnail navigation - only show if more than one image */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                index === selectedImageIndex
                  ? 'border-blue-500'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width="80"
                height="80"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}