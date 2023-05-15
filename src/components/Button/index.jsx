export const Button = ({ children, type, name, id, onclick, disabled }) => {
  return (
    <button id={id} type={type} onClick={onclick} disabled={disabled}>
      {children}
      {name}
    </button>
  );
};
