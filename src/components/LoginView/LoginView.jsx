// Espose LoginView component
export const LoginView = () => {
  
  // Create LoginView component
  return (
    <form>
      <label>
        Username:
        <input type='text'/>
      </label>
      <label>
        Password:
        <input type='password'/>
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}