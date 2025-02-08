import React from 'react'

interface GalleryProps {
    selectedImgUrl: string | undefined,
}

const Gallery: React.FC<GalleryProps> = ({ selectedImgUrl }) => {
  return (
    <div className='grid grid-cols-1 gap-3 w-full  '>
      <img src={selectedImgUrl} className='bg-neutral-800 w-full' alt='' draggable={false} />

    </div>
  )
}

export default Gallery