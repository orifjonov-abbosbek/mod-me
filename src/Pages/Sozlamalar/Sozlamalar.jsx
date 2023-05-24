import React, { useEffect } from "react";
import undov from "../../assets/undov.svg";
import redtrash from "../../assets/redtrash.svg";
import cursor from "../../assets/cursor.svg";
import qalam3 from "../../assets/qalam3.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { API_KEY } from "../../constants/api";

import "./Sozlamalar.scss";

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
  Textarea,
  Switch,
} from "@material-tailwind/react";

const Sozlamalar = () => {
  const [activeTab, setActiveTab] = React.useState("xodimlar");
  const [openRight, setOpenRight] = React.useState(false);
  const [openRight2, setOpenRight2] = React.useState(false);
  const [openRight3, setOpenRight3] = React.useState(false);

  const [text, setText] = React.useState("");
  const [characterCount, setCharacterCount] = React.useState(0);

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setCharacterCount(inputText.length);
  };

  const [rooms, setRooms] = React.useState([]);

  const [staff, setStaff] = React.useState([]);
  const TABLE_HEAD = [
    "Id",
    "Nomi",
    "Phone",
    "Role",
    "Tug'ilgan kuni",
    "Amallar",
  ];

  const TABLE_HEAD2 = ["Id", "Nomi"];

  const TABLE_HEAD3 = ["Nomi", "Amallar"];

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const openDrawerRight = () => {
    setOpenRight(true);
  };

  const openDrawerRight2 = () => {
    setOpenRight2(true);
  };

  const openDrawerRight3 = () => {
    setOpenRight3(true);
  };

  const closeDrawerRight = () => {
    setOpenRight(false);
  };
  const closeDrawerRight2 = () => {
    setOpenRight2(false);
  };

  const closeDrawerRight3 = () => {
    setOpenRight3(false);
  };

  const fetchStaffs = async () => {
    try {
      const staffs = await fetch(`${API_KEY}staff`);

      const data = await staffs.json();
      const modifiedData = data.data.map((groups, index) => ({
        ...groups,
        customId: index + 1,
      }));

      setStaff(modifiedData);

      console.log(modifiedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStaffs();
  }, []);

  const fetchRooms = async () => {
    const Rooms = await fetch(`${API_KEY}groups`);

    const data = await Rooms.json();
    const modifiedData = data.data.map((groups, index) => ({
      ...groups,
      customId: index + 1,
    }));

    setRooms(modifiedData);
  };

  console.log(rooms);

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="fixed right-0 top-0 bottom-0 z-[9999] p-4"
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
            <Option value="MuhammadilloXakimov">Muhammadillo Xakimov</Option>
            <Option value="AsalIleysboyeva">Asal Ileysboyeva</Option>
            <Option value="Ahmadshox ">Ahmad shox </Option>
            <Option value="ShaxzodaAbdullayeva ">Shaxzoda Abdullayeva </Option>
            <Option value="EzozaAbdullayeva ">Ezoza Abdullayeva </Option>
            <Option value="NafisaAhmadaliyeva ">Nafisa Ahmadaliyeva </Option>
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
            <Option> </Option>
          </Select>
        </div>

        <div className="mb-5  ">
          <Input label="Guruhni boshlash vaqti" type="date" className="" />
        </div>

        <Button className="w-28">Yuborish</Button>
      </Drawer>

      <Drawer
        className="p-4"
        placement="right"
        open={openRight2}
        onClose={closeDrawerRight2}
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
            Yangi xona qo'shish
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>

        <div className="mb-4">
          <Input className="" label="Nomi" />
        </div>

        <div className="mb-4">
          <Textarea label="Tavsif"></Textarea>
        </div>

        <Button>Yuborish</Button>
      </Drawer>

      <Drawer
        className="p-4"
        placement="right"
        open={openRight3}
        onClose={closeDrawerRight3}
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
            Yangi xona qo'shish
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight3}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>

        <div className="mb-4">
          <Textarea
            label="Xabarni kiriting"
            value={text}
            onChange={handleChange}
          />
        </div>

        <p className="text-sm mb-4 opacity-70">
          Character Count: {characterCount}
        </p>

        <Button>Yuborish</Button>
      </Drawer>

      <div className="pr-2">
        <Tabs
          className="tab "
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
            <Tab value="xodimlar">Xodimlar</Tab>
            <Tab value="Xonalar">Xonalar</Tab>
            <Tab value="avtosms">Avto-sms</Tab>
            <Tab value="smsshablonlar">SMS shablonlar</Tab>
          </TabsHeader>

          <TabsBody>
            <TabPanel className="absolute" value="xodimlar">
              <div className="pr-4">
                <div className="talabalar_head flex items-center text-2xl justify-between  pt-3 pb-4 pe-4  border-b-2 border-white mb-5">
                  <h2 className="font-semibold">Xodimlar</h2>
                  <Button onClick={openDrawerRight}>Yangisini qo'shish</Button>
                </div>

                <div className=" bg-white p-3">
                  <table className="w-full min-w-max table-auto bg-white p-2 text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th
                            key={head}
                            className="border-b border-blue-gray-100  bg-white p-4"
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
                      {staff.map((item, index) => {
                        const isLast = index === staff.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={item.name}>
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
                                color="blue-gray"
                                className="font-normal"
                              >
                                {item.rol}
                              </Typography>
                            </td>

                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                12/03/1989
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
                                <Button
                                  style={{ boxShadow: "none" }}
                                  color="white"
                                >
                                  <img
                                    className="w-[25px]"
                                    src={redtrash}
                                    alt=""
                                  />
                                </Button>
                              </Typography>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <ul className="ul">
                    <li className="li">
                      <span>Ma'lumotlar 15 dan 35 gacha, 234 ta dan</span>
                    </li>
                    <li className="li">
                      <p>1</p>
                      <p className="active">2</p>
                      <p>3</p>
                      <p>...</p>
                      <p>15</p>
                      <p>16</p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="Xonalar">
              <div className="pr-4">
                <div className="talabalar_head flex items-center text-2xl justify-between  pt-3 pb-4 pe-4  border-b-2 border-white mb-5">
                  <h2 className="font-semibold">Xonalar</h2>
                  <Button onClick={openDrawerRight2}>Yangisini qo'shish</Button>
                </div>

                <div className="bg-white p-3">
                  <table className="w-full min-w-max table-auto bg-white p-2 text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD2.map((head) => (
                          <th
                            key={head}
                            className="border-b border-blue-gray-100  bg-white p-4"
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
                      {rooms.map((item, index) => {
                        const isLast = index === rooms.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={item.customId}>
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
                                {item.room}
                              </Typography>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="avtosms">
              <div className="flex justify-between px-10">
                <div className="">
                  <h3 className="font-semibold mb-3">SMS Turi</h3>

                  <ul className="type">
                    <li>
                      <p className="flex items-center">
                        To'lov amalga oshirildi <img src={cursor} alt="" />
                      </p>

                      <Switch id="1" />
                    </li>
                    <li>
                      <p className="flex items-center">
                        Talaba guruhga qo'shildi <img src={cursor} alt="" />
                      </p>

                      <Switch id="2" />
                    </li>
                    <li>
                      <p className="flex items-center">
                        Talaba tug'ilgan kuni <img src={cursor} alt="" />
                      </p>

                      <Switch id="3" />
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3 className="font-semibold mb-3">SMS matn:</h3>

                  <Textarea
                    className="bg-white w-[300px] mb-3"
                    label="SMS matn"
                  />

                  <h3 className="font-semibold mb-4"> Yuborilgan SMS misoli</h3>

                  <p className="m-5 ">SMS matn</p>
                  <div className=" flex justify-end">
                    <Button>Saqlash</Button>
                  </div>
                </div>

                <div className="">
                  <h3 className="font-semibold mb-3">Tavsif</h3>

                  <ul className="desc pr-10">
                    <li>
                      <p className="font-semibold mb-3">
                        Mavjud o'zgaruvchilar
                      </p>
                    </li>
                    <li>
                      <p className="mb-2">(STUDENT) - talabaning ismi</p>
                      <p className="mb-2">(GROUP) - guruh nomi</p>
                      <p className="mb-2">(SUM) - to'lob miqdori</p>
                      <p className="mb-2">(LC) - o'quv markazingiz nomi</p>
                      <p className="mb-2">(TEACHER) - auto-sms-teacher</p>
                      <p className="mb-2">(TIME) - vaqt</p>
                      <p className="mb-2">(ROOM) - xona</p>
                      <p className="mb-2">(DAYS) - kunlar</p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="smsshablonlar">
              <div className="">
                <div className="talabalar_head flex items-center text-2xl justify-between  pt-3 pb-4 pe-4  border-b-2 border-white mb-5">
                  <h2 className="font-semibold">Xodimlar</h2>
                  <Button onClick={openDrawerRight3}>Yangisini qo'shish</Button>
                </div>

                <div className=" bg-white flex flex-col gap-y-5 p-5 rounded-lg">
                  <ul className="smsshablon bg-white   rounded-lg">
                    <li className="flex justify-between font-semibold mb-4  border-b-1">
                      <p>Nomi</p> <p>Amallar</p>
                    </li>

                    <li className="flex justify-between  mb-4">
                      <p>
                        Assalomu aleykusm, iltimos to'lovni o'z vaqtida amalga
                        oshiring
                      </p>
                      <div className=" flex gap-x-5">
                        <button>
                          <img src={qalam3} alt="" />
                        </button>
                        <button>
                          <img src={redtrash} alt="" />
                        </button>
                      </div>
                    </li>
                    <li className="flex justify-between mb-4">
                      <p>
                        Assalomu aleykum, webinarda qatnashganingizdan
                        hursandmiz
                      </p>
                      <div className=" flex gap-x-5">
                        <button>
                          <img src={qalam3} alt="" />
                        </button>
                        <button>
                          <img src={redtrash} alt="" />
                        </button>
                      </div>
                    </li>

                    <li className="flex justify-between mb-4">
                      <p>
                        Assalomu aleykum, siz kutayotgan guruh ochildi!
                        Batafsil: https://
                      </p>
                      <div className=" flex gap-x-5">
                        <button>
                          <img src={qalam3} alt="" />
                        </button>
                        <button>
                          <img src={redtrash} alt="" />
                        </button>
                      </div>
                    </li>

                    <li className="flex justify-between mb-4">
                      <p>
                        Assalomu aleykum, bugungi bayram bilan sizni o'z
                        jamoamiz bilan qutlaymiz
                      </p>
                      <div className=" flex gap-x-5">
                        <button>
                          <img src={qalam3} alt="" />
                        </button>
                        <button>
                          <img src={redtrash} alt="" />
                        </button>
                      </div>
                    </li>
                  </ul>

                  <ul className="ul p-0">
                    <li className="li">
                      <span>Ma'lumotlar 15 dan 35 gacha, 234 ta dan</span>
                    </li>
                    <li className="li">
                      <p>1</p>
                      <p className="active">2</p>
                      <p>3</p>
                      <p>...</p>
                      <p>15</p>
                      <p>16</p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default Sozlamalar;
