import React, { useState } from "react";
import BirthdayLogin from "./pages/BirthdayLogin";
import LandingPage from "./components/LandingPage";
import IntroPage from "./components/IntroPage";
import LifeStats from "./components/LifeStats";
import MemoryGallery from "./components/MemoryGallery";
import Timeline from "./components/TimeLine";
import SpinWheel from "./components/SpinWheel";
import FloatingBubbles from "./components/FloatingBubbles";
import LoveLetter from "./components/LoveLetter";
import GiftBox from "./components/GiftBox";
import Fireworks from "./components/Fireworks";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <BirthdayLogin onSuccess={() => setUnlocked(true)} />;
  }

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <div className="snap-start"><LandingPage /></div>
      <div className="snap-start"><IntroPage /></div>
      <div className="snap-start"><LifeStats /></div>
      <div className="snap-start"><MemoryGallery /></div>
      <div className="snap-start"><Timeline /></div>
      <div className="snap-start"><SpinWheel /></div>
      <div className="snap-start"><FloatingBubbles /></div>
      <div className="snap-start"><LoveLetter /></div>
      <div className="snap-start"><GiftBox /></div>
      <div className="snap-start"><Fireworks /></div>
    </div>
  );
}

export default App;
