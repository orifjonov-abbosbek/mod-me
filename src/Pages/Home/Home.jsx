import React, { useRef } from "react";
import user from "../../assets/user.svg";
import talabalar from "../../assets/talabalar.svg";
import guruhlar from "../../assets/guruhlar.svg";
import qarzlar from "../../assets/qarzlar.svg";
import sinov from "../../assets/sinov.svg";
import ReusablestatCard from "../../components/ReusablestatCard/ReusablestatCard";

import Calendar from '../../components/EventCalendar/EventCalendar'
const Home = () => {

  return (
    <>
      <div className="flex gap-5 w-full pe-5">
        <ReusablestatCard number={345} photo={user} title={"Faol lidlar"} />
        <ReusablestatCard
          number={236}
          photo={talabalar}
          title={"Faol talabalar"}
        />
        <ReusablestatCard number={186} photo={guruhlar} title={"Guruhlar"} />
        <ReusablestatCard number={155} photo={qarzlar} title={"Qarzdorlar"} />
        <ReusablestatCard number={451} photo={sinov} title={"Sinov Darsida"} />
      </div>

      <div className=" mt-5 pe-5">
        <Calendar />
      </div>
    </>
  );
};

export default Home;
