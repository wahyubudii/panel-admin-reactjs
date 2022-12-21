import React from "react";
import {
  BiHomeAlt,
  BiGridAlt,
  BiCreditCardAlt,
  BiUser,
  BiCalculator,
} from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";

export default function Sidebar() {
  const randomLogo =
    "https://w7.pngwing.com/pngs/380/764/png-transparent-paper-box-computer-icons-symbol-random-icons-miscellaneous-angle-text.png";

  const menus = [
    { name: "Home", icon: <BiHomeAlt /> },
    { name: "Account", icon: <BiGridAlt /> },
    { name: "Cards", icon: <BiCreditCardAlt /> },
    { name: "Contacts", icon: <BiUser /> },
    { name: "Loan Calculator", icon: <BiCalculator /> },
    { name: "Settings", icon: <RiSettings5Line /> },
  ];

  const schedulePayments = ["Monthly Rent", "Food Payment", "Utility Bills"];

  return (
    <div className="h-full border-r border-gray-200 w-64 px-9 py-9 space-y-24">
      <div className="flex flex-row items-center pt-8">
        <img src={randomLogo} alt="logo" className="w-9 h-9 object-cover" />
        <div className="ml-2 font-bold text-lg">Olith Banking</div>
      </div>
      <div className="space-y-24">
        <div>
          <div className="mb-4 text-indigo-700 font-bold">Menu</div>
          <ul className="space-y-7">
            {menus.map((menu, index) => {
              return (
                <li key={index} className="flex items-center text-gray-500 cursor-pointer hover:bg-violet-500 ease-in hover:text-white w-fit px-2 transition">
                  <div className="mr-5">{menu.icon}</div>
                  <div>{menu.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="mb-7 text-indigo-600 font-bold">Scheduled Payments</div>
          <div className="space-y-7">
            {schedulePayments.map((val, index) => {
              return (
                <div key={index} className="flex items-center space-x-3 cursor-pointer">
                    <div className="h-4 w-4 rounded-full border border-gray-600"></div>
                    <p className="text-gray-500">{val}</p>
                    {/* <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full bg-sky-200" key={index}>Lorem, ipsum</div> */}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="mb-7 text-indigo-600 font-bold">Scheduled Payments</div>
          <div className="space-y-7">
            {schedulePayments.map((val, index) => {
              return (
                <div key={index} className="flex items-center space-x-3 cursor-pointer">
                    <div className="h-4 w-4 rounded-full border border-gray-600"></div>
                    <p className="text-gray-500">{val}</p>
                    {/* <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full bg-sky-200" key={index}>Lorem, ipsum</div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
