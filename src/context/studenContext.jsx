import React, { createContext, useState, useEffect } from "react";
import { API_KEY } from "../constants/api";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_KEY}student`);
      const mal = await res.json();
      const modifiedData = mal.data.map((student, index) => ({
        ...student,
        customId: index + 1,
      }));
      setData(modifiedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <StudentContext.Provider value={{ data, setData }}>
      {children}
    </StudentContext.Provider>
  );
};
