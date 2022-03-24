export default function ListHeader(props:{items:[]}) {
const items:[] = props.items;
const readItems = items && items.filter(returnRead);
console.log(props)
  function returnRead(items:any) {
    return items.is_unread === false;
  }

  return (
    <header className="col-12 list_header">
      <div className="row">
      <div className="col-12">
          <p>Przeczytane elementy: {readItems && readItems.length} / {items && items.length}</p>
      </div>
      </div>
    </header>
  );
}
