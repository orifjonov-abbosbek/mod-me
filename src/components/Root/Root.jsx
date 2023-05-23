import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.scss";
import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Students from "../../Pages/Students/Students";
import StudentsDisplay from "../studentDisplay/StudentsDisplay";
import Teachers from "../../Pages/Teachers/Teachers";
import Kurslar from "../../Pages/Kurslar/Kurslar";
import Guruhlar from "../../Pages/Guruhlar/Guruhlar";
import GuruhlarDetails from "../guruhlarDetails/GuruhlarDetails";
import Lidlar from "../../Pages/Lidlar/Lidlar";
import Sozlamalar from "../../Pages/Sozlamalar/Sozlamalar";
import { StudentProvider } from "../../context/studenContext";
import { GroupProvider } from "../../context/groupContext";

const Root = () => {
  return (
    <>
      <Header />
      <StudentProvider>
        <GroupProvider>
          <div className="flex gap-5">
            <Sidebar />
            <div className="home_box w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/talabalar" element={<Students />} />
                <Route path="/talabalar/:id" element={<StudentsDisplay />} />
                <Route path="/kurslar" element={<Kurslar />} />
                <Route path="/staffs" element={<Teachers />} />
                <Route path="/guruhlar" element={<Guruhlar />} />
                <Route path="/guruhlar/:id" element={<GuruhlarDetails />} />
                <Route path="/lidlar" element={<Lidlar />} />
                <Route path="/settings" element={<Sozlamalar />} />
              </Routes>
            </div>
          </div>
        </GroupProvider>
      </StudentProvider>
    </>
  );
};

export default Root;
