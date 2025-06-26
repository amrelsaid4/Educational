"use client";
const TestDarkMode = () => {
  const testClick = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <button onClick={testClick} className="rounded-full bg-primary w-10 h-10" />
  );
};

export default TestDarkMode;
