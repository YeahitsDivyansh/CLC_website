import { createContext, useContext, useState } from "react";
import axios from "axios";
import { server } from "../main"; 


const NotificationsContext = createContext();

export const NotificationsContextProvider = ({ children }) => {
    const [Announcements, setAnnouncements] = useState([]);
    const fetchAnnouncements = async () => {
        
        try {
            const { data } = await axios.get(`${server}/api/Announcements?populate=*`);
            setAnnouncements(data.data);
        } catch (error) {
            console.log(error);
        } 
    };

    const [Lectures, setLectures] = useState([]);
    
    

    const fetchLectures = async () => {
        
        try {
            const { data } = await axios.get(`${server}/api/lectures-webinars?populate=*`);
            setLectures(data.data);
        } catch (error) {
            console.log(error);
        } 
    };

    
    

    const [Examinations, setExaminations] = useState([]);
    
    

    const fetchExaminations = async () => {
        
        try {
            const { data } = await axios.get(`${server}/api/examinations?populate=*`);
            setExaminations(data.data);
        } catch (error) {
            console.log(error);
        } 
    };
    
   return (
    <NotificationsContext.Provider value={{ Announcements, fetchAnnouncements , Examinations, fetchExaminations ,Lectures ,fetchLectures}}>
      {children}
    </NotificationsContext.Provider>
  );
};

 
export const NotificationsData = () => useContext(NotificationsContext);
