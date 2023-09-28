import { useRef, useEffect } from "react";
import { ImageCard } from "../listitens/listitens.styled";

const LazyImage = ({ src, alt }:{src?:any,alt?:any}) => {
  const imageRef = useRef<HTMLImageElement>(null!);
  const observerRef = useRef<any>(null!);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // A imagem está visível na tela, carregue-a
          imageRef.current.src = src;
          observerRef.current.unobserve(imageRef.current); // Interrompe a observação após o carregamento
        }
      });
    });

    observerRef.current.observe(imageRef.current);

    return () => {
      // Limpa o observador quando o componente for desmontado
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src]);

  return <ImageCard ref={imageRef} alt={alt} loading="lazy" />;
};

export default LazyImage;