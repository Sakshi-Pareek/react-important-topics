import React, { useState } from "react";

const FormSub = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const nameSubmit = (e) => {
    setName(e.target.value);
  };
  const passwordSubmit = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("the name of candidate " + name);
    console.log("password " + password);
  };
  return (
    <>
      <div className="bg-black py-10">
        <h2 className="font-bold text-5xl text-white text-center pt-10">
          FORM SUBMITION
        </h2>
        <div className="w-[500px] h-[250px] bg-[#5f9ea0] mx-auto mt-5 px-2">
          <form onSubmit={onSubmitForm} className="flex flex-col gap-10 pt-10">
            <div className="text-center">
              <label htmlFor="" className="text-white text-2xl">
                Name:{" "}
              </label>
              <input
                value={name}
                onChange={nameSubmit}
                type="text"
                className="border"
              />
            </div>
            <div className="text-center">
              <label className="text-white text-2xl"> Password: </label>
              <input
                type="password"
                onChange={passwordSubmit}
                value={password}
                className="border "
              />
            </div>
            <input
              type="submit"
              className="bg-white text-black h-[40px] w-[90px] rounded-[50px] mx-auto"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSub;
