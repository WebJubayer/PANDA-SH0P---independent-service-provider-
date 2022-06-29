import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-body'>
            <Container>
                <p className='blogs-button mt-5'>
                    <a class="btn btn-primary blogs-button" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Q1- Difference between authorization and authentication</a>
                    <button class="btn btn-primary blogs-button" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Q2- Why are you using firebase?</button>
                    <button class="btn btn-primary blogs-button" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample2">Q3- Why are you using firebase?</button>
                    <button class="btn btn-primary blogs-button" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3">All elements</button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body">
                                <h3>Difference between authorization and authentication</h3>
                                <span>
                                    Authentication is the process of verifying who someone is, whereas Authorization is the process of verifying what specific applications, files, and data a user has access to.  In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person's or user's authorities are checked for accessing the resources.
                                    There are the following steps to use Firebase UI Authentication:
                                    Set up sign-in methods: Enable authentication method in the firebase console. ...
                                    Customize the sign-in UI. For customizing the sign-in and UI, we have to set some Firebase UI options or fork the code on GitHub.
                                    To perform the sign-in flow, use Firebase UI:
                                </span>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body">
                                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                                <span>
                                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                                    There are the following steps to use Firebase UI Authentication:
                                    1. Set up sign-in methods: Enable authentication method in the firebase console. ...
                                    2. Customize the sign-in UI. For customizing the sign-in and UI, we have to set some Firebase UI options or fork the code on GitHub.
                                    3. To perform the sign-in flow, use Firebase UI
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapseExample3">
                            <div class="card card-body">
                                <h3>What other services does firebase provide other than authentication</h3>
                                <span>
                                    Top Alternatives to Firebase Authentication
                                    1. Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications. ...
                                    2. MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, offering. ...
                                    3. Passport. ...
                                    4. Okta. ...
                                    5. Firebase. ...
                                    6. JSON Web Token. ...
                                    7. Amazon Cognito. ...
                                    8. Keycloak.
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;