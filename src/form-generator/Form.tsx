import * as React from "react";
import MForm from "@rjsf/core";
import { ISubmitEvent, UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { FieldTemplate } from "./field-template/FieldTemplate";

interface IProps {
    className?: string;
    schema: JSONSchema7;
    uiSchema: UiSchema;
    onSubmit: (e: ISubmitEvent<any>) => void;
}

const widgets = {
    /*widgets*/
};

const Form: React.FC<IProps> = ({ className, schema, uiSchema, onSubmit }) => (
    <MForm
        className={className}
        FieldTemplate={FieldTemplate}
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onSubmit={onSubmit}
    />
);

export { Form };
