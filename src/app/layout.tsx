import './globals.css'
// import '../styles/responsive.css';
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';
// app/layout.tsx or page.tsx ya kisi top component me
// app/layout.tsx
import 'aos/dist/aos.css'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Onesol',
  description: 'Onesol Website',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}