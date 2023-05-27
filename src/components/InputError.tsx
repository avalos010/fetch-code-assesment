function InputError({ errorMessage }: InputErrorProps) {
  return (
    <span className="bg-red-500  w-full text-center" role="alert">
      {errorMessage}
    </span>
  );
}

export default InputError;

type InputErrorProps = {
  errorMessage: string;
};
