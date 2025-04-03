import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Nav1 from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import LectureImage from '../components/LectureImage';
import { server } from '../main';

const Lectures = () => {
  const { documentId } = useParams();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const { data } = await axios.get(`${server}/api/lectures-webinars/${documentId}?populate=*`);
                setTitle(data.data.Title); // Corrected key
                setDate(data.data.Published_Date); // Corrected key
                setUrl(data.data.Lectures[0]?.url || ""); // Get first URL safely


                console.log(title);
                console.log(url);
                console.log(date);
                

            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchDocument();
    }, [documentId]); // Add dependency
  return (
    <>
     
      <LectureImage title={title} date={date} url={url}/>
    
    </>
  )
}

export default Lectures
