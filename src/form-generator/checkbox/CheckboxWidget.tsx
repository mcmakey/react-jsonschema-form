import * as React from "react";
// import WidgetProps from "@rjsf/core";

const CheckboxWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { required, value, schema } = props;

    return (
        <div className="my-form-checkbox">
            <label>
                <input className="my-form-checkbox__input" type="checkbox" value={value} required={required} />
                <span className="my-form-checkbox__icon" />
                <span className="my-form-checkbox__label">{schema.title}</span>
            </label>
        </div>
    );
};

export { CheckboxWidget };
