
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Network, Globe, Shield, Server, Cloud, Lock, Route, Users, Zap, Settings } from 'lucide-react';

const networkingTopics = [
  { id: 1, name: 'General Questions', icon: Network, color: 'bg-gray-500' },
  { id: 2, name: 'Azure Virtual Network', icon: Network, color: 'bg-blue-500' },
  { id: 3, name: 'IP Address Full Details', icon: Globe, color: 'bg-orange-500' },
  { id: 4, name: 'Azure Tenant', icon: Cloud, color: 'bg-purple-500' },
  { id: 5, name: 'Azure PowerShell', icon: Cloud, color: 'bg-green-500' },
  { id: 6, name: 'Azure Terraform', icon: Cloud, color: 'bg-green-600' },
  { id: 7, name: 'Azure Bastion', icon: Server, color: 'bg-blue-600' },
  { id: 8, name: 'Azure Firewall', icon: Shield, color: 'bg-red-500' },
  { id: 9, name: 'Azure DDOS', icon: Shield, color: 'bg-red-600' },
  { id: 10, name: 'Azure Subnet', icon: Network, color: 'bg-indigo-500' },
  { id: 11, name: 'NAT Gateway', icon: Route, color: 'bg-teal-500' },
  { id: 12, name: 'NSG', icon: Lock, color: 'bg-yellow-600' },
  { id: 13, name: 'ASG', icon: Users, color: 'bg-pink-500' },
  { id: 14, name: 'Route Table', icon: Route, color: 'bg-cyan-500' },
  { id: 15, name: 'Subnet Delegation', icon: Settings, color: 'bg-violet-500' },
  { id: 16, name: 'Service End Points', icon: Zap, color: 'bg-emerald-500' },
  { id: 17, name: 'Private End Points', icon: Lock, color: 'bg-slate-600' },
  { id: 18, name: 'VNet Peering', icon: Network, color: 'bg-blue-700' },
  { id: 19, name: 'Point to Site', icon: Globe, color: 'bg-orange-600' }
];

const AzureNetworking = () => {
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
        category: 'networking'
      }));
      
      navigate('/interview');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
              <div className="p-2 bg-blue-500 rounded-lg">
                <Network className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Azure Networking</h1>
                <p className="text-sm text-gray-600">Master Azure networking concepts and services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Select a Networking Topic ({networkingTopics.length} Available)
          </h2>
          <p className="text-gray-600">
            Choose from comprehensive Azure networking interview topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {networkingTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <Card
                key={topic.id}
                className="p-4 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-l-4 border-l-transparent hover:border-l-blue-500"
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

export default AzureNetworking;
