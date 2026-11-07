import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Waiting for an event...");

  const handleClick = () => {
    setMessage("Button clicked successfully!");
  };
  const handleMouseOver = () => {
    setMessage("Mouse is over the button!");
  };
  const handleChange = (e) => {
    setMessage(`You typed: ${e.target.value}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Form submitted successfully!");
  };

  return (
    <>
      <style>
        {`
          * { box-sizing: border-box; }
          body { margin: 0; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea, #764ba2); }
          .container { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
          .card { width: 520px; background: #ffffff; border-radius: 24px; padding: 40px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25); }
          .header { text-align: center; margin-bottom: 35px; }
          .react-icon { width: 70px; height: 70px; margin: 0 auto 15px; border-radius: 16px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; font-size: 42px; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35); }
          .title { margin: 0; font-size: 32px; color: #222; font-weight: 700; }
          .subtitle { margin: 8px 0 0; color: #777; font-size: 15px; }
          .event-box { background: #f8f9ff; border: 1px solid #e2e5ff; border-radius: 16px; padding: 22px 24px; margin-bottom: 18px; }
          .event-header { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
          .number { width: 34px; height: 34px; border-radius: 50%; background: #667eea; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
          .event-title { margin: 0; color: #333; font-size: 18px; }
          .event-content { text-align: center; }
          button { border: none; border-radius: 9px; padding: 12px 24px; background: #667eea; color: white; font-size: 14px; font-weight: 600; cursor: pointer; transition: 0.2s; }
          button:hover { background: #5568d9; transform: translateY(-1px); }
          input { width: 100%; padding: 13px 15px; border: 1px solid #d0d3df; border-radius: 9px; font-size: 14px; outline: none; background: white; }
          input:focus { border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12); }
          .submit-button { margin-top: 12px; }
          .result { margin-top: 28px; padding: 20px; border-radius: 16px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-align: center; }
          .result-title { margin: 0 0 8px; font-size: 14px; opacity: 0.85; }
          .result-message { margin: 0; font-size: 16px; font-weight: 600; }
        `}
      </style>
      <div className="container">
        <div className="card">
          <div className="header">
            <div className="react-icon">⚛</div>
            <h1 className="title">ReactJS Events</h1>
            <p className="subtitle">Simple Event Handling Examples</p>
          </div>
          <div className="event-box">
            <div className="event-header">
              <div className="number">1</div>
              <h3 className="event-title">Click Event</h3>
            </div>
            <div className="event-content">
              <button onClick={handleClick}>Click Me</button>
            </div>
          </div>
          <div className="event-box">
            <div className="event-header">
              <div className="number">2</div>
              <h3 className="event-title">Mouse Event</h3>
            </div>
            <div className="event-content">
              <button onMouseOver={handleMouseOver}>Move Mouse Here</button>
            </div>
          </div>
          <div className="event-box">
            <div className="event-header">
              <div className="number">3</div>
              <h3 className="event-title">Change Event</h3>
            </div>
            <input type="text" placeholder="Type something..." onChange={handleChange} />
          </div>
          <div className="event-box">
            <div className="event-header">
              <div className="number">4</div>
              <h3 className="event-title">Submit Event</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your name" />
              <div className="event-content">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
          <div className="result">
            <p className="result-title">EVENT RESULT</p>
            <p className="result-message">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;