import { useLocation } from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  const locationState:any = location.state;
  console.log(locationState);
  const item = locationState;
  return (
    <div className="details">
    <p>{item && item.sent_date}</p>
    <p><strong>Od: </strong>{item && item.from}</p>
      <p><strong>Temat:</strong> {item && item.subject}</p>
      <p>{item && item.snippet}</p>
    </div>
  );
}
