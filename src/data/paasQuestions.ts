const paasQuestions = {
  1: {
    name: 'AKS Creation',
    fresher: [
      "What is Azure Kubernetes Service (AKS)?",
      "Why would you use AKS instead of managing Kubernetes yourself?",
      "What are the basic components of a Kubernetes cluster?",
      "What is a container and how is it different from a virtual machine?",
      "What is Docker and how does it relate to Kubernetes?",
      "What are some benefits of using containers?",
      "What is the difference between a pod and a container?",
      "What is a Kubernetes node?",
      "What is kubectl and what is it used for?",
      "What are the basic steps to create an AKS cluster?"
    ],
    experienced: [
      "How do you create an AKS cluster step by step?",
      "What are the key parameters required for AKS cluster creation?",
      "What node sizes and configurations do you typically use?",
      "How do you configure networking for AKS clusters?",
      "What authentication methods have you used with AKS?",
      "How do you manage AKS cluster upgrades?",
      "What monitoring solutions do you use with AKS?",
      "How do you handle storage in AKS?",
      "What security best practices do you follow for AKS?",
      "How do you configure auto-scaling in AKS?",
      "What networking models have you used (kubenet vs Azure CNI)?",
      "How do you integrate AKS with Azure Active Directory?",
      "What are node pools and how do you manage them?",
      "How do you troubleshoot common AKS issues?"
    ]
  },

  2: {
    name: 'AKS Activities',
    fresher: [
      "What daily activities would you perform on an AKS cluster?",
      "How do you check the health of an AKS cluster?",
      "What is kubectl and what basic commands should you know?",
      "How do you view logs from containers in AKS?",
      "What is a deployment in Kubernetes?",
      "What is a service in Kubernetes?",
      "How do you scale applications in AKS?"
    ],
    experienced: [
      "What are your daily activities managing AKS clusters?",
      "How do you monitor AKS cluster performance?",
      "What kubectl commands do you use most frequently?",
      "How do you troubleshoot failing pods?",
      "How do you perform rolling updates of applications?",
      "How do you manage secrets and config maps?",
      "What backup and disaster recovery strategies do you use?",
      "How do you handle cluster maintenance and updates?",
      "How do you implement CI/CD pipelines with AKS?",
      "What cost optimization strategies do you use?",
      "How do you manage multiple environments (dev/test/prod)?",
      "How do you handle ingress and load balancing?",
      "What security scanning and compliance measures do you implement?",
      "How do you manage persistent volumes and storage classes?"
    ]
  },

  3: {
    name: 'AKS Pod Creation',
    fresher: [
      "What is a pod in Kubernetes?",
      "How do you create a simple pod?",
      "What is a YAML file and why is it important?",
      "What is the difference between a pod and a deployment?",
      "How do you check if a pod is running?",
      "What happens when a pod fails?",
      "How do you delete a pod?",
      "What is a container image and where is it stored?"
    ],
    experienced: [
      "How do you create pods using YAML manifests?",
      "What are the key components of a pod specification?",
      "How do you configure resource limits and requests for pods?",
      "How do you implement health checks (liveness and readiness probes)?",
      "How do you mount volumes to pods?",
      "How do you handle pod networking and service discovery?",
      "What are init containers and when do you use them?",
      "How do you configure pod security contexts?",
      "How do you troubleshoot pod startup issues?",
      "How do you implement pod anti-affinity rules?",
      "How do you handle secrets and environment variables in pods?",
      "What are sidecar containers and how do you implement them?",
      "How do you configure pod autoscaling?",
      "How do you debug pod networking issues?"
    ]
  },

  4: {
    name: 'App Service',
    fresher: [
      "What is Azure App Service?",
      "What types of applications can you host on App Service?",
      "What is the difference between App Service and Virtual Machines?",
      "What programming languages are supported by App Service?",
      "What is an App Service Plan?",
      "How do you deploy code to App Service?",
      "What is continuous deployment in App Service?"
    ],
    experienced: [
      "How do you create and configure Azure App Service?",
      "What are the different App Service Plan tiers and when do you use each?",
      "How do you implement custom domains and SSL certificates?",
      "How do you configure App Service authentication and authorization?",
      "How do you implement staging slots and deployment slots?",
      "How do you configure auto-scaling for App Service?",
      "How do you implement monitoring and logging for App Service?",
      "How do you handle App Service backups and disaster recovery?",
      "How do you configure App Service networking and VNet integration?",
      "How do you implement CI/CD pipelines for App Service?",
      "How do you manage App Service configuration and application settings?",
      "How do you troubleshoot common App Service performance issues?",
      "How do you implement security best practices for App Service?",
      "How do you handle App Service migrations and updates?"
    ]
  },

  5: {
    name: 'Storage Account',
    fresher: [
      "What is Azure Storage Account?",
      "What types of storage are available in Azure?",
      "What is blob storage and when do you use it?",
      "What is the difference between hot, cool, and archive tiers?",
      "How do you upload files to blob storage?",
      "What is a storage account key?"
    ],
    experienced: [
      "How do you create and configure Azure Storage Accounts?",
      "What are the different storage account types and performance tiers?",
      "How do you implement blob lifecycle management policies?",
      "How do you configure storage account security and access controls?",
      "How do you implement storage account replication strategies?",
      "How do you monitor storage account performance and costs?",
      "How do you implement storage account disaster recovery?",
      "How do you configure storage account networking and firewalls?",
      "How do you implement storage account encryption and key management?",
      "How do you optimize storage costs across different access tiers?",
      "How do you implement storage account backup and versioning?",
      "How do you troubleshoot storage account connectivity issues?",
      "How do you implement storage account compliance and auditing?",
      "How do you migrate data between storage accounts?"
    ]
  },

  6: {
    name: 'Web App',
    fresher: [
      "What is a Web App in Azure?",
      "How is a Web App different from App Service?",
      "How do you create a simple web application?",
      "What is FTP and how do you use it with Web Apps?",
      "How do you view logs from a Web App?",
      "What is a custom domain?"
    ],
    experienced: [
      "How do you deploy and manage Azure Web Apps?",
      "How do you configure Web App scaling and performance optimization?",
      "How do you implement Web App security and authentication?",
      "How do you configure Web App custom domains and SSL?",
      "How do you implement Web App deployment slots and staging?",
      "How do you configure Web App monitoring and diagnostics?",
      "How do you implement Web App backup and disaster recovery?",
      "How do you configure Web App networking and VNet integration?",
      "How do you implement Web App CI/CD pipelines?",
      "How do you troubleshoot Web App performance and availability issues?",
      "How do you implement Web App configuration management?",
      "How do you handle Web App database connections and dependencies?",
      "How do you implement Web App security scanning and compliance?",
      "How do you optimize Web App costs and resource utilization?"
    ]
  },

  7: {
    name: 'Azure Key Vault',
    fresher: [
      "What is Azure Key Vault?",
      "Why do we need to store secrets securely?",
      "What types of secrets can you store in Key Vault?",
      "What is the difference between secrets, keys, and certificates?",
      "How do applications access secrets from Key Vault?"
    ],
    experienced: [
      "How do you create and configure Azure Key Vault?",
      "How do you implement Key Vault access policies and RBAC?",
      "How do you manage secrets, keys, and certificates in Key Vault?",
      "How do you integrate Key Vault with applications and services?",
      "How do you implement Key Vault networking and private endpoints?",
      "How do you configure Key Vault monitoring and auditing?",
      "How do you implement Key Vault backup and disaster recovery?",
      "How do you handle Key Vault key rotation and lifecycle management?",
      "How do you implement Key Vault compliance and governance?",
      "How do you troubleshoot Key Vault access and permission issues?",
      "How do you integrate Key Vault with ARM templates and Infrastructure as Code?",
      "How do you implement Key Vault soft delete and purge protection?",
      "How do you manage Key Vault across multiple environments?",
      "How do you implement Key Vault cost optimization strategies?"
    ]
  },

  8: {
    name: 'Azure Monitor',
    fresher: [
      "What is Azure Monitor?",
      "Why is monitoring important for cloud applications?",
      "What types of data can Azure Monitor collect?",
      "What is a metric in Azure Monitor?",
      "What is a log in Azure Monitor?",
      "What are alerts and why do you need them?"
    ],
    experienced: [
      "How do you configure Azure Monitor for comprehensive monitoring?",
      "How do you create custom metrics and log queries?",
      "How do you implement Azure Monitor alerts and action groups?",
      "How do you configure Azure Monitor workbooks and dashboards?",
      "How do you implement Application Insights for application monitoring?",
      "How do you configure Azure Monitor for infrastructure monitoring?",
      "How do you implement Azure Monitor log analytics and KQL queries?",
      "How do you configure Azure Monitor data retention and costs?",
      "How do you implement Azure Monitor integration with third-party tools?",
      "How do you troubleshoot Azure Monitor data collection issues?",
      "How do you implement Azure Monitor governance and compliance?",
      "How do you configure Azure Monitor for multi-cloud and hybrid scenarios?",
      "How do you implement Azure Monitor automation and programmatic access?",
      "How do you optimize Azure Monitor performance and scalability?"
    ]
  },

  9: {
    name: 'Logic App',
    fresher: [
      "What is Azure Logic Apps?",
      "What is workflow automation?",
      "What are connectors in Logic Apps?",
      "What is a trigger in Logic Apps?",
      "What is an action in Logic Apps?",
      "How do you create a simple Logic App?"
    ],
    experienced: [
      "How do you design and implement Azure Logic Apps workflows?",
      "How do you configure Logic Apps triggers and actions?",
      "How do you implement Logic Apps error handling and retry policies?",
      "How do you configure Logic Apps security and authentication?",
      "How do you implement Logic Apps integration with various systems?",
      "How do you configure Logic Apps monitoring and diagnostics?",
      "How do you implement Logic Apps performance optimization?",
      "How do you handle Logic Apps versioning and deployment?",
      "How do you implement Logic Apps disaster recovery and backup?",
      "How do you troubleshoot Logic Apps execution and connectivity issues?",
      "How do you implement Logic Apps governance and compliance?",
      "How do you configure Logic Apps networking and private connectivity?",
      "How do you implement Logic Apps cost optimization strategies?",
      "How do you handle Logic Apps schema validation and data transformation?"
    ]
  },

  10: {
    name: 'Function App',
    fresher: [
      "What is Azure Functions?",
      "What is serverless computing?",
      "What programming languages are supported by Azure Functions?",
      "What is a trigger in Azure Functions?",
      "What is a binding in Azure Functions?",
      "How do you create a simple Azure Function?"
    ],
    experienced: [
      "How do you develop and deploy Azure Functions?",
      "How do you configure Azure Functions triggers and bindings?",
      "How do you implement Azure Functions scaling and performance optimization?",
      "How do you configure Azure Functions security and authentication?",
      "How do you implement Azure Functions monitoring and logging?",
      "How do you handle Azure Functions error handling and retry logic?",
      "How do you implement Azure Functions CI/CD pipelines?",
      "How do you configure Azure Functions networking and VNet integration?",
      "How do you implement Azure Functions durable functions for stateful scenarios?",
      "How do you troubleshoot Azure Functions performance and execution issues?",
      "How do you implement Azure Functions cost optimization and consumption planning?",
      "How do you handle Azure Functions dependency management and packaging?",
      "How do you implement Azure Functions integration with other Azure services?",
      "How do you configure Azure Functions disaster recovery and backup strategies?"
    ]
  },

  11: {
    name: 'SQL Database',
    fresher: [
      "What is Azure SQL Database?",
      "What is the difference between SQL Database and SQL Server?",
      "What is a connection string?",
      "What is database backup?",
      "What is database scaling?",
      "How do you connect to Azure SQL Database?"
    ],
    experienced: [
      "How do you provision and configure Azure SQL Database?",
      "How do you implement Azure SQL Database security and compliance?",
      "How do you configure Azure SQL Database performance optimization?",
      "How do you implement Azure SQL Database backup and disaster recovery?",
      "How do you configure Azure SQL Database scaling and elasticity?",
      "How do you implement Azure SQL Database monitoring and diagnostics?",
      "How do you handle Azure SQL Database migration from on-premises?",
      "How do you configure Azure SQL Database networking and private connectivity?",
      "How do you implement Azure SQL Database high availability and geo-replication?",
      "How do you troubleshoot Azure SQL Database performance and connectivity issues?",
      "How do you implement Azure SQL Database cost optimization strategies?",
      "How do you handle Azure SQL Database schema management and versioning?",
      "How do you implement Azure SQL Database integration with applications?",
      "How do you configure Azure SQL Database compliance and auditing?"
    ]
  },

  12: {
    name: 'Azure Container Instances',
    fresher: [
      "What is Azure Container Instances (ACI)?",
      "What is the difference between ACI and AKS?",
      "When would you use ACI instead of AKS?",
      "What is a container group?",
      "How do you run a simple container in ACI?",
      "What container registries can you use with ACI?"
    ],
    experienced: [
      "How do you deploy and manage Azure Container Instances?",
      "How do you configure ACI networking and security?",
      "How do you implement ACI integration with Azure services?",
      "How do you configure ACI resource allocation and scaling?",
      "How do you implement ACI monitoring and logging?",
      "How do you handle ACI persistent storage and volumes?",
      "How do you configure ACI environment variables and secrets?",
      "How do you implement ACI CI/CD pipelines and automation?",
      "How do you troubleshoot ACI deployment and runtime issues?",
      "How do you implement ACI cost optimization strategies?",
      "How do you handle ACI multi-container groups and sidecar patterns?",
      "How do you configure ACI virtual network integration?",
      "How do you implement ACI disaster recovery and backup strategies?",
      "How do you handle ACI image management and security scanning?"
    ]
  },

  13: {
    name: 'Azure Workspace',
    fresher: [
      "What is an Azure workspace?",
      "What is Azure Log Analytics workspace?",
      "Why do you need a workspace for monitoring?",
      "What data is stored in a workspace?",
      "How do you access workspace data?"
    ],
    experienced: [
      "How do you create and configure Azure Log Analytics workspaces?",
      "How do you implement workspace data collection and retention policies?",
      "How do you configure workspace security and access controls?",
      "How do you implement workspace cost management and optimization?",
      "How do you configure workspace data export and integration?",
      "How do you implement workspace monitoring and alerting?",
      "How do you handle workspace data governance and compliance?",
      "How do you configure workspace networking and private connectivity?",
      "How do you implement workspace backup and disaster recovery?",
      "How do you troubleshoot workspace data ingestion and query issues?",
      "How do you implement workspace automation and programmatic access?",
      "How do you handle workspace migration and consolidation?",
      "How do you configure workspace integration with Azure services?",
      "How do you implement workspace performance optimization and scaling?"
    ]
  },

  14: {
    name: 'Azure API Management',
    fresher: [
      "What is Azure API Management?",
      "Why do you need API management?",
      "What is an API gateway?",
      "What are API policies?",
      "What is API versioning?",
      "What is API documentation?"
    ],
    experienced: [
      "How do you configure Azure API Management instances?",
      "How do you implement API Management policies and transformations?",
      "How do you configure API Management security and authentication?",
      "How do you implement API Management monitoring and analytics?",
      "How do you configure API Management networking and connectivity?",
      "How do you implement API Management versioning and lifecycle management?",
      "How do you configure API Management developer portal and documentation?",
      "How do you implement API Management integration with backend services?",
      "How do you troubleshoot API Management performance and connectivity issues?",
      "How do you implement API Management cost optimization strategies?",
      "How do you handle API Management disaster recovery and backup?",
      "How do you configure API Management compliance and governance?",
      "How do you implement API Management CI/CD and automation?",
      "How do you handle API Management scaling and performance optimization?"
    ]
  },

  15: {
    name: 'Azure Event Grid',
    fresher: [
      "What is Azure Event Grid?",
      "What is event-driven architecture?",
      "What is an event in Event Grid?",
      "What is an event handler?",
      "What are event subscriptions?",
      "Why do you use Event Grid instead of direct API calls?"
    ],
    experienced: [
      "How do you configure Azure Event Grid topics and subscriptions?",
      "How do you implement Event Grid custom events and schemas?",
      "How do you configure Event Grid security and authentication?",
      "How do you implement Event Grid monitoring and diagnostics?",
      "How do you configure Event Grid filtering and routing?",
      "How do you implement Event Grid integration with Azure services?",
      "How do you handle Event Grid error handling and dead letter queues?",
      "How do you configure Event Grid networking and private connectivity?",
      "How do you implement Event Grid disaster recovery and backup?",
      "How do you troubleshoot Event Grid delivery and subscription issues?",
      "How do you implement Event Grid cost optimization strategies?",
      "How do you handle Event Grid compliance and governance?",
      "How do you implement Event Grid automation and Infrastructure as Code?",
      "How do you configure Event Grid performance optimization and scaling?"
    ]
  }
};

export default paasQuestions;
