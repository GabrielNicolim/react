const Button = (props) => {
    return (
        <div 
            onClick={() => props.handleFunction() }  
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer my-3"
        >
            { props.children }
        </div>
    );
}

export default Button;
