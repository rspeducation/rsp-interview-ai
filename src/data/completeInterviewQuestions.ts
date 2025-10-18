
const completeInterviewQuestions = {
  1: {
    name: 'General Questions',
    fresher: [
      "What do you know about our company and why do you want to work here?",
      "How do you handle tight deadlines and pressure?",
      "Describe a time you worked in a team and your role in it.",
      "What are your strengths and weaknesses?",
      "How do you prioritize tasks when working on multiple projects?",
      "Tell me about a challenge you faced and how you overcame it.",
      "How do you keep yourself motivated during repetitive tasks?",
      "What are your career goals for the next 2-3 years?",
      "How do you handle feedback and criticism?",
      "Why should we hire you for this role?"
    ],
    experienced: [
      "Describe your leadership style and experience managing teams.",
      "How do you handle conflicts within your team?",
      "What motivates you to perform at your best?",
      "How do you ensure continuous learning and growth in your career?",
      "Tell me about a time you had to adapt to significant change at work.",
      "How do you balance technical and business requirements in your projects?",
      "Describe a situation where you had to make a difficult decision.",
      "How do you mentor junior team members?",
      "What are your long-term professional aspirations?",
      "Why are you looking to move from your current position?"
    ]
  },
  501: {
    name: 'Azure Networking Complete',
    fresher: [
      "What is a Virtual Network (VNet) in Azure?",
      "How do you create a subnet in Azure?",
      "What is the purpose of a Network Security Group (NSG)?",
      "How does Azure VPN Gateway work?",
      "What is Azure ExpressRoute?",
      "How do you secure communication between Azure resources?",
      "What is the difference between public and private IP addresses in Azure?",
      "How do you implement peering between VNets?",
      "What is Azure Load Balancer and how does it work?",
      "How do you monitor network traffic in Azure?"
    ],
    experienced: [
      "Explain the architecture of a hub-and-spoke network topology in Azure.",
      "How do you implement hybrid connectivity between on-premises and Azure?",
      "Describe advanced NSG and Application Security Group (ASG) configurations.",
      "How do you troubleshoot complex network connectivity issues in Azure?",
      "What are the best practices for securing Azure network resources?",
      "How do you design for high availability and disaster recovery in Azure networking?",
      "Explain the use of Azure Firewall and Web Application Firewall (WAF).",
      "How do you implement network segmentation and micro-segmentation?",
      "Describe the process of automating network deployments using ARM templates or Bicep.",
      "How do you optimize network performance for global applications in Azure?"
    ]
  },
  502: {
    name: 'Azure IaaS Complete',
    fresher: [
      "What is Infrastructure as a Service (IaaS) in Azure?",
      "How do you create and configure a Virtual Machine (VM) in Azure?",
      "What are the different VM sizes and types available?",
      "How do you attach and manage disks for Azure VMs?",
      "What is Azure Availability Set?",
      "How do you backup and restore Azure VMs?",
      "What is the difference between managed and unmanaged disks?",
      "How do you connect to a Windows or Linux VM in Azure?",
      "What is Azure Resource Manager (ARM)?",
      "How do you monitor the health and performance of Azure VMs?"
    ],
    experienced: [
      "How do you implement high availability and scalability for IaaS workloads?",
      "Describe the process of automating VM deployments using ARM templates or Terraform.",
      "How do you secure Azure VMs using Just-In-Time (JIT) access and NSGs?",
      "What are the best practices for patch management in Azure VMs?",
      "How do you implement disaster recovery for IaaS workloads?",
      "Explain the use of Azure VM Scale Sets.",
      "How do you optimize cost and performance for large-scale VM deployments?",
      "Describe the process of migrating on-premises VMs to Azure.",
      "How do you manage VM images and custom images in Azure?",
      "What are the considerations for running stateful vs stateless workloads on Azure VMs?"
    ]
  },
  503: {
    name: 'Azure PaaS Complete',
    fresher: [
      "What is Platform as a Service (PaaS) in Azure?",
      "How do you deploy a web application using Azure App Service?",
      "What is Azure SQL Database and how is it different from SQL Server on a VM?",
      "How do you configure scaling for Azure App Service?",
      "What is Azure Functions and when would you use it?",
      "How do you secure a PaaS application in Azure?",
      "What is Azure Logic Apps?",
      "How do you monitor and troubleshoot PaaS services?",
      "What is the difference between App Service and Azure Functions?",
      "How do you manage application settings and secrets in Azure PaaS?"
    ],
    experienced: [
      "How do you design multi-region PaaS deployments for high availability?",
      "Describe the process of implementing CI/CD pipelines for Azure PaaS applications.",
      "How do you secure PaaS services using managed identities and Key Vault?",
      "What are the best practices for scaling and performance tuning PaaS workloads?",
      "How do you implement disaster recovery for PaaS applications?",
      "Explain the use of Azure API Management in PaaS solutions.",
      "How do you integrate PaaS services with on-premises systems?",
      "Describe advanced monitoring and alerting for PaaS workloads.",
      "How do you manage configuration and secrets for large-scale PaaS deployments?",
      "What are the considerations for data residency and compliance in PaaS solutions?"
    ]
  },
  504: {
    name: 'Azure SaaS Complete',
    fresher: [
      "What is Software as a Service (SaaS) in Azure?",
      "Give examples of SaaS offerings in Azure.",
      "How do you provision and manage SaaS applications in Azure?",
      "What are the benefits of using SaaS over IaaS or PaaS?",
      "How do you secure user access to SaaS applications?",
      "What is Azure Marketplace?",
      "How do you integrate SaaS applications with Azure Active Directory?",
      "What are the considerations for data privacy in SaaS?",
      "How do you monitor usage and performance of SaaS applications?",
      "What support options are available for Azure SaaS solutions?"
    ],
    experienced: [
      "How do you evaluate SaaS solutions for enterprise adoption?",
      "Describe the process of integrating SaaS applications with existing IT infrastructure.",
      "How do you manage identity and access for multiple SaaS applications?",
      "What are the best practices for data protection and compliance in SaaS?",
      "How do you handle SaaS application lifecycle management?",
      "Explain the use of APIs and connectors for SaaS integration.",
      "How do you monitor and optimize SaaS usage and costs?",
      "Describe the process of migrating from on-premises to SaaS solutions.",
      "How do you ensure business continuity for critical SaaS applications?",
      "What are the challenges of multi-tenant SaaS architectures?"
    ]
  },
  505: {
    name: '1st Round Technical',
    fresher: [
      "What is cloud computing and how does Azure fit into it?",
      "Explain the difference between IaaS, PaaS, and SaaS.",
      "What are Azure Resource Groups?",
      "How do you deploy resources in Azure?",
      "What is Azure Portal and what are its main features?",
      "How do you monitor resources in Azure?",
      "What is Azure Marketplace?",
      "How do you secure resources in Azure?",
      "What is Azure Advisor?",
      "How do you estimate costs in Azure?"
    ],
    experienced: [
      "Describe your experience with Azure CLI and PowerShell.",
      "How do you automate resource deployment in Azure?",
      "What are the best practices for managing Azure subscriptions?",
      "How do you implement RBAC in Azure?",
      "What is Azure Policy and how do you use it?",
      "How do you troubleshoot deployment failures in Azure?",
      "What are the considerations for multi-region deployments?",
      "How do you manage secrets and keys in Azure?",
      "What is Azure Blueprints?",
      "How do you ensure compliance in Azure environments?"
    ]
  },
  506: {
    name: 'Technical Round Deep Dive',
    fresher: [
      "Explain the shared responsibility model in Azure.",
      "What is Azure Active Directory and how is it used?",
      "How do you implement security best practices in Azure?",
      "What are Azure Tags and how do you use them?",
      "How do you manage costs in Azure?",
      "What is Azure Monitor and what does it do?",
      "How do you implement backup and disaster recovery in Azure?",
      "What is Azure Policy?",
      "How do you use Azure Automation?",
      "What is the difference between Azure CLI and Azure PowerShell?"
    ],
    experienced: [
      "How do you design secure and scalable architectures in Azure?",
      "Describe your experience with Azure DevOps.",
      "How do you implement governance in large Azure environments?",
      "What are the best practices for monitoring and alerting?",
      "How do you handle incident response in Azure?",
      "What is your approach to cost optimization at scale?",
      "How do you manage hybrid cloud environments?",
      "Describe your experience with Infrastructure as Code in Azure.",
      "How do you ensure business continuity for critical workloads?",
      "What are your strategies for continuous improvement in Azure operations?"
    ]
  },
  507: {
    name: 'HR Round Questions',
    fresher: [
      "Tell me about yourself.",
      "Why do you want to join our company?",
      "What are your strengths and weaknesses?",
      "Where do you see yourself in 5 years?",
      "How do you handle stress and pressure?",
      "Describe a time you worked in a team.",
      "Why should we hire you?",
      "What are your salary expectations?",
      "Do you have any questions for us?",
      "How do you handle feedback?"
    ],
    experienced: [
      "Why are you looking for a new opportunity?",
      "Describe your leadership experience.",
      "How do you handle conflicts at work?",
      "What motivates you in your career?",
      "How do you manage work-life balance?",
      "Describe a challenging situation and how you overcame it.",
      "What are your long-term career goals?",
      "How do you mentor junior team members?",
      "What is your management style?",
      "Do you have any questions for us?"
    ]
  },
  508: {
    name: 'Complete Azure Interview',
    fresher: [
      "What is Azure and what are its main services?",
      "Explain the difference between IaaS, PaaS, and SaaS.",
      "How do you deploy a web application in Azure?",
      "What is Azure Active Directory?",
      "How do you secure resources in Azure?",
      "What is Azure Resource Manager?",
      "How do you monitor resources in Azure?",
      "What is Azure DevOps?",
      "How do you estimate costs in Azure?",
      "What are the benefits of using Azure?"
    ],
    experienced: [
      "Describe your experience with Azure architecture design.",
      "How do you implement security and compliance in Azure?",
      "What are your strategies for cost optimization?",
      "How do you manage large-scale deployments in Azure?",
      "Describe your experience with Azure DevOps and CI/CD.",
      "How do you handle disaster recovery and business continuity?",
      "What are your best practices for monitoring and alerting?",
      "How do you manage hybrid and multi-cloud environments?",
      "What are your approaches to automation in Azure?",
      "How do you ensure governance and policy compliance in Azure?"
    ]
  }
};

export default completeInterviewQuestions;
