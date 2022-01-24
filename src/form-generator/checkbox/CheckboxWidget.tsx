import * as React from "react";
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import styled from "@emotion/styled";
// import WidgetProps from "@rjsf/core";

const StyledCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
    backgroundColor: "transparent",

    "&:hover": {
        backgroundColor: "transparent",
    },
}));

const CheckboxWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { label } = props;

    return (
        <FormControlLabel
            label={label}
            control={<StyledCheckbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon />} />}
        />
    );
};

export { CheckboxWidget };
