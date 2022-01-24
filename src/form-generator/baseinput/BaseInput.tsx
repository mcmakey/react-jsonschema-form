import * as React from "react";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import Done from "@mui/icons-material/Done";
// import WidgetProps from "@rjsf/core";
import styled from "@emotion/styled";

const DoneIcon = styled(Done)`
    transform: scale(0.6);
`;

const Input: React.FC<InputBaseProps> = props => <InputBase {...props} endAdornment={<DoneIcon color="success" />} />;

const StyledInput = styled(Input)`
    padding: 16px;
    font-size: 18px;
    line-height: 1.33em;
    border-radius: 3px;
    border: none;
    background-color: #f6f4f1;

    .MuiInputBase-input {
        padding: 0;
    }
`;

const BaseInput: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { required, value } = props;

    return <StyledInput value={value} required={required} />;
};

export { BaseInput };
