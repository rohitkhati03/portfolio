import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import "../styles/skills.css";

export default function Skills() {
  const skillList = [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "HTML5",
    "CSS3",
    "Figma",
    "Bootstrap",
  ];

  // Generate positions on a sphere using spherical coordinates
  const radius = 3;
  const skillPositions = skillList.map((skill, i) => {
    const phi = Math.acos(-1 + (2 * i) / skillList.length);
    const theta = Math.sqrt(skillList.length * Math.PI) * phi;
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    return { skill, position: [x, y, z] };
  });

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <group rotation={[0, 0, 0]}>
            {skillPositions.map((item, index) => (
              <Text
                key={index}
                position={item.position}
                fontSize={0.5}
                color="#6c63ff"
                anchorX="center"
                anchorY="middle"
              >
                {item.skill}
              </Text>
            ))}
          </group>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Canvas>
      </div>
    </section>
  );
}
