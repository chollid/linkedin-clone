import React from 'react'
import './Widgets.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    //*** All code for right Aside goes here ****/
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p> 
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoOutlinedIcon />
            </div>
            {newsArticle('Chris is coding', "Always- 555 readers")}
            {newsArticle('Chris is coding', "Always- 555 readers")}
            {newsArticle('Chris is coding', "Always- 555 readers")}
        </div>
    );
}

export default Widgets
