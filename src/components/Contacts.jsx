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
    <div className='flex w-full flex-col gap-6 px-24 max-w-7xl min-w-fit'>
      <div>
        <h1 className='mb-3 text-4xl'>Get in touch with me.</h1>
      </div>
      <div className='flex h-full w-full flex-col justify-center gap-14 md:flex-row'>
        <div className='flex w-full flex-col justify-center gap-4 md:w-1/4'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 text-xl font-bold'>
              <FaPhoneAlt />
              PHONE
            </div>
            <span> 09095313123</span>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 text-xl font-bold'>
              <FaRegAddressBook />
              ADDRESS
            </div>
            <span> Metro Manila, Taguig City</span>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 text-xl font-bold'>
              <FaEnvelope />
              EMAIL
            </div>
            <span> email@gmail.com</span>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex w-full flex-col justify-center gap-4'>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='from_name'
              placeholder='name'
              className='h-9 w-full rounded-md bg-slate-800 px-3 text-slate-200'
            />
            <input
              type='email'
              name='from_email'
              placeholder='email'
              className='h-9 w-full rounded-md bg-slate-800 px-3 text-slate-200'
            />
          </div>
          <div>
            <textarea
              name='message'
              className='h-24 w-full resize-none rounded-md bg-slate-800 px-3 pt-2 text-slate-200'
              placeholder='message'
            />
          </div>
          <div className='flex gap-4'>
            <button
              type='submit'
              className='w-24 cursor-pointer rounded-xl bg-blue-800 py-2 transition-colors duration-200 ease-in hover:bg-blue-950 disabled:cursor-not-allowed'
              disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
            <button
              type='button'
              className='w-24 cursor-pointer rounded-xl bg-blue-800 py-2 transition-colors duration-200 ease-in hover:bg-blue-950 disabled:cursor-not-allowed'
              disabled={isSending}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
