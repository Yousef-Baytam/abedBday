import { useRef } from "react";

const Lights = () => {
  const pointLight = useRef<any>();

  // useHelper(pointLight, PointLightHelper, 5, "red");
  return (
    <>
      <pointLight
        position={[0, 50, 0]}
        intensity={15000}
        ref={pointLight}
        castShadow
      />
      <pointLight
        position={[0, 0, 50]}
        intensity={15000}
        ref={pointLight}
        castShadow
      />

      {/* <pointLight position={[0, -30, 0]} intensity={1000} ref={pointLight} /> */}
    </>
  );
};

export default Lights;
