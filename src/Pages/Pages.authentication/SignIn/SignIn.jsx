import { useForm } from "react-hook-form"
import { Link, useNavigate, useLocation } from "react-router-dom"
import toast from "react-hot-toast"
import { useState, useEffect } from "react"
import { TiHomeOutline } from "react-icons/ti"
import { IoWarningOutline } from "react-icons/io5"
import {
  Container,
  Header,
  Form,
  Loader,
  HomeButton,
  Input,
  ErrorText,
  WarningMessage,
  WarningIcon,
  WarningText,
  SubmitButton,
  SignUpLink,
} from "./SingIn.styles"

const SignIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  useEffect(() => {
    if (location.state?.fromPayment) {
      setWarningMessage(
        `Please click the link sent to your email ${location.state?.email} for account activation.`
      )
    }
  }, [location.state])

  const onSubmit = async (data) => {
    setLoading(true)

    let parkOwners = []
    try {
      const response = await fetch(
        "https://parkspotter-backened.onrender.com/accounts/parkowner-list/"
      )
      parkOwners = await response.json()
    } catch (error) {
      toast.error("Failed to fetch park owners")
      setLoading(false)
      return
    }

    const user = parkOwners.find(
      (owner) =>
        owner.park_owner_id.username === data.login ||
        owner.park_owner_id.email === data.login ||
        owner.mobile_no === data.login
    )
    if (user && !user.park_owner_id.is_active) {
      setWarningMessage(
        "Your account is inactive. Please activate your account or contact support."
      )
      setLoading(false)
      return
    }

    try {
      const response = await fetch(
        "https://parkspotter-backened.onrender.com/accounts/user_login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )

      const responseData = await response.json()
      console.log(responseData)

      if (responseData.non_field_errors) {
        toast.error(responseData.non_field_errors)
        setLoading(false)
        return
      }

      if (
        responseData.role === "park_owner" ||
        responseData.role === "employee"
      ) {
        localStorage.setItem("role", responseData.role)
        localStorage.setItem("token", responseData.token)
        localStorage.setItem("user_id", responseData.user_id)
        console.log(responseData.role)
        navigate("/dashboard")
      } else {
        const url = new URL(
          "https://development-parkspotter-pwa.netlify.app/home"
        )
        url.searchParams.append("token", responseData.token)
        url.searchParams.append("user_id", responseData.user_id)
        url.searchParams.append("role", responseData.role)

        window.location.href = url.toString()
      }
      toast.success("Login successful")
      setLoading(false)
    } catch (error) {
      toast.error("Invalid credentials")
      setLoading(false)
    }
  }

  return (
    <div>
      <Link to={"/"}>
        <HomeButton>
          <TiHomeOutline /> Home
        </HomeButton>
      </Link>
      <Container>
        <Header>Sign in</Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email/Mobile No/Username"
            type="text"
            {...register("login", { required: true })}
            aria-invalid={errors.login ? "true" : "false"}
          />
          {errors.login?.type === "required" && (
            <ErrorText role="alert">Username is required</ErrorText>
          )}

          <Input
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <ErrorText role="alert">{errors.password?.message}</ErrorText>
          )}

          {warningMessage && (
            <WarningMessage>
              <WarningIcon>
                <IoWarningOutline />
              </WarningIcon>
              <WarningText>{warningMessage}</WarningText>
            </WarningMessage>
          )}

          {loading ? (
            <Loader />
          ) : (
            <SubmitButton type="submit" value={"Sign In"} />
          )}

          <p>
            Don&apos;t have an account?{" "}
            <SignUpLink to={"/signup"}>Sign Up</SignUpLink>
          </p>
        </Form>
      </Container>
    </div>
  )
}

export default SignIn
