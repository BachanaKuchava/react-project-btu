import React from "react";
import './analytics.css';

function Analytics() {
  return (
   <>
   <div className="analytics">
    <div className="analytics-block">
        <div className="analytics-items">
            <p className="analytics-items-stat">42 +</p>
            <p className="analytics-items-text">პროექტები</p>

        </div>
          <div className="analytics-items">
            <p className="analytics-items-stat">102 +</p>
            <p className="analytics-items-text">მომხმარებელი</p>

        </div>
          <div className="analytics-items">
            <p className="analytics-items-stat">72 +</p>
            <p className="analytics-items-text">პროექტები</p>

        </div>
          <div className="analytics-items">
            <p className="analytics-items-stat">12 +</p>
            <p className="analytics-items-text">მომხმარებელი</p>

        </div>

    </div>

   </div>
   
   </>
  );
} export default Analytics;