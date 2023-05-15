export const Label = ({ children, name, htmlFor }) => {
  return (
    <label htmlFor={htmlFor}>
      {name}
      {children}
    </label>
  );
};
