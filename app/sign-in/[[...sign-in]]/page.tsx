import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-center h-full">
        <SignIn afterSignOutUrl="/" />
      </div>
    </section>
  );
}
