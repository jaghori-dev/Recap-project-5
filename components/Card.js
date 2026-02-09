export default function Card({ title, description, children }) {
  return (
    <div className="art-card">
      <div className="art-image-wrapper">
        {children}  {/* Next.js Image */}
      </div>
      <div className="art-card-body">
        <h2 className="art-title">{title}</h2>
        <p className="art-description">{description}</p>
      </div>
    </div>
  );
}