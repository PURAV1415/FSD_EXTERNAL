import React, { useState } from "react";

function App() {
  const [votes, setVotes] = useState({
    CandidateA: 0,
    CandidateB: 0,
    CandidateC: 0,
  });
  const [message, setMessage] = useState("Please select a candidate");

  const vote = (candidate) => {
    setVotes({
      ...votes,
      [candidate]: votes[candidate] + 1,
    });
    setMessage(`Your vote has been recorded for ${candidate}`);
  };

  const totalVotes = votes.CandidateA + votes.CandidateB + votes.CandidateC;

  return (
    <>
      <style>
        {`
          * { box-sizing: border-box; }
          body { margin: 0; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea, #764ba2); }
          .container { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
          .card { width: 520px; background: white; border-radius: 24px; padding: 40px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25); }
          .header { text-align: center; margin-bottom: 30px; }
          .icon { width: 70px; height: 70px; margin: 0 auto 15px; border-radius: 18px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; font-size: 36px; }
          .title { margin: 0; color: #222; font-size: 30px; }
          .subtitle { color: #777; margin: 8px 0 0; font-size: 14px; }
          .question { text-align: center; color: #444; margin-bottom: 20px; }
          .candidate { display: flex; align-items: center; justify-content: space-between; padding: 18px; margin-bottom: 14px; border: 1px solid #e2e5ff; border-radius: 14px; background: #f8f9ff; }
          .candidate-info { display: flex; align-items: center; gap: 14px; }
          .candidate-icon { width: 45px; height: 45px; border-radius: 50%; background: #667eea; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; }
          .candidate-name { font-weight: bold; color: #333; }
          .vote-count { font-size: 13px; color: #777; margin-top: 4px; }
          .vote-button { border: none; padding: 10px 18px; border-radius: 8px; background: #667eea; color: white; font-weight: bold; cursor: pointer; }
          .vote-button:hover { background: #5568d9; }
          .message { margin-top: 25px; padding: 15px; text-align: center; border-radius: 12px; background: #eef0ff; color: #4d5fc4; font-weight: 600; }
          .results { margin-top: 25px; padding: 20px; border-radius: 16px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
          .results h3 { margin: 0 0 15px; text-align: center; }
          .result-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.25); }
          .result-row:last-child { border-bottom: none; }
          .total { margin-top: 15px; text-align: center; font-weight: bold; }
        `}
      </style>
      <div className="container">
        <div className="card">
          <div className="header">
            <div className="icon">🗳️</div>
            <h1 className="title">Voting System</h1>
            <p className="subtitle">Cast your vote for your favourite candidate</p>
          </div>
          <h3 className="question">Who do you want to vote for?</h3>
          <div className="candidate">
            <div className="candidate-info">
              <div className="candidate-icon">A</div>
              <div>
                <div className="candidate-name">Candidate A</div>
                <div className="vote-count">{votes.CandidateA} votes</div>
              </div>
            </div>
            <button className="vote-button" onClick={() => vote("CandidateA")}>Vote</button>
          </div>
          <div className="candidate">
            <div className="candidate-info">
              <div className="candidate-icon">B</div>
              <div>
                <div className="candidate-name">Candidate B</div>
                <div className="vote-count">{votes.CandidateB} votes</div>
              </div>
            </div>
            <button className="vote-button" onClick={() => vote("CandidateB")}>Vote</button>
          </div>
          <div className="candidate">
            <div className="candidate-info">
              <div className="candidate-icon">C</div>
              <div>
                <div className="candidate-name">Candidate C</div>
                <div className="vote-count">{votes.CandidateC} votes</div>
              </div>
            </div>
            <button className="vote-button" onClick={() => vote("CandidateC")}>Vote</button>
          </div>
          <div className="message">{message}</div>
          <div className="results">
            <h3>📊 Voting Results</h3>
            <div className="result-row">
              <span>Candidate A</span>
              <strong>{votes.CandidateA}</strong>
            </div>
            <div className="result-row">
              <span>Candidate B</span>
              <strong>{votes.CandidateB}</strong>
            </div>
            <div className="result-row">
              <span>Candidate C</span>
              <strong>{votes.CandidateC}</strong>
            </div>
            <div className="total">Total Votes: {totalVotes}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;