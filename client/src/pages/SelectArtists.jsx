import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SelectGenres() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <div className='select-genres-page'>
                <h4 className='h3-title'>select artists</h4>
                <div className='genres-container'>
                </div>

            </div>
            <div className="gen-btn-container">
                <Link to="/SelectGenres"><button id='back-btn'>Back</button></Link>
                <Link to="/SelectSongCount" className={currentPage === '/SelectSongCount'}><button id='next-btn'>Next</button></Link>
            </div>
        </div>
    );
}