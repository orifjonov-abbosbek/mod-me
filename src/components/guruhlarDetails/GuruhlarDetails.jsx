import React, { useContext, useEffect } from "react";
import { GroupContext } from "../../context/groupContext";
import { useParams } from "react-router-dom";
import trash from "../../assets/trash.svg";
import qalam2 from "../../assets/qalam2.svg";
import pause from "../../assets/pause.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import {
  Button,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Input

} from "@material-tailwind/react";
import { API_KEY } from "../../constants/api";
import "./GruruhlarDetails.scss";
import thredot from "../../assets/thredot.svg";

const GuruhlarDetails = () => {
  const { data } = useContext(GroupContext);
  const [studentData, setStudentData] = React.useState([]);

  const { id } = useParams();
  const filteredData = data.filter((item) => item.customId === Number(id));
  const TABLE_HEAD = ["Name", "phone", "action"];

  const TAB_HEAD = ["Name", "Phone", "Individual narx", ""];
  let dates = [];
  if (filteredData.length > 0) {
    const [firstData] = filteredData;
    dates = firstData.date;
  }
  console.log(dates);
  const [Data = {}] = filteredData;
  const fetchStudents = async () => {
    try {
      const studentsResponse = await fetch(`${API_KEY}student`);
      const studentsData = await studentsResponse.json();
      console.log(studentsData);

      const studentsWithAttendance = studentsData.data.map((student) => ({
        ...student,
        attendance: ["minus", "minus", "minus", "minus", "minus"],
      }));

      setStudentData(studentsWithAttendance);
      console.log(studentsWithAttendance);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  const [activeTab, setActiveTab] = React.useState("davomat");
  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const toggleStatus = (studentIndex, dayIndex) => {
    const updatedStudents = [...studentData];
    const currentStatus = updatedStudents[studentIndex].attendance[dayIndex];

    updatedStudents[studentIndex].attendance[dayIndex] =
      currentStatus === minus ? plus : minus;
    setStudentData(updatedStudents);
  };

  return (
    <>
      <div className="mb-5">
        <h2 className="text-2xl">{`${Data.customId}*${Data.category}*${Data.teacher}`}</h2>
      </div>

      <div className="content_wrapper flex gap-x-10">
        <div className="card bg-white rounded-lg p-5">
          <div className="flex items-center justify-between">
            <p>{Data.customId}</p>
            <div className="flex items-center gap-y-5">
              <Button className="button" color="white">
                <img className="img" src={qalam2} alt="" />
              </Button>
              <Button className="button" color="white">
                <img className="img" src={trash} alt="" />
              </Button>
            </div>
          </div>

          <p className="mb-4">
            {Data.category} * {Data.teacher}
          </p>

          <div className="mb-4">
            <p className="font-semibold">
              <span className="text-sm font-normal">Narxi:</span> 600 000
            </p>
            <p className="font-semibold">
              <span className="text-sm font-normal">Kunlar:</span> {Data.day}
            </p>
          </div>

          <div className="mb-2">
            <p className="font-semibold">
              <span className="text-sm font-normal">Xonalar:</span> {Data.room}
            </p>
            <p className="font-semibold">
              <span className="text-sm font-normal">Boshlash:</span>{" "}
              {Data.startTime}
            </p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">
              <span className="text-sm font-normal">Boshlash sanasi: </span>
              {Data.startGroup && Data.startGroup.substring(0, 10)}
            </p>
            <p className="font-semibold">
              <span className="text-sm font-normal">Tugash sanasi: </span>
              {Data.endGroup && Data.endGroup.substring(0, 10)}
            </p>
          </div>

          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentData.map((item, index) => {
                const isLast = index === studentData.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.name}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.phoneNumber}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue"
                        className="font-medium"
                      >
                        <Menu placement="right">
                          <MenuHandler>
                            <Button className="button" color="white">
                              <img src={thredot} alt="" />
                            </Button>
                          </MenuHandler>
                          <MenuList>
                            <MenuItem className="flex items-center gap-x-2">
                              <img className="opacity-7" src={pause} alt="" />{" "}
                              Muzlatish
                            </MenuItem>
                            <MenuItem className="flex items-center gap-x-2">
                              <img
                                className="opacity-7"
                                style={{ width: "20px" }}
                                src={trash}
                                alt=""
                              />{" "}
                              Guruhdan olib tashlash
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="w-[70%] pr-5">
          <Tabs
            className="tab"
            id="custom-animation"
            value={activeTab}
            onChange={handleTabChange}
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabsHeader>
              <Tab value="davomat">Davomat</Tab>
              <Tab value="chegirmalar">Chegirmalar</Tab>
            </TabsHeader>

            <TabsBody>
              <TabPanel value="davomat">
                <div className="davomat bg-white p-4">
                  <table className="w-[100%]">
                    <thead>
                      <tr>
                        <td>Name</td>
                        {dates.length > 0 &&
                          Object.keys(dates[0])
                            .slice(0, 5)
                            .map((date, index) => {
                              const day = date.split("-")[2]; // Extract the day portion from the date
                              return (
                                <td className="pl-[26px]" key={index}>
                                  {day}
                                </td>
                              );
                            })}
                      </tr>
                    </thead>
                    <tbody>
                      {studentData.map((student, studentIndex) => (
                        <tr key={studentIndex} className="border-b-2">
                          <td className="text-sm">{student.name}</td>
                          {student.attendance.map((status, dayIndex) => (
                            <td key={dayIndex} className="">
                              <Button
                                style={{
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                  width: "fit-content",
                                }}
                                className="rbutton w-[120px] mx-auto"
                                color=""
                                onClick={() =>
                                  toggleStatus(studentIndex, dayIndex)
                                }
                              >
                                {status === minus ? (
                                  <img src={minus} alt="minus" />
                                ) : (
                                  <img src={plus} alt="plus" />
                                )}
                              </Button>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>

              <TabPanel value="chegirmalar">
                <div className="bg-white p-4">
                  <h3 className="font-semibold">Chegirmalar</h3>

                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TAB_HEAD.map((head) => (
                          <th
                            key={head}
                            className="border-b-2 border-t-2 border-blue-gray-100 bg-blue-gray-50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal leading-none opacity-70"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {studentData.map((item, index) => {
                        const isLast = index === studentData.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={name}>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {item.name}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {item.phoneNumber}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                as="a"
                                href="#"
                                variant="small"
                                color="blue"
                                className="font-medium"
                              >
                                <Input variant="outlined" label="Narx kiriting" />
                              </Typography>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default GuruhlarDetails;
