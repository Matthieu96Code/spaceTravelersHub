import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigation } from './features';
import fetchMission from './redux/missions/missionThunk';
import fetchRocket from './redux/rockets/rocketThunk';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
    dispatch(fetchRocket());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
