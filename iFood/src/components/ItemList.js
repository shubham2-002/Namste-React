import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handelAddItem = (item) => {
    dispatch(addItem(item))

  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="border-t-2 border-gray-300 text-left relative"
          >
            <div className="flex justify-between p-4">
              <div className="my-4  flex flex-col w-8/12">
                <span className="text-lg font-semibold">
                  {item.card.info.name}
                </span>
                <span className="text-sm font-semibold">
                  Rs {item.card.info.price / 100}
                </span>
                <p className="my-4 text-gray-500 text-sm">
                  {item.card.info.description}
                </p>
              </div>
              <div className="w-1/4 bg-slate-200 rounded-md">
                <img src={CDN_URL + item.card.info.imageId} />
              </div>
              <button
                className=" cursor-pointer absolute 
                  font-semibold right-0 mt-20 mr-4
               text-white bg-black p-2 rounded-md text-xs"
               onClick={()=>handelAddItem(item)}>
                ADD +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
