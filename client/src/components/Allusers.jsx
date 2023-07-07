import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import User from "./User";
export default function Allusers() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredusers, setFiltered] = useState(users);
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_APP_BACKEND_URL;
  const fetchdata = () => {
    setLoading(true);
    fetch(`${url}/api/getusers`)
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
        asd.name.toLowerCase().includes(query.toLocaleLowerCase())
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
                placeholder="Search a user by name"
                className="w-ful px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                onChange={filterusers}
              />
            </div>
            <div className="flex flex-wrap justify-evenly gap-5 py-5">
              {filteredusers.length != 0 && query.length != 0 ? (
                <>
                  {filteredusers.map((user, index) => {
                    return (
                      <Link
                        to={`/chat/u/${user.useraddress}`}
                        state={{ name: user.name,gende:user.gender }}
                        key={index}
                      >
                        <User
                          name={user.name}
                          age={user.age}
                          gender={user.gender}
                        />
                      </Link>
                    );
                  })}
                </>
              ) : (
                <>
                  {query.length != 0 ? (
                    <>
                      <p>No users found with name {query}</p>
                    </>
                  ) : (
                    <>
                      {users.map((user, index) => {
                        return (
                          <Link
                            to={`/chat/u/${user.useraddress}`}
                            state={{ name: user.name,gender:user.gender }}
                            key={index}
                          >
                            <User
                              name={user.name}
                              age={user.age}
                              gender={user.gender}
                            />
                          </Link>
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
