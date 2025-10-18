
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Zap, Clock, Target, TrendingUp, Award } from 'lucide-react';

interface ProcessingStats {
  averageProcessingTime: number;
  fastestProcessing: number;
  slowestProcessing: number;
  ultraFastCount: number;
  accuracy: number;
}

interface VoicePerformanceMonitorProps {
  processingStats: ProcessingStats;
  totalSegments: number;
  isVisible?: boolean;
}

export const VoicePerformanceMonitor: React.FC<VoicePerformanceMonitorProps> = ({
  processingStats,
  totalSegments,
  isVisible = true
}) => {
  if (!isVisible || totalSegments === 0) return null;

  const {
    averageProcessingTime,
    fastestProcessing,
    slowestProcessing,
    ultraFastCount,
    accuracy
  } = processingStats;

  const ultraFastPercentage = (ultraFastCount / totalSegments) * 100;
  const speedGrade = averageProcessingTime < 30 ? 'A+' : 
                   averageProcessingTime < 50 ? 'A' :
                   averageProcessingTime < 100 ? 'B' : 'C';

  const accuracyGrade = accuracy > 95 ? 'A+' :
                       accuracy > 90 ? 'A' :
                       accuracy > 85 ? 'B' : 'C';

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hidden">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Zap className="h-5 w-5 text-yellow-500" />
          Voice Performance Monitor
          <Badge variant="outline" className="ml-auto bg-white text-blue-700 ">
            Live Stats
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Performance Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-white rounded-lg border border-blue-100">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className={`text-lg font-bold ${speedGrade === 'A+' ? 'text-green-600' : speedGrade === 'A' ? 'text-blue-600' : 'text-orange-600'}`}>
                {speedGrade}
              </span>
            </div>
            <div className="text-xs text-gray-600">Speed Grade</div>
            <div className="text-xs text-gray-500">{averageProcessingTime.toFixed(1)}ms avg</div>
          </div>
          
          <div className="text-center p-3 bg-white rounded-lg border border-blue-100">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Target className="w-4 h-4 text-green-600" />
              <span className={`text-lg font-bold ${accuracyGrade === 'A+' ? 'text-green-600' : accuracyGrade === 'A' ? 'text-blue-600' : 'text-orange-600'}`}>
                {accuracyGrade}
              </span>
            </div>
            <div className="text-xs text-gray-600">Accuracy Grade</div>
            <div className="text-xs text-gray-500">{accuracy.toFixed(1)}%</div>
          </div>
          
          <div className="text-center p-3 bg-white rounded-lg border border-blue-100">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-lg font-bold text-yellow-600">
                {ultraFastCount}
              </span>
            </div>
            <div className="text-xs text-gray-600">Ultra-Fast</div>
            <div className="text-xs text-gray-500">&lt;50ms responses</div>
          </div>
          
          <div className="text-center p-3 bg-white rounded-lg border border-blue-100">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span className="text-lg font-bold text-purple-600">
                {totalSegments}
              </span>
            </div>
            <div className="text-xs text-gray-600">Total Segments</div>
            <div className="text-xs text-gray-500">Voice inputs</div>
          </div>
        </div>

        {/* Processing Time Analysis */}
        <div className="space-y-3">
          <h4 className="font-semibold text-blue-800 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Processing Speed Analysis
          </h4>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Ultra-fast responses (&lt;50ms)</span>
              <span className="text-sm font-bold text-green-600">{ultraFastPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={ultraFastPercentage} className="h-2" />
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="text-center p-2 bg-green-50 rounded">
              <div className="font-bold text-green-700">{fastestProcessing.toFixed(1)}ms</div>
              <div className="text-green-600">Fastest</div>
            </div>
            <div className="text-center p-2 bg-blue-50 rounded">
              <div className="font-bold text-blue-700">{averageProcessingTime.toFixed(1)}ms</div>
              <div className="text-blue-600">Average</div>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded">
              <div className="font-bold text-orange-700">{slowestProcessing.toFixed(1)}ms</div>
              <div className="text-orange-600">Slowest</div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="space-y-3">
          <h4 className="font-semibold text-blue-800 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Performance Achievements
          </h4>
          
          <div className="flex flex-wrap gap-2">
            {ultraFastCount > 0 && (
              <Badge className="bg-yellow-100 text-yellow-800">
                <Zap className="w-3 h-3 mr-1" />
                Speed Demon ({ultraFastCount} ultra-fast)
              </Badge>
            )}
            
            {accuracy > 95 && (
              <Badge className="bg-green-100 text-green-800">
                <Target className="w-3 h-3 mr-1" />
                Precision Master ({accuracy.toFixed(1)}%)
              </Badge>
            )}
            
            {averageProcessingTime < 30 && (
              <Badge className="bg-blue-100 text-blue-800">
                <Clock className="w-3 h-3 mr-1" />
                Lightning Fast (&lt;30ms avg)
              </Badge>
            )}
            
            {ultraFastPercentage > 80 && (
              <Badge className="bg-purple-100 text-purple-800">
                <TrendingUp className="w-3 h-3 mr-1" />
                Consistency King ({ultraFastPercentage.toFixed(0)}% ultra-fast)
              </Badge>
            )}
          </div>
        </div>

        {/* Tips for Improvement */}
        {(averageProcessingTime > 50 || accuracy < 90) && (
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h5 className="font-semibold text-yellow-800 text-sm mb-2">Tips for Better Performance:</h5>
            <ul className="text-xs text-yellow-700 space-y-1">
              {averageProcessingTime > 50 && (
                <li>• Speak more clearly and at a steady pace for faster processing</li>
              )}
              {accuracy < 90 && (
                <li>• Try speaking closer to the microphone for better accuracy</li>
              )}
              <li>• Ensure good internet connection for optimal voice recognition</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
