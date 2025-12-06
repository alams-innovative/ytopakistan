'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple authentication - in production, use proper auth
    // Default credentials: admin@yto.com / admin123
    if (email === 'admin@yto.com' && password === 'admin123') {
      // Store login session
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userEmail', email);
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <div className="gridContainer clearfix">
      <Header />
      
      <div className="clearfix"></div>
      
      <div id="container" className="etw_container">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <div className="login-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h1>Dashboard Login</h1>
              <p>Enter your credentials to access the inquiries dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {error && (
                <div className="login-error">
                  {error}
                </div>
              )}

              <div className="form-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon">✉</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    autoFocus
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}

