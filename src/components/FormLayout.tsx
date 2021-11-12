import React from "react";
import Form from "@rjsf/core";
import { ISubmitEvent, IChangeEvent, AjvError } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

// const Form = JSONSchemaForm;

const schema: JSONSchema7 = {
    type: "object",
    properties: {
        onlyNumbersString: { type: "string", pattern: "^\\d*$" },
    },
};

// const uiSchema = {
//     "ui:widget": "alt-datetime",
//     "ui:options": {
//         yearsRange: [1980, 2030],
//     },
// };

function transformErrors(errors: AjvError[]) {
    return errors.map((error: AjvError) => {
        if (error.name === "pattern") {
            error.message = "Only digits are allowed";
        }
        return error;
    });
}

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
        transformErrors={transformErrors}
    />
);

export { FormLayout };
