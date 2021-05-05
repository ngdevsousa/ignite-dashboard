import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

interface SignInFormData {
  email: string;
  password: string;
}

export default function Home() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (formData, event) => {};

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="email"
            // error={errors.email}
            // ref={...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="password"
            // error={errors.password}
            // ref={register("password")}
          />
          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Login
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
