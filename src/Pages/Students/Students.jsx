import React, { useEffect, useState, useContext } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Radio,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import qalam from "../../assets/qalam.svg";
import undov from "../../assets/undov.svg";
import { Link } from "react-router-dom";
import { StudentContext } from "../../context/studenContext";
import { API_KEY } from "../../constants/api";
import "./Students.scss";

const Students = () => {
  const [openRight, setOpenRight] = useState(false);

  const [select, setSelect] = React.useState([]);

  const { data, setData } = useContext(StudentContext);

  const fetchData = async () => {
    const res = await fetch(`${API_KEY}category`);

    const option = await res.json();

    setSelect(option.data);

    console.log(option.data);
  };

  console.log(select);

  useEffect(() => {
    fetchData();
  }, []);

  const openDrawerRight = () => {
    setOpenRight(true);
  };

  const closeDrawerRight = () => {
    setOpenRight(false);
  };

  return (
    <section className="talabalar">
      <div className="talabalar_head flex justify-between pe-3 pt-3">
        <h2>Talabalar</h2>
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

      <table>
        <thead>
          <tr className="flex gap-20">
            <th>ID</th>
            <th className="name">Nomi</th>
            <th className="phone">Phone</th>
            <th className="balance">Balance</th>
            <th>Holat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr className="flex gap-20" key={student.customId}>
              <td className="id">{student.customId}</td>
              <td className="name">{student.name}</td>
              <td className="phone">{student.phoneNumber}</td>
              <td className="balance">500</td>
              <td className="holat">
                <Link to={`/talabalar/${student.customId}`}>
                  <button>
                    <img src={qalam} alt="" />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="5">
              <ul>
                <li>
                  <b>Ma'lumotlar 15 dan 35 gacha, 234 ta dan</b>
                </li>
                <li>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>...</p>
                  <p>15</p>
                  <p>16</p>
                </li>
              </ul>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default Students;
