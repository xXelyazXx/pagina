export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video
        className="responsive-video"
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Your browser does not support the video tag.
      </video>
      <div>
        Pagina de inicio
      </div>
    </div>
  );
}