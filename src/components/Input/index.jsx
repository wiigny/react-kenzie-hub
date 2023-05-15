export const Input = ({
  type,
  id,
  placeholder,
  name,
  register,
  disabled,
  value,
}) => {
  return (
    <input
      type={type}
      id={id}
      {...register}
      name={name}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};
