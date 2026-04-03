"use client";

import { useState, FormEvent } from 'react';

export const Booking = () => {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("%c[FORM DEBUG] 1. Submit intercettato", "color: cyan; font-weight: bold;");
    
    setStatus('SUBMITTING');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "fa8edb09-e079-483c-90fa-006533c9799f");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
        setTimeout(() => setStatus('IDLE'), 3000);
      }
    } catch (error) {
      console.error("[FORM DEBUG] Errore critico:", error);
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 3000);
    }
  };

  return (
    <section id="booking" className="section border-top">
      <div className="booking-container">
        <div className="section-header-swag">
          <h2 className="title artist-title-big">CONTACT / <span className="red-glow-text">BOOKING</span></h2>
        </div>
        
        {status === 'SUCCESS' ? (
          <div className="success-message-swag" style={{ 
            textAlign: 'center', 
            padding: '100px 40px', 
            background: 'rgba(10, 10, 10, 0.9)', 
            border: '1px solid rgba(255, 0, 0, 0.3)', 
            backdropFilter: 'blur(20px)',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: 'inset 0 0 30px rgba(255, 0, 0, 0.05)'
          }}>
            <h3 className="title" style={{ 
              color: 'var(--white)', 
              textShadow: '0 0 10px var(--red), 0 0 20px rgba(255, 0, 0, 0.4)', 
              letterSpacing: '4px',
              fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
              lineHeight: '1',
              marginBottom: '30px',
              fontWeight: '900',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              TRANSMISSION RECEIVED
            </h3>
            <div style={{ 
              width: '40px', 
              height: '2px', 
              background: 'var(--red)', 
              margin: '0 auto 30px',
              boxShadow: '0 0 10px var(--red)'
            }}></div>
            <p style={{ 
              color: 'var(--white)', 
              fontSize: '0.9rem', 
              marginBottom: '40px', 
              letterSpacing: '2px',
              fontWeight: '300',
              opacity: 0.7,
              textTransform: 'uppercase'
            }}>
              Your message has been uploaded to the mainframe.<br/>
              We will contact you shortly.
            </p>
            <button 
              className="btn-booking-swag" 
              onClick={() => setStatus('IDLE')}
              style={{ 
                background: 'transparent', 
                border: '1px solid var(--red)', 
                color: 'var(--red)',
                padding: '12px 25px',
                fontSize: '0.75rem',
                letterSpacing: '3px',
                transition: 'all 0.3s ease'
              }}
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <form className="brutal-form-swag" onSubmit={handleSubmit}>
            <div className="form-grid-swag">
              <div className="input-group-swag">
                <label>FIRST NAME</label>
                <input 
                  type="text" 
                  name="First_Name" 
                  placeholder="JOE" 
                  className="brutal-input-swag" 
                  required 
                  disabled={status === 'SUBMITTING'}
                />
              </div>
              <div className="input-group-swag">
                <label>LAST NAME</label>
                <input 
                  type="text" 
                  name="Last_Name" 
                  placeholder="DOE" 
                  className="brutal-input-swag" 
                  required 
                  disabled={status === 'SUBMITTING'}
                />
              </div>
            </div>
            
            <div className="input-group-swag">
              <label>EMAIL ADDRESS</label>
              <input 
                type="email" 
                name="Email" 
                placeholder="TRAP@SWAG.COM" 
                className="brutal-input-swag" 
                required 
                disabled={status === 'SUBMITTING'}
              />
            </div>
            
            <div className="input-group-swag">
              <label>MESSAGE / INQUIRY</label>
              <textarea 
                name="Message" 
                placeholder="TELL US ABOUT THE GIG..." 
                rows={4} 
                className="brutal-input-swag" 
                required
                disabled={status === 'SUBMITTING'}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-booking-swag" 
              disabled={status === 'SUBMITTING'}
            >
              {status === 'SUBMITTING' ? 'SENDING...' : 
               status === 'ERROR' ? 'ERROR - RETRY' : 
               'SEND TRANSMISSION'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
