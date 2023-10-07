import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Shoe'

export default function App() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 1.66] }}>
            <Environment preset="sunset" background blur={[2]} />
            <Model />
            <ContactShadows
                far={0.8}
                opacity={1}
                scale={10}
                blur={2}
                resolution={512}
                position={[0, -0.8, 0]} color="#ffffff" />
            <OrbitControls />
        </Canvas>
    )
}