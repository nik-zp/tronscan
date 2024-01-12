import { format, formatDistance } from 'date-fns';
import { useEffect, useState } from 'react';

interface Props {
  timestamp: number;
  asTime: boolean;
}

const getTime = (timestamp: number, asTime: boolean): string =>
  asTime
    ? format(timestamp, 'HH:mm:ss')
    : formatDistance(timestamp, Date.now(), { includeSeconds: true });

export default function Time({ timestamp, asTime = false }: Props) {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(getTime(timestamp, asTime));
    const timer = setInterval(() => {
      setTime(getTime(timestamp, asTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [asTime, timestamp]);

  return <>{time}</>;
}
