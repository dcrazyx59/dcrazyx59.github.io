import { useEffect ,useState , useRef} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import customStyle from '../../utils/maps/dark_map.json'

export default function Introduction() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: customStyle as maplibregl.StyleSpecification,
            center: [-3.676972, 40.457083],
            zoom: 3.9,
            attributionControl: false
        });

        map.on('load', () => {
          setTimeout(() => {
            map.flyTo({
              center: [-3.676972, 40.457083],
              zoom: 14,
              essential: true
            });
          }, 800);
        });

        map.on('load', () => {
          new maplibregl.Marker({
              color: "#222222",
              draggable: false
          })
          .setLngLat([-3.676972, 40.457083])
          .addTo(map);
        });

        mapRef.current = map;

        // Cleanup function
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
    
          const eyes = document.querySelectorAll('.eye');
    
          eyes.forEach((eye) => {
            const rect = eye.getBoundingClientRect();
            const eyeX = rect.left + rect.width / 2;
            const eyeY = rect.top + rect.height / 2;
    
            const angleDeg = angle(mouseX, mouseY, eyeX, eyeY);
    
            eye.style.transform = `rotate(${90 + angleDeg}deg)`;
          });
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('scroll', handleMouseMove);
    
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.addEventListener('scroll', handleMouseMove);
        };
      }, []);
    
      function angle(cx : any, cy : any, ex : any, ey : any) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = (rad * 180) / Math.PI;
        return deg;
      }
    
    return(
        <section className="flex h-screen bg-secondary justify-center align-center m-auto pt-40 ">
            <div className="absolute">
                {/* Map container */}
                <div ref={mapContainer} className="relative w-[clamp(15em,80vw,20em)] h-[clamp(18em,100vw,25em)]"/>
            </div>
            {/* <iframe width="500" height="300" src="https://api.maptiler.com/maps/backdrop/?key=W8F9znTXAD3GgukNA7Rh#10.0/40.46945/-3.71258"></iframe> */}
          <div id="anchor" className="eyes absolute bottom-[-22px] flex flex-row gap-3.5">
              <img src="/eye.png" className="eye relative size-5.5 mb-6 rounded-2xl filter invert" alt="" />
              <img src="/eye.png" className="eye relative size-5.5 mb-6 rounded-2xl filter invert" alt="" />
          </div>
          <img src="/cat_black.png" alt="" className='absolute bottom-[-45px] w-[150px] h-[150px] filter invert'/>
        </section>
    )
}