import React, { createContext, useState, useEffect } from "react";
import { API_KEY } from "../constants/api";

export const GroupContext = createContext();
export const GroupProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchGroups = async () => {
    try {
      const res = await fetch(`${API_KEY}groups`);
      const group = await res.json();
      const modifiedData = group.data.map((groups, index) => ({
        ...groups,
        customId: index + 1,
      }));
      setData(modifiedData);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);


  return (
    <GroupContext.Provider value={{ data, setData }}>
      {children}
    </GroupContext.Provider>
  );
};
