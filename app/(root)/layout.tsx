import React, { ReactNode } from 'react'

import { Metadata } from 'next';
import { StreamVideoProvider } from '@/providers/StreamClientProvider';

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video Calling App",
  icons: {
    icon : '/icons/logo.svg',
  }
};

const RootLayout = ({ children }: { children: ReactNode}) => {
  return (
    <div>
      <StreamVideoProvider>
      {children}
      </StreamVideoProvider>
    </div>
  )
}

export default RootLayout;