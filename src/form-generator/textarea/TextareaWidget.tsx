import * as React from "react";
import TextareaAutosize, { TextareaAutosizeProps } from "@mui/base/TextareaAutosize";
import styled from "@emotion/styled";

const StyledTextArea = styled(TextareaAutosize)<TextareaAutosizeProps>`
    width: 100%;
    background-color: #f6f4f1;
    border-radius: 3px;
    border: none;
`;

const TextareaWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    return <StyledTextArea minRows={3} />;
};

export { TextareaWidget };
