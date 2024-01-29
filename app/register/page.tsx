import RegisterForm from "@/components/register-form";

export default function Page() {
  return (
    <div className="flex flex-col w-2/6">
      <p className="text-4xl mb-10">Register</p>
      <RegisterForm />
    </div>
  );
}
