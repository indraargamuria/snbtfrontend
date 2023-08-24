import React,{Fragment, useEffect, useState} from 'react';
import styles from '../stylescomponents/Info.module.css';
import SectionImage from './SectionImage';
import TimelineWrapperComponent from './TimelineWrapper';
import LoadingComponent from './Loading';
function Info() {
    const Loading = LoadingComponent(TimelineWrapperComponent);
    const [timelineState, setTimelineState] = useState({
        loading: false,
        timeline: null,
    });

    useEffect(()=>{
        setTimelineState({loading:true});
        const apiUrl = 'http://uss-snbt.com:8000/api/timeline/';
        fetch(apiUrl)
        .then((data)=>data.json())
        .then((timelinedata)=>{
            // console.log(timelinedata);
            setTimelineState({loading: false, timeline: timelinedata});
        })
    }, [setTimelineState])

    return (
        <Fragment>
            <div className={styles.info}>
                <div className={styles.infoleftblankspace}></div>
                <div className={styles.infoleft}>
                        <Loading isLoading={timelineState.loading} timeline={timelineState.timeline}/>
                
                </div>
                <div className={styles.infomid}>
                    <div className={styles.infoimage}>
                        <img src='https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10211.jpg?w=996&t=st=1676355657~exp=1676356257~hmac=0fd4d9362ca20588478ff19632af3ab2e0b9ebc672997ded6a70e5bd2efcc897' alt='' />
                    </div>
                    {/* {this.state.tryout_timeline.map(datalist => {
                        return <TryOutTimeline 
                            key={datalist.id}
                            status={datalist.status}
                            header={datalist.header}
                            register={datalist.register}
                            activity={datalist.activity}
                            announcement={datalist.announcement}
                            liveclass={datalist.liveclass}
                        />
                    })} */}
                </div>
                <div className={styles.inforight}>
                    {/* {this.state.tryout_timeline.map(datalist => {
                        return <TryOutTimeline 
                            key={datalist.id}
                            status={datalist.status}
                            header={datalist.header}
                            register={datalist.register}
                            activity={datalist.activity}
                            announcement={datalist.announcement}
                            liveclass={datalist.liveclass}
                        />
                    })} */}
                    <SectionImage url='https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10211.jpg?w=996&t=st=1676355657~exp=1676356257~hmac=0fd4d9362ca20588478ff19632af3ab2e0b9ebc672997ded6a70e5bd2efcc897'/>
                
                </div>
                <div className={styles.inforightblankspace}></div>
            </div>
        </Fragment>
    )
}
export default Info