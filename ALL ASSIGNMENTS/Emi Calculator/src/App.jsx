import { useState } from "react";
import "./style.css";

export default function App() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [numberOfYears, setNumberOfYears] = useState(0);
  const [RateOfInterest, setRateOfInterest] = useState(0);
  const [interest, setInterest] = useState(0);

  function getLoanAmount(e) {
    setLoanAmount(e.target.value);
    calculateInterest(e.target.value, numberOfYears, RateOfInterest);
  }

  function getNumberOfYears(e) {
    setNumberOfYears(e.target.value);
    calculateInterest(loanAmount, e.target.value, RateOfInterest);
  }

  function getRateOfInterest(e) {
    setRateOfInterest(e.target.value);
    calculateInterest(loanAmount, numberOfYears, e.target.value);
  }

  function calculateInterest(loan, years, interestRate) {
    const value = (years * loan * interestRate) / 100;
    setInterest(value);
  }

  function handleRangeButtonLoan(e) {
    setLoanAmount(e.target.value);
    calculateInterest(e.target.value, numberOfYears, RateOfInterest);
  }

  function handleRangeButtonYears(e) {
    setNumberOfYears(e.target.value);
    calculateInterest(loanAmount, e.target.value, RateOfInterest);
  }

  function handleRangeButtonInterest(e) {
    setRateOfInterest(e.target.value);
    calculateInterest(loanAmount, numberOfYears, e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="main">
          <input
            className="input"
            type="text"
            onChange={getLoanAmount}
            value={loanAmount}
            maxLength={8}
            minLength={6}
            min={100000}
            max={30000000}
          />
          <input
            type="range"
            min={100000}
            max={30000000}
            onChange={handleRangeButtonLoan}
            value={loanAmount}
          />
          <label htmlFor="">Loan Amount</label>
          <input
            className="input"
            type="text"
            maxLength={2}
            onChange={getNumberOfYears}
            value={numberOfYears}
          />
          <input
            type="range"
            min={1}
            max={10}
            onChange={handleRangeButtonYears}
            value={numberOfYears}
          />

          <label htmlFor="">Number of Years</label>
          <input
            className="input"
            type="Tenure"
            maxLength={3}
            onChange={getRateOfInterest}
            value={RateOfInterest}
          />
          <input
            type="range"
            min={1}
            max={20}
            value={RateOfInterest}
            onChange={handleRangeButtonInterest}
          />
          <label htmlFor="">Rate of Interest</label>
        </div>

        <div className="footer">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/27/21/31/money-2180330_640.jpg"
            alt=""
          />
          <h1>Loan amount : {interest}</h1>
        </div>
      </div>
    </>
  );
}
