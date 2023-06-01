import { useEffect, useState } from "react";

export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        console.log('setando como offline');
        setIsOnline(false);
      }
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
    
    return isOnline;
  }