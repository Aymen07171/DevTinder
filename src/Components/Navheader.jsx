import { useNavigate } from "react-router-dom";

const Navheader = () => {
  const navigate = useNavigate();


  return (

    <nav className="navbar bg-base-300">
      <div className="flex-1">
        <button className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
          🧑‍💻 DevTinder
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </nav>


  );
};

export default Navheader;
