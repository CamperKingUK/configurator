import React from 'react'
import { MeshTransmissionMaterial, useTexture } from '@react-three/drei'


export default function ConfigurableBox({ customColor, materialType, ...props }) {

  // Your dictionary of PBR material presets
const woodTexture = useTexture('/maps/floor/wood-diffuse.png')
  return (
    <mesh {...props}>
      {/* 1. Define the shape */}
      <boxGeometry args={[2, 2, 2]} />
      
    {/* CONDITION 1: Standard Plastic (Uses the color picker) */}
        {materialType === 'plastic' && (
          <meshStandardMaterial color={customColor} roughness={0.4} metalness={0} />
        )}

        {/* CONDITION 2: Shiny Metal (Ignores color, sets high metalness) */}
        {materialType === 'metal' && (
          <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={1} />
        )}

        {/* CONDITION 3: Textured Wood (Applies the image we loaded) */}
        {materialType === 'wood' && (
          <meshStandardMaterial map={woodTexture} roughness={0.7} />
        )}

        {/* CONDITION 4: Realistic Glass (Uses meshPhysicalMaterial for advanced optics) */}
        {materialType === 'glass' && (
          <meshPhysicalMaterial 
            transmission={1} // Acts like glass
            opacity={1}
            transparent
            roughness={0}
            ior={1.5} // Index of refraction
            thickness={0.5}
          />
        )}
    </mesh>
  )
}
useTexture.preload('/maps/floor/wood-diffuse.png')