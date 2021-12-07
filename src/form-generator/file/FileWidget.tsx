import * as React from "react";
import { Input, InputProps } from "@mui/material";
import styled from "@emotion/styled";

const FileInput: React.FC<InputProps> = props => <Input {...props} type="file" />;

const StyledFileInput = styled(FileInput)(({ theme }) => ({
    padding: "20px",
    border: "1px dashed grey",
    "&:before": {
        borderBottom: "none !important",

        "&:hover": {
            borderBottom: "none !important",
        },
    },
    "& .MuiInput-input": {
        backgroundColor: "white",
        fontWeight: "bold",
    },
}));

const FileWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { value } = props;

    return <StyledFileInput value={value} />;
};

export { FileWidget };

// TODO:
// дропзона?
// кастомизация кнопки ? https://smartlanding.biz/stilizaciya-input-type-file.html
