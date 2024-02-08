import advertisement from "../../assets/advertise.svg";
import logo from "../../assets/logo.svg";
import appleLogo from "../../assets/apple.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GoogleLogin } from "@react-oauth/google";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        alert("Please register yourself. Click on register");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div className="container flex flex-col lg:flex-row w-full h-screen">
      <div className="logo-container lg:w-1/2 bg-[#605BFF] p-4 lg:p-8">
        <img className="p-4 lg:p-8" src={logo} alt="" />
        <h1
          className={`font-bold text-4xl lg:text-7xl text-white ${
            window.innerWidth > 768 ? "mt-4 lg:mt-[260px]" : "mt-0"
          }`}
        >
          BASE
        </h1>
        <img className="mt-8 lg:mt-16 mx-auto" src={advertisement} alt="" />
      </div>
      <div className="login-container bg-[#F8FAFF] lg:w-1/2 flex justify-center items-center p-8">
        <div className="w-full lg:w-3/4 text-left">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <h1 className="text-base font-normal mb-8">
            Sign in to your account
          </h1>
          <div className="social-login-container flex mb-8">
            <GoogleLogin
              className="google-login-button bg-white text-gray-600 py-2 px-4 rounded flex items-center mb-4 mr-4"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />

            <button className="apple-login-button bg-white text-gray-600 py-2 px-4 rounded flex items-center">
              <img src={appleLogo} alt="Apple Logo" className="logo mr-2" />
              Login with Apple
            </button>
          </div>

          <div className="max-w-md p-6 bg-white rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-base font-normal">
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

              <p className="text-blue-500 font-normal text-base mb-4">
                Forgot Password?
              </p>

              <button
                type="submit"
                className={`bg-[#605BFF] text-white px-4 py-2 rounded-md w-full text-center relative ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
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
            className="text-gray-600 mt-4 mr-2"
          >
            Don’t have an account?
            <span className="text-blue-500 px-2 underline">Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};
