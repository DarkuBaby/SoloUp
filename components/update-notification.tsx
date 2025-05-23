'use client';

import { useEffect, useState } from 'react';

export default function UpdateNotification() {
  const [show, setShow] = useState(false);
  const currentVersion = '1.0.1'; // Change this version on each update

  useEffect(() => {
    const lastSeen = localStorage.getItem('lastSeenVersion');
    if (lastSeen !== currentVersion) {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem('lastSeenVersion', currentVersion);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white text-black rounded-lg shadow-xl p-4 z-50 max-w-xs">
      <h4 className="font-bold">Update Available</h4>
      <p className="text-sm">You're now using version {currentVersion}!</p>
      <button className="mt-2 text-blue-600 hover:underline" onClick={dismiss}>
        Dismiss
      </button>
    </div>
  );
}
