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
                    console.log(option);

                    return (
                        <div className="my-form-radio" key={option.label}>
                            <input className="my-form-radio__input" name="test-radio" type="radio" />
                            <label className="my-form-checkbox__label">{option.title /*TODO: */}</label>
                        </div>
                    );
                })}
        </div>
    );
};

export { RadioWidget };
