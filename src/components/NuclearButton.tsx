import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Radiation, Zap } from "lucide-react";
import { toast } from "sonner";

const NuclearButton = () => {
  const [pressed, setPressed] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [warnings, setWarnings] = useState(0);
  const [shaking, setShaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sirenRef = useRef<HTMLAudioElement | null>(null);

  // Beep sound effect (using Web Audio API)
  const playBeep = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = "square";
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  // Alarm sound effect
  const playAlarm = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = "sawtooth";
    gainNode.gain.value = 0.2;
    
    // Alternating frequencies for alarm effect
    let time = audioContext.currentTime;
    for (let i = 0; i < 6; i++) {
      oscillator.frequency.setValueAtTime(i % 2 === 0 ? 400 : 600, time);
      time += 0.2;
    }
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1.2);
  };

  const handleButtonPress = () => {
    setPressed(true);
    setWarnings(warnings + 1);
    playBeep();
    setShaking(true);
    
    setTimeout(() => setShaking(false), 500);

    if (warnings === 0) {
      toast.error("⚠️ WARNING: System armed!", {
        description: "Please step away from the button."
      });
    } else if (warnings === 1) {
      toast.error("🚨 CRITICAL WARNING!", {
        description: "This is your final warning!"
      });
    } else if (warnings >= 2) {
      playAlarm();
      setCountdown(10);
      toast.error("☢️ LAUNCH SEQUENCE INITIATED!", {
        description: "There's no turning back now..."
      });
    }

    setTimeout(() => setPressed(false), 200);
  };

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        playBeep();
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      toast("🎆 Just kidding!", {
        description: "No actual nukes here. Stay safe!"
      });
      setCountdown(null);
      setWarnings(0);
    }
  }, [countdown]);

  return (
    <div className="relative w-full max-w-2xl mx-auto p-8">
      {/* Warning lights */}
      <div className="absolute top-0 left-0 right-0 flex justify-around mb-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              countdown !== null ? "bg-red-500 animate-pulse" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Main container */}
      <div
        className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 border-4 border-yellow-500 shadow-2xl ${
          shaking ? "animate-[shake_0.5s_ease-in-out]" : ""
        }`}
      >
        {/* Radiation warnings */}
        <div className="absolute top-4 right-4">
          <Radiation className="w-8 h-8 text-yellow-500 animate-pulse" />
        </div>
        <div className="absolute top-4 left-4">
          <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
        </div>

        {/* Warning text */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-red-500 mb-2 uppercase tracking-wider">
            ⚠️ Do NOT Press! ⚠️
          </h2>
          <p className="text-yellow-500 text-sm uppercase tracking-wide">
            Absolutely Under No Circumstances
          </p>
        </div>

        {/* Countdown display */}
        {countdown !== null && (
          <div className="mb-6 text-center">
            <div className="text-6xl font-bold text-red-500 animate-pulse">
              {countdown}
            </div>
            <p className="text-yellow-500 uppercase text-sm mt-2">
              Detonation Sequence Active
            </p>
          </div>
        )}

        {/* The Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleButtonPress}
            className={`relative w-48 h-48 rounded-full bg-gradient-to-br from-red-600 via-red-500 to-red-700 
              shadow-[0_0_30px_rgba(239,68,68,0.5),inset_0_-8px_20px_rgba(0,0,0,0.3)] 
              border-8 border-red-900 cursor-pointer transition-all duration-150
              hover:shadow-[0_0_50px_rgba(239,68,68,0.8),inset_0_-8px_20px_rgba(0,0,0,0.3)]
              active:shadow-[0_0_20px_rgba(239,68,68,0.4),inset_0_4px_20px_rgba(0,0,0,0.5)]
              ${pressed ? "scale-95" : "scale-100"}
              ${countdown !== null ? "animate-pulse" : ""}`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20" />
            <Zap className="absolute inset-0 m-auto w-16 h-16 text-white drop-shadow-lg" />
          </button>
        </div>

        {/* Warning counter */}
        <div className="text-center text-yellow-500 text-sm">
          <p>Warning Level: {warnings}/3</p>
          {warnings >= 3 && (
            <p className="text-red-500 font-bold animate-pulse mt-2">
              ☢️ MAXIMUM THREAT LEVEL ☢️
            </p>
          )}
        </div>

        {/* Technical details */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-muted-foreground">
          <div className="bg-slate-950/50 p-3 rounded border border-yellow-500/20">
            <p className="text-yellow-500 font-mono">YIELD:</p>
            <p className="font-mono">50 Megatons</p>
          </div>
          <div className="bg-slate-950/50 p-3 rounded border border-yellow-500/20">
            <p className="text-yellow-500 font-mono">STATUS:</p>
            <p className="font-mono">{countdown !== null ? "ARMED" : "STANDBY"}</p>
          </div>
        </div>
      </div>

      {/* Bottom warning strip */}
      <div className="mt-4 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 p-2 text-center">
        <p className="text-black font-bold text-xs uppercase tracking-wider">
          Authorized Personnel Only - Unauthorized Access Prohibited
        </p>
      </div>
    </div>
  );
};

export default NuclearButton;
