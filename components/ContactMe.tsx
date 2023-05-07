import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid';
import {useForm,SubmitHandler} from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}
type Props = {}

function ContactMe({}: Props) {
  const {register,handleSubmit} = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData)=> {
    window.location.href = `mailto:sharmaakapil01@gmail.com?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  }
  return (
    <div className="h-screen relative flex
    flex-col rext-center md:text-left mx-auto 
    justify-evenly items-center md:flex-row">
      <h3 className="text-gray-500 text-2xl absolute top-20 uppercase 
      tracking-[20px]">Contact</h3>

      <div className=" mx-2 sm:px-0 flex flex-col space-y-4 mt-[8rem]">
        <h4 className=" text-[1.3rem] sm:text-3xl  font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="sm:text-2xl">+918130152127</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="sm:text-2xl">sharmaakapil01@gmail.com</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="sm:text-2xl">123 Developer Lane</p>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[25rem] sm:w-fit mx-auto">
            <div className="flex space-x-2 w-[20rem] sm:w-fit">
                <input {...register('name')} className="contactInput w-[12rem] " placeholder="Name" type="text"/>
                <input {...register('email')} className="contactInput w-[12.5rem]" placeholder="Email" type="email"/>
            </div>

            <input {...register('subject')} className="contactInput" placeholder="Subject" type="text"/>

            <textarea {...register('message')} className="contactInput" placeholder="Message" name=""/>
            <button type="submit" 
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
                Submit
            </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe