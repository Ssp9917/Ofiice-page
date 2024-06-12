import React, { useContext, useRef } from "react";
import { MainContext } from "../context/Context";

const EmployeeList = () => {
  const { employeeList, addFilter,getDataFromLocalStorage } = useContext(MainContext);


  return (
    <>
    <div className="w-full text-center text-2xl mt-2 text-blue-600 font-bold">All Employee is here</div>
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr className="">
          <th className="px-6 py-3 ">
              <label htmlFor="" className="pr-3">
                Sort By
              </label>
              <select
                name=""
                id=""
                onChange={(e) => {
                addFilter(e.target.value),
                getDataFromLocalStorage()
                }}
                className="px-3 py-2 rounded"
              >
                <option value="default">Default</option>
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="salary">Salary</option>
              </select>
            </th>
          </tr>
          <tr>
            <th scope="col" className="px-6 py-3">
              Employee name
            </th>
            <th scope="col" className="px-6 py-3">
              Employee code
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            
          </tr>
          
        </thead>
        <tbody>
          {employeeList.map((d, i) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={i}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {d.name}
                </th>
                <td className="px-6 py-4">{d.code}</td>
                <td className="px-6 py-4">{d.age}</td>
                <td className="px-6 py-4">{d.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default EmployeeList;
