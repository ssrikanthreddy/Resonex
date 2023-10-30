
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CircleGraph from './CircleGraph';

const Output = ({targetPercent}) => {

  return (
    <>
      <div className="graphs">
        <div className="probabilities">
          <div className="happy">
            <h3>
              Happiness <br />
              Probability
            </h3>
            <div className="small-circle">
              <CircularProgressbar value={50} text={`${50}%`} />
            </div>
          </div>

          <div className="suicide">
            <h3>
              Suicide <br />
              Probability
            </h3>
            <div className="small-circle">
              <CircularProgressbar value={50} text={`${50}%`} />
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
