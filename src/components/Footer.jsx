import { useState } from 'react';
import '../styles/Footer.css';

export default function Footer({ onReset }) {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <footer className="configurator-footer">
      <div className="footer-left">
        <span className="footer-brand">3D Configurator</span>
        <span className="footer-divider">|</span>
        <span className="footer-copy">© {new Date().getFullYear()} All Rights Reserved</span>
      </div>

      <div className="footer-center">
        <button className="footer-btn" onClick={onReset} title="Reset material and seat color back to defaults">
          <svg className="footer-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
          Reset Config
        </button>

        <button className="footer-btn" onClick={() => setShowHelp(true)}>
          <svg className="footer-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V7h2v3z"/>
          </svg>
          How to Navigate
        </button>
      </div>

      <div className="footer-right">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">System Active</span>
        </div>
      </div>

      {showHelp && (
        <div className="modal-overlay" onClick={() => setShowHelp(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>3D Navigation Guide</h3>
              <button className="modal-close-btn" onClick={() => setShowHelp(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="guide-item">
                <div className="guide-icon">🖱️ Left Click + Drag</div>
                <div className="guide-desc">Rotate the 3D scene to view the product from different angles.</div>
              </div>
              <div className="guide-item">
                <div className="guide-icon">🖱️ Right Click + Drag</div>
                <div className="guide-desc">Pan/translate the camera horizontally or vertically.</div>
              </div>
              <div className="guide-item">
                <div className="guide-icon">📜 Scroll Wheel</div>
                <div className="guide-desc">Zoom in or out to inspect materials and fine product details.</div>
              </div>
              <div className="guide-item">
                <div className="guide-icon">🎨 Control Panel</div>
                <div className="guide-desc">Use the buttons at the top to dynamically customize the floor texture and the seat leather color.</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-action-btn" onClick={() => setShowHelp(false)}>Got it!</button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
