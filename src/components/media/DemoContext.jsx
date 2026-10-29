import { createContext, useCallback, useContext, useState } from 'react';
import VideoModal from './VideoModal';

const DemoContext = createContext(() => {});

export function DemoProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openDemo = useCallback(() => setOpen(true), []);
  return (
    <DemoContext.Provider value={openDemo}>
      {children}
      <VideoModal open={open} onClose={() => setOpen(false)} />
    </DemoContext.Provider>
  );
}

export const useOpenDemo = () => useContext(DemoContext);
