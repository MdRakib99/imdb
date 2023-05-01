import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="">
        <p className="font-bold text-lg mb-4">Keep me on touch:</p>
        <div className="flex  items-center mb-4">
          <IoLogoWhatsapp className="text-green-500 text-2xl" />
          <p className="ml-2">01941051841</p>
        </div>

        <div className="flex  items-center">
          <MdEmail className="text-2xl text-red-500" />
          <p className="ml-2">kamrulhasanrakib99@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
