"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type ButtonProps = {}; // You can add props here if needed in the future

const Button: React.FC<ButtonProps> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="buttons">
        <button className="main-button">
          <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z" />
          </svg>
        </button>
        <button className="discord-button button" style={{transitionDelay: '0s, 0s, 0s', transitionProperty: 'translate, background, box-shadow'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30}>
            <path d="M18.654 6.368a15.87 15.87 0 0 0-3.908-1.213.06.06 0 0 0-.062.03c-.17.3-.357.693-.487 1a14.628 14.628 0 0 0-4.39 0 9.911 9.911 0 0 0-.494-1 .061.061 0 0 0-.063-.03c-1.35.233-2.664.64-3.908 1.213a.05.05 0 0 0-.025.022c-2.49 3.719-3.172 7.346-2.837 10.928a.068.068 0 0 0 .025.045 15.936 15.936 0 0 0 4.794 2.424.06.06 0 0 0 .067-.023c.37-.504.699-1.036.982-1.595a.06.06 0 0 0-.034-.084 10.65 10.65 0 0 1-1.497-.714.06.06 0 0 1-.024-.08.06.06 0 0 1 .018-.022c.1-.075.201-.155.297-.234a.06.06 0 0 1 .061-.008c3.143 1.435 6.545 1.435 9.65 0a.062.062 0 0 1 .033-.005.061.061 0 0 1 .03.013c.096.08.197.159.298.234a.06.06 0 0 1 .016.081.062.062 0 0 1-.021.021c-.479.28-.98.518-1.499.713a.06.06 0 0 0-.032.085c.288.558.618 1.09.98 1.595a.06.06 0 0 0 .067.023 15.885 15.885 0 0 0 4.802-2.424.06.06 0 0 0 .025-.045c.4-4.14-.671-7.738-2.84-10.927a.04.04 0 0 0-.024-.023Zm-9.837 8.769c-.947 0-1.726-.87-1.726-1.935 0-1.066.765-1.935 1.726-1.935.968 0 1.74.876 1.726 1.935 0 1.066-.765 1.935-1.726 1.935Zm6.38 0c-.946 0-1.726-.87-1.726-1.935 0-1.066.764-1.935 1.725-1.935.969 0 1.741.876 1.726 1.935 0 1.066-.757 1.935-1.726 1.935Z" />
          </svg>
        </button>
        <button className="twitter-button button" style={{transitionDelay: '0.1s, 0s, 0.1s', transitionProperty: 'translate, background, box-shadow'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30}>
            <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z" />
          </svg>
        </button>
        <button className="reddit-button button" style={{transitionDelay: '0.2s, 0s, 0.2s', transitionProperty: 'translate, background, box-shadow'}}>
          <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z" />
            <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z" />
          </svg>
        </button>
        <button className="messenger-button button" style={{transitionDelay: '0.3s, 0s, 0.3s', transitionProperty: 'translate, background, box-shadow'}}>
          <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z" />
          </svg>
        </button>
        <button className="pinterest-button button" style={{transitionDelay: '0.4s, 0s, 0.4s', transitionProperty: 'translate, background, box-shadow'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30}>
            <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z" />
          </svg>
        </button>
        <button className="instagram-button button" style={{transitionDelay: '0.5s, 0s, 0.5s', transitionProperty: 'translate, background, box-shadow'}}>
          <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z" />
          </svg>
        </button>
        <button className="snapchat-button button" style={{transitionDelay: '0.6s, 0s, 0.6s', transitionProperty: 'translate, background, box-shadow'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30}>
            <path d="M21.929 16.407c-.139-.378-.404-.58-.705-.748a1.765 1.765 0 0 0-.154-.08l-.273-.139c-.94-.499-1.674-1.127-2.183-1.872a4.234 4.234 0 0 1-.375-.664c-.043-.125-.04-.195-.01-.259a.424.424 0 0 1 .121-.125l.44-.289a14.1 14.1 0 0 0 .464-.306c.386-.27.656-.558.825-.878a1.745 1.745 0 0 0 .086-1.45c-.256-.672-.891-1.09-1.661-1.09-.206 0-.41.027-.609.082.008-.46-.002-.947-.043-1.424-.146-1.68-.734-2.56-1.347-3.263a5.367 5.367 0 0 0-1.368-1.1C14.204 2.27 13.15 2 11.998 2c-1.15 0-2.2.27-3.131.801-.515.29-.978.663-1.371 1.104-.613.703-1.2 1.584-1.347 3.263-.041.477-.05.965-.045 1.422a2.288 2.288 0 0 0-.608-.081c-.77 0-1.405.418-1.66 1.091a1.747 1.747 0 0 0 .083 1.451c.17.32.44.608.825.877.103.072.263.174.464.307l.424.276c.054.036.1.083.136.138.033.066.034.137-.015.271a4.204 4.204 0 0 1-.369.65c-.497.729-1.21 1.346-2.12 1.84-.481.255-.982.425-1.193 1-.16.435-.055.929.35 1.344.148.156.32.287.51.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.128.325.324.61.099.147.225.275.37.375.413.286.876.303 1.369.322.444.018.947.038 1.521.225.238.08.486.233.773.41.687.423 1.63 1.003 3.207 1.003s2.525-.583 3.22-1.008c.284-.175.53-.325.761-.401.575-.19 1.079-.21 1.523-.226.491-.019.955-.038 1.369-.323.172-.12.315-.277.42-.46.142-.24.137-.409.27-.525a.783.783 0 0 1 .238-.108 5.552 5.552 0 0 0 1.268-.506c.2-.108.382-.25.536-.42l.005-.006c.38-.406.475-.886.32-1.309Zm-1.401.753c-.855.473-1.424.421-1.866.706-.375.242-.153.763-.425.95-.337.233-1.327-.015-2.607.408-1.056.349-1.73 1.352-3.629 1.352-1.898 0-2.556-1.001-3.63-1.355-1.277-.422-2.27-.175-2.604-.406-.273-.188-.052-.71-.427-.951-.442-.285-1.011-.234-1.865-.704-.545-.3-.236-.488-.055-.575 3.098-1.499 3.592-3.813 3.613-3.985.027-.207.056-.371-.173-.582-.221-.206-1.202-.813-1.475-1.003-.45-.315-.65-.629-.502-1.015.102-.268.351-.369.612-.369.083 0 .166.01.247.028.495.107.975.356 1.252.422a.477.477 0 0 0 .103.014c.147 0 .2-.075.19-.244-.033-.541-.11-1.596-.024-2.582.117-1.355.555-2.028 1.074-2.622.25-.286 1.42-1.525 3.662-1.525 2.24 0 3.415 1.234 3.664 1.52.52.593.957 1.265 1.073 2.622.085.985.012 2.04-.023 2.581-.013.178.042.244.19.244a.442.442 0 0 0 .102-.013c.278-.067.759-.316 1.253-.422a1.14 1.14 0 0 1 .246-.029c.262 0 .511.102.612.369.147.386-.05.7-.5 1.015-.273.19-1.255.797-1.476 1.002-.23.212-.2.375-.174.583.023.175.517 2.489 3.613 3.986.184.091.492.278-.051.58Z" />
          </svg>
        </button>
        <button className="whatsapp-button button" style={{transitionDelay: '0.7s, 0s, 0.7s', transitionProperty: 'translate, background, box-shadow'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30}>
            <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Cool share button made by: csozi | Website: english.csozi.hu*/

  .buttons {
    position: relative;
    display: grid;
    place-items: center;
    height: fit-content;
    width: fit-content;
    transition: 0.3s;
    border-radius: 50%;
  }

  .buttons:hover {
    padding: 60px;
  }

  .buttons:hover .button {
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }

  .main-button {
    position: relative;
    display: grid;
    place-items: center;
    padding: 10px;
    border: none;
    background: black;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
    border-radius: 50%;
    transition: 0.2s;
    z-index: 100;
  }

  .button {
    position: absolute;
    display: grid;
    place-items: center;
    padding: 10px;
    border: none;
    background: #black;
    box-shadow: 5px 5px 12px rgba(202, 202, 202, 0), -5px -5px 12px rgba(255, 255, 255, 0);
    transition: 0.3s;
    border-radius: 50%;
  }

  .discord-button:hover {
    background: #5865F2;
  }

  .buttons:hover .discord-button {
    translate: 70px 0px;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }

  .twitter-button:hover {
    background: #1CA1F1;
  }

  .buttons:hover .twitter-button {
    translate: 47px -47px;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }

  .reddit-button:hover {
    background: #FF4500;
  }

  .buttons:hover .reddit-button {
    translate: 0px -70px;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }

  .messenger-button:hover {
    background: #0093FF;
  }

  .buttons:hover .messenger-button {
    translate: -47px -47px;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }

  .pinterest-button:hover {
    background: #F0002A;
  }

  .buttons:hover .pinterest-button {
    translate: -70px 0px;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }

  .instagram-button:hover {
    background: #F914AF;
  }

  .buttons:hover .instagram-button {
    translate: -47px 47px;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }

  .snapchat-button:hover {
    background: #FFFC00;
  }

  .buttons:hover .snapchat-button {
    translate: 0px 70px;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }

  .whatsapp-button:hover {
    background: #25D366;
  }

  .buttons:hover .whatsapp-button {
    translate: 47px 47px;
    box-shadow: 5px 5px 12px #cacaca, -5px -5px 12px #ffffff;
  }`;

export default Button;
