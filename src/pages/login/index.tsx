import Button from "@/components/Button";
import Input from "@/components/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import logo from "@/images/logo.png";
import login from "@/images/login.png";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
// import pRetry, {AbortError} from 'p-retry';
import { useToast } from "@/components/ui/use-toast"
import { ToastDemo } from "@/components/ui/toastButton";
const schema = yup.object({
  email: yup
    .string()
    .email("The email is not valid")
    .required("Your email is required"),
  password: yup.string().min(8).max(20).required("A password is required"),
});

type LoginForm = yup.InferType<typeof schema>;

export default function Login() {
  const { toast } = useToast()
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });




const onSubmit: SubmitHandler<LoginForm> = async (data) => {

  try {
    const response = await axios.post('/api/login', data); 
  
  
      toast({
        title: "login",
        description: "login successfuly",
      })
      console.log('err');
   
 
      router.push('/profile');
  
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: 'something wrong',
    })
    console.error('Error:', error);

  }
};


  // const onSubmit: SubmitHandler<LoginForm> = () => {
  //   // const res = await signIn('credentials', {
  //   //   ...data,
  //   //   redirect: false,
  //   // })
  //   // if (res?.error) {
  //   //   toast('error', res?.error)
  //   // } else {
  //   //   toast('success', 'Logged in successfully')
  //   //   router.push('/profile')
  //   // }
  // };
  
  // const notify = () => toast("Wow so easy!");

  return (
    <>
      <main className=" min-h-screen font-poppins flex justify-between bg-gradient-to-r from-thirdColor via-thirdColor to-purple-50">
  
        <div>
          <Image
            className="mt-8 ml-24"
            height={100}
            width={100}
            src={logo}
            alt="KEYBOX"
          />
          <div className="text-secondaryColor font-semibold text-xl mt-28 ml-12 space-y-4">
            <TypeAnimation
              sequence={[
                ">> HELLO WORLD !!!", // Types 'One'
                1000,
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
            />
            <TypeAnimation
              sequence={[
                ">> LEARN !!!", // Types 'One'
                1000,
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
            />
            <TypeAnimation
              sequence={[
                ">> GROW !!", // Types 'One'
                1000,
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
            />
          </div>
        </div>
        <form
          className="justify-center mt-8 h-[90vh] space-y-4 flex flex-col min-w-[35rem] p-16 bg-white rounded-md mr-24"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-4xl font-bold pb-8">
            <span className="text-gray-600 drop-shadow-md shadow-gray-600">
              L
            </span>
            <span className="text-gray-800 drop-shadow-md shadow-gray-800">
              O
            </span>
            <span className="text-gray-500 drop-shadow-md shadow-gray-400">
              G
            </span>
            <span className="text-gray-800 drop-shadow-md shadow-gray-800">
              I
            </span>
            <span className="text-primaryColor drop-shadow-md shadow-primaryColor">
              N
            </span>
          </div>
          <Input
            password={false}
            label="Email"
            error={errors.email?.message}
            inputProps={{
              placeholder: "Enter your email here",
              ...register("email"),
            }}
          />
          <Input
            password={true}
            label="Password"
            error={errors.password?.message}
            inputProps={{
              placeholder: "Enter your password",
              ...register("password"),
            }}
          />
          <span className="hover:cursor-pointer text-primaryColor self-end">
            Forgot password
          </span>
          <div className="px-8 flex justify-between pt-28">
            <span
              onClick={() => {
                router.push("plans");
              }}
              className="self-center hover:cursor-pointer text-primaryColor underline"
            >
              Create account
            </span>
            <Button className="w-40">Login</Button>
          </div>
        </form>
      </main>
      <div className="absolute bottom-0 left-52">
        <Image height={500} width={500} src={login} alt="KEYBOX" />
      </div>
    </>
  );
}