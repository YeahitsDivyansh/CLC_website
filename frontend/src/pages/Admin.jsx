import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


 
const Admin = () => {
  const { user, logout } = useAuth();  
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [activeTab, setActiveTab] = useState("examinations");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    document: null,
    image: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let documentUrl = "";
      let imageUrl = "";
  
      // Upload document if present
      if (formData.document) {
        const docRef = ref(storage, `documents/${formData.document.name}`);
        await uploadBytes(docRef, formData.document);
        documentUrl = await getDownloadURL(docRef);
      }
  
      // Upload image if present
      if (formData.image) {
        const imgRef = ref(storage, `images/${formData.image.name}`);
        await uploadBytes(imgRef, formData.image);
        imageUrl = await getDownloadURL(imgRef);
      }
  
      // Save data to Firestore
      await addDoc(collection(db, activeTab), {
        title: formData.title,
        description: formData.description,
        date: formData.date,
        documentUrl,
        imageUrl,
      });
  
      alert(`Submitted to ${activeTab}`);
      setFormData({ title: "", description: "", date: "", document: null, image: null });
    } catch (error) {
      console.error("Error submitting:", error);
    }
  };
  
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center relative">
        {/* Logout Button */}
        <button
          className="absolute top-4 right-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
          onClick={logout}
        >
          Logout
        </button>
    
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
    
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {[
            { id: "examinations", label: "Examinations" },
            { id: "notifications", label: "Notifications" },
            { id: "lectures", label: "Lectures & Seminars" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
    
        {/* Form */}
        <form
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
          {(activeTab === "examinations" || activeTab === "notifications") && (
            <input
              type="file"
              name="document"
              onChange={handleFileChange}
              className="w-full p-2 mb-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          )}
          {activeTab === "lectures" && (
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 mb-3 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit {activeTab}
          </button>
        </form>
      </div>
    );
};

export default Admin;
