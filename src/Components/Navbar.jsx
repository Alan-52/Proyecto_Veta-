import { useState } from 'react';
import styles from '../assets/Styles/Navbar.module.css'
import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../Hooks/useQuery';
import { useEffect } from 'react';
import Logo from '../assets/IMG/logo_Veta4.png'
import { Link } from "react-router-dom";




export function Navbar() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const history = useNavigate();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        history("/?search=" + searchText );
        setSearchText(" ");
  
    };

    

   

    return (
        <>
            <div className = {styles.navbar}>
                <Link to = "/"><img src = {Logo} alt="" className = {styles.logo} /></Link>
                <ul className = {styles.list}>
                    <Link to = "/"><li>Inicio</li></Link>
                    <Link to = "/movies"><li>Cartelera</li></Link>
                    <Link to = "/about"><li>Sobre Nosotros</li></Link>
                    <Link to = "/contact"><li>Contactanos </li></Link>
                    
                    
                </ul>
                <form className = {styles.Searchcontainer} onSubmit = {handleSubmit}>
                    <div className = {styles.searchBox}>
                        <input type="text" className = {styles.searchInput} value = {searchText} onChange = {(e) => setSearchText(e.target.value)}/>
                        <button className = {styles.SearchButton} type = "submit" >
                            <FaSearch size = {20}/>
                        </button>
                    </div>
                </form>
                <div className = {styles.goToLogin}>
                    <Link to = "/login"><IoMdPerson /></Link> 
                </div>
                
                
                
                
                
            </div>
            
        </>
        
    )
}
