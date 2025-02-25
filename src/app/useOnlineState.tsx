import { useSyncExternalStore, useDebugValue } from 'react';

export function useOnlineStatus(): boolean {
  const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine, () => true);
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}

function subscribe(callback: () => void): () => void {
  const onlineCallback = (): void => callback();
  const offlineCallback = (): void => callback();
  
  window.addEventListener('online', onlineCallback);
  window.addEventListener('offline', offlineCallback);
  return () => {
    window.removeEventListener('online', onlineCallback);
    window.removeEventListener('offline', offlineCallback);
  };
}
