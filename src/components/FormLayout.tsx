import React from "react";
import { ISubmitEvent } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { Form } from "../form-generator";

const schema: JSONSchema7 = {
    type: "string",
};

const onSubmit = (e: ISubmitEvent<any>) => {
    console.log(e);
};

const FormLayout: React.FC = () => <Form schema={schema} onSubmit={onSubmit} />;

export { FormLayout };
