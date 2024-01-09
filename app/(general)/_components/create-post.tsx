'use client';
import { Button } from '@/components/ui/button';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa6';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const CreatePost = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [image, setImage] = useState<string[] | null>(null);

  const setTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  useEffect(() => {
    if (textareaRef.current) {
      setTextareaHeight();
    }
  }, []);

  const handleInputImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = Array.from(e.target.files || []);
    const base64Images = (await Promise.all(
      newImages.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(file);
        });
      })
    )) as string[];
    setImage(base64Images);
  };
  return (
    <div className='w-full h-auto p-4 flex border-b border-neutral-700'>
      <div className='flex w-16'>
        <div className='relative bg-neutral-600 rounded-full w-10 h-10'></div>
      </div>
      <div className='w-full flex flex-col gap-y-2'>
        <textarea
          onInput={setTextareaHeight}
          ref={textareaRef}
          className='min-h-[50px] bg-transparent text-neutral-200 px-4 focus:outline-none resize-none'
          placeholder='What is happening?!'
        ></textarea>
        {image !== null && (
          <div className='relative w-full'>
            <div
              className='w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center absolute top-4 right-4 cursor-pointer z-10'
              onClick={() => setImage(null)}
            >
              <IoIosClose className='text-neutral-400 hover:text-neutral-200' size={24} />
            </div>
            <Image
              className='rounded-3xl mb-3 object-cover w-full h-auto'
              src={image[0]}
              alt={image[0]}
              height={550}
              width={550}
            />
          </div>
        )}
        <div
          className={twMerge(
            'flex justify-between bg-neutral-900 sticky bottom-0',
            image !== null && 'py-4 border-t border-neutral-700'
          )}
        >
          <div className='flex items-center gap-x-4'>
            <label
              htmlFor='dropzone-file'
              className='text-neutral-300 cursor-pointer hover:text-purple-400'
              title='add photo'
            >
              <FaImage size={22} />
            </label>
            <div className='text-neutral-300 cursor-pointer hover:text-purple-400' title='schedule'>
              <FaCalendarAlt size={22} />
            </div>
            <input
              onChange={(e) => handleInputImageChange(e)}
              id='dropzone-file'
              type='file'
              className='hidden'
              multiple={false}
            />
          </div>
          <Button variant='purpleSecondary' className='w-28 text-sm font-semibold p-2'>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
