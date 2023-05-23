import React, { useContext } from "react";
import title from "../../assets/title.svg";
import "./student_details.scss";
import reverse from "../../assets/reverse.svg";
import payment from "../../assets/payment.svg";
import back from "../../assets/back.svg";
import calc from "../../assets/calc.svg";
import flag from "../../assets/flag.svg";
import qalam2 from "../../assets/qalam2.svg";
import sms from "../../assets/sms.svg";
import undov from "../../assets/undov.svg";

import { XMarkIcon } from "@heroicons/react/24/outline";

import trash from "../../assets/trash.svg";

import {
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Drawer,
  Typography,
  IconButton,
  Input,
  Radio,
  Textarea,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { StudentContext } from "../../context/studenContext";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const { data } = useContext(StudentContext);

  const { id } = useParams();

  const filteredData = data.filter((item) => item.customId === Number(id));

  const [Data = {}] = filteredData;

  console.log(Data);
  const [selectedTemplate, setSelectedTemplate] = React.useState("");

  const [openRight, setOpenRight] = React.useState(false);
  const [openRight2, setOpenRight2] = React.useState(false);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  const templates = [
    "Assalomu aleykum, iltimos to'lovni o'z vaqtida amalga oshiring",
    "Assalomu aleykum, webinarda qatnashganingizdan hursandmiz",
    "Assalomu aleykum, siz kutayotgan guruh ochildi! Batafsil: https://",
    "Assalomu aleykum, bugungi bayram bilan sizni o'z jamoamiz bilan qutlaymiz ",
  ];

  const openDrawerRight = () => {
    setOpenRight(true);
  };

  const openDrawerRight2 = () => {
    setOpenRight2(true);
  };

  const closeDrawerRight2 = () => {
    setOpenRight2(false);
  };

  const closeDrawerRight = () => {
    setOpenRight(false);
  };

  const [activeTab, setActiveTab] = React.useState("profile");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  if (!data) {
    return <div>Student not found</div>;
  }

  return (
    <>
      <Dialog open={isDialogOpen} handler={handleDialogToggle}>
        <DialogHeader>Talabani o'chirib tashlash</DialogHeader>

        <DialogBody divider>
          Ushbu talabani guruhdan olib tashlamoqchimisiz?
        </DialogBody>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleDialogToggle}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDialogToggle}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Drawer
        size={500}
        placement="right"
        open={openRight2}
        onClose={setOpenRight2}
        className="custom_drawer p-4"
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
            Talabaga SMS yuborish
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight2}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>

        <div className="">
          <h3 className="font-semibold mb-4">Yuboruvchi: 3700</h3>

          <Textarea value={selectedTemplate} label="Xabarni kiriting" />

          <h3 className="font-semibold mt-5">SMS shablonlar</h3>

          <div className="template_box">
            {templates.map((template, index) => (
              <div
                key={index}
                className="template cursor-pointer text-black  mb-2"
                onClick={() => handleTemplateClick(template)}
              >
                {template}
              </div>
            ))}
          </div>
        </div>

        <Button className="mt-5">Yuborish</Button>
      </Drawer>

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
            Yangi kurs qo'shish
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
          <div className="country_code  absolute text-black p-2 bg-blue-gray-100 ">
            +998
          </div>

          <Input
            type="tel"
            placeholder="Mobile Number "
            className="country_input pl-20 outline-none"
            containerProps={{
              className: "min-w-0",
            }}
          />
        </div>

        <div className="input_sec">
          <Input label="Ismi" className="mb-5" />
          <Input label="Tug'ilgan sanasi" type="date" className="" />

          <div className="flex gap-5">
            <Radio id="html" name="type" label="Erkak" />
            <Radio id="react" name="type" label="Ayol" defaultChecked />
          </div>
          <div className="">
            <Textarea label="Tavsiv" />
          </div>

          <Button className="w-28">Yuborish</Button>
        </div>
      </Drawer>

      <section>
        <h2 className="text-2xl pt-3 mb-4">{Data.name}</h2>

        <div className="section__wrapper flex justify-between">
          <div className="card h-[230px]  p-3 flex bg-white">
            <div className=" ">
              <h3 className="font-semibold mb-5">{Data.name}</h3>
              <p className="flex font-xs gap-2">
                Balansi:
                <span className="font-semibold"> 500 so'm </span>
              </p>
              <p className="mb-10">
                Telefon:{" "}
                <span className="font-semibold">+{Data.phoneNumber}</span>
              </p>
              <p className="mb-5">
                Tug'ilgan kuni:
                <span className="font-semibold">22/08/2002</span>
              </p>
              <div className="btns flex items-center">
                <Button className="button">
                  <img src={title} alt="" />
                </Button>
                <Button className="button">
                  <img src={reverse} alt="" />
                </Button>
                <Button className="button">
                  <img src={payment} alt="" />
                </Button>
                <Button className="button">
                  <img src={back} alt="" />
                </Button>
                <Button className="button">
                  <img src={calc} alt="" />
                </Button>
              </div>
            </div>
            <div className="right_btns flex flex-col ">
              <Button className="button">
                <img src={flag} alt="" />
              </Button>
              <Button onClick={openDrawerRight} className="button">
                <img src={qalam2} alt="" />
              </Button>
              <Button onClick={openDrawerRight2} className="button">
                <img src={sms} alt="" />
              </Button>
              <Button onClick={handleDialogToggle} className="button">
                <img src={trash} alt="" />
              </Button>
            </div>
          </div>
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
              <Tab value="profile">Profile</Tab>
              <Tab value="settings">Qo'ng'iroqlar tarixi</Tab>
              <Tab value="dashboard">Tarix</Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="profile">
                <div className="profile_tab_content">
                  <div className="title flex">
                    <p>3D's MAX</p>
                    <img src={flag} alt="" />
                  </div>

                  <h3 className="guruhlar">Guruxlar</h3>

                  <div className="card bg-white p-3">
                    <div className="card__head flex justify-between">
                      <div className="left">
                        <p className="font-semibold">3D's MAX</p>
                        <p className="font-semibold text-lg">
                          Fotima Yuldasheva
                        </p>
                      </div>
                      <div className="w-[101px]">
                        <p>01/02/2023 - 25/03/2023</p>
                        <p>Boshqa * 08:00</p>
                      </div>
                    </div>

                    <p className="text-base">
                      Holat:{" "}
                      <span className="font-semibold text-base">
                        Harakatsiz (Sinov)
                      </span>
                    </p>

                    <p>
                      Talaba qo'shilgan sana:{" "}
                      <span className="font-semibold text-base">
                        {" "}
                        20/07/2023{" "}
                      </span>
                    </p>
                    <p>
                      Bu talaba uchun narx:{" "}
                      <span className="font-semibold text-base">
                        {" "}
                        800 000 so'm{" "}
                      </span>
                    </p>
                  </div>

                  <h3 className="guruhlar">To'lovlar</h3>

                  <div className="card2 w-full p-5 bg-white">
                    <p className="text-center mb-5">Ma`lumotlar topilmadi</p>

                    <ul>
                      <li>
                        <span>Ma'lumotlar 15 dan 35 gacha, 234 ta dan</span>
                      </li>
                      <li>
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
              <TabPanel value="settings">
                <div>
                  <div className="card2 w-full p-5 bg-white">
                    <p className="text-center mb-5">Ma`lumotlar topilmadi</p>

                    <ul>
                      <li>
                        <span>Ma'lumotlar 15 dan 35 gacha, 234 ta dan</span>
                      </li>
                      <li>
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
              <TabPanel value="dashboard">
                <div>Student history</div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default StudentDetails;
