import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, speed = 80, delay = 800, pauseAfterComplete = 2000, className = '' }) => {
  const [displayedTexts, setDisplayedTexts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (currentIndex >= texts.length) {
      // All texts completed, wait then restart
      const restartTimeout = setTimeout(() => {
        setDisplayedTexts([]);
        setCurrentText('');
        setCurrentIndex(0);
        setIsTyping(true);
        setIsDeleting(false);
      }, pauseAfterComplete);
      return () => clearTimeout(restartTimeout);
    }

    const currentFullText = texts[currentIndex];
    let charIndex = 0;
    let typingInterval = null;

    // Start typing after delay (except for first text)
    const startDelay = currentIndex === 0 && displayedTexts.length === 0 ? 500 : delay;
    
    const timeoutId = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (charIndex < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, charIndex + 1));
          charIndex++;
        } else {
          if (typingInterval) {
            clearInterval(typingInterval);
          }
          // Move to next text after a brief pause
          setTimeout(() => {
            setDisplayedTexts(prev => [...prev, currentFullText]);
            setCurrentText('');
            setCurrentIndex(prev => prev + 1);
          }, 600);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [currentIndex, texts, speed, delay, pauseAfterComplete, displayedTexts.length]);

  return (
    <div className={className}>
      {displayedTexts.map((text, index) => (
        <p key={`${index}-${displayedTexts.length}`} className="typing-completed">
          {text}
        </p>
      ))}
      {isTyping && currentText && (
        <p className="typing-active">
          {currentText}
          <span className="typing-cursor">|</span>
        </p>
      )}
    </div>
  );
};

export default TypingAnimation;

