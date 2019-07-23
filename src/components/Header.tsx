import Link from 'next/link';
import ReactPath from "../ReactPath";

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href={ReactPath.HOME_PAGE}>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href={ReactPath.ABOUT_PAGE}>
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
