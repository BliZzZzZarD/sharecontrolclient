import React from 'react';
import {ShareSelect} from "./ShareSelect";
import {ShareCourse} from "./ShareCourse";

export const ShareSection = () => (
    <div className="bg-light">
        <div className="container py-5">
            <div className="row">
                <ShareSelect/>
                <ShareCourse/>
            </div>
        </div>
    </div>
);