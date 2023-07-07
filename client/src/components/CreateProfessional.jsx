import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
export default function CreateProfessional() {
  const navigate = useNavigate()
    const [sign, setsign] = useState(false);
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("male");
  const [available, setAvailable] = useState(true);
  const address = localStorage.getItem('useraddress')
  const url = import.meta.env.VITE_APP_BACKEND_URL;
  const createuser = async (e) => {
    setsign(true);
    e.preventDefault();
    try {
      await axios.post(`${url}/api/createprofessional`, {
        useraddress:address,
        name:name,
        specialization:specialization,
        available:available,
        totalRatings:0,
        totalScore:0
      });
      navigate("/users")
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
                              <label className="block text-gray-700">Specialization</label>
                              <input
                                type="text"
                                name='specialization'
                                placeholder="Enter your specialization"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                required
                                onChange={(e) => setSpecialization(e.target.value)}
                              />
                            </div>
                            <div className="w-1/2">
                              <label className="block text-gray-700">
                                Available
                              </label>
                              <select
                                name='available'
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                required
                                onChange={(e)=> e.target.value == "true" ? setAvailable(true) : setAvailable(false)}
                              >
                                <option className="bg-gray-200" value="true">Yes</option>
                                <option className="bg-gray-200" value="false">No</option>
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
