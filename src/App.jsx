import { useForm } from "react-hook-form";

function App() {
  const {} = useForm;
  return (
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" />

      <label htmlFor="correo">Correo:</label>
      <input type="email" />

      <label htmlFor="passWord">Password:</label>
      <input type="passWord" />

      <label htmlFor="ConfirmarPassWord">Confirmar Password:</label>
      <input type="passWord" />

      <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
      <input type="date" />

      <label htmlFor="pais">País:</label>
      <select>
        <option value="es">España</option>
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      <label htmlFor="file">Foto de perfil:</label>
      <input type="file" />

      <label htmlFor="terminos">Acepto los términos y condiciones</label>
      <input type="checkbox" />

      <button>Enviar</button>
    </form>
  );
}

export default App;
