import { SignUpForm } from '@/components/features/SignUpForm';
import img from '../../assets/auth-bg2.png';
import { SignInForm } from '@/components/features/SignInForm';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowWidth from '@/hooks/useWindowWidth';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const mobileFormVariants = {
    signIn: {
      x: [180, 0],
      opacity: [0, 1],
      transition: { duration: 0.4 },
      scale: [0, 1],
    },
    signUp: {
      x: [180, 0],
      transition: { duration: 0.4 },
      opacity: [0, 1],
      scale: [0, 1],
    },
  };

  const formVariants = {
    signIn: {
      x: 0,
      transition: { duration: 0.5 },
      opacity: [0, 1],
      scale: 1,
    },
    signUp: {
      x: windowWidth * 0.6,
      transition: { duration: 0.5 },
      opacity: [0, 1],
      scale: 1,
    },
  };

  const imageVariants = {
    signIn: {
      x: 0,
      transition: { duration: 0.4 },
    },
    signUp: {
      x: -windowWidth * 0.4,
      transition: { duration: 0.4 },
    },
  };

  const toggleAuthMode = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div className='flex flex-1 h-screen relative'>
      <motion.div
        animate={isSignIn ? 'signIn' : 'signUp'}
        variants={isMobile ? mobileFormVariants : formVariants}
        className='w-full md:w-2/5 absolute left-0 flex justify-center items-center'
      >
        {isSignIn ? (
          <SignInForm onToggleAuthMode={toggleAuthMode} />
        ) : (
          <SignUpForm onToggleAuthMode={toggleAuthMode} />
        )}
      </motion.div>

      <motion.img
        src={img}
        animate={isSignIn ? 'signIn' : 'signUp'}
        variants={imageVariants}
        className='hidden w-3/5 absolute right-0 h-screen md:block'
        alt='chat-app'
      />
    </div>
  );
};

export default Auth;
