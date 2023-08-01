import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "Jaime",
      email: "correo@correo.es",
      password: "1050",
      confirmarPassword: "1050",
    },
  });
  //Use form ya tiene su propia funcion handlesubmit
  /* El `const manejarEnvio` es una función que se crea utilizando la función `handleSubmit` de la
  biblioteca `react-hook-form`. Toma una función de devolución de llamada como argumento, que se
  ejecutará cuando se envíe el formulario. */
  const manejarEnvio = handleSubmit((data) => {
    console.log(data);
    //submit form data to server here...
    console.log("Formulario enviado");
    //Borrar un campo despues de enviar
    setValue("email", "");
    //Borrar todos los campos despues de enviar
    reset();
    alert(`¡Gracias por registrarte!`);
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
          required: {
            value: true,
            message: "Nombre requerido.",
          },
          minLength: {
            value: 3,
            message: "El nombre debe tener al menos tres caracteres.",
          }, //El valor mínimo permitido para este campo
          maxLength: {
            value: 50,
            message: "El nombre no puede superar los 50 cáracteres",
          }, //El valor máximo permitido para este campo
        })}
      />
      {errors.nombre && <span>{errors.nombre.message}</span>}

      <label htmlFor="correo">Correo:</label>
      <input
        type="email"
        {...register("email", {
          required: {
            value: true,
            message: "Correo requerido.",
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Correo no válido.",
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <label htmlFor="passWord">Password:</label>
      <input
        type="passWord"
        {...register("password", {
          required: {
            value: true,
            message: "El password es obligatorio.",
          },
          minLength: {
            value: 8,
            message:
              "La longitud mínima del password debe ser de 8 caracteres o más",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <label htmlFor="ConfirmarPassWord">Confirmar Password:</label>
      <input
        type="passWord"
        {...register("confirmarPassword", {
          required: {
            value: true,
            message: "Debe confirmar el password.",
          },
          /* validate: (value) => {
            if (value === watch("password")) {
              return true;
            } else {
              return "Las contraseñas no coinciden";
            }
          }, */
          validate: (value) =>
            value === watch("password") || "Las contraseñas no coinciden",
        })}
      />
      {errors.confirmarPassword && (
        <span>{errors.confirmarPassword.message}</span>
      )}

      <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
      <input
        type="date"
        {...register("fechaNacimiento", {
          required: {
            value: true,
            message: "La fecha de nacimiento es obligatoria.",
          },
          //es parte tambien de la biblioteca react-hook-forms
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad =
              fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            console.log("Edad:", edad);
            /* if (edad >= 18) {
              return true;
            } else {
              return "Debes tener al menos 18 años para registrarte.";
            } */
            return (
              edad >= 18 || "Debes tener al menos 18 años para registrarte."
            );
          },
        })}
      />
      {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}

      <label htmlFor="pais">País:</label>
      <select {...register("pais")}>
        <option value="es">España</option>
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>
      {watch("pais") === "es" && (
        <>
          <input
            type="text"
            placeholder="provincia"
            {...register("provincia", {
              required: {
                value: true,
                message: "provincia obligatorio.",
              },
            })}
          />
          {errors.provincia && <span>{errors.provincia.message}</span>}
        </>
      )}

      <label htmlFor="foto">Foto de perfil:</label>
      <input
        type="file"
        {...register("foto")}
        onChange={(e) => {
          console.log(e.target.files[0]);
          setValue("fotoDelUsuario", e.target.files[0].name);
        }}
      />

      <label htmlFor="terminos">Acepto los términos y condiciones</label>
      <input
        type="checkbox"
        {...register("terminos", {
          required: {
            value: true,
            message: "Debe aceptar los términos y condiciones",
          },
        })}
      />
      {errors.terminos && <span>{errors.terminos.message}</span>}

      <button>Enviar</button>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
      {/* <pre>{JSON.stringify(watch("nombre"), null, 2)}</pre> */}
    </form>
  );
}

export default App;
