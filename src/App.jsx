import { Link } from 'react-router-dom'; //eslint-disable-line
import Navbar from './components/Navbar/Navbar.jsx'; //eslint-disable-line
import Footer from './components/Footer/Footer.jsx'; //eslint-disable-line
import './App.css';

function App () {
  const sections = [
    {
      link: '/',
      text: 'Home'
    },
    {
      link: '/categories',
      text: 'Categories',
      content: [
        'Technology',
        'Clothes',
        'Food',
        'Music',
        'Books',
        'Movies',
        'Games',
        'Other'
      ]
    },
    {
      link: '/products',
      text: 'Products',
      content: [
        'Technology',
        'Clothes',
        'Food',
        'Music',
        'Books',
        'Movies',
        'Games',
        'Other'
      ]
    },
    {
      link: '/features',
      text: 'Features',
      content: [
        'Technology',
        'Clothes',
        'Food',
        'Music',
        'Books',
        'Movies',
        'Games',
        'Other'
      ]
    },
    {
      link: '/blog',
      text: 'Blog'
    },
    {
      link: '/about-us',
      text: 'About Us'
    },
    {
      link: '/join-us',
      text: 'Join Us'
    }
  ];

  return (
    <div className='App'>
      <Navbar links={sections} Link={Link} />
      <h1>Hola mundo</h1>
      <Footer links={sections} Link={Link} />
    </div>
  );
}

export default App;
