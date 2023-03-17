import RegisterForm from './RegisterForm';

type Props = { searchParams: { returnTo?: string | string[] } };

export default function RegisterPage(props: Props) {
  return (
    <div className="container-1">
      <div className="box-1">
        {' '}
        <RegisterForm returnTo={props.searchParams.returnTo} />
      </div>
    </div>
  );
}
