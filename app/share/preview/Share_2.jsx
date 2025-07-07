
const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    display: inline-block;
    font-family: "Arial", sans-serif;
    overflow: visible;
  }

  .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    padding: 14px 28px;
    border-radius: 50px;
    cursor: pointer;
    transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
                transform 0.3s ease,
                box-shadow 0.4s ease;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 10;
    overflow: hidden;
  }

  .button-content::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(110, 142, 251, 0.4), rgba(167, 119, 227, 0.4));
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }

  .button-content::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
    transform: scale(0);
    transition: transform 0.6s ease-out;
    z-index: -1;
  }

  .button-content:hover::before {
    opacity: 1;
  }

  .button-content:hover::after {
    transform: scale(1);
  }

  .button-content:hover {
    background: linear-gradient(135deg, #a777e3, #6e8efb);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px) scale(1.03);
  }

  .button-content:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  .text {
    font-size: 18px;
    font-weight: 600;
    margin-right: 12px;
    white-space: nowrap;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: letter-spacing 0.3s ease;
  }

  .button-content:hover .text {
    letter-spacing: 1px;
  }

  .share-icon {
    fill: white;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
                fill 0.3s ease;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }

  .button-content:hover .share-icon {
    transform: rotate(180deg) scale(1.1);
    fill: #ffffff;
  }

  .tooltip-content {
    position: absolute;
    top: 102%;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    background: white;
    border-radius: 15px;
    padding: 22px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
                transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
                visibility 0.5s ease;
    z-index: 100;
    pointer-events: none;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.9);
  }

  .tooltip-container:hover .tooltip-content {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
    pointer-events: auto;
  }

  .social-icons {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
  }

  .social-icon::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    top: 0;
    left: 0;
    transform: scale(0);
    transition: transform 0.4s ease;
  }

  .social-icon:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .social-icon:hover::before {
    transform: scale(1);
  }

  .social-icon svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  .social-icon:hover svg {
    transform: scale(1.2);
  }

  .twitter { background: #1DA1F2; }
  .facebook { background: #3b5998; }
  .linkedin { background: #0077b5; }
`;

const Button = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="button-content">
          <span className="text">Share</span>
          <svg className="share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
        </div>
        <div className="tooltip-content">
          <div className="social-icons">
            <a href="#" className="social-icon twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="white" />
              </svg>
            </a>
            <a href="#" className="social-icon facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white" />
              </svg>
            </a>
            <a href="#" className="social-icon linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

render(<Button />);
