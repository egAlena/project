import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="w-full h-[60px] flex flex-row items-center justify-center bg-[#E0FBFF]">
      <div className="w-[50%] pl-[50px]">
        <Link to="/">
          <img width="200px" src="../public/img/logo1.png" alt="лого" />
        </Link>
      </div>
      <div className="flex-row w-[50%] h-full pr-[50px] pl-[100px] bg-[#E0FBFF] flex flex-row ">
        <Link to="/about" className="decoration-none text-[#ABC4FF] font-['Comic_Sans_MS'] text-[24px] font-bold m-auto">About</Link>
        <Link to="/catalog" className="decoration-none text-[#ABC4FF] font-['Comic_Sans_MS'] text-[24px] font-bold m-auto">Catalog</Link>
        <Link to="/expenses" className="decoration-none text-[#ABC4FF] font-['Comic_Sans_MS'] text-[24px] font-bold m-auto">Expenses</Link>
      </div>
    </nav>
  );
};
export default Header;