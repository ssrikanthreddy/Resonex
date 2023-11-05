import CircleGraph from './CircleGraph';
import PieChart from './PieChart';

const Output = ({ targetPercent, happy, sad, activeTab, arr }) => {
  return (
    <section id="output">
      <div
        id="text"
        className={
          activeTab === 'text'
            ? 'graphs tab-content active'
            : 'graphs tab-content'
        }
      >
        <div className="probabilities">
          <div className="happy">
            <h3>
              Happiness <br />
              Rating
            </h3>
            <div className="small-circle">
              <CircleGraph targetPercent={happy} />
            </div>
          </div>

          <div className="suicide">
            <h3>
              Depression <br />
              Rating
            </h3>
            <div className="small-circle">
              <CircleGraph targetPercent={sad} />
            </div>
          </div>
        </div>

        <div className="risk-rating">
          <h3>Suicide Risk Rating</h3>
          <div className="lg-circle">
            <CircleGraph targetPercent={targetPercent} />
          </div>
        </div>
      </div>

      <div
        id="voice"
        className={
          activeTab === 'voice'
            ? 'chart tab-content active'
            : 'chart tab-content'
        }
      >
        <h2>Emotion Spectrum</h2>
        <div className="pie-chart">
          <PieChart arr={arr}/>
        </div>
      </div>
    </section>
  );
};

export default Output;
