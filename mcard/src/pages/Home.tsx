import { useEffect } from "react";

import Top from "../components/shared/Top";

import { getCards } from "../remote/card";
import { getAdBanners } from "../remote/adBanner";

function HomePage() {
  useEffect(() => {
    getCards().then(res => {
      console.log("res", res);
    });

    getAdBanners().then(res => {
      console.log("res", res);
    });
  }, []);

  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
    </div>
  );
}

export default HomePage;
