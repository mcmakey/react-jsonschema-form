import * as React from "react";
import { JSONSchema7 } from "json-schema";
import { Form } from "../form-generator";

const schema: JSONSchema7 = {
    type: "object",
    required: [],
    properties: {
        employeId: {
            type: "string",
            title: "Фамилия",
        },
        patronymic: {
            type: "boolean",
            title: "Нет отчество",
        },
        changeFullName: {
            type: "boolean",
            title: "Меняли ли ФИО",
        },
        dateOfBirth: {
            type: "string",
            format: "date",
            title: "Дата рождения",
        },
        placeOfBirth: {
            type: "string",
            enum: ["Москва", "Питер", "Казань"],
            title: "Место рождения",
        },
        phone: {
            type: "string",
            title: "Телефон",
        },
        email: {
            type: "string",
            title: "Email",
        },
        file: {
            type: "string",
            format: "data-url",
            title: "Файл",
        },
        additionalInfo: {
            type: "string",
            title: "Дополнительные сведения",
        },
    },
};

const uiSchema = {
    employeId: {
        "ui:widget": "BaseInput",
    },
    changeFullName: {
        "ui:widget": "radio",
    },
    phone: {
        "ui:widget": "BaseInput",
        "ui:options": {
            inputType: "tel",
        },
    },
    email: {
        "ui:widget": "BaseInput",
        "ui:options": {
            inputType: "email",
        },
    },
    additionalInfo: {
        "ui:widget": "textarea",
    },
};

const FormLayout: React.FC = () => <Form schema={schema} uiSchema={uiSchema} />;

export { FormLayout };
