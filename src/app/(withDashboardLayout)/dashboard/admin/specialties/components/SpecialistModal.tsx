import PHModal from "@/components/shared/PHModal/PHModal";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TProps) => {
  return <PHModal></PHModal>;
};

export default SpecialistModal;
