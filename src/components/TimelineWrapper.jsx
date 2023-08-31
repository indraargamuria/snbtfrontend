import React,{Fragment} from 'react';
import TimelineComponent from './Timeline'

const TimelineWrapper = (props) => {
    const {timeline} = props;
    if(!timeline || timeline.length === 0) return <p>Belum ada Timeline Try Out yang dapat dilampirkan</p>
    console.log(timeline);
    return (
        <Fragment>{timeline.map(t => {
            return <TimelineComponent 
                key={t.id}
                status={t.status === 1 ? 'Sedang Berjalan' : 'Agenda Berikutnya'}
                header={t.name}
                register={t.registerdate}
                activity={t.activitydate}
                announcement={t.announcementdate}
                liveclass={t.liveclassdate}
            />
        })}
        </Fragment>
    )
};

export default TimelineWrapper;