'use client'

import { useState } from 'react'

interface ImageGalleryProps {
  images: Array<{
    url: string
    imgix_url: string
  }>
  title: string
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-400">No images available</span>
      </div>
    )
  }

  return (
    <div>
      <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
        <img
          src={`${images[currentImage].imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={`${title} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
          width="400"
          height="300"
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImage(current => current > 0 ? current - 1 : images.length - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentImage(current => current < images.length - 1 ? current + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 aspect-video w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                index === currentImage ? 'border-primary' : 'border-gray-200'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=160&h=120&fit=crop&auto=format,compress`}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width="80"
                height="60"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}