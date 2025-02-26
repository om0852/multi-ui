"use client";
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
  | "Exo"
  | "Alegreya"
  | "Varela Round"
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
  | "Great Vibes"
  | "Mochiy Pop P One"
  | "Russo One"
  | "Lobster Two"
  | "Caveat"
  | "Orbitron"
  | "Sora"
  | "Teko"
  | "Zilla Slab Highlight"
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
  | "Be Vietnam"
  | "Allan"
  | "Mukta"
  | "Hammersmith One"
  | "Rakkas"
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

const loadFont = (fontFamily: string, onLoad: () => void) => {
  const formattedFont = fontFamily.replace(/\s+/g, "+");
  const linkId = `font-${formattedFont}`;

  if (!document.getElementById(linkId)) {
    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${formattedFont}:wght@100;200;300;400;500;600;700;800;900&display=swap`;

    link.onload = () => onLoad();
    link.onerror = () => console.error(`Failed to load the font: ${fontFamily}`);

    document.head.appendChild(link);
  } else {
    onLoad();
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
    loadFont(fontFamily, () => setFontLoaded(true));
  }, [fontFamily]);

  const style: React.CSSProperties = {
    fontFamily: fontLoaded ? `'${fontFamily}', sans-serif` : "sans-serif",
    fontWeight,
    fontSize,
    color,
  };

  return <div style={style}>{children}</div>;
};

export default FontChanger;
