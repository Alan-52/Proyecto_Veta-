import { FaSpinner } from "react-icons/fa";
import styles from '../assets/Styles/Spinner.module.css'

export function Spinner() {
    return (
       <div className = {styles.spinner}>
            <FaSpinner className = {styles.spinning} size = {80} />
       </div>
    )
}
