import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Modal() {
  const { isOpen, component, closeModal } = useContext(ModalContext);

  if (isOpen) {
    return (
      <div className="flex flex-col z-50 fixed top-0 bottom-0 w-full items-center justify-center bg-black/80 overflow-scroll">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 sm:right-4 z-10 text-slate-100"
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
