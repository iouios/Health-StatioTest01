import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import exit from "../../../src/assets/exit.png"
import menu from "../../../src/assets/menu.png"
import { Link } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <div>
      <div className="w-64">
          <Accordion className="bg-blue-500 m-2">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>การรายงานและวิเคราะห์ผล</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>
                  <Link to="">
                    <button className="rounded-lg p-2 text-left w-full">
                    สถานการณ์สุขภาพ
                    </button>
                  </Link>
                  <Link to="">
                    <button className="rounded-lg p-2 text-left w-full">
                      แผนที่แสดงจุด
                    </button>
                  </Link>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-blue-500 m-2">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>การติดตามข้อมูลสุขภาพ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>
                  <Link to="">
                    <button className="rounded-lg p-2 text-left w-full">
                    ข้อมูลสุขภาพที่บันทึกแล้ว
                    </button>
                  </Link>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-blue-500 m-2">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>การจัดการข้อมูลผู้ใช้งาน</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>
                  <Link to="">
                    <button className="rounded-lg p-2 text-left w-full">
                    ข้อมูลผู้ใช้งาน
                    </button>
                  </Link>
                  <Link to="">
                    <button className="rounded-lg p-2 text-left w-full">
                    ผู้ใ้ช้งานในระบบ
                    </button>
                  </Link>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="ml-5">
          ออกจากระบบ
        </div>
    </div>
  );
}

export default AdminSidebar;