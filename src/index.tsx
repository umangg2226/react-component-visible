const Visible = ({
  when,
  fallBack,
  children,
}: {
  when: boolean;
  fallBack?: any;
  children?: any;
}): JSX.Element => {
  if (when) {
    return children || null;
  } else {
    return fallBack || null;
  }
};

export default Visible;
