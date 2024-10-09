import React from "react";
import { Menu } from "antd";
import "./style.scss";
const MenuBar = () => {
  return (
    <div>
      <Menu className="menubar w-[250px] h-[360px] text-[16px] text-[#505050]">
        <Menu.Item className="custom-menu-item ">Automobiles</Menu.Item>
        <Menu.Item className="custom-menu-item ">Clothes and wear</Menu.Item>
        <Menu.Item className="custom-menu-item ">Home interiors</Menu.Item>
        <Menu.Item className="custom-menu-item ">Computer and tech</Menu.Item>
        <Menu.Item className="custom-menu-item ">Tools, equipments</Menu.Item>
        <Menu.Item className="custom-menu-item ">Sports and outdoor</Menu.Item>
        <Menu.Item className="custom-menu-item ">Animal and pets</Menu.Item>
        <Menu.Item className="custom-menu-item ">Machinery tools</Menu.Item>
        <Menu.Item className="custom-menu-item ">More category</Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuBar;
