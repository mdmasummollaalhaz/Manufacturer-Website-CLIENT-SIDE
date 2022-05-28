import React from 'react';

const Blogs = () => {
    return (
        <section className=' bg-slate-50 p-4'>
            <div className="container mx-auto py-24">
                <div tabIndex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-8">
                    <div className="collapse-title text-xl font-semibold">
                        How will you improve the performance of a React Application?
                    </div>
                    <div className="collapse-content">
                        <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.</p>
                        <b className='mt-3'>Some key points for improve react application performace:</b>
                        <p className='mt-3'>1. Put component to local file where necessary</p>
                        <p>2. Lazy loading images in React</p>
                        <p>3. Windowing or list virtualization in React</p>
                        <p>4. Avoid Inline Function Definition in the Render Function.</p>
                        <p>5. Avoid using Index as Key for map</p>
                        <p>6. Avoiding Props in Initial States</p>
                        <p>6. Avoiding Props in Initial States</p>
                        <p>7. CSS Animations Instead of JS Animations</p>
                    </div>
                </div>
                <div tabIndex="1" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-8">
                    <div className="collapse-title text-xl font-semibold">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.

                        </p>
                        <p>The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "dissapears" once the execution is finished.</p>
                        <p><b>The Four Kinds of React State to Manage:</b></p>
                        <p className='mt-3'>1. Local state</p>
                        <p >2. Local state</p>
                        <p >3. Server state</p>
                        <p >4. URL state</p>
                    </div>
                </div>
                <div tabIndex="2" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-8">
                    <div className="collapse-title text-xl font-semibold">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is named prototype.

                            Following the example, you can make pet a prototype of cat which will then inherit legs property.

                            When creating an object using the object literal, you can use the special property __proto__ to set the prototype of the created object.

                            Let's use __proto__ and make pet the prototype of cat:</p>
                        <p className='mt-3'>{`const pet = { legs: 4 };
                            const cat = { sound: 'Meow!', __proto__: pet };
                            cat.legs; // => 4` }</p>
                    </div>
                </div>

                <div tabIndex="3" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-8">
                    <div className="collapse-title text-xl font-semibold">
                        Why you do not set the state directly in React?
                    </div>
                    <div className="collapse-content">
                        <p>One should never update the state directly because of the following reasons:</p>
                        <ul className=' list-item list-decimal mx-4 mt-3'>
                            <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                            <li>
                                When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                            <li>You will lose control of the state across all components.</li>
                        </ul>
                    </div>
                </div>

                <div tabIndex="4" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-semibold">
                        What is a unit test? Why should write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>Unit testing is an essential instrument in the toolbox of any serious software developer. However, it can sometimes be quite difficult to write a good unit test for a particular piece of code. Having difficulty testing their own or someone else’s code, developers often think that their struggles are caused by a lack of some fundamental testing knowledge or secret unit testing techniques.</p>
                        <p><b>We should write unit tests because:</b></p>
                        <ul className=' list-item list-decimal mx-4 mt-3'>
                            <li>Unit tests help to fix bugs early in the development cycle and save costs.</li>
                            <li>
                                It helps the developers to understand the testing code base and enables them to make changes quickly</li>
                            <li>Good unit tests serve as project documentation</li>
                            <li>Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.</li  >
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;