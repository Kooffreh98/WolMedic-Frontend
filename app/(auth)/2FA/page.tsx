"use client"
import React, {useState, useRef} from 'react';
import InputField from '../../../components/ui/InputField';
import Button from '@/components/ui/Button';


const AuthCode = () => {

  const [code, setCode] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: ''
  });

  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);
  const input4Ref = useRef<HTMLInputElement>(null);
  const input5Ref = useRef<HTMLInputElement>(null);
  const input6Ref = useRef<HTMLInputElement>(null);

  const inputRefs = [input1Ref, input2Ref, input3Ref, input4Ref, input5Ref, input6Ref];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value, name } = e.target;
    // Update code state
    setCode((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Move focus to the next input when filled
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };
  
  return (
    <>
      <div className='flex justify-center py-20'>    
        <div className='lg:w-[668px] md:w-[568px] sm:w-[468px] w-[368px] py-8 px-8 
         bg-white rounded-[40px]'>

          <h2 className='text-center lg:text-[28px] md:text-[28px] sm:text-[28px] text-[23px]'>
            Verify your Account
          </h2>

          <p className='text-center lg:text-[16px] md:text-[16px] sm:text-[16px] text-[13px] pb-10'>
            Input the 6-digit code sent to the email account you registered with
          </p>

          <form>
            <div className='flex lg:gap-4 md:gap-4 sm:gap-4 gap-2 justify-center mb-8'>
              <InputField 
                type='text'
                label=''
                className='lg:w-[48px] md:w-[48px] w-[38px] text-center'
                otherStyles="inline-block"
                maxLength={1}
                name='code1'
                value={code.code1}
                itemRef={input1Ref}
                onChange={(e) => handleChange(e, 0)}
              />

              <InputField 
                type='text'
                label=''
                className='lg:w-[48px] md:w-[48px] w-[38px] text-center'
                otherStyles="inline-block"
                maxLength={1}
                name='code2'
                value={code.code2}
                itemRef={input2Ref}
                onChange={(e) => handleChange(e, 1)}
              />

              <InputField 
                type='text'
                label=''
                className='lg:w-[48px] md:w-[48px] w-[38px] text-center'
                otherStyles="inline-block"
                maxLength={1}
                name='code3'
                value={code.code3}
                itemRef={input3Ref}
                onChange={(e) => handleChange(e, 2)}
              />

              <InputField 
                type='text'
                label=''
                className='lg:w-[48px] md:w-[48px] w-[38px] text-center'
                otherStyles="inline-block"
                maxLength={1}
                name='code4'
                value={code.code4}
                itemRef={input4Ref}
                onChange={(e) => handleChange(e, 3)}
              />

              <InputField 
                type='text'
                label=''
                className='lg:w-[48px] md:w-[48px] w-[38px] text-center'
                otherStyles="inline-block"
                maxLength={1}
                name='code5'
                value={code.code5}
                itemRef={input5Ref}
                onChange={(e) => handleChange(e, 4)}
              />

              <InputField 
                type='text'
                label=''
                className='lg:w-[48px] md:w-[48px] w-[38px] text-center'
                otherStyles="inline-block"
                maxLength={1}
                name='code6'
                value={code.code6}
                itemRef={input6Ref}
                onChange={(e) => handleChange(e, 5)}
              />
            </div>

            <div className='text-center mb-8'>
              <p className='lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px]'>
                Didn’t receive an OTP?
              </p>

              <InputField  
                type='submit'
                label='' 
                className='text-sm border-0 underline text-[#319898]' 
                placeholder='Resend code'
                value="Resend Code"
              />
            </div>

            <Button 
              typeProperty="submit"
              label='Continue'
              otherStyles='w-full mb-2'
            />
          </form>

        </div>
      </div>
    </>
  )
}

export default AuthCode;
