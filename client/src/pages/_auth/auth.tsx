import img from '../../assets/auth-bg2.png';
import { SignInForm } from '@/components/features/SignInForm';

const Auth = () => {
  return (
    <div className='flex flex-1'>
      <div className='w-3/5 flex items-center justify-center'>
        <SignInForm />
      </div>
      <img src={img} className='h-screen w-2/5' alt='chat-app' />
    </div>
  );
};

export default Auth;
