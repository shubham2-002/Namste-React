import React, { useState } from "react";
import ItemList from "./ItemList";
const RestrauntCategory = ({ data }) => {
  //   console.log(data);
  const [showItem, SetshowItem] = useState(false);
  const handelClick = () => {
    SetshowItem(!showItem);
  };
  return (
    <div className="grid place-items-center">
      {/* {HEADEE BODY} */}
      <div
        className=" w-6/12 m-4 p-4 rounded-md shadow-md bg-blue-50 "
        onClick={() => handelClick()}
      >
        <div className="flex justify-between mb-4 cursor-pointer">
          <span className="font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* {Accordian Body} */}
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestrauntCategory;
