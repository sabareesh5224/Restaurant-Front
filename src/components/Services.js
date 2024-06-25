import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

function Services() {
    return (
        <section id="services" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center">Our Services</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://lh5.googleusercontent.com/arzEGGi_BmDhtC0wEOeumozPCJ5iU3j9xGcmd9Z1wi9sh3FabxW5g-6zSLukwef125lS7C9n-D8U2aTSgInVOU8Ik0uNeSMaKsQD_3xll6lsWCpjhmLrT7qFR7-B_KblJ0mGChGr" className="card-img-top" alt="Dining Service" />
                            <div className="card-body">
                                <p className="card-text">Enjoy a meal in a comfortable and inviting dining environment with service.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--0I5g7d0m--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1674229525954/Hero-20230113_mealdeliveryhero.PNG" className="card-img-top" alt="Takeaway Service" />
                            <div className="card-body">
                                <p className="card-text">Conveniently order food to go and enjoy restaurant-quality meals at home.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://static1.squarespace.com/static/62f5506bcfd3392675e3f474/62f55103cfd3392675e408bd/6490a9927190344106e6dd42/1699647937272/Modern+Moments+-+Dessert+Table.jpg?format=1500w" className="card-img-top" alt="Catering Service" />
                            <div className="card-body">
                                <p className="card-text">Provide food and beverages for events such as weddings, parties, and corporate gatherings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
