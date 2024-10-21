import { useState } from 'react';
import styles from '../assets/Styles/Navbar.module.css'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../Hooks/useQuery';
import { useEffect } from 'react';

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
        history("/?search=" + searchText);
    };

    return (
        <form className = {styles.Searchcontainer} onSubmit = {handleSubmit}>
            <div className = {styles.searchBox}>
                <input type="text" className = {styles.searchInput} value = {searchText} onChange = {(e) => setSearchText(e.target.value)}/>
                <button className = {styles.SearchButton} type = "submit" >
                    <FaSearch size = {20}/>
                </button>
            </div>
        </form>
    )
}
