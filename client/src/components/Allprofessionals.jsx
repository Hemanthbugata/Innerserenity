import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Professional from "./Professional";
export default function Allprofessionals() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredusers, setFiltered] = useState(users);
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_APP_BACKEND_URL;
  const fetchdata = () => {
    setLoading(true);
    fetch(`${url}/api/getprofessionals`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const filterusers = async (e) => {
    setQuery(e.target.value);
    setFiltered(
      users.filter((asd) =>
        asd.specialization.toLowerCase().includes(query.toLocaleLowerCase())
      )
    );
  };
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="bg-gray-200 min-h-screen">
            <div className="flex justify-center items-center">
              <input
                type="search"
                name="name"
                id=""
                placeholder="Search based on specialization"
                className="w-72 px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                onChange={filterusers}
              />
            </div>
            <div className="flex flex-wrap justify-evenly gap-5 py-5">
              {filteredusers.length != 0 && query.length != 0 ? (
                <>
                  {filteredusers.map((user, index) => {
                    return (
                      <Professional
                        key={index}
                        useraddress={user.useraddress}
                        name={user.name}
                        specialization={user.specialization}
                        available={user.available}
                        totalRatings={user.totalRatings}
                        totalScore={user.totalScore}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {query.length != 0 ? (
                    <>
                      <p>
                        Currently,professionals speacialized in {query} are not
                        available
                      </p>
                    </>
                  ) : (
                    <>
                      {users.map((user, index) => {
                        return (
                          <Professional
                            key={index}
                            useraddress={user.useraddress}
                            name={user.name}
                            specialization={user.specialization}
                            available={user.available}
                            totalRatings={user.totalRatings}
                            totalScore={user.totalScore}
                          />
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
