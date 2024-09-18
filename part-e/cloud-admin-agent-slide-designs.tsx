import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const marketData = [
  { year: 2022, value: 100 },
  { year: 2023, value: 123.9 },
  { year: 2024, value: 153.5 },
  { year: 2025, value: 190.2 },
  { year: 2026, value: 235.7 },
];

const CloudOrchestra = () => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="300" height="200" fill="#f0f0f0"/>
    <circle cx="150" cy="100" r="80" fill="#3b82f6" opacity="0.7"/>
    <text x="150" y="105" fontSize="14" textAnchor="middle" fill="white">Cloud Admin Agent</text>
    <circle cx="70" cy="130" r="40" fill="#ef4444" opacity="0.6"/>
    <text x="70" y="135" fontSize="10" textAnchor="middle" fill="white">AWS</text>
    <circle cx="230" cy="130" r="40" fill="#10b981" opacity="0.6"/>
    <text x="230" y="135" fontSize="10" textAnchor="middle" fill="white">Azure</text>
    <circle cx="150" cy="40" r="40" fill="#f59e0b" opacity="0.6"/>
    <text x="150" y="45" fontSize="10" textAnchor="middle" fill="white">Google Cloud</text>
  </svg>
);

const BetaSuccessChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={[
      { month: 'Jan', overhead: 100 },
      { month: 'Feb', overhead: 90 },
      { month: 'Mar', overhead: 70 },
      { month: 'Apr', overhead: 60 },
    ]}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="overhead" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

const MarketOpportunityChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={marketData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

const PitchDeckSlides = () => {
  const [activeTab, setActiveTab] = useState('orchestra');

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Cloud Admin Agent: Pitch Deck Visualizations</CardTitle>
        <CardDescription>Interactive preview of key slide designs</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orchestra">The Ensemble</TabsTrigger>
            <TabsTrigger value="beta">The Dress Rehearsal</TabsTrigger>
            <TabsTrigger value="market">The Grand Finale</TabsTrigger>
          </TabsList>
          <TabsContent value="orchestra">
            <h3 className="text-lg font-semibold mb-2">The Ensemble: Our Strategic Partnerships</h3>
            <CloudOrchestra />
          </TabsContent>
          <TabsContent value="beta">
            <h3 className="text-lg font-semibold mb-2">The Dress Rehearsal: Beta Phase Success</h3>
            <BetaSuccessChart />
          </TabsContent>
          <TabsContent value="market">
            <h3 className="text-lg font-semibold mb-2">The Grand Finale: Market Opportunity</h3>
            <MarketOpportunityChart />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PitchDeckSlides;
