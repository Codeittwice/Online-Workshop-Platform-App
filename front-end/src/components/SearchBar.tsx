import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useRef } from "react";
import { MdSearch } from "react-icons/md";
import useDebounce from "./useDebounce";

const NewWorkshopForm = (props: any) => {
  const debouncedOnChange = useDebounce(props.onSubmit, " ");
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values, actions) => {
        console.log(values.search);
        props.onSubmit(values.search);
      }}
    >
      {({ values, handleChange, submitForm }) => (
        <Form>
          <Flex>
            <Field name="search">
              {({ field, form }: any) => (
                <FormControl>
                  <Input
                    {...field}
                    type={"search"}
                    placeholder="Search"
                    value={values.search}
                    onChange={(e) => {
                      handleChange(e);
                      submitForm();
                      //debouncedOnChange();
                    }}
                  />
                </FormControl>
              )}
            </Field>
            <Button colorScheme="teal" type="submit">
              <Icon as={MdSearch} />
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default NewWorkshopForm;
