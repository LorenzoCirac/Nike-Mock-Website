/* IMAGES AND ICONS */
import headerLogo from "../assets/images/logo.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";

/* CONSTANTS */
import { navBarLinks } from "../constants/constants";

const NavBar = () => {

    return (
        <header className="padding-x py-8  
        absolute w-full z-10">
            <nav
                className="flex justify-between
                items-center">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={125} height={125} />
                </a>
                <ul className="flex-1 flex justify-end 
                items-center gap-12 max-md:hidden">
                    {navBarLinks.map((link) => {
                        return (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="min-md:hidden" >
                    <img
                        src={hamburgerIcon}
                        alt="Hambruger Icon"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
