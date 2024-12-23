"use client"
import React, { useEffect, useState } from "react";

type FontFamily =
  | "Roboto"
  | "Open Sans"
  | "Lato"
  | "Montserrat"
  | "Playfair Display"
  | "Poppins"
  | "Merriweather"
  | "Raleway"
  | "Arial"
  | "Verdana"
  | "Nunito"
  | "Source Sans Pro"
  | "Lora"
  | "Quicksand"
  | "Oswald"
  | "Ubuntu"
  | "Fira Sans"
  | "Roboto Slab"
  | "Bitter"
  | "Work Sans"
  | "Droid Sans"
  | "Cabin"
  | "PT Sans"
  | "Muli"
  | "Zilla Slab"
  | "Tisa"
  | "Playfair Display"
  | "Exo"
  | "Alegreya"
  | "Varela Round"
  | "Lora"
  | "Poppins"
  | "Lobster"
  | "Roboto Condensed"
  | "Signika"
  | "Merriweather Sans"
  | "Fjalla One"
  | "Inconsolata"
  | "Josefin Sans"
  | "Titillium Web"
  | "Noto Sans"
  | "Monda"
  | "Vollkorn"
  | "Dancing Script"
  | "Slabo 27px"
  | "Arvo"
  | "Pacifico"
  | "Amatic SC"
  | "Righteous"
  | "Anton"
  | "Bree Serif"
  | "Catamaran"
  | "Crimson Pro"
  | "Yanone Kaffeesatz"
  | "Pacifico"
  | "Great Vibes"
  | "Mochiy Pop P One"
  | "Russo One"
  | "Lobster Two"
  | "Caveat"
  | "Orbitron"
  | "Sora"
  | "Teko"
  | "Zilla Slab Highlight"
  | "Lato"
  | "Viga"
  | "Prata"
  | "Barlow Condensed"
  | "Pangolin"
  | "Fredoka One"
  | "Oxygen"
  | "Karla"
  | "Bungee"
  | "Cinzel"
  | "Fira Mono"
  | "Josefin Slab"
  | "Fugaz One"
  | "Satisfy"
  | "Candal"
  | "Tisa Sans"
  | "Abel"
  | "Hind"
  | "Titillium"
  | "Cinzel Decorative"
  | "Droid Serif"
  | "Lexend"
  | "Amatic SC"
  | "Be Vietnam"
  | "Allan"
  | "Zilla Slab"
  | "Mukta"
  | "Bitter"
  | "Hammersmith One"
  | "Bree Serif"
  | "Rakkas"
  | "Anton"
  | "Shanti"
  | "Alfa Slab One"
  | "Cairo"
  | "Red Hat Display"
  | "Rochester"
  | "Sacramento";


interface FontChangerProps {
  fontFamily: FontFamily;
  fontWeight?: string | number;
  fontSize?: string;
  color?: string;
  children: React.ReactNode;
}

const loadFont = (fontFamily: string) => {
  const linkId = `font-${fontFamily.replace(/\s+/g, '-')}`;
  if (!document.getElementById(linkId)) {
    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
      /\s+/g,
      "+"
    )}&display=swap`;

    link.onerror = () => {
      console.error(`Failed to load the font: ${fontFamily}`);
    };

    document.head.appendChild(link);
  }
};

const FontChanger: React.FC<FontChangerProps> = ({
  fontFamily,
  fontWeight = "400",
  fontSize = "16px",
  color = "#000",
  children,
}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFont(fontFamily);

    // Try setting a timeout to simulate a network delay for font loading
    const timer = setTimeout(() => {
      setFontLoaded(true); // fallback to a default font if loading takes too long
    }, 5000); // 5 seconds timeout

    return () => clearTimeout(timer);
  }, [fontFamily]);

  const style = {
    fontFamily: fontLoaded ? `'${fontFamily}', sans-serif` : 'sans-serif',
    fontWeight,
    fontSize,
    color,
  };

  return <div style={style}>{children}</div>;
};

export default FontChanger;
