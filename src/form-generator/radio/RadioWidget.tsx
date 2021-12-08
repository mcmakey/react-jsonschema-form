import * as React from "react";
import { RadioGroup, RadioGroupProps, Radio, RadioProps, FormControlLabel } from "@mui/material";
import "./RadioWidget.scss";
import styled from "@emotion/styled";

const StyledRadioGroup = styled(RadioGroup)<RadioGroupProps>(({ theme }) => ({
    backgroundColor: "#f6f4f1",
    padding: "8px",

    "& .MuiFormControlLabel-root": {
        marginRight: "0",
        marginLeft: "0",

        "& .MuiFormControlLabel-label": {
            padding: "8px 16px",
            borderRadius: "3px",
        },
    },
}));

const StyledRadio = styled(Radio)<RadioProps>(({ theme }) => ({
    display: "none",

    "&.Mui-checked + .MuiFormControlLabel-label": {
        backgroundColor: "white",
    },
}));

const RadioWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { options } = props;

    return (
        <StyledRadioGroup row>
            {options &&
                options.enumOptions.map((option: any, index: any) => {
                    return (
                        <FormControlLabel
                            value={option.value}
                            label={option.label}
                            control={<StyledRadio />}
                            key={index}
                        />
                    );
                })}
        </StyledRadioGroup>
    );
};

export { RadioWidget };
