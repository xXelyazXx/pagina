"use client";
import Anuncios from "@/components/ui/Anuncios";
import Bienvenida from "@/components/ui/Bienvenida";
import Transmision from "@/components/ui/Transmision";
import Consejeria from "@/components/ui/Consejeria";

export default function Home() {
  return (
    <div>
      <div className="container-Anuncios">
        <Anuncios />
        <Bienvenida />
      </div>
      <div className="container-Transmision">
        <Transmision />
      </div>
      <div className="container-Consejeria">
        <Consejeria />
      </div>
    </div>
  );
}
