import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { BiLogIn } from 'react-icons/bi';
import {
  signInFormValidation,
  SignInFormValidationType,
} from './../../validations/signInFormValidation';
import { zodResolver } from '@hookform/resolvers/zod';

type SignInFormProps = {
  onToggleAuthMode: () => void;
};

export const SignInForm = ({ onToggleAuthMode }: SignInFormProps) => {
  const form = useForm<SignInFormValidationType>({
    resolver: zodResolver(signInFormValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignInFormValidationType) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 h-screen relative w-full bg-[#FEFEF8] p-9 rounded-sm shadow-md shadow-black border border-gray-200 singIn_form'
      >
        <div className='flex justify-center items-center text-slate-800 font-bold text-[1.3rem]'>
          <BiLogIn className='text-[3.5rem] text-[#ba36a6]' />
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-500'>Email</FormLabel>
              <FormControl>
                <Input placeholder='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-500'>Password</FormLabel>
              <FormControl>
                <Input placeholder='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            className='w-full tracking-widest'
            variant='default'
            type='submit'
            size='sm'
          >
            SIGN IN
          </Button>
          <div className='text-slate-500'>
            dont have an account?{' '}
            <Button variant='link' type='button' onClick={onToggleAuthMode}>
              Sign up
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
