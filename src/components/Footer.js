import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-gray-600 bg-amber-100 lg:text-lg  py-6 ">
      <div className="container mx-auto flex justify-between items-center px-4 max-w-6xl">
        <div>
          <p>
            {' '}
            <span className="font-bold text-xl">&copy; </span>
            {currentYear} IMDb. All rights reserved.
          </p>
        </div>
        <div className="text-xs">
          <p>Website Created by:</p>

          <div className="flex justify-center items-center hover:underline">
            <Link href="/contact" className="flex justify-center items-center">
              <p className="mr-1">MD.Rakib </p>

              <Image
                src="/me3.1.jpg"
                alt="rakib"
                width={40}
                height={40}
                className=" w-10 h-10 rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
