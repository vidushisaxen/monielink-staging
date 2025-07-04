/* eslint-disable no-unused-vars */
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { PhoneInput } from "@/components/ui/phone-input"
import { Input } from "@/components/ui/input";
import { useState } from "react"
import { isValidPhoneNumber } from "react-phone-number-input"
import PrimaryButton from "../Buttons/PrimaryButton"
import WhiteButton from "../Buttons/WhiteButton"
import SecondaryButton from "../Buttons/SecondaryButton"

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  company: z.string().min(2, { message: "Company name is required." }),
  message: z.string().optional(),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      company: "",
      designation: "",
      message: "",
      terms: false,
      pageURL: typeof window !== 'undefined' ? window.location.href : '',
    },
  })


  
  return (
    <section className="mobile:pt-0 overflow-hidden" id="formoem">
      <div className="w-full h-full mobile:p-0 tablet:p-[6.5vw]">
        <div className="w-full flex flex-col gap-[2vw] mobile:gap-[5vw] tablet:w-full mobile:px-[3vw] mobile:py-[5vw]">
          <Form {...form}>
            <form
              autoComplete="off"
              className="space-y-[2vw] max-sm:space-y-[7vw] tablet:space-y-[5vw]  mobile:pt-[5vw]"
            >
              <FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem>
      <label className="block text-sm uppercase font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
      Full name*
      </label>
      <FormControl>
        <Input
          autoComplete="off"
          {...field}
          className="mobile:text-[4.5vw] tablet:text-[2.2vw]"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <label className="block text-sm font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
      EMAIL*
      </label>
      <FormControl>
        <Input
          autoComplete="off"
          {...field}
          className="mobile:text-[4.5vw] tablet:text-[2.2vw]"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="number"
  render={({ field }) => (
    <FormItem>
      <label className="block text-sm uppercase font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
        Phone Number*
      </label>
      <FormControl>
        <PhoneInput
          defaultCountry="IN"
          international
          {...field}
          className="mobile:text-[4.5vw] tablet:text-[2.2vw]"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="company"
  render={({ field }) => (
    <FormItem>
      <label className="block text-sm font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
      COMPANY NAME*
      </label>
      <FormControl>
        <Input
          autoComplete="off"
          {...field}
          className="mobile:text-[4.5vw] tablet:text-[2.2vw]"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="message"
  render={({ field }) => (
    <FormItem>
      <label className="block text-sm font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
      MESSAGE*
      </label>
      <FormControl>
        <Textarea
          autoComplete="off"
          {...field}
          className="mobile:text-[4.5vw] tablet:text-[2.2vw]"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


              <div className="mt-[2vw] w-full flex justify-start max-sm:pt-[10vw]">
        <SecondaryButton href={"/"} text="Submit" className=" text-white" />
             
              </div>
            
             
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
