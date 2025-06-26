"use client";

import LocaleSwitcher from "@/_Components/LocaleSwitcher/LocaleSwitcher";
import TestDarkMode from "@/_Components/TestDarkMode";
import store from "@/lib/Redux/store";
import { AppProgressProviderProps } from "@bprogress/next";
import { ProgressProvider } from "@bprogress/next/app";
import { Provider } from "react-redux";

const progressProviderOptions: AppProgressProviderProps = {
  color: "#1d4ed8",
  height: "5px",
  startOnLoad: true,
};

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ProgressProvider {...progressProviderOptions}>
        <div className="absolute top-10 end-10 flex gap-2 z-50">
          <TestDarkMode />
          <LocaleSwitcher />
        </div>
        <main className="min-h-screen">{children}</main>
      </ProgressProvider>
    </Provider>
  );
};

export default App;
