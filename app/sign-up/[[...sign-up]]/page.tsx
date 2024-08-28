import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-center h-full">
      <SignUp afterSignOutUrl="/"  />
      </div>
    </section>
  );
}
