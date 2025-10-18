
const iaasQuestions = {
  1: {
    name: 'Azure Virtual Machine',
    fresher: [
      "What is an Azure Virtual Machine?",
      "What are the different VM sizes available in Azure?",
      "How do you create a VM in Azure portal?",
      "What is the difference between Standard and Premium storage for VMs?",
      "How do you connect to a Windows VM using RDP?",
      "How do you connect to a Linux VM using SSH?",
      "What are VM extensions and give some examples?",
      "What is the difference between stopping and deallocating a VM?",
      "How do you resize a VM in Azure?",
      "What are the different VM series in Azure (A, B, D, E series)?"
    ],
    experienced: [
      "How do you implement VM high availability using availability sets?",
      "What are the different VM storage options and their performance characteristics?",
      "How do you implement VM backup and disaster recovery strategies?",
      "What are the security best practices for Azure VMs?",
      "How do you implement VM monitoring and diagnostics?",
      "What are managed disks vs unmanaged disks and their benefits?",
      "How do you implement VM auto-scaling using scale sets?",
      "What are the networking considerations for VMs in different subnets?",
      "How do you migrate on-premises VMs to Azure?",
      "What are the cost optimization strategies for Azure VMs?"
    ]
  },
  2: {
    name: 'Azure Activities',
    fresher: [
      "What are Azure Activity Logs?",
      "Where can you view Azure Activity Logs in the portal?",
      "What type of information is captured in Activity Logs?",
      "How long are Activity Logs retained by default?",
      "What is the difference between Activity Logs and Diagnostic Logs?",
      "How do you filter Activity Logs for specific resources?",
      "What are the different log categories in Activity Logs?",
      "How do you export Activity Logs to storage?",
      "What is Log Analytics workspace?",
      "How do you search Activity Logs for specific events?"
    ],
    experienced: [
      "How do you configure Activity Log alerts for critical operations?",
      "What are the different ways to export Activity Logs to external systems?",
      "How do you use KQL to query Activity Logs in Log Analytics?",
      "What are the compliance and audit capabilities of Activity Logs?",
      "How do you implement automated responses to Activity Log events using Logic Apps?",
      "What are the retention and archival strategies for Activity Logs?",
      "How do you integrate Activity Logs with SIEM solutions?",
      "What are the limitations of Activity Logs and how do you overcome them?",
      "How do you implement Activity Log monitoring at scale across multiple subscriptions?",
      "What are the security considerations for Activity Log access and management?"
    ]
  },
  3: {
    name: 'Azure VM Disk Operations',
    fresher: [
      "What are the different types of disks available for Azure VMs?",
      "What is the difference between OS disk and data disk?",
      "How do you attach a new data disk to an existing VM?",
      "What is disk caching and what are the different caching options?",
      "How do you increase the size of a VM disk?",
      "What is Azure Disk Encryption?",
      "How do you create a snapshot of a VM disk?",
      "What is the difference between Standard HDD, Standard SSD, and Premium SSD?",
      "How do you check disk performance metrics?",
      "What happens to disks when you delete a VM?"
    ],
    experienced: [
      "How do you implement disk encryption at rest using Azure Disk Encryption?",
      "What are Ultra Disks and when would you use them?",
      "How do you implement shared disks for clustered applications?",
      "What are the performance characteristics and IOPS limits for different disk types?",
      "How do you migrate from unmanaged to managed disks?",
      "What are disk reservations and how do they affect performance?",
      "How do you implement automated disk backup strategies?",
      "What are the disaster recovery options for VM disks?",
      "How do you optimize disk performance for database workloads?",
      "What are the cost optimization strategies for disk storage?"
    ]
  },
  4: {
    name: 'VM Management',
    fresher: [
      "How do you start, stop, and restart Azure VMs?",
      "What is the difference between Stop and Deallocate?",
      "How do you schedule automatic shutdown for VMs?",
      "How do you view VM status and health information?",
      "What is VM redeploy and when do you use it?",
      "How do you change VM size after creation?",
      "What is Azure VM agent and what does it do?",
      "How do you update VM extensions?",
      "What are the different ways to manage VMs (Portal, CLI, PowerShell)?",
      "How do you configure VM maintenance schedules?"
    ],
    experienced: [
      "How do you implement VM lifecycle management using Azure Automation?",
      "What are the disaster recovery strategies for VM management?",
      "How do you implement VM patching strategies using Update Management?",
      "What are the security hardening practices for VM management?",
      "How do you implement VM governance using Azure Policy?",
      "What are the monitoring and alerting strategies for VM health?",
      "How do you implement VM capacity planning and rightsizing?",
      "What are the automation strategies for VM deployment and configuration?",
      "How do you manage VM compliance and security updates?",
      "What are the cost management strategies for VM operations?"
    ]
  },
  5: {
    name: 'Availability Set Configuration',
    fresher: [
      "What is an Availability Set in Azure?",
      "Why do you need Availability Sets for VMs?",
      "What are fault domains and update domains?",
      "How many VMs can you put in an Availability Set?",
      "What is the SLA provided by Availability Sets?",
      "How do you create an Availability Set?",
      "Can you add an existing VM to an Availability Set?",
      "What happens during planned maintenance with Availability Sets?",
      "What is the difference between Availability Sets and Availability Zones?",
      "How do Availability Sets protect against hardware failures?"
    ],
    experienced: [
      "How do you design highly available applications using Availability Sets?",
      "What are the limitations of Availability Sets compared to Availability Zones?",
      "How do you implement load balancing with Availability Sets?",
      "What are the network considerations when using Availability Sets?",
      "How do you migrate VMs between Availability Sets?",
      "What are the storage considerations for VMs in Availability Sets?",
      "How do you implement disaster recovery strategies with Availability Sets?",
      "What are the monitoring and alerting strategies for Availability Sets?",
      "How do you handle application-level failover with Availability Sets?",
      "What are the cost implications of using Availability Sets?"
    ]
  },
  6: {
    name: 'Azure VMSS',
    fresher: [
      "What is Azure Virtual Machine Scale Sets (VMSS)?",
      "What are the benefits of using VMSS over individual VMs?",
      "How do you create a VMSS?",
      "What is auto-scaling in VMSS?",
      "What is the maximum number of VMs in a scale set?",
      "What are scale-in and scale-out operations?",
      "How do you configure scaling rules?",
      "What is the difference between uniform and flexible scale sets?",
      "How do you deploy applications to VMSS?",
      "What happens to data when VMs are scaled in?"
    ],
    experienced: [
      "How do you implement custom auto-scaling policies in VMSS?",
      "What are the different scaling modes and when do you use each?",
      "How do you implement rolling updates and upgrades in VMSS?",
      "What are the networking considerations for VMSS?",
      "How do you handle stateful applications in VMSS?",
      "What are the load balancing strategies for VMSS?",
      "How do you implement health checks and automatic repair?",
      "What are the disaster recovery strategies for VMSS?",
      "How do you implement multi-region VMSS deployments?",
      "What are the cost optimization strategies for VMSS?"
    ]
  },
  7: {
    name: 'Application Gateway',
    fresher: [
      "What is Azure Application Gateway?",
      "What is Layer 7 load balancing?",
      "What are the main components of Application Gateway?",
      "What is SSL termination?",
      "What are backend pools in Application Gateway?",
      "What are health probes and why are they important?",
      "What is path-based routing?",
      "What is host-based routing?",
      "How do you configure basic Application Gateway?",
      "What is Web Application Firewall (WAF)?"
    ],
    experienced: [
      "How do you implement end-to-end SSL encryption with Application Gateway?",
      "What are the different WAF rule sets and how do you configure them?",
      "How do you implement custom health probes for complex applications?",
      "What are the autoscaling capabilities of Application Gateway v2?",
      "How do you implement multi-site hosting with Application Gateway?",
      "What are the session affinity options in Application Gateway?",
      "How do you implement custom error pages and redirects?",
      "What are the monitoring and diagnostics capabilities?",
      "How do you integrate Application Gateway with other Azure services?",
      "What are the disaster recovery strategies for Application Gateway?"
    ]
  },
  8: {
    name: 'Standard Load Balancer',
    fresher: [
      "What is Azure Load Balancer?",
      "What is Layer 4 load balancing?",
      "What is the difference between public and internal load balancer?",
      "What are backend pools in Load Balancer?",
      "What are health probes in Load Balancer?",
      "What are load balancing rules?",
      "What is the difference between Basic and Standard Load Balancer?",
      "What are the different distribution modes?",
      "How do you configure a basic Load Balancer?",
      "What are frontend IP configurations?"
    ],
    experienced: [
      "What are the high availability features of Standard Load Balancer?",
      "How do you implement outbound connectivity using Load Balancer?",
      "What are high availability ports and when do you use them?",
      "How do you configure zone-redundant Load Balancer?",
      "What are the different algorithms for load distribution?",
      "How do you implement session persistence?",
      "What are the monitoring and metrics available for Load Balancer?",
      "How do you troubleshoot Load Balancer connectivity issues?",
      "What are the security considerations for Load Balancer?",
      "How do you implement disaster recovery with Load Balancer?"
    ]
  },
  9: {
    name: 'Traffic Manager',
    fresher: [
      "What is Azure Traffic Manager?",
      "What is DNS-based traffic routing?",
      "What are the basic routing methods in Traffic Manager?",
      "What is priority routing method?",
      "What is weighted routing method?",
      "What is performance routing method?",
      "What are endpoints in Traffic Manager?",
      "What is endpoint monitoring?",
      "How do you configure a basic Traffic Manager profile?",
      "What is failover in Traffic Manager?"
    ],
    experienced: [
      "How do you implement complex routing scenarios using nested profiles?",
      "What is geographic routing and when do you use it?",
      "How do you configure custom health check endpoints?",
      "What are the different endpoint types and their use cases?",
      "How do you implement disaster recovery using Traffic Manager?",
      "What are the monitoring and analytics capabilities?",
      "How do you troubleshoot Traffic Manager DNS resolution issues?",
      "What are the security considerations for Traffic Manager?",
      "How do you implement Traffic Manager with other load balancing services?",
      "What are the cost optimization strategies for Traffic Manager?"
    ]
  },
  10: {
    name: 'Front Door',
    fresher: [
      "What is Azure Front Door?",
      "What is a CDN (Content Delivery Network)?",
      "What are the main benefits of using Front Door?",
      "What is global load balancing?",
      "What are backend pools in Front Door?",
      "What is health probe configuration?",
      "What is caching in Front Door?",
      "What is SSL offloading?",
      "How do you configure a basic Front Door?",
      "What are routing rules in Front Door?"
    ],
    experienced: [
      "How does Azure Front Door differ from Application Gateway and Traffic Manager?",
      "What are the different routing methods and rules in Front Door?",
      "How do you implement Web Application Firewall with Front Door?",
      "What are the caching strategies and cache behaviors?",
      "How do you configure custom domains and SSL certificates?",
      "What are the session affinity options in Front Door?",
      "How do you implement URL rewriting and redirects?",
      "What are the monitoring and analytics capabilities?",
      "How do you implement disaster recovery strategies with Front Door?",
      "What are the security features and DDoS protection capabilities?"
    ]
  }
};

export default iaasQuestions;
