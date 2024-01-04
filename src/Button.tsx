interface ButtonProps {
  text: string;
}
export const Button = (props: ButtonProps) => {
  const { text } = props;
  return <button type='button'>{text}</button>;
};
