export default function Footer({ total, completedTodos }) {
  return (
    <footer className="footer footer-center p-4 bg-yellow-200 text-base-content rounded-t-xl shadow-md mt-6">
      <div>
        <p>
          <span className="font-bold">Completed:</span> {completedTodos} /{" "}
          <span className="font-bold">Total:</span> {total}
        </p>
      </div>
    </footer>
  );
}
