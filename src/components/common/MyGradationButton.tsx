import { Button } from "@mui/joy";

type Props = {
  variant: "primary" | "secondary";
  buttonText: string;
  onClickFunc: () => void;
};

export const MyGradationButton = (props: Props) => {
  const variant = props.variant;
  const buttonText = props.buttonText;
  const onClickFunc = props.onClickFunc;
  if (variant === "primary") {
    return (
      <Button
        variant="solid"
        sx={{
          marginRadius: "10px",
          fontSize: "18pt",
          maxWidth: "100%",
          borderRadius: "30px",
          color: "white",
          background: "linear-gradient(180deg, #1E90FF 30%, #62bee3 90%)",
        }}
        onClick={onClickFunc}
      >
        {buttonText}
      </Button>
    );
  } else if (variant === "secondary") {
    return (
      <Button
        variant="solid"
        sx={{
          marginRadius: "10px",
          fontSize: "18pt",
          width: "100%",
          borderRadius: "30px",
          color: "#1E90FF",
          background: "linear-gradient(180deg, #FFFFFF 30%, #FFFFFF 90%)",
        }}
        onClick={onClickFunc}
      >
        {buttonText}
      </Button>
    );
  }
};
