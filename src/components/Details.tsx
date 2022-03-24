import { useLocation } from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  const locationState:any = location.state;
  const item = locationState;
  return (
    <div className="details">
    <p>{item && item.from}</p>
      <p>{item && item.sent_date}</p>
      <p>{item && item.is_unread}</p>
      <p>Subject: {item && item.subject}</p>
      <p>{item && item.snippet}</p>
    </div>
  );
}
