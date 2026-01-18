export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <nav className="navbar">
      <div className="logo">STUDIO<span>.</span></div>
      <div className="search-wrapper">
        <input 
          type="text" 
          placeholder="Filter by name or category..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
}