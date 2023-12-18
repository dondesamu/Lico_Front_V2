import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { ButtonGeneral } from "../ButtonGeneral";
import { AlertGeneral } from "../AlertGeneral";

export const CategoryForm = ({
  onSubmit,
  initialValues,
  loadRegisterCategory,
  alertSaveTrue,
  alertSaveFalse,
}) => {
  return (
    <Box margin={4} border={"1px solid"} p={4} borderRadius={9}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {() => (
          <Form>
            <Grid gap={2}>
              <Heading textAlign="center">Categorias</Heading>
              <FormControl id="name">
                <FormLabel>Nombre</FormLabel>
                <Field
                  name="name"
                  as={Input}
                  type="text"
                  placeholder="Nombre de la Categoria"
                  required={true}
                />
              </FormControl>

              <ButtonGeneral
                title={
                  loadRegisterCategory ? (
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="black"
                      size="md"
                    />
                  ) : (
                    "Registrar"
                  )
                }
                colorA={"blue.400"}
                colorB={"blue.500"}
                type={"submit"}
              />
              {alertSaveTrue && (
                <AlertGeneral
                  status={"success"}
                  title={"Categoria creada o actualizada con exito"}
                  description={
                    "Tienes una nueva categoria creada, ahora puedes añadirle Sub Categorias."
                  }
                />
              )}
              {alertSaveFalse && (
                <AlertGeneral
                  status={"error"}
                  title={"Ocurrio un error"}
                  description={"Vuelve a ingresar los datos correctamente."}
                />
              )}
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
