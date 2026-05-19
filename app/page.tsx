
'use client'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef } from 'react'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

export default function Home(){
  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(!ref.current) return
    const map = new mapboxgl.Map({
      container: ref.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [126.9780,37.5665],
      zoom: 14
    })
    return ()=>map.remove()
  },[])

  return (
    <div style={{width:'100%',height:'100vh'}}>
      <div ref={ref} style={{width:'100%',height:'100%'}} />
    </div>
  )
}
