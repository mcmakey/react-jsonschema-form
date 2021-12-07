import * as React from "react";
import MForm from "@rjsf/core";
import { ISubmitEvent, UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { FieldTemplate } from "./field-template/FieldTemplate";
import { BaseInput } from "./baseinput/BaseInput";
import { CheckboxWidget } from "./checkbox/CheckboxWidget";
import { RadioWidget } from "./radio/RadioWidget";
import { SelectWidget } from "./select/SelectWidget";
import { FileWidget } from "./file/FileWidget";

interface IProps {
    schema: JSONSchema7;
    uiSchema: UiSchema;
}

const widgets = {
    BaseInput,
    CheckboxWidget,
    RadioWidget,
    SelectWidget,
    FileWidget,
};

const onSubmit = (e: ISubmitEvent<any>) => {
    console.log(e);
};

const Form: React.FC<IProps> = ({ schema, uiSchema }) => (
    <MForm
        className="my-form"
        FieldTemplate={FieldTemplate}
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onSubmit={onSubmit}
    />
);

export { Form };
