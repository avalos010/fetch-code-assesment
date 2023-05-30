import { ReactNode, createContext, useState } from "react";

type ModalContextProps = {
  isOpen: boolean;
  openModal: (component: ReactNode) => void;
  closeModal: () => void;
  component: ReactNode;
};

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState<ReactNode | null>(null);

  function openModal(component: ReactNode) {
    setComponent(component);
    setIsOpen(true);
  }

  function closeModal() {
    setComponent(null);
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal, component }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
