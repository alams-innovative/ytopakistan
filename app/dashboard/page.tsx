'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Inquiry {
  id: number;
  email: string;
  name: string;
  company: string | null;
  phone: string | null;
  whatsapp: string | null;
  message: string;
  product_name: string | null;
  created_at: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Check authentication
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    fetchInquiries();
  }, [router]);

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/inquiries');
      const data = await response.json();
      if (response.ok) {
        setInquiries(data.inquiries);
      }
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewInquiry = (id: number) => {
    // Find inquiry from existing data instead of making another API call
    const inquiry = inquiries.find(inq => inq.id === id);
    if (inquiry) {
      setSelectedInquiry(inquiry);
      setIsModalOpen(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Fallback to API if not found in current data
      fetch(`/api/inquiries/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data.inquiry) {
            setSelectedInquiry(data.inquiry);
            setIsModalOpen(true);
            document.body.style.overflow = 'hidden';
          } else {
            alert('Inquiry not found');
          }
        })
        .catch(error => {
          console.error('Error fetching inquiry details:', error);
          alert('Error loading inquiry details');
        });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInquiry(null);
    document.body.style.overflow = 'unset';
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('userEmail');
    router.push('/login');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTodayCount = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inquiries.filter(inq => {
      const inqDate = new Date(inq.created_at);
      inqDate.setHours(0, 0, 0, 0);
      return inqDate.getTime() === today.getTime();
    }).length;
  };

  const getThisWeekCount = () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return inquiries.filter(inq => new Date(inq.created_at) >= weekAgo).length;
  };

  const filteredInquiries = inquiries.filter(inq => {
    const searchLower = searchTerm.toLowerCase();
    return (
      inq.name.toLowerCase().includes(searchLower) ||
      inq.email.toLowerCase().includes(searchLower) ||
      (inq.company && inq.company.toLowerCase().includes(searchLower)) ||
      (inq.product_name && inq.product_name.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="gridContainer clearfix">
      <Header />
      
      <div className="clearfix"></div>
      
      <div id="container" className="etw_container">
        <div className="content content_white">
          <div className="dashboard-container">
            {/* Dashboard Header */}
            <div className="dashboard-header-modern">
              <div className="dashboard-title-section">
                <h1>
                  <span className="dashboard-icon">📊</span>
                  Inquiries Dashboard
                </h1>
                <p>Manage and track all customer inquiries</p>
              </div>
              <div className="dashboard-actions">
                <button className="logout-btn" onClick={handleLogout}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  Logout
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card stat-primary">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{inquiries.length}</div>
                  <div className="stat-label">Total Inquiries</div>
                </div>
              </div>

              <div className="stat-card stat-success">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{getTodayCount()}</div>
                  <div className="stat-label">Today</div>
                </div>
              </div>

              <div className="stat-card stat-warning">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{getThisWeekCount()}</div>
                  <div className="stat-label">This Week</div>
                </div>
              </div>

              <div className="stat-card stat-info">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{inquiries.filter(i => i.email).length}</div>
                  <div className="stat-label">With Email</div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="dashboard-toolbar">
              <div className="search-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search by name, email, company, or product..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="results-count">
                Showing {filteredInquiries.length} of {inquiries.length} inquiries
              </div>
            </div>

            {/* Inquiries Table */}
            {loading ? (
              <div className="loading-state-modern">
                <div className="loading-spinner"></div>
                <p>Loading inquiries...</p>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="empty-state-modern">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <h3>No inquiries found</h3>
                <p>{searchTerm ? 'Try adjusting your search terms' : 'No inquiries have been submitted yet'}</p>
              </div>
            ) : (
              <div className="inquiries-table-container-modern">
                <table className="inquiries-table-modern">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInquiries.map((inquiry) => (
                      <tr key={inquiry.id}>
                        <td><span className="id-badge">#{inquiry.id}</span></td>
                        <td>
                          <div className="name-cell">
                            <strong>{inquiry.name}</strong>
                          </div>
                        </td>
                        <td>
                          <a href={`mailto:${inquiry.email}`} className="email-link">
                            {inquiry.email}
                          </a>
                        </td>
                        <td>{inquiry.company || <span className="empty-text">-</span>}</td>
                        <td>{inquiry.product_name || <span className="empty-text">-</span>}</td>
                        <td className="date-cell">{formatDate(inquiry.created_at)}</td>
                        <td>
                          <button
                            className="view-btn-modern"
                            onClick={() => handleViewInquiry(inquiry.id)}
                            title="View Details"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                              <circle cx="12" cy="12" r="3"/>
                            </svg>
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="clearfix"></div>
      
      <Footer />

      {/* Inquiry Detail Modal */}
      {isModalOpen && selectedInquiry ? (
        <div className="inquiry-detail-modal-overlay" onClick={handleCloseModal}>
          <div className="inquiry-detail-modal" onClick={(e) => e.stopPropagation()}>
            <div className="inquiry-detail-header">
              <h2>Inquiry Details</h2>
              <button className="close-btn" onClick={handleCloseModal} aria-label="Close">×</button>
            </div>
            <div className="inquiry-detail-body">
              <div className="detail-row">
                <label>ID:</label>
                <span>{selectedInquiry.id}</span>
              </div>
              <div className="detail-row">
                <label>Name:</label>
                <span>{selectedInquiry.name}</span>
              </div>
              <div className="detail-row">
                <label>Email:</label>
                <span><a href={`mailto:${selectedInquiry.email}`}>{selectedInquiry.email}</a></span>
              </div>
              {selectedInquiry.company && (
                <div className="detail-row">
                  <label>Company:</label>
                  <span>{selectedInquiry.company}</span>
                </div>
              )}
              {selectedInquiry.phone && (
                <div className="detail-row">
                  <label>Phone:</label>
                  <span><a href={`tel:${selectedInquiry.phone}`}>{selectedInquiry.phone}</a></span>
                </div>
              )}
              {selectedInquiry.whatsapp && (
                <div className="detail-row">
                  <label>WhatsApp:</label>
                  <span><a href={`https://wa.me/${selectedInquiry.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">{selectedInquiry.whatsapp}</a></span>
                </div>
              )}
              {selectedInquiry.product_name && (
                <div className="detail-row">
                  <label>Product:</label>
                  <span>{selectedInquiry.product_name}</span>
                </div>
              )}
              <div className="detail-row">
                <label>Message:</label>
                <div className="message-content">{selectedInquiry.message}</div>
              </div>
              <div className="detail-row">
                <label>Submitted:</label>
                <span>{formatDate(selectedInquiry.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

