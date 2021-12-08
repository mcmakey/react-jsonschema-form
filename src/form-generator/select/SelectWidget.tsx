import { Select, SelectProps, Input, InputProps, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const StyledSelect = styled(Select)<SelectProps>`
    flex-grow: 1;
    padding: 16px;
    font-size: 18px;
    line-height: 1.33em;
    border-radius: 3px;
    border: none;
    background-color: #f6f4f1;
`;

const StyledInput = styled(Input)<InputProps>`
    border: none;
`;

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
    transform: scale(0.6) rotate(-90deg);
`;

const SelectWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { value, options, schema, onChange } = props;

    return (
        <StyledSelect
            name={schema.title}
            value={value}
            input={<StyledInput name={schema.title} id={`${schema.title}-helper`} />}
            onChange={event => onChange(event.target.value)}
            IconComponent={StyledArrowBackIosIcon}
        >
            {options &&
                options.enumOptions.map((o: any) => (
                    <MenuItem key={o.value} value={o.value}>
                        {o.label}
                    </MenuItem>
                ))}
        </StyledSelect>
    );
};

export { SelectWidget };
