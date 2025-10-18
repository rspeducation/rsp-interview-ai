
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Briefcase, Users, Code, Network, Server, Layers, CloudRain } from 'lucide-react';

const completeInterviewTopics = [
  { id: 1, name: 'General Questions', icon: Briefcase, color: 'bg-blue-500' },
  { id: 501, name: 'Azure Networking Complete', icon: Network, color: 'bg-blue-600' },
  { id: 502, name: 'Azure IaaS Complete', icon: Server, color: 'bg-green-500' },
  { id: 503, name: 'Azure PaaS Complete', icon: Layers, color: 'bg-purple-500' },
  { id: 504, name: 'Azure SaaS Complete', icon: CloudRain, color: 'bg-orange-500' },
  { id: 505, name: '1st Round Technical', icon: Code, color: 'bg-indigo-500' },
  { id: 506, name: 'Technical Round Deep Dive', icon: Code, color: 'bg-indigo-600' },
  { id: 507, name: 'HR Round Questions', icon: Users, color: 'bg-pink-500' },
  { id: 508, name: 'Complete Azure Interview', icon: Briefcase, color: 'bg-gradient-to-r from-blue-500 to-purple-600' }
];

const CompleteInterview = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: ''
  });

  const handleTopicClick = (topic: any) => {
    setSelectedTopic(topic);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.experience) {
      localStorage.setItem('userInterviewData', JSON.stringify({
        userName: formData.name,
        userEmail: formData.email,
        experience: formData.experience,
        selectedRole: selectedTopic
      }));
      
      navigate('/interview');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Categories
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Complete Azure Interview</h1>
                <p className="text-sm text-gray-600">Comprehensive interview preparation for all rounds</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Select Interview Type ({completeInterviewTopics.length} Available)
          </h2>
          <p className="text-gray-600">
            Complete interview preparation covering all Azure services and interview rounds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completeInterviewTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <Card
                key={topic.id}
                className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-l-4 border-l-transparent hover:border-l-blue-500"
                onClick={() => handleTopicClick(topic)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-lg ${topic.color} text-white`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{topic.name}</h3>
                    <p className="text-sm text-gray-500 mt-2">Comprehensive interview preparation</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Interview Setup Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Interview Setup - {selectedTopic?.name}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="experience">Experience Level</Label>
              <Select onValueChange={(value) => handleInputChange('experience', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fresher">Fresher (0-2 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (2+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" className="flex-1" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Start Interview
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompleteInterview;
