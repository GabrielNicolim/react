import './style.css';

const Button = (props) => {
  return (
    <button 
      onClick={() => props.onClick()}
      className='btn'
      style={
        {
          background: props.backgroundColor,
          color: props.fontColor
        }
      }
    >
      {props.content}
    </button>
  );
}

export default Button;