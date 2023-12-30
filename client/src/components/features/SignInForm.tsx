import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

export const SignInForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // todo: add onSubmit handler and change the form colors and add more styles
  return (
    <Form {...form}>
      <form
        onSubmit={() => {}}
        className='space-y-4 max-w-md w-full bg-sky-900 p-9 rounded-sm shadow-sm shadow-amber-50'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='email' {...field} />
              </FormControl>
              <FormDescription>Enter you Email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='password' {...field} />
              </FormControl>
              <FormDescription>Enter you Password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit' size='sm'>
          Sign in
        </Button>
      </form>
    </Form>
  );
};
