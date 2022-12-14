import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import WestIcon from "@mui/icons-material/West";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";
import Header from "../../components/header/Header";
import { userRegister } from "../../services/api";
//@ts-ignore
import styles from "./styles.module.scss";

const NewUser = () => {

  useEffect(() => {
    document.title = 'Finances | Novo Usuário';
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleAdd(data) {
    setLoading(true);
    setTimeout(function () {
      userRegister(data.username, data.password);
      setLoading(false);
    }, 2000);
  }

  return (
    <Box>
      <Header />
      <Box className={styles.container}>
        <Box className={styles.title}>
          <Typography
            variant="h4"
            className={styles.typography}
            sx={{ fontWeight: "bold" }}
          >
            Novo Usuário
          </Typography>
        </Box>
        <form className={styles.form} onSubmit={handleSubmit(handleAdd)}>
          <Box className={styles.inputContainer}>
            <CustomInput
              id="email"
              type="email"
              label="Email"
              {...register("username")}
            />
            <CustomInput
              id="password"
              type="password"
              label="Senha"
              {...register("password")}
            />
          </Box>
          <Box className={styles.buttonContainer}>
            <CustomButton
              className={styles.button}
              endIcon={<PersonAddOutlinedIcon />}
              loading={loading}
              loadingPosition="end"
              type="submit"
            >
              Adicionar
            </CustomButton>
            <CustomButton
              className={styles.button}
              endIcon={<WestIcon />}
              onClick={() => navigate("/users")}
            >
              Voltar
            </CustomButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default NewUser;
