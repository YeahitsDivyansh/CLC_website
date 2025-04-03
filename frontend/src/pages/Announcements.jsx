import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Documents from '../components/Documents';
import Nav1 from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import { server } from '../main';

const Announcements = () => {
    const { documentId } = useParams();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const { data } = await axios.get(`${server}/api/announcements/${documentId}?populate=*`);
                setTitle(data.data.Title); // Corrected key
                setDate(data.data.Published_Date); // Corrected key
                setUrl(data.data.Hyperlink[0]?.url || ""); // Get first URL safely

             


            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchDocument();
    }, [documentId]); // Add dependency

    return (
      <>
       
        <Documents title={title} date={date} url={url}/>
 
      </>
    );
}


export default Announcements
