import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ConfigUpdate = () => {
  const [configData, setconfigData] = useState({
    configId: "",
    remark: "",
  });
  const [row1, setRow1] = useState("");
  function changeHandler(e) {
    setconfigData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(configData);
  }
  async function sumbitHandler(e) {
    e.preventDefault();
    if (!configData.configId) {
      return setRow1("Please enter configId.");
    }
    console.log(configData);
    const savedUserResponse = await axios
      .put(`/api/configurations/${configData.configId}`, {
        configId: configData.configId,
        remark: configData.remark,
      })
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
            <label className=" flex flex-col gap-2" htmlFor="configId">
              <p className="text-black">Confid to Load (ConfigId):</p>
              <input
                className="border py-2 rounded"
                onChange={changeHandler}
                placeholder="Enter your configId"
                type="text"
                name="configId"
                id="configId"
                value={configData.configId}
              />
            </label>
          </div>
          <div className="my-3">
            {" "}
            <label className=" flex flex-col gap-2" htmlFor="remark">
              <p className="text-black">Remark:</p>
              <input
                className="border py-2 rounded"
                onChange={changeHandler}
                placeholder="Enter your remark"
                type="text"
                name="remark"
                id="remark"
                value={configData.remark}
              />
            </label>
          </div>
          <div className="w-1/2 rounded-md my-5 text-center py-2 mx-auto bg-yellow-400 hover:bg-yellow-400">
            <button>Submit</button>
          </div>
        </form>
        {row1 == "" ? (
          ""
        ) : (
          <div className=" font-medium text-lg text-black flex flex-col  ">
            <p>Update Status:</p>

            <h5>{row1}</h5>
          </div>
        )}
        <Link to="/">
          <p className=" underline text-red-600 font-medium text-xl">
            {" "}
            Click here to create a configId.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ConfigUpdate;
