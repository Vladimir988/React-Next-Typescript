import {FC} from 'react';
import Link from "next/link";

const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
        </nav>
    );
};

export default Navbar;