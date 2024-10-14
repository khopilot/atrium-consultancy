import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const Home: React.FC = () => {
  const splineContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeSplineViewer = () => {
      if (splineContainerRef.current) {
        const splineViewer = splineContainerRef.current.querySelector('spline-viewer') as HTMLElement
        if (splineViewer) {
          splineViewer.style.width = '100%'
          splineViewer.style.height = '100%'
        }
      }
    }

    resizeSplineViewer()
    window.addEventListener('resize', resizeSplineViewer)

    return () => {
      window.removeEventListener('resize', resizeSplineViewer)
    }
  }, [])

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Spline Background */}
      <div className="relative h-screen overflow-hidden">
        <div ref={splineContainerRef} className="absolute inset-0 z-0">
          <spline-viewer url="https://prod.spline.design/UzUpmAFhAzgBEWBT/scene.splinecode"></spline-viewer>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              <span className="block">ATRIUM</span>
              <span className="block">CONSULTANCY LTD</span>
            </h1>
            <p className="text-2xl md:text-3xl text-black mb-6">Empowering Global Investments in South Asia</p>
            <p className="text-xl text-black mb-8">
              Navigate complex markets with confidence and maximize your investment potential. 
              Our expert consultancy services guide you through the intricacies of South Asian markets, 
              ensuring strategic growth and sustainable success.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-200 transition duration-300 text-lg border border-black shadow-[0_0_0_1px_rgba(0,0,0,1)]">
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home