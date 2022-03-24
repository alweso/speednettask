import * as React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes, HashRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';
import List from './components/List';
import Details from './components/Details';
import ListHeader from './components/ListHeader';
import { useState, useEffect } from "react";

interface Item {
  id: number,
  from: string,
  sent_date: string,
  is_unread: boolean,
  subject: string,
  snippet: string
}
export default function App() {
  const [data, setData]:[data:any,setData:any] = useState(null);
  const [changer, setChanger]:[changer:boolean,setChanger:any] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/posts/')
    .then((response) => {
       if (!response.ok) {
         throw new Error(
           `This is an HTTP error: The status is ${response.status}`
         );
       }
       return response.json();
     })
     .then((fetchedData) => {
       setData(fetchedData);
     })
     .catch((err) => {
       setData(null);
     });
  }, [changer] )



function handleChange() {
    setChanger(!changer);
}

  return (
    <HashRouter>
      <div className="container-fluid">
        <div className="row">
        <ListHeader items={data}/>
          <div className="col-6">
          <List items={data} onChange={handleChange}/>
          </div>
          <div className="col-6">
          <Routes>
            <Route path="/:id" element={<Details />}/>
          </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
