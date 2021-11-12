import React from "react";
import JSONSchemaForm from "@rjsf/core";
import { ISubmitEvent, IChangeEvent } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

const Form = JSONSchemaForm;

const schema: JSONSchema7 = {
    type: "object",
    properties: {
        foo: { type: "string" },
        bar: { type: "string" },
    },
};

const uiSchema = {
    "ui:order": ["bar", "foo"],
};

const onChange = (e: IChangeEvent) => {
    console.log(e);
};

const onSubmit = (e: ISubmitEvent<any>) => {
    console.log(e);
};

const FormLayout: React.FC = () => (
    <Form className="my-form" schema={schema} uiSchema={uiSchema} onChange={onChange} onSubmit={onSubmit} />
);

export { FormLayout };
