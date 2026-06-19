import { EducationItem, SkillCategory, ExperienceItem, ProjectItem, CertificationItem } from './types';

export const resumeData = {
  profile: {
    name: 'Hemanth Kumar K',
    title: 'Electronics & Automation Architect',
    location: 'Bangalore, Karnataka, India',
    phone: '+91 9538520031',
    email: 'hemanth2678nanu@gmail.com',
    github: 'github.com/hemanthnanu-tech',
    summary: 'Results-driven Electronics and Communication Engineering student specializing in embedded systems, IoT architecture, and industrial automation. Proven hands-on experience in PCB fabrication, PLC programming, and developing privacy-focused software applications. Adept at leveraging C, C++, and Python to design scalable hardware-software integrations and optimize real-time data monitoring systems. Seeking to leverage technical expertise in a dynamic engineering environment.'
  },
  education: [
    {
      id: 'edu-1',
      institution: 'JSS Academy of Technical Education',
      degree: 'Bachelor of Engineering (B.E.) in Electronics and Communication',
      period: '2023–2026',
      location: 'Bangalore'
    },
    {
      id: 'edu-2',
      institution: 'PVP Polytechnic, Dr. AIT Campus',
      degree: 'Diploma in Electronics and Communication Engineering',
      period: '2023',
      location: 'Bengaluru'
    },
    {
      id: 'edu-3',
      institution: 'Vikas Central School',
      degree: 'Pre-University Education',
      period: '2020',
      location: 'Bangalore'
    }
  ] as EducationItem[],
  skills: [
    {
      category: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'Verilog'],
      icon: 'Code2',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      category: 'Industrial Automation',
      skills: ['PLC Programming', 'SCADA', 'HMI', 'TIA Portal'],
      icon: 'Cpu',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      category: 'Embedded & IoT Systems',
      skills: ['Embedded Systems', 'IoT Architecture', 'Sensor Integration', 'Data Acquisition', 'Arduino'],
      icon: 'Radio',
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Hardware Engineering',
      skills: ['PCB Design', 'Circuit Fabrication', 'PCB Assembly', 'Component-Level Testing'],
      icon: 'Layers',
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Software & Tools',
      skills: ['VS Code', 'Android Studio (AI-Assisted)', 'TIA Portal', 'AI Automation Tools'],
      icon: 'Wrench',
      color: 'from-blue-500 to-indigo-500'
    }
  ] as SkillCategory[],
  experience: [
    {
      id: 'exp-1',
      company: 'Government Tool Room and Training Centre (GTTC)',
      role: 'Intern - Industrial Automation',
      period: 'Feb 2026 – May 2026',
      location: 'Bangalore',
      type: 'automation',
      highlights: ['TIA Portal', 'Ladder Logic', 'SCADA Interfaces', 'IoT Protocols'],
      bullets: [
        'Engineered PLC programs and ladder logic for complex industrial automation processes using TIA Portal.',
        'Designed and deployed SCADA systems and HMI interfaces to streamline machine control and operator visibility.',
        'Architected Python-based IoT solutions seamlessly integrated with PLC hardware for real-time data monitoring.'
      ]
    },
    {
      id: 'exp-2',
      company: 'Semi-Pro Technology',
      role: 'Intern - PCB Assembly and Testing',
      period: 'Mar 2024 – Jun 2024',
      location: 'Bangalore',
      type: 'hardware',
      highlights: ['PCB Fabrication', 'Component Soldering', 'Oscilloscopy', 'Circuit Analysis'],
      bullets: [
        'Executed the precise fabrication, assembly, and soldering of Printed Circuit Boards (PCBs) to industry standards.',
        'Spearheaded component-level testing and troubleshooting of electronic circuits to identify and resolve faults.',
        'Conducted rigorous quality assurance inspections, significantly maintaining high reliability and performance standards.'
      ]
    }
  ] as ExperienceItem[],
  projects: [
    {
      id: 'proj-1',
      title: 'Offline Privacy-Focused AI Assistant',
      description: 'Engineered a completely offline, locally-executed AI application emphasizing user privacy and zero cloud dependency. Ideal for smart hardware interaction.',
      bullets: [
        'Designed lightweight localized natural language processing models.',
        'Optimized computational efficiency on constraint devices.',
        'Implemented rigorous local-first storage paradigms to ensure user data protection.'
      ],
      tags: ['Python', 'Local AI', 'Security', 'Edge Computing'],
      complexity: 92,
      demoType: 'ai-assistant'
    },
    {
      id: 'proj-2',
      title: 'IoT-Based Weather Station',
      description: 'Architected a cloud-connected telemetry acquisition system for real-time monitoring and visualization of environmental metrics.',
      bullets: [
        'Integrated multi-parameter physical sensor networks (Temperature, Humidity, Pressure).',
        'Streamed microsecond precision telemetry records to cloud databases over MQTT and HTTP APIs.',
        'Employed low-power modes for long-duration battery operations.'
      ],
      tags: ['IoT Architecture', 'Sensors', 'ESP8266', 'Web Dashboards'],
      complexity: 85,
      demoType: 'weather'
    },
    {
      id: 'proj-3',
      title: 'Air Quality Monitoring System',
      description: 'Designed a microcontroller-driven sensor array to dynamically track, analyze, and report vital public health and environmental parameters.',
      bullets: [
        'Calibrated sensor array for accurate detection of PM2.5, PM10, CO2, and TVOC levels.',
        'Developed intelligent alert logic that triggers alarms and visual indicators on a local OLED display.',
        'Engineered continuous polling intervals with mathematical moving averages for noise filtration.'
      ],
      tags: ['Microcontroller', 'OLED UI', 'Signal Filtering', 'Environmental'],
      complexity: 88,
      demoType: 'air-quality'
    },
    {
      id: 'proj-4',
      title: 'Smart Traffic Signal Control System',
      description: 'Developed an automated Arduino hardware prototype integrating IR sensor rigs to dynamically optimize micro-intersection traffic flow based on stream density.',
      bullets: [
        'Engineered intelligent time-allocation algorithms to prioritize heavily congested lanes dynamically.',
        'Wired IR sensor arrays operating as proximity detectors tracking vehicle volume.',
        'Prototyped full-scale mock physical crossroads signaling hardware.'
      ],
      tags: ['Arduino', 'IR Sensors', 'Algorithms', 'Hardware Prototypes'],
      complexity: 80,
      demoType: 'traffic'
    },
    {
      id: 'proj-5',
      title: 'Gesture-Based Wheelchair Controller',
      description: 'Programmed an advanced embedded gesture-recognition system empowering individuals with severe neurological impairments to navigate motorized chairs.',
      bullets: [
        'Integrated 3-axis accelerometer sensor arrays to capture delicate manual hand inclinations.',
        'Translated subtle tilt degrees into high-torque motor driver commands dynamically.',
        'Created embedded safety failsafes (auto-stop on rapid tilt or sensor power loss).'
      ],
      tags: ['Embedded Systems', 'Accelerometers', 'Motor Driving', 'Assistive Tech'],
      complexity: 95,
      demoType: 'wheelchair'
    }
  ] as ProjectItem[],
  certifications: [
    {
      id: 'cert-1',
      organization: 'Government Tool Room and Training Centre (GTTC)',
      title: 'Industrial Automation (PLC, SCADA, IoT, Mechatronics)',
      period: 'Feb 2026 – May 2026'
    },
    {
      id: 'cert-2',
      organization: 'Semi-Pro Technology',
      title: 'PCB Assembly and Testing',
      period: 'Mar 2023 – Jun 2023'
    },
    {
      id: 'cert-3',
      organization: 'Indian Tech Keys',
      title: 'PCB Designing and Fabrication',
      period: 'Jul 2022'
    }
  ] as CertificationItem[]
};
