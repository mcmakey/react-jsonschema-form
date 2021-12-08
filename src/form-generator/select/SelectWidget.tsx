import { Select, SelectProps, Input, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// const StyledSelect = styled(Select)<SelectProps>`
//     flex-grow: 1;
//     padding: 16px;
//     font-size: 18px;
//     line-height: 1.33em;
//     border-radius: 3px;
//     border: none;
//     background-color: #f6f4f1;
// `;

const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
    flexGrow: "1",
    padding: "16px",
    fontSize: "18px",
    lineHeight: "1.33em",
    borderRadius: "3px",
    border: "none",
    backgroundColor: "#f6f4f1",

    "&:before": {
        borderBottom: "none !important",

        "&:hover": {
            borderBottom: "none !important",
        },
    },

    "&:after": {
        borderBottom: "none !important",
    },

    "& .MuiSelect-select": {
        paddingTop: "0",
        paddingBottom: "0",
    },
}));

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)(({ theme }) => ({
    transform: "scale(0.6) rotate(-90deg)",

    "&.MuiSelect-iconOpen": {
        transform: "scale(0.6) rotate(90deg)",
    },
}));

const SelectWidget: React.FC<any /*TODO: WidgetProps*/> = props => {
    const { value, options, schema, onChange } = props;

    return (
        <StyledSelect
            name={schema.title}
            value={value}
            input={<Input name={schema.title} id={`${schema.title}-helper`} />}
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
