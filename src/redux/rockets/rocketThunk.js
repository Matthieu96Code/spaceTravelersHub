import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRocket = createAsyncThunk('mission/fetchRockets', () => axios.get('https://api.spacexdata.com/v3/rockets'));

export default fetchRocket;
