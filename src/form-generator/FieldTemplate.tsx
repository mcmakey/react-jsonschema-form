import * as React from "react";
//import FieldTemplateProps from "@rjsf/core";

const FieldTemplate: React.FC = (props: any /*FieldTemplateProps*/) => {
    const { label, children } = props;

    return (
        <div className="my-form-field">
            <label className="my-form-field__label">{label}</label>
            {children}
        </div>
    );
};

export { FieldTemplate };
