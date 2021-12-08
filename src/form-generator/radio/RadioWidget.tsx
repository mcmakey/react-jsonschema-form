import * as React from "react";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
// import WidgetProps from "@rjsf/core";
import "./RadioWidget.scss";

const RadioWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { options } = props;

    return (
        <RadioGroup>
            {options &&
                options.enumOptions.map((option: any) => {
                    return <FormControlLabel value={option.value} label={option.label} control={<Radio />} />;
                })}
        </RadioGroup>
    );
};

export { RadioWidget };
