import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <div className="aside">
            <div className="logo">
              <a href="#">
                <span>L</span>MA
              </a>
            </div>
          </div>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://github.com/lma-dev">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lwin-moe-aung-564a58222/">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
