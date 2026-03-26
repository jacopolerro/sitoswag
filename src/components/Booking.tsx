export const Booking = () => {
  return (
    <section id="booking" className="section border-top">
      <div className="booking-container">
        <div className="section-header-swag">
          <h2 className="title artist-title-big">CONTACT / <span className="red-glow-text">BOOKING</span></h2>
        </div>
        
        <form className="brutal-form-swag" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid-swag">
            <div className="input-group-swag">
              <label>FIRST NAME</label>
              <input type="text" placeholder="JOE" className="brutal-input-swag" />
            </div>
            <div className="input-group-swag">
              <label>LAST NAME</label>
              <input type="text" placeholder="DOE" className="brutal-input-swag" />
            </div>
          </div>
          
          <div className="input-group-swag">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="TRAP@SWAG.COM" className="brutal-input-swag" />
          </div>
          
          <div className="input-group-swag">
            <label>MESSAGE / INQUIRY</label>
            <textarea placeholder="TELL US ABOUT THE GIG..." rows={4} className="brutal-input-swag"></textarea>
          </div>
          
          <button type="submit" className="btn-booking-swag">
            SEND TRANSMISSION
          </button>
        </form>
      </div>
    </section>
  );
};
