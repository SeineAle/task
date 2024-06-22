import { useRecoilState } from "recoil";
import { budgetState, itemsState } from "../state";
import { smartphones, accessories } from "../assets/data";

function Input() {
  const [budget, setBudget] = useRecoilState(budgetState);
  const [items, setItems] = useRecoilState(itemsState);

  const onChange = (event) => {
    const value = parseInt(event.target.value);
    setBudget(isNaN(value) ? 0 : value);
  };

  const onClick = () => {
    let arr = [];
    let id = 1;
    for (let i = 0; i < smartphones.length; i++) {
      for (let j = 0; j < accessories.length; j++) {
        if (smartphones[i].price + accessories[j].price <= budget) {
          arr.push({
            id: id,
            items: {
              first: {
                item: smartphones[i].item,
                price: smartphones[i].price,
              },
              second: {
                item: accessories[j].item,
                price: accessories[j].price,
              },
            },
          });
          id++;
        }
      }
    }
    setItems(arr);
    if(arr.length == 0){
        alert("you are too poor to buy anything")
    }
  };

  return (
    <div className="flex items-center justify-left mt-8 mb-6">
      <label className="text-gray-800 ml-4 mr-4">Tell me your budget:</label>
      <input
        type="number"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your budget"
        value={budget}
        onChange={onChange}
      />
      <button
        className="ml-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
