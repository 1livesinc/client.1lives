import slide1 from '../assets/nav/slide1.png'
import slide2 from '../assets/nav/slide2.png'
import slide3 from '../assets/nav/slide3.png'
import slide4 from '../assets/nav/slide4.png'
import slide5 from '../assets/nav/slide5.png'

const LinkData = [
    
    {
      id:1,
      navitem: 'IT Consulting',
      submenu: true,
      portfolio:'Expert IT consultancy',
      imgURL:`${slide1}`,
      sublinks: [
        {
          subnav: 'Data Migration',
          link: '/data-migration',
          
        },
        {
          subnav: 'Hosting',
          link: '/hosting',
        },
        {
          subnav: 'Google Education',
          link: '/google-edu',
        },
        {
          subnav: 'Unified Communication',
          link: '/uc',
        },
      ],
    },
    {
      id:2,
      navitem: 'Cloud',
      submenu: true,
      portfolio:'Cloud Solutions',
      imgURL:`${slide2}`,
      sublinks: [
        {
          subnav: 'Amazon Web Services(AWS)',
          link: '/AWS',
        },
        {
          subnav: 'Microsoft Azure',
          link: '/microsoft-azure',
        },
        {
          subnav: 'Google Cloud',
          link: '/google-cloud',
        },
        {
          subnav: 'Google Cloud',
          link: '/google-cloud',
        },
       
      ],
    },
    {
      id:3,
      navitem: 'Digital Services',
      submenu: true,
      portfolio:'Digital transformation is a game changer',
      imgURL:`${slide3}`,
      sublinks: [
       
        {
          subnav: 'App Development',
          link: '/app-dev',
        },
        {
          subnav: 'Video Conferencing',
          link: '/video-conferencing',
        },
        {
          subnav: 'Web Dev & SEO',
          link: '/webdev-seo',
        },
        {
          subnav: 'Graphic Design',
          link: '/graphic-design',
        },
      ],
    },
    {
      id:4,
      navitem: 'Procurement',
      submenu: true,
      portfolio:'Buying from us as your trusted advisor',
      imgURL:`${slide4}`,
      sublinks: [
        {
          subnav: 'Software & Hardware',
          link: '/software-hardware',
        },
        {
          subnav: 'Office 365',
          link: '/o365',
        },
        {
          subnav: 'POS System',
          link: '/pos',
        },
        {
          subnav: 'Google Services',
          link: '/google-services',
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
   
   /*  {
      id:6,
      name: 'Contact Us',
      submenu: true,
      sublinks: [
        {
          name: 'Office',
          link: '/office',
        },
        {
          name: 'Enquiry',
          link: '/enquiry',
        },
      
       
      ],
    }, */
   
  ];

  export default LinkData;