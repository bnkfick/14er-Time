import React from "react";
import "./styles.css";



const More = props => {


    return (
        <>

            <div className="col-md-10 offset-1 spec-text">
                <div className="row align-items-center mt-4">
                    <div className="col-1">
                        <i className="fas fa-sliders-h fa-2x" />
                    </div>
                    <div className="col-11">
                        <p className="text-left mb-0">
                            LogIn or Register below to save your Mountain Climbing
                            condition preferences.
                </p>
                    </div>
                </div>
                <div className="row align-items-center mt-4">
                    <div className="col-1">
                        <i className="fas fa-mobile-alt fa-2x" />
                    </div>
                    <div className="col-11">
                        <p className="text-left mb-0">
                            Receive advance text notifications when climbing conditions
                            match your preferences for your favorite Colorado 14'ers!
                </p>
                    </div>
                </div>
                <div className="row align-items-center mt-4">
                    <div className="col-1">
                        <i className="fas fa-user-friends fa-2x" />
                    </div>
                    <div className="col-11">
                        <p className="text-left mb-0">
                            Plan a climb with friends & Get Beta on Route conditions!
                </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default More;
