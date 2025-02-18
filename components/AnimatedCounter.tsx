'use client';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full">
      <CountUp
        decimals={2}
        decimal=","
        prefix="$"
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;