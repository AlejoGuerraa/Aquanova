import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Edges } from "@react-three/drei";
import { Suspense } from "react";

interface Pool3DModelProps {
  poolType: string;
}

function PoolGeometry({ poolType }: { poolType: string }) {
  const getPoolDimensions = () => {
    switch (poolType) {
      case "rectangular-classic":
        return { width: 8, depth: 1.5, length: 4 };
      case "freeform-luxury":
        return { width: 10, depth: 1.8, length: 6 };
      case "infinity-pool":
        return { width: 12, depth: 1.6, length: 5 };
      case "spa-pool":
        return { width: 9, depth: 1.5, length: 4.5 };
      case "sport-pool":
        return { width: 25, depth: 2, length: 10 };
      case "compact-pool":
        return { width: 5, depth: 1.4, length: 3 };
      default:
        return { width: 8, depth: 1.5, length: 4 };
    }
  };

  const dims = getPoolDimensions();
  const scale = 0.1;

  return (
    <group>
      <mesh position={[0, -dims.depth * scale / 2, 0]}>
        <boxGeometry args={[dims.width * scale, dims.depth * scale, dims.length * scale]} />
        <meshStandardMaterial
          color="#00B4D8"
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.5}
        />
        <Edges color="#0077B6" />
      </mesh>

      <mesh position={[0, -dims.depth * scale - 0.02, 0]}>
        <boxGeometry args={[dims.width * scale + 0.1, 0.05, dims.length * scale + 0.1]} />
        <meshStandardMaterial color="#004976" roughness={0.8} />
      </mesh>

      <mesh position={[0, 0.01, 0]}>
        <boxGeometry args={[dims.width * scale, 0.02, dims.length * scale]} />
        <meshStandardMaterial
          color="#48CAE4"
          transparent
          opacity={0.3}
          roughness={0.05}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#48CAE4" />
    </>
  );
}

export function Pool3DModel({ poolType }: Pool3DModelProps) {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-muted to-background rounded-lg overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[1.5, 1, 1.5]} />
        <Suspense fallback={null}>
          <Lights />
          <PoolGeometry poolType={poolType} />
          <OrbitControls
            enablePan={false}
            minDistance={1}
            maxDistance={3}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
      <div className="text-center text-xs text-muted-foreground mt-2">
        Arrastra para rotar • Scroll para zoom
      </div>
    </div>
  );
}
