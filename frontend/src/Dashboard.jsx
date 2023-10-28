const Dashboard = () => {
  return (
    <>
      <h1>dashboard</h1>
      <div id="dashboard">
        <div className="input">
          <div className="prompt-body"></div>
          <div className="prompt-btn"></div>
        </div>
        <div className="output">
          <div className="graphs">
            <div className="probability">
              <div className="happiness-rating"></div>
              <div className="suicide-rating"></div>
            </div>
            <div className="suicide-rating"></div>
          </div>
          <div className="gpt-output"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
