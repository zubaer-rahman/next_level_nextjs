import SearchBar from '@/components/clients/SearchBar';
import Link from 'next/Link';
import "../styles/globals.css";
 
  
const header = () => {
    return (
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <SearchBar />
        </nav>
        
    );
};

export default header;