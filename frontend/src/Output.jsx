import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Output = () => {



    return (
        <>
        
        <div className='graphs'>

            <div className='side-graphs'>
            <div className="happy-graph">
                <CircularProgressbar value={50} text={`${50}%`} />
            </div>

            <div className="sad-graph">
                <CircularProgressbar value={50} text={`${50}%`} />
            </div>
            </div>

            <div className='maingraph'>
                <div className="main-graph-container">
                    <CircularProgressbar value={50} text={`${50}%`} />
                </div>
            </div>

        </div>

        <div className='gptoutput'>
        GPT
        </div>

        
        </>
    )
}

export default Output;