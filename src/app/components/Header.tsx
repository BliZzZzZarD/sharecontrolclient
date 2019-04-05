import React from 'react';
import logo from '../../img/icon.png';

export const Header = () => (
    <header>
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-muted">
                            This is a test application demonstrating my java-web-fullstack
                            developer skills. <br/> This application simulates share price tracking.
                        </p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.instagram.com/ypleska/" className="text-white">Follow on Instagram</a></li>
                            <li className="text-white">y.pleska@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <img src={logo} className="App-logo" alt="Logo" />
                    <strong className="p-2">Share control center</strong>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
                        aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
            </div>
        </div>
    </header>
);