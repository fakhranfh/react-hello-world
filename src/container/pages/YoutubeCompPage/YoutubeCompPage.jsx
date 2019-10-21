import React, {Component, Fragment} from 'react';
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubeCompPage extends Component{
    componentDidMount() {
        document.title = 'Youtube Component';
    }

    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <YoutubeComp
                    time="19:23"
                    title="Aku anak ganteng"
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YoutubeComp
                    time="2:25:23"
                    title="Kekerenan sang kuriang"
                    desc="54x ditonton, 999 millenium yang lalu"/>
                <YoutubeComp
                    time="12:23:23"
                    title="Livestreaming rebahan"
                    desc="999x ditonton, 2 jam yang lalu"/>
                <YoutubeComp
                    time="24:00:00"
                    title="Sehari menjadi matahari"
                    desc="102042x ditonton, 1 jam yang lalu"/>
                <YoutubeComp/>
            </Fragment>
        );
    }
}

export default YoutubeCompPage;