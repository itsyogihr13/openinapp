import advertisement from "../../assets/advertise.svg";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import appleLogo from "../../assets/apple.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export const Home = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const registerData = useSelector((store) => store.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handlePassword = () => {
    setShow((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const registeredUser = registerData.find(
        (user) => user.email === formData.email
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
      if (registeredUser && registeredUser.password === formData.password) {
        alert("User login Successfully");
        navigate("/fileupload");
      } else if (!registeredUser) {
        alert("Please registered your self. Click on register");
      } else {
        alert("Invalid email or password");
      }
    }
  };
  return (
    <div className="container flex w-full justify-between h-[750px] absolute ">
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
          <h1 className="text-[36px] leading-[43px] font-bold">Sign In</h1>
          <h1 className="text-[16px] leading-[19px] font-normal mt-[20px]">
            Sign in to your account
          </h1>
          <div className="social-login-container sm:flex  mt-4 mb-8">
            <GoogleLogin
              className="google-login-button bg-[#fff] text-[#858585]   py-2 px-4 rounded flex items-center mb-4 sm:mr-4 sm:mb-0"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />

            <button className="apple-login-button bg-[#fff] text-[#858585] ml-6 py-2 px-4 rounded flex items-center">
              <img src={appleLogo} alt="Apple Logo" className="logo mr-2" />
              Login with Apple
            </button>
          </div>
          <div className="w-[85%]  max-w-md p-6 bg-white rounded-md ">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-base font-normal mt-2"
                >
                  Email Address:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}

                <label
                  htmlFor="password"
                  className="block text-base font-normal mt-4"
                >
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                    value={formData.password}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <span
                    onClick={handlePassword}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  >
                    {!show ? (
                      <AiFillEyeInvisible size={24} color="black" />
                    ) : (
                      <AiFillEye size={24} color="black" />
                    )}
                  </span>
                  {errors.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                </div>
              </div>

              <p className="text-[#346BD4] font-normal text-base mb-4">
                Forgot Password ?
              </p>
              <button
                type="submit"
                className={`bg-[#605BFF] text-white px-4 py-2 rounded-md w-full text-center relative ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading} // Disable the button when loading
              >
                {isLoading ? (
                  <>
                    <span>Signing In...</span>
                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                    </div>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>
          <p
            onClick={() => navigate("/register")}
            className="text-[#858585]  mt-4 mr-2"
          >
            Don’t have an account?
            <span className="text-[#346BD4] px-2 underline ">
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
