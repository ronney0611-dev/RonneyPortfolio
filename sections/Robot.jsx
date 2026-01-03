import Spline from '@splinetool/react-spline';

const Robot = ({ scale = 1, rotation = [0, 0, 0] }) => {
  return (
      <div className="w-full h-screen"  style={{
        transform: `
          scale(${scale}) 
          rotateX(${rotation[0]}rad) 
          rotateY(${rotation[1]}rad) 
          rotateZ(${rotation[2]}rad)
        `
      }}>
      <Spline scene="https://prod.spline.design/cvFFybGXjqMFLrS2/scene.splinecode" />
    </div>
  );
};

export default Robot;