import CircleGraph from './CircleGraph';

const Output = ({targetPercent, happy, sad}) => {

  return (
    <>
      <div className="graphs">
        <div className="probabilities">
          <div className="happy">
            <h3>
              Happiness <br />
              Rating
            </h3>
            <div className="small-circle">
            <CircleGraph targetPercent={targetPercent}/>
            </div>
          </div>

          <div className="suicide">
            <h3>
              Depression <br />
              Rating
            </h3>
            <div className="small-circle">
            <CircleGraph targetPercent={targetPercent}/>
            </div>
          </div>
        </div>

        <div className="risk-rating">
          <h3>Suicide Risk Rating</h3>
          <div className="lg-circle">
            <CircleGraph targetPercent={targetPercent}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Output;
