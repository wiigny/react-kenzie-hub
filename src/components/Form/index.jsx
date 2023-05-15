export const Form = ({ funct, children }) => {
  return <form onSubmit={funct}>{children}</form>;
};
