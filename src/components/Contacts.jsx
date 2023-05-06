import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaPhoneAlt, FaRegAddressBook, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setIsSending((prevState) => !prevState);

      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_API_KEY
      );

      console.log(response);

      alert("success");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setIsSending((prevState) => !prevState);
    }
  };

  return (
    <div className='g-4 flex w-full min-w-fit max-w-7xl flex-col gap-10'>
      <div className='flex flex-col gap-1'>
        <h1 className='mb-3 text-4xl'>Get in touch with me.</h1>
        <p>
          I'm currently looking for a job opportunities, if you think I can
          contribute to your company. Send me a message!
        </p>
      </div>
      <div className='flex h-full w-full flex-col justify-center gap-14 md:flex-row'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex w-full flex-col justify-center gap-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <input
              type='text'
              name='from_name'
              placeholder='Name'
              className='h-14 w-full rounded-md bg-slate-800 px-3 text-slate-200'
            />
            <input
              type='email'
              name='from_email'
              placeholder='Email'
              className='h-14 w-full rounded-md bg-slate-800 px-3 text-slate-200'
            />
          </div>
          <div>
            <textarea
              name='message'
              className='h-24 w-full rounded-md bg-slate-800 px-3 pt-2 text-slate-200'
              placeholder='Message'
            />
          </div>
          <div className='ml-auto flex w-full gap-4 md:w-60'>
            <button
              type='submit'
              className='relative w-full  cursor-pointer rounded-md border-2 border-green-700 bg-transparent py-2 font-bold transition-all duration-500 ease-in after:absolute after:left-0 after:top-0 after:-z-50 after:h-full after:w-0 after:bg-green-700 after:transition-all after:duration-1000 hover:text-black hover:after:w-full disabled:cursor-not-allowed'
              disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
