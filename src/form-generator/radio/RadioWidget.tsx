import * as React from "react";
// import WidgetProps from "@rjsf/core";
import "./RadioWidget.scss";

const RadioWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { options } = props;

    console.log(options);

    return (
        <div className="my-form-radio-group">
            {options &&
                options.enumOptions.map((option: any) => {
                    return (
                        <div className="my-form-radio" key={option.label}>
                            <label>
                                <input className="my-form-radio__input" name="test-radio" type="radio" />
                                <div className="my-form-radio__label">{"label" /*TODO: text?*/}</div>
                            </label>
                        </div>
                    );
                })}
        </div>
    );
};

export { RadioWidget };
