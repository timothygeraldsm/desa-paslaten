"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface GalleryItemProps {
  src: string
  alt: string
  caption?: string
}

export function GalleryItem({ src, alt, caption }: GalleryItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="cursor-pointer overflow-hidden rounded-md" onClick={() => setIsOpen(true)}>
        <div className="aspect-square relative">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        {caption && (
          <div className="p-2">
            <p className="text-sm">{caption}</p>
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <div className="relative w-full aspect-video">
            <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
          </div>
          {caption && (
            <div className="text-center mt-2">
              <p>{caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
