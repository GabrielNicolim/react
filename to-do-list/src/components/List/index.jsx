import './style.css';
import trash from '../../icons/trash.svg'; 

const List = ({ listItems, removeItem }) => {
  function renderListItems () {
    const list = listItems.map((item) => {
      return (
        <li key={item.id.toString()}> 
          <span> { item.title } </span>
          <span> { item.date.replaceAll('-', '/') } </span>
          <span> { item.time } </span>
          <span>
            <button onClick={() => removeItem(item.id)}>
              <img src={trash} alt='trash'/>
            </button>
          </span>
        </li>
      );
    }) 

    return list;
  }

  return (
    <>
      {
        listItems.length ? 
          <ol>
            <div className="listHeader">
              <span>Title</span>
              <span>Date</span>
              <span>Hour</span>
              <span>Exclude</span>
            </div>  

            {renderListItems()}
          </ol>
        :
          <ol>
            <div className='void'>Nothing To See Here</div>
          </ol>
      }
    </>
  );
}

export default List;