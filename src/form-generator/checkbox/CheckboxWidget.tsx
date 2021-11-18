import * as React from "react";
// import WidgetProps from "@rjsf/core";
import "./CheckboxWidget.scss";

const CheckboxWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { required, value, schema } = props;

    return (
        <div className="my-form-checkbox">
            <input className="my-form-checkbox__input" type="checkbox" value={value} required={required} />
            <label className="my-form-checkbox__label"></label>
            <span>{schema.title}</span>
        </div>
    );
};

export { CheckboxWidget };
