import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Text3D, useGLTF } from "@react-three/drei";
import Lights from "./Lights";

function WorldModel() {
  const { materials, scene } = useGLTF("/kake.glb");
  return (
    <primitive object={scene} material={materials}>
      <Text3D
        smooth={1}
        lineHeight={0.1}
        letterSpacing={-0.025}
        scale={0.02}
        position={[-0.12, 0.06, 0.29]}
        rotation={[-1.2, 0, 0.1]}
        font="/Urbanist_Regular.json"
      >
        Happy Birthday Abed
        <meshBasicMaterial />
      </Text3D>
    </primitive>
  );
}

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Canvas gl={{ alpha: false }}>
        <Lights />
        <WorldModel />
        <OrbitControls />
        <Environment
          files="/shot-panoramic-composition-living-room.jpg"
          background
          backgroundRotation={[0.4, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

export default App;
