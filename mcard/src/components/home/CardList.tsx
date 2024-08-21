import { useInfiniteQuery } from "react-query";
import { getCards } from "../../remote/card";
import { flatten } from "lodash";

import ListLow from "../shared/ListLow";

function CardList() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["cards"],
    ({ pageParam }) => {
      return getCards(pageParam);
    },
    {
      getNextPageParam: snapshot => {
        return snapshot.lastVisible;
      },
    }
  );

  if (data == null) {
    return null;
  }

  const cards = flatten(data?.pages.map(({ items }) => items));

  return (
    <div>
      <button
        onClick={() => {
          fetchNextPage();
        }}
      >
        데이터 불러오기
      </button>
      <ul>
        {cards.map((card, index) => {
          return (
            <ListLow
              key={card.id}
              contents={
                <ListLow.Texts title={`${index + 1}위`} subTitle={card.name} />
              }
              right={
                <div>
                  {card.payback != null ? <div>{card.payback}</div> : null}{" "}
                </div>
              }
              withArrow={true}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CardList;
