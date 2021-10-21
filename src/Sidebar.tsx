import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { ReactElement } from "react";

const SidebarIcon = ({
  icon,
  text = "tooltip",
}: {
  icon: ReactElement;
  text?: string;
}) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default function Sidebar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16
        flex flex-col bg-white dark:bg-gray-900 shadow-lg"
    >
      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<BsPlus size="32" />} />
      <SidebarIcon icon={<BsFillLightningFill size="20" />} />
      <SidebarIcon icon={<FaPoo size="20" />} />
    </div>
  );
}
