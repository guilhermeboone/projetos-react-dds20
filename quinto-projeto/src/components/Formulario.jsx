// importacao do CSS
import styles from "./Formulario.module.css";

// Importação do hook form
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    // register = cria um objeto para ser enviado depois
    register,
    // handleSubmit = lida com o envio do formulário
    handleSubmit,
    // errors = objeto com erros de validação no formulário
    formState: { errors },
    // watch = observa o valor de um input
    watch,
  } = useForm();

  //caso o form esteja pronto
  const onSubmit = (data) => {
    console.log("Dados preenchidos: ", data);
  };

  //caso o form tenha erros
  const onError = (errors) => {
    console.log("Erros: ", errors);
  };
  return (
    <div>
      <h1>Formulario</h1>
      <form
        className={styles.formulario}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label>
          <span>Nome: </span>
          <input
            type="text"
            id="nome"
            placeholder="Nome Completo"
            {...register("nome", {
              required: "O campo nome é obrigatório.",
              minLength: {
                value: 2,
                message: "O minimo de caracteres é 2.",
              },
              maxLength: {
                value: 8,
                message: "O maximo de caracteres é 8.",
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0.-]+\.[A-Za-z]{2,}$/,
                message: "O nome só pode conter letras",
              },
            })}
          />
        </label>
        {errors.nome && <p className={styles.error}>{errors.nome.message}</p>},
        {/* caixinha de e-mail */}
        {/* caixinha de senha */}
        <label>
            <span>Senha</span>
            <input
            type= "password"
            name="senha"
            placeholder="Digite sua senha"
            {...register ("senha"), {
                required: "O campo senha é obrigatório",
                pattern: {
                    // value: /^(skfoasfpsodpsodopskdposkdposdosd)
                }
            }
            }
            />
        </label>
        {/* botão para envio */}
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            borderColor: "black",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
