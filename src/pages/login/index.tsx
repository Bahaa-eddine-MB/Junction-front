import Button from "@/components/Button";
import Input from "@/components/Input";
import SecondButton from "@/components/SecondButton";

export default function Login() {
  return (
    <>
      <main className="font-poppins">
        <div></div>
        <div>
          <span></span>
          <Button>Press me</Button>
          <Input
            password={true}
            label="Email"
            error={""}
            inputProps={{
              placeholder: "Enter your email here",
            }}
          />
          <SecondButton>test</SecondButton>
        </div>
      </main>
    </>
  );
}
