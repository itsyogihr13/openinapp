import advertisement from "../../assets/advertise.svg";
import logo from "../../assets/logo.svg";
import { validateEmail, validateMobileNumber } from "./FormValidation";
import { useDispatch } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/action";
export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Mobile_number: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validateMobileNumber(formData.Mobile_number)) {
      newErrors.Mobile_number = "Invalid mobile number format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handlePassword = () => {
    setShow((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("User Registred successfully");
      navigate("/");
      dispatch(loginUser(formData));
    } else {
      console.log("error");
    }
  };
  return (
    <div className="container flex w-full justify-between h-[750px] absolute">
      <div className="logo-container w-[50%] h-auto bg-[#605BFF]">
        <img className="p-[40px]" src={logo} alt="" />
        <h1 className=" font-bold text-7xl	text-[#FFFFFF] relative top-[170px] ">
          BASE
        </h1>
        <img
          className="relative top-[400px] flex  m-auto "
          src={advertisement}
          alt=""
        />
      </div>

      <div className="login-container bg-[#F8FAFF] w-[50%] justify-center items-center flex">
        <div className=" w-[70%] h-[500px] text-left ">
          <h1 className="text-[36px] leading-[43px] font-bold">Register</h1>
          <h1 className="text-[16px] leading-[19px] font-normal my-[20px]">
            Register your account
          </h1>

          <div className="w-[85%]  max-w-md p-6 bg-white rounded-md ">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-base font-normal mt-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name}</div>
                )}
                <label
                  htmlFor="email"
                  className="block text-base font-normal mt-2 "
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}
                <label
                  htmlFor="password"
                  className="block text-base font-normal mt-2 "
                >
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={handlePassword}
                  >
                    {show ? (
                      <AiFillEyeInvisible size={24} color="black" />
                    ) : (
                      <AiFillEye size={24} color="black" />
                    )}
                  </span>
                </div>

                {errors.password && (
                  <div className="text-red-500">{errors.password}</div>
                )}

                <label
                  htmlFor="Mobile_number"
                  className="block text-base font-normal mt-2 "
                >
                  Mobile number:
                </label>
                <input
                  type="number"
                  id="Mobile_number"
                  name="Mobile_number"
                  value={formData.Mobile_number}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.Mobile_number && (
                  <div className="text-red-500">{errors.Mobile_number}</div>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#605BFF] text-white px-4 py-2 rounded-md w-full text-center "
              >
                Register
              </button>
            </form>
          </div>
          <p
            onClick={() => navigate("/")}
            className="text-[#858585]  mt-4 mr-2"
          >
            Have an account?
            <span className="text-[#346BD4] px-2 underline  cursor-pointer">
              login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
