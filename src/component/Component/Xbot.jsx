// import path from "../../models/Xbot.glb";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { UseCharacterAnimation } from "../../context/CharacterAnimation";

const Xbot = (props) => {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF(
    "http://165.22.48.166:9000/media/model3d/Xbot.glb"
  );
  const { setAnimation, animationsIndex } = UseCharacterAnimation();
  const { actions, names } = useAnimations(animations, group);

  console.log(
    useGLTF("http://165.22.48.166:9000/media/model3d/monster_model3d.glb")
  );
  console.log(
    useGLTF("http://165.22.48.166:9000/media/model3d/Xbot.glb")
  );

  useEffect(() => {
    setAnimation(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationsIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationsIndex]].reset().fadeOut(0.5).play();
    };
  }, [animationsIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            castShadow
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials["asdf1:Beta_HighLimbsGeoSG2"]}
            skeleton={nodes.Beta_Surface.skeleton}
          />
        </group>
      </group>
    </group>
  );
};

export default Xbot;
useGLTF.preload("http://165.22.48.166:9000/media/model3d/Model3d.glb");
