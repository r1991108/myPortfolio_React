import React from "react";

const REACT_APP_CDN_HOST_URL = process.env.REACT_APP_CDN_HOST_URL;
const ContactComponent = () => {
  return (
    <div className="container py-3 custom_fontSize_p ">
      <div className="row align-items-md-stretch">
        <div className="col-md-12">
          <section className="contact">
            <h2>連絡情報</h2>
            <table>
              {/* <!-- 電話番号 --> */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={REACT_APP_CDN_HOST_URL + "/public/img/icon_phone.svg"}
                    alt="phone icon"
                    className="iconForContact"
                  />
                </td>

                <td>
                  <span>電話番号</span>
                </td>
              </tr>
              <tr>
                <td>070-8335-1685</td>
              </tr>
              {/* <!-- email --> */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={REACT_APP_CDN_HOST_URL + "/public/img/icon_email.svg"}
                    alt="email icon"
                    className="iconForContact"
                  />
                </td>
                <td>
                  <span>E-mail</span>
                </td>
              </tr>
              <tr>
                <td>r1991108@gmail.com</td>
              </tr>
              {/* <!-- SNS --> */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={REACT_APP_CDN_HOST_URL + "/public/img/icon_line.svg"}
                    alt="line icon"
                    className="iconForContact"
                  />
                </td>

                <td>
                  <span>Line</span>
                </td>
              </tr>
              <tr>
                <td>Locaodada</td>
              </tr>
              {/* <!-- github --> */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={REACT_APP_CDN_HOST_URL + "/public/img/icon_github.svg"}
                    alt="github icon"
                    className="iconForContact"
                  />
                </td>

                <td>
                  <span>Github</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://github.com/r1991108">
                    https://github.com/r1991108
                  </a>
                </td>
              </tr>

              {/* <!-- qrcode --> */}
              {/* <tr>
                <td rowSpan="2"></td>

                <td></td>
              </tr>
              <tr>
                <td> */}

              {/* </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr> */}
            </table>
            <div className="qrCode">
              <img
                src={REACT_APP_CDN_HOST_URL + "/public/img/Line_QR.jpg"}
                alt="Line_QRcode"
                style={{ height: "7rem" }}
              />
            </div>

            <p>※連絡が取れる時間帯：毎日１０：００～２１：００</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
