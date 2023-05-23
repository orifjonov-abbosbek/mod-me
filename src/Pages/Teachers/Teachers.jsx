import React, { useEffect } from "react";
import "./Teachers.scss";
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

import { API_KEY } from "../../constants/api";
import undov from "../../assets/undov.svg";

const Teachers = () => {
  const TABLE_HEAD = ["Id", "Nomi", "Phone", ""];
  const [staff, setStaffs] = React.useState([]);
  const [openRight, setOpenRight] = React.useState(false);
  const [select, setSelect] = React.useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_KEY}staff`);
      const data = await res.json();

      const modifiedData = data.data.map((student, index) => ({
        ...student,
        customId: index + 1,
      }));

      setStaffs(modifiedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchSelect = async () => {
    try {
      const res = await fetch(`${API_KEY}category`);

      const data = await res.json();
      console.log(data);

      setSelect(data.data)

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSelect();
  }, []);

  const openDrawerRight = () => {
    setOpenRight(true);
  };

  const closeDrawerRight = () => {
    setOpenRight(false);
  };

  console.log(staff);

  return (
    <>
      <div className=" pr-5 ">
        <div className="talabalar_head flex items-center text-2xl justify-between  pt-3 pb-4 pe-4 border-b-2 border-white mb-5">
          <h2 className="font-semibold">O'qituvchilar</h2>
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

        <Card className="overflow-scroll h-full w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 p-4">
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default Teachers;
