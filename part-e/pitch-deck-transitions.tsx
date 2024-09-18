import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, DollarSign, Zap, BarChart } from 'lucide-react'

const TransitionDemo = () => {
  const [currentSlide, setCurrentSlide] = useState('dashboard');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const handleTransition = () => {
    setAnimate(true);
    setTimeout(() => setCurrentSlide(currentSlide === 'dashboard' ? 'market' : 'dashboard'), 1000);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Pitch Deck Transition Demo</CardTitle>
        <CardDescription>Seamless flow from Real-World Impact to Market Opportunity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={`transition-all duration-1000 ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {currentSlide === 'dashboard' ? (
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center p-4 bg-blue-100 rounded-lg">
                <Music className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="font-semibold">Uptime Symphony</div>
                  <div className="text-2xl font-bold">99.99%</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-green-100 rounded-lg">
                <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <div className="font-semibold">Cost Savings Crescendo</div>
                  <div className="text-2xl font-bold">30%</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-yellow-100 rounded-lg">
                <Zap className="h-8 w-8 text-yellow-600 mr-3" />
                <div>
                  <div className="font-semibold">Efficiency Tempo</div>
                  <div className="text-2xl font-bold">40%</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-4 bg-purple-100 rounded-lg">
              <BarChart className="h-12 w-12 text-purple-600 mr-3" />
              <div>
                <div className="font-semibold">Market Growth (CAGR)</div>
                <div className="text-3xl font-bold">23.9%</div>
              </div>
            </div>
          )}
        </div>
        <Button onClick={handleTransition} className="mt-4">
          Transition to {currentSlide === 'dashboard' ? 'Market Opportunity' : 'Dashboard'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TransitionDemo;
