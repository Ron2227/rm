import { useEffect } from 'react';
import { STORAGE_KEY } from '../constants/ui';

export function useAutosave(payload, enabled, onSave) {
  useEffect(() => {
    if (!enabled) return;
    const t = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      onSave?.();
    }, 1000);
    return () => clearTimeout(t);
  }, [payload, enabled]);
}
