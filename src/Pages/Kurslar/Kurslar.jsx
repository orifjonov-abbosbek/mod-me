import React from "react";
import {
  Card,
  Typography,
  Button,
  Drawer,
  IconButton,
  Input,
  Radio,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import undov from "../../assets/undov.svg";
import books from "../../assets/books.png";
import "./Kurslar.scss";

const Kurslar = () => {
  const [openRight, setOpenRight] = React.useState(false);
  const [select, setSelect] = React.useState([]);

  const openDrawerRight = () => {
    setOpenRight(true);
  };

  const closeDrawerRight = () => {
    setOpenRight(false);
  };

  return (
    <>
      <div className="talabalar_head flex items-center text-2xl justify-between  pt-3 pb-4 pe-4 border-b-2 border-white mb-5">
        <h2 className="font-semibold">Kurslar</h2>
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
            <div className="country_code w-[60px] h-[40px] text-lg  absolute text-black p-2 bg-blue-gray-100 ">
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

          <div className="input_sec ">
            <Input label="Ismi" className="mb-5" />
            <Input label="Tug'ilgan sanasi" type="date" className="" />

            <div className="input_box ">
              <Radio
                className="radio-small"
                id="online"
                name="type"
                label="online"
              />
              <Radio
                className="text-sm"
                id="offline"
                name="type"
                label="offline"
                defaultChecked
              />
              <Radio
                className="text-sm"
                id="react"
                name="type"
                label="Video Kurs"
                defaultChecked
              />
            </div>

            <div className="">
              <Select label="Select Version">
                {select.map((item, index) => (
                  <Option value={item.title} key={index}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="">
              <Textarea label="Tavsiv" />
            </div>

            <Button className="w-28">Yuborish</Button>
          </div>
        </Drawer>
      </div>

      <ul className="card_list">
        <li>
          <div className="img_box flex justify-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={books}
              alt=""
            />
          </div>
          <div className="content">
            <p className="font-semibold text-md">Targetolog</p>
            <p className="text-sm">900 000 UZS</p>
          </div>
        </li>
        <li>
          <div className="img_box flex justify-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={books}
              alt=""
            />
          </div>
          <div className="content">
            <p className="font-semibold text-md">Web</p>
            <p className="text-sm">100 000 UZS</p>
          </div>
        </li>
        <li>
          <div className="img_box flex justify-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={books}
              alt=""
            />
          </div>
          <div className="content">
            <p className="font-semibold text-md">Web site qilish</p>
            <p className="text-sm">400 000 UZS</p>
          </div>
        </li>
        <li>
          <div className="img_box flex justify-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={books}
              alt=""
            />
          </div>
          <div className="content">
            <p className="font-semibold text-md">English beginner</p>
            <p className="text-sm">500 000 UZS</p>
          </div>
        </li>
        <li>
          <div className="img_box flex justify-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={books}
              alt=""
            />
          </div>
          <div className="content">
            <p className="font-semibold text-md">Rus tili</p>
            <p className="text-sm">400 000 UZS</p>
          </div>
        </li>
        <li>
          <div className="img_box flex justify-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={books}
              alt=""
            />
          </div>
          <div className="content">
            <p className="font-semibold text-md">SMM</p>
            <p className="text-sm">200 000 UZS</p>
          </div>
        </li>
        <li>
          <div className="img_box flex justify-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={books}
              alt=""
            />
          </div>
          <div className="content">
            <p className="font-semibold text-md">3D's MAX</p>
            <p className="text-sm">800 000 UZS</p>
          </div>
        </li>
        <li>
          <div className="img_box flex justify-center">
            <img
              style={{ width: "150px", height: "150px" }}
              src={books}
              alt=""
            />
          </div>
          <div className="content">
            <p className="font-semibold text-md">Web</p>
            <p className="text-sm">400 000 UZS</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Kurslar;
