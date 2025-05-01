"use client";
import { FloatingDock } from "../components/ui/acernity/floating-dock";
import { IconHome, IconUser, IconSettings } from "@tabler/icons-react";

const Navbar = () => {
  const items = [
    { title: "Home", icon: <IconHome />, href: "/" },
    { title: "Profile", icon: <IconUser />, href: "/profile" },
    { title: "Settings", icon: <IconSettings />, href: "/settings" },
  ];

  return (
    <div id="Navbar">
      <FloatingDock items={items} />
    </div>
  );
};

export default Navbar;
