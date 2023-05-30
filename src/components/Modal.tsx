import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Modal() {
  const { isOpen, component, closeModal } = useContext(ModalContext);

  if (isOpen) {
    return (
      <div className="flex z-50 fixed top-0 w-full h-screen items-center justify-center bg-black/80 ">
        <button
          onClick={closeModal}
          className="absolute top-0 right-4 text-slate-100"
        >
          <XMarkIcon width={50} />
        </button>
        {component}
      </div>
    );
  }
  return null;
}

export default Modal;
