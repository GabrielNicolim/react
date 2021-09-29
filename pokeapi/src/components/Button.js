const Button = ( { func,  content } ) => {
  return (
    <button onClick={() => func()} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-lg mx-5">
      { content }
    </button>
  );
}

export default Button;




