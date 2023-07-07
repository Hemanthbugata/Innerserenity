import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import axios from "axios"
export default function Createuser() {
  const navigate = useNavigate()
    const [sign, setsign] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(0);
  const address = localStorage.getItem('useraddress')
  const url = import.meta.env.VITE_APP_BACKEND_URL;
  const createuser = async (e) => {
    setsign(true);
    e.preventDefault();
    try {
      await axios.post(`${url}/api/createuser`, {
        useraddress:address,
        name:name,
        age:age,
        gender:gender
      });
      navigate("/professionals")
    } catch (error) {
      console.log(error);
    }
    setsign(false);
  };
  return (
   <>
    <div
                      className="px-5 flex items-center justify-center"
                      style={{ width: "30rem" }}
                    >
                      <div className="w-full h-100">
                        <form className="mt-6" onSubmit={createuser}>
                          <div>
                            <label className="block text-gray-700">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id=""
                              placeholder="Enter Full Name"
                              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                              required
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>

                          <div className="mt-4 flex gap-6 ">
                            <div>
                              <label className="block text-gray-700">Age</label>
                              <input
                                type="number"
                                name='age'
                                placeholder="Enter your Age"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                required
                                onChange={(e) => setAge(e.target.value)}
                              />
                            </div>
                            <div className="w-1/2">
                              <label className="block text-gray-700">
                                Gender
                              </label>
                              <select
                                name='gender'
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                required
                                onChange={(e) => setGender(e.target.value)}
                              >
                                <option className="bg-gray-200">male</option>
                                <option className="bg-gray-200">female</option>
                              </select>
                            </div>
                          </div>

                          {sign ? (
                            <>
                              <button
                                disabled
                                type="submit"
                                className="w-full block bg-gray-500  text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                              >
                                Creating Account
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="submit"
                                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                              >
                                Create Account
                              </button>
                            </>
                          )}
                        </form>
                      </div>
                    </div>
   </>
  )
}
