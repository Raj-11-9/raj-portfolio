export const resume = {
  name: "Raj Kumar Singh",
  title: "Infrastructure & Cloud Engineer",
  intro:
    "Aspiring IT Infrastructure and Cloud professional with a strong foundation in Cisco networking, Linux, Bash scripting, AWS and Docker. Hands-on with network configuration, troubleshooting and infrastructure automation.",
  objective:
    "Aspiring IT Infrastructure and Cloud Professional with a strong foundation in Cisco networking, VLANs, routing and switching, Linux, Bash scripting, AWS, and Docker. Seeking an entry-level opportunity to apply my technical knowledge and hands-on experience in network configuration, troubleshooting, and infrastructure management while developing expertise in enterprise IT and cloud technologies.",
  contact: {
    phone: "+91-8260587064",
    email: "rajkumarsingh07337@gmail.com",
    linkedin: "https://www.linkedin.com/in/get-raj",
    location: "Bathinda, Punjab, India",
  },
  skillGroups: [
    {
      key: "networking",
      label: "Networking",
      icon: "network",
      blurb: "Routing, switching and segmentation fundamentals on Cisco gear.",
      items: [
        "OSI Model",
        "TCP/IP",
        "IPv4/IPv6",
        "Subnetting",
        "CIDR",
        "VLANs",
        "Trunking",
        "Inter-VLAN Routing",
        "Router-on-a-Stick",
        "NAT",
        "DHCP",
        "DNS",
        "ACLs",
        "OSPF",
        "STP",
        "EtherChannel",
        "SMTP",
        "Cisco Routers & Switches",
      ],
    },
    {
      key: "linux",
      label: "Linux & System Administration",
      icon: "terminal",
      blurb: "Day-to-day administration, permissions and shell automation.",
      items: [
        "Linux Administration",
        "User & Group Management",
        "File Permissions",
        "SSH",
        "Package Management",
        "Process Management",
        "Bash/Shell Scripting",
        "Vim",
        "grep",
        "sed",
        "awk",
      ],
    },
    {
      key: "cloud",
      label: "Cloud & AWS",
      icon: "cloud",
      blurb: "Compute, storage and access basics on AWS, driven from the CLI.",
      items: [
        "AWS EC2",
        "EBS",
        "EBS Snapshots",
        "AMI",
        "AWS CLI",
        "Security Groups",
        "Key Pairs",
        "Basic AWS Networking",
        "SSH-based EC2 Access",
      ],
    },
    {
      key: "devops",
      label: "DevOps & Tools",
      icon: "container",
      blurb: "Containers, version control and network analysis tooling.",
      items: ["Docker", "Git/GitHub", "Cisco Packet Tracer", "Wireshark", "Bash"],
    },
    {
      key: "programming",
      label: "Programming & Scripting",
      icon: "code",
      blurb: "Scripting for automation, plus core programming languages.",
      items: ["Python", "C++", "Java", "HTML", "CSS", "JavaScript"],
    },
  ],
  projects: [
    {
      name: "Network Monitoring & Alerting System",
      visual: "network" as const,
      description:
        "A monitoring tool that tracks device availability, latency, packet loss and service status across a network.",
      problem:
        "Network device and service outages go unnoticed without continuous availability and latency checks.",
      tech: ["Python", "Linux", "Bash", "Docker", "Networking"],
      features: [
        "Device availability tracking",
        "Latency measurement",
        "Packet loss detection",
        "Service status checks",
      ],
      contribution:
        "Developed the monitoring tool end to end, using Python and Bash on Linux with Docker for packaging.",
    },
    {
      name: "AWS Automated Web Server Deployment",
      visual: "cloud" as const,
      description:
        "Bash and AWS CLI automation that provisions an EC2 instance and brings up an Apache-hosted website.",
      problem: "Manual EC2 provisioning and web server setup is repetitive and error-prone.",
      tech: ["AWS EC2", "AWS CLI", "Bash", "Linux", "Apache"],
      features: [
        "Automated EC2 deployment",
        "Security group configuration",
        "Web server installation",
        "Website deployment",
      ],
      contribution:
        "Automated the full provisioning and deployment flow with Bash scripts driving the AWS CLI.",
    },
  ],
  experience: [
    {
      role: "Summer Intern – Network Engineer",
      company: "Jindal Stainless Ltd. (JSL)",
      location: "Odisha, India",
      duration: "Jun 2025 – Jul 2025",
      responsibilities: [
        "Configured Cisco switches and implemented VLANs for network segmentation.",
        "Monitored enterprise network devices using Cisco Packet Tracer.",
      ],
      tech: ["Cisco Switches", "VLANs", "Cisco Packet Tracer"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering (CSE)",
      institution: "Guru Kashi University",
      duration: "2023 – 2027",
      status: "Pursuing",
    },
    {
      degree: "12th in Science",
      institution: "Bihar School Examination Board",
      duration: "2021 – 2023",
      status: "Passed",
    },
  ],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Teamwork & Collaboration",
    "Adaptability",
    "Time Management",
    "Quick Learning",
  ],
  interests: [
    "Cycling",
    "Reading Books",
    "Exploring Technologies",
    "Learning Networking & Cloud Technologies",
    "Traveling",
  ],
  languages: ["English", "Hindi", "Odia", "Bhojpuri"],
  focus: [
    {
      stage: "IT Infrastructure",
      detail: "Enterprise device configuration, troubleshooting and infrastructure management.",
    },
    {
      stage: "Networking",
      detail: "Cisco routing and switching, VLANs, OSPF, NAT and ACLs.",
    },
    {
      stage: "Cloud",
      detail: "AWS EC2, EBS, AMI, IAM-adjacent access via key pairs and security groups.",
    },
    { stage: "DevOps", detail: "Docker, Git/GitHub and Bash-driven automation." },
  ],
};

export type Resume = typeof resume;
