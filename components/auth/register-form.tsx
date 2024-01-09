'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegisterSchema } from '@/schemas';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { CardWrapper } from './card-wrapper';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      username: '',
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
  };
  return (
    <CardWrapper
      headerLabel='Create an account'
      headerTitle='Sign Up'
      backButtonLabel='Already have an account?'
      backButtonHref='/auth/login'
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-neutral-200'>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='JhonDoe' type='text' />
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
                  <FormLabel className='text-neutral-200'>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='jhon.doe@example.com' type='email' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className='w-full' type='submit'>
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
