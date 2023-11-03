import React, { useRef, useEffect } from 'react';
import VictoryGraph from './VictoryGraph';

function CircleGraph({targetPercent}) {
  const victoryGraphRef = useRef(null);

  useEffect(() => { 
    victoryGraphRef.current.updateData(targetPercent);
    
  }, [targetPercent]);


  return (
    <div>
      <VictoryGraph ref={victoryGraphRef} />
    </div>
  );
}

export default CircleGraph;
