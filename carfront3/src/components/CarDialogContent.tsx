import { Car } from "../types";
import { DialogContent, TextField, Stack } from "@mui/material";

type DialogFormProps = {
  car : Car;
  handleChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CarDialogContent({ car, handleChange }: DialogFormProps) {
  return(
    <>
      <DialogContent>
        <Stack spacing={0.3} mt={1.2}>
          <TextField type="text" label="Brand" name="brand" value={car.brand} onChange={handleChange} />
          <br />
          <TextField type="text" label="Model" name="model" value={car.model} onChange={handleChange}/>
          <br />
          <TextField type="text" label="Color" name="color" value={car.color} onChange={handleChange}/>
          <br />
          <TextField type="text" label="RegistrationNumber" name="registrationNumber" value={car.registrationNumber} onChange={handleChange}/>
          <br />
          <TextField type="number" label="ModelYear" name="modelYear" value={car.modelYear} onChange={handleChange}/>
          <br />
          <TextField type="number" label="Price" name="price" value={car.price} onChange={handleChange}/>
          <br />
        </Stack>
      </DialogContent>
    </>
  );
}