import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, HandMetal } from 'lucide-react'

// Note: In a real implementation, you'd need to import and use actual WebGL and gesture recognition libraries.
// For this example, we'll simulate these effects.

const InteractivePitchDeck = () => {
  const canvasRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gestureMode, setGestureMode] = useState(false);

  const slides = [
    "Individual Metrics",
    "Integrated Dashboard",
    "Market Opportunity",
    "Future Potential"
  ];

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      animateParticles(ctx);
    }
  }, [currentSlide]);

  const animateParticles = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const particleCount = (currentSlide + 1) * 50;
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * ctx.canvas.width;
      const y = Math.random() * ctx.canvas.height;
      const hue = (currentSlide * 60 + Math.random() * 60) % 360;
      ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.5)`;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleGestureToggle = () => {
    setGestureMode(!gestureMode);
  };

  const handleCanvasClick = (event) => {
    if (gestureMode) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (y < rect.height / 2) {
        handleNextSlide();
      } else {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Cloud Admin Agent: Interactive Pitch Deck</CardTitle>
        <CardDescription>Experience the evolution from individual instruments to a full orchestra</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <canvas 
            ref={canvasRef} 
            width="600" 
            height="400" 
            className="w-full h-64 bg-gray-100 rounded-lg mb-4"
            onClick={handleCanvasClick}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white text-center">
            {slides[currentSlide]}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button onClick={handleNextSlide} className="flex items-center">
            <Video className="mr-2 h-4 w-4" /> Next Slide
          </Button>
          <Button onClick={handleGestureToggle} variant={gestureMode ? "default" : "outline"} className="flex items-center">
            <HandMetal className="mr-2 h-4 w-4" /> {gestureMode ? "Gesture On" : "Gesture Off"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractivePitchDeck;
