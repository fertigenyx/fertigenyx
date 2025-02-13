import Link from 'next/link';
import {
  BsYoutube,
  BsTwitch,
  BsReddit,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsFillEnvelopeAtFill,
} from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer
      className='bg-neutral-50 font-content dark:bg-gray-800'
      aria-labelledby='footerHeading'
      id='footer'
    >
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
     
      <div className='mx-auto max-w-7xl border-t border-gray-200 dark:border-gray-600'>
        <div className='items-ceter mt-8 flex justify-center space-x-2 sm:space-x-3'>
          {/* {SocialIcon.map((item) => (
            <Link key={item.name} href={item.url} target='_blank' rel='noreferrer' className=''>
              <span className='sr-only'>{item.name}</span>
              {item.icon}
            </Link>
          ))} */}
        </div>
        <p className='py-8 text-center font-content text-gray-800 dark:text-white'>
          &copy; {new Date().getFullYear()} Fertigenyx, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const SocialIcon = [
  {
    name: 'Youtube',
    url: 'https://www.youtube.com',
    icon: <BsYoutube className='text-3xl text-red-600 dark:text-red-500' />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: <BsFacebook className='text-3xl text-blue-600 dark:text-blue-500' />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/?hl=en',
    icon: <BsInstagram className='text-3xl text-pink-600 dark:text-pink-500' />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company',
    icon: <BsLinkedin className='text-3xl text-blue-600 dark:text-blue-500' />,
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=91&text=Hi.',
    icon: <BsWhatsapp className='text-3xl text-green-600 dark:text-green-500' />,
  },
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv',
    icon: <BsTwitch className='text-3xl text-purple-600 dark:text-purple-500' />,
  },
  {
    name: 'X',
    url: 'https://X.com',
    icon: <RiTwitterXFill className='text-3xl dark:text-white' />,
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/',
    icon: <BsReddit className='text-3xl text-orange-600' />,
  },
  {
    name: 'Mail',
    url: 'mailto:',
    icon: <BsFillEnvelopeAtFill className='text-3xl text-gray-600 dark:text-gray-200' />,
  },
];
