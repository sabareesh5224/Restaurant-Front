import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">About Us</h2>
                <div className="card">
                    <div className="card-body">
                        <p className="lead text-center">Welcome to Tamil Nadu Restaurant, where the rich flavors of South India come to life. Established in 2020, we pride ourselves on bringing authentic Tamil cuisine to your table, crafted with the freshest ingredients and traditional recipes handed down through generations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
