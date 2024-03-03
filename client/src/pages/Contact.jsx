import TitlewithNav from '../components/TitlewithNav';
import React from 'react';

function Contact() {
    return (
        <div>
                <TitlewithNav />
            <div id='contact-page'>
                <h3 className='h3-title'>Contact</h3>
                <div id='contact-info'>
                    <a id="a-1">Email: samantha.rose327@gmail.com</a>
                    <br />
                    <a href="https://github.com/samanthashleyrose" id="a-2">GitHub: samanthashleyrose</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;