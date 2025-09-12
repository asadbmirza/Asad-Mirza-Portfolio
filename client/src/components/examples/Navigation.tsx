import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <Navigation 
      activeSection="projects" 
      onSectionClick={(section) => console.log(`Clicked section: ${section}`)} 
    />
  );
}