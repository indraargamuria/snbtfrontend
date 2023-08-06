import React, { useEffect, useState } from 'react';
import './App.css';
import TimelineComponent from './components/TimelineWrapper';
import TimelineLoadingComponent from './components/Loading';

function App() {
  const TimelineLoading = TimelineLoadingComponent(TimelineComponent);
  const [timelineState, setTimelineState] = useState({
    loading: false,
    timeline: null,
  });

  useEffect(()=>{
    setTimelineState({loading:true});
    const apiUrl = 'http://127.0.0.1:8000/api/timeline/';
    fetch(apiUrl)
      .then((data)=>data.json())
      .then((timelinedata)=>{
        setTimelineState({loading: false, timeline: timelinedata});
      })
  }, [setTimelineState])

  return (
    <div className="App">
      <h1>Timeline</h1>
      <TimelineLoading isLoading={timelineState.loading} timeline={timelineState.timeline}/>
    </div>
  )
}

export default App;