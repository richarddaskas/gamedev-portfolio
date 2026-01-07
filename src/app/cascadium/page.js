export default function Cascadium() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Cascadium</h1>
      <p className="text-xl mb-8">Match • Cascade • Conquer</p>
      
      {/* Embedded Game */}
      <div className="mb-8 flex justify-center">
        <iframe 
          src="/cascadium/index.html"
          width="1080"
          height="1920"
          style={{ maxWidth: '100%', border: 'none' }}
          title="Cascadium Game"
        />
      </div>
      
      {/* Description */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="mb-4">
          Match-3 puzzle game built in 48 hours to demonstrate casual game 
          development capabilities and rapid prototyping skills.
        </p>
        
        <h3 className="text-xl font-bold mb-2">Features</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Grid-based match detection with cascade chains</li>
          <li>Combo scoring system with multipliers</li>
          <li>Responsive touch/mouse input (mobile-ready)</li>
          <li>Polished game feel with particles, screen shake, and audio</li>
          <li>Win/lose conditions with move counter</li>
        </ul>
        
        <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
        <p>Unity 2D, C#, AI-Assisted Development (Claude Code)</p>
      </div>
    </div>
  )
}