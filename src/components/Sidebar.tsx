import React from 'react';
import Card from './Card';
import SidebarLink from './SidebarLink';

const links = [
    { label: "Home", icon: "Grid", link: "/home" },
    { label: "Calendar", icon: "Calendar", link: "/calendar"},
    { label: "Profile", icon: "User", link: "/profile" },
    { label: "Settings", icon: "Settings", link: "/settings"},
  ];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
    <div className="w-full flex justify-center items-center">
    </div>
    {links.map((link) => (
      <SidebarLink link={link} />
    ))}
  </Card>
  )
}

export default Sidebar