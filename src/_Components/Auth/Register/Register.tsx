"use client";

import { useAppDispatch, useAppSelector } from "@/lib/Redux/store";
import { useFormik } from "formik";
import {
  RegisterFormFields,
  registerSchema,
} from "@/lib/validation-schemas/registerValidation";
import RegisterFrom from "./RegisterForm";
import { useEffect } from "react";
import { setError } from "@/lib/Redux/slices/local-slices/authSlice";
import { useTranslations } from "next-intl";

const Register = () => {
  const t = useTranslations("Register");
  const dispatch = useAppDispatch();
  const { isLoading, error, isGoogleLoading } = useAppSelector(
    (state) => state.authReducer,
  );

  const handleSubmit = async (inputs: RegisterFormFields) => {
    const { email, password, userName } = inputs;

    console.log(email, password, userName);
    // try {

    //   toast.success(t("ToastsOrMessages.RegistrationSuccessful"));

    //   const sessionRes = await fetch("/api/auth/session", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ idToken }),
    //   });

    //   if (!sessionRes.ok) {
    //     throw new Error("Session creation failed");
    //   }

    // } catch (err: any) {
    //   if (err.code === "auth/email-already-in-use") {
    //     dispatch(setError(t("ToastsOrMessages.EmailALreadyInUseError")));
    //   } else if (err.code === "auth/weak-password") {
    //     dispatch(setError(t("ToastsOrMessages.WeakPasswordError")));
    //   } else {
    //     dispatch(setError(err.message || t("ToastsOrMessages.DefaultError")));
    //   }
    // } finally {
    //   dispatch(setLoading(false));
    // }
  };

  //formik
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      rePassword: "",
    },

    validationSchema: registerSchema(t),

    onSubmit: handleSubmit,
  });

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(null));
      }
    };
  }, [error, dispatch]);

  return (
    <>
      <RegisterFrom
        formik={formik}
        dispatch={dispatch}
        error={error}
        isLoading={isLoading}
        isGoogleLoading={isGoogleLoading}
        t={t}
      />
    </>
  );
};

export default Register;
