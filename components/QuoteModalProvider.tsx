"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import QuoteModal from "./QuoteModal";

interface QuoteModalContextValue {
  openModal: (service?: string) => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | undefined>(undefined);

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [initialService, setInitialService] = useState<string | undefined>(undefined);

  const openModal = (service?: string) => {
    setInitialService(service);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <QuoteModalContext.Provider value={{ openModal }}>
      {children}
      <QuoteModal open={open} onClose={handleClose} initialService={initialService} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return context;
}
