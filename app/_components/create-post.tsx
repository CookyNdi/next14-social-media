'use client';
import Button from '@/components/Button';
import React, { useEffect, useRef, useState } from 'react';

const CreatePost = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
  return (
    <div className='w-full h-auto p-4 flex border-b border-neutral-700'>
      <div className='flex w-16'>
        <div className='relative bg-neutral-600 rounded-full w-10 h-10'></div>
      </div>
      <div className='w-full flex flex-col'>
        <textarea
          onInput={setTextareaHeight}
          ref={textareaRef}
          className='min-h-[50px] bg-transparent px-4 focus:outline-none resize-none'
          placeholder='What is happening?!'
        ></textarea>
        <div className='flex justify-end'>
          <Button className='w-28 text-sm font-semibold p-2'>Post</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
