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

export const SignInForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // todo: add onSubmit handler add more styles
  // BA36A6 hax color for the after element
  return (
    <Form {...form}>
      <form
        onSubmit={() => {}}
        className='space-y-5 max-w-md w-full relative bg-[#FEFEF8] p-9 rounded-sm shadow-md shadow-black border border-gray-200'
      >
        <div className='flex justify-center items-center text-slate-800 font-bold text-[1.3rem]'>
          <span>Sign In</span>
          <BiLogIn className='text-[2rem]' />
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
          <Button variant='link' type='button'>
            register
          </Button>
        </div>
      </form>
    </Form>
  );
};
