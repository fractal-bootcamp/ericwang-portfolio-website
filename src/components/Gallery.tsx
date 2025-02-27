import React from 'react'
import '../App.css'

interface GalleryProps {
    selectedImgUrl: string | undefined,
}

const Gallery: React.FC<GalleryProps> = ({ selectedImgUrl }) => {
  return (
    <div className='grid grid-cols-1 gap-3 w-full relative'>
        <div className='overlay absolute inset-0 z-0' />
        <img src={selectedImgUrl} className='w-full' alt='' draggable={false} />
    </div>
  )
}

export default Gallery