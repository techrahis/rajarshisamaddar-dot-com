'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll }: any) => {
    setScrollY(scroll);
  });

  // useEffect(() => {
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === 'granted') {
  //       new Notification(
  //         'Thank you for signing up to receive updates and notifications from my app.'
  //       );
  //     }
  //   });
  // });

  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
};
