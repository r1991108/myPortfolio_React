import React, { useEffect } from "react";

const HomeComponent = () => {
  useEffect(() => {
    const text = document.querySelectorAll(".thePaths");
    console.log("text", text);

    for (let i = 0; i < text.length; i++) {
      console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
    }
    const lastWord = document.querySelector("#fourth");
    const animation = document.querySelector("div.animation");

    if (lastWord != null) {
      lastWord.addEventListener("animationend", () => {
        animation.style =
          "transition: all 1s ease 0.2s; opacity: 0; z-index:0 ;pointerEvents: none; transform: scale(1.5, 1.5)";
      });
    }
  });

  return (
    <main>
      {/* animatoin */}
      <div className="animation">
        <div className="logo">
          <svg
            width="63"
            height="71"
            viewBox="0 0 63 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.2699 2.34137L36.433 1.19995H35.28H27.68H26.3643L26.7165 2.4676C26.8877 3.08413 27.043 4.25693 27.1529 5.69612C27.2609 7.11004 27.32 8.70462 27.32 10.1199V10.1316L27.3203 10.1432C27.3999 13.5685 27.4 20.1137 27.4 24.76C27.4 29.2939 27.6834 36.081 27.9827 42.2538C26.0929 42.0312 24.1936 41.92 22.24 41.92C15.1934 41.92 9.92309 43.4249 6.3862 45.968C2.81809 48.5336 1.07999 52.1142 1.07999 56.04C1.07999 60.9659 3.31749 64.4474 7.03143 66.641C10.6741 68.7925 15.6826 69.68 21.28 69.68C26.7691 69.68 30.7088 68.2336 33.2798 65.7839C35.8545 63.3308 36.92 60.0017 36.92 56.52C36.92 55.419 36.8741 54.091 36.8175 52.6215C44.4093 55.5828 51.11 60.3301 55.8474 65.1416L56.7321 66.0401L57.4055 64.9739L61.2455 58.8939L61.6951 58.182L61.0701 57.6177C55.3418 52.4463 46.5959 46.8956 36.4775 43.9898C36.1001 37.3672 35.7367 30.1599 35.7206 25.1053C42.3088 24.9921 51.9338 24.5232 58.7406 23.8349L59.6768 23.7402L59.6392 22.8L59.3992 16.8L59.3558 15.7157L58.2787 15.8473C51.5051 16.6752 42.0645 17.0772 35.7174 17.2531C35.7139 16.5038 35.7072 15.7771 35.7007 15.0778C35.6835 13.2121 35.668 11.5413 35.7193 10.157L35.7194 10.1533C35.7993 7.75842 36.0381 3.96422 36.2699 2.34137ZM9.47999 55.8C9.47999 54.0269 10.4038 52.5059 12.3682 51.377C14.3702 50.2265 17.4156 49.52 21.44 49.52C23.7498 49.52 26.0491 49.708 28.2838 50.1364C28.2907 50.8771 28.3055 51.5695 28.3203 52.2032C28.3227 52.3074 28.3251 52.4099 28.3275 52.5106C28.3448 53.2476 28.36 53.8899 28.36 54.44C28.36 57.0346 27.6855 58.786 26.5032 59.9031C25.31 61.0305 23.423 61.68 20.64 61.68C16.883 61.68 14.0386 61.0694 12.1702 60.0184C10.355 58.9973 9.47999 57.5847 9.47999 55.8Z"
              stroke="#583333"
              strokeWidth="2"
              id="first"
              className="thePaths"
            />
          </svg>
          <svg
            width="57"
            height="73"
            viewBox="0 0 57 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3575 62.7675L12.8411 62.9547L13.6195 64.2695L17.2195 70.3495L17.5627 70.9291L18.2289 70.8288C28.6865 69.2542 37.9487 65.992 44.6203 60.8522C51.3247 55.687 55.4 48.6277 55.4 39.6C55.4 33.6122 53.17 28.8841 49.3878 25.6682C45.6256 22.4692 40.4167 20.84 34.56 20.84C26.5598 20.84 18.6171 22.7462 13.0249 24.0884C12.0857 24.3138 11.2129 24.5233 10.4172 24.7051L10.4128 24.7061C8.04286 25.2591 5.37823 25.7276 3.20875 25.8825L1.98719 25.9698L2.31693 27.1492L4.39693 34.5892L4.70126 35.6778L5.74461 35.2431C7.63839 34.454 9.92694 33.5858 12.3721 32.7965C12.8641 32.6547 13.3873 32.4999 13.94 32.3364C18.7382 30.9171 25.7603 28.84 33.92 28.84C37.8498 28.84 41.0251 29.9835 43.2008 31.8406C45.3652 33.688 46.6 36.2886 46.6 39.36C46.6 46.1393 43.3874 51.3509 37.7646 55.2052C32.1002 59.088 23.9987 61.5773 14.3575 62.7675ZM14.2216 2.38485L13.1923 2.15091L13.0143 3.19138L11.9743 9.27138L11.8067 10.2514L12.7857 10.4247C21.8775 12.0338 38.0787 13.6368 46.9771 14.198L47.8876 14.2554L48.0281 13.354L48.9881 7.19397L49.1661 6.05183L48.0102 6.04004C40.2208 5.96055 22.9347 4.36509 14.2216 2.38485Z"
              stroke="#583333"
              strokeWidth="2"
              id="second"
              className="thePaths"
            />
          </svg>
          <svg
            width="58"
            height="63"
            viewBox="0 0 58 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.92403 1.84773L6.8 1.70723V2.84001V9.40001V10.3269L7.72427 10.3971C14.0578 10.8782 20.8853 11.28 28.92 11.28C36.3991 11.28 45.15 10.7176 50.5933 10.3173L51.52 10.2492V9.32001V2.76001V1.65807L50.4232 1.7647C44.684 2.32268 36.558 2.88001 28.92 2.88001C20.9399 2.88001 13.6259 2.56047 7.92403 1.84773ZM11.951 35.3891L12.3352 34.207L11.0983 34.0849L4.61828 33.4449L3.73381 33.3575L3.54325 34.2256C3.46237 34.5941 3.37781 34.971 3.29146 35.3559C2.61984 38.3496 1.84 41.8257 1.84 45.56C1.84 50.9794 4.40959 55.1541 9.08041 57.9204C13.69 60.6505 20.3161 62 28.52 62C39.9272 62 50.1869 60.7971 56.0676 59.1635L56.8089 58.9576L56.7999 58.1884L56.7199 51.3084L56.704 49.9379L55.4038 50.3713C49.555 52.3209 39.3611 53.52 28.36 53.52C22.0471 53.52 17.4858 52.4706 14.5391 50.7735C11.6399 49.1036 10.32 46.8291 10.32 44.2C10.32 41.3845 10.9285 38.5355 11.951 35.3891Z"
              stroke="#583333"
              strokeWidth="2"
              id="third"
              className="thePaths"
            />
          </svg>
          <svg
            width="68"
            height="70"
            viewBox="0 0 68 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.084 3.24778L14.9032 3.10017L14.9612 4.28878L15.2812 10.8488L15.3322 11.8948L16.3748 11.7956C16.7175 11.7629 17.0891 11.7271 17.4804 11.6893C19.0141 11.5413 20.8499 11.3641 22.4346 11.2373C24.1455 11.1181 28.5072 10.8989 32.9 10.6788L33.118 10.6679C35.8149 10.5327 38.5063 10.3979 40.5702 10.2867C34.7111 15.4381 24.1581 24.5001 16.6341 29.7562C12.583 30.2328 7.27849 30.8563 3.04954 31.3262L2.07299 31.4347L2.1643 32.413L2.7243 38.413L2.82418 39.4832L3.88437 39.3064C12.1843 37.9231 21.2711 36.8389 29.1094 36.1069C25.6101 39.2233 22.24 44.166 22.24 49.9201C22.24 56.3898 25.0839 61.3226 30.498 64.4649C35.8375 67.564 43.6018 68.8828 53.445 68.439L54.2194 68.4041L54.3787 67.6455L55.7387 61.1655L56.0143 59.8521L54.6769 59.9635C51.8392 60.2 47.9975 60.356 43.3743 59.7291L43.3707 59.7286C39.7855 59.2559 36.5415 58.3634 34.2118 56.6968C31.9455 55.0754 30.48 52.6789 30.48 48.9601C30.48 45.5445 32.21 42.2502 34.9405 39.6434C37.668 37.0394 41.3175 35.2 44.9778 34.6705C49.6875 34.0433 57.2928 33.96 65.109 34.3588L66.16 34.4124V33.3601V27.4401V26.4401H65.16C54.6482 26.4401 41.7673 27.3017 30.3656 28.4208C36.9596 23.1184 46.4604 15.188 51.63 10.8568C52.7253 9.99763 54.7531 8.59572 55.8161 7.9883L56.8897 7.37479L56.0652 6.45326L51.9852 1.89326L51.5829 1.44356L50.9974 1.58992C50.0743 1.8207 48.6078 2.12951 46.8333 2.28381L46.8167 2.28526L46.8002 2.28726C42.2137 2.8408 25.7767 3.56006 22.28 3.56006C19.9004 3.56006 17.9463 3.48056 16.084 3.24778Z"
              stroke="#583333"
              strokeWidth="2"
              id="fourth"
              className="thePaths"
            />
          </svg>
        </div>
      </div>
      <div className="container py-3 custom_fontSize_p ">
        <div className="row align-items-md-stretch">
          <div className="col-md-4 o-3column ">
            <div className="h-100 p-3  rounded-3 section">
              <h2>自己紹介</h2>
              <p>
                東京に滞在する台湾人です。
                <br />
                日本のことに憧れて、２０１９年に来日しました。
                日本語を勉強しつつ、将来のことを考えていた中、プログラミングの魅力を感じまして、それをきっかけにプログラミングを独学し始めました。
                <br />
                現在は保険会社の情報システム部門でCOBOL、java、curlなどの言語を使って営業統計システムの保守、開発案件に携わっております。
                <br />
                趣味として、Udemyやネットサイトの記事を介してReactJS、NodeJs及びAWSを勉強しています。AWS
                SAA資格を持っています。
                <br />
                実務経験を将来で活かしていきたいと思いつつ、常に自分の知見を向上させようと考えております。
              </p>
            </div>
          </div>
          <div className="col-md-4  o-3column ">
            <div className="h-100 p-3   rounded-3">
              <section className="section">
                <h2>経歴</h2>
                <ul>
                  <li>
                    <div>
                      <img src="./img/towardLogo.jpg" alt="towardLogo" />
                    </div>
                    <p>日本 トワード株式会社 プログラマー 2020～現在</p>
                  </li>
                  <li>
                    <div>
                      <img src="./img/ECOVELogo.JPG" alt="ECOVELogo" />
                    </div>
                    <p>台湾 ECOVE エンジニア 2017～2019</p>
                  </li>
                </ul>
                <h2>学歴</h2>
                <ul>
                  <li>
                    <div>
                      <img
                        src="./img/IntercultureLogo.jpg"
                        alt="IntercultureLogo"
                      />
                    </div>
                    <p>日本 インターカルト日本語学校 2020 卒</p>
                  </li>
                  <li>
                    <div>
                      <img src="./img/nchuLogo.jpg" alt="NCHULogo" />
                    </div>
                    <p>台湾 中興大学 環境工程学 修士 2016 卒</p>
                  </li>
                  <li>
                    <div>
                      <img src="./img/nchuLogo.jpg" alt="NCHULogo" />
                    </div>
                    <p>台湾 中興大学 環境工程学 2014 卒</p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="col-md-4  o-3column ">
            <div className="h-100 p-3   rounded-3 ">
              <section className="profile">
                <img
                  src="./img/IMG_8333.JPG"
                  alt="personal profile"
                  className="profile"
                />
                <p>好きな言葉は、</p>
                <p>何歳になろうが、好きなことは見つかる</p>
              </section>
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

export default HomeComponent;
