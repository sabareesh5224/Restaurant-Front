import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2 className="text-center">Contact Us</h2>
                <p className="lead text-center">Feel free to reach out to us for any inquiries or feedback.</p>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
