import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ConfigCreate = () => {
  const [configData, setconfigData] = useState("");
  const [row, setRow1] = useState("");
  function changeHandler(e) {
    console.log(e.target.value);
    setconfigData(e.target.value);
  }
  async function sumbitHandler(e) {
    e.preventDefault();
    if (!configData) {
      return setRow1("Please enter configId.");
    }
    const savedUserResponse = await axios
      .get(`/api/configurations/${configData}`, { configId: configData })
      .then((response) => setRow1(response.data.message))
      .catch((error) => setRow1(error.response.data.message));
    console.log(savedUserResponse);
  }
  return (
    <div className=" my-6 flex flex-col justify-center items-center w-full">
      {" "}
      <div className=" w-3/6  border  p-4 mx-auto rounded-lg flex flex-col gap-2">
        <form onSubmit={sumbitHandler}>
          {" "}
          <div className="my-3">
            {" "}
            <label className=" flex flex-col gap-2" htmlFor="confidId">
              <p className="text-black">Confid to Load (ConfigId):</p>
              <input
                className="border py-2 rounded"
                onChange={changeHandler}
                placeholder="Enter your confidId"
                type="text"
                name="confidId"
                id="confidId"
                value={configData.configId}
              />
            </label>
          </div>
          <button className="w-full rounded-md mx-auto">
            <div className="w-1/2 rounded-md my-5 text-center py-2 mx-auto bg-yellow-400 hover:bg-yellow-400">
              Submit
            </div>
          </button>
        </form>
        {row === "" ? (
          ""
        ) : row === "This Config id is already used!" ? (
          <div className=" font-medium text-lg text-blue-400 flex flex-col  ">
            <h5>{row}</h5>
          </div>
        ) : row === "Please enter configId." ? (
          <div className=" font-medium text-lg text-orange-500 flex flex-col  ">
            <h3>{row}</h3>
          </div>
        ) : (
          <div className=" font-medium text-lg text-orange-500 flex flex-col  ">
            <p>Retrun an array:</p>
            <h3>{row[0]}</h3>

            <h2>{row[1]}</h2>
            <h2>{row[2]}</h2>
          </div>
        )}
        <Link to="/update">
          <p className=" underline text-red-600 font-medium text-xl">
            {" "}
            Click here to Update the remark consponding to this configId.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ConfigCreate;
