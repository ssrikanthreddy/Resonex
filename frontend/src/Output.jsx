import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Output = () => {
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
            <CircularProgressbar value={50} text={`${50}%`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Output;
