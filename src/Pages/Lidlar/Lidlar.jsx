import React, { useState } from "react";
import "./Lidlar.scss";

import vthredot from "../../assets/vthreedot.svg";
import trash from "../../assets/trash.svg";
import plus2 from "../../assets/plus2.svg";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  Input,
} from "@material-tailwind/react";

const Lidlar = () => {
  const [desks, setDesks] = useState([
    {
      id: "desk1",
      title: "So'rovlar",
      tasks: [
        { id: "task1", name: "Task 1" },
        { id: "task2", name: "Task 2" },
      ],
    },
    {
      id: "desk2",
      title: "Kutish",
      tasks: [
        { id: "task3", name: "Task 3" },
        { id: "task4", name: "Task 4" },
      ],
    },
    {
      id: "desk3",
      title: "To'plam",
      tasks: [
        { id: "task5", name: "Task 5" },
        { id: "task6", name: "Task 6" },
      ],
    },
  ]);

  const handleDragStart = (e, deskId, taskId) => {
    e.dataTransfer.setData("deskId", deskId);
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, deskId) => {
    const sourceDeskId = e.dataTransfer.getData("deskId");
    const taskId = e.dataTransfer.getData("taskId");

    if (sourceDeskId !== deskId) {
      const updatedDesks = desks.map((desk) => {
        if (desk.id === sourceDeskId) {
          const updatedTasks = desk.tasks.filter((task) => task.id !== taskId);
          return { ...desk, tasks: updatedTasks };
        } else if (desk.id === deskId) {
          const task = desks
            .find((desk) => desk.id === sourceDeskId)
            .tasks.find((task) => task.id === taskId);
          return { ...desk, tasks: [...desk.tasks, task] };
        }
        return desk;
      });

      setDesks(updatedDesks);
    }
  };

  const handleAddTask = (e, deskId) => {
    if (e.key === "Enter") {
      const inputElement = e.target;
      const taskName = inputElement.value.trim();

      if (taskName !== "") {
        const newTask = {
          id: `task${Date.now()}`,
          name: taskName,
        };

        const updatedDesks = desks.map((desk) => {
          if (desk.id === deskId) {
            return { ...desk, tasks: [...desk.tasks, newTask] };
          }
          return desk;
        });
        setDesks(updatedDesks);
        inputElement.value = "";
      }
    }
  };

  const handleDeleteTask = (deskId, taskId) => {
    const updatedDesks = desks.map((desk) => {
      if (desk.id === deskId) {
        const updatedTasks = desk.tasks.filter((task) => task.id !== taskId);
        return { ...desk, tasks: updatedTasks };
      }
      return desk;
    });

    setDesks(updatedDesks);
  };

  return (
    <div className="container p-5">
      <div className="desks-container flex justify-between bg-white p-5">
        {desks.map((desk) => (
          <div
            key={desk.id}
            className="desk task_table"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, desk.id)}
          >
            <h3 className="font-semibold">{desk.title}</h3>
            <div className="">
              <Menu
                dismiss={{
                  itemPress: false,
                }}
              >
                <MenuHandler>
                  <Button
                    className="flex items-center gap-x-2"
                    color="white"
                    style={{ boxShadow: "none", padding: "5px" }}
                  >
                    <img src={plus2} alt="" />
                    So'rov Qo'shish
                  </Button>
                </MenuHandler>
                <MenuList>
                  <Input
                    label="Ism"
                    containerProps={{
                      className: "mb-4",
                    }}
                    onKeyPress={(e) => handleAddTask(e, desk.id)}
                  />
                  <Input
                    label="Telefon raqam"
                    containerProps={{
                      className: "mb-4",
                    }}
                    onKeyPress={(e) => handleAddTask(e, desk.id)}
                  />
                  <Input
                    label="Tavsif"
                    containerProps={{
                      className: "mb-4",
                    }}
                    onKeyPress={(e) => handleAddTask(e, desk.id)}
                  />
                </MenuList>
              </Menu>
            </div>
            <ul className="tasks flex flex-col gap-y-3">
              {desk.tasks.map((task) => (
                <li
                  className="task_desk p-2 flex justify-between"
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, desk.id, task.id)}
                >
                  <div className="flex items-center">
                    <Button
                      color="white"
                      style={{ boxShadow: "none", padding: "5px" }}
                    >
                      <img src={vthredot} alt="" />
                    </Button>
                    <p>{task.name}</p>
                  </div>

                  <Button
                    color="white"
                    style={{ boxShadow: "none", padding: "5px" }}
                    onClick={() => handleDeleteTask(desk.id, task.id)}
                  >
                    <img style={{ width: "25px" }} src={trash} alt="" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lidlar;
