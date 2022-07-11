

export const Footer = (props) => {
  return (
    <footer
      className={`bg-${props.mode} text-${
        props.mode === "light" ? "dark" : "light"
      } py-3`}
    >
      <div className="text-center">
        Copyright &copy;
        <a href="https://github.com/ravi9694"> MyTodosList.com</a>
      </div>
    </footer>
  );
};
