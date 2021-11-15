import React from "react";
import Form from "@rjsf/core";
import { ISubmitEvent, IChangeEvent } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

// const Form = JSONSchemaForm;

const schema: JSONSchema7 = {
    type: "string",
    format: "phone-us",
};

// const uiSchema = {
//     "ui:widget": "alt-datetime",
//     "ui:options": {
//         yearsRange: [1980, 2030],
//     },
// };

const customFormats = {
    "phone-us": /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
};

const onChange = (e: IChangeEvent) => {
    console.log(e);
};

const onSubmit = (e: ISubmitEvent<any>) => {
    console.log(e);
};

const FormLayout: React.FC = () => (
    <Form
        className="my-form"
        schema={schema}
        /*uiSchema={uiSchema}*/ onChange={onChange}
        onSubmit={onSubmit}
        customFormats={customFormats}
    />
);

export { FormLayout };
