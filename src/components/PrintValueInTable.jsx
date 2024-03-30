import React, { useState } from "react";

const PrintValueInTable = () => {
  const [error, seterror] = useState(false);
  const [array, setarray] = useState([]);
  const [formData, setFormData] = useState({
    FirstName: "",
    lastName: "",
    email: "",
    phone: "",
    passward: "",
    confirmpassward: "",
  });
  const [isButtonClicked, setButtonClicked] = useState(false);
  console.log(error, "error");
  const changeHandler = () => {
    setButtonClicked(true);
    seterror(true);
    if (
      formData.FirstName === "" &&
      formData.lastName === "" &&
      formData.email === "" &&
      formData.phone === "" &&
      formData.passward === "" &&
      formData.confirmpassward === ""
    ) {
      alert("fill the form");
      seterror(true);
    } else {
      console.log(formData);
    }
    array.push(formData);
  };
  return (
    <div className="bg-black mt-7 py-10 px-10">
      <h1 className="text-center text-white text-5xl font-bold mb-5">
        PRINT VALUE IN TABLE
      </h1>
      <div className="flex flex-col gap-5 h-[500px] w-full bg-[#5f9ea0] justify-center items-center">
        <div>
          <label htmlFor="" className="text-white text-xl font-medium">
            First Name :-
          </label>
          <input
            type="text"
            className="border border-[#000000]"
            onChange={(e) =>
              setFormData({ ...formData, FirstName: e.target.value })
            }
          />
          {/* {isButtonClicked ? <p>{formData.FirstName}</p> : ""} */}
          {/* {error && formData.FirstName === "" ? "name is required" : ""} */}
        </div>
        <div>
          <label htmlFor="" className="text-white text-xl font-medium">
            Last Name :-
          </label>
          <input
            type="text"
            className="border border-[#000000]"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          {/* {isButtonClicked ? <p>{formData.lastName}</p> : ""} */}
          {/* {error && formData.lastName === "" ? "lastname is required" : ""} */}
        </div>
        <div>
          <label htmlFor="" className="text-white text-xl font-medium">
            Email :-
          </label>
          <input
            type="email"
            className="border border-[#000000]"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {/* {isButtonClicked ? <p>{formData.email}</p> : ""} */}
          {/* {error && formData.email === "" ? "email is required" : ""} */}
        </div>
        <div>
          {" "}
          <label htmlFor="" className="text-white text-xl font-medium">
            Mobile No. :-
          </label>
          <input
            type="number"
            className="border border-[#000000]"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {/* {isButtonClicked ? <p>{formData.phone}</p> : ""} */}
          {/* {error && formData.phone === "" ? "mobile no. is required" : ""} */}
        </div>
        <div>
          {" "}
          <label htmlFor="" className="text-white text-xl font-medium">
            Passward :-
          </label>
          <input
            type="passward"
            className="border border-[#000000]"
            onChange={(e) =>
              setFormData({ ...formData, passward: e.target.value })
            }
          />
          {/* {isButtonClicked ? <p>{formData.passward}</p> : ""} */}
          {/* {error && formData.passward === "" ? "passward is required" : ""} */}
          {error && formData.passward !== formData.confirmpassward
            ? "password is invalid"
            : ""}
        </div>
        <div>
          <label htmlFor="" className="text-white text-xl font-medium">
            Confirm Passward :-
          </label>
          <input
            type="passward"
            className="border border-[#000000]"
            onChange={(e) =>
              setFormData({ ...formData, confirmpassward: e.target.value })
            }
          />
          {/* {isButtonClicked ? <p>{formData.confirmpassward}</p> : ""} */}
          {/* {error && formData.confirmpassward === ""
            ? "confirn passward is required"
            : ""} */}
        </div>
        <button
          className="bg-black text-white px-5 py-2 rounded-xl mt-5"
          onClick={() => changeHandler(isButtonClicked)}
        >
          submit
        </button>
      </div>
      <table className="table-auto w-full mx-auto mt-7 border-separate border-spacing-[17px] border bg-[#5f9ea0] border-slate-400 mb-7">
        <tbody>
          <tr>
            <th className="text-white text-xl font-medium">FirstName</th>
            <th className="text-white text-xl font-medium">LastName</th>
            <th className="text-white text-xl font-medium">Email</th>
            <th className="text-white text-xl font-medium">Mobile no.</th>
            <th className="text-white text-xl font-medium">Passward</th>
            <th className="text-white text-xl font-medium">Confirm Passward</th>
          </tr>
          {array.map((obj, index) => {
            return (
              <tr className="text-center">
                <td className="">{obj.FirstName}</td>
                <td className="">{obj.lastName}</td>
                <td className="">{obj.email}</td>
                <td className="">{obj.phone}</td>
                <td className="">{obj.passward}</td>
                <td className="">{obj.confirmpassward}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PrintValueInTable;
