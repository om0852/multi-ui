
const Card10 = ({
  name = 'John Doe',
  title = 'UI/UX Designer',
  email = 'john.doe@example.com',
  imageUrl = 'https://randomuser.me/api/portraits/men/1.jpg',
  onEmailClick = () => {}
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="card">
      <button className="mail" onClick={onEmailClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </button>
      <div className="profile-pic">
        <img 
          src={imageUrl} 
          alt={name}
          className="profile-image"
        />
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name">{name}</span>
          <span className="about-me">{title}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4.005,4.005,0,0,0,4-4A4,4,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" transform="translate(6 598)" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.5-1.6-3.8-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </div>
          <button className="button">Contact Me</button>
        </div>
      </div>
      <style jsx>{`
        .card {
          width: 280px;
          height: 280px;
          background: white;
          border-radius: 32px;
          padding: 3px;
          position: relative;
          box-shadow: #604b4a30 0px 70px 30px -50px;
          transition: all 0.5s ease-in-out;
        }

        .mail {
          position: absolute;
          right: 2rem;
          top: 1.4rem;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .mail svg {
          stroke: #fbb9b6;
          stroke-width: 3px;
          transition: stroke 0.3s ease;
        }

        .mail:hover svg {
          stroke: #f55d56;
        }

        .profile-pic {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          top: 3px;
          left: 3px;
          border-radius: 29px;
          z-index: 1;
          border: 0px solid #fbb9b6;
          overflow: hidden;
          transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 0px 0px;
          transition: all 0.5s ease-in-out 0s;
        }

        .bottom {
          position: absolute;
          bottom: 3px;
          left: 3px;
          right: 3px;
          background: #fbb9b6;
          top: 80%;
          border-radius: 29px;
          z-index: 2;
          box-shadow: rgba(96, 75, 74, 0.19) 0px 5px 5px 0px inset;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        }

        .content {
          position: absolute;
          bottom: 0;
          left: 1.5rem;
          right: 1.5rem;
          height: 160px;
        }

        .name {
          display: block;
          font-size: 1.2rem;
          color: white;
          font-weight: bold;
          margin-top: 1rem;
        }

        .about-me {
          display: block;
          font-size: 0.9rem;
          color: white;
          margin-top: 0.5rem;
        }

        .bottom-bottom {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .social-links-container {
          display: flex;
          gap: 1rem;
        }

        .social-links-container svg {
          height: 20px;
          fill: white;
          filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.13));
          transition: all 0.3s ease;
        }

        .social-links-container svg:hover {
          fill: #f55d56;
          transform: scale(1.2);
        }

        .button {
          background: white;
          color: #fbb9b6;
          border: none;
          border-radius: 20px;
          font-size: 0.6rem;
          padding: 0.4rem 0.6rem;
          box-shadow: rgba(165, 132, 130, 0.13) 0px 5px 5px 0px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .button:hover {
          background: #f55d56;
          color: white;
        }

        .card:hover {
          border-top-left-radius: 55px;
        }

        .card:hover .bottom {
          top: 20%;
          border-radius: 80px 29px 29px 29px;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
        }

        .card:hover .profile-pic {
          width: 100px;
          height: 100px;
          aspect-ratio: 1;
          top: 10px;
          left: 10px;
          border-radius: 50%;
          z-index: 3;
          border: 7px solid #fbb9b6;
          box-shadow: rgba(96, 75, 74, 0.19) 0px 5px 5px 0px;
          transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
        }

        .card:hover .profile-pic:hover {
          transform: scale(1.3);
          border-radius: 0px;
        }

        .card:hover .profile-image {
          transform: scale(2.5);
          object-position: 0px 25px;
          transition: all 0.5s ease-in-out 0.5s;
        }
      `}</style>
    </div>
  );
};

render(
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '2rem'
  }}>
    <Card10 />
  </div>
);