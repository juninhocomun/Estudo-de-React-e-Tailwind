import "./header.css";
function Header() {
  return (
    <header className="bg-[#ececec] absolute top-0 left-0 w-full h-[8vh] pr-5 pb-1 pl-5 flex items-center justify-between">
      <div className="flex items-center justify-center ">
        <input type="checkbox"  id="checkbox" />
        <label className="menu-hamburger cursor-pointer w-10 h-2.5 mb-3" htmlFor="checkbox">
          <span className="line"></span>
        </label>
      </div>
      <div className="flex justify-between w-[auto] gap-5 h-8 ">
        <input
          type="text"
          className="bg-[#b6b6b6] w-[30vw] text-gray-900 pl-3 pt-3 pb-3  text-xl h-[5vh] rounded-3xl border-none outline-none"
          placeholder="Search"
        />
        <i className="fa-solid fa-magnifying-glass text-[1.5rem]  text-[#474a53] cursor-pointer pt-1"></i>
      </div>
      <div className="w-[auto] h-[90%] rounded-full overflow-hidden  mt-1 flex items-center justify-center">
        <img
          className="w-auto h-full"
          src="https://i.pinimg.com/474x/e6/cc/d5/e6ccd584be9f59102d1e2c6d592e5e50.jpg"
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
