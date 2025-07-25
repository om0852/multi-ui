const { motion, AnimatePresence } = window.framerMotion;

const platforms = [
  {
    name: "Twitter",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    color: "bg-[#1DA1F2]",
    shareUrl: (url) => `https://twitter.com/intent/tweet?url=${url}`,
  },
  {
    name: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "bg-[#4267B2]",
    shareUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "bg-[#0A66C2]",
    shareUrl: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  {
    name: "Copy Link",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-gray-600 dark:bg-gray-500",
    action: "copy",
  },
];

const Share_30 = ({
  url = "https://example.com/share-this",
  className = "",
}) => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = (shareUrl) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const handleAction = (platform) => {
    if (platform.action === "copy") {
      handleCopy();
    } else if (platform.shareUrl) {
      handleShare(platform.shareUrl(encodeURIComponent(url)));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share via</span>
      <div className="flex items-center gap-2">
        {platforms.map((platform) => (
          <div key={platform.name} className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredPlatform(platform.name)}
              onMouseLeave={() => setHoveredPlatform(null)}
              onClick={() => handleAction(platform)}
              className={`p-2.5 rounded-full ${platform.color} text-white shadow-lg hover:shadow-xl transition-shadow`}
            >
              {platform.action === "copy" && copied ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                platform.icon
              )}
            </motion.button>

            <AnimatePresence>
              {hoveredPlatform === platform.name && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap"
                >
                  <div className="px-2 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg">
                    {platform.action === "copy" && copied ? "Copied!" : platform.name}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="p-4">
      <Share_30 />
    </div>
  );
};

render(<App />);
