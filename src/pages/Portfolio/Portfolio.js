import React from 'react';
import kids from '../../assets/images/kids.png'
import wedding from '../../assets/images/wedding.png'
import career from '../../assets/images/career.png'

const Portfolio = () => {
    return (
        <section className=' bg-slate-50 p-4'>
            <div className="container mx-auto">
                <h3 className=' text-3xl my-5'>My Information</h3>
                <div className='mb-5 bg-slate-100 p-4'>
                    <span className=' font-semibold'>Name</span>
                    <h2>Md Masum Molla</h2>
                </div>

                <div className='mb-5 bg-slate-100 p-4'>
                    <span className=' font-semibold'>Email</span>
                    <p>masummolla.cse@gmail.com</p>
                </div>

                <div className='mb-5 bg-slate-100 p-4'>
                    <span className=' font-semibold'>Education</span>
                    <p>Computer engineering from IIST</p>
                </div>
                <div className=' w-80 my-24'>
                    <h3 className=' text-3xl my-5'>My Skills</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>technologies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>HTML</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>CSS</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>JavaScript</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>React Js</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Express Js</td>
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <td>Bootstrap and Tailwind</td>
                                </tr>
                                <tr>
                                    <th>7</th>
                                    <td>Php & Laravel</td>
                                </tr>
                                <tr>
                                    <th>7</th>
                                    <td>MySQL</td>
                                </tr>
                                <tr>
                                    <th>9</th>
                                    <td>WordPress A-Z</td>
                                </tr>
                                <tr>
                                    <th>10</th>
                                    <td>Git and GitHub</td>
                                </tr>
                                <tr>
                                    <th>11</th>
                                    <td>UX & UI Expert</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h3 className=' text-3xl my-16'>My Recent works</h3>
                    <div className="portfolios grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={wedding} alt="wedding" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Wedding event management</h2>
                                <div className="card-actions justify-end">
                                    <a href="https://lv-convention-center-by-bootstrap.netlify.app/" target='_blank' rel="noreferrer" className="btn btn-primary btn-xs mt-5">Live View</a>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={kids} alt="kids" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Kids toys shop</h2>
                                <div className="card-actions justify-end">
                                    <a href="https://kids-toy-review.netlify.app/" target='_blank' rel="noreferrer" className="btn btn-primary btn-xs mt-5">Live View</a>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={career} alt="career" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Career coaching center</h2>
                                <div className="card-actions justify-end">
                                    <a href="https://career-mentoring.netlify.app/" target='_blank' rel="noreferrer" className="btn btn-primary btn-xs mt-5">Live View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;