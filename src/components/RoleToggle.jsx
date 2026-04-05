export default function RoleToggle({ role, setRole }) {
  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
}