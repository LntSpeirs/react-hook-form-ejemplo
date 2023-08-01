import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //Use form ya tiene su propia funcion handlesubmit
  /* El `const manejarEnvio` es una función que se crea utilizando la función `handleSubmit` de la
  biblioteca `react-hook-form`. Toma una función de devolución de llamada como argumento, que se
  ejecutará cuando se envíe el formulario. */
  const manejarEnvio = handleSubmit((data) => {
    //submit form data to server here...
    console.log("Formulario enviado");
    console.log(data);
  });

  /*
  Formstate captura todos los valores, y si alguno falla, 
  crea un objeto error que indica cual es el que falla
  */
  console.log("ERRORES:");
  console.table(errors);

  return (
    <form onSubmit={manejarEnvio}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        {...register("nombre", {
          required: true, //Este campo debe ser requerido
          minLength: { value: 3 }, //El valor mínimo permitido para este campo
          maxLength: { value: 50 }, //El valor máximo permitido para este campo
        })}
      />
      {errors.nombre?.type === "required" && (
        <span>El nombre es obligatorio.</span>
      )}
      {errors.nombre?.type === "minLength" && (
        <span>El nombre debe tener al menos tres caracteres de longitud.</span>
      )}

      <label htmlFor="correo">Correo:</label>
      <input
        type="email"
        {...register("email", {
          required: true, //Este campo debe ser requerido
        })}
      />

      <label htmlFor="passWord">Password:</label>
      <input
        type="passWord"
        {...register("password", {
          required: true, //Este campo debe ser requerido
        })}
      />

      <label htmlFor="ConfirmarPassWord">Confirmar Password:</label>
      <input
        type="passWord"
        {...register("confirmarPassword", {
          required: true, //Este campo debe ser requerido
        })}
      />

      <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
      <input
        type="date"
        {...register("fechaNacimiento", {
          required: true, //Este campo debe ser requerido
        })}
      />

      <label htmlFor="pais">País:</label>
      <select {...register("pais")}>
        <option value="es">España</option>
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      <label htmlFor="foto">Foto de perfil:</label>
      <input type="file" {...register("foto")} />

      <label htmlFor="terminos">Acepto los términos y condiciones</label>
      <input
        type="checkbox"
        {...register("terminos", {
          required: true, //Este campo debe ser requerido
        })}
      />

      <button>Enviar</button>
    </form>
  );
}

export default App;
