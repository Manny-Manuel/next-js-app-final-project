import LoginForm from './LoginForm';

type Props = { searchParams: { returnTo?: string | string[] } };

export default function LogInPage(props: Props) {
  console.log(props);
  return (
    <main>
      <div>
        <LoginForm returnTo={props.searchParams.returnTo} />
      </div>
    </main>
  );
}
