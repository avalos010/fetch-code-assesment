import { ReactNode, useState } from "react";

function Accordion({ children, title }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div
        data-cy={`${title}-accordion`}
        className="flex flex-row justify-between bg-slate-300 p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="cursor-pointer">{title}</h3>
        <button className="text-xl">{isOpen ? "-" : "+"}</button>
      </div>
      <div
        className={isOpen ? "h-64 overflow-y-scroll" : "h-0 overflow-hidden"}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;

type AccordionProps = {
  children: ReactNode;
  title: string;
};
