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
import { isValidPhoneNumber } from "react-phone-number-input"
import { useState } from "react"


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
      message: "",
    },
  })
  const { control, handleSubmit } = form;
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const [notsubmitted, setIsNotSubmitted] = useState(false);


  const onSubmit = async (data) => {
    // if (!domainsLoaded) {
    //   form.setError("email", { type: "manual", message: "Please wait until the page is fully loaded." });
    //   return;
    // }

    // const emailDomain = data.email.split("@")[1]?.toLowerCase();
    // if (!emailDomain || blockedDomains.includes(emailDomain)) {
    //   form.setError("email", { type: "manual", message: "Enter a business email." });
    //   return;
    // }

    setIsLoading(true);

    const formattedData = {
      ...data
    };

    // console.log(data);

    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 7000);
      // console.log(data)
      form.reset();
    } catch (error) {
      setIsNotSubmitted(true);
      setTimeout(() => setIsNotSubmitted(false), 7000);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mobile:pt-0 overflow-hidden" id="formoem">
      <div className="w-full h-full mobile:p-0 tablet:p-[6.5vw]">
        <div className="w-full flex flex-col gap-[2vw] mobile:gap-[5vw] tablet:w-full mobile:px-[3vw] max-md:px-[2vw] mobile:py-[5vw]">
          <Form {...form} >
            <form
              autoComplete="off"
              className="space-y-[2vw] max-sm:space-y-[7vw] max-md:space-y-[4vw] tablet:space-y-[5vw]  mobile:pt-[5vw]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                control={control}
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
                control={control}
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
                control={control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <label className="block text-sm uppercase font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
                      Phone Number*
                    </label>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="NG"
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
                control={control}
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
                control={control}
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
              <Button type="submit"
                aria-label="submit form" className="cursor-pointer mt-[2vw] max-sm:mt-[10vw] max-md:mt-[8vw]">
                <div className="round relative flex items-center justify-center w-[12.5vw] h-[4.3vw] max-sm:h-[17vw] max-sm:min-w-[55vw] max-md:w-[27vw] max-md:h-[7vh]">
                  <div className="absolute left-0 top-0 flex justify-start">
                    <svg className="w-[5.5vw] h-auto max-sm:w-[25vw] max-md:w-[10vw]" width="101" height="55" viewBox="0 0 101 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 53.7144V27.3059C1 26.7807 1.20654 26.2766 1.57503 25.9025L25.5126 1.59662C25.8886 1.21493 26.4019 1 26.9376 1H100.242" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="absolute right-0 bottom-0 flex justify-end">
                    <svg className="w-[5.5vw] h-auto rotate-180 max-sm:w-[25vw] max-md:w-[10vw]" width="101" height="55" viewBox="0 0 101 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 53.7144V27.3059C1 26.7807 1.20654 26.2766 1.57503 25.9025L25.5126 1.59662C25.8886 1.21493 26.4019 1 26.9376 1H100.242" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 z-10">
                    <div
                      className="btn-clipPath w-full absolute flex items-center justify-center h-full bg-white transition-all rounded-xs group-hover:scale-100 scale-x-[92%] scale-y-[82%] max-sm:scale-x-[93%] max-sm:scale-y-[80%] duration-400 border border-[#ffffff] after:h-[1.2px] after:bg-[#ffffff] after:w-[2vw] after:-rotate-[47.2deg] after:top-[14%] after:absolute after:left-[-3%] before:absolute before:h-[1.2px] before:w-[2vw] before:bg-[#ffffff] before:-rotate-[48.3deg] before:right-[-3.4%] before:bottom-[14%]"
                    >
                    </div>
                    <div className="w-[90%] mx-auto h-full text-primary-1 relative z-10 flex items-center gap-5 justify-center">
                      {/* <span className="text-content-18 text-end capitalize pl-[0.2vw]">Submit</span> */}
                      <span className="text-content-18 text-end capitalize pl-[0.2vw]">
                        {isLoading ? "Sending..." : "Submit"}
                      </span>
                      <div className="rotate-180 text-primary-1 flex items-center justify-center gap-0 w-fit h-full">
                        <svg
                          className="arrow primera next"
                          width="8"
                          height="15"
                          viewBox="0 0 8 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          className="arrow segunda next"
                          width="8"
                          height="15"
                          viewBox="0 0 8 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>

              </Button>
              {submitted && (
                <p className="text-white text-sm mt-2">
                  ✅ Form submitted successfully!
                </p>
              )}

              {notsubmitted && (
                <p className="text-red-600 text-sm mt-2">
                  ❌ Error sending message. Please try again.
                </p>
              )}

            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
