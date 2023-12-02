import { Button } from "@mui/joy";

type Props = {
  variant: "solid" | "outlined" | "soft" | "plain";
  buttonText: string;
  onClickFunc: () => void;
};

export const MySimpleButton = (props: Props) => {
  const variant = props.variant;
  const buttonText = props.buttonText;
  const onClickFunc = props.onClickFunc;
  return (
    <Button
      variant={variant}
      sx={{
        marginRadius: "10px",
        fontSize: "18pt",
        width: "70%",
        borderRadius: "30px",
      }}
      onClick={onClickFunc}
    >
      {buttonText}
    </Button>
  );
};
