import slide1 from '../assets/nav/slide1.png'
import slide2 from '../assets/nav/slide2.png'
import slide3 from '../assets/nav/slide3.png'
import slide4 from '../assets/nav/slide4.png'
import slide5 from '../assets/nav/slide5.png'

const LinkData = [
    
    {
      id:1,
      navitem: 'DevOps',
      submenu: true,
      portfolio:'Web & Mobile Apps',
      imgURL:`${slide1}`,
      sublinks: [
        {
          subnav: 'Web',
          link: '/web',
          
        },
        {
          subnav: 'Android',
          link: '/android',
        },
        {
          subnav: 'iOS',
          link: '/iOS',
        },
        {
          subnav: 'SaaS',
          link: '/saas',
        },
       
      ],
    },
    {
      id:2,
      navitem: 'SECaaS',
      submenu: true,
      portfolio:'Cyber security',
      imgURL:`${slide2}`,
      sublinks: [
        {
          subnav: 'Secure Websites & APIs',
          link: '/swapi',
        },
        {
          subnav: 'Zero Trust Access',
          link: '/zta',
        },
        {
          subnav: 'L3 DDoS Mitigation',
          link: '/ddoS-mitigation',
        },
        {
          subnav: 'Phishing-resistant MFA',
          link: '/prmfa',
        },
       
      ],
    },
    {
      id:3,
      navitem: 'Assistive Technology',
      submenu: true,
      portfolio:'Virtual Memory',
      imgURL:`${slide3}`,
      sublinks: [
       
        {
          subnav: 'Learning',
          link: '/learning',
        },
        {
          subnav: 'Communication',
          link: '/communication',
        },
        {
          subnav: 'Cognitive',
          link: '/cognitive',
        },
        {
          subnav: 'Low Vision',
          link: '/low-vision',
        },
      ],
    },
    {
      id:4,
      navitem: 'Solar Energy',
      submenu: true,
      portfolio:'Buying from us as your trusted advisor',
      imgURL:`${slide4}`,
      sublinks: [
        {
          subnav: 'Design Software',
          link: '/design-software',
        },
        {
          subnav: 'Asset Management',
          link: '/asset-mgmt',
        },
        {
          subnav: 'Field Service',
          link: '/field-service',
        },
        {
          subnav: 'Solar Monitoring',
          link: '/solar-monitor',
        },
      ],
    },
    {
      id:5,
      navitem: 'About Us',
      submenu: true,
      portfolio:'AmaraTech is a business-facing service, rooted in innovative IT.',
      imgURL:`${slide5}`,
      sublinks: [
        {
          subnav: 'Mission & Vision',
          link: '/me',
        },
        {
          subnav: 'Projects',
          link: '/projects',
        },
        {
          subnav: 'Team',
          link: '/team',
        },
        {
          subnav: 'Careers',
          link: '/careers',
        },
       
      ],
    },
   
   
  ];

  export default LinkData;