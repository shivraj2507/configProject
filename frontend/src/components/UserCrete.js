import React, { useState } from "react";
import axios from "axios";
const UserCrete = () => {
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subcription: "",
    gender: "",
    country: "",
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function sumbitHandler(e) {
    e.preventDefault();
    console.log(fromData);
    axios
      .post("http://localhost:5000/api/v1/creteUser", fromData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log("error is ocmeing", error));
  }
  return (
    <>
      <div className=" my-6 flex flex-col justify-center items-center w-full">
        {" "}
        <div className=" w-3/6  border  p-4 mx-auto rounded-lg flex flex-col gap-2">
          <form onSubmit={sumbitHandler}>
            {" "}
            <div className="my-3">
              {" "}
              <label className=" flex flex-col gap-2" htmlFor="name">
                <p className="text-black">Enter your name:</p>
                <input
                  className="border py-2 rounded"
                  onChange={changeHandler}
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  id="name"
                  value={fromData.name}
                />
              </label>
            </div>
            <div className=" my-3">
              {" "}
              <label className="flex flex-col gap-2" htmlFor="email">
                <p className="text-black">Enter your email:</p>
                <input
                  className="border py-2 rounded"
                  onChange={changeHandler}
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id="email"
                  value={fromData.email}
                />
              </label>
            </div>
            <div className=" my-3">
              {" "}
              <label className="flex flex-col gap-2" htmlFor="email">
                <p className="text-black">Enter your phone:</p>
                <input
                  className="border py-2 rounded"
                  onChange={changeHandler}
                  placeholder="Enter your phone"
                  type="phone"
                  name="phone"
                  id="phone"
                  value={fromData.phone}
                />
              </label>
            </div>
            <div className=" my-3">
              {" "}
              <label className="flex flex-col gap-2" htmlFor="subcription">
                <p className="text-black">Enter your subcription:</p>
                <input
                  className="border py-2 rounded"
                  onChange={changeHandler}
                  placeholder="Enter your subcription"
                  type="subcription"
                  name="subcription"
                  id="subcription"
                  value={fromData.subcription}
                />
              </label>
            </div>
            <div className=" my-3">
              {" "}
              <label className="flex flex-col gap-2" htmlFor="gender">
                <p className="text-black">Enter your gender:</p>
                <input
                  className="border py-2 rounded"
                  onChange={changeHandler}
                  placeholder="Enter your gender"
                  type="gender"
                  name="gender"
                  id="gender"
                  value={fromData.gender}
                />
              </label>
            </div>
            <div className=" my-3">
              {" "}
              <label className="flex flex-col gap-2" htmlFor="country">
                <p className="text-black">Enter your country:</p>
                <input
                  className="border py-2 rounded"
                  onChange={changeHandler}
                  placeholder="Enter your country"
                  type="country"
                  name="country"
                  id="country"
                  value={fromData.country}
                />
              </label>
            </div>
            <div className="w-1/2 rounded-md my-5 text-center py-2 mx-auto bg-yellow-400 hover:bg-yellow-400">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserCrete;
