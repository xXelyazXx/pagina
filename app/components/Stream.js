import { Link } from "@chakra-ui/react";
import './Stream.css';



export default function Stream() {
    return (
        <div className="a">
            <Link href="https://www.youtube.com/@FVNIglesia/streams" isExternal>
                <div className="container">
                    <img
                        src="/imagenes/paisaje1.jpg"
                        alt="Descripción de la imagen"
                        className="image"
                    />
                    <div className="overlay">

                        <h3 className="text">Transmisiones en vivo </h3>

                        <button className="button">Ver Ahora</button>
                    </div>
                </div>
            </Link>
        </div>
    );
}