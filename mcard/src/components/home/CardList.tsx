import { useInfiniteQuery } from "react-query";
import { getCards } from "../../remote/card";
import { flatten } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";

import ListLow from "../shared/ListLow";
import { useCallback } from "react";

function CardList() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
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

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return;
    }

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);

  if (data == null) {
    return null;
  }

  const cards = flatten(data?.pages.map(({ items }) => items));

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
      >
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
      </InfiniteScroll>
    </div>
  );
}

export default CardList;
