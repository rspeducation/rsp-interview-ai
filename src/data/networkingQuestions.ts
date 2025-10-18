
const questionsDatabase = {
  1: {
    name: 'General Questions',
    fresher: [
      "Tell me something about yourself.",
      "What is your educational background?",
      "Why are you interested in cloud computing or Azure?",
      "What do you know about Azure or cloud services?",
      "What are your strengths?",
      "What is one weakness you're working on improving?",
      "Have you done any projects or internships related to cloud or IT?",
      "What tools or technologies have you learned so far?",
      "Are you comfortable working in shifts or on-call support?",
      "What is your understanding of a ticketing system?",
      "How do you handle pressure or tight deadlines?",
      "Are you open to learning new technologies and certifications?",
      "How do you stay updated with current tech trends?",
      "Why should we hire you as a fresher?",
      "Where do you see yourself in the next 2 to 3 years?"
    ],
    experienced: [
      "Tell me something about yourself.",
      "What is your educational background?",
      "What are your roles and responsibilities?",
      "What is your daily activity in your company?",
      "Which project are you working on now?",
      "Which company are you working for?",
      "What is your designation?",
      "Which ticketing tool are you using in your company?",
      "Tell me something about your company.",
      "How long have you worked for this company?",
      "What is the address of your company?",
      "What are your total years of experience?",
      "What is your current project?",
      "Can you explain any errors/challenges/issues you faced?", 
      "How did you resolve them?",
      "What is your current project?",
      "What is your current role in the project?",
      "What is your current team size?",
      "What is your current package?",
      "What is your current salary?",
      "What is your expected salary?",
      "What is your notice period?",
      "What is your current location?",
      "What is your preferred location?",
      "What is your strength?",
      "What is your weakness?"
    ]
  },

  2: {
    name: 'Azure Virtual Network',
    fresher: [
      'What is Microsoft Azure and what are its core services?',
      'Explain the difference between IaaS, PaaS, and SaaS in Azure.',
      'What is Azure Resource Manager (ARM)?',
      'How do you secure Azure resources?',
      'What is a Virtual Network (VNet) in Azure?',
      'What is the purpose of a Virtual Network in Azure?',
      'How do you create a Virtual Network in Azure?',
      'What are the components of a Virtual Network?',
      'What is a subnet in Azure?',
      'How do you create a subnet in a Virtual Network?',
      'What is the difference between a public and private IP address in Azure?',
      'What are Azure availability zones and regions?'
    ],
    experienced: [
      "Have you worked on Azure Virtual Network?",
      "What is Azure Virtual Network?",
      "Why do you use Azure Virtual Network?",
      "How many years of experience do you have with VNets?",
      "How would you rate yourself in VNet out of 10?",
      "How many VNets are there in your project?",
      "How many VNets are you currently managing?",
      "Are you working individually or as part of a team?",
      "What's your team size and structure?",
      "Can you explain how you create a Virtual Network?",
      "What parameters are required to create a VNet?",
      "What security features do you use in a VNet?",
      "What is a Subscription? Why do we use it?",
      "How many subscriptions are you managing?",
      "What is a Resource Group?",
      "What is the hierarchy structure in Azure?",
      "What is a Subnet and why do we use it?",
      "How many subnets can you create in a VNet?",
      "Who provides the VNet configuration details in your project?",
      "Can you move a resource to another Resource Group?",
      "Can you move a resource to another Subscription?",
      "What are Activity Logs?",
      "How do you generate audit reports for resources?",
      "What is IAM or RBAC in Azure?",
      "How do you grant access to a user?",
      "What's the difference between Owner and Contributor roles?",
      "What are Tags in Azure?",
      "What is Address Space?",
      "Can you extend the address space of a VNet?"
    ]
  },

  3: {
    name: 'IP Address Full Details',
    fresher: [
      "What does IP stand for in networking?",
      "Why do we need an IP address in a network?",
      "Can two devices have the same IP address in a network?",
      "What is the difference between IPv4 and IPv6?",
      "What does an IP address look like? Give an example.",
      "What is the default IP address of a router?",
      "What is the loopback IP address and why is it used?",
      "What is DHCP and how is it related to IP addresses?",
      "How can you find the IP address of your system?",
      "What is the role of DNS in relation to IP addresses?"
    ],
    experienced: [
      "What is IP address?",
      "Type of IP?",
      "How many types of IP's based on location?",
      "What is Public IP?",
      "What is Private IP?",
      "Where can we use private IP? How?",
      "What is dynamic IP?",
      "How does dynamic IP assignment happen?",
      "How many types of class?",
      "Which class are you using in your project?",
      "How to calculate the IP address?",
      "What is address space?",
      "What is address prefix?",
      "What IP version are you using? Which series?",
      "How do you calculate IPs in a virtual network?",
      "10.0.0.0/16 – how many IPs?",
      "10.0.0.0/24 – how many IPs?",
      "/25, /26, /27, /28 – how many IPs?",
      "How to create 5 VNets? Which digit changes?",
      "How to create 10 subnets in a VNet?",
      "What is a subnet? How do you create it? Max subnets in a VNet?",
      "How to extend address space in a VNet?"
    ]
  },

  4: {
    name: 'Azure Tenant',
    fresher: [
      "What is a tenant in Azure?",
      "Why do we need a tenant in cloud platforms like Azure?",
      "What is the default management group in a new Azure tenant?",
      "What is PowerShell in simple terms?",
      "Why is PowerShell used by system administrators?",
      "What are some common tools used to deploy resources in Azure?",
      "What is the purpose of using PowerShell with Azure?",
      "How can you log in to your Azure account using PowerShell?",
      "How do you open and run a PowerShell script?",
      "Can you name the tool you use to write and run PowerShell commands?"
    ],
    experienced: [
      "What is a tenant in Azure and how is it different from a subscription?",
      "Why do enterprises use tenants to manage cloud infrastructure?",
      "Can you explain what the default tenant management group is used for?",
      "Which deployment tools do you know and have used (e.g., ARM, Bicep, Terraform, Azure CLI)?",
      "Which specific tool do you prefer for tenant-level resource management and why?",
      "What is PowerShell and how does it help in Azure resource automation?",
      "Why would you use PowerShell instead of Azure Portal or Azure CLI?",
      "What is the exact PowerShell command to log in to your Azure account?",
      "How do you execute a PowerShell script file (.ps1) for deploying resources?",
      "Which editor or environment do you use for writing and running PowerShell scripts (e.g., VS Code, Azure Cloud Shell)?",
      "How do you create a Virtual Network (VNet) using PowerShell? Can you explain the script structure?",
      "How do you list or fetch existing Azure resources using PowerShell commands?",
      "How do you provision a resource (e.g., VM or Storage Account) using PowerShell end-to-end?"
    ]
  },

  5: {
    name: 'Azure PowerShell',
    fresher: [
      "What is Azure PowerShell?",
      "How is Azure PowerShell different from Windows PowerShell?",
      "How do you install Azure PowerShell module?",
      "What is the command to login to Azure using PowerShell?",
      "How do you list all resource groups in your subscription using PowerShell?",
      "How do you create a new resource group using Azure PowerShell?",
      "How do you deploy a virtual machine using Azure PowerShell?",
      "What is the command to get all VMs in a resource group?",
      "How do you update an existing resource using Azure PowerShell?",
      "How do you remove a resource group using PowerShell?",
      "What are some common cmdlets you have used in Azure PowerShell?",
      "How do you check your current Azure subscription in PowerShell?",
      "How do you switch subscriptions in Azure PowerShell?",
      "How do you get help for a specific Azure PowerShell cmdlet?",
      "What is the difference between Azure CLI and Azure PowerShell?"
    ],
    experienced: [
      "What is Azure PowerShell and how do you use it in your daily work?",
      "How do you automate Azure resource deployment using PowerShell scripts?",
      "What is the difference between AzureRM and Az modules?",
      "How do you manage multiple Azure subscriptions using PowerShell?",
      "How do you assign RBAC roles using Azure PowerShell?",
      "How do you create and manage storage accounts using PowerShell?",
      "How do you automate VM scaling operations using PowerShell?",
      "How do you retrieve diagnostic logs for resources using PowerShell?",
      "How do you handle errors and exceptions in Azure PowerShell scripts?",
      "How do you schedule PowerShell scripts to run automatically in Azure?",
      "How do you use managed identities with Azure PowerShell?",
      "How do you deploy ARM templates using PowerShell?",
      "How do you manage Azure AD users and groups using PowerShell?",
      "How do you connect to Azure SQL Database using PowerShell?",
      "How do you monitor and report on Azure resource usage with PowerShell?"
    ]
  },

  7: {
    name: 'Azure Bastion',
    fresher: [
      "Have you worked on Azure Bastion?",
      "What is Bastion in Azure?",
      "Why do we use Azure Bastion?",
      "How do you configure Azure Bastion?",  
      "What is the subnet name required for Azure Bastion?",
      "What is the difference between Bastion and RDP or SSH methods?",
      "What is the purpose of Azure Bastion?",
      "How do you connect to a Virtual Machine using Azure Bastion?",
      "How many ways are there to log in to a Virtual Machine in Azure?",
      "How is Bastion different from RDP or SSH methods?",
      "What is the subnet name required for Azure Bastion?",
      "What is a subnet in the context of Azure networking?"
    ],
    experienced: [
      "Have you worked on Bastion?",
      "What is Bastion? Can you explain?",
      "How can you say it is secure? Can you justify?",
      "Why do we use Bastion?",
      "How do you configure Azure Bastion?",
      "I have 2 VNets: VNet A and VNet B. Bastion is in VNet A, but VM is in VNet B. Can I connect?",
      "How many ways are there to login to a virtual machine in Azure?",
      "How do you configure Bastion using PowerShell?",
      "Why do you prefer Bastion?",
      "What are the required parameters to deploy Azure Bastion?",
      "How many tiers are available in Bastion?",
      "What is the Bastion subnet name and what is a subnet?",
      "What are the parameters required for Bastion host creation?",
      "Can you implement Bastion host using Terraform?",
      "How do you get the virtual network IP address using PowerShell?"
    ]
  },

  8: {
    name: 'Azure Firewall',
    fresher: [
      "What is the purpose of a firewall in cloud infrastructure?",
      "Why do companies use Azure Firewall?",
      "Can you name any basic rule types used in Azure Firewall?",
      "What is the difference between a firewall and an NSG in simple terms?",
      "Have you seen Azure Firewall on the portal? What options are available?",
      "What is the default subnet name required for deploying Azure Firewall?"
    ],
    experienced: [
      "Have you worked on the security side in Azure Cloud?",
      "What is Firewall?",
      "How many types of Azure Firewall are available?",
      "What are the capabilities of Premium Firewall?",
      "What are the required parameters to create Azure Firewall?",
      "How do you deploy Azure Premium Firewall?",
      "How do you create Firewall using PowerShell?",
      "Have you learned about other firewalls?",
      "What have you done so far with Azure Firewall?",
      "Differences Between NSG and Firewall?",
      "How many rule types are available in Firewall?",
      "What is a DNAT Rule?",
      "How to create a DNAT Rule?",
      "What do you provide to customer after DNAT setup?",
      "What is Application Rule?",
      "How to create Application Rules?",
      "What is Firewall Policy?",
      "What is Network Rule?",
      "Why do we use Network Rules?",
      "How to prevent others from modifying a production resource?",
      "How to prevent deletion of a resource?",
      "How do you change or migrate SKU?"
    ]
  },

  9: {
    name: 'Azure DDOS',
    fresher: [
      "What is DDOS?",
      "Why is DDOS protection important in cloud environments?",
      "What happens to your resources if a DDOS attack occurs?",
      "Does Azure provide any built-in protection against DDOS?",
      "What are the two tiers of DDOS protection available in Azure?",
      "How do you enable DDOS protection for a Virtual Network?",
      "What is the difference between Basic and Standard DDOS protection?",
      "How do you monitor DDOS attacks in Azure?",
      "What is the role of a DDOS Protection Plan in Azure?",
      "How do you create a DDOS Protection Plan in Azure?",
      
      "What are the basic differences between DDOS Basic and Standard tiers?"
    ],
    experienced: [
      "What is DDOS?",
      "How do you avoid a DDOS attack in Azure?",
      "Can you explain your network architecture in your project?",
      "What parameters are required for a DDOS Protection Plan in Azure?",
      "What is a DDOS Plan? How do you create it?",
      "How do you create a DDOS Protection Plan using PowerShell?",
      "How do you apply DDOS Plan to an existing VNet using PowerShell?",
      "How do you enable DDOS Protection during VNet creation via PowerShell?",
      "Can you explain DDOS deployment using Terraform?",
      "How do you create a DDOS plan for an existing resource (like VNet) in Terraform?",
      "Can you import existing DDOS resources into Terraform?"
    ]
  },

10: {
    name: 'Azure Subnet',
    fresher: [
      "What is a subnet?",
      "How many types of subnets are there?",
      "What is a private subnet?",
      "What is a public subnet?",
      "What is the difference between a private subnet and a public subnet?",
      "Why do we need subnets in Azure Virtual Network?",
      "Can a VNet have multiple subnets?",
      "What is the default subnet name in Azure?",
      "How do you assign a subnet to a virtual machine?",
      "Can two subnets in the same VNet communicate with each other by default?"
    ],
    experienced: [
      "What is subnet?",
      "How many types of subnets?",
      "Have you worked on all these subnets?",
      "What is private subnet?",
      "What is public subnet?",
      "What is the difference between public and private subnet?",
      "Why do we need subnet in Azure Virtual Network?",
      "How do you assign a subnet to a virtual machine?",
      "Can two subnets in the same VNet communicate with each other by default?",
      "Have you worked on all types of subnets?",
      "What are the security components available in subnets? List them.",
      "How do you calculate IP ranges for subnets within a VNet?",
      "How do you create multiple subnets in VNet?",
      "What is the maximum number of subnets you can create in a VNet?"
    ]
  },

  11: {
    name: 'NAT Gateway',
    fresher: [
      "What is NAT Gateway in Azure?",
      "Why do we need NAT Gateway?",
      "What is the difference between NAT Gateway and Load Balancer?",
      "How does NAT Gateway help with outbound connectivity?"
    ],
    experienced: [
      "What is NAT Gateway and why do we use this in Azure?",
      "How do you create NAT Gateway? How do you associate NAT Gateway to subnet? Explain step-by-step.",
      "If you don't use NAT Gateway, will it be possible to communicate to the internet from VMs?",
      "What does it do once NAT Gateway is associated to subnet?",
      "What are the required parameters needed for NAT Gateway creation?",
      "What is the operation of NAT Gateway and how does it work at subnet level?",
      "How do you implement NAT Gateway using PowerShell?",
      "How do you associate the NAT Gateway to the VNet using PowerShell?",
      "Can you use NAT Gateway for inbound?",
      "Can NAT Gateway be used at NIC Level?",
      "How do you disassociate NAT Gateway from the subnet using PowerShell?",
      "How do you verify NAT Gateway association to a subnet (PowerShell)?",
      "How do you create NAT Gateway in Terraform?",
      "How do you associate the existing NAT Gateway to existing subnet in Terraform?",
      "How do you create a new NAT Gateway and associate with an existing subnet using Terraform?",
      "How do you disassociate NAT Gateway from subnet in Terraform?"
    ]
  },

  12: {
    name: 'NSG',
    fresher: [
      "What is NSG in Azure?",
      "What is ASG in Azure?",
      "Why do we use security groups?",
      "What is the difference between NSG and ASG?"
    ],
    experienced: [
      "What is NSG?",
      "Why do we use NSG?",
      "How do you create NSG? How do you associate? Explain step-by-step.",
      "At what levels can we associate NSG?",
      "What are the default rules in NSG? List them.",
      "How do you create NSG rules (Inbound & Outbound)? Step-by-step.",
      "What are the properties of NSG?",
      "What is the priority range in NSG?",
      "How do you create NSG using PowerShell?",
      "How do you associate NSG to existing subnet using PowerShell?",
      "How do you create inbound and outbound rules in NSG using PowerShell?",
      "How do you get NSG info via PowerShell command?",
      "How do you block outbound internet using NSG in PowerShell?",
      "What are effective rules in NSG?",
      "What are the 5 tuples in NSG?",
      "What have you done in your project with NSG?",
      "What's the difference between NSG and Firewall?",
      "If UDR and NSG both apply, which takes priority?",
      "What happens if NSG is applied at Subnet and NIC both?",
      "What are common port numbers used (e.g., HTTP, HTTPS, RDP, DNS etc.)?"
    ]
  },

  13: {
    name: 'ASG (Application Security Group)',
    fresher: [
      "What is ASG (Application Security Group)",
      "Why do we use ASG (Application Security Group)"
    ],
    experienced: [
      "What is ASG (Application Security Group)?",
      "Why do we use ASG?",
      "How does ASG differ from NSG?",
      "Can ASG be applied to a subnet?",
      "Can ASG be used across multiple VNets?",
      "What are the benefits of ASG in dynamic environments?",
      "Can ASGs be associated with NSG rules?",
      "How do you create ASG in Azure Portal?",
      "How do you create ASG using PowerShell?",
      "How do you create ASG using Terraform?",
      "How do you attach ASG to NIC?",
      "How do you associate ASG in NSG rules?",
      "Can ASGs work with Azure Firewall?",
      "What are the limitations of ASG?",
      "How would you troubleshoot ASG connectivity issues?",
      "Explain a scenario where ASG is better than NSG.",
      "What is a Service Tag?"
    ]
  },

  14: {
    name: 'Route Table',
    fresher: [
      "What is a Route Table in Azure?",
      "Why do we need custom routes?",
      "What is the difference between system routes and user-defined routes?"
    ],
    experienced: [
      "What is a Route Table?",
      "Why do we use Route Tables?",
      "How do you create a Route Table step-by-step?",
      "How do you add a route to a Route Table?",
      "How do you create UDR (User Defined Route)?",
      "How do you associate a Route Table to a subnet?",
      "When should we use UDR? Provide a real-time scenario.",
      "What are the components of a Route Table?",
      "How do you make a path from subnet to internet via Firewall?",
      "How do you make a path from subnet to on-prem via Firewall?",
      "How do you make a path from subnet to Azure services via Firewall?",
      "What are next hops?",
      "How many types of next hops exist in Azure Route Table?"
    ]
  },

  15: {
    name: 'Subnet Delegation',
    fresher: [
      'What is the subnet delegation'
    ],
    experienced: [
      "What is Subnet Delegation in Azure?",
      "Why do we use Subnet Delegation?",
      "How do you configure subnet delegation?",
      "Which services require subnet delegation?",
      "Can a subnet be delegated to more than one service?",
      "What happens if delegation is not done properly?"
    ]
  },

  16: {
    name: 'Service End Points',
    fresher: [
      "What is a service endpoint and what does it do?",
      "For what services can you enable service endpoints?",
      "Can multiple service endpoints be enabled?",
      "What is a private endpoint?",
      "Why do we use private endpoints?",
      "What is the difference between service endpoint and private endpoint?"
    ],
    experienced: [
      "What is a Service Endpoint?",
      "Why do we use Service Endpoints?",
      "For which services can we enable Service Endpoints?",
      "How do you enable Service Endpoints in Azure Portal?",
      "How do you enable Service Endpoints using PowerShell?",
      "How do you enable Service Endpoints using Terraform?",
      "Can we add multiple Service Endpoints in a subnet?",
      "What are the endpoint names for PaaS services?",
      "When should you prefer a Service Endpoint over a Private Endpoint?"
    ]
  },

  17: {
    name: 'Private End Points',
    fresher: [
      "What is a Private Endpoint in Azure?",
      "Why do we use Private Endpoints?",
      "How is a Private Endpoint different from a Service Endpoint?",
      "Which Azure services support Private Endpoints?",
      "What is the benefit of using Private Endpoints for security?",
      "How do you connect to a resource using a Private Endpoint?",
      "What is a Private Link?"
    ],
    experienced: [
      "What is a Private Endpoint and how does it work in Azure?",
      "Why would you use a Private Endpoint over a Service Endpoint?",
      "How do you create a Private Endpoint for an Azure Storage Account?",
      "What DNS changes are required when using Private Endpoints?",
      "What is Private Link and how is it related to Private Endpoints?",
      "How do you troubleshoot connectivity issues with Private Endpoints?",
      "What are the security implications of using Private Endpoints?",
      "Can you use Private Endpoints across subscriptions or VNets?",
      "What happens if you delete the Private Endpoint but not the resource?",
      "How do you restrict access to a resource to only allow traffic from a Private Endpoint?"
    ]
  },

  18: {
    name: 'VNet Peering',
    fresher: [
      "What is VNet Peering and why do we use it?",
      "What are the types of VNet peering?",
      "What is local peering? Why is it used?",
      "What is global peering? Why is it used?"
    ],
    experienced: [
      "What is VNet Peering?",
      "Why do we use VNet Peering?",
      "When do you need to create VNet Peering? (Explain scenarios)",
      "How many types of Peering are there? What are they?",
      "What is Local Peering? Why is it used?",
      "What is Global Peering? Why is it used?",
      "What options should be enabled when creating Peering?",
      "What is your network architecture?",
      "What are resource locks?",
      "How many types of locks exist in Azure?",
      "How would you prevent users from editing or deleting resources?"
    ]
  },

  19: {
    name: 'Point to Site',
    fresher: [
      "What is Point-to-Site (P2S) VPN in Azure?",
      "When is Point-to-Site preferred over Site-to-Site?",
      "What protocol does P2S use?",
      "How are P2S VPN clients authenticated?",
      "How many authentication methods are available in P2S?",
      "How many tunnels are supported in P2S?"
    ],
    experienced: [
      "What is Point-to-Site (P2S) VPN in Azure?",
      "When do you prefer P2S VPN?",
      "How do you configure Point-to-Site VPN? Step-by-step.",
      "What protocols does P2S use?",
      "How are P2S VPN clients authenticated?",
      "What authentication methods are available for P2S?",
      "How many tunnels are available in P2S?",
      "Have you handled customer-side VPN setup?",
      "How do you export root and client certificates?",
      "What methods are available to connect to Azure from outside?",
      "Share a situation where certificate-based authentication troubleshooting was required."
    ]
  },

  6: {
    name: 'Terraform',
    fresher: [
      "What is a terraform in Azure?",
      "Why do we need a tenant in cloud platforms like Azure?",
      "What is the default management group in a new Azure tenant?",
      "What is PowerShell in simple terms?",
      "Why is PowerShell used by system administrators?",
      "What are some common tools used to deploy resources in Azure?",
      "What is the purpose of using PowerShell with Azure?",
      "How can you log in to your Azure account using PowerShell?",
      "How do you open and run a PowerShell script?",
      "Can you name the tool you use to write and run PowerShell commands?"
    ],
    experienced: [
      "Do you know Terraform?",
      "What is Terraform?",
      "Why do you use Terraform?",
      "Features of Terraform?",
      "Difference between Terraform and PowerShell?",
      "What is the language used in Terraform?",
      "How do you manage Terraform in your project?",
      "What Terraform configuration files do you usually create?",
      "What is blob in Terraform?",
      "What is state file?",
      "How many types of state files?",
      "Where is the state file stored when resource is created locally?",
      "How do you store the state file in a storage account?",
      "How do you deploy Azure resource using Terraform?",
      "What is your AKS version?",
      "Which Terraform version are you using?",
      "What is your Azure provider (ARM) version?",
      "How does Terraform get authentication to Azure Cloud?",
      "What is a variable file in Terraform?",
      "Why do we use a variable file?",
      "What is terraform.tfvars file and why do we use it?",
      "Tell me Terraform variable types.",
      "What is provider.tf and why is it used?",
      "What are the Terraform commands?"
    ]
  },

  
};

export default questionsDatabase;
