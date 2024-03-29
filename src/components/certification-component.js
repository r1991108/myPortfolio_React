import React, { useState } from "react";
const REACT_APP_CDN_HOST_URL = process.env.REACT_APP_CDN_HOST_URL;
const CertificationComponent = () => {
  return (
    <main>
      <div className="container py-3 custom_fontSize_p ">
        <div className="row align-items-md-stretch">
        <div className="col-md-3 o-3column ">
            <div className="h-100 p-1 rounded-3">
              <div className="certification_sub ">
                <h2 className="border-top  border-bottom p-1">
                  AWS SAP C-02
                  <br /> 合格(2023)
                </h2>

                <img
                  src={REACT_APP_CDN_HOST_URL + "/public/img/awsSap.jpg"}
                  alt="awsSAPCertification"
                  className="shadow-sm profile"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 o-3column ">
            <div className="h-100 p-1 rounded-3">
              <div className="certification_sub ">
                <h2 className="border-top  border-bottom p-1">
                  AWS SAA C-02
                  <br /> 合格(2021)
                </h2>

                <img
                  src={REACT_APP_CDN_HOST_URL + "/public/img/awsSaa.jpg"}
                  alt="awsSAACertification"
                  className="shadow-sm profile"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3  o-3column ">
            <div className="h-100 p-1  rounded-3">
              <div className="certification_sub">
                <h2 className="border-top  border-bottom p-1">
                  日本語能力試験N1
                  <br /> 合格(2020)
                </h2>

                <img
                  src={REACT_APP_CDN_HOST_URL + "/public/img/JLPT.jpg"}
                  alt="JLPTN1Certification"
                  className="shadow-sm profile"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3  o-3column ">
            <div className="h-100 p-1 rounded-3 ">
              <div className="certification_sub">
                <h2 className="border-top  border-bottom p-1">
                  TOEIC <br />
                  690点取得(2017)
                </h2>

                <img
                  src={REACT_APP_CDN_HOST_URL + "/public/img/toeic.jpg"}
                  alt="toeicResult"
                  className="shadow-sm profile"
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2022 Chen Bing Nan
        </footer>
      </div>
    </main>
  );
};

export default CertificationComponent;
