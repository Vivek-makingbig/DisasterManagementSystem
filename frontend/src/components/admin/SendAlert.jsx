import React from "react";

function SendAlert() {
  return (
    <div className="card">

      <h3>Send Emergency Alert</h3>

      <form>

        <textarea placeholder="Write emergency alert message"></textarea>

        <button type="submit">Send Alert</button>

      </form>

    </div>
  );
}

export default SendAlert;