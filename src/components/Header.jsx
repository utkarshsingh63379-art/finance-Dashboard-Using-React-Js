import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4">
      
      <h1 className="text-2xl font-semibold dark:text-white">
        Finance Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <button className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">
          This Month
        </button>

        <img src="https://i.pravatar.cc/40" className="rounded-full" />
      </div>
    </div>
  );
}