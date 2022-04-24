import React from 'react';
import './ViewCard.scss'

const ViewCard = ({ cardTitle, columnTitle, setIsViewCard }) => {
    const handleClose = () => {
        setIsViewCard(false)
        console.log('close card');
    }

    return (
        <div className="card-info-container">
            <div className="card-info-content">
                <div className="close-card-info" onClick={handleClose}>&times;</div>
                <div className="card-info-edit">
                    <label>
                        <i className="fa-solid fa-tv"></i> 
                        {cardTitle}
                    </label>
                    <p>in Column <u onClick={handleClose}>{columnTitle}</u></p>

                    <label>
                        <i className="fa-solid fa-bars"></i>
                        Description
                    </label>
                    <textarea placeholder="Add detail description..." />

                    <label>
                        <i className="fa-solid fa-bars-staggered"></i>
                        Actions
                    </label>
                    <div className="user-comment">
                        <div className="user-avt"></div>
                        <input type="text" placeholder="Enter comment..." />
                    </div>
                </div>
                <div className="card-info-nav">
                    <label>Add to card</label>
                    <button className="card-info-nav-btn">
                        <i className="fa-solid fa-user"></i>
                        Members
                    </button>
                    <button className="card-info-nav-btn">
                        <i className="fa-solid fa-tag"></i>
                        Label
                    </button>
                    <button className="card-info-nav-btn">
                        <i className="fa-solid fa-list-check"></i>
                        Tasks
                    </button>
                    <button className="card-info-nav-btn">
                        <i className="fa-regular fa-clock"></i>
                        Date
                    </button>

                    <label>Operation</label>
                    <button className="card-info-nav-btn">
                        <i className="fa-regular fa-floppy-disk"></i>
                        Save
                    </button>
                    <button className="card-info-nav-btn">
                        <i className="fa-solid fa-share"></i>
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewCard;
