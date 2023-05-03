import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaPhoneAlt, FaRegAddressBook, FaEnvelope } from "react-icons/fa";

export default function Contact() {
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
    <div className='w-full md:flex-row flex-col flex justify-center h-full items-center gap-14'>
      <div className='w-1/4 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='text-xl font-bold flex gap-2'>
            <FaPhoneAlt />
            PHONE
          </div>
          <span> 09095313123</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-xl font-bold flex gap-2'>
            <FaRegAddressBook />
            ADDRESS
          </div>
          <span> Metro Manila, Taguig City</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-xl font-bold flex gap-2'>
            <FaEnvelope />
            EMAIL
          </div>
          <span> email@gmail.com</span>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='flex flex-col w-3/4 gap-4'>
        <div className='flex gap-2'>
          <input
            type='text'
            name='from_name'
            placeholder='name'
            className='w-full h-9 rounded-md px-3 bg-slate-800 text-slate-200'
          />
          <input
            type='email'
            name='from_email'
            placeholder='email'
            className='w-full h-9 rounded-md px-3 bg-slate-800 text-slate-200'
          />
        </div>
        <div>
          <textarea
            name='message'
            className='w-full h-24 rounded-md resize-none px-3 bg-slate-800 text-slate-200 pt-2'
            placeholder='message'
          />
        </div>
        <div className='flex gap-4'>
          <button
            type='submit'
            className='bg-blue-800 py-2 rounded-xl cursor-pointer w-24 hover:bg-blue-950 transition-colors ease-in duration-200 disabled:cursor-not-allowed'
            disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>
          <button
            type='button'
            className='bg-blue-800 py-2 rounded-xl cursor-pointer w-24 hover:bg-blue-950 transition-colors ease-in duration-200 disabled:cursor-not-allowed'
            disabled={isSending}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
