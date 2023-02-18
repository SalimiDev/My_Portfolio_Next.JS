import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaTwitterSquare, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialItems = [
    { icon: <FaFacebookSquare />, url: 'www.google.com' },
    { icon: <FaTwitterSquare />, url: 'www.google.com' },
    { icon: <FaInstagram />, url: 'www.google.com' },
    { icon: <FaGithub />, url: 'www.google.com' },
    { icon: <FaGithub />, url: 'www.google.com' },
];

const SocialIcons = () => {
    return (
        <ul className='py-2 flex justify-between w-[60%]'>
            {SocialItems.map((item, index) => (
                <li
                    key={index}
                    className='p-2 rounded-full bg-grayAccent-400 hover:bg-primary-300 transition duration-300 ease-in-out'>
                    <Link href={item.url}>{item.icon}</Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;