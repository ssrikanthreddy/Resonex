import React, { useRef, useEffect } from 'react';
import VictoryGraph from './VictoryGraph';

function CircleGraph({targetPercent}) {
  const victoryGraphRef = useRef(null);

  useEffect(() => { 
    victoryGraphRef.current.updateData(targetPercent);
    
    console.log('Value changed to:', targetPercent);
    // Perform your action here
  }, [targetPercent]);


  return (
    <div>
      <VictoryGraph ref={victoryGraphRef} />
    </div>
  );
}

export default CircleGraph;
