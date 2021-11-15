import React from "react";
import Form from "@rjsf/core";
import { ISubmitEvent, IChangeEvent } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

const schema: JSONSchema7 = {
    type: "array",
    items: {
        type: "string",
    },
};

const CustomInput = function (props: any) {
    return (
        <input
            type="text"
            className="custom"
            value={props.value}
            required={props.required}
            onChange={event => props.onChange(event.target.value)}
        />
    );
};

const uiSchema = {
    "ui:widget": CustomInput,
};

// const widgets = {
//     CheckboxWidget: CustomCheckbox,
// };

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
        uiSchema={uiSchema}
        /*widgets={widgets}*/
        onChange={onChange}
        onSubmit={onSubmit}
    />
);

export { FormLayout };
