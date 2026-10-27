import React, { CSSProperties } from 'react';

export const metadata = {
  title: 'Full-Stack Shop',
  description: 'Dockerized Next.js App',
};

export interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: IRootLayout) {
  return <html lang='en'>
    <body
      style={styles.body}
      suppressHydrationWarning={true}
    >
      {children}
    </body>
  </html>;
}

namespace styles {
  export const body: CSSProperties = {
    margin: 0,
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
  };
}
