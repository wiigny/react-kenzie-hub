import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Insira um nome")
    .min(3, "Deve ter no mínimo 3 caracteres")
    .max(80, "Deve ter no máximo 80 caracteres"),
  email: yup
    .string()
    .required("Insira um email")
    .email("Insira um email válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*\d)/, "Sua senha deve conter no mínimo um digito")
    .matches(
      /(?=.*[a-z])/,
      "Sua senha deve conter no mínimo uma letra minúscula"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Sua senha deve conter no mínimo uma letra maiúscula"
    )
    .matches(
      /(?=.*[$*&@#])/,
      "Sua senha deve conter ao menos uma caracter especial"
    )
    .min(8, "Sua senha deve conter ao menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password"), null], "Senha não coincide"),
  bio: yup.string().required("Fale um pouco sobre você"),
  contact: yup.string().required("Insira uma forma para contato"),
  course_module: yup.string().required("Escolha um módulo"),
});
