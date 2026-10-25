'use client';
import React, { useEffect, useState } from 'react';

interface HealthData {
  status: string;
  framework: string;
}

export default function Home() {
  const [data, setData] = useState<HealthData>({ status: 'loading...', framework: '' });
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

  useEffect(() => {
    fetch(`${apiUrl}/api/health`)
      .then((res) => res.json())
      .then((resData: HealthData) => setData(resData))
      .catch(() => setData({ status: 'offline', framework: 'none' }));
  }, [apiUrl]);

  return React.createElement(
    'main',
    { style: { padding: '4rem', maxWidth: '800px', margin: '0 auto' } },
    React.createElement('h1', { style: { color: '#38bdf8' } }, 'Full-Stack Shop Hub'),
    React.createElement(
      'div',
      { style: { background: '#1e293b', padding: '1.5rem', borderRadius: '8px' } },
      React.createElement('p', null, `Status: ${data.status}`),
      React.createElement('p', null, `Backend: ${data.framework}`)
    )
  );
}
