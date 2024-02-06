import logo from "../../assets/uploadinglogo.svg";
import profile from "../../assets/profile.svg";
import { useState } from "react";
import MockDataTable from "./uploadFiles";

export const FileUpload = () => {
  const [file, setFile] = useState("");
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div className="flex h-full bg-gray-100">
      <div className="w-1/6 bg-[#fff]  pl-16 ">
        <img src={logo} alt="" className=" pt-12" />
        <ul className="text-left mt-14">
          <li className="mb-6">Dashboard</li>
          <li className="mb-6">Upload</li>
          <li className="mb-6">Invoice</li>
          <li className="mb-6">Schedule</li>
          <li className="mb-6">Calendar</li>
          <li className="mb-6">Notification</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="w-4/5 p-8 h-auto">
        <div className="header-small flex justify-between w-full">
          <p>Upload CSV</p>
          <img src={profile} alt="" />
        </div>
        <div className="m-auto mt-16  bg-[#fff] w-[50%] h-[300px] p-2">
          <div className="border-dashed border-2 border-gray-400 bg-white p-8 rounded-md h-full">
            <p className="text-gray-500 mb-4 mt-14">
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
            onClick={() => document.getElementById("fileInput").click()}
            className="bg-[#605BFF] text-white mt-3 px-4 py-2 rounded-md w-full text-center"
          >
            Upload
          </button>
        </div>
        <MockDataTable />
      </div>
    </div>
  );
};
