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

type SignUpFormProps = {
  onToggleAuthMode: () => void;
};

export const SignUpForm = ({ onToggleAuthMode }: SignUpFormProps) => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      statusMessage: '',
      profileImage: '',
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={() => {}}
        className='space-y-6 h-screen w-full relative bg-[#FEFEF8] p-9 rounded-sm shadow-md shadow-black border border-gray-200 form'
      >
        <div className='flex justify-center items-center text-slate-800 font-bold text-[1.3rem]'>
          <BiLogIn className='text-[3.5rem] text-[#ba36a6]' />
        </div>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-500'>Name</FormLabel>
              <FormControl>
                <Input placeholder='name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
            <FormItem className='z-40 relative'>
              <FormLabel className='text-slate-500'>Password</FormLabel>
              <FormControl>
                <Input placeholder='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='statusMessage'
          render={({ field }) => (
            <FormItem className='z-40 relative'>
              <FormLabel className='text-slate-500'>Status message</FormLabel>
              <FormControl>
                <Input placeholder='status message' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='profileImage'
          render={({ field }) => (
            <FormItem className='z-40 relative'>
              <FormLabel className='text-slate-500'>Profile image</FormLabel>
              <FormControl>
                <Input type='file' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='z-40 relative'>
          <Button
            className='w-full tracking-widest'
            variant='default'
            type='submit'
            size='sm'
          >
            SIGN UP
          </Button>
          <div className='text-slate-500'>
            already have an account?{' '}
            <Button variant='link' type='button' onClick={onToggleAuthMode}>
              Sign in
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
