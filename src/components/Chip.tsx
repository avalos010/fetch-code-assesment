import { XMarkIcon } from "@heroicons/react/24/solid";

function Chip({ name, onRemove }: ChipProps) {
  return (
    <div className="rounded-md border-[1px] border-black p-2 m-1 flex flex-row">
      <p>{name}</p>
      <XMarkIcon
        onClick={onRemove}
        width={20}
        className="cursor-pointer hover:text-red-700"
      />
    </div>
  );
}

export default Chip;

type ChipProps = {
  name: string;
  onRemove: () => void;
};
