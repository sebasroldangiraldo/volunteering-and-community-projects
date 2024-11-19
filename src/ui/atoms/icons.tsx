import { FaRegFolderOpen } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

export const icons = {
  folder : <FaRegFolderOpen size={20} />,
  logout : <FiLogOut size={20} />,
  back: <IoIosArrowBack size={20}/>,
  foward : <IoIosArrowForward size={20}/>,
  document : <IoDocumentTextOutline size={20} />,
  add : <IoAddCircleOutline size={20} />,
  close : <IoClose size={20} />,
  chart : <FiBarChart size={20} />,
  users : <FiUsers size={20} />,
  calendar : <FiCalendar size={20} />
};