'use client';

import { useEffect, useState } from 'react';
import env from '@/_internal/config/env';

export interface HealthData {
  timestamp: string;
  author: string;
}

const DEFAULT_DATA: HealthData = {
  timestamp: 'loading...',
  author: 'loading...'
};

export async function getHealthData(signal?: AbortSignal): Promise<HealthData> {
  const [timestampRes, authorRes] = await Promise.all([
    fetch(`${env.API_URL}/api/v1/health/timestamp`, { signal }),
    fetch(`${env.API_URL}/api/v1/health/author`, { signal })
  ]);

  if (!timestampRes.ok || !authorRes.ok) {
    throw new Error('failed to get health data');
  }
  
  return {
    timestamp: await timestampRes.text(),
    author: await authorRes.text(),
  };
}

export function useHealthData() {
  const [data, setData] = useState<HealthData>(DEFAULT_DATA);

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      try {
        const result = await getHealthData(controller.signal);
        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }

        console.error(`fetch failed: ${error}`);
        setData({ author: 'offline', timestamp: 'offline' });
      }
    }
    loadData();
    
    return () => controller.abort();
  }, []);

  return data;
}
