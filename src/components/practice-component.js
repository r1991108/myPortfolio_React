import React from "react";

const PracticeComponent = () => {
  return (
    <div className="container py-3 custom_fontSize_p ">
      <div className="row align-items-md-stretch">
        <div className="container practice">
          <h2>練習成果物</h2>
          <ul className="list-group">
            <li className="list-group-item border-0">
              ◎ AWS(EventBridge, ECS, CFn, CodePipeline) - using eventbridge to
              invoke ECS
              <p>
                <a
                  href={"https://github.com/r1991108/eventBridge-ecs"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  ・ eventbridgeで特定の時刻をトリガーとして検知し、
                  時間になったら、ECSを実行させる{" "}
                  <span style={{ color: "rgb(30, 30, 86)" }}>
                    (githubへ遷移)
                  </span>
                </a>
              </p>
            </li>
            <li className="list-group-item border-0">
              ◎ MERN project - an online course site
              <p>
                <a
                  href={"https://github.com/r1991108/MERNProj"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  ・ MERNスタックでインターネットラーニングサイトを作ってみた{" "}
                  <span style={{ color: "rgb(30, 30, 86)" }}>
                    (githubへ遷移　★AWS EC2またはECSでdemo可能)
                  </span>
                </a>
              </p>
            </li>
            <li className="list-group-item border-0">
              ◎ React, react-router, Hook(useState, useEffect), JSX
              <p>
                <a
                  href={"https://r1991108.github.io/pictureSearchProj/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  ・ APIを利用し画像検索アプリを作ってみた{" "}
                  <span style={{ color: "rgb(30, 30, 86)" }}>
                    (demoページへ遷移)
                  </span>
                </a>
              </p>
            </li>
            <li className="list-group-item border-0">
              ◎ Node.js, Express, Ejs, MongoDB
              <p>
                <a
                  href={
                    "https://github.com/r1991108/googleOAuthProj/blob/main/README.md"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  ・ googleOAuth認証機能の実装練習{" "}
                  <span style={{ color: "rgb(30, 30, 86)" }}>
                    (githubへ遷移)
                  </span>
                </a>
              </p>
              <p>
                <a
                  href={
                    "https://github.com/r1991108/loginPro/blob/main/README.md"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  ・ signUpアプリ(bcryptでパスワードを暗号化する練習){" "}
                  <span style={{ color: "rgb(30, 30, 86)" }}>
                    (githubへ遷移)
                  </span>
                </a>
              </p>
            </li>
            <li className="list-group-item border-0">
              ◎ HTML, CSS, JavaScript
              <p>
                <a
                  href={"https://r1991108.github.io/toDoList/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  ・Todoリスト{" "}
                  <span style={{ color: "rgb(30, 30, 86)" }}>
                    (demoページへ遷移)
                  </span>
                </a>
              </p>{" "}
              <p>
                <a
                  href={"https://r1991108.github.io/HowAreYou/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  ・今日の色{" "}
                  <span style={{ color: "rgb(30, 30, 86)" }}>
                    (demoページへ遷移)
                  </span>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PracticeComponent;
