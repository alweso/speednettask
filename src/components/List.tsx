import { Link } from "react-router-dom";


type Item = {
  id: number,
  from: string,
  sent_date: string,
  is_unread: boolean,
  subject: string,
  snippet: string
}

export default function List(props:{items:[],onChange:any}) {
const items = props.items;
let trigger:boolean = true;
console.log(props);
function handleClick(item:Item) {
      fetch(`http://localhost:8000/posts/${item.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ is_unread: false })
      })
          .then(response => response.json())
          .then(() => {
            trigger = !trigger;
            props.onChange(trigger);
          });
}

  return (
    <div className="list">
    <ul className="list_body">
    {items && items.map((item:Item) =>
      <li key={item.id}>
      <input type="checkbox" className="list-checkbox" readOnly checked={item.is_unread ? false : true }/>
      <label></label>
      <Link to={item.id.toString()} state={item} onClick={() => handleClick(item)}>
        {item.subject}
      </Link>
      </li>
    )}
    </ul>
    </div>
  );
}
