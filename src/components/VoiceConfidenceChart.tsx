import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, BarChart3, Mic } from 'lucide-react';

interface VoiceConfidenceData {
  transcript: string;
  confidence: number;
  timestamp: number;
}

interface VoiceConfidenceChartProps {
  confidenceData: VoiceConfidenceData[];
}

export const VoiceConfidenceChart: React.FC<VoiceConfidenceChartProps> = ({ confidenceData }) => {
  if (confidenceData.length === 0) {
    return (
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5" />
            Voice Confidence Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No voice confidence data available.</p>
        </CardContent>
      </Card>
    );
  }

  const confidenceValues = confidenceData.map(data => data.confidence);
  const average = confidenceValues.reduce((sum, conf) => sum + conf, 0) / confidenceValues.length;
  const highest = Math.max(...confidenceValues);
  const lowest = Math.min(...confidenceValues);
  const highConfidenceCount = confidenceValues.filter(conf => conf > 0.8).length;
  const lowConfidenceCount = confidenceValues.filter(conf => conf < 0.5).length;

  const getConfidenceColor = (confidence: number) => {
    if (confidence > 0.8) return 'bg-green-500';
    if (confidence > 0.6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getConfidenceBadge = (confidence: number) => {
    if (confidence > 0.8) return { variant: 'default', label: 'High', color: 'bg-green-100 text-green-800' };
    if (confidence > 0.6) return { variant: 'secondary', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' };
    return { variant: 'destructive', label: 'Low', color: 'bg-red-100 text-red-800' };
  };

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Voice Confidence Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {(average * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Average Confidence</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {(highest * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Highest</div>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {(lowest * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Lowest</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {confidenceData.length}
            </div>
            <div className="text-sm text-gray-600">Voice Segments</div>
          </div>
        </div>

        {/* Confidence Distribution */}
        <div className="space-y-3">
          <h4 className="font-semibold">Confidence Distribution</h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm">High (&gt;80%): {highConfidenceCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-sm">Medium (60-80%): {confidenceValues.filter(c => c >= 0.6 && c <= 0.8).length}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm">Low (&lt;60%): {lowConfidenceCount}</span>
            </div>
          </div>
        </div>

        {/* Confidence Timeline */}
        <div className="space-y-3">
          <h4 className="font-semibold">Voice Confidence Timeline</h4>
          <div className="relative">
            <div className="flex items-end gap-1 h-20">
              {confidenceData.map((data, index) => (
                <div
                  key={index}
                  className={`flex-1 ${getConfidenceColor(data.confidence)} opacity-80 hover:opacity-100 transition-opacity`}
                  style={{ height: `${data.confidence * 100}%` }}
                  title={`Confidence: ${(data.confidence * 100).toFixed(1)}%`}
                />
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-1">Voice segments over time</div>
          </div>
        </div>

        {/* Detailed Segments */}
        <div className="space-y-3">
          <h4 className="font-semibold">Voice Segments Detail</h4>
          <div className="max-h-40 overflow-y-auto space-y-2">
            {confidenceData.map((data, index) => {
              const badge = getConfidenceBadge(data.confidence);
              return (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex-1">
                    <p className="text-sm font-medium truncate">{data.transcript}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(data.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {(data.confidence * 100).toFixed(1)}%
                    </span>
                    <Badge className={badge.color}>
                      {badge.label}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-3">
          <h4 className="font-semibold">Voice Quality Recommendations</h4>
          <div className="space-y-2">
            {average < 0.6 && (
              <div className="flex items-center gap-2 text-orange-600">
                <TrendingDown className="h-4 w-4" />
                <span className="text-sm">Consider speaking more clearly and at a steady pace</span>
              </div>
            )}
            {lowConfidenceCount > confidenceData.length * 0.3 && (
              <div className="flex items-center gap-2 text-yellow-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">Practice pronunciation and articulation for better voice recognition</span>
              </div>
            )}
            {average > 0.8 && (
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">Excellent voice clarity! Your speech is well-recognized</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
