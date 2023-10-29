import Lottie from 'react-lottie';
import animationData from '../../assets/animation.json';

const LottieFooter = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
  return (
    <div className='md:absolute md:top-[-150px]'>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LottieFooter;
