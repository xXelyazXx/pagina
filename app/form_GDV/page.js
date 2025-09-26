"use client";

import {
  Box,
  Button,
  VStack,
  Input,
  Field,
  Checkbox,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster"
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";

const formSchema = z.object({
  fullName: z.string().min(1, { message: "El nombre completo es requerido" }),
  phone: z.string().min(1, { message: "El teléfono de contacto es requerido" }),
  consent: z.boolean().refine(val => val === true, { message: "Debe aceptar el consentimiento" })
});

// type FormValues = z.infer<typeof formSchema>;

export default function InscriptionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      consent: false
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);

    try {
      console.log("Datos a enviar:", data);

      // Crear un iframe oculto para evitar redirección
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe_gdv';
      document.body.appendChild(iframe);

      // Método HTML Form - el más confiable para Google Forms
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = process.env.NEXT_PUBLIC_GDV_FORM_URL;
      form.target = 'hidden_iframe_gdv'; // Enviar al iframe oculto
      form.style.display = 'none'; // Ocultar el formulario

      // Crear todos los campos como inputs hidden
      const fields = [
        { name: process.env.NEXT_PUBLIC_GDV_FORM_ENTRY_NOMBRE, value: data.fullName || '' }, // Nombre completo
        { name: process.env.NEXT_PUBLIC_GDV_FORM_ENTRY_CONTACTO, value: data.phone || '' }, // Teléfono
        { name: 'fbzx', value: process.env.NEXT_PUBLIC_GDV_FORM_FBZX } // Token de seguridad
      ];

      // Agregar cada campo al formulario
      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
        console.log(`${field.name}: ${field.value}`);
      });

      // Agregar formulario al DOM
      document.body.appendChild(form);

      console.log("Enviando formulario HTML a Google Forms...");

      // Enviar formulario al iframe oculto
      form.submit();

      // Limpiar después de 3 segundos
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 3000);

      // Mostrar mensaje de éxito después de un delay
      setTimeout(() => {
        toaster.create({
          title: "¡Inscripción enviada!",
          description: "Su inscripción a Grupos de Vida ha sido enviada correctamente.",
          status: "success",
          duration: 5000,
        });
      }, 500);

      reset();
    } catch (error) {
      console.error('Error:', error);
      toaster.create({
        title: "Error al enviar la inscripción",
        description: "Por favor, intente nuevamente.",
        status: "error",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <Container maxW="2xl" py={8}>
      <Box
        bg="white"
        borderRadius="xl"
        boxShadow="lg"
        overflow="hidden"
      >
        {/* Header */}
        <Box
          bg="white"
          color="black"
          p={6}
          textAlign="center"
        >
          <Heading size="lg" mb={2} color={"black"}>
            Inscripción a Grupos de Vida
          </Heading>
          <Text fontSize="md" color={"black"}>
            Complete el siguiente formulario para inscribirse a nuestros Grupos de Vida
          </Text>
        </Box>

        {/* Form */}
        <Box as="form" onSubmit={onSubmit} p={8}>
          <VStack spacing={6} align="stretch">
            {/* Nombre completo */}
            <Field.Root invalid={!!errors.fullName}>
              <Field.Label>
                <Text color="black">Nombre completo</Text> <Text as="span" color="red.500">*</Text>
              </Field.Label>
              <Input
                {...register("fullName")}
                placeholder="Ej: María González López"
                color="black"
                _placeholder={{ color: "gray.500" }}
              />
              <Field.ErrorText>{errors.fullName?.message}</Field.ErrorText>
            </Field.Root>

            {/* Teléfono */}
            <Field.Root invalid={!!errors.phone}>
              <Field.Label>
                <Text color="black">Teléfono de contacto</Text> <Text as="span" color="red.500">*</Text>
              </Field.Label>
              <Input
                type="tel"
                {...register("phone")}
                placeholder="Ej: 9 1234 5678"
                color="black"
                _placeholder={{ color: "gray.500" }}
              />
              <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
            </Field.Root>

            {/* Consentimiento */}
            <Field.Root invalid={!!errors.consent}>
              <Controller
                name="consent"
                control={control}
                render={({ field }) => (
                  <Checkbox.Root
                    checked={field.value}
                    onCheckedChange={(details) => field.onChange(details.checked)}
                    mt={2}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label fontSize="sm" color="black">
                      Acepto que mis datos sean utilizados para la inscripción a Grupos de Vida{" "}
                      <Text as="span" color="red.500">*</Text>
                    </Checkbox.Label>
                  </Checkbox.Root>
                )}
              />
              <Field.ErrorText>{errors.consent?.message}</Field.ErrorText>
            </Field.Root>

            {/* Submit Button */}
            <Button
              type="submit"
              backgroundColor="white"
              color="white"
              borderColor={"black"}
              size="lg"
              isLoading={isSubmitting}
              loadingText="Enviando..."
              _hover={{
                backgroundColor: "#606060",
              }}
            >
              Enviar inscripción
            </Button>
          </VStack>
        </Box>

        {/* Footer */}
        <Box
          textAlign="center"
          p={5}
          fontSize="sm"
          color="black"
          borderTop="1px"
          borderColor="gray.200"
        >
          <Text>Su información será tratada con confidencialidad y respeto</Text>
        </Box>
      </Box>
      <Toaster />
    </Container>
  );
}