import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/uploadinglogo.svg";
import profile from "../../assets/profile.svg";
import MockDataTable from "./uploadFiles";
import { SampleFiles } from "./sampleFiles";

export const FileUpload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      setIsLoading(true);
    } else {
      alert("Please choose the file ..");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFile("");

    setIsLoading(false);
  };
  return (
    <div className="flex flex-col md:flex-row h-full bg-gray-100">
      <div className="w-full md:w-1/6 bg-[#fff] p-4 md:pl-8">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt=""
          className="pt-4 cursor-pointer"
        />
        <ul className="text-left mt-6 md:mt-12">
          <li
            className={`mb-4 md:mb-6 ${
              location.pathname === "/dashboard" ? "text-[#605BFF]" : ""
            }`}
          >
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li
            className={`mb-4 md:mb-6 ${
              location.pathname === "/upload" ? "text-[#605BFF]" : ""
            }`}
          >
            <Link to="/fileupload">Upload</Link>
          </li>
          <li
            className={`mb-4 md:mb-6 ${
              location.pathname === "/invoice" ? "text-[#605BFF]" : ""
            }`}
          >
            <Link to="/invoice">Invoice</Link>
          </li>
          <li
            className={`mb-4 md:mb-6 ${
              location.pathname === "/schedule" ? "text-[#605BFF]" : ""
            }`}
          >
            <Link to="/schedule">Schedule</Link>
          </li>
          <li
            className={`mb-4 md:mb-6 ${
              location.pathname === "/calendar" ? "text-[#605BFF]" : ""
            }`}
          >
            <Link to="/calendar">Calendar</Link>
          </li>
          <li
            className={`mb-4 md:mb-6 ${
              location.pathname === "/notification" ? "text-[#605BFF]" : ""
            }`}
          >
            <Link to="/notification">Notification</Link>
          </li>
          <li
            className={`mb-4 md:mb-6 ${
              location.pathname === "/settings" ? "text-[#605BFF]" : ""
            }`}
          >
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-5/6 p-4 md:p-8">
        <div className="header-small flex justify-between w-full">
          <p>Upload CSV</p>
          <img src={profile} alt="" />
        </div>
        <div className="m-auto mt-8 md:mt-16 bg-[#fff] w-full md:w-[50%] h-[300px] p-2">
          <div className="border-dashed border-2 border-gray-400 bg-white p-8 rounded-md h-full">
            <p className="text-gray-500 mb-4 md:mt-14">
              Drag and drop your Excel sheet here or
            </p>
            <p className="py-4">{file && file.name}</p>
            <label
              htmlFor="fileInput"
              className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
            >
              Browse
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
              //   accept=".xls, .xlsx"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className={`bg-[#605BFF] text-white px-4 py-2 rounded-md w-full text-center relative ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span>Uploading ...</span>
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                </div>
              </>
            ) : (
              "Upload"
            )}
          </button>
        </div>
        <MockDataTable />
      </div>
    </div>
  );
};
