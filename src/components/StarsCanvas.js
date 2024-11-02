"use client"; // This line indicates that this is a client component

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Animation to rotate the stars
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
          <PointMaterial
            transparent
            color="#fff" // Star color
            size={0.002} // Further reduced star size
            sizeAttenuation={true}
            depthWrite={false} // Ensure stars render correctly in depth
          />

      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <Canvas
    style={{
      position: "absolute",  // Absolute position to ensure it's part of the background
      width: "100%",          // Full width
      height: "100%",         // Full height
      zIndex: "-1",           // Behind all other content
      top: 0,                 // Align to the top
      left: 0,                // Align to the left
    }}
    camera={{ position: [0, 0, 1] }}
  >
    <Suspense fallback={null}>
      <StarBackground />
    </Suspense>
  </Canvas>
);

export default StarsCanvas;
