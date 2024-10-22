import { Control, useController } from "react-hook-form";
import { Box, TextField, TextFieldProps } from "@mui/material";

// export type InputFieldProps = TextFieldProps & {
//     name: string;
//     label?: string;
//     control: Control<any>;
// };

const InputField = ({ name, label, control }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
    });
    return (
        // <Box onClick={() => onChange(value + 1)} ref={ref}>
        //     {name}:{value}
        // </Box>
        <TextField
            fullWidth
            size="small"
            margin="normal"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
        />
    );
};
export { InputField };
