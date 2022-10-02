import React, { useEffect, useState } from 'react';
import { List } from 'semantic-ui-react';

import './App.css';

interface IItem {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <List>
      {activities.map((item: IItem) => (
        <List.Item key={item.id}>{item.title}</List.Item>
      ))}
    </List>
  );
}

export default App;
