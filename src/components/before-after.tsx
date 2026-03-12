'use client';

import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

type BeforeAfterProps = {
  before: StaticImageData;
  after: StaticImageData;
  altBefore?: string;
  altAfter?: string;
  className?: string;
};

export default function BeforeAfter({ before, after, altBefore, altAfter, className }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePos = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative select-none', className)}
      onPointerDown={(e) => {
        setDragging(true);
        updatePos(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging) updatePos(e.clientX);
      }}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      <Image src={before} alt={altBefore ?? 'Antes'} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
      <Image
        src={after}
        alt={altAfter ?? 'Depois'}
        fill
        sizes="(min-width:1024px) 40vw, 100vw"
        className="object-cover absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
      />
      <div className="absolute inset-y-0" style={{ left: `calc(${pos}% - 1px)` }}>
        <div className="h-full w-[2px] bg-white/80" />
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ left: `calc(${pos}% - 20px)` }}
      >
        <div className="h-10 w-10 rounded-full bg-white shadow-lg grid place-items-center">
          <div className="flex items-center gap-1 text-slate-700">
            <span className="h-3 w-1 bg-slate-700 rounded-sm" />
            <span className="h-3 w-1 bg-slate-700 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
