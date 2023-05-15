export const Select = ({ array, children, id, name, register }) => {
  return (
    <select name={name} id={id} {...register}>
      {children}
      {array &&
        array.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
    </select>
  );
};
