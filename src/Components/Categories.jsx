import { useCallback } from "react"
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styles from '../assets/Styles/Categories.module.css';
import { Navbar } from "../Components/Navbar";


export function Categories () {
    /* const particlesInit = useCallback ((engine) => {
        loadFull (engine)
    }, []) */

    return (
        <>
            <Navbar/>
            <div>
                
                <h1 className = {styles.HorrorTitle}>Terror</h1>
                {/* <Particles
                // id="tsparticles"
                // options={options}
                init = {particlesInit}  
                /> */}
            </div>
            <div className = {styles.banner} style = {{"--quantity": 10}}>
                <div className = {styles.slider}>
                    <div className = {styles.item} style = {{"--position": 1}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/Brightburn.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 2}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/DeadSilence.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 3}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/Terrifier3.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 4}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/Alien.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 5}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/QueenMarry.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 6}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/Hellraiser.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 7}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/Tarot.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 8}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/PrimeraProfecia.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 9}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/Departamento7a.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 10}}>
                        <img src = "../../public/IMGS-CARTELERA/Terror/Smile2.png"  alt="" />
                    </div>
                    
                </div>
            </div>

            <h1 className = {styles.AccionTitle}>Accion</h1>
            <div className = {styles.banner} style = {{"--quantity": 10}}>
                <div className = {styles.slider}>
                    <div className = {styles.item} style = {{"--position": 1}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/BadBoys.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 2}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/Beekeeper.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 3}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/Equalaizer.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 4}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/Furiosa.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 5}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/Ghostbusters.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 6}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/KillBoy.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 7}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/MisionHostil.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 8}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/PlanetaSimios.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 9}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/Thor.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 10}}>
                        <img src = "../../public/IMGS-CARTELERA/Accion/Venom.png"  alt="" />
                    </div>
                    
                </div>
            </div>

            <h1 className = {styles.SuspenseTitle}>Suspenso</h1>
            <div className = {styles.banner} style = {{"--quantity": 10}}>
                <div className = {styles.slider}>
                    <div className = {styles.item} style = {{"--position": 1}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/Countdown.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 2}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/Hacker.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 3}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/ElHoyo2.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 4}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/ElJockey.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 5}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/NoTeMuevas.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 6}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/NuncaTeSueltes.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 7}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/Outside.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 8}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/ParanoIa.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 9}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/Piscina.png"  alt="" />
                    </div>
                    <div className = {styles.item} style = {{"--position": 10}}>
                        <img src = "../../public/IMGS-CARTELERA/Suspenso/Trap.png"  alt="" />
                    </div>
                    
                </div>
            </div>

           
        </>
        
        
    )
}