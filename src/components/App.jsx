import { useState } from 'react' 
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows, Center } from '@react-three/drei'
import T6Component from './T6'
import Footer from './Footer'
import '../styles/App.css'

function App() {

  const [floorMaterialType, setfloorMaterialType] = useState('oak') 

  const [seatColor, setSeatColor] = useState('#ffffff')

  const handleReset = () => {
    setfloorMaterialType('oak')
    setSeatColor('#ffffff')
  }

  const floorOptions = [
    { id: 'checkboard', label: 'Checkered Floor' },
    { id: 'oak', label: 'Oak Wood' },
    { id: 'stone', label: 'Polished Stone' },
  ]

  const colorOptions = [
    { id: '#FFF', label: 'Tan Leather', color: '#FFF', light: true },
    { id: '#8B4513', label: 'Crimson Red', color: '#8B4513', light: false },
    { id: '#000', label: 'Midnight Black', color: '#000', light: false },
  ]

  return (
    <div className="app-container">
      
      <div className="main-content">
        
        <aside className="sidebar">
          <div className="sidebar-header">
            <h1 className="sidebar-title">Configurator</h1>
            <p className="sidebar-subtitle">Customize your product</p>
          </div>

          <div className="control-section">
            <h3 className="section-title">Floor Material</h3>
            <div className="floor-grid">
              {floorOptions.map((opt) => (
                <button 
                  key={opt.id} 
                  className={`floor-btn ${floorMaterialType === opt.id ? 'active' : ''}`}
                  onClick={() => setfloorMaterialType(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <h3 className="section-title">Seat Leather</h3>
            <div className="swatch-group">
              {colorOptions.map((opt) => (
                <div 
                  key={opt.id} 
                  className={`swatch-wrapper ${seatColor === opt.id ? 'active' : ''}`}
                  onClick={() => setSeatColor(opt.id)}
                >
                  <div 
                    className={`swatch ${opt.light ? 'light-color' : ''}`} 
                    style={{ backgroundColor: opt.color }}
                  />
                  <span className="swatch-label">{opt.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card">
            <p><strong>Tip:</strong> Use the mouse to rotate the view and the scroll wheel to zoom in on details.</p>
          </div>
        </aside>

        <div className="canvas-container">
          <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
            <Environment preset="city" />
            <ContactShadows position={[0, -1.5, 0]} opacity={0.7} blur={2.5} scale={10} />
            <OrbitControls makeDefault  />
            <Center>
              <T6Component
                seatColor={seatColor}
                floorMaterialType={floorMaterialType} 
                position={[0, 0, 0]}
              /> 
            </Center>
          </Canvas>
        </div>
      </div>

      <Footer onReset={handleReset} />
    </div>
  )
}

export default App