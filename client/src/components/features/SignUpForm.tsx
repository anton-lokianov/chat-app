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
import { zodResolver } from '@hookform/resolvers/zod';
import {
  signUpFormValidation,
  SignUpFormValidationType,
} from './../../validations/signUpFormValidation';
import { MdOutlineMailOutline } from 'react-icons/md';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { CiFileOn } from 'react-icons/ci';

type SignUpFormProps = {
  onToggleAuthMode: () => void;
};

export const SignUpForm = ({ onToggleAuthMode }: SignUpFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<SignUpFormValidationType>({
    resolver: zodResolver(signUpFormValidation),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      statusMessage: '',
      profileImage: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data: SignUpFormValidationType) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-3 w-full h-full relative bg-[#FEFEF8] p-9 rounded-sm shadow-md shadow-black border border-gray-200 singUp_form'
      >
        <div className='flex justify-center items-center'>
          <BiLogIn className='text-[3rem] text-[#ba36a6]' />
        </div>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-500'>Name</FormLabel>
              <FormControl>
                <Input placeholder='name' icon={<FaRegUser />} {...field} />
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
                <Input
                  placeholder='email'
                  icon={<MdOutlineMailOutline />}
                  {...field}
                />
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
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='password'
                  icon={
                    showPassword ? (
                      <GoEyeClosed
                        className='cursor-pointer'
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <GoEye
                        className='cursor-pointer'
                        onClick={handleShowPassword}
                      />
                    )
                  }
                  {...field}
                />
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
                <Input
                  placeholder='status message'
                  icon={<MdOutlineMessage />}
                  {...field}
                />
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
                <Input type='file' icon={<CiFileOn />} {...field} />
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
