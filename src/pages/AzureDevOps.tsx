
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Code, GitBranch, Zap, Settings, Cloud, Monitor } from 'lucide-react';

const devopsTopics = [
  { id: 4, name: 'Azure PowerShell', icon: Code, color: 'bg-blue-800' },
  { id: 16, name: 'Terraform', icon: Code, color: 'bg-purple-500' },
  { id: 401, name: 'ARM Templates', icon: Code, color: 'bg-blue-500' },
  { id: 402, name: 'Azure DevOps Pipelines', icon: Zap, color: 'bg-blue-600' },
  { id: 403, name: 'Azure Repos', icon: GitBranch, color: 'bg-green-500' },
  { id: 404, name: 'Azure Artifacts', icon: Settings, color: 'bg-orange-500' },
  { id: 405, name: 'Azure Test Plans', icon: Monitor, color: 'bg-purple-600' },
  { id: 406, name: 'CI/CD Implementation', icon: Zap, color: 'bg-emerald-500' },
  { id: 407, name: 'Infrastructure as Code', icon: Cloud, color: 'bg-indigo-500' },
  { id: 408, name: 'Azure CLI', icon: Code, color: 'bg-gray-600' }
];

const AzureDevOps = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
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
              <div className="p-2 bg-indigo-500 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Azure DevOps</h1>
                <p className="text-sm text-gray-600">CI/CD, Infrastructure as Code, and Development Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Select a DevOps Topic ({devopsTopics.length} Available)
          </h2>
          <p className="text-gray-600">
            Master Azure DevOps practices, tools, and automation techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {devopsTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <Card
                key={topic.id}
                className="p-4 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-l-4 border-l-transparent hover:border-l-indigo-500"
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
              <Button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                Start Interview
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AzureDevOps;
