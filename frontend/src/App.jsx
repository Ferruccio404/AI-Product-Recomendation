import { useState } from 'react';
import axios from 'axios';
import { Sparkles, ShoppingBag, Search } from 'lucide-react';
import './styles.css';


function App() {
  const [preferences, setPreferences] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);



  const handleSearch = async (e) => {
    e.preventDefault();
    if (!preferences.trim()) return;

    setLoading(true);
    setSearched(true);
    setRecommendations([]);

    try {
      const response = await axios.post('http://localhost:3000/api/recommend', { preferences });
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <Sparkles className="icon-logo" />
          <h1>WeRecommend</h1>
        </div>
        <p className="subtitle">AI-powered shopping assistant finding the perfect gear for you.</p>
      </header>

      <main className="main-content">
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
            <Search className="icon-search" />
            <input
              type="text"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="E.g., I want a flagship phone with a great camera under $1000..."
              disabled={loading}
            />
          </div>
          <button type="submit" disabled={loading || !preferences.trim()} className="btn-submit">
            {loading ? 'Thinking...' : 'Get Recommendations'}
          </button>
        </form>

        <section className="results-section">
          {loading && (
            <div className="loading-state">
              <div className="pulse-circle"></div>
              <p>Searching for best products...</p>
            </div>
          )}

          {!loading && searched && recommendations.length === 0 && (
            <div className="empty-state">
              <p>No matching products found. Try adjusting your preferences!</p>
            </div>
          )}

          <div className="product-grid">
            {recommendations.map((product) => (
              <div key={product.id} className="product-card">
                <div className="card-image-placeholder">
                  <ShoppingBag size={48} opacity={0.2} />
                </div>
                <div className="card-content">
                  <div className="category-tag">{product.category}</div>
                  <h3>{product.name}</h3>
                  <p className="description">{product.description}</p>
                  <div className="price-row">
                    <span className="price">${product.price}</span>
                    <button className="btn-view">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
