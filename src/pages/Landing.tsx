
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Menu, X, Briefcase, Cloud, Brain, Database, Shield, Server, 
  Network, Lock, Globe, Users, Settings, Code, Layers, 
  HardDrive, Container, Monitor, Zap, CloudRain
} from 'lucide-react';

/**
 * MAIN AZURE CATEGORIES
 * These are the primary categories that users can select from
 */
const azureCategories = [
  { 
    id: 'networking', 
    name: 'Azure Networking', 
    icon: Network, 
    color: 'bg-blue-500',
    description: 'Virtual Networks, Subnets, VPN, Load Balancers, and more',
    route: '/azure-networking'
  },
  { 
    id: 'iaas', 
    name: 'Azure IaaS', 
    icon: Server, 
    color: 'bg-green-500',
    description: 'VMs, Functions, App Services, Containers',
    route: '/azure-iaas'
  },
  { 
    id: 'paas', 
    name: 'Azure PaaS', 
    icon: Layers, 
    color: 'bg-purple-500',
    description: 'App Services, AKS, Storage, Key Vault, Databases',
    route: '/azure-paas'
  },
  { 
    id: 'saas', 
    name: 'Azure SaaS', 
    icon: CloudRain, 
    color: 'bg-orange-500',
    description: 'Microsoft 365, DevOps, Cognitive Services',
    route: '/azure-saas'
  },
  { 
    id: 'devops', 
    name: 'Azure DevOps', 
    icon: Code, 
    color: 'bg-indigo-500',
    description: 'CI/CD, Pipelines, Repos, Terraform, ARM',
    route: '/azure-devops'
  },
  { 
    id: 'complete', 
    name: 'Complete Azure Interview', 
    icon: Briefcase, 
    color: 'bg-gradient-to-r from-blue-500 to-purple-600',
    description: 'Network, IaaS, PaaS, SaaS, 1st Round, Technical Round, HR Round',
    route: '/complete-interview'
  }
];

const getRouteByName = (name) => {
  const found = azureCategories.find(cat => cat.name === name);
  return found ? found.route : '/';
};


const Landing = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /**
   * Handle category selection - navigate to specific topic page
   */
  const handleCategoryClick = (category: any) => {
    navigate(category.route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white shadow-lg"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar - Category Selection */}
      <div className={`fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Interview RSP AI</h1>
            <p className="text-sm text-gray-600 mt-2">Prepare for your dream tech job</p>
          </div>
          
          {/* Categories List */}
          <div className="flex-1 overflow-y-auto p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Your Category ({azureCategories.length} Available)</h2>
            <div className="space-y-3">
              {azureCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card
                    key={category.id}
                    className="p-4 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-l-4 border-l-transparent hover:border-l-blue-500"
                    onClick={() => handleCategoryClick(category)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${category.color} text-white flex-shrink-0`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{category.name}</h3>
                        <p className="text-xs text-gray-500">Click to explore topics</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:ml-80 min-h-screen">
        <div className="p-8 pt-20 lg:pt-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to RSP AI Interview Hub</h1>
            <p className="text-xl text-gray-600 mb-8">Master your tech interviews with AI-powered practice sessions</p>
            


<div className="grid md:grid-cols-3 gap-6 mt-12">
  <Card
    className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => navigate(getRouteByName('Azure Networking'))}
  >
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Network className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">Azure Networking</h3>
    <p className="text-gray-600 text-sm">Virtual Networks, Subnets, VPN, Load Balancers, and more</p>
  </Card>

  <Card
    className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => navigate(getRouteByName('Azure IaaS'))}
  >
    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Shield className="h-6 w-6 text-red-600" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">Azure IaaS</h3>
    <p className="text-gray-600 text-sm">VMs, Functions, App Services, Containers</p>
  </Card>

  <Card
    className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => navigate(getRouteByName('Azure PaaS'))}
  >
    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Server className="h-6 w-6 text-green-600" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">Azure PaaS</h3>
    <p className="text-gray-600 text-sm">App Services, AKS, Storage, Key Vault, Databases</p>
  </Card>

  <Card
    className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => navigate(getRouteByName('Azure SaaS'))}
  >
    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <HardDrive className="h-6 w-6 text-orange-600" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">Azure SaaS</h3>
    <p className="text-gray-600 text-sm">Microsoft 365, DevOps, Cognitive Services</p>
  </Card>

  <Card
    className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => navigate(getRouteByName('Azure DevOps'))}
  >
    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Database className="h-6 w-6 text-purple-600" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">Azure DevOps</h3>
    <p className="text-gray-600 text-sm">CI/CD, Pipelines, Repos, Terraform, ARM</p>
  </Card>

  <Card
    className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => navigate(getRouteByName('Complete Azure Interview'))}
  >
    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Code className="h-6 w-6 text-indigo-600" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">Complete Azure Interview</h3>
    <p className="text-gray-600 text-sm">Network, IaaS, PaaS, SaaS, 1st Round, Technical Round, HR Round</p>
  </Card>
</div>

          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
            <p className="text-gray-600 mb-6">Choose from {azureCategories.length}  Choose an Azure category from the sidebar <b>or click any card above</b> to begin your preparation
</p>
            <Button onClick={() => setSidebarOpen(true)} className="lg:hidden bg-blue-600 hover:bg-blue-700">
              Open Category Selection
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600 text-sm">From basic concepts to advanced Azure services and architectures</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Questions</h3>
              <p className="text-gray-600 text-sm">Smart questions adapted to your experience level and role</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance Tracking</h3>
              <p className="text-gray-600 text-sm">Detailed feedback and progress tracking for improvement</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default Landing;
