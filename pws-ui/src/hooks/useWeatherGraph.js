import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const useWeatherGraph = (weatherData) => {
  const canvasRef = useRef(null);
  const renderer = useRef(null);
  const scene = useRef(null);
  const camera = useRef(null);
  const line = useRef(null);

  const init = () => {
    // Create renderer
    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.current.setSize(window.innerWidth, window.innerHeight);

    // Create scene
    scene.current = new THREE.Scene();

    // Create camera
    camera.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.current.position.z = 5;

    // Create geometry and material for the line
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const points = weatherData.map(
      (temp, index) => new THREE.Vector3(index - 12, temp / 10, 0),
    );
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Create the line and add it to the scene
    line.current = new THREE.Line(geometry, material);
    scene.current.add(line.current);

    // Start rendering
    animate();
  };

  const animate = () => {
    requestAnimationFrame(animate);

    if (renderer.current && scene.current && camera.current) {
      renderer.current.render(scene.current, camera.current);
    }
  };

  const clearWeatherLine = () => {
    if (line.current) {
      scene.current.remove(line.current);
      line.current.geometry.dispose();
      line.current.material.dispose();
      line.current = null;
    }
  };

  useEffect(() => {
    if (canvasRef.current && weatherData.length > 0) {
      init();
    }

    return () => {
      clearWeatherLine();
      if (renderer.current) {
        renderer.current.dispose();
      }
    };
  }, [init, weatherData]);

  return canvasRef;
};
