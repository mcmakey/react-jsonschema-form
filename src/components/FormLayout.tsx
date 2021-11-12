import React from "react";
import JSONSchemaForm from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

const Form = JSONSchemaForm;

const schema: JSONSchema7 = {
    title: "My form",
    // description: "My description",
    type: "string",
};

const FormLayout: React.FC = () => <Form className="my-form" schema={schema} />;

export { FormLayout };
