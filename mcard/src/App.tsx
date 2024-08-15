import Alert from "./components/shared/Alert";
import Button from "./components/shared/Button";
import Input from "./components/shared/Input";
import Text from "./components/shared/Text";
import TextField from "./components/shared/TextField";
import { useAlertContext } from "./contexts/AlertContext";

function App() {
  const { open } = useAlertContext();

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

      <div style={{ height: 10, width: "100%", background: "#efefef" }}></div>

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

      <div style={{ height: 10, width: "100%", background: "#efefef" }}></div>

      <Input placeholder="로그인" aria-invalid={false} />
      <Input placeholder="회원가입" aria-invalid={true} />

      <TextField label="아이디" />
      <TextField label="회원가입" hasError={true} />

      <div style={{ height: 10, width: "100%", background: "#efefef" }}></div>

      <Button
        onClick={() => {
          open({
            title: "카드 신청 완료",
            description: "내역페이지에서 확인해주세요",
            onButtonClick: () => {
              //
            },
          });
        }}
      >
        Alert 오픈
      </Button>
    </div>
  );
}

export default App;
