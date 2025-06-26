import PageSection from "@/_Components/PageSection/PageSection";
import { AppDispatch } from "@/lib/Redux/store";
import { FormikProps } from "formik";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { SiSpinrilla } from "@react-icons/all-files/si/SiSpinrilla";
import PasswordInput from "../PasswordInput";
import Link from "next/link";
import { RegisterFormFields } from "@/lib/validation-schemas/registerValidation";
import { setError } from "@/lib/Redux/slices/local-slices/authSlice";
import { TFunction } from "i18nTypes";
import { FaCloudUploadAlt } from "@react-icons/all-files/fa/FaCloudUploadAlt";
import { useTranslations } from "next-intl";

interface RegisterFormProps {
  formik: FormikProps<RegisterFormFields>;
  isLoading: boolean;
  isGoogleLoading: boolean;
  dispatch: AppDispatch;
  error: string | null;
  t: TFunction;
}

const RegisterFrom = ({
  formik,
  isLoading,
  dispatch,
  error,
  isGoogleLoading,
}: RegisterFormProps) => {
  const t = useTranslations("Register");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    if (error) {
      dispatch(setError(""));
    }
  };
  return (
    <PageSection className="px-0 flex items-center h-full w-full">
      <div
        className="max-w-md w-full bg-gray-950 text-white shadow-blueGlow rounded-xl
          overflow-hidden p-3 xs:p-5 sm:p-8 space-y-8 mx-auto"
      >
        <h2 className="text-center text-4xl font-extrabold text-white">
          {t("Title")}
        </h2>
        <p className="text-center text-gray-200">
          {t("subtitle")}{" "}
          <span className="text-blue-500 font-bold">{"Educational"}</span>
        </p>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          {/* Username */}
          <div className="relative">
            <input
              name="userName"
              placeholder="john"
              autoComplete="username"
              className="peer px-1 h-10 w-full border-b-2 border-gray-300 text-white bg-transparent
                placeholder-transparent focus:outline-none focus:border-blue-500"
              id="userName"
              type="text"
              value={formik.values.userName}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="userName"
              className="absolute start-0 -top-3.5 text-gray-500 text-sm transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500
                peer-focus:text-sm"
            >
              {t("Form.UserName")}
            </label>
            {formik.errors.userName && formik.touched.userName && (
              <p
                className="mt-3 rounded p-1.5 xs:p-3 flex items-center gap-2 border-2 text-sm
                  border-red-800"
              >
                <FaInfoCircle className="animate-pulse w-5 h-5 text-red-500" />
                {formik.errors.userName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              name="email"
              placeholder="john@example.com"
              autoComplete="email"
              className="peer px-1 h-10 w-full border-b-2 border-gray-300 text-white bg-transparent
                placeholder-transparent focus:outline-none focus:border-blue-500"
              id="email"
              type="text"
              value={formik.values.email}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="email"
              className="absolute start-0 -top-3.5 text-gray-500 text-sm transition-all
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500
                peer-focus:text-sm"
            >
              {t("Form.EmailAddress")}
            </label>
            {formik.errors.email && formik.touched.email && (
              <p
                className="mt-3 rounded p-1.5 xs:p-3 flex items-center gap-2 border-2 text-sm
                  border-red-800"
              >
                <FaInfoCircle className="animate-pulse w-5 h-5 text-red-500" />
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <PasswordInput
            id="password"
            name="password"
            label={t("Form.Password")}
            value={formik.values.password}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />

          {/* Confirm Password */}
          <PasswordInput
            id="rePassword"
            name="rePassword"
            label={t("Form.ConfirmPassword")}
            value={formik.values.rePassword}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.rePassword}
            touched={formik.touched.rePassword}
          />

          {error && (
            <p
              className="mt-2 rounded font-bold p-1.5 xs:p-3 flex justify-center items-center gap-2
                border-2 text-sm border-red-800"
            >
              <FaInfoCircle className="animate-pulse w-5 h-5 text-red-500" />
              {error}
            </p>
          )}

          {/* Profile Picture Upload */}

          <div className="space-y-2">
            <label
              htmlFor="profilePic"
              className="block text-sm font-medium text-gray-500"
            >
              ProfilePicture
            </label>

            <div className="relative group">
              <input
                id="profilePic"
                name="profilePic"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  formik.setFieldValue(
                    "profilePic",
                    e.currentTarget.files?.[0],
                  );
                  if (error) dispatch(setError(""));
                }}
                className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div
                className="flex items-center justify-between px-4 py-2 rounded-md border border-gray-700
                  bg-gray-900 text-sm text-gray-400 group-hover:border-blue-500
                  group-hover:text-blue-400 transition-colors duration-200"
              >
                <span className="truncate max-w-[80%]">NoFileChosen</span>
                <span className="text-blue-500 font-semibold flex items-center gap-2">
                  <FaCloudUploadAlt className="text-lg" />
                  ChooseFile
                </span>
              </div>
            </div>

            {/* {formik.errors.profilePic && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <FaInfoCircle className="text-red-500 animate-pulse" />
                {formik.errors.profilePic}
              </p>
            )} */}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 items-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-600 rounded-md shadow-lg text-white
                font-semibold transition duration-200 disabled:opacity-50
                disabled:cursor-not-allowed disabled:hover:bg-blue-700 text-sm xs:text-base"
              disabled={
                formik.isSubmitting ||
                !(formik.isValid && formik.dirty) ||
                isLoading ||
                isGoogleLoading
              }
            >
              {isLoading ? (
                <span className="flex items-center gap-2 justify-center">
                  <SiSpinrilla className="animate-spin text-lg" />
                  {t("Form.SigningUp")}
                </span>
              ) : (
                t("Form.SignUp")
              )}
            </button>
            <span>{t("Form.Or")}</span>
            <button
              disabled={isGoogleLoading || isLoading || formik.isSubmitting}
              type="button"
              className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md shadow-lg text-white
                font-semibold transition duration-200 flex items-center justify-center gap-2
                disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:opacity-70
                text-sm xs:text-base"
            >
              {isGoogleLoading ? (
                <>
                  <SiSpinrilla className="animate-spin text-lg" />{" "}
                  {t("Form.SigningInWithGoogle")}
                </>
              ) : (
                <>
                  <FcGoogle className="text-2xl" />
                  {t("Form.SignInWithGoogle")}
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center text-gray-300 text-sm xs:text-base">
          {t("Form.AlreadyHaveAccount")}{" "}
          <Link className="text-blue-300 hover:underline" href="/auth/login">
            {t("Form.Login")}
          </Link>
        </div>
      </div>
    </PageSection>
  );
};

export default RegisterFrom;
