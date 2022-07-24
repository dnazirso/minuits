export default function SwitchTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
}
