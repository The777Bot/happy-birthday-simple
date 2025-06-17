import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [wishCount, setWishCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showPopperConfetti, setShowPopperConfetti] = useState(false);
  const [currentJoke, setCurrentJoke] = useState('');
  const [showJoke, setShowJoke] = useState(false);
  const audioRef = useRef(null);

  const jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!"
    },
    {
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!"
    },
    {
      setup: "What do you call a fake noodle?",
      punchline: "An impasta!"
    },
    {
      setup: "How does a penguin build its house?",
      punchline: "Igloos it together!"
    },
    {
      setup: "Why don't eggs tell jokes?",
      punchline: "They'd crack each other up!"
    },
    {
      setup: "What do you call a can opener that doesn't work?",
      punchline: "A can't opener!"
    },
    {
      setup: "Why did the math book look so sad?",
      punchline: "Because it had too many problems!"
    },
    {
      setup: "What do you call a bear with no teeth?",
      punchline: "A gummy bear!"
    }
  ];

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 1000);
    setTimeout(() => setShowMessage(true), 2000);
  }, []);

  const handleWish = () => {
    setShowConfetti(true);
    setWishCount(prev => prev + 1);
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 2000);
  };

  const handlePopper = () => {
    setShowPopperConfetti(true);
    setTimeout(() => setShowPopperConfetti(false), 2000);
  };

  const handleJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setCurrentJoke(randomJoke);
    setShowJoke(true);
    setShowPopperConfetti(true);
    setTimeout(() => setShowPopperConfetti(false), 2000);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="App">
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
      
      {showConfetti && <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="confetti" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
          }} />
        ))}
      </div>}

      {showPopperConfetti && (
        <div className="popper-container">
          <div className="popper-burst">
            {[...Array(60)].map((_, i) => (
              <div 
                key={i} 
                className="streamer"
                style={{
                  '--angle': `${Math.random() * 360}deg`,
                  '--length': `${Math.random() * 200 + 100}px`,
                  '--delay': `${Math.random() * 0.3}s`,
                  '--color': `hsl(${Math.random() * 360}, 100%, 50%)`,
                  '--width': `${Math.random() * 4 + 2}px`
                }}
              />
            ))}
            <div className="popper-center" />
          </div>
        </div>
      )}

      {showFireworks && <div className="fireworks-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="firework" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.5}s`
          }} />
        ))}
      </div>}
      
      <div className="birthday-container">
        <div className="controls">
          <button className="music-button" onClick={toggleMusic}>
            {isPlaying ? '🔇' : '🎵'}
          </button>
        </div>

        <h1 className="birthday-title">Happy Birthday Dad!</h1>
        
        <div className="cake" onClick={handleWish}>
          🎂
        </div>

        {showMessage && (
          <div className="birthday-message">
            <p>To the most amazing father in the world,</p>
            <p>Thank you for your love, guidance, and support.</p>
            <p>Wishing you a day filled with joy and laughter!</p>
          </div>
        )}

        <div className="interactive-elements">
          <button 
            className="wish-button"
            onClick={handleWish}
          >
            Click for More Wishes! 🎉
          </button>
          <button 
            className="popper-button"
            onClick={handlePopper}
          >
            Pop the Party Popper! 🎊
          </button>
          <button 
            className="joke-button"
            onClick={handleJoke}
          >
            Make Me Laugh! 😄
          </button>
          <div className="wish-counter">
            Wishes sent: {wishCount} ❤️
          </div>
        </div>

        {showJoke && currentJoke && (
          <div className="joke-container">
            <div className="joke-setup">{currentJoke.setup}</div>
            <div className="joke-punchline">{currentJoke.punchline}</div>
          </div>
        )}

        <div className="floating-elements">
          <span className="floating-item">🎁</span>
          <span className="floating-item">🎈</span>
          <span className="floating-item">🎊</span>
          <span className="floating-item">🎉</span>
        </div>

        <div className="balloons">
          🎈 🎈 🎈
        </div>

        <div className="sparkle-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="sparkle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
