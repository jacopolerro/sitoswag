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

    console.log("[FORM DEBUG] Dati pronti per l'invio:", object);
    console.log("[FORM DEBUG] 2. Avvio fetch verso Web3Forms...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      console.log(`[FORM DEBUG] 3. Risposta ricevuta (Status: ${response.status})`);

      const result = await response.json();
      if (response.ok) {
        console.log("[FORM DEBUG] Successo:", result);
        setStatus('SUCCESS');
        form.reset();
      } else {
        console.error("[FORM DEBUG] Errore Web3Forms:", result);
        setStatus('ERROR');
        setTimeout(() => setStatus('IDLE'), 3000);
      }
    } catch (error) {
      console.error("[FORM DEBUG] Errore critico (Network/CORS):", error);
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
          <div className="success-message-swag" style={{ textAlign: 'center', padding: '50px', background: 'rgba(15, 15, 15, 0.8)', border: '1px solid var(--red)', backdropFilter: 'blur(10px)' }}>
            <h3 className="title artist-title-big red-glow-text">TRANSMISSION RECEIVED</h3>
            <p style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '30px', letterSpacing: '1px' }}>
              Your message has been uploaded to the mainframe. We will contact you shortly.
            </p>
            <button 
              className="btn-booking-swag" 
              onClick={() => setStatus('IDLE')}
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
