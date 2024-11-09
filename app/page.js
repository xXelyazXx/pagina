"use client"
import ImageSlider from './components/imageSlider';
import GridInfo from './components/gridInfo';
import Stream from './components/Stream';
import Conversemos from './components/Conversemos';

export default function Home() {
  return (
    <>
    {/* fotos en carrusel */}
      <section>
        <ImageSlider />
      </section>

    {/* informacion de Bienvenida, Grupos de vida y Amor por la casa en grilla */}
      <section className="section2">
        <GridInfo />
      </section>

    {/* Stream de la iglesia */}
      <section className="section3">
        <Stream />
      </section>

    {/* Conversemos */}
      <section className="section4">
        <Conversemos />
      </section>
    </>
  );
}