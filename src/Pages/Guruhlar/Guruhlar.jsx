import React, { useContext, useEffect } from "react";
import {
  Typography,
  Button,
  Drawer,
  IconButton,
  Input,
  Select,
  Option,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Card,
} from "@material-tailwind/react";
import undov from "../../assets/undov.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import qalam from "../../assets/qalam.svg";
import { GroupContext } from "../../context/groupContext";
import { Link } from "react-router-dom";

const Guruhlar = () => {
  const [openRight, setOpenRight] = React.useState(false);
  const [room, setRoom] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState("Active");

  const { data, setData } = useContext(GroupContext);
  console.log(data);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const openDrawerRight = () => {
    setOpenRight(true);
  };

  const closeDrawerRight = () => {
    setOpenRight(false);
  };

  const TABLE_HEAD = ["Id", "Nomi", "O'qituvchi", "vaqt", "Kunlar", "Holat"];

  console.log(room);

  return (
    <>
      <div className="pr-4">
        <div className="talabalar_head flex items-center text-2xl justify-between  pt-3 pb-4 pe-4  border-b-2 border-white mb-5">
          <h2 className="font-semibold">Guruhlar</h2>
          <Button onClick={openDrawerRight}>Yangisini qo'shish</Button>
          <Drawer
            placement="right"
            open={openRight}
            onClose={closeDrawerRight}
            className="p-4"
          >
            <div className="head_modal mb-6 flex items-center justify-between">
              <Typography
                variant="h5"
                color="gray"
                className="flex items-center gap-2 font-semibold text-sm"
              >
                <img
                  style={{ width: "1.5rem", opacity: "0.5" }}
                  src={undov}
                  alt=""
                />
                Yangi xodim qo'shish
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawerRight}
              >
                <XMarkIcon strokeWidth={2} className="h-5 w-5" />
              </IconButton>
            </div>

            <div className="relative flex w-full mb-4 max-w-[24rem]">
              <Input
                type="text"
                placeholder="Nomi "
                className="country_input pl-4 outline-none"
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>

            <div className="mb-5">
              <Select className="pt-5" label="Kursni tanlang">
                <Option value="Targetolog"> Targetolog</Option>
                <Option value="Web"> Web</Option>
                <Option value="Websiteqilish"> Web site qilish</Option>
                <Option value="EnglishBeginner"> English Beginner</Option>
                <Option value="RusTili"> Rus Tili</Option>
                <Option value="SMM"> SMM</Option>
                <Option value="3DSMAX"> 3D's MAX</Option>
                <Option value="SMM"> SMM</Option>
              </Select>
            </div>

            <div className="mb-5">
              <Select className="pt-5 " label="O'qituvchini tanlang">
                <Option value="FotimaYuldasheva">Fotima Yuldasheva</Option>
                <Option value="MuhammadilloXakimov">
                  Muhammadillo Xakimov
                </Option>
                <Option value="AsalIleysboyeva">Asal Ileysboyeva</Option>
                <Option value="Ahmadshox ">Ahmad shox </Option>
                <Option value="ShaxzodaAbdullayeva ">
                  Shaxzoda Abdullayeva{" "}
                </Option>
                <Option value="EzozaAbdullayeva ">Ezoza Abdullayeva </Option>
                <Option value="NafisaAhmadaliyeva ">
                  Nafisa Ahmadaliyeva{" "}
                </Option>
                <Option value="MalikaElnazarova ">Malika Elnazarova </Option>
              </Select>
            </div>

            <div className="mb-5">
              <Select className="pt-5" label="Kunlar">
                <Option value="juftkunlar">Juft Kunlar</Option>
                <Option value="toqtkunlar">Toq Kunlar</Option>
                <Option value="damolishkunlari">Dam olish Kunlari</Option>
                <Option value="harkuni">Har Kuni</Option>
                <Option value="boshqa">Boshqa</Option>
              </Select>
            </div>

            <div className="mb-5">
              <Select className="pt-5" label="Xonani tanlang">
                {room.map((item) => (
                  <Option value={item.room}> {item.room}</Option>
                ))}
              </Select>
            </div>

            <div className="mb-5  ">
              <Input label="Guruhni boshlash vaqti" type="date" className="" />
            </div>

            <Button className="w-28">Yuborish</Button>
          </Drawer>
        </div>
      </div>

      <div className="pr-4">
        <div className="bg-white p-5 rounded-lg pr-5">
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
              <Tab value="Active">Active</Tab>
              <Tab value="Archive">Archive</Tab>
            </TabsHeader>

            <TabsBody>
              <TabPanel value="Active">
                <table className="w-full min-w-max  text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b p-4">
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
                    {data.map((item, index) => {
                      const isLast = index === data.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={item.id}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.customId}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.category}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.teacher}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.startTime}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.day}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Link to={`/guruhlar/${item.customId}`}>
                              <Typography
                                as="a"
                                href="#"
                                variant="small"
                                color="blue"
                                className="font-medium"
                              >
                                <img src={qalam} alt="" />
                              </Typography>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>

              <TabPanel value="Archive">
                <table className="w-full min-w-max  text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b p-4">
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
                    {data.map((item, index) => {
                      const isLast = index === data.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={item.id}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.customId}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.category}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.teacher}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.startTime}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.day}
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
                              <img src={qalam} alt="" />
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Guruhlar;
