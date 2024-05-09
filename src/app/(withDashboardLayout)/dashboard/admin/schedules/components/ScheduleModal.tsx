import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {

    const handleFormSubmit = async (values: FieldValues) => {
        /*  const data = modifyPayload(values);
         try {
           const res = await createSpecialty(data).unwrap();
           // console.log(res);
           if (res?.id) {
             toast.success("Speciality created successfully");
             setOpen(false);
           }
         } catch (err: any) {
           console.log(err.message);
         } */
    };

    return (
        <PHModal open={open} setOpen={setOpen} title="Create Schedule">
            <PHForm onSubmit={handleFormSubmit} >
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <PHDatePicker />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <PHInput name="title" label="Title" />
                    </Grid>
                </Grid>
                <Button sx={{ marginTop: 2 }} type="submit">
                    Create
                </Button>
            </PHForm>
        </PHModal>
    );
};

export default ScheduleModal;