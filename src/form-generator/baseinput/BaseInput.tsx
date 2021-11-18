import * as React from "react";
// import WidgetProps from "@rjsf/core";
import "./BaseInput.scss";

const BaseInput: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { required, value } = props;

    return <input className="my-form-input" value={value} required={required} />;
};

export { BaseInput };
