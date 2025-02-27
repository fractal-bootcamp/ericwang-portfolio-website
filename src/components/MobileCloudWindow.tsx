'use client'

import { ParallaxBanner } from "react-scroll-parallax"
import { CloudWindow } from "./icons/CloudWindow"
// import { useTheme } from 'next-themes'
import { useState, useEffect } from "react"

const MobileCloudWindow = () => {
  // const { theme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <img className="w-screen" src="/skeletons/window-skeleton.svg" alt="" height={1000} width={1000} />
  }

  return (
    <div className="flex justify-center">
        <div className="absolute z-10">
            <CloudWindow color={'black'} className="h-full w-full"/>
        </div>
        <ParallaxBanner
            layers={[{ image: '/clouds-background.jpg', speed: -15 }]}
            className="aspect-[393/345]"
        />
    </div>
  )
}

export default MobileCloudWindow