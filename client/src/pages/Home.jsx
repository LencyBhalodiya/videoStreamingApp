import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
axios.defaults.withCredentials = true
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {

  const dispatch = useDispatch();
  
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:5000/api/videos/${type}`,{ withCredentials: true });
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  useEffect(() => {
    const fetchVideos =  () => {
      const token =  document.cookie.split('; ').filter(row => row.startsWith('access_token=')).map(c=>c.split('=')[1])[0];
      if(!token){
        dispatch(logout("no token found"));
      }
    };
    fetchVideos();
  }, []);


  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video = {video} />
      ))}
    </Container>
  );
};

export default Home;
