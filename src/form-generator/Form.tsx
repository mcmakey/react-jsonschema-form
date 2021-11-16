import React from "react";
import MForm from "@rjsf/core";
import { ISubmitEvent } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

interface IProps {
    schema: JSONSchema7;
    onSubmit: (e: ISubmitEvent<any>) => void;
}

const Form: React.FC<IProps> = ({ schema, onSubmit }) => <MForm schema={schema} onSubmit={onSubmit} />;

export { Form };
