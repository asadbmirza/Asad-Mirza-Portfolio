import content from "../data/portfolio-content.json";

const { profile } = content;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-frame">
        <strong>{profile.name}</strong>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
