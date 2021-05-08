import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/index";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import api from "../../services/users";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/dist/client/router";

interface UserCreateFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const userCreateFormSchema = yup.object().shape({
  name: yup.string().required("Name required."),
  email: yup.string().required("Email required.").email(),
  password: yup
    .string()
    .required("Password required.")
    .min(8, "Password should have at least 8 characters"),
  password_confirmation: yup
    .string()
    .oneOf(
      [null, yup.ref("password")],
      "Confirmation should be equal to Password"
    )
});

export default function UserCreate() {
  const router = useRouter();
  const createUser = useMutation(
    async (formData: UserCreateFormData) => {
      const { data } = await api.create({
        user: {
          ...formData,
          created_at: new Date()
        }
      });

      return data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      }
    }
  );
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(userCreateFormSchema)
  });
  const { errors } = formState;
  const handleUserCreate: SubmitHandler<UserCreateFormData> = async (
    formData
  ) => {
    await createUser.mutateAsync(formData);

    router.push("/users");
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleUserCreate)}
        >
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>

          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Full Name"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                label="Email"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Password"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Password Confirmation"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancel</Button>
              </Link>

              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
