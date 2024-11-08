"use client"
import React, {useState} from 'react';
import InputField from '../../../components/ui/InputField';
import Button from '@/components/ui/Button';
import Link from "next/link";

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({...form, [name]: value }); 
    // console.log(form);  
  }
  return (
    <>
      <div className='flex justify-center py-20'>    
        <div className='lg:w-[668px] md:w-[468px] py-8 px-8 bg-white rounded-[40px]'>
          <h2 className='text-center lg:text-[28px] md:text-[28px] sm:text-[28px] text-[23px]'>
            Create an Account
          </h2>

          <p className='text-center lg:text-[16px] md:text-[16px] sm:text-[16px] text-[13px] pb-10'>
            Create an account to continue
          </p>

          <form className='text-[13px]'>
           <InputField 
             type='text'
             label='Username'
             name='username' 
             className='mb-3 text-xs' 
             placeholder='Username' required
             value={form.username}
             onChange={handleChange}
           />

           <InputField 
             type='email'
             label='Email Address'
             name='email' 
             className='mb-3 text-xs' 
             placeholder='example@email.com' required
             value={form.email}
             onChange={handleChange}
           />

            <InputField 
              type='password'
              label='Create Password'
              name='password' 
              className='mb-3 text-xs' 
              placeholder='*************'
              minLength={8} required
              value={form.password}
              onChange={handleChange}
            />

            <InputField 
              type='password'
              label='Confirm Password'
              name='confirmPassword' 
              className='mb-3 text-xs' 
              placeholder='***************'
              minLength={8} required
              value={form.confirmPassword}
              onChange={handleChange}
            />
                        
            <div className='flex-row mb-8'>
              <input type='checkbox' className='mr-2' required/> 
              <span className='text-xs'>I agree to the terms and conditions</span>
            </div>

            <Button 
              typeProperty="submit"
              label='Create Account'
              otherStyles='w-full'
            />
          </form>

          <div className='text-center mt-8 text-xs'>
            <span>
              Already have an account?
              <Link className='underline' href="/sign-in"> Login</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUp;
