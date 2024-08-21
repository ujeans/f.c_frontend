import { useQuery } from "react-query";
import ListLow from "../shared/ListLow";
import { getCards } from "../../remote/card";

function CardList() {
  const { data } = useQuery(["cards"], () => getCards());

  if (data == null) {
    return null;
  }

  return (
    <div>
      <ul>
        {data.map((card, index) => {
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
