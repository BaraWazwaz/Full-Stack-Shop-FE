import React from 'react';

export const metadata = {
  title: 'Full-Stack Shop',
  description: 'Dockerized Next.js App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return React.createElement(
    'html',
    { lang: 'en' },
    React.createElement(
      'body',
      {
        style: {
          margin: 0,
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#0f172a',
          color: '#f8fafc',
        },
      },
      children
    )
  );
}
