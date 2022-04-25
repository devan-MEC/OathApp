import { useState } from "react";

export const Form = (props) => {
  const { setVal } = props;
  const [v, setV] = useState("");

  //   const [uname, setName] = useState("");
  return (
    <div>
      <form>
        <div className="flex flex-col bg-gray-100 p-5 rounded-lg shadow-xl">
          <input
            value={v}
            onChange={(event) => setV(event.currentTarget.value)}
            type="text"
            placeholder="Enter your name"
            className=" border-2 px-3 py-2 focus:border-yellow-300 focus:border-4  "
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setVal(v);
            }}
            className="bg-yellow-300 px-3 py-2 rounded-lg mt-2"
          >
            I PLEDGE THE OATH!
          </button>
        </div>
      </form>
    </div>
  );
};
