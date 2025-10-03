import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Alert,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/bg.jpg";

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

export default function SignupPage() {
  const [formData, setFormData] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    // ✅ Save user in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    setError("");
    setSuccess("Signup successful ✅ Redirecting to login...");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
      }}
    >
      {/* Left side */}
      <Box
        sx={{
          flex: { xs: "unset", md: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #851d1dff, #211c1bff)",
          color: "#fff",
          p: { xs: 4, md: 8 },
          textAlign: "center",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: isMobile ? 120 : 180,
            marginBottom: 24,
          }}
        />
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{ fontWeight: "bold", lineHeight: 1.2 }}
        >
          SKH Enterprises
        </Typography>
      </Box>

      {/* Right side */}
      <Box
        sx={{
          flex: { xs: "unset", md: 1 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 4, md: 8 },
          backgroundColor: "#f5f5f5",
        }}
      >
        <Card sx={{ width: "100%", maxWidth: 400, borderRadius: 3, boxShadow: 5 }}>
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ color: "#851d1dff", fontWeight: "bold" }}
            >
              Sign Up
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
              />

              <TextField
                label="Email"
                type="email"
                name="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                label="Password"
                type="password"
                name="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  background: "linear-gradient(135deg, #851d1dff, #211c1bff)",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(135deg, #6b1515, #171413)",
                  },
                }}
              >
                Sign Up
              </Button>
            </form>

            <Box textAlign="center" mt={2}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link
                  component="button"
                  underline="hover"
                  sx={{ color: "#851d1dff" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
