import { data } from "autoprefixer";
import React, { createContext, useEffect, useState } from "react";

const MainContext = createContext();

const Context = (props) => {
  // add employee data

  const [employeeData, setEmployeeData] = useState({
    name: "",
    code: "",
    age: "",
    salary: "",
  });

  const [employeeList, setEmployeeList] = useState([]);

  // add employee function
  const addEmployee = (e) => {
    e.preventDefault();

    if (
      employeeData.name != "" &&
      employeeData.code != "" &&
      employeeData.age != "" &&
      employeeData.salary != ""
    ) {
      setEmployeeList([
        ...employeeList,
        {
          name: employeeData.name,
          code: employeeData.code,
          age: employeeData.age,
          salary: employeeData.salary,
        },
      ]);

      alert("Data added successfull😍")

      employeeData.name=''
      employeeData.code = ''
      employeeData.age = ''
      employeeData.salary = ''
    } else {
      alert("please fill all fields");
    }
  };

  //   add filter function
  const addFilter = (data) => {
    if (data == "name") {
        const filterEmployeeList = employeeList.sort((a, b) => {
            return (a.name>b.name) - (a.name<b.name);
          });
          setEmployeeList(filterEmployeeList);
          setDataInLocal();
    } else if (data == "age") {
      const filterEmployeeList = employeeList.sort((a, b) => {
        return a.age - b.age;
      });
      setEmployeeList(filterEmployeeList);
      setDataInLocal();
    } else if (data == "salary") {
        const filterEmployeeList = employeeList.sort((a, b) => {
            return a.salary - b.salary;
          });
          setEmployeeList(filterEmployeeList);
          setDataInLocal();
    } else {
      const filterEmployeeList = employeeList.sort();
      setEmployeeList(filterEmployeeList);
    }
  };

  //   set data from localStorage
  const setDataInLocal = () => {
    if (employeeList.length != 0) {
      localStorage.setItem("emp_data", JSON.stringify(employeeList));
    }
  };

  useEffect(() => {
    setDataInLocal();
  }, [employeeList]);

  const getDataFromLocalStorage = () => {
    const localData = localStorage.getItem("emp_data");
    if (localData != null) {
      setEmployeeList(JSON.parse(localData));
    }
  };

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);
  //   console.log(employeeList);

  return (
    <MainContext.Provider
      value={{
        employeeData,
        setEmployeeData,
        addEmployee,
        employeeList,
        addFilter,
        getDataFromLocalStorage,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContext };
export default Context;
