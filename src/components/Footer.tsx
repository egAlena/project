import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-center w-full h-[324px] bg-[#E0FBFF] mt-[300px] ">
      <div className="w-[calc(100% / 3)] py-[94px] px-[30px]">
        <img width="367px" src="../public/img/logo1.png" alt="лого" />
        <p>© 2025 ИП ЕГОРОВА АЛЕНА МИХАЙЛОВНА</p>
      </div>
      <div
        id="contacts"
        className="w-[calc(100% / 3)] py-[71px] pr-[50px] pl-[100px] font-[Comic_Sans_MS]"
      >
        <h1>КОНТАКТЫ</h1>
        <p>телефон: +7 (914) 226-51-83</p>
        <p>почта: egorovaal2915@mail.ru</p>
        <p>адрес: ул. Кулаковского 48</p>
      </div>
      <div className="w-[calc(100% / 3)] py-[71px] pr-[50px] pl-[0px] font-[Comic_Sans_MS]">
        <h1>ПРАВОВАЯ ИНФОРМАЦИЯ</h1>
        <p>ИНН 123456789012</p>
        <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
        <p>ОФЕРТА</p>
      </div>
    </footer>
  );
};
export default Footer;
