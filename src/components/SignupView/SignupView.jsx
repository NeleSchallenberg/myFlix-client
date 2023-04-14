// Expose SignupView component
export const SignupView = () => {
  // Event handler for submitting
  const handleSubmit = (event) => {}
  // Creating SignupView component with event handler
  return (
    <form onSubmit={handlySubmit}>
      <button type='submit'>Submit</button>
    </form>
  )
}