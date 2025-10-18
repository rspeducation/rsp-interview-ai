
const devopsQuestions = {
  1: {
    name: 'DevOps Fundamentals',
    fresher: [
      "What is DevOps and why is it important?",
      "What are the core principles of DevOps culture?",
      "How does DevOps differ from traditional software development?",
      "What is the DevOps lifecycle and its key phases?",
      "What are the main benefits of implementing DevOps?",
      "What is continuous integration (CI)?",
      "What is continuous delivery (CD) and continuous deployment?",
      "What are some common DevOps tools and their purposes?",
      "What is the role of automation in DevOps?",
      "What are the key metrics used to measure DevOps success?"
    ],
    experienced: [
      "How do you implement DevOps culture transformation in an organization?",
      "What are the advanced DevOps practices like GitOps and ChatOps?",
      "How do you measure and improve DevOps maturity in teams?",
      "What are the challenges in scaling DevOps across large organizations?",
      "How do you implement DevSecOps and shift-left security practices?",
      "What are the strategies for handling legacy systems in DevOps transformation?",
      "How do you implement site reliability engineering (SRE) practices?",
      "What are the compliance and governance considerations in regulated industries?",
      "How do you handle incident management and post-mortem processes?",
      "What are the cost optimization strategies for DevOps toolchains?"
    ]
  },
  2: {
    name: 'CI/CD Pipelines',
    fresher: [
      "What is a CI/CD pipeline and its main components?",
      "What is the difference between continuous integration and continuous deployment?",
      "How do you create a basic build pipeline?",
      "What are build agents and how do they work?",
      "What are artifacts in CI/CD pipelines?",
      "How do you configure automated testing in pipelines?",
      "What are deployment environments (dev, staging, production)?",
      "What is pipeline as code and its benefits?",
      "How do you handle pipeline failures and debugging?",
      "What are the basic security practices for CI/CD pipelines?"
    ],
    experienced: [
      "How do you design complex multi-stage CI/CD pipelines?",
      "What are the different deployment strategies (blue-green, canary, rolling)?",
      "How do you implement advanced testing strategies in pipelines?",
      "What are the pipeline orchestration patterns for microservices?",
      "How do you implement pipeline security scanning and compliance checks?",
      "What are the strategies for managing secrets and credentials in pipelines?",
      "How do you implement cross-platform and multi-cloud CI/CD?",
      "What are the monitoring and observability practices for pipelines?",
      "How do you implement pipeline optimization for performance and cost?",
      "What are the disaster recovery strategies for CI/CD infrastructure?"
    ]
  },
  3: {
    name: 'Infrastructure as Code',
    fresher: [
      "What is Infrastructure as Code (IaC) and why is it important?",
      "What are the main benefits of using IaC?",
      "What is the difference between declarative and imperative IaC?",
      "What are some popular IaC tools (Terraform, ARM templates)?",
      "How do you write a basic Terraform configuration?",
      "What are Terraform providers and resources?",
      "What is state management in Terraform?",
      "How do you validate and plan infrastructure changes?",
      "What are ARM templates and how do you use them?",
      "What are the basic security practices for IaC?"
    ],
    experienced: [
      "How do you implement advanced Terraform patterns like modules and workspaces?",
      "What are the state management strategies for team collaboration?",
      "How do you implement IaC testing and validation strategies?",
      "What are the security scanning and compliance practices for IaC?",
      "How do you handle IaC versioning and rollback strategies?",
      "What are the multi-cloud and hybrid cloud IaC patterns?",
      "How do you implement IaC governance and policy enforcement?",
      "What are the cost optimization strategies for IaC deployments?",
      "How do you implement disaster recovery using IaC?",
      "What are the monitoring and drift detection strategies for IaC?"
    ]
  },
  4: {
    name: 'Containerization with Docker',
    fresher: [
      "What is Docker and containerization?",
      "What are the benefits of using containers over VMs?",
      "What is a Docker image and how do you create one?",
      "What is a Dockerfile and its basic commands?",
      "How do you build and run Docker containers?",
      "What are Docker volumes and why are they needed?",
      "How do you manage container networking?",
      "What are the basic Docker commands for container lifecycle?",
      "What is Docker Hub and how do you use it?",
      "What are the basic security practices for Docker containers?"
    ],
    experienced: [
      "How do you optimize Docker images for production use?",
      "What are multi-stage builds and their benefits?",
      "How do you implement advanced Docker networking patterns?",
      "What are the container security scanning and hardening practices?",
      "How do you implement container orchestration with Docker Swarm?",
      "What are the monitoring and logging strategies for containers?",
      "How do you handle persistent storage and data management?",
      "What are the performance optimization techniques for containers?",
      "How do you implement container registries and image management?",
      "What are the disaster recovery strategies for containerized applications?"
    ]
  },
  5: {
    name: 'Kubernetes Orchestration',
    fresher: [
      "What is Kubernetes and why do you need container orchestration?",
      "What are the main components of Kubernetes architecture?",
      "What are Pods, Services, and Deployments in Kubernetes?",
      "How do you deploy a simple application to Kubernetes?",
      "What is kubectl and its basic commands?",
      "What are Kubernetes namespaces and their purpose?",
      "How do you scale applications in Kubernetes?",
      "What are ConfigMaps and Secrets in Kubernetes?",
      "What is a Kubernetes Service and its types?",
      "How do you check the health and status of Kubernetes resources?"
    ],
    experienced: [
      "How do you design resilient Kubernetes architectures?",
      "What are advanced Kubernetes workload types (StatefulSets, DaemonSets)?",
      "How do you implement Kubernetes networking and service mesh?",
      "What are the Kubernetes security best practices and RBAC?",
      "How do you implement persistent storage in Kubernetes?",
      "What are Kubernetes operators and custom resources?",
      "How do you implement Kubernetes monitoring and observability?",
      "What are the multi-cluster and hybrid cloud Kubernetes strategies?",
      "How do you implement GitOps with Kubernetes?",
      "What are the disaster recovery and backup strategies for Kubernetes?"
    ]
  },
  6: {
    name: 'Monitoring and Logging',
    fresher: [
      "Why is monitoring and logging important in DevOps?",
      "What are the different types of monitoring (infrastructure, application, synthetic)?",
      "What are logs and what information should they contain?",
      "What are metrics and how are they different from logs?",
      "What are alerts and how do you configure them?",
      "What is observability and its three pillars?",
      "What are some popular monitoring and logging tools?",
      "How do you create basic dashboards for monitoring?",
      "What is log aggregation and centralized logging?",
      "What are the basic practices for effective alerting?"
    ],
    experienced: [
      "How do you implement comprehensive observability strategies?",
      "What are the advanced monitoring patterns for microservices?",
      "How do you implement distributed tracing and correlation?",
      "What are the SRE practices for monitoring and SLI/SLO/SLA?",
      "How do you implement intelligent alerting and noise reduction?",
      "What are the log management strategies for high-volume systems?",
      "How do you implement monitoring as code and automation?",
      "What are the security monitoring and compliance practices?",
      "How do you implement cost optimization for monitoring infrastructure?",
      "What are the incident response and on-call management strategies?"
    ]
  }
};

export default devopsQuestions;
