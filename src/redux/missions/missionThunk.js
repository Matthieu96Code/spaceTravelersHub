import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMission = createAsyncThunk('mission/fetchMissions', () => axios.get('https://api.spacexdata.com/v3/missions'));

export default fetchMission;
