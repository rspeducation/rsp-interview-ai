
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Layers, Container, Code, Database, HardDrive, Lock, Monitor, Zap, Globe, Settings } from 'lucide-react';

const paasTopics = [
  { id: 1, name: 'AKS Creation', icon: Container, color: 'bg-blue-500' },
  { id: 2, name: 'AKS Activities', icon: Container, color: 'bg-blue-600' },
  { id: 3, name: 'AKS Pod Creation', icon: Container, color: 'bg-blue-700' },
  { id: 4, name: 'App Service', icon: Code, color: 'bg-purple-500' },
  { id: 5, name: 'Storage Account', icon: HardDrive, color: 'bg-orange-500' },
  { id: 6, name: 'Web App', icon: Globe, color: 'bg-green-500' },
  { id: 7, name: 'Azure Key Vault', icon: Lock, color: 'bg-red-500' },
  { id: 8, name: 'Azure Monitor', icon: Monitor, color: 'bg-indigo-500' },
  { id: 9, name: 'Logic App', icon: Zap, color: 'bg-yellow-500' },
  { id: 10, name: 'Function App', icon: Zap, color: 'bg-yellow-600' },
  { id: 11, name: 'SQL Database', icon: Database, color: 'bg-teal-500' },
  { id: 12, name: 'Azure Container Instances', icon: Container, color: 'bg-cyan-500' },
  { id: 13, name: 'Azure Workspace', icon: Settings, color: 'bg-gray-500' },
  { id: 14, name: 'Azure API Management', icon: Globe, color: 'bg-pink-500' },
  { id: 15, name: 'Azure Event Grid', icon: Zap, color: 'bg-emerald-500' }
];

const AzurePaaS = () => {
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
        selectedRole: selectedTopic,
        category: 'paas'
      }));
      
      navigate('/interview');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
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
              <div className="p-2 bg-purple-500 rounded-lg">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Azure PaaS</h1>
                <p className="text-sm text-gray-600">Platform as a Service - Apps, Containers, and Managed Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Select a PaaS Topic ({paasTopics.length} Available)
          </h2>
          <p className="text-gray-600">
            Master Azure Platform as a Service offerings and development tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paasTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <Card
                key={topic.id}
                className="p-4 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-l-4 border-l-transparent hover:border-l-purple-500"
                onClick={() => handleTopicClick(topic)}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-lg ${topic.color} text-white`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{topic.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">Click to start interview</p>
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
              <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700">
                Start Interview
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AzurePaaS;
