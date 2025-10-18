
const saasQuestions = {
  1: {
    name: 'Microsoft 365',
    fresher: [
      "What is Microsoft 365 and what applications does it include?",
      "What is the difference between Microsoft 365 and Office 365?",
      "What are the main subscription plans available for Microsoft 365?",
      "What is OneDrive for Business and how does it work?",
      "What is SharePoint Online and its main features?",
      "What is Microsoft Teams and how is it used for collaboration?",
      "What is Exchange Online and its email capabilities?",
      "How do you access Microsoft 365 applications?",
      "What is the Microsoft 365 Admin Center?",
      "What are the basic security features in Microsoft 365?"
    ],
    experienced: [
      "How do you implement identity and access management in Microsoft 365?",
      "What are the advanced security features like ATP and DLP?",
      "How do you configure conditional access policies?",
      "What are sensitivity labels and how do you implement them?",
      "How do you manage Microsoft 365 groups and team collaboration?",
      "What are the compliance features and eDiscovery capabilities?",
      "How do you implement data governance and retention policies?",
      "What are the PowerBI integration capabilities with Microsoft 365?",
      "How do you manage Microsoft 365 using PowerShell?",
      "What are the disaster recovery and backup strategies for Microsoft 365?"
    ]
  },
  2: {
    name: 'Azure DevOps',
    fresher: [
      "What is Azure DevOps and what services does it provide?",
      "What is Azure Repos and how does it support version control?",
      "What is Azure Pipelines and what are build/release pipelines?",
      "What is Azure Boards and how is it used for project management?",
      "What is Azure Test Plans and its testing capabilities?",
      "What is Azure Artifacts and package management?",
      "How do you create a simple build pipeline?",
      "What are the different types of repositories supported?",
      "How do you manage work items in Azure Boards?",
      "What is the difference between Azure DevOps Services and Server?"
    ],
    experienced: [
      "How do you implement advanced CI/CD pipelines with multiple stages?",
      "What are YAML pipelines and how do they differ from classic pipelines?",
      "How do you implement pipeline security and approval gates?",
      "What are variable groups and how do you manage secrets?",
      "How do you implement branching strategies and pull request policies?",
      "What are Azure DevOps extensions and marketplace integrations?",
      "How do you implement automated testing in pipelines?",
      "What are the monitoring and analytics capabilities in Azure DevOps?",
      "How do you implement infrastructure as code with Azure DevOps?",
      "What are the disaster recovery and backup strategies for Azure DevOps?"
    ]
  },
  3: {
    name: 'Azure Cost Management',
    fresher: [
      "What is Azure Cost Management and why is it important?",
      "How do you view your current Azure spending and usage?",
      "What are Azure budgets and how do you create them?",
      "What are cost alerts and how do you configure them?",
      "What is Azure Advisor and how does it help with cost optimization?",
      "What are some basic cost optimization strategies?",
      "How do you understand your Azure bill and charges?",
      "What are resource tags and how do they help with cost tracking?",
      "What is the difference between costs and usage reporting?",
      "How do you export cost data for analysis?"
    ],
    experienced: [
      "How do you implement comprehensive cost governance across multiple subscriptions?",
      "What are Azure reservations and how do they provide cost savings?",
      "How do you implement chargeback and showback models?",
      "What are the advanced cost optimization techniques using Azure Advisor?",
      "How do you use Azure Cost Management APIs for custom reporting?",
      "What are the cost allocation strategies for shared resources?",
      "How do you implement cost anomaly detection and automated responses?",
      "What are the integration capabilities with third-party cost management tools?",
      "How do you implement cost optimization for specific workload types?",
      "What are the compliance and audit capabilities for cost management?"
    ]
  },
  4: {
    name: 'Azure Sentinel',
    fresher: [
      "What is Azure Sentinel and what is SIEM?",
      "What types of security data can Azure Sentinel collect?",
      "What are data connectors in Azure Sentinel?",
      "What are security incidents and how are they created?",
      "What is the Azure Sentinel workspace?",
      "How do you navigate the Azure Sentinel dashboard?",
      "What are analytics rules and how do they work?",
      "What is threat intelligence in Azure Sentinel?",
      "How do you investigate security incidents?",
      "What are the basic hunting capabilities?"
    ],
    experienced: [
      "How do you configure and optimize data connectors for various sources?",
      "What are the advanced analytics rule types and their configuration?",
      "How do you implement custom KQL queries for threat hunting?",
      "What are playbooks and how do you implement SOAR capabilities?",
      "How do you create custom workbooks and dashboards?",
      "What are the integration capabilities with external SIEM/SOAR tools?",
      "How do you implement User and Entity Behavior Analytics (UEBA)?",
      "What are the cost optimization strategies for Azure Sentinel?",
      "How do you implement multi-workspace and cross-tenant scenarios?",
      "What are the compliance and data residency considerations?"
    ]
  },
  5: {
    name: 'Azure Communication Services',
    fresher: [
      "What is Azure Communication Services and what capabilities does it provide?",
      "What are the main communication modalities supported?",
      "How do you send SMS messages using Communication Services?",
      "What is voice calling functionality and how does it work?",
      "What is video calling and how do you implement it?",
      "What are the chat capabilities in Communication Services?",
      "How do you manage phone numbers in Communication Services?",
      "What SDKs are available for different platforms?",
      "What is identity management in Communication Services?",
      "How do you get started with a simple Communication Services application?"
    ],
    experienced: [
      "How do you implement advanced voice and video calling features?",
      "What are the integration capabilities with Microsoft Teams?",
      "How do you implement call recording and transcription services?",
      "What are the advanced chat features like threading and reactions?",
      "How do you implement custom calling and chat experiences?",
      "What are the compliance and security features available?",
      "How do you implement telephony integration with PSTN?",
      "What are the monitoring and analytics capabilities?",
      "How do you handle scaling and performance optimization?",
      "What are the disaster recovery and high availability strategies?"
    ]
  },
  6: {
    name: 'Azure Cognitive Services',
    fresher: [
      "What is Azure Cognitive Services and what AI capabilities does it provide?",
      "What are the main categories of Cognitive Services?",
      "What is Computer Vision and what can it do?",
      "What are Speech Services and their capabilities?",
      "What is Language Understanding (LUIS)?",
      "What is Text Analytics and its features?",
      "How do you call Cognitive Services APIs?",
      "What is the Cognitive Services SDK?",
      "How do you manage API keys and authentication?",
      "What are some common use cases for Cognitive Services?"
    ],
    experienced: [
      "How do you implement custom vision models using Custom Vision service?",
      "What are the advanced speech capabilities like speech-to-text and text-to-speech?",
      "How do you build and deploy custom language models?",
      "What are the Face API capabilities and privacy considerations?",
      "How do you implement content moderation using Cognitive Services?",
      "What are the integration patterns with other Azure services?",
      "How do you optimize performance and manage costs for Cognitive Services?",
      "What are the compliance and data privacy considerations?",
      "How do you implement multi-modal AI solutions?",
      "What are the monitoring and troubleshooting strategies?"
    ]
  },
  7: {
    name: 'App Authentication with Azure AD',
    fresher: [
      "What is Azure Active Directory (Azure AD) and its role in authentication?",
      "What is single sign-on (SSO) and how does Azure AD provide it?",
      "What are the basic authentication flows in Azure AD?",
      "How do you register an application in Azure AD?",
      "What are client IDs and client secrets?",
      "What is multi-factor authentication (MFA)?",
      "What are managed identities and why are they useful?",
      "How do you configure basic authentication for a web application?",
      "What is the Microsoft Authentication Library (MSAL)?",
      "What are redirect URIs and why are they important?"
    ],
    experienced: [
      "How do you implement OAuth 2.0 and OpenID Connect flows?",
      "What are the different types of managed identities and their use cases?",
      "How do you implement conditional access policies for applications?",
      "What are application roles and permissions in Azure AD?",
      "How do you configure certificate-based authentication?",
      "What is Azure AD B2C and when do you use it over Azure AD?",
      "How do you implement token caching and refresh strategies?",
      "What are the security best practices for application authentication?",
      "How do you troubleshoot authentication and authorization issues?",
      "What are the compliance and audit capabilities for app authentication?"
    ]
  },
  8: {
    name: 'SaaS Billing & Subscription Management',
    fresher: [
      "What is SaaS billing and how does it differ from traditional billing?",
      "What are the common billing models for SaaS applications?",
      "What is subscription management and its importance?",
      "What is usage-based billing and how does it work?",
      "What are billing cycles and how do you manage them?",
      "How do you handle subscription upgrades and downgrades?",
      "What is metered billing and its use cases?",
      "How do you manage customer billing information?",
      "What are the basic compliance requirements for SaaS billing?",
      "How do you handle billing disputes and refunds?"
    ],
    experienced: [
      "How do you implement complex pricing tiers and feature-based billing?",
      "What are the integration strategies with Azure Marketplace billing?",
      "How do you implement proration and billing adjustments?",
      "What are the tax calculation and compliance considerations?",
      "How do you implement subscription lifecycle automation?",
      "What are the chargeback and payment processing integrations?",
      "How do you implement billing analytics and revenue reporting?",
      "What are the disaster recovery strategies for billing systems?",
      "How do you handle multi-tenant billing scenarios?",
      "What are the security and PCI compliance requirements?"
    ]
  },
  9: {
    name: 'SaaS Monitoring with Azure',
    fresher: [
      "Why is monitoring important for SaaS applications?",
      "What types of metrics should you monitor in a SaaS application?",
      "What is Application Insights and how does it help with monitoring?",
      "What are the basic performance metrics to track?",
      "How do you set up basic alerts and notifications?",
      "What is uptime monitoring and why is it important?",
      "How do you monitor user experience and satisfaction?",
      "What are logs and how do you use them for troubleshooting?",
      "What is the difference between monitoring and observability?",
      "How do you create basic dashboards for SaaS monitoring?"
    ],
    experienced: [
      "How do you implement end-to-end observability for SaaS applications?",
      "What are the key SaaS metrics and KPIs to track (churn, ARR, etc.)?",
      "How do you implement distributed tracing for microservices-based SaaS?",
      "What are the advanced alerting strategies and incident response?",
      "How do you implement custom telemetry and business metrics?",
      "What are the compliance and audit requirements for SaaS monitoring?",
      "How do you implement real user monitoring (RUM) and synthetic monitoring?",
      "What are the cost optimization strategies for monitoring infrastructure?",
      "How do you implement multi-tenant monitoring and data isolation?",
      "What are the integration capabilities with third-party monitoring tools?"
    ]
  },
  10: {
    name: 'Google and Facebook Integration',
    fresher: [
      "What is social media integration and why is it useful for applications?",
      "What is OAuth and how does it work with Google and Facebook?",
      "How do you register your application with Google for integration?",
      "How do you register your application with Facebook for integration?",
      "What types of data can you access from Google APIs?",
      "What types of data can you access from Facebook Graph API?",
      "What are access tokens and how do they work?",
      "How do you implement basic social login functionality?",
      "What are the user consent and permission requirements?",
      "What are some common use cases for social media integration?"
    ],
    experienced: [
      "How do you implement robust OAuth 2.0 flows for Google and Facebook?",
      "What are the advanced Graph API capabilities and their implementation?",
      "How do you handle token refresh and long-lived access tokens?",
      "What are the rate limiting and quota management strategies?",
      "How do you implement social sharing and posting capabilities?",
      "What are the privacy and GDPR compliance considerations?",
      "How do you handle error scenarios and API deprecations?",
      "What are the security best practices for social media integration?",
      "How do you implement analytics and tracking for social features?",
      "What are the disaster recovery strategies for social integrations?"
    ]
  }
};

export default saasQuestions;
