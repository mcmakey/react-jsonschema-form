import * as React from "react";
// import * as Emotion from "@emotion/react"; // for dev
import styled from "@emotion/styled";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

interface ComponentProps {
    className?: string;
    label: string;
}

interface ButtonProps {
    className?: string;
    text: string;
    onClick: () => void;
}

///

const Component: React.FC<ComponentProps> = ({ label, className }) => <div className={className}>{label}</div>;

const StyledComponent0 = styled(Component)`
    color: ${(props: ComponentProps) => (props.label === "Important" ? "red" : "green")};
`;

const StyledComponent1 = styled(Component)({
    color: "red",
});

/////

const StyledButton1 = styled.button`
    border: 5px solid red;
`;

//////

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => (
    <button className={className} onClick={onClick}>
        {text}
    </button>
);

const StyledButton2 = styled(Button)({
    color: "red",
});

////

const ButtonComponent: React.FC<ButtonProps> = ({ className, text, onClick }) => (
    <button className={className} onClick={onClick}>
        <div className="ppp">{text}</div>
    </button>
);

const StyledButton3 = styled(ButtonComponent)({
    padding: "32px",
    backgroundColor: "hotpink",
    fontSize: "24px",
    borderRadius: "4px",
    color: "black",
    fontWeight: "bold",
});

const MuiEmotionComponent: React.FC = () => {
    return (
        <>
            <Box sx={{ width: 300 }}>
                <Slider defaultValue={30} />
            </Box>
            <div>
                <StyledComponent0 label="Important" />
                <StyledComponent0 label="No Important" />
                <StyledComponent1 label="Yea! No need to re-type this label prop." />
            </div>
            <StyledButton1 onClick={() => alert("StyledButton1")}>{"StyledButton1"}</StyledButton1>
            <StyledButton2 text="StyledButton2" onClick={() => alert("StyledButton2")} />
            <StyledButton3 text="StyledButton3" onClick={() => alert("StyledButton3")} />
        </>
    );
};

export { MuiEmotionComponent };
