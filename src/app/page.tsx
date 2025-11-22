'use client';
import { TextFill } from '@/components/ui/text-fill'
import React, { useState, useEffect } from 'react';
import { Background } from '@/components/ui/background';
import { SkillsBento } from '@/components/ui/bento/skills';
import Menu from '@/components/ui/menu';

const name = [
  { value: "Evan", start: 0.5, end: 1, whitespace: true },
  { value: "Cooper", start: 1, end: 1.3, whitespace: true },
];
const description = [
  { value: "A", start: 0.5, end: 0.6, whitespace: true },
  { value: "Student", start: 0.7, end: 0.9, whitespace: true },
  { value: "from", start: 0.9, end: 1.1, whitespace: true },
  { value: "Northern", start: 1.1, end: 1.4, whitespace: true },
  { value: "California", start: 1.4, end: 1.7, whitespace: false },
];

function BentoItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function BentoLayout() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
    </div>
  );
}


export default function HomePage() {

  return (
    <div className="h-full bg-slate-950 relative">
      <Background />
      <Menu />
      <div className="z-10 flex flex-col min-h-screen max-w-screen overflow-hidden" id="about">
          <main className='justify-center h-screen w-screen flex items-center'>
            <div className="">
                <TextFill words={name} />
                <div className='text-sm'>
                  <TextFill words={description} />
                </div>
            </div>
            <BentoLayout />
            <SkillsBento />
          </main>
          <main className='justify-center h-screen w-full flex z-10 items-center flex-col' id="projects">
            <div className="text-white">
              Hello, welcome to my portfolio! This site is still a work in progress
            </div>
            <div className='h-1/2'>
            </div>
          </main>
      </div>
    </div>
  );
};

