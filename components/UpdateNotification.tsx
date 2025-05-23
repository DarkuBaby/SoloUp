'use client';

import { useEffect, useState } from 'react';

export default function UpdateNotification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem('lastSeenVersion');
    const currentVersion = '1.0.1'; // Update this string when you push an update

    if (lastSeen !== currentVersion) {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem('lastSeenVersion', '1.0.1'); // Match this to currentVersion
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-xl rounded p-4 z-50 max-w-xs">
      <h4 className="font-bold">App Updated!</h4>
      <p className="text-sm">Check out what's new in version 1.0.1!</p>
      <button className="mt-2 text-blue-500" onClick={dismiss}>Dismiss</button>
    </div>
  );
}
