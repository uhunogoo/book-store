function Form({ children, handleSubmit, ...delegated }) {
  return (
    <form 
      {...delegated}
      onSubmit={ handleSubmit } 
    >
      { children }
    </form>
  );
}

export default Form;