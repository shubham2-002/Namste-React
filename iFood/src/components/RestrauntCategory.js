import React, { useState } from "react";
import ItemList from "./ItemList";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const RestrauntCategory = ({ data, setShowidx, showItems }) => {
  // console.log(data);

  const handelClick = () => {
    setShowidx();
  };
  return (
    <div className="grid place-items-center">
      {/* {HEADEE BODY} */}
      <div className=" w-6/12 m-4 p-4 rounded-md shadow-md bg-blue-50 ">
        <div className="flex justify-between mb-4 cursor-pointer" onClick={() => handelClick()}>
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? (
            <BiChevronUp style={{ fontSize: "25px" }} />
          ) : (
            <BiChevronDown style={{ fontSize: "25px" }} />
          )}
        </div>
        {/* {Accordian Body} */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestrauntCategory;
