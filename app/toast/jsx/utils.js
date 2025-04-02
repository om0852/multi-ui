export const positionClasses = {
  'top-right': 'absolute top-0 right-0',
  'top-left': 'absolute top-0 left-0',
  'bottom-right': 'absolute bottom-0 right-0',
  'bottom-left': 'absolute bottom-0 left-0',
};

export const useToastTimer = (autoDismiss, duration, close, onHoverPause) => {
  const handleMouseEnter = () => {
    if (onHoverPause) {
      clearTimeout(timer);
    }
  };

  const handleMouseLeave = () => {
    if (onHoverPause) {
      timer = setTimeout(close, duration);
    }
  };

  let timer;

  if (autoDismiss) {
    timer = setTimeout(close, duration);
  }

  return { handleMouseEnter, handleMouseLeave };
}; 