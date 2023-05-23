import ui from "../../assets/Log.svg";
const Header = () => {
  return (
    <header className=" py-5 shadow-2xl ">
      <div className="container mx-auto">
        <div className="flex justify-between ">
          <img src={ui} />
        </div>
      </div>
    </header>
  );
};

export default Header;
