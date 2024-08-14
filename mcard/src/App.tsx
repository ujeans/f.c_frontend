import Button from "./components/shared/Button";
import Text from "./components/shared/Text";

function App() {
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>

      <Button>클릭하세요</Button>
      <Button color="success">클릭하세요</Button>
      <Button color="error">클릭하세요</Button>
      <Button color="error" weak={true}>
        클릭하세요
      </Button>
      <Button full={true}>클릭하세요</Button>
      <Button full={true} disabled={true}>
        클릭하세요
      </Button>
    </div>
  );
}

export default App;
