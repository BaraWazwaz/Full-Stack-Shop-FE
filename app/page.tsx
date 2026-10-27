'use client';
import { CSSProperties } from 'react';
import { useHealthData } from '@/_internal/hooks/health';

export default function Home() {
  const data = useHealthData();

  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Full-Stack Shop Hub</h1>
      <div style={styles.div}>
        <p>Timestamp: {data.timestamp}</p>
        <p>Author: {data.author}</p>
      </div>
    </main>
  );
}

namespace styles {
  export const main: CSSProperties = {
    padding: '4rem',
    maxWidth: '800px',
    margin: '0 auto',
  };
  export const h1: CSSProperties = {
    color: '#38bdf8',
  };
  export const div: CSSProperties = {
    background: '#1e293b',
    padding: '1.5rem',
    borderRadius: '8px',
  };
}
