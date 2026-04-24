'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, Droplet, Syringe, Info } from 'lucide-react';

export default function CalculatorPage() {
  const [peptideAmount, setPeptideAmount] = useState<number>(5); // mg
  const [waterAmount, setWaterAmount] = useState<number>(2); // ml
  const [desiredDose, setDesiredDose] = useState<number>(250); // mcg
  const [syringeSize, setSyringeSize] = useState<number>(1); // ml (100 units)

  // Calculations
  // 1 mg = 1000 mcg
  const totalMcg = peptideAmount * 1000;
  const mcgPerMl = totalMcg / waterAmount;
  
  // 1 ml = 100 units (standard U-100 syringe)
  const unitsPerMl = 100;
  const mcgPerUnit = mcgPerMl / unitsPerMl;
  
  const unitsToDraw = desiredDose / mcgPerUnit;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Peptide Reconstitution Calculator</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Accurately determine the correct volume to draw into your syringe based on your peptide vial size, diluent volume, and desired research dose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="border-slate-200 shadow-md">
            <CardHeader className="bg-slate-900 text-white rounded-t-xl">
              <CardTitle className="flex items-center text-xl">
                <Syringe className="w-5 h-5 mr-2" />
                Input Parameters
              </CardTitle>
              <CardDescription className="text-slate-300">Enter your vial and dosage details</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="peptide-amount" className="text-base font-semibold text-slate-900 flex items-center">
                  Peptide Vial Size (mg)
                </Label>
                <div className="relative">
                  <Input 
                    id="peptide-amount" 
                    type="number" 
                    value={peptideAmount} 
                    onChange={(e) => setPeptideAmount(Number(e.target.value))}
                    className="pl-4 pr-12 text-lg h-12 bg-slate-50"
                    min={0.1}
                    step={0.1}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">mg</span>
                </div>
                <p className="text-xs text-slate-500">Amount of lyophilized powder in the vial (e.g., 5mg, 10mg)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="water-amount" className="text-base font-semibold text-slate-900 flex items-center">
                  Bacteriostatic Water (ml)
                </Label>
                <div className="relative">
                  <Input 
                    id="water-amount" 
                    type="number" 
                    value={waterAmount} 
                    onChange={(e) => setWaterAmount(Number(e.target.value))}
                    className="pl-4 pr-12 text-lg h-12 bg-slate-50"
                    min={0.5}
                    step={0.5}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">ml</span>
                </div>
                <p className="text-xs text-slate-500">Volume of diluent added to the vial (1ml = 100 units)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="desired-dose" className="text-base font-semibold text-slate-900 flex items-center">
                  Desired Dose (mcg)
                </Label>
                <div className="relative">
                  <Input 
                    id="desired-dose" 
                    type="number" 
                    value={desiredDose} 
                    onChange={(e) => setDesiredDose(Number(e.target.value))}
                    className="pl-4 pr-12 text-lg h-12 bg-slate-50 border-accent focus-visible:ring-accent"
                    min={1}
                    step={10}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">mcg</span>
                </div>
                <p className="text-xs text-slate-500">The specific dose required for your research (1mg = 1000mcg)</p>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="border-accent shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
            <CardHeader className="pb-2 pt-8">
              <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                <Droplet className="w-6 h-6 mr-2 text-accent" />
                Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-8 text-center">
                <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Draw Volume</p>
                <div className="flex items-end justify-center space-x-2">
                  <span className="text-6xl font-black text-primary tracking-tighter">
                    {isFinite(unitsToDraw) ? unitsToDraw.toFixed(1) : '0'}
                  </span>
                  <span className="text-2xl font-bold text-slate-400 mb-1">Units</span>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  Pull the syringe plunger to the <strong className="text-slate-900">{isFinite(unitsToDraw) ? Math.round(unitsToDraw) : '0'}</strong> mark on a standard U-100 insulin syringe.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 border-b pb-2">Concentration Breakdown</h4>
                
                <div className="flex justify-between items-center py-2 border-b border-slate-100 text-sm">
                  <span className="text-slate-600">Total Peptide Content:</span>
                  <span className="font-medium text-slate-900">{totalMcg.toLocaleString()} mcg</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-slate-100 text-sm">
                  <span className="text-slate-600">Concentration per ml:</span>
                  <span className="font-medium text-slate-900">{isFinite(mcgPerMl) ? mcgPerMl.toLocaleString() : '0'} mcg/ml</span>
                </div>
                
                <div className="flex justify-between items-center py-2 text-sm">
                  <span className="text-slate-600">Concentration per unit (1/100 ml):</span>
                  <span className="font-medium text-slate-900">{isFinite(mcgPerUnit) ? mcgPerUnit.toFixed(2) : '0'} mcg/unit</span>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
                <Info className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 leading-relaxed">
                  <strong>Note:</strong> This calculator assumes the use of a standard U-100 insulin syringe where 100 units = 1ml. Always double-check your calculations before proceeding with research.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
