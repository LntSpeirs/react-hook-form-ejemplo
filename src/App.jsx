import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  //Use form ya tiene su propia funcion handlesubmit
  /* El `const manejarEnvio` es una función que se crea utilizando la función `handleSubmit` de la
  biblioteca `react-hook-form`. Toma una función de devolución de llamada como argumento, que se
  ejecutará cuando se envíe el formulario. */
  const manejarEnvio = handleSubmit((data) => {
    //submit form data to server here...
    console.log("Formulario enviado");
    console.log(data);
  });
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

      <label htmlFor="correo">Correo:</label>
      <input type="email" {...register("email")} />

      <label htmlFor="passWord">Password:</label>
      <input type="passWord" {...register("password")} />

      <label htmlFor="ConfirmarPassWord">Confirmar Password:</label>
      <input type="passWord" {...register("confirmarPassword")} />

      <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
      <input type="date" {...register("fechaNacimiento")} />

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
      <input type="checkbox" {...register("terminos")} />

      <button>Enviar</button>
    </form>
  );
}

export default App;
